import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";
import { Product } from "./pages/Product/Product";
import { About } from "./pages/About/About";
import { Payment } from "./pages/Payment/Payment";

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "PrettyPink",
      "/catalog": "Catalog",
      "/product": "Product",
      "/payment": "Payment",
      "/about": "About",
    };
    const path = location.pathname.startsWith("/product")
      ? "/product"
      : location.pathname;
    document.title = titles[path] || "PrettyPink Store";
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
};

export const App = () => {
  return (
    <BrowserRouter basename="/react-ecommerce">
      <AppContent />
    </BrowserRouter>
  );
};
