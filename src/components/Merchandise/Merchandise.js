import React from 'react';
import Item from './Item';
import { v4 } from 'uuid';

const masterMerchList = [
  {
    name: 'Tuxedo Snuggie',
    price: 30,
    description: 'Perfect for being comfortable while video conferencing into prom.'
  }
]

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