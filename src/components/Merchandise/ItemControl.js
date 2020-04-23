import React from 'react';
import NewItemForm from './NewItemForm';
import Merchandise from './Merchandise';
import ItemDetail from './ItemDetail';

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMerchList: [],
      selectedItem: null
    };
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newItem);
    this.setState({masterMerchList: newMasterMerchList, formVisibleOnPage: false});
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterMerchList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleDeletingItem = (id) => {
    const newMasterMerchList = this.state.masterMerchList.filter(item => item.id !== id);
    this.setState({masterMerchList: newMasterMerchList});
    this.setState({selectedItem: null});
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail
        item = {this.state.selectedItem} />
      buttonText = "Return to Merchandise";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm
        onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return to Merchandise";
    } else {  
      currentlyVisibleState = <Merchandise
        merchandiseList={this.state.masterMerchList}
        onItemSelection={this.handleChangingSelectedItem}/>
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