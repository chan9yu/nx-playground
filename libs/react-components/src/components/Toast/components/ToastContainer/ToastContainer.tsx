import { PropsWithChildren } from 'react';
import { toastContainerStyle } from './ToastContainer.css';

const ToastContainer = ({ children }: PropsWithChildren) => {
	return (
		<div id="toast-container" tabIndex={-1} className={toastContainerStyle}>
			{children}
		</div>
	);
};

export default ToastContainer;
