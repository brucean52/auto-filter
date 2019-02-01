import React from 'react';
import PropTypes from 'prop-types';

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

Checkbox.propTypes = {
  hpLow: PropTypes.bool.isRequired,
  hpMid: PropTypes.bool.isRequired,
  hpHigh: PropTypes.bool.isRequired
}

Checkbox.defaultProps = {
  hpLow: true,
  hpMid: true,
  hpHigh: true
}

export default Checkbox;