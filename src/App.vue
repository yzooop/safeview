<script setup>
import Modal from './components/ModalComponent.vue'

let isModalOpen = false

const toggleModal = () => {
	isModalOpen = !isModalOpen
}

const closeModal = () => {
	isModalOpen = false
}
</script>

<template>
	<button @click="toggleModal">열기</button>
	<p>모달 : {{ isModalOpen }}</p>
	<Modal v-if="isModalOpen" @close="closeModal"></Modal>
</template>
