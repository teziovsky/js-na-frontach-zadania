const componentId = 'best-sale'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

// Ta wartość powinna pochodzić z kolekcji ordersFakeData
fetch("http://localhost:3001/orders").then((response) => {
  response.json().then((orders) => {
    const bestSale = orders.reduce((acc, order) => acc.sale > order.sale ? acc : order);
    content.innerHTML = parseFloat(bestSale.sale).toFixed(2);
  });
});
