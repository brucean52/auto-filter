const data = require('../data');
// Data source has duplicate car model values
var values = {};
const filteredData = data.filter(item => {
  var val = item['Model'];
  var exists = values[val];
  values[val] = true;
  return !exists;
});


const resolvers = {
  Query: {
    carSelect() {
      return filteredData;
    },
    carFilter(root, { make, model, hpLow, hpMid, hpHigh }){
      let outputArray = [];
      if(make === "" && hpLow && hpMid && hpHigh){
        return filteredData;
      }

      if(make !== ''){
        outputArray = filteredData.filter( item => {
          return item.Make === make;
        });
      } else {
        outputArray = filteredData;
      }

      if(model !== '') {
        outputArray = filteredData.filter( item => {
          return item.Model === model;
        });
      }

      if(!hpLow || !hpMid || !hpHigh) {
        let hpArr = [];
        if(hpLow){
          let hpLowArr = outputArray.filter( item => {
             return item.Horsepower <= 200;
          });
          hpArr.push(...hpLowArr);
        }
        if(hpMid){
          let hpMidArr = outputArray.filter( item => {
             return item.Horsepower > 201 && item.Horsepower < 350;
          });
          hpArr.push(...hpMidArr);
        }
        if(hpHigh){
          let hpHighArr = outputArray.filter( item => {
             return item.Horsepower > 351;
          });
          hpArr.push(...hpHighArr)
        }
        return hpArr;
      }

      return outputArray;
    }
  }
}

module.exports = resolvers;
