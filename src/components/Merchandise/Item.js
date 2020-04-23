import React from 'react';
import PropTypes from "prop-types";
// import { v4 } from 'uuid';

function Item(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4><em>{props.price}</em></h4>
        <p>{props.description}</p>
        <p>{props.quantity}</p>
      </div>
    </React.Fragment>
  );
};
// item.id = v4()

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;
