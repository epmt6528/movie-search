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

const TVContainer = (props) =>{
  const classes = useStyles();

  const {tvCategory, onTvCategoryChange, fetchTv, tv} = props

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
        defaultValue={tvCategory}
        onChange={async e => {
            await onTvCategoryChange(e.target.value)
            fetchTv(e)
          }
        }
      >
        <MenuItem key='1' value='airing_today'>airing_today</MenuItem>
        <MenuItem key='2' value='on_the_air'>on_the_air</MenuItem>
        <MenuItem key='3' value='popular'>popular</MenuItem>
        <MenuItem key='4' value='top_rated'>top_rated</MenuItem>
      </TextField>

      {/* Fetched TVs */}
      <Movies searchResults={tv}/>
    </div>
  )
}

export default TVContainer;