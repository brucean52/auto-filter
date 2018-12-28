import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import TableRow from './TableRow';


const GET_CARS = gql`
  query Car($make: String, $model: String, $hpLow: Boolean, $hpHigh: Boolean, $hpMid: Boolean) {
    carFilter (make: $make, model: $model, hpLow: $hpLow, hpHigh: $hpHigh, hpMid: $hpMid) {
      Make
      Model
      Horsepower
    }
  }
`;

class Table extends Component {

  render() {
    const { make, model, hpLow, hpHigh, hpMid } = this.props;
    return (
      <table className="table">
        <thead>
          <tr className="tr tableHead">
            <th className="th">Make</th>
            <th className="th">Model</th>
            <th className="th">Horsepower</th>
          </tr>        
        </thead>
        <tbody>
        <Query query={GET_CARS} variables={{make, model, hpLow, hpMid, hpHigh}}>
        {({ loading, error, data }) => {
          if (loading) return <tr><td>Loading...</td></tr>;
          if (error) return <tr><td>Error {error.message}</td></tr>;

          let displayData = data.carFilter.map((car, index) => {
            return (
              <TableRow car={car} key={index} />
            )
          });

          return (
            <React.Fragment>
              {displayData}
            </React.Fragment>
          );
        }}
      </Query>
      </tbody>
    </table>
    );
  }
}

export default Table;
