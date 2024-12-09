<script>
export default {
	props: {
		isModalOpen: Boolean,
	},
	methods: {
		close() {
			this.$emit('close')
		},
	},
}
</script>

<template>
	<div class="Modal" v-if="isModalOpen">
		안녕
		<button @click="close">닫기</button>
	</div>
</template>

<style>
.Modal {
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
}
</style>
