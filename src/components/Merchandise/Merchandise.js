import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

// const merchandiseList = [
//   {
//     name: 'Tuxedo Snuggie',
//     price: 30,
//     description: 'Perfect for being comfortable while video conferencing into prom.'
//   }
// ]

function Merchandise(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.merchandiseList.map((item, index) => 
        <Item 
          name={item.name}
          price={item.price}
          description={item.description}
          quantity={item.quantity}
          key={index}/>
        )};

    </React.Fragment>
  );
}

Merchandise.propTypes = {
  merchandiseList: PropTypes.array
};


export default Merchandise;