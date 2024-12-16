export const formatDateRange = (dateRange) => {
	if (!dateRange || dateRange.length !== 2) {
		return null
	}

	const start = dateRange[0].toISOString().split('T')[0]
	const end = dateRange[1].toISOString().split('T')[0]

	return { start, end }
