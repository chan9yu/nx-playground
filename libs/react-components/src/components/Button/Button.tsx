import { vars } from '@nx-playground/theme';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import { CSSProperties, forwardRef } from 'react';

import { useButton } from '../../hooks';
import {
	activeColorVariant,
	buttonStyle,
	enableColorVariant,
	hoverColorVariant,
	spanStyle,
	spinnerStyle
} from './Button.css';
import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		color = 'gray',
		children,
		isDisabled = false,
		isLoading = false,
		leftIcon,
		rightIcon,
		size = 'md',
		variant = 'solid',
		...rest
	} = props;

	const endableColor = vars.colors.$scale[color][500];
	const hoverColor = variant === 'solid' ? vars.colors.$scale[color][600] : vars.colors.$scale[color][50];
	const activeColor = variant === 'solid' ? vars.colors.$scale[color][700] : vars.colors.$scale[color][100];

	const className = clsx([buttonStyle({ size, variant }), rest.className]);
	const style: CSSProperties = {
		...assignInlineVars({
			[enableColorVariant]: endableColor,
			[hoverColorVariant]: hoverColor,
			[activeColorVariant]: activeColor
		}),
		...rest.style
	};

	const { buttonProps } = useButton({
		...rest,
		className,
		style
	});

	return (
		<button {...buttonProps} ref={ref}>
			{isLoading && <div className={spinnerStyle({ size })} />}
			{leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
			<span>{children}</span>
			{rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
		</button>
	);
});

Button.displayName = 'Button';

export default Button;
