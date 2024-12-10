<template>
	<DataTable :value="products" tableStyle="min-width: 300px;" style="font-size: 12px">
		<Column field="date"></Column>
		<Column field="snapshot" style="width: 100px"></Column>
		<Column field="status" style="width: 80px">
			<template #body="slotProps">
				<Tag
					:value="slotProps.data.status"
					:severity="getSeverity(slotProps.data)"
					style="font-size: 10px"
				/>
			</template>
		</Column>
		<Column field="station" style="width: 95px"></Column>
	</DataTable>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'

export default {
	components: {
		DataTable,
		Column,
		Tag,
	},
	props: {
		products: {
			type: Array,
			required: true,
		},
	},
	methods: {
		getSeverity(product) {
			switch (product.status) {
				case 'REPORT':
					return 'danger'
				case 'DISMISS':
					return 'success'
				default:
					return null
			}
		},
	},
}
</script>

<style>
.p-datatable {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
