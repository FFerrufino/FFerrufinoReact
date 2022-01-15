import ItemDetailContainer from "./main/ItemDetailContainer";
import ItemListContainer from "./main/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./HeaderComps/Cart";
import Form from "./HeaderComps/Form"

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="cart/form" element={<Form/>}/>
      </Routes>
    </>
  );
};

export default Main;
