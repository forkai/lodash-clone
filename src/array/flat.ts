const flat = (arr:any[]):any[] => {
	let array = []
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			array.push(...flat(arr[i]))
		} else {
			array.push(arr[i])
		}
	}
	return array
}

// console.log(flat([1, [2, 3, [4]]]))
