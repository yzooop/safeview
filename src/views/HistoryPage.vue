<template>
	<div class="zone">
		<div class="wrapper">
			<div class="title">Please choose dates to look up.</div>
			<div class="date">
				<DatePicker
					v-model="dates"
					showIcon
					selectionMode="range"
					:manualInput="false"
					inputId="over_label"
				/>
				<Button
					label="click"
					severity="success"
					size="small"
					variant="outlined"
					@click="handleClick"
				/>
			</div>
			<DataTable :products="products" style="margin-top: 70px" />
		</div>
	</div>
</template>

<script>
import DatePicker from 'primevue/datepicker'
import Button from 'primevue/button'
import DataTable from '../components/DataTable.vue'

export default {
	components: {
		DatePicker,
		Button,
		DataTable,
	},
	data() {
		return {
			dates: null,
			products: [
				{ date: '2024-12-09 MON', snapshot: '사진보기', status: 'DISMISS', station: '' },
				{
					date: '2024-12-09 MON',
					snapshot: '사진보기',
					status: 'REPORT',
					station: '강남경찰서',
				},
				{ date: '2024-12-09 MON', snapshot: '사진보기', status: 'REPORT', station: '' },
				{
					date: '2024-12-09 MON',
					snapshot: '사진보기',
					status: 'DISMISS',
					station: '강서경찰서',
				},
				{ date: '2024-12-09 MON', snapshot: '사진보기', status: 'REPORT', station: '' },
			],
		}
	},
	methods: {
		handleClick() {
			const startOffset = new Date(
				this.dates[0].getTime() - new Date().getTimezoneOffset() * 60000,
			)
				.toISOString()
				.split('T')[0]
			const endOffset = new Date(
				this.dates[1].getTime() - new Date().getTimezoneOffset() * 60000,
			)
				.toISOString()
				.split('T')[0]

			const formattedDates = {
				start: startOffset,
				end: endOffset,
			}

			console.log(formattedDates)
			// TODO: 백엔드로 보낼 로직 추가
		},
	},
}
</script>

<style>
.zone {
	padding: 20px;
}

.wrapper {
	padding-top: 100px;
}

.date {
	display: flex;
	gap: 10px;
	justify-content: center;
	margin-top: 10px;
}

.p-datepicker {
	width: 250px;
}

.title {
	color: gray;
	margin-left: 80px;
}
</style>
