const container = document.querySelector('.container')

const inputContainer = document.querySelector('.inputContainer')
const inputContainerInput = document.querySelector('.inputContainer input')
const inputContainerSpan = document.querySelector('.inputContainer span')

const HISTORY = []
const MAX_HISTORY = 200
let HISTORY_INDEX = -1

// Functions

function parseCommand(value) {
	const args = value.split(' ').map(item => item.trim())
	const arg = args.shift()

	HISTORY.push(arg)

	if (HISTORY.length > MAX_HISTORY) {
		while (HISTORY.length > MAX_HISTORY) HISTORY.shift()
	}

	HISTORY_INDEX = HISTORY.length - 1

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


// Events and Methods

inputContainerInput.focus()
inputContainerInput.addEventListener('keydown', e => {
	const key = e.key
	const value = e.currentTarget.value

	if (key === 'Enter') {
		parseCommand(value)
		e.currentTarget.value = ''

	} else if ((key === 'ArrowUp' || key === 'ArrowDown') && HISTORY.length > 0) {
		console.log(HISTORY, HISTORY_INDEX)

		if (key === 'ArrowUp' && HISTORY_INDEX < 0) return
		if (key === 'ArrowDown' && HISTORY_INDEX >= HISTORY.length) return

		e.currentTarget.value = HISTORY[HISTORY_INDEX]
		
		if (key === 'ArrowUp') {
			HISTORY_INDEX--
			if (HISTORY_INDEX < 0) HISTORY_INDEX = 0
		}
		if (key === 'ArrowDown') {
			HISTORY_INDEX++
			if (HISTORY_INDEX > HISTORY.length - 1) HISTORY_INDEX = HISTORY.length - 1
		}

	}
})

inputContainerSpan.innerText = makeDirPath()
