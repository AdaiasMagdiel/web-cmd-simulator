function __stdout(container, lines) {
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i]

		const div = document.createElement('div')
		div.classList.add('flex')

		const span = document.createElement('span')

		if (line === '') span.innerHTML = '&nbsp;'
		else span.appendChild(document.createTextNode(line))

		if (i === 0) div.classList.add('px-2', 'pt-2')

		div.appendChild(span)
		container.insertBefore(div, inputContainer)
	}
}

function command_dir(args) {
	const container = document.querySelector('.container')
	const output = []

	if (args.length === 0) {
		output.push(`${makeDirPath()} dir`)

		output.push('')
		output.push(` Pasta de ${makeDirPath().slice(0, -1)}`)
		output.push('')

		for (item of actualDirectory.childs) {
			const type = item.isDir ? '<DIR>' : '     '

			output.push(`31/01/2024  19:14    ${type}        ${item.name}`)
		}

		const totalDirs = actualDirectory.childs.filter(item => item.isDir).length
		const totalFiles = actualDirectory.childs.filter(item => !item.isDir).length

		output.push(`             ${totalDirs} Pasta(s) e ${totalFiles} arquivo(s)`)
	}

	__stdout(container, output)
}
