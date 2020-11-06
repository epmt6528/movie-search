import React from 'react';

import {makeStyles} from '@material-ui/core/styles'
import MovieCard from './MovieCard'

const getStyles = makeStyles(theme => ({
  root: {
    margin: '5em 3em',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center'
  }
}))

const Movies = props => {
  const classes = getStyles()

  const {searchResults} = props

  return (
    <div className="container">
      <div className={classes.root} spacing={5}>
        {
          searchResults.map(
            movie => {
              const {id, original_title, original_name, release_date, popularity, overview, poster_path} = movie
              return (
                  <MovieCard 
                    key={id}
                    id={id}
                    title={original_title || original_name}
                    release_date={release_date}
                    popularity={popularity}
                    overview={overview}
                    poster_path={poster_path}
                  />
              )
            }
          )
        }
      </div>
    </div>
  )
}
export default Movies