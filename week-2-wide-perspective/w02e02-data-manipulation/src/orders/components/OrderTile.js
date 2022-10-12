export function orderTile(tileId, contentValue) {
  const mountPoint = document.querySelector(`[data-tile="${tileId}"]`);
  const content = mountPoint.querySelector("[data-content]");

  // Ta wartość powinna pochodzić z kolekcji ordersFakeData
  // Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
  content.innerHTML = contentValue;
}