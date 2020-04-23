import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props) {
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <p>Name: {item.name}</p>
      <p>Price: {item.price}</p>
      <p>Description: {item.description}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={()=> onClickingDelete(item.id) }>Delete this Item</button>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default ItemDetail;