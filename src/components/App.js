import React from 'react';

import Header from './Header';
import About from './About';
// TODO: import other sections...
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />

        <Footer />
      </div>
    );
  }
}

export default App;
