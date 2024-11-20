# 🎉 Decor Shopify Storefront 

An **ecommerce app** for party decor rental supplies, built with **React Native** and **Shopify's Storefront API**. This app allows users to browse a wide selection of party supplies, create bundles, and customize their options before making a purchase.

---

## 🖼️ Screenshots

| Home Screen                          | Product Screen                        | Bundle Screen                        |
|--------------------------------------|---------------------------------------|--------------------------------------|
| ![Home Screen](screenshots/home.png) | ![Product Screen](screenshots/product.png) | ![Bundle Screen](screenshots/bundle.png) |

---

## 📚 Features

- **Dynamic Product Display**: Fetch and display product data using Shopify's GraphQL API.
- **Customizable Bundles**: Enable users to select and modify bundle options.
- **Shopping Cart Integration**: Persistent cart functionality via AsyncStorage.
- **Mobile-First UI/UX**: Responsive design optimized for iOS and Android.

---

## 🔧 Tech Stack

- **Frontend**: React Native, Expo
- **Backend**: Shopify Storefront API
- **State Management**: React hooks and context
- **Storage**: AsyncStorage for persistent data
- **Styling**: Custom styles with responsive layout

---

## 🚀 Setup & Installation

Follow these steps to set up the app locally:

1. **Clone the Repository**:
   ```
   git clone https://github.com/your-username/decor-shopify-storefront.git
   cd decor-shopify-storefront
2. **Install Dependencies**:

```bash
npm install
```

3. **Set Up Shopify API**:
- Obtain API credentials from your Shopify store.
- Create a .env file in the root directory and add the following:
```
SHOPIFY_STORE_URL=your-shopify-store-url
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
```
- Start the App:

```
expo start
```
- Run on a Device:

Scan the QR code for iOS/Android or run the app on an emulator.

# ⚙️ Key Components
**Bundle Screen**
- Allows users to select custom bundle options and add them to the cart.
```javascript
const handleBundleChange = (newBundleString, options) => {
  setBundleString(newBundleString);
  setSelectedOptions(options);
};
```
**Cart Integration**
- Adds selected items to a persistent cart.
```javascript
const addToCart = async () => {
  const cartId = await AsyncStorage.getItem("cartId");
  const result = await addCartLines(cartId, lines);
  if (result.error) {
    alert("Error adding to cart: " + result.error[0]?.message);
  } else {
    alert("Product added to cart!");
  }
};
```
🛠️ Development Notes
API Errors: Use the alert() function to handle and debug API errors.
Image Carousel: Implemented with react-native-snap-carousel.
HTML Rendering: Handled with react-native-render-html.
📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙌 Acknowledgements
Shopify: For providing the Storefront API.
React Native Community: For their excellent libraries and documentation.
✨ About the Author
## Edward Cooper
A passionate developer with experience in building user-focused mobile applications.

[Portfolio](https://edwardcoopers-portfolio.netlify.app/)
[LinkedIn](https://www.linkedin.com/in/edwardcooperii/)

