import { forwardRef } from 'react';

import { Text } from '../../components';
import type { ListItemComponent, ListItemProps } from './ListItem.types';

const ListItem: ListItemComponent = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
	return <Text {...props} ref={ref} as="li" />;
});

ListItem.displayName = 'ListItem';

export default ListItem;
