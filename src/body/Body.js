import React, { useEffect } from 'react';
import { data_list } from '../data';
import Card from './Card';

export default function Body() {
  useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="title">{/* <h2>CA HALF BACK LIST</h2> */}</div>
      <div className="data-grid-container center-it">
        {data_list.map((item) => (
          <Card
            key={item.id}
            brand={item.brand}
            logo={item.logo}
            offer={item.offer}
            stores={item.locations}
          />
        ))}
      </div>
    </div>
  );
}
