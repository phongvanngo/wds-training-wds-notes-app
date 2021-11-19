export function FormatDateTime(t) {
  let time = new Date(t);
  let dateString =
    ("0" + time.getHours()).slice(-2) +
    ":" +
    ("0" + time.getMinutes()).slice(-2) +
    ":" +
    ("0" + time.getSeconds()).slice(-2) +
    " " +
    time.getUTCFullYear() +
    "/" +
    ("0" + (time.getUTCMonth() + 1)).slice(-2) +
    "/" +
    ("0" + time.getUTCDate()).slice(-2);
  return dateString;
}

export function generateId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
