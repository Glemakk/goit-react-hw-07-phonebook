// import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { IconContext } from 'react-icons'

// import { getVisibleContacts } from '../../redux/selectors/contacts-selectors'
import { deleteItem } from '../../redux/actions/item'
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors'
import { fetchContacts } from '../../redux/contacts/contactsOperations'

import { List, Item } from './ContactList.styled'
import IconButton from '../IconButton'

// const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase()
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     )
//   }

// const getItems = (state) => state.items
// const getFilter = (state) => state.filter
// const getVisibleContacts = (state) => {
//   const filter = getFilter(state)
//   const items = getItems(state)
//   const normalizedFilter = filter.toLowerCase()
//   return items.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   )
// }

// const deleteContact = (contactId) => {
//     setContacts((prevState) =>
//       prevState.filter((contact) => contact.id !== contactId),
//     )
//   }

export default function ContactList() {
  const dispatch = useDispatch()
  // console.log('items >>', items)
  const contacts = useSelector(getVisibleContacts)
  const DeleteContact = (id) => {
    dispatch(deleteItem(id))
  }

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  console.log('contacts >>', contacts)
  return (
    <List>
      {contacts.map((item) => (
        <Item key={item.id}>
          {item.name}: {item.number}
          <IconButton onClick={() => DeleteContact(item.id)}>
            <IconContext.Provider value={{ size: '23px' }}>
              <RiDeleteBin6Fill />
            </IconContext.Provider>
          </IconButton>
        </Item>
      ))}
    </List>
  )
}

// ContactList.propTypes = {
//   // contacts: PropTypes.array.isRequired,
//   // onClick: PropTypes.func.isRequired,
// }
