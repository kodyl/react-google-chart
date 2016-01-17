export default function generateId ({ len = 6, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', str = '' } = {}) {
  const charsetLength = charset.length;
  for( let i = len; i; i-- ) {
    str += charset.charAt(Math.floor(Math.random() * charsetLength));
  }
  return str;
}
