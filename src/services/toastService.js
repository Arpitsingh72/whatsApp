import { toast } from 'react-hot-toast';

export const showSuccess = (msg) => toast.success(msg, { position: 'top-center' });
export const showError = (msg) => toast.error(msg, { position: 'top-center' });
export const showInfo = (msg) => toast(msg, { position: 'top-center' });
