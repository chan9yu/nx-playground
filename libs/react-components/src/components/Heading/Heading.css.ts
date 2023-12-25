import { classes } from '@nx-playground/theme';
import { recipe } from '@vanilla-extract/recipes';

export const headingStyle = recipe({
	variants: {
		fontSize: {
			...classes.typography.heading
		},
		defaultVariants: {
			fontSize: '4xl'
		}
	}
});
