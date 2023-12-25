import type { BaseButtonProps, UseButtonReturn } from '../useButton/useButton.types';

export type UseToggleButtonReturn<T> = UseButtonReturn<T> & {
	isSelected: boolean;
};

export type OverloadedToggleButtonFunction = {
	(props: BaseButtonProps<'button'>, isSelected?: boolean): UseToggleButtonReturn<HTMLButtonElement>;
	(props: BaseButtonProps<'a'>, isSelected?: boolean): UseToggleButtonReturn<HTMLAnchorElement>;
	(props: BaseButtonProps<'div'>, isSelected?: boolean): UseToggleButtonReturn<HTMLDivElement>;
	(props: BaseButtonProps<'input'>, isSelected?: boolean): UseToggleButtonReturn<HTMLInputElement>;
	(props: BaseButtonProps<'span'>, isSelected?: boolean): UseToggleButtonReturn<HTMLSpanElement>;
};
