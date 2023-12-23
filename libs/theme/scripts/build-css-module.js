import fs from 'fs';
import * as theme from '../dist/esm/index.js';

function toCssCasting(str) {
	return str
		.replace(/([a-z])(\d)/, '$1-$2')
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase();
}

function generateColorsCssVariables(selector, colorValue) {
	const cssVariables = Object.entries(colorValue)
		.map(([mainKey, mainValue]) =>
			Object.entries(mainValue)
				.map(([subKey, subValue]) => `--${toCssCasting(mainKey)}-${toCssCasting(subKey)}: ${subValue};`)
				.join('\n')
		)
		.join('\n');

	return `${selector} {\n${cssVariables}\n}`;
}

function generateThemeCssVariables() {
	const cssString = [];

	Object.entries(theme.vars).forEach(([key, value]) => {
		if (key === 'colors') {
			Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
				if (colorKey === 'light') {
					const selector = ':root';
					const lightColorCssString = generateColorsCssVariables(selector, colorValue);

					return cssString.push(lightColorCssString);
				}

				if (colorKey === 'dark') {
					const selector = ':root .theme-dark';
					const darkColorCssString = generateColorsCssVariables(selector, colorValue);

					return cssString.push(darkColorCssString);
				}
			});

			return;
		}

		const selector = ':root';
		const colorCssString = generateColorsCssVariables(selector, value);

		return cssString.push(colorCssString);
	});

	return cssString;
}

function generateThemeCssClasses() {
	const cssString = [];

	Object.entries(theme.classes).forEach(([_, value]) => {
		const cssClasses = Object.entries(value)
			.map(([mainKey, mainValue]) =>
				Object.entries(mainValue)
					.map(([subKey, subValue]) => {
						const className = `.${toCssCasting(mainKey)}${toCssCasting(subKey)}`;
						const styleProperties = Object.entries(subValue)
							.map(([styleKey, styleValue]) => `${toCssCasting(styleKey)}: ${styleValue};`)
							.join('\n');

						return `${className} {\n${styleProperties}\n}`;
					})
					.join('\n')
			)
			.join('\n');

		cssString.push(cssClasses);
	});

	return cssString;
}

function generateThemeCss() {
	const variables = generateThemeCssVariables();
	const classes = generateThemeCssClasses();

	fs.writeFileSync('dist/themes.css', [...variables, ...classes].join('\n'));
}

generateThemeCss();
