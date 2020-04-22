import React from "react";
import Header from "./Layout/Header";
// import CartControl from './CartControl';
import Footer from './Layout/Footer';
import ItemControl from "./Merchandise/ItemControl";


function App(){
  return (
    <React.Fragment>
      <Header />
      <ItemControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;
