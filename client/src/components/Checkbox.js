import React from 'react';

const Checkbox = props => (
  <div className="horsepower">
    <div>Horsepower</div>
    <input type="checkbox" checked={props.hpLow} onChange={()=>props.handleCheckbox('hpLow')}/>
    <label >less than 200</label>
    <input type="checkbox" checked={props.hpMid} onChange={()=>props.handleCheckbox('hpMid')}/>
    <label >201 to 350</label>
    <input type="checkbox" checked={props.hpHigh} onChange={()=>props.handleCheckbox('hpHigh')}/>
    <label >350 or more</label>
  </div>  
) 

export default Checkbox;