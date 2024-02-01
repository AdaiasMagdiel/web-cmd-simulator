const container = document.querySelector('.container')

const inputContainer = document.querySelector('.inputContainer')
const inputContainerInput = document.querySelector('.inputContainer input')
const inputContainerSpan = document.querySelector('.inputContainer span')


const DOWNLOADS = {
	name: 'Downloads',
	parent: () => HOME,
	isDir: true,
	childs: [
		{
			isDir: false,
			name: 'music.mp3',
			isBinary: true,
			content: null
		},
		{
			isDir: false,
			name: 'movie.mp4',
			isBinary: true,
			content: null
		},
		{
			isDir: false,
			name: 'text.txt',
			isBinary: false,
			content: 'Lorem ipsum dolor sit amet.'
		},
	]
}

const DOCUMENTS = {
	name: 'Documents',
	parent: () => HOME,
	isDir: true,
	childs: [
		{
			name: 'empty-folder',
			parent: () => DOCUMENTS,
			isDir: true,
			childs: []
		},
		{
			isDir: false,
			name: 'work.txt',
			isBinary: false,
			content: 'This is a important work.'
		},
	]
}

const HOME = {
	name: 'Home',
	parent: () => null,
	isDir: true,
	childs: [
		DOWNLOADS,
		DOCUMENTS,
		{
			isDir: false,
			name: 'welcome.txt',
			isBinary: false,
			content: 'Welcome to my and your CMD. Enjoy!'
		}
	]
}

const actualDirectory = HOME

function makeDirPath() {
	const paths = []
	let dirRef = actualDirectory

	paths.push(dirRef.name)
	while (dirRef.parent() !== null) {
		dirRef = dirRef.parent()
		paths.push(dirRef.name)
		console.log(paths)
	}

	return `C:\\Users\\${paths.reverse().join('\\')}>`
}

function parseCommand(value) {
	const args = value.split(' ').map(item => item.trim())
	const arg = args.shift()

	const commands = {
		dir: command_dir,
		cls: command_cls
	}

	if (!(arg.toLowerCase() in commands)) {
		command_notFound(arg, args)
		return false
	}

	commands[arg.toLowerCase()](args)
	inputContainerInput.focus()
	inputContainer.scrollIntoView(false)

	return true
}


inputContainerInput.focus()
inputContainerInput.addEventListener('keydown', e => {
	if (e.key !== 'Enter') return

	parseCommand(e.currentTarget.value)
	e.currentTarget.value = ''
})

inputContainerSpan.innerText = makeDirPath()
