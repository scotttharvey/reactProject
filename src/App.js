import React, { Component } from 'react';
import logo from './oly.png';
import './App.css';
import Layout from './components/Layout';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>2016 Rio Olympics</h1>
        </div>
        <p className="App-intro">
          Rio Olympics
        </p>
        <Layout/>
        <Footer/>
      </div>

    );
  }
}

export default App;
