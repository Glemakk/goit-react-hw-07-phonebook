import { combineReducers, createReducer } from '@reduxjs/toolkit'
// import * as contactsActions from './contactsActions'
import { changeFilter } from './contactsActions'
import { fetchContacts, addItem } from './contactsOperations'

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addItem.fulfilled]: (state, { payload }) => [...state, payload],
})

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
})

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
})

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
})

// С экшнами без createAsyncThunk
// const items = createReducer([], {
//   [fetchContacts.fetchContactsSuccess]: (_, action) => action.payload,
// })

// const isLoading = createReducer(false, {
//   [contactsActions.fetchContactsRequest]: () => true,
//   [contactsActions.fetchContactsSuccess]: () => false,
//   [contactsActions.fetchContactsError]: () => false,
// })

// const error = createReducer(null, {
//   [contactsActions.fetchContactsError]: (_, action) => action.payload,
//   [contactsActions.fetchContactsRequest]: () => null,
// })

// const filter = createReducer('', {
//   [contactsActions.changeFilter]: (_, action) => action.payload,
// })
//=======

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
})
