import { vars } from '@nx-playground/theme';
import { CSSProperties, forwardRef } from 'react';

import { Flex } from '../../components';
import type { ListComponent, ListProps } from './List.types';

const List: ListComponent = forwardRef<HTMLOListElement, ListProps>((props, ref) => {
	const { children, listStyleType = 'disc', spacing = '3', variant = 'unordered', ...rest } = props;

	const style: CSSProperties = {
		gap: vars.box.spacing[spacing],
		listStyleType: variant === 'unordered' ? (listStyleType as string) : 'decimal'
	};

	return (
		<Flex {...rest} ref={ref} as={variant === 'unordered' ? 'ul' : 'ol'} direction="column" style={style}>
			{children}
		</Flex>
	);
});

List.displayName = 'List';

export default List;
