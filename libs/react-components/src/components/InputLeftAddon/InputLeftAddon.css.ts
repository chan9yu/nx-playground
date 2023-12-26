import { vars } from '@nx-playground/theme';
import { recipe } from '@vanilla-extract/recipes';

export const inputLeftAddonStyle = recipe({
	base: {
		margin: 0,
		border: 0,
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		right: '-2px',
		zIndex: 1,
		borderStyle: 'solid',
		borderWidth: '2px',
		borderColor: vars.colors.$scale.gray[300],
		borderRightColor: 'transparent',
		backgroundColor: vars.colors.$scale.gray[100]
	},
	variants: {
		size: {
			lg: {
				borderStartStartRadius: vars.box.radius.md,
				borderEndStartRadius: vars.box.radius.md,
				padding: '0 1rem',
				height: '3rem',
				fontSize: vars.typography.fontSize[18]
			},
			md: {
				borderStartStartRadius: vars.box.radius.base,
				borderEndStartRadius: vars.box.radius.base,
				padding: '0 1rem',
				height: '2.5rem',
				fontSize: vars.typography.fontSize[16]
			},
			sm: {
				borderStartStartRadius: vars.box.radius.base,
				borderEndStartRadius: vars.box.radius.base,
				padding: '0 0.75rem',
				height: '2rem',
				fontSize: vars.typography.fontSize[14]
			},
			xs: {
				borderStartStartRadius: vars.box.radius.sm,
				borderEndStartRadius: vars.box.radius.sm,
				padding: '0 0.5rem',
				height: '1.5rem',
				fontSize: vars.typography.fontSize[12]
			}
		}
	}
});
