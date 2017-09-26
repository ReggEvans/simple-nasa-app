import React, { Component } from 'react';
import '../styles/App.css';

class GetImageButton extends Component {
  render() {
    return (
      <div>
        <button className='btn btn-primary' onClick={this.props.fetchRoverImage}>GET ROVER IMAGES</button>
      </div>
    );
  }
}

export default GetImageButton;
