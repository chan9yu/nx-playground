import { KeyboardEvent } from 'react';
import type { BaseButtonProps, OverloadedButtonFunction } from './useButton.types';

const useButton: OverloadedButtonFunction = (props: any): any => {
	const {
		elementType = 'button', //
		isDisabled,
		isLoading,
		tabIndex,
		onKeyDown,
		type = 'button',
		...rest
	} = props;

	const disabled = isDisabled || isLoading;

	const handleKeyDown = (event: KeyboardEvent) => {
		onKeyDown?.(event);

		switch (event.key) {
			case ' ':
			case 'Spacebar':
			case '32':
				if (disabled) return;
				if (event.defaultPrevented) return;
				if (elementType === 'button') return;
				event.preventDefault();
				(event.currentTarget as HTMLElement).click();
				return;
			case 'Enter':
			case '13':
				if (disabled) return;
				if (event.defaultPrevented) return;
				if (elementType === 'input' && type !== 'button') return;
				event.preventDefault();
				(event.currentTarget as HTMLElement).click();
				return;
			default:
				return;
		}
	};

	const baseProps = {
		...rest,
		'data-loading': isLoading,
		tabIndex: disabled ? undefined : tabIndex ?? 0,
		onKeyDown: handleKeyDown
	};

	let additionalProps = {};

	switch (elementType) {
		case 'button':
			additionalProps = {
				type: type ?? 'button',
				disabled
			};
			break;
		case 'a':
			const { href, target, rel } = props as BaseButtonProps<'a'>;
			additionalProps = {
				role: 'button',
				href: disabled ? undefined : href,
				target: disabled ? undefined : target,
				rel: disabled ? undefined : rel,
				'area-disabled': isDisabled
			};
			break;
		case 'input':
			additionalProps = {
				role: 'button',
				type: props.type,
				disabled,
				'area-disabled': undefined
			};
			break;
		default:
			additionalProps = {
				role: 'button',
				type: type ?? 'button',
				'area-disabled': isDisabled
			};
			break;
	}

	return {
		buttonProps: {
			...baseProps,
			...additionalProps
		}
	};
};

export default useButton;
