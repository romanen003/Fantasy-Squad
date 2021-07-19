export const copyToClipboard = (value) => {
  const input = document.createElement('textarea');

  document.body.appendChild(input);
  input.value = value;
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
};
