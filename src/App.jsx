import { useState } from "react";
import { createContext } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { LoginLayout } from "./layouts/LoginLayout";
import { Phones } from "./components/constants/ProductData";


export const StoreContext = createContext('')
const [iphones, setIphones] = useState(Phones);
const ctxObject = {
  iphones,
  setIphones
}

export const App = () => {
  console.log("LOADED");
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>

      <StoreContext.Provider value={ctxObject} />

      <Routes>
        <Route path="/login" element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
