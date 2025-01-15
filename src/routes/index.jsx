import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import Home from "../pages/Home";

import ProductDetailsPage from "../pages/products/product-details.jsx";
import FavoriteListPage from "../pages/favorite-list";
import AddCartPage from "../pages/add-cart";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />

          <Route path="favorite-list" element={<FavoriteListPage />} />
          <Route path="add-cart" element={<AddCartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
