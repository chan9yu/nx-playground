const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode) {
	document.body.classList.add('theme-dark');
}

const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

mediaQueryList.addEventListener('change', e => {
	const isDarkMode = e.matches;

	if (isDarkMode) {
		document.body.className.add('theme-dark');
	} else {
		document.body.className.remove('theme-dark');
	}
});
