import { generateProducts } from "./steps/generateProducts.mjs";
import { getProductDetails } from "./steps/getProductDetails.mjs";
import { getProductType } from "./steps/getProductType.mjs";
import { askForGenerateData } from "./steps/askForGenerateData.mjs";
import { welcomeMessage } from "./steps/welcomeMessage.mjs";

(async () => {
  // Show the welcome message
  await welcomeMessage();

  // Get the product type
  const { type } = await getProductType();

  // Ask to generate data
  const { generateData } = await askForGenerateData();

  if (generateData) {
    // Generate the products
    const products = generateProducts(type);

    // Show the generated products
    console.table(products);
  }

  if (!generateData) {
    // Ask for the product details
    const product = await getProductDetails(type);

    // Show the product details
    console.log("product: ", product);
  }
})();
