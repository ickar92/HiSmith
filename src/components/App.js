import React from 'react';

import Header from './Header';
import About from './About';
import History from './History';
import Skills from './Skills';
import Team from './Team';
import Contacts from './Contacts';
// TODO: import other sections...
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <History />
        <Skills />
        <Team />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;
