import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, HexbinSeries, ChartLabel, HorizontalGridLines, VerticalGridLines, Hint } from 'react-vis';

class HexbinChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      hovered: null
    }
  }
  render() {
    const { hovered } = this.state;
    const { data } = this.props;

    let hexbinData = data.map(car => ({
      x: car.Horsepower,
      y: car.Weight
    }));

    return (
      <XYPlot
        width={700}
        height={500}
        onMouseLeave={() => this.setState({hovered: null})}
        margin={{left: 80, right: 40, top: 40, bottom: 40}}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <HexbinSeries
          animation
          sizeHexagonsWithCount
          onValueMouseOver={d => this.setState({hovered: d})}
          radius={25}
          data={hexbinData}
          colorRange={['#ee0d0d', '#007acc']}/>
        <ChartLabel 
          text={"Horsepower"}
          className="label"
          xPercent={0.9}
          yPercent={0.75}
          style={{
            transform: 'rotate(90)',
            textAnchor: 'end'
          }}/>
        <ChartLabel 
          text={"Weight"}
          className="label"
          xPercent={0.15}
          yPercent={-0.1}
          style={{
            textAnchor: 'start'
          }}/>
        {hovered && (
          <Hint
            xType="literal"
            yType="literal"
            getX={d => d.x}
            getY={d => d.y}
            value={{
              x: hovered.x,
              y: hovered.y,
              value: hovered.length
            }}
            style={{fontSize: 15}}
          />
        )}
      </XYPlot>
    );
  }
}

export default HexbinChart;