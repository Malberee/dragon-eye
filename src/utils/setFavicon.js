export const setFavicon = (emoji) => {
	const canvas = document.createElement('canvas')
	canvas.height = 32
	canvas.width = 32

	const ctx = canvas.getContext('2d')
	ctx.font = '28px serif'
	ctx.fillText(emoji, -2, 24)

	const favicon = document.querySelector('link[rel=icon]')
	if (favicon) {
		favicon.href = canvas.toDataURL()
	}
}
