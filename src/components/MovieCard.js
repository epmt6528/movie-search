import React from 'react'

import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {BASE_URL_POSTER} from '../config/api_config'

const getStyles = makeStyles(theme => ({
  root:{
    'width': '100%',
    'height': '500px',
    'margin': '20px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  media: {
    'height': '0',
    'width': '25%',
    'paddingTop': '36%'
  },
  content: {
    'width': '75%',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  title: {
    'padding': '0'
  },
  info: {
    'margin-bottom': '20px'
  },

}))


const MovieCard = props => {
  const classes = getStyles()
  const {key, id, title, release_date, popularity, overview, poster_path} = props

  return(
    <Card key={key} className={classes.root}>
      <CardMedia className={classes.media} image={`${BASE_URL_POSTER}${poster_path}`}/>
      <CardContent className={classes.content}>
        <CardHeader title={title} className={classes.title}/>
        <Typography component="p" color='textSecondary' className={classes.info}>
            Release Date: {release_date} | Popularity: {popularity}
        </Typography>
        <Typography component="p" color='textSecondary'>
            {overview}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MovieCard