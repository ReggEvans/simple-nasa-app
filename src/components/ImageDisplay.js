import React, { Component } from 'react';
import '../styles/App.css';

class ImageDisplay extends Component {
  render() {
    let imageList = this.props.images
    let images = imageList.map((eachPhoto, i) => {
      return (
        <div className='img-wrapper' key={i}>
          <img src={eachPhoto.img_src} alt=''/>
        </div>
      )
    })
      return (
        <div>
          {images}
          <div className='message'>
            <h3>{this.props.message}</h3>
          </div>
        </div>
      )
  }
}

export default ImageDisplay;
