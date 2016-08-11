import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I love my brother</h2>
        </div>
        <p className="App-intro">
          p.s. React is super dope
        </p>
        <Layout/>
        <Footer/>
      </div>

    );
  }
}

export default App;
