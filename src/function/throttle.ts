// 一段时间只能执行一次
const throttle = (fn:()=>void, delay = 1000) => {
	let i: number
	return function (...args: any) {
		if (i) return
		i = setTimeout(() => {
			fn.apply(this, args)
			clearTimeout(i)
		}, delay)
	}
}