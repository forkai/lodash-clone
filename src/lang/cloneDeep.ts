const deepClone = (value:any) => {
	if (typeof value !== 'object' || value == null) return value
	let obj = Array.isArray(value) ? [] : {}
	for (let key in value) {
		obj[key] = deepClone(value[key])
	}
	return obj
}
