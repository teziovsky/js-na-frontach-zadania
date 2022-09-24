import { generateProducts } from "./steps/generate-products.mjs";
import { getProductDetails } from "./steps/get-product-details.mjs";
import { getProductType } from "./steps/get-product-type.mjs";
import { askForGenerateData } from "./steps/ask-for-generate-data.mjs";
import { welcomeMessage } from "./steps/welcome-message.mjs";

(async () => {
  // Show the welcome message
  await welcomeMessage();

  // Get the product type
  const { type } = await getProductType();

  // Ask to generate data
  const { generateData } = await askForGenerateData();

  if (generateData) {
    // Generate the products
    const products = await generateProducts(type);

    // Show the generated products
    console.table(products);
  }

  if (!generateData) {
    // Ask for the product details
    const product = await getProductDetails(type);

    // Show the product details
    console.table(product);
  }
})();
