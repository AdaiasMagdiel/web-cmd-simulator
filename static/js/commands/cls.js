function command_cls(args) {
	const container = document.querySelector('.container')
	const elements = Array.from(container.children).filter(item => !Array.from(item.classList).includes('inputContainer'))

	for (let element of elements) element.remove()
}
