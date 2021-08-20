// import { combineReducers } from 'redux'
import { combineReducers } from '@reduxjs/toolkit'
import filterReducer from './filter'
import itemsReducer from './items'

export const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})
