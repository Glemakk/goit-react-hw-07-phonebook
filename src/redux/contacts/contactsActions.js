import { createAction } from '@reduxjs/toolkit'

// Это 3 синхронных actions, кот-е дойдут до редюсера

// pending
export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
)
//fullfilled
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
)
// reject
export const fetchContactsError = createAction('contacts/fetchContactsError')

export const changeFilter = createAction('contacts/changeFilter')
