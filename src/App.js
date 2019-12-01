import React, { Component } from 'react';
import './App.css';
import { IPdataAPIKey, GoogleAPIKey } from './config';
import axios from 'axios';
import GoogleMap from './components/GoogleMap';

export default class App extends Component {
  state = {
    IPLocation: [],
    googleAPI: GoogleAPIKey
  };

  componentDidMount() {
    this.performIPLocationSearch();
  }

  performIPLocationSearch = () => {
    axios
      .get(`https://api.ipdata.co/?api-key=${IPdataAPIKey}`)
      .then(response => {
        const data = response.data;
        this.setState({ IPLocation: data });
      })
      .catch(error => {
        console.log('Something went wrong, could not access datat', error);
      });
  };

  render() {
    return (
      <div className='container'>
        <GoogleMap
          data={this.state.IPLocation}
          googleAPI={this.state.googleAPI}
        />
      </div>
    );
  }
}
