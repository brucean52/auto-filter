const data = require('./data');

const resolvers = {
    Query: {
        cars: () => {
          return data;
        }
    }
};
module.exports = resolvers;
