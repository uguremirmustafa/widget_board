import toast from 'react-hot-toast';

export function copyToClipboard(str: string) {
  try {
    navigator.clipboard.writeText(str);
    toast.success(`copied to clipboard:\n ${str.slice(0, 20)}`);
  } catch (error) {
    toast.error(`something went wrong while copy`);
  }
}
