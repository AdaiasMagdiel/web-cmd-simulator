function __stdout(container, lines) {
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i]

		const div = document.createElement('div')
		div.classList.add('flex')

		const span = document.createElement('span')

		span.appendChild(document.createTextNode(line))

		if (i === 0) div.classList.add('px-2', 'pt-2')

		div.appendChild(span)
		container.insertBefore(div, inputContainer)
	}
}

function command_notFound(arg, args) {
	const container = document.querySelector('.container')
	__stdout(container, [
		`${makeDirPath()} ${arg}`,
		`'${arg}' não é reconhecido como um comando interno`,
		'ou externo, um programa operável ou um arquivo em lotes.'
	])
}
