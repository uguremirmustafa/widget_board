export function base64ToImgUrl(base64: string) {
  const mimeType = base64.match(/^data:(.*);base64,/)?.[1];

  if (!mimeType) {
    throw new Error('Invalid base64 string');
  }

  const byteCharacters = atob(base64.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  const blob = new Blob([byteArray], { type: mimeType });

  if (window.URL) {
    const url = URL.createObjectURL(blob);
    return url;
  } else {
    throw new Error('Your browser does not support creating object URLs');
  }
}

export function fileToBase64(file: File): string {
  const reader = new FileReader();
  let str = '';

  reader.onload = () => {
    const base64String = reader.result as string;
    str = base64String; // This will output the Base64 representation of the file
  };

  reader.readAsDataURL(file);

  return str;
}

export function dataURLtoFile(url: string, filename: string, mimeType?: string) {
  if (url.startsWith('data:')) {
    const arr = url.split(',');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[arr.length - 1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], filename, { type: mime || mimeType });
    return Promise.resolve(file);
  }
  return fetch(url)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], filename, { type: mimeType }));
}

export function downloadFile(url: string, fileName: string) {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);

  link.click();

  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 0);
}

interface FileDetails {
  name: string;
  size: number;
  type: string;
  sizeInKb: string;
  sizeInMB: number;
}

export function getFileDetails(file: File): FileDetails {
  const fileSizeInBytes = file.size;
  const fileSizeInKB = fileSizeInBytes / 1024; // Convert bytes to KB
  const fileSizeInMB = fileSizeInKB / 1024; // Convert bytes to KB

  const details: FileDetails = {
    name: file.name,
    sizeInKb: `${fileSizeInKB.toFixed(2)} kb`,
    size: fileSizeInKB,
    sizeInMB: fileSizeInMB,
    type: file.type || 'Unknown',
  };

  return details;
}
