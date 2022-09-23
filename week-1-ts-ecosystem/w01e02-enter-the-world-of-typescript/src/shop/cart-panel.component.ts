import { article, p } from "@/framework/dom-creators";
import { Item } from "@/models/item";
import { cartItemSum } from "@/shop/cart-item-sum.component";
import { cartItem } from "@/shop/cart-item.component";

export function cartPanel({ heading = "Cart Items", items }: Cart) {
  const $heading = p("panel-heading");
  $heading.innerText = heading;
  const $article = article("panel is-primary my-6 w-75 mx-auto");

  $article.append($heading);
  let sum = 0;
  items.forEach((item) => {
    sum += item.price.value;
    $article.appendChild(cartItem(item));
  });
  $article.append(cartItemSum({ value: sum, currency: "PLN" }));

  return $article;
}
