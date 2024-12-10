<template>
	<div :class="{ safe: isSafe, alarm: !isSafe }">
		<div class="container">
			<button @click="toggle">클릭</button>
			<div class="logo">
				<img :src="isSafe ? safeImg : alarmImg" alt="Logo" />
			</div>
			<h1>{{ isSafe ? 'Safe' : 'Alarm' }} Mode</h1>
			<div class="safe-button-container" v-if="isSafe">
				<Button
					label="zone set"
					icon="pi pi-cog"
					severity="secondary"
					size="large"
					varient="text"
					raised
					rounded
					@click="navigatoTo('/zone')"
				/>
				<Button
					label="history"
					icon="pi pi-star"
					severity="secondary"
					size="large"
					varient="text"
					raised
					rounded
					@click="navigatoTo('/history')"
				/>
			</div>
			<div class="alarm-popup" v-if="!isSafe">
				<div class="alarm-icon-box">
					<div class="alarm-icon">🚨</div>
					<div class="alarm-text">
						<h2>Motion Detected</h2>
						<h3>do you want to see?</h3>
					</div>
				</div>
				<div class="alarm-button-container">
					<Button
						label="YES"
						size="normal"
						severity="success"
						variant="text"
						raised
						@click="navigatoTo('/snapshot')"
					/>
					<Button
						label="NO"
						size="normal"
						severity="danger"
						variant="text"
						raised
						@click="isSafe = true"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import safeImg from '../image/safe.png'
import alarmImg from '../image/alarm.png'
import { Button } from 'primevue'
import { useRouter } from 'vue-router'

const isSafe = ref(true)

const router = useRouter()
const navigatoTo = (path) => {
	router.push(path)
}

const toggle = () => {
	isSafe.value = !isSafe.value
}
</script>

<style scoped>
.safe {
	background: linear-gradient(243deg, rgba(103, 231, 153, 1) 0%, rgba(74, 208, 126, 1) 100%);
	width: 100%;
	height: 100%;
	padding: 20px;
}

.alarm {
	background: linear-gradient(49deg, rgba(225, 80, 80, 1) 0%, rgba(249, 116, 116, 1) 100%);
	width: 100%;
	height: 100%;
	padding: 20px;
}

.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	margin-top: 270px;
	margin-bottom: 100px;
}

.logo {
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background-color: white;
	border-radius: 40px;
}

.logo img {
	width: 70%;
	height: auto;
	object-fit: cover;
}

.safe-button-container {
	display: flex;
	gap: 30px;
	margin-top: 80px;
}

.alarm-popup {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 80%;
	height: auto;
	background-color: rgb(255, 255, 255);
	border-radius: 20px;
	box-shadow: 7px 5px 12px -1px rgba(69, 69, 69, 0.84);
	-webkit-box-shadow: 7px 5px 12px -1px rgba(69, 69, 69, 0.84);
	-moz-box-shadow: 7px 5px 12px -1px rgba(69, 69, 69, 0.84);
	border: 2px solid rgb(252, 184, 184);
}

.alarm-icon-box {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	padding: 20px;
}

.alarm-icon {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 56px;
	height: 56px;
	border-radius: 12px;
	background: rgb(252, 184, 184);
	font-size: 30px;
}

.alarm-text {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
	margin-left: 30px;
}

.alarm-text h2 {
	color: rgb(0, 0, 0);
	margin: 0;
	font-size: 22px;
}

.alarm-text h3 {
	color: gray;
	margin: 0;
	font-size: 15px;
	font-weight: 400;
}

.alarm-button-container {
	display: flex;
	gap: 30px;
	justify-content: center;
	margin-bottom: 20px;
}
</style>
