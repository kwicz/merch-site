import React from 'react';
import Merchandise from './Merchandise/Merchandise';
import Cart from './Cart/Cart';

class CartControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      masterCartList: []
    };
  }

  handleAddingNewItemToCart = (newItem) => {
    const newMasterCartList = this.state.masterCartList.concat(newItem);
    this.setState({masterCartList: newMasterCartList});
    // this.setState({formVisibleOnPage: false});
  }

  // handleClick = (event) => {
  //   this.setState(prevState => ({
  //     formVisibleOnPage: !prevState.formVisibleOnPage
  //   }));
  // }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Cart  onNewItemAddition={this.handleAddingNewItemToCart} />;
      buttonText = "Return to Merchandise";
    } else {
      currentlyVisibleState = <Merchandise merchandise={this.state.masterMerchList}/>
      buttonText = "Add Merchandise";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CartControl;