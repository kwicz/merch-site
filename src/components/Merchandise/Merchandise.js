import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function Merchandise(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.merchandiseList.map((item) => 
        <Item 
          whenItemClicked = { props.onItemSelection }
          name={item.name}
          price={item.price}
          description={item.description}
          quantity={item.quantity}
          key={item.id}
          id={item.id}/>
      )}
    </React.Fragment>
  );
}

Merchandise.propTypes = {
  merchandiseList: PropTypes.array
};


export default Merchandise;