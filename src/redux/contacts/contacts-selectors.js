export const getItems = (state) => state.contacts.items
export const getFilter = (state) => state.contacts.filter
export const getLoading = (state) => state.contacts.isLoading
// console.log('state >>', state)
// console.log(' getFilter >>', getFilter())

export const getVisibleContacts = (state) => {
  const filter = getFilter(state)
  console.log('filter >>', filter)
  const items = getItems(state)
  console.log('items >>', items)
  const normalizedFilter = filter.toLowerCase()
  return items.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter),
  )
}
