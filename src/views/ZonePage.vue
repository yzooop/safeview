<script>
import DatePicker from 'primevue/datepicker'
import { ref } from 'vue'

export default {
	components: {
		DatePicker, // 로컬 등록
	},
	setup() {
		const buttondisplay = ref(null)
		const icondisplay = ref(null)
		const templatedisplay = ref(null)
		return { buttondisplay, icondisplay, templatedisplay }
	},
}
</script>

<template>
	<div>
		<div>
			Zone 페이지입니다.
			<InputText v-model="text" />
		</div>

		<div class="date">
			<DatePicker v-model="buttondisplay" showIcon fluid :showOnFocus="false" />
			<DatePicker v-model="icondisplay" showIcon fluid iconDisplay="input" />
			<DatePicker v-model="templatedisplay" showIcon fluid iconDisplay="input" timeOnly>
				<template #inputicon="slotProps">
					<i class="pi pi-clock" @click="slotProps.clickCallback" />
				</template>
			</DatePicker>
		</div>
	</div>
</template>

<style>
.date {
	display: flex;
}
</style>
