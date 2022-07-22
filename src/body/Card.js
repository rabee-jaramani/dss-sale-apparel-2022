import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';

export default function Card(props) {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('');
  return (
    <div className="card container">
      {/* <div className="title">{props.brand}</div> */}
      <img src={props.logo} alt="logo" />
      <div className="sale">{props.offer}</div>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"><strong>Locations</strong></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          // onChange={handleChange}
        >
          {props.stores.map((store) => (
            <MenuItem value={store}>
              {(store==='Mall of the Emirates > Flat 25% on everything'
              ||store==='The Dubai Mall > Flat 25% on everything')
              ?
              (<strong style={{fontSize: "14px"}}>{store}</strong>)
              :
              store
              }
            
              </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <div className="terms">*T&C Apply</div> */}
    </div>
  );
}
