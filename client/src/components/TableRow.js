import React from 'react';

const TableRow = props => (
    <tr className="tr">
      <td className="td">{props.car.Make}</td>
      <td className="td">{props.car.Model}</td>
      <td className="td">{props.car.Horsepower}</td>
   </tr>        
)

export default TableRow;
