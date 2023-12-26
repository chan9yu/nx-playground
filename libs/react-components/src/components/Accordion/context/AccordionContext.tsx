import { createContext, useContext } from 'react';

export type AccordionContextType = {
	activeItems: string[];
	setActiveItem: (item: string) => void;
};

export const AccordionContext = createContext<AccordionContextType>({
	activeItems: [],
	setActiveItem: () => {}
});

export const useAccordionContext = () => {
	const context = useContext(AccordionContext);
	if (context === undefined) {
		throw new Error('useAccordionContext must be used within a <Accordion />');
	}

	return context;
};
