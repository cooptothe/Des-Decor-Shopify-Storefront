# Decor Shopify Storefront App

## A modern e-commerce app for a party rental decor supplies store.

## Table of Contents
1. Features
2. Technology Stack
3. Installation and Setup
4. Screenshots
5. Future Enhancements
6. Challenges and Solutions
7. Skills Demonstrated
8. Contact
9. Features

## 1. Modern E-Commerce Functionality
- Product Display: Showcases detailed product information, including images, prices, and descriptions.
- Customizable Bundles: Supports infinite bundle combinations. Includes interactive selection components for variant options.
- Add-to-Cart Experience: Integration with Shopify's cart API for real-time updates. Attribute-based cart lines for flexibility (e.g., special notes, bundle selections).
## 2. User-Centric Design
- Image Carousel: Interactive carousel for browsing product images.
- Accessibility: Built to ensure inclusivity.
- Responsive Layout: Optimized for various screen sizes and orientations.
## 3. Backend Integration
- Shopify Storefront API: Advanced GraphQL queries and mutations for seamless data handling.
- Async Storage: Local storage management for cart persistence and user sessions.
- Error Handling: User-friendly alerts for network/API-related issues.

# Technology Stack
## Frontend
- Framework: React Native (JavaScript)
- Libraries:
react-native-render-html for HTML content rendering.
react-native-snap-carousel for interactive image carousels.
@react-navigation/native for navigation.
## Backend
- API: Shopify Storefront API (GraphQL)
- State Management: Local state with React Hooks.
- Storage: Async Storage for persistent cart functionality.
## Development Tools
- Platform: macOS
- IDE: VSCode
- Build Tools: Expo, npm, Xcode (iOS), Android Studio (Android)
## Installation and Setup
Prerequisites
Node.js v16 or higher.
npm or Yarn package manager.
- Expo CLI installed globally:
bash
Copy code
npm install -g expo-cli
Shopify API credentials (Storefront access token and endpoint).
Steps to Run
- Clone the repository:
bash
Copy code
git clone https://github.com/your-repo/decor-shopify-storefront.git
cd decor-shopify-storefront
- Install dependencies:
bash
Copy code
npm install
Set up environment variables:
Create an .env file and add your Shopify Storefront API credentials:
plaintext
Copy code
SHOPIFY_API_URL=https://your-shopify-store.myshopify.com/api/2023-01/graphql.json
SHOPIFY_ACCESS_TOKEN=your-access-token
- Start the development server:
bash
Copy code
npm start
- Launch the app on your device/emulator:
For iOS: Use Xcode or Expo Go.
- For Android: Use Android Studio or Expo Go.
Screenshots
Product Screen
Displays product details, images, and price.

## Bundle Selection
Interactive fields for customizing bundle options.

## Cart Integration
Real-time cart updates with Shopify integration.

## Future Enhancements
- Authentication: Add user accounts and saved preferences.
- Payment Integration: Enable checkout using Shopify's Payments API.
- Offline Mode: Cache product data for offline browsing.
- Enhanced UI/UX: Add animations and refine layout for better engagement.
- Challenges and Solutions
- Challenge: Managing complex bundle options in a React Native environment.
- Solution: Developed a reusable component (BundleOptionSelect) to dynamically render options based on metafield data.

- Challenge: Handling cart line attributes with Shopify's GraphQL API.
- Solution: Built a robust mutation function (addCartLines) to support custom attributes seamlessly.

## Skills Demonstrated
- Frontend Development:
Mastery of React Native and third-party libraries.
Mobile-first design principles.
- API Integration:
Advanced use of GraphQL with Shopify Storefront API.
- Problem-Solving:
Debugging build/runtime errors and handling async operations.
