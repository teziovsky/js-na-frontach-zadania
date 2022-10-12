function makeLiElement({ orderDate, orderNumber }) {
  const li = document.createElement("li");
  li.className = "panel-block";
  // Dodaj jakieś ładne formatowanie daty!
  li.innerText = `${orderNumber} | ${orderDate}`;
  return li;
}

export function annualOrderTile(tileId, year, orders) {
  const mountPoint = document.querySelector(`[data-tile="${tileId}"]`);
  const subTitle = mountPoint.querySelector("[data-subtitle]");
  const panel = mountPoint.querySelector("[data-panel]");

  // Uważaj na odfiltrowanie wg. roku (2022)
  subTitle.textContent = `Year ${year}`;
  panel.innerHTML = "";

  // Ta wartość powinna pochodzić z kolekcji ordersFakeData
  // Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
  orders.forEach((order) => {
    panel.appendChild(makeLiElement(order));
  });
}