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

  const {searchResults, movieName} = props

  // User has not typed in yet
  if(!movieName &&searchResults === false){
    return (
      <div className={classes.tabPanel}>
        <h2> Please enter a search </h2>
      </div>
    )
  // User started typing in but not searched yet:
  }else if(movieName && searchResults === false){
    return (
      <div className={classes.tabPanel}>
        <h2> Please initiate a search </h2>
      </div>
    )
  // Results:
  }else if(searchResults.length > 0){
    return(
      <div className={classes.tabPanel}>
        <Movies searchResults={searchResults} />
      </div>
    )
  // No Results: 
  }else if(searchResults === true){
    return (
      <div className={classes.tabPanel}>
        <h2> Sorry, there were no results </h2>
      </div>
    )
  }
}

export default SearchContainer;