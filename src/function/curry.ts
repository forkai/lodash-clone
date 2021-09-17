const curry = (fn: (params: any) => any, ...args: any[]) =>
	args.length >= fn.length
	?fn(...args)
	: (rest: any) => curry(fn, ...args, ...rest)
