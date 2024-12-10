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
import { formatDateRange } from '@/util/dateUtil'
import DatePicker from 'primevue/datepicker'
import Button from 'primevue/button'
import DataTable from '../components/DataTable.vue'
import { ref } from 'vue'

export default {
	components: {
		DatePicker,
		Button,
		DataTable,
	},
	setup() {
		const dates = ref(null)

		const products = ref([
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
		])

		const handleClick = () => {
			const formattedDate = formatDateRange(dates.value)
			console.log('Selected Dates:', formattedDate)

			// TODO : 백엔드로 보낼 로직 짜기
		}

		return { dates, handleClick, products }
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
