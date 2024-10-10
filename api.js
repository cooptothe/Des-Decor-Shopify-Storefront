export async function storefront(query, variables = {}) {
  const response = await fetch('https://desdecorandsupplies.myshopify.com/api/2023-01/graphql.json', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": '675b1d8840221daf6f4b0a5e95c32ca9',
    },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
}
