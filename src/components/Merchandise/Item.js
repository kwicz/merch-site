import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';

const Item = (props) => {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h4><em>{props.price}</em></h4>
      <p>{props.description}</p>
      {/* <Button {pass some data here}/> */}
    </React.Fragment>
  );
};
item.id = v4()

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string
};

export default Item;
