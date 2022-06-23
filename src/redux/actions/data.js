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


export const setDeleteItem = (id) => ({
   type: 'SET_DELETE_ITEM',
   payload: id
})
