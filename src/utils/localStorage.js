export function saveToLocalStorage(key, value) {
  const modifiedValue = JSON.stringify(value);
  localStorage.setItem(key, modifiedValue);
}

export function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  const formatedValue = JSON.parse(value);
  return formatedValue;
}
