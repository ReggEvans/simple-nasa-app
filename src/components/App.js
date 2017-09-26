import React, { Component } from 'react';
import '../styles//App.css';

import GetImageForm from './GetImageForm'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GetImageForm />
      </div>
    );
  }
}

export default App;
