const { gql } = require('apollo-server');

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Car {
    Make: String
    Model: String
    Horsepower: Int
    Transmission: String
    Drivetrain: String
    Weight: Int
    MPG: String
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    cars: [Car]
  }
`;
module.exports = typeDefs;