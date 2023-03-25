const toggleClass = (e, className) => {
	const classes = e.target.classList
    const isActive = classes.contains(className)
	console.log(classes)

	if (!isActive) {
		e.target.classList.add(className)
	} else {
		e.target.classList.remove(className)
	}
	}

	export { toggleClass }