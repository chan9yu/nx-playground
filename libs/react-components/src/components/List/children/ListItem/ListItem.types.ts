import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { TextProps } from '../../../Text';

export type ListItemComponent = ForwardRefExoticComponent<Omit<ListItemProps, 'ref'> & RefAttributes<HTMLLIElement>>;

export type ListItemProps = TextProps;
