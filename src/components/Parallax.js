import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ryan from '../assets/ryanmcdougall.png'
import beach from '../assets/cloud.png'
import ParallaxImage from 'react-image-parallax2'
import './Parallax.css';

class Parallax extends Component {

  handleScrollToElement(e) {
    const tesNode = ReactDOM.findDOMNode(this.refs[e])
    window.scrollTo({ top: tesNode.offsetTop, behavior: 'smooth' });
  }
  render() {
    return (
      <div className="App">
        <div id="main">
          <div id="logo"><ParallaxImage reduceHeight={1/1.85} src={ryan} alt="" width="50%" height="700"/></div>
          <div id="beach"><img id="waves" src={beach} alt="" width="100%" height="750px" /></div>
        </div>
      </div>
    );
  }
}

export default Parallax;