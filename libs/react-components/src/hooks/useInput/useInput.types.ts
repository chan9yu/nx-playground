import { ComponentPropsWithoutRef } from 'react';

type UseInputExtendsProps = Omit<ComponentPropsWithoutRef<'input'>, 'disabled' | 'readOnly'>;

export type UseInputProps = UseInputExtendsProps & {
	isDisabled?: boolean;
	isReadOnly?: boolean;
	isRequired?: boolean;
	isInvalid?: boolean;
	value?: string;
	onChange?: string;
};

export type UseInputResult = {
	inputProps: ComponentPropsWithoutRef<'input'> & {
		'data-disabled': boolean;
		'data-invalid': boolean;
		'aria-invalid': boolean;
		'aria-required': boolean;
	};
	valueCount: number;
};
