import React, { Component } from 'react';
import { ImageSearch } from './components/ImageSearch';
import { ImageList } from './components/ImageList';

import './styles.css';


const API_KEY = "15605842-d213b6509e694455cf9084936"

export default class App extends Component {
  state = {
    images: [],
    error: null
  }

  handleGetRequest = async (e) => {
    e.preventDefault() //----->> Won`t refresh image on form submit
    const searchTerm = e.target.searchValue.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    const request = await fetch(url);
    const response = await request.json();

    if (!searchTerm) {
      this.setState({ 
        error: "Enter something in the field" 
      })
    } else {
      this.setState({
        images: response.hits,
        error: null
      })
    }

    

    console.log(searchTerm);
    console.log(this.state.images);
  }

  // componentDidMount() {
  //   this.handleGetRequest()
  // }

  render() {
    return (
      <div className="app">
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        {
          this.state.error !== null ?
          <div> {this.state.error} </div> :
          <ImageList images={this.state.images} />
        }
      </div>
    )
  }
}

