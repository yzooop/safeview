<template>
	<div class="zone">
		<div class="drag-container">
			<img class="table-image" src="../image/3.jpg" />
			<table
				ref="tableRef"
				class="drag-table"
				@mousedown="startDrag"
				@mouseup="endDrag"
				@mousemove="onDrag"
			>
				<tbody>
					<tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
						<td
							v-for="(col, colIndex) in row"
							:key="colIndex"
							:data-index="`${rowIndex}-${colIndex}`"
							:class="{ selected: isSelected(rowIndex, colIndex) }"
						>
							{{ col }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<Button
			label="설정"
			severity="help"
			size="small"
			variant="text"
			raised
			@click="showTable"
			style="margin-top: 30px"
		></Button>
	</div>
</template>

<script>
import Button from 'primevue/button'
export default {
	components: {
		Button,
	},
	data() {
		return {
			tableData: Array.from({ length: 24 }, () => Array(18).fill(null)),
			state: {
				startIndex: null,
				currentIndex: null,
				mode: false, // 드래그 모드
				selectedCells: [], // 드래그된 셀 저장 배열
			},
		}
	},
	methods: {
		convertToString() {
			// 선택된 셀 인덱스를 문자열로 변환하여 배열 형태로 반환
			return this.state.selectedCells.map(([row, col]) => `${row}-${col}`)
		},
		convertStringToIndex(index) {
			const [row, col] = index.split('-').map(Number)
			return [row, col]
		},
		startDrag(event) {
			if (event.target.dataset.index) {
				// 클릭한 셀이 data-index를 가지고 있으면
				this.state.mode = true // 드래그 모드 활성화
				this.state.startIndex = event.target.dataset.index // 드래그 시작 셀 인덱스 저장
				this.state.selectedCells = [this.convertStringToIndex(this.state.startIndex)] // 초기화 후 시작 셀 추가
			}
		},
		onDrag(event) {
			if (this.state.mode && event.target.dataset.index) {
				// 드래그 모드 true고 유효한 범위 내에서만
				this.state.currentIndex = event.target.dataset.index // 현재 마우스 아래에 있는 셀 인덱스

				// 드래그 범위의 시작과 끝
				const [startRow, startCol] = this.convertStringToIndex(this.state.startIndex)
				const [currentRow, currentCol] = this.convertStringToIndex(this.state.currentIndex)

				// 행과 열의 최소 최대
				const [minRow, maxRow] = [startRow, currentRow].sort((a, b) => a - b)
				const [minCol, maxCol] = [startCol, currentCol].sort((a, b) => a - b)

				// 선택된 셀 배열 업데이트
				this.state.selectedCells = []
				for (let row = minRow; row <= maxRow; row++) {
					for (let col = minCol; col <= maxCol; col++) {
						this.state.selectedCells.push([row, col])
					}
				}
			}
		},
		endDrag() {
			if (this.state.mode) {
				this.state.mode = false // 드래그 모드 비활성화
			}
		},
		isSelected(row, col) {
			return this.state.selectedCells.some(([r, c]) => r === row && c === col)
		},
		showTable() {
			const convertedData = this.convertToString()
			console.log('변환된 테이블 데이터:', convertedData)
		},
	},
}
</script>

<style scoped>
.zone {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.drag-container {
	width: 80%;
	height: 200px;
	position: relative;
	margin-top: 250px;
}

.table-image {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 1;
}

.drag-table {
	border-collapse: collapse;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 2;
	background-color: transparent;
}
.drag-table th,
.drag-table td {
	border: 1px solid rgba(244, 244, 244, 0.4);
	text-align: center;
	user-select: none; /* 텍스트 선택 방지 */
	cursor: pointer;
}

.selected {
	background-color: rgba(108, 56, 134, 0.5);
}
</style>
