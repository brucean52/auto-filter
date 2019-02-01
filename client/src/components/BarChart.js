import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, HorizontalBarSeries} from 'react-vis';

class BarChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      arrayData: []
    }
  }
  componentDidMount(){
    this.updateData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.updateData();
    }
  }
  updateData(){
    const { data } = this.props;
    let arrayData = []

    data.forEach(data => {
      var make = arrayData.find(make => make.x === data.Make);
      if(!make){
        arrayData.push({
              y: data.Make.toUpperCase(),
              x: 1
          });
      }else{
        make.y++;
      }
    });
  this.setState({ arrayData });
  }
  render() {
    const { arrayData } = this.state;
    return (
      <XYPlot
        yType={'ordinal'}
        width={700}
        height={900}
        margin={{left: 110, right: 0, top: 10, bottom: 50}}
        stackBy="x">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries 
          data={arrayData} 
          color="#007acc"
          />
      </XYPlot>
    );
  }
}

export default BarChart;