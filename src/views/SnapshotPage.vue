<template>
	<div class="snapshot">
		<div class="snapshot-wrapper">
			<div>2024-12-09 11:14:23</div>
			<div class="image">
				<img :src="image" alt="Snapshot Image" />
			</div>
			<div class="snapshot-button">
				<Button label="REPORT" severity="secondary" size="small" variant="outlined" />
				<Button
					label="DISMISS"
					severity="secondary"
					size="small"
					variant="outlined"
					@click="navigateTo('/')"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import image from '../image/3.jpg'
import Button from 'primevue/button'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
	data() {
		return {
			image,
		}
	},
	components: {
		Button,
	},
	setup() {
		const router = useRouter()

		const navigateTo = (path) => {
			if (router) {
				router.push(path)
			}
		}

		onMounted(() => {
			// router는 비동기로 로드될 수 있으므로, useRouter가 존재할 때까지 대기
			if (!router) {
				console.error('Router is not yet initialized.')
			}
		})

		return {
			navigateTo,
		}
	},
}
</script>

<style scoped>
.snapshot {
	height: 100%;
	border: 30px solid rgba(225, 80, 80, 1);
	display: flex;
	justify-content: center;
	align-items: center;
}

.snapshot-wrapper {
	display: flex;
	flex-direction: column;
}

.image {
	display: flex;
	justify-content: center;
	align-items: center;
}

.image img {
	width: 400px;
	height: auto;
}

.snapshot-button {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	margin-top: 30px;
}
</style>
