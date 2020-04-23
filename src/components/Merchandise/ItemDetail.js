import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props) {
  const { item } = props;

  return (
    <React.Fragment>
      <h1>Item Details</h1>
      <p>Name: {item.name}</p>
      <p>Price: {item.price}</p>
      <p>Description: {item.description}</p>
      <p>Quantity: {item.quantity}</p>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;