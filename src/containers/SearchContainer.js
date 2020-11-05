import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Movies from '../components/Movies';

const useStyles = makeStyles((theme) => ({
  tabPanel:{
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'padding': '30px 0'
  }
}));

const SearchContainer = (props) =>{
  const classes = useStyles();

  if(props.searchResults == false){
    return (
      <div className={classes.tabPanel}>
        <h2> Please enter a search </h2>
      </div>
    )
  }else if(props.movieName && props.searchResults == false){
    return (
      <div className={classes.tabPanel}>
        <h2> Please initiate a search </h2>
      </div>
    )
  }else if(props.searchResults.length > 0){
    return(
      <div className={classes.tabPanel}>
        <Movies searchResults={props.searchResults} />
      </div>
    )
  }else if(props.searchResults == true){
    return (
      <div className={classes.tabPanel}>
        <h2> Sorry, there were no results </h2>
      </div>
    )
  }
}

export default SearchContainer;