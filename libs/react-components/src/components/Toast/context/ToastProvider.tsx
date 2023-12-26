import { PropsWithChildren, useRef, useState } from 'react';

import { Toast, ToastContainer, ToastPayload } from '../components';
import { ToastConfigProps, ToastContext } from './ToastContext';

export const ToastProvider = ({ children }: PropsWithChildren<{}>) => {
	const [toastPayload, setToastPayload] = useState<ToastPayload | undefined>(undefined);

	const timeoutRef = useRef<number | undefined>(undefined);

	const handleToast = (toastProps: ToastConfigProps) => {
		const { duration = 3000 } = toastProps;

		if (toastPayload) {
			setToastPayload(undefined);
			clearTimeout(timeoutRef.current);
			timeoutRef.current = undefined;
		}

		setToastPayload(toastProps.payload);
		timeoutRef.current = setTimeout(() => {
			setToastPayload(undefined);
			timeoutRef.current = undefined;
		}, duration);
	};

	return (
		<ToastContext.Provider value={{ toast: handleToast }}>
			{children}
			<ToastContainer>{toastPayload && <Toast {...toastPayload} />}</ToastContainer>
		</ToastContext.Provider>
	);
};
