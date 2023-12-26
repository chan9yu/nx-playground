import { ChangeEvent, useState } from 'react';
import type { UseInputProps, UseInputResult } from './useInput.types';

const useInput = (props: UseInputProps): UseInputResult => {
	const {
		isDisabled = false,
		isInvalid = false,
		isReadOnly = false,
		isRequired = false,
		defaultValue,
		value,
		onChange,
		...rest
	} = props;

	const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? '');

	const isCountrolled = value !== undefined && onChange !== undefined;
	const currentValue = isCountrolled ? value : uncontrolledValue;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
		isCountrolled ? onChange(event) : setUncontrolledValue(event.target.value);

	return {
		inputProps: {
			...rest,
			defaultValue,
			value: currentValue,
			onChange: handleChange,
			disabled: isDisabled,
			readOnly: isReadOnly,
			'data-disabled': isDisabled,
			'data-invalid': isInvalid,
			'aria-invalid': isInvalid,
			'aria-required': isRequired
		},
		valueCount: currentValue.toString().length
	};
};

export default useInput;
