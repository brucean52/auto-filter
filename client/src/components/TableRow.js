import React from 'react';
import PropTypes from 'prop-types';

const TableRow = props => (
    <tr className="tr">
      <td className="td">{props.car.Make}</td>
      <td className="td">{props.car.Model}</td>
      <td className="td">{props.car.Horsepower}</td>
   </tr>        
)

TableRow.propTypes = {
  car: PropTypes.shape({
    Make: PropTypes.string.isRequired,
    Model: PropTypes.string.isRequired,
    Horsepower: PropTypes.number.isRequired
  })
}

TableRow.defaultProps = {
  car: {
    Make: '',
    Model: '',
    Horsepower: ''
  }
}

export default TableRow;
