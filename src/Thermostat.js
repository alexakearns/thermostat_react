import React, { Component } from 'react'

export class Thermostat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minTemp: 10,
      maxTempPSM: 25,
      maxTempPSMOff: 32,
      defaultTemp: 20,
      currentTemp: 20,
      powerSavingMode: true,
      weather: null
    }
  }
  changeTempUp = () => {
    let newTemp = this.state.currentTemp + 1
    if(this.state.powerSavingMode === true) {
      if(this.state.currentTemp === this.state.maxTempPSM) {
        return
      }
      this.setState({currentTemp: newTemp})
    }
    if(this.state.currentTemp === this.state.maxTempPSMOff) {
      return
    }
    this.setState({currentTemp: newTemp})
  }
  changeTempDown = () => {
    let newTemp = this.state.currentTemp -1
    if(this.state.currentTemp === this.state.minTemp) {
      return
    }
    this.setState({currentTemp: newTemp})
  }
  switchPowerSavingModeOff = () => {
    this.setState({powerSavingMode: false})
  }
  switchPowerSavingModeOn = () => {
    this.setState({powerSavingMode: true,
    currentTemp: this.state.maxTempPSM
    })
  }
  returnToDefaultTemp = () => {
    this.setState({currentTemp: this.state.defaultTemp})
  }

    // getWeather = () => {
    //   fetch("./weather.json")
    //   .then(response => response.json())
    //   .then(
    //     (result) => {
    //       this.state({
    //         isLoaded: true,
    //         weather: result.weather
    //       })
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       })
    //     }
    //   )
    // }

  //   getWeather = () => {
  //     fetch("/weather.json")
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           console.log('result', result)
  //           console.log('result.weather', result.weather)
  //           this.setState({
  //             isLoaded: true,
  //             weather: result.weather
  //           });
  //         },
  //         // Note: it's important to handle errors here
  //         // instead of a catch() block so that we don't swallow
  //         // exceptions from actual bugs in components.
  //         (error) => {
  //           this.setState({
  //             isLoaded: true,
  //             error
  //           });
  //         }
  //       )
  //   }
  // }
  
  render() {
    return (
      <div>
        <h2>My temperature is {this.state.currentTemp}!</h2>
        <button type="button" onClick={this.changeTempDown}
        >Temperature Down</button>
        <button type="button" onClick={this.changeTempUp}
        >Temperature Up</button>
        <button type="button" onClick={this.switchPowerSavingModeOff}
        >Turn PSM off</button>
        <button type="button" onClick={this.switchPowerSavingModeOn}
        >Turn PSM on</button>
        <button type="button" onClick={this.returnToDefaultTemp}
        >Return to {this.state.defaultTemp}</button>
        <button type="button" onClick={this.getWeather}
        >Get Weather</button>
        <h3>{this.state.weather}</h3>
      </div>
    )
  }
}

export default Thermostat

