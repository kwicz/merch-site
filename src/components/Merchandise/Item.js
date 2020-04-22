import React from 'react';
import PropTypes from "prop-types";
// import { v4 } from 'uuid';

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h4><em>{props.price}</em></h4>
      <p>{props.description}</p>
      <p>{props.quantity}</p>
      {/* <form onSubmit = {handleAddingNewItemToCart}>
        <button>Add to Cart</button>
      </form> */}
    </React.Fragment>
  );
};
// item.id = v4()

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number
};

export default Item;
