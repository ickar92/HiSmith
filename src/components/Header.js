import React from 'react';

import facebookImg from '../img/facebook.png';
import twitterImg from '../img/tw.png';
import googleImg from '../img/google.png';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <div className="header-top">
          <a href="#">
            <img src={facebookImg} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitterImg} alt="twitter" />
          </a>
          <a href="#">
            <img src={googleImg} alt="google" />
          </a>
        </div>
        <div className="header-content">
          <h1>
            <span>test</span> project
          </h1>
          <a href="#" className="btn">download</a>
        </div>
      </header>
    );
  }
}

export default Header;
