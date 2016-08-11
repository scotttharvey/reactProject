import React, { Component } from 'react';
import picOpen from '../images/openingOly.jpg';
import pic1 from '../images/olyDive.jpg';
import pic2 from '../images/olyFence.jpg';
import pic3 from '../images/olyLift.jpg';
import pic4 from '../images/olyPhelps.jpg';
import pic5 from '../images/olyHorse.jpg';

class Layout extends Component{
  render(){
    return(
      <div className="App-Image-Container">
      <img src={picOpen} className="App-Image" alt="pic"/>
      <img src={pic1} className="App-Image" alt="pic"/>
      <img src={pic2} className="App-Image" alt="pic"/>
      <img src={pic3} className="App-Image" alt="pic"/>
      <img src={pic4} className="App-Image" alt="pic"/>
      <img src={pic5} className="App-Image" alt="pic"/>

      </div>
    )
  }
}
export default Layout;
