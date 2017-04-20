import React from 'react';

import fbFooterImg from '../img/fb-footer.png';
import twFooterImg from '../img/tw-footer.png';
import gFooterImg from '../img/g-footer.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <a href="#">
          <img src={fbFooterImg} alt="facebook"/>
        </a>
        <a href="#">
          <img src={twFooterImg} alt="twitter"/>
        </a>
        <a href="#">
          <img src={gFooterImg} alt="google+"/>
        </a>
      </footer>
    );
  }
}

export default Footer;
