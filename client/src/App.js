import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import Table from './components/Table';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      make: '',
      model: '',
      hpLow: true,
      hpMid: true,
      hpHigh: true
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }
  handleSelect(event, type) {
    if(type === 'make' && event.target.value === "") {
      this.setState({
        make: '',
        model: ''
      });
      return;
    }

    this.setState({[type]: event.target.value});
  }
  handleCheckbox(type){
    this.setState({[type]: !this.state[type]});
  }
  render() {
    const { make, model, hpLow, hpHigh, hpMid } = this.state

    return (
      <div className="app">
        <div className="header">
          <FontAwesomeIcon icon={faCarSide} size="2x"/>
          <h1>AutoFilter</h1>
        </div>
        <div className="options">
          <Select make={make} model={model} handleSelect={this.handleSelect}/>
          <Checkbox hpLow={hpLow} hpMid={hpMid} hpHigh={hpHigh} handleCheckbox={this.handleCheckbox}/>
        </div>
        <Table make={make} model={model} hpLow={hpLow} hpMid={hpMid} hpHigh={hpHigh}/>
      </div>
    );
  }
}

export default App;
