import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Movies from './Movies';
import Loading from './Loading';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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
        <TextField
            select
            className={classes.dropdown}
            color="default"
            margin='normal'
            label="Search Type"
            variant="outlined"
            defaultValue="now_playing"
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
      </TabPanel>

      <TabPanel value={value} index={1} className={classes.TabPanel}>
        <Movies searchResults={props.searchResults}/>
      </TabPanel>

      <TabPanel value={value} index={2} className={classes.TabPanel}>
        <TextField
          select
          className={classes.dropdown}
          color="default"
          margin='normal'
          label="Search Type"
          variant="outlined"
          defaultValue="airing_today"
          onChange={async e => {
              await props.onTvCategoryChange(e.target.value)
              props.fetchTv(e)
            }
          }
        >
        <MenuItem key='1' value='airing_today'>airing_today</MenuItem>
        <MenuItem key='2' value='on_the_air'>on_the_air</MenuItem>
        <MenuItem key='3' value='popular'>popular</MenuItem>
        <MenuItem key='4' value='top_rated'>top_rated</MenuItem>
      </TextField>
       <Movies searchResults={props.tv}/>
      </TabPanel>
    </div>
  );
}

export default TabContainer