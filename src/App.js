import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import Title from './components/Title';
import TabContainer from './containers/TabContainer';
import {searchMovies, getMovies, getTv} from './services/api';

class App extends Component{
  state = {
    movieName: '',
    searchResults: false,
    movies: [],
    tv: [],
    searchCategory: 'multi',
    movieCategory: 'now_playing',
    tvCategory: 'airing_today',
    isLoading: false
  }

  componentDidMount() {
    this.fetchMovies()
    this.fetchTv()
  }

  // Search function
  handleInputChange = movieName => {
    this.setState({
      movieName
    })

  }

  handleCategoryChange = searchCategory => {
    this.setState({
      searchCategory
    })
  }

  searchMovies = (e) =>{
    const {movieName, searchCategory} = this.state

    e.preventDefault()

    this.setState({
      isLoading: true
    })

    searchMovies(movieName, searchCategory).then( 
      searchResults => {
      this.setState({
        searchResults,
        isLoading: false
      })

    },
    error => {
      alert('Error', `Something went wrong! ${error}`)
    }
    )
  }





  // Fetching movies function
  fetchMovies = (e) => {
    const {movieCategory} = this.state

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
    this.setState({
      movieCategory
    })
  }



  // Fetching tv function
  fetchTv = (e) =>{
    const {tvCategory} = this.state

    this.setState({
      isLoading: true
    })

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
      'flexDirection': 'column',
      'alignItems': 'center',
    }

    const {movieName, searchResults, movies, tv, movieCategory, tvCategory, isLoading} = this.state

    return (
      <div className='wrapper' style={style}>
        <Title />
        <SearchForm 
          onInputChange={this.handleInputChange} 
          onCategoryChange={this.handleCategoryChange} 
          onSubmit={this.searchMovies}/>
        <TabContainer
          movieName={movieName}
          searchResults={searchResults}
          movies={movies}
          tv={tv}
          movieCategory={movieCategory}
          tvCategory={tvCategory}
          isLoading={isLoading}
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
