export const checkWebln = async () => {
  if (window.webln) {
    await window.webln.enable()
    return true
  } else {
    return false;
  }
};
