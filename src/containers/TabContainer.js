import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Movies from '../components/Movies';
// import Loading from './Loading';
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
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
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.wrapper}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary" textColor="primary" variant="fullWidth">
          <Tab label="MOVIES" {...a11yProps(0)} onClick={props.fetchMovies}/>
          <Tab label="SEARCH RESULTS" {...a11yProps(1)} />
          <Tab label="TV SHOWS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <MoviesContainer 
          movieCategory={props.movieCategory} 
          onMovieCategoryChange={props.onMovieCategoryChange} 
          fetchMovies={props.fetchMovies} 
          movies={props.movies} />
      </TabPanel>

      <TabPanel value={value} index={1} className={classes.TabPanel}>
        <SearchContainer 
          movieName={props.movieName}
          searchResults={props.searchResults} />
      </TabPanel>

      <TabPanel value={value} index={2} className={classes.TabPanel}>
        <TVContainer 
          tvCategory={props.tvCategory} 
          onTvCategoryChange={props.onTvCategoryChange} 
          fetchTv={props.fetchTv} 
          tv={props.tv}/>
      </TabPanel>
    </div>
  );
}

export default TabContainer