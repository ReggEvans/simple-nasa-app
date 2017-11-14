import React, { Component } from 'react';
import '../styles/App.css';
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'
import Loader from './Loader'

const key = process.env.REACT_APP_MY_KEY

class GetImageForm extends Component {
  constructor() {
    super()
    this.state = {
      rover: 'Curiosity',
      camera: 'FHAZ',
      sol: '1000',
      images: [],
      loader: null,
      message: 'To view images, make a selection and click "Get Rover Images"'
    }
  }

  fetchRoverImage = () => {
    let rover = this.state.rover
    let camera = this.state.camera
    let sol = this.state.sol
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${key}`
    this.setState({
      loader: <Loader />,
      images:[],
      message: ''
    }) 
    fetch(url)
    .then(response => response.json())
    .then(data => {

      this.setState( {
        images: data.photos,
        loader: null,
        message: data.photos.length === 0 ? "No Images Found" : ""
      })
    });
  }

  handleRover = (e) => {
    e.preventDefault()
    this.setState({
      rover: e.target.value
    })
  }
  handleCamera = (e) => {
    e.preventDefault()
    this.setState({
      camera: e.target.value
    })
  }
  handleSol = (e) => {
    e.preventDefault()
    this.setState({
      sol: e.target.value
    })
  }

  render() {
    return (
      <div className='container-fluid container'>
        <div className='form-wrapper'>
          <form>
            <label htmlFor="rover">Rover</label>
            <select onChange={this.handleRover} id="rover" value={this.state.value}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
            <label htmlFor="camera">Camera Type</label>
            <select onChange={this.handleCamera} id="rover" value={this.state.value}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
            <label htmlFor="sol">Martian Sol: 1000-2000</label>
            <input type="number" onChange={this.handleSol} max="2000" min="1000" placeholder="1000" value={this.state.value}/>
          </form>
        </div>
        <GetImageButton fetchRoverImage={this.fetchRoverImage}/>
        {this.state.loader}
        <ImageDisplay images={this.state.images} message={this.state.message}/>
      </div>
    );
  }
}

export default GetImageForm;
