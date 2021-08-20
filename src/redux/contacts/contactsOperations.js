import * as contactsActions from './contactsActions.js'
import { contactsApi } from '../../services/contacts-api'

console.log('contactsActions >>', contactsActions)
console.log('contactsApi >>', contactsApi)

export const fetchContacts = () => async (dispatch) => {
  // вызов action creator. Ничего не передаем, т.к. это будет true или false
  dispatch(contactsActions.fetchContactsRequest())

  const contacts = contactsApi()
  dispatch(contactsActions.fetchContactsSuccess(contacts))

  try {
    const contacts = contactsApi()
    dispatch(contactsActions.fetchContactsSuccess(contacts))
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message))
  }
}

// без async await: fetch().then().catch  По результату then() вызываем success, по результату catch() - error
