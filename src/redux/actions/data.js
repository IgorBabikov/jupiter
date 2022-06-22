 import {getData} from '../../services/getData'

 export const setFetchData = (limit) => dispatch => {
   getData(limit)
   .then((data) => dispatch(setData(data)))
   dispatch(setLoaded(false))
 }

export const setLoaded = (loaded) => ({
   type: 'SET_LOADED',
   payload: loaded
})


export const setData = (data) => ({
   type: 'SET_DATA',
   payload: data
})
