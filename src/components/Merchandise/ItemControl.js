import React from 'react';
import NewItemForm from './NewItemForm';
import Merchandise from './Merchandise';


class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMerchList: []
    };
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newItem);
    this.setState({masterMerchList: newMasterMerchList});
    this.setState({formVisibleOnPage: false});
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return to Merchandise";
    } else {  
      currentlyVisibleState = <Merchandise merchandiseList={this.state.masterMerchList}/>
      buttonText = "Add merchandise";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;