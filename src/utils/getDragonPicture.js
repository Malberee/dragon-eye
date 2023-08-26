export const getDragonPicture = (name) => {
	const formattedName = name.toLowerCase().split(' ')

	return `./images/dragons/${formattedName.join('_')}.png`
}
