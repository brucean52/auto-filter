import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import HexbinChart from './HexbinChart';
import BarChart from './BarChart';

const GET_CARS = gql`
  query Car($make: String, $model: String, $hpLow: Boolean, $hpHigh: Boolean, $hpMid: Boolean) {
    carFilter (make: $make, model: $model, hpLow: $hpLow, hpHigh: $hpHigh, hpMid: $hpMid) {
      Make
      Model
      Horsepower
      Transmission
      Drivetrain
      Weight
    }
  }
`;

class Chart extends Component{
  render() {
    const { make, model, hpLow, hpHigh, hpMid } = this.props;
    return(
      <div className="chart-container">
        <Query query={GET_CARS} variables={{ make, model, hpLow, hpMid, hpHigh}}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error {error.message}</div>;
          
          let carData = data.carFilter
          return (
            <React.Fragment>
              <HexbinChart data={carData}/>
              <BarChart data={carData}/>
            </React.Fragment>
          );
        }}
        </Query>
      </div>
    )
  }
} 

export default Chart;