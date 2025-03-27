import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  LoginPage,
  SignupPage,
  Home,
  CreateProduct,
  MyProducts,
  Cart,
  ProductDetails,
  Profile,
  CreateAddress,
  SelectAddress,
  OrderConfirmation,
  MyOrdersPage
} from "./Routes";
import OrderSuccess from "./pages/OrderSuccess";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/create-product/:id' element={<CreateProduct />} />
        <Route path='/my-products' element={<MyProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-address' element={<CreateAddress />} />
        <Route path='/select-address' element={<SelectAddress />} />
        <Route path='/order-confirmation' element={<OrderConfirmation />} />
        <Route path='/myorders' element={<MyOrdersPage />} />
        <Route path='/order-success' element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
