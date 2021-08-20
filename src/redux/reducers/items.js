// import { ITEM_ADD, ITEM_DELETE } from '../types/phoneBook-types'
import { toast } from 'react-toastify'
import { createReducer } from '@reduxjs/toolkit'
import { addItem, deleteItem } from '../actions/item'
// import ITEM_DELETE from '../types/phoneBook-types'

//Вариант без createReducer
// const initialState = []

// const itemsReducer = createReducer([], {
//   [ITEM_ADD]: (state, action) => [...state, action.payload],
//   [ITEM_DELETE]: (state, action) =>
//     state.filter((item) => item.id !== action.payload),
// })

const itemsReducer = createReducer([], {
  [addItem]: (state, { payload }) => {
    const findContact = state.find((contact) =>
      contact.name.includes(payload.name),
    )
    if (findContact) {
      toast.warn(`${payload.name} is already in contacts`)
      return
    }
    return [...state, payload]
    // return findContact
    //   ? alert(`${payload.name} is already in contacts`)
    //   : [...state, payload]
  },
  [deleteItem]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
})

// Вариант без createReducer
// const itemsReducer = (state = initialState, action) => {
//   console.log('action.type >>', action.type)
//   console.log('state >>', state)
//   switch (action.type) {
//     case ITEM_ADD:
//       return [...state, action.payload]
//     case ITEM_DELETE:
//       return state.filter((item) => item.id !== action.payload)
//     default:
//       return state
//   }
// }

export default itemsReducer
