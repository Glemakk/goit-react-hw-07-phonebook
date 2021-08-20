import { combineReducers, createReducer } from '@reduxjs/toolkit'
import * as contactsActions from './contactsActions'

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
})

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
})

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
})

console.log()
const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, action) => action.payload,
})

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
})
