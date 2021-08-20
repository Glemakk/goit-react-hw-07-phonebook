// import { FILTER_FIND } from '../types/phoneBook-types'
import { createReducer } from '@reduxjs/toolkit'
import { filterItem } from '../actions/filter'

// const initialState = ''

const filterReducer = createReducer('', {
  [filterItem]: (_, { payload }) => payload,
})

// const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FILTER_FIND:
//       return action.payload
//     default:
//       return state
//   }
// }

export default filterReducer
