<template>
	<div class="snapshot">
		<div class="snapshot-wrapper">
			<div>{{ snapshotTime }}</div>
			<div class="image">
				<img :src="imageURL" alt="Snapshot Image" />
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
import Button from 'primevue/button'
import axios from 'axios'

export default {
	data() {
		return {
			imageURL: null,
			snapshotTime: null,
		}
	},
	components: {
		Button,
	},
	methods: {
		navigateTo(path) {
			this.$router.push(path)
		},

		// 사진을 가져오는 메서드
		async fetchSnapshot() {
			try {
				const id = new URLSearchParams(window.location.search).get('id')
				const res = await axios.get(`http://localhost:8000/api/alarm/snapshot/${id}`)
				this.imageURL = `http://localhost:8000/attachments/${res.data.time}.jpg`
				this.snapshotTime = res.data.time
			} catch (error) {
				console.error('Error fetching snapshot:', error)
			}
		},
	},
	mounted() {
		this.fetchSnapshot()
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
