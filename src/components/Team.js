import React from 'react';

import './Team.css';

import user1Img from '../img/user1.png';
import user2Img from '../img/user2.png';
import user3Img from '../img/user3.png';
import fbRedImg from '../img/fb-red.png';
import twRedImg from '../img/tw-red.png';

class Team extends React.Component {
  render () {
    return (
      <section className="Team">
        <div className="container">
          <h2>our team</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
        </div>
        <div className="users">
          <div className="user-item">
            <img src={user1Img} alt="user1"/>
            <div className="user-info">
              <span>user #1</span>
              <div>
                <a href="#"><img src={fbRedImg} alt="facebook"/></a>
                <a href="#"><img src={twRedImg} alt="twitter"/></a>
              </div>
              </div>
              <span>CEO</span>
            </div>
          <div className="user-item">
            <img src={user2Img} alt="user2"/>
            <div className="user-info">
              <span>user #2</span>
              <div>
                <a href="#"><img src={fbRedImg} alt="facebook"/></a>
                <a href="#"><img src={twRedImg} alt="twitter"/></a>
              </div>
            </div>
            <span>Marketing head</span>
          </div>
          <div className="user-item">
            <img src={user3Img} alt=""/>
            <div className="user-info">
              <span>user #3</span>
            <div>
              <a href="#"><img src={fbRedImg} alt="facebook"/></a>
              <a href="#"><img src={twRedImg} alt="twitter"/></a>
            </div>
            </div>
            <span>project head</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
