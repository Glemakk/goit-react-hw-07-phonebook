import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// import * as contactsActions from './contactsActions.js'
import { getContact, postContact } from '../../services/contacts-api'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await getContact()
    return contacts
  },
)

export const addItem = createAsyncThunk('contacts/add', async () => {
  const contact = await postContact()
  return contact
})

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
