export function getIdFromURL(url) {
  const id = url.split("/").slice(-2, -1)[0];
  return id;
}
