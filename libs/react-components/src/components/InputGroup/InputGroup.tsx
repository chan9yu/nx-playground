import { clsx } from 'clsx';
import { CSSProperties, Children, cloneElement, forwardRef, isValidElement } from 'react';

import { inputGroupStyle } from './InputGroup.css';
import type { InputGroupProps } from './InputGroup.types';

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>((props, ref) => {
	const { children, color = 'gray', size = 'md', ...rest } = props;

	const className = clsx([inputGroupStyle, rest.className]);

	const inputStyle: CSSProperties = {};

	const childrenWithProps = Children.toArray(children);

	childrenWithProps.forEach(child => {
		if (isValidElement(child)) {
			const childType = child.type as { displayName?: string | undefined };
			if (childType.displayName === 'InputLeftAddon') {
				inputStyle.borderStartStartRadius = 0;
				inputStyle.borderEndStartRadius = 0;
			}
		}
	});

	const inputGroupChildren = childrenWithProps.map(child => {
		if (isValidElement(child)) {
			const childType = child.type as { displayName?: string | undefined };
			if (childType.displayName === 'Input') {
				return cloneElement(child, {
					...child.props,
					color,
					size,
					style: {
						...child.props.style,
						...inputStyle
					}
				});
			}

			return cloneElement(child, { ...child.props, color, size });
		} else {
			return null;
		}
	});

	return (
		<div {...rest} ref={ref} className={className}>
			{inputGroupChildren}
		</div>
	);
});

InputGroup.displayName = 'InputGroup';

export default InputGroup;
