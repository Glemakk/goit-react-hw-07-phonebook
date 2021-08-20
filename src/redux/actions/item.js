// import { ITEM_ADD, ITEM_DELETE } from '../types/phoneBook-types'
import { createAction } from '@reduxjs/toolkit'

export const addItem = createAction('ITEM_ADD')
// export const addItem = (formData) => ({
//   type: ITEM_ADD,
//   payload: formData,
// })

export const deleteItem = createAction('ITEM_DELETE')
// export const deleteItem = (id) => ({
//   type: ITEM_DELETE,
//   payload: id,
// })

// console.log(addItem(555))
