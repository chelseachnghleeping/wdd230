
	const menuButton = document.querySelector('.menu-button')
	const menuButtonClose = document.querySelector('.menu-button-close')
	const menu = document.querySelector('nav')
	let menuOpen = false

	
	menuButton.addEventListener('click', function () {
		if (menuOpen) {
			menu.classList.add('showMenu')
		} else {
			menu.classList.remove('showMenu')
		}
		menuOpen = !menuOpen
	})

	menuButtonClose.addEventListener('click', function () {
		if (menuOpen) {
			menu.classList.add('showMenu')
		} else {
			menu.classList.remove('showMenu')
		}
		menuOpen = !menuOpen
	})

	function getTodaysDate() {
		const now = new Date()
		return new Intl.DateTimeFormat('en-UK', {
			dateStyle: 'full',
		}).format(now)
	}

	function getCurrentYear() {
		const now = new Date()
		return new Intl.DateTimeFormat('en-UK', {
			year: 'numeric',
		}).format(now)
	}

	const lastModified = () => {
		//get last modified date of file
		document.querySelector('p.lastUpdated').innerHTML =
			'Last Modified: ' + document.lastModified
	}

	const today = (document.querySelector('.today').innerHTML = getTodaysDate())
	document.querySelector('.copyright').innerHTML = getCurrentYear()
	lastModified()

