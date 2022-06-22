 import {getData} from '../../services/getData'

 export const setFetchData = (limit, category) => dispatch => {
   getData(limit, category)
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
