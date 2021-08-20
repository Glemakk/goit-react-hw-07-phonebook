// import { FILTER_FIND } from '../types/phoneBook-types'
import { createAction } from '@reduxjs/toolkit'
// console.log('FILTER_FIND >>', FILTER_FIND)

export const filterItem = createAction('FILTER_FIND')
// export const filterItem = (value) => ({
//   type: FILTER_FIND,
//   payload: value,
// })
