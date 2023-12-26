import { toastStyle } from './Toast.css';
import type { ToastPayload } from './Toast.types';

const Toast = (props: ToastPayload) => {
	const { message } = props;

	return <div className={toastStyle}>{message}</div>;
};

export default Toast;
