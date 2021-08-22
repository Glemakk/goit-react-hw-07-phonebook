import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// import * as contactsActions from './contactsActions.js'
import {
  getContact,
  postContact,
  deleteContact,
} from '../../services/contacts-api'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContact()
      return contacts
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const addItem = createAsyncThunk(
  'contacts/add',
  async (item, { rejectWithValue }) => {
    try {
      const contact = await postContact(item)
      return contact
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const deleteItem = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await deleteContact(id)
      return contact
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

// Операция без createAsyncThunk
// export const fetchContacts = () => async (dispatch) => {
//   // вызов action creator. Ничего не передаем, т.к. это будет true или false
//   dispatch(contactsActions.fetchContactsRequest())

//   try {
//     const contacts = await getContact()
//     dispatch(contactsActions.fetchContactsSuccess(contacts))
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error.message))
//   }
// }

//
// export const postContacts = () => (dispatch) => {
//   dispatch(contactsActions.fetchContactsRequest())

//   const contacts = addContact()
//   dispatch(contactsActions.fetchContactsSuccess(contacts))

//   try {
//     const contacts = addContact()
//     dispatch(contactsActions.fetchContactsSuccess(contacts))
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error.message))
//   }
// }

// без async await: fetch().then().catch  По результату then() вызываем success, по результату catch() - error
