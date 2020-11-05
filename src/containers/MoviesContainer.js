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
  
  return(
    <div className={classes.tabPanel}>
      <TextField
        select
        className={classes.dropdown}
        color="default"
        margin='normal'
        label="Search Type"
        variant="outlined"
        defaultValue={props.movieCategory}
        onChange={async e => {
            await props.onMovieCategoryChange(e.target.value)
            props.fetchMovies(e)
          }
        }
      >
        <MenuItem key='1' value='now_playing'>now_playing</MenuItem>
        <MenuItem key='2' value='popular'>popular</MenuItem>
        <MenuItem key='3' value='top_rated'>top_rated</MenuItem>
        <MenuItem key='4' value='upcoming'>upcoming</MenuItem>
      </TextField>

      <Movies searchResults={props.movies}/>
    </div>
  )
}

export default MoviesContainer;