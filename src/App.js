import React, { Component } from 'react'
import VIew from "./components/list"
import Header from "./components/header"
// const axios = require("axios");

export class App extends Component {
  
  

  render() {
    
    return (
      <div>
    <Header/>

    <VIew getRes={this.getRes} />


    </div>
    )
  }
}

export default App
