import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import CartContainer from "../CartContainer/CartContainer";
import AboutContainer from "../AboutContainer/AboutContainer";
import ContactContainer from "../ContactContainer/ContactContainer";
function Router() {
  return (
    <>
      <BrowserRouter>
        <div className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/products/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/products/category/:categoryId/:genId"
              element={<ItemListContainer />}
            />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/about" element={<AboutContainer />} />
            <Route path="/contact" element={<ContactContainer />} />
            <Route path="*" element={<h1>Error 404: Page not found</h1>} />
          </Routes>
        </div>

        {/* Footer */}
      </BrowserRouter>
    </>
  );
}

export default Router;
