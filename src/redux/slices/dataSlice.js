const initialState = {
   loaded: false,
   data: []
}

const dataSlice = (state = initialState, action) => {
   switch(action.type) {
      case 'SET_LOADED':
         return {
            ...state,
            loaded: action.payload
         }

       case 'SET_DATA':
         return {
            ...state,
            data: action.payload,
            loaded: true
         }

       case 'SET_DELETE_ITEM':
         return {
            ...state,
            data: state.data.filter(item => item.id !== action.payload),
            loaded: true
         }

      default: return state
   }
}


export default dataSlice