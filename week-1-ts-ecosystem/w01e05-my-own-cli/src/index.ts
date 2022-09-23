import { faker } from "@faker-js/faker/locale/pl";
import prompts from "prompts";
import { productDetailsQuestions, productTypeQuestions } from "./questions";

(async () => {
  const { productType, generateData } = await prompts(productTypeQuestions);

  let productName, productQuantity, productPrice;

  if (generateData) {
    productName = faker.commerce.productName();
    productQuantity = faker.datatype.number({ min: 1, max: 100 });
    productPrice = faker.datatype.number({ min: 1 });
  } else {
    const productDetails = await prompts(productDetailsQuestions);
    productName = productDetails.productName;
    productQuantity = productDetails.productQuantity;
    productPrice = productDetails.productPrice;
  }

  const item = {
    id: faker.datatype.uuid(),
    name: productName,
    quantity: productQuantity,
    price: productPrice,
  };

  console.log("productType: ", productType);
  console.log("item: ", item);
})();
