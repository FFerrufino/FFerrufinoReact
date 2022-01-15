import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartContext>
        <Header />
        <Main />
      </CartContext>
    </BrowserRouter>
  );
};

export default App;
