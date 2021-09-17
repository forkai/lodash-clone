

// 一段时间只执行最后一次
const debounce = (fn:()=>void, delay = 1000) => {
	let i: number
	return function (...args: any) {
		if (i) clearTimeout(i)
		i = setTimeout(() => {
			fn.apply(this, args)
			clearTimeout(i)
		}, delay)
	}
}

