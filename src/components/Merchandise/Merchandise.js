import React from 'react';
import Item from './Item';
import { v4 } from 'uuid';

const Merchandise = () => {
  return (
    <React.Fragment>
      <p>Merchandise</p>
      {masterMerchList.map((item, index) => 
        <Item 
          name={item.name}
          price={item.price}
          description={item.description}
          key={index}/>
        
      )}
    </React.Fragment>
  );
}


export default Merchandise;