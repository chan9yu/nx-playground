import { createContext, useContext } from 'react';
import type { ToastPayload } from '../components';

export type ToastConfigProps = {
	payload: ToastPayload;
	duration?: number;
};

export type ToastContextType = {
	toast: (toastProps: ToastConfigProps) => void;
};

export const ToastContext = createContext<ToastContextType>({
	toast: () => {}
});

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a <ToastProvider />');
	}

	return context;
};
