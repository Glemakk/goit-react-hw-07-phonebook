import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const itemSlice = createSlice({
  name: 'item',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const findContact = state.find((contact) =>
        contact.name.includes(action.payload.name),
      )
      if (findContact) {
        toast.warn(`${action.payload.name} is already in contacts`)
        return
      }
      return [...state, action.payload]
    },
    deleteItem: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  },
})

export const { addItem, deleteItem } = itemSlice.actions
export default itemSlice.reducer
