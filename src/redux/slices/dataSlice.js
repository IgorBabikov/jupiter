const initialState = {
   data: []
}

const dataSlice = (state = initialState, action) => {
   switch(action.type) {
       case 'SET_DATA':
         return {
            ...state,
            data: action.payload,
         }

       case 'SET_DELETE_ITEM':
         return {
            ...state,
            data: state.data.filter(item => item.id !== action.payload),
         }

      default: return state
   }
}


export default dataSlice