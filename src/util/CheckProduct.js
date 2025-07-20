// Function To Check Product In Wishlist , Compare And Cart
export const CheckProduct = (id, type, products1, products2, products3) => {
  let isFound = false;
  let products = "";

  if (type === "wishlist") {
    products = [...products1];
  } else if (type === "compare") {
    products = [...products2];
  } else if (type === "cart") {
    products = [...products3];
  }

  for (let x = 0; x < products.length; x++) {
    if (id === products[x].id) {
      isFound = true;
      break;
    }
  }

  return isFound;
};
