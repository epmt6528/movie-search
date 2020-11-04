import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import Title from './components/Title';
import TabContainer from './components/TabContainer';
import {searchMovies, getMovies, getTv} from './services/api';
import { findByLabelText } from '@testing-library/react';

class App extends Component{
  state = {
    movieName: '',
    searchResults: [],
    movies: [],
    tv: [],
    searchCategory: '',
    movieCategory: 'now_playing',
    tvCategory: 'airing_today',
    isLoading: false
  }

  // Search function
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

  searchMovies = e => {
    const {movieName, searchCategory} = this.state
    e.preventDefault()

    // this.setState({
    //   isLoading: true
    // })

    searchMovies(movieName, searchCategory).then( 
      searchResults => {
      this.setState({
        searchResults,
        // isLoading: false
      })
    },
    error => {
      alert('Error', `Something went wrong! ${error}`)
    }
    )
  }





  // Fetching movies function
  fetchMovies = e => {
    const {movieCategory} = this.state
    e.preventDefault()

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
    this.setState({
      movieCategory
    })
  }



  // Fetching tv function
  fetchTv = e => {
    const {tvCategory} = this.state
    e.preventDefault()

    getTv(tvCategory).then( 
      tv => {
      this.setState({
        tv,
        isLoading: false
      })
    },
    error => {
      alert('Error', `Something went wrong! ${error}`)
    }
    )
  }

  handleTvCategoryChange = tvCategory => {
    this.setState({
      tvCategory
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
          searchResults={this.state.searchResults} 
          movies={this.state.movies}
          tv={this.state.tv} 
          isLoading={this.state.isLoading}
          onMovieCategoryChange={this.handleMovieCategoryChange} 
          onTvCategoryChange={this.handleTvCategoryChange} 
          fetchMovies={this.fetchMovies}
          fetchTv={this.fetchTv}
          />
      </div>
    );
  }
}

export default App;
