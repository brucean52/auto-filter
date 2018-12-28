import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_CARS = gql`
  {
    carSelect {
      Make
      Model
    }
  }
`;

class Select extends Component {
  render() {
    const { make, model, handleSelect } = this.props;

    return (
      <Query query={GET_CARS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        let uniqueMakes = new Set();
        let modelSelect = null;
        
        for(var car of data.carSelect){
          uniqueMakes.add(car.Make);
        }
        let makeArray = [...uniqueMakes].sort();
        let makeSelect = makeArray.map((item, index)=>{
          return(
            <option key={index} value={item}>{item}</option> 
          ) 
        });
        
        if(make !== ""){
          modelSelect = data.carSelect.map((item, index)=>{
            if(item.Make === make){
              return(               
                <option key={index} value={item.Model}>{item.Model}</option>             
              )
            } else return null;
          });
        } 
        return (
          <React.Fragment>
            <select value={make} onChange={event => handleSelect(event, 'make')}>
              <option value="">Any Make</option>
              {makeSelect}
            </select>
            <select value={model} onChange={event => handleSelect(event, 'model')}>
              <option value="">Any Model</option>
              {modelSelect}
            </select>
          </React.Fragment>
        );
      }}
    </Query>
    );
  }
}

export default Select;
