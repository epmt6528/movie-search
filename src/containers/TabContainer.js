import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Loading from '../components/Loading';
import MoviesContainer from './MoviesContainer';
import SearchContainer from './SearchContainer';
import TVContainer from './TVContainer';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  wrapper: {
    'width': '100%',
    'border': '1px solid black'
  },
  tabMenu: {
    'display': 'flex',
    'justifyContent': 'space-around'
  },
  dropdown: {
    'width': '200px',
  },
  tabPanel:{
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'padding': '30px 0'
  }
}));


const TabContainer = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {fetchMovies, movieCategory, onMovieCategoryChange, movies, movieName, searchResults, tvCategory, onTvCategoryChange, fetchTv, tv, isLoading} = props;

  return (
    <div className={classes.wrapper}>
      {/* Main Menu */}
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
          <Tab label="MOVIES" />
          <Tab label="SEARCH RESULTS" />
          <Tab label="TV SHOWS" />
        </Tabs>
      </AppBar>

      {/* Movies Tabpanel */}
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        {
          isLoading ? <Loading /> :
          <MoviesContainer 
            movieCategory={movieCategory} 
            onMovieCategoryChange={onMovieCategoryChange} 
            fetchMovies={fetchMovies} 
            movies={movies} />
        }
      </TabPanel>

      {/* Search Results Tabpanel */}
      <TabPanel value={value} index={1} className={classes.TabPanel}>
        {
          isLoading ? <Loading /> :
          <SearchContainer 
            movieName={movieName}
            searchResults={searchResults} />
        }
      </TabPanel>

      {/* TVs Tabpanel */}
      <TabPanel value={value} index={2} className={classes.TabPanel}>
        {
          isLoading ? <Loading /> :
          <TVContainer 
            tvCategory={tvCategory} 
            onTvCategoryChange={onTvCategoryChange} 
            fetchTv={fetchTv} 
            tv={tv}/>
        }
      </TabPanel>
    </div>
  );
}

export default TabContainer