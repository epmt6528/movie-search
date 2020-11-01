import React from 'react';

import Button  from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles, withTheme } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem';

const search_types = [
  {
    label: 'movie'
  },
  {
    label: 'multi'
  },
  {
    label: 'TV'
  },
];

const SearchForm = () =>(
  <form className="search-form__container">
    <TextField 
      margin='normal'
      name='title'
      type='search'
      variant='outlined'
      InputLabelProps={{
        required: true,
        color: 'white',
        shrink: true
      }}
    /> 

    <TextField
      select
      margin='normal'
      label="Search Type"
      variant="outlined"
    >
      {search_types.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
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

export default SearchForm;