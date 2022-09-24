import { Product } from "./models/product";
import { generateProducts } from "./steps/generate-products.mjs";
import { getProductDetails } from "./steps/get-product-details.mjs";
import { getProductType } from "./steps/get-product-type.mjs";
import { askForGenerateData } from "./steps/ask-for-generate-data.mjs";
import { saveToFile } from "./steps/save-to-file.mjs";
import { welcomeMessage } from "./steps/welcome-message.mjs";

(async () => {
  // Show the welcome message
  await welcomeMessage();

  // Get the product type
  const { type } = await getProductType();

  // Ask to generate data
  const { generateData } = await askForGenerateData();

  const products: Product[] = [];

  if (generateData) {
    // Generate the products
    const items = await generateProducts(type);

    // Add the generated products to the products array
    products.push(...items);
  }

  if (!generateData) {
    // Ask for the product details
    const item = await getProductDetails(type);

    // Add the product to the products array
    products.push(item);
  }

  await saveToFile(type, products);
})();
