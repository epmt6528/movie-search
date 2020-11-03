import axios from 'axios'

import {API_KEY, BASE_URL_SEARCH, BASE_URL_MOVIE, BASE_URL_TV} from '../config/api_config'

export const searchMovies = async (movieName, category) => {
  let url;

  switch(category){
    case 'movie':
      url = `${BASE_URL_SEARCH}/movie`;
      break;
    case 'multi':
      url = `${BASE_URL_SEARCH}/multi`;
      break;
    case 'TV':
      url = `${BASE_URL_SEARCH}/tv`;
      break;
  }

  try{
    const response = await axios.get(url, {
      params:{
        query: movieName,
        api_key: API_KEY
      }
    })

    const movies = response.data.results
    return movies
    
  }catch(error){
    throw error
  }
}

export const getMovies = async (category) => {
  let url = BASE_URL_MOVIE

  switch(category){
    case 'now_playing':
      url = `${BASE_URL_MOVIE}/now_playing`;
      break;
    case 'popular':
      url = `${BASE_URL_MOVIE}/popular`;
      break;
    case 'top_rated':
      url = `${BASE_URL_MOVIE}/top_rated`;
      break;
    case 'upcoming':
      url = `${BASE_URL_MOVIE}/upcoming`;
      break;
  }

  try{
    const response = await axios.get(url, {
      params:{
        api_key: API_KEY
      }
    })

    const movies = response.data.results
    return movies
    
  }catch(error){
    throw error
  }
}

 