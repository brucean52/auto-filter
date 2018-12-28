const { gql } = require('apollo-server');

const typeDefs = gql`
  type Car {
    Make: String
    Model: String
    Horsepower: Int
    Transmission: String
    Drivetrain: String
    Weight: Int
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    carSelect: [Car],
    carFilter(
      make: String, 
      model: String, 
      hpLow: Boolean, 
      hpMid: Boolean, 
      hpHigh: Boolean): [Car]
  }
`;
module.exports = typeDefs;