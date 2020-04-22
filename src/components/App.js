import React from "react";
import Header from "./Layout/Header";
import Cart from "./Cart/Cart";
import Merchandise from "./Merchandise/Merchandise";
function App(){
  return (
    <React.Fragment>
      <Header />
      <Cart />
      <Merchandise />
    </React.Fragment>
  );
}

export default App;
