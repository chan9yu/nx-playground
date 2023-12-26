import type { ComponentPropsWithoutRef } from 'react';

type UseSelectExtendsProps = Omit<ComponentPropsWithoutRef<'select'>, 'disabled'>;

export type UseSelectProps = UseSelectExtendsProps & {
	isDisabled?: boolean;
	isInvalid?: boolean;
	isRequired?: boolean;
};

export type UseSelectReturn = {
	selectProps: ComponentPropsWithoutRef<'select'> & {
		'data-disabled': boolean;
		'data-invalid': boolean;
		'aria-invalid': boolean;
		'aria-required': boolean;
	};
};
