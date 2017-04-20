import React from 'react';

import './Contacts.css';

import locationImg from '../img/location.png';
import phoneImg from '../img/phone.png';
import mailImg from '../img/mail.png';

class Contacts extends React.Component {
  render() {
    return(
      <section className="Contacts">
        <div className="container">
          <h2>contact us</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
        </div>
        <div className="contacts-info">
          <div className="details">
            <h3>contact details</h3>
            <div className="details-item">
              <img src={locationImg} alt="location"/>
              <span>Stret / House / Zip</span>
            </div>
            <div className="details-item">
              <img src={phoneImg} alt="phone"/>
              <span>111-111-1111</span>
            </div>
            <div className="details-item">
              <img src={mailImg} alt=""/>
              <span>email@1.com</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
          </div>
          <div className="message">
            <h3>send us a message</h3>
            <form action="post">
              <div>
                <input type="text" placeholder="NAME"/>
                <input type="email" placeholder="E-MAIL"/>
              </div>
              <textarea name="" cols="80" rows="10"></textarea>
            </form>
            <a href="#" className="send">send</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
