import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import Title from './components/Title';
import TabContainer from './components/TabContainer';
import {searchMovies, getMovies} from './services/api';
import { findByLabelText } from '@testing-library/react';

class App extends Component{
  state = {
    movieName: '',
    movies: [],
    searchCategory: '',
    movieCategory: '',
    isLoading: false
  }


  searchMovies = e => {
    const {movieName, searchCategory} = this.state
    e.preventDefault()

    this.setState({
      isLoading: true
    })

    searchMovies(movieName, searchCategory).then( 
    movies => {
      this.setState({
        movies,
        isLoading: false
      })
    },
    error => {
      alert('Error', `Something went wrong! ${error}`)
    }
    )
  }

  handleInputChange = movieName => {
    console.log(this.state.movieName)
    this.setState({
      movieName
    })
  }

  handleCategoryChange = searchCategory => {
    console.log(this.state.searchCategory)
    this.setState({
      searchCategory
    })
  }





  fetchMovies = e => {
    const {movieCategory} = this.state
    e.preventDefault()

    this.setState({
      isLoading: true
    })

    getMovies(movieCategory).then( 
    movies => {
      this.setState({
        movies,
        isLoading: false
      })
    },
    error => {
      alert('Error', `Something went wrong! ${error}`)
    }
    )
  }

  handleMovieCategoryChange = movieCategory => {
    console.log(this.state.movieCategory)
    this.setState({
      movieCategory
    })
  }



  render(){
    const style={
      'margin': 60,
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
    }

    return (
      <div className='wrapper' style={style}>
        <Title />
        <SearchForm 
          onInputChange={this.handleInputChange} 
          onCategoryChange={this.handleCategoryChange} 
          onSubmit={this.searchMovies}/>
        <TabContainer 
          searchResults={this.state.movies} 
          isLoading={this.state.isLoading}
          onCategoryChange={this.handleMovieCategoryChange} 
          fetchMovies={this.fetchMovies}
          />
      </div>
    );
  }
}

export default App;
