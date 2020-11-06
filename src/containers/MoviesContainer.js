import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Movies from '../components/Movies';

const useStyles = makeStyles((theme) => ({
  tabPanel:{
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'padding': '30px 0'
  }
}));

const MoviesContainer = (props) =>{
  const classes = useStyles();
  
  const {movieCategory, onMovieCategoryChange, fetchMovies, movies} = props

  return(
    <div className={classes.tabPanel}>
      {/* Filter Dropdown */}
      <TextField
        select
        className={classes.dropdown}
        color="default"
        margin='normal'
        label="Search Type"
        variant="outlined"
        defaultValue={movieCategory}
        onChange={async e => {
            await onMovieCategoryChange(e.target.value)
            fetchMovies(e)
          }
        }
      >
        <MenuItem key='1' value='now_playing'>now_playing</MenuItem>
        <MenuItem key='2' value='popular'>popular</MenuItem>
        <MenuItem key='3' value='top_rated'>top_rated</MenuItem>
        <MenuItem key='4' value='upcoming'>upcoming</MenuItem>
      </TextField>

      {/* Fetched Movies */}
      <Movies searchResults={movies}/>
    </div>
  )
}

export default MoviesContainer;