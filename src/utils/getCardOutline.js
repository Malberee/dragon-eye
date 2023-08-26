export const getCardOutline = (classes) => {
	console.log(classes)
	if (classes.length > 1) {
		console.log(`${classes[0]}_${classes[1]}`)
		return `${classes[0]}_${classes[1]}`
	}
	console.log(classes)
	return classes[0]
}
