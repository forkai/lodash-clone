function delay(wait:number) {
	return new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, wait)
	})
}
