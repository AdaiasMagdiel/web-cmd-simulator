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

let actualDirectory = HOME

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
