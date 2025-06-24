// Short-circuiting in if to avoid crashes

let product = null;

//  This would crash: product.price > 100
//  Use short-circuit to prevent TypeError
if (product && product.price > 100) {
  console.log("Expensive product");
} else {
  console.log("Product not available or cheap");
}
