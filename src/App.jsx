import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";
import { Product } from "./pages/Product/Product";

export const App = () => {
  return (
    <BrowserRouter basename="/react-ecommerce">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
