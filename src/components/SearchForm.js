import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    'margin': '100px 0',
    'width': '100%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  searchInput: {
    'width': '500px',
    'margin': '5px',
  },
  dropdown: {
    'width': '200px',
    'margin': '5px',
    'textAlign': 'center'
  },
}));

const SearchForm = props =>{
  const classes = useStyles();
  
  return(
    <form className={classes.wrapper} onSubmit={props.onSubmit}>
      <TextField 
        className={classes.searchInput}
        margin='normal'
        name='title'
        type='search'
        variant='outlined'
        label="Search"
        onChange={e => props.onInputChange(e.target.value)}
      /> 

      <TextField
        className={classes.dropdown}
        select
        margin='normal'
        label="Search Type"
        variant="outlined"
        defaultValue="multi"
        onChange={e => props.onCategoryChange(e.target.value)}
      >
        <MenuItem key='1' value='movie'>movie</MenuItem>
        <MenuItem key='2' value='multi'>multi</MenuItem>
        <MenuItem key='3' value='tv'>tv</MenuItem>
      </TextField>
      
      <Button 
        color='primary'
        type='submit'
        variant='contained'
      >
        SEARCH
      </Button>
    </form>
  )
}

export default SearchForm;