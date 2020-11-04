import axios from 'axios'
import {API_KEY, BASE_URL_SEARCH, BASE_URL_MOVIE, BASE_URL_TV} from '../config/api_config'


// Search function
export const searchMovies = async (movieName, category) => {
  try{
    const response = await axios.get(`${BASE_URL_SEARCH}/${category}`, {
      params:{
        query: movieName,
        api_key: API_KEY
      }
    })

    const results = response.data.results
    return results
    
  }catch(error){
    throw error
  }
}



// Fetching movies function
export const getMovies = async (category) => {
  try{
    const response = await axios.get(`${BASE_URL_MOVIE}/${category}`, {
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

 // Fetching tv function
export const getTv = async (category) => {
  try{
    const response = await axios.get(`${BASE_URL_TV}/${category}`, {
      params:{
        api_key: API_KEY
      }
    })

    const tv = response.data.results
    return tv
    
  }catch(error){
    throw error
  }
}