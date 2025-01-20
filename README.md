# E-Commerce Web Application

## Overview

This is a **responsive e-commerce web application** built with **React** and **Tailwind CSS**. It features:

- A dynamic user interface
- State management with **Redux**
- Seamless navigation using **React Router**

The application simulates an online store by fetching data from an open API source to display products, allowing users to browse items, view details, add products to their cart, and manage their wishlist.

**Designed to deliver a modern shopping experience** with responsive design, reusable components, and efficient state management.

## Features

### Core Functionality

- **Product Listing**: Displays a collection of products with options to view details.
- **Product Details**: Detailed view of individual products, including images, descriptions, and pricing.
- **Add to Cart**: Users can add products to their shopping cart.
- **Wishlist Management**: Users can save and view their favorite products.
- **Responsive Design**: Fully responsive layout for seamless use across devices.

### UI Components

- **Hero Section**: Highlights featured content or promotions.
- **Navbar**: Includes navigation links and icons for cart and wishlist.
- **Footer**: Displays links and social media icons.
- **Reusable Components**: Button, card, size badge, and display picture for consistent design.

### State Management

- **Redux Toolkit**: Efficient state management for user authentication, cart, and wishlist.
  - **Slices**:
    - `auth-slice.js`: Manages user authentication state.
    - `cart-slice.js`: Handles cart functionality, including adding and removing items.
    - `wishlistSlice.js`: Manages user's favorite products.

### Hooks

- **Custom Hooks**:
  - `use-fetch-product.js`: Fetches data for a single product.
  - `use-fetch-products.js`: Fetches data for the product listing.

### Routing

- **React Router**:
  - Nested routes for structured navigation.
  - Pages include Home, Product Details, Add to Cart, and Favorites.

## Technology Stack

### Frontend

- **React**: Library for building the user interface.
- **Redux Toolkit**: State management solution.
- **React Router**: For client-side routing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast development server and build tool.
- **Axios**: For making HTTP requests to fetch data from APIs.

### UI Libraries and Icons

- `@heroicons/react`: For integrating high-quality icons.
- **React Icons**: Provides a wide variety of customizable icons.

### Forms and Validation

- **React Hook Form**: Simplifies form handling and validation.

### Developer Tools

- **ESLint**: Ensures code quality and consistency.
- **PostCSS**: For transforming styles with JavaScript plugins.
- **Autoprefixer**: Adds vendor prefixes to CSS for better browser compatibility.

## File Structure

<pre>
├── public
│   ├── images
│   │   ├── hero-banner.jpg
│   │   └── product images...
│   └── vite.svg
├── src
│   ├── components
│   │   ├── UI
│   │   └── icons
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── routes
│   ├── store
│   │   └── slices
│   └── assets
├── package.json
├── tailwind.config.js
└── vite.config.js
</pre>

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/r9rizwan/basic-eCommerce-with-openAPI.git

   # Navigate to the Project Directory
   cd e-commerce-openAPI
   ```

## Install Dependencies

npm install

## Running the Application

#### Start the development server:

npm run dev

#### Open the app in your browser:

http://localhost:5173

#### Building for Production

#### Create a production build:

npm run build

#### Serve the build:

npm run preview
