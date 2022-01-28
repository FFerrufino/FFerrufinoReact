import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <CartContext>
        <Header />
        <Main />
        <ToastContainer />
      </CartContext>
    </BrowserRouter>
  );
};

export default App;
