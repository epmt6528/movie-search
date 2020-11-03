import React from 'react';

import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MovieCard from './MovieCard'

const getStyles = makeStyles(theme => ({
  root: {
    margin: '5em 3em',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center'
  }
}))

const Movies = props => {
  const classes = getStyles()

  console.log(props.searchResults)

  return (
    <div className="container">
      <div container className={classes.root} spacing={5}>
        {
          props.searchResults.map(
            movie => {
              const {id, original_title, release_date, popularity, overview, poster_path} = movie
              return (
                <>
                  <MovieCard 
                    key={id}
                    id={id}
                    title={original_title}
                    release_date={release_date}
                    popularity={popularity}
                    overview={overview}
                    poster_path={poster_path}
                  />
                </>
              )
            }
          )
        }
      </div>
    </div>
  )
}
export default Movies