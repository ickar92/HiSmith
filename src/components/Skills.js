import React from 'react';

import htmlImg from '../img/html.png';
import cssImg from '../img/css.png';
import wpImg from '../img/wp.png';
import seoImg from '../img/seo.png';

class Skills extends React.Component {
  render() {
    return(
      <section className="Skills">
        <div className="container">
          <h2>our skills </h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.</p>
        </div>
        <div className="skills-item">
          <img src={htmlImg} alt="html"/>
          <img src={cssImg} alt="css"/>
          <img src={wpImg} alt="wordpress"/>
          <img src={seoImg} alt="seo"/>
        </div>
      </section>
    );
  }
}

export default Skills;
