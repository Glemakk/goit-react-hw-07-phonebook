// import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { IconContext } from 'react-icons'

// import { getVisibleContacts } from '../../redux/selectors/contacts-selectors'
// import { deleteItem } from '../../redux/actions/item'
import { deleteItem } from '../../redux/contacts/contactsOperations'
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors'
import { fetchContacts } from '../../redux/contacts/contactsOperations'

import { List, Item } from './ContactList.styled'
import IconButton from '../IconButton'

export default function ContactList() {
  const dispatch = useDispatch()
  // console.log('items >>', items)
  const contacts = useSelector(getVisibleContacts)
  const deleteContact = (id) => {
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
          <IconButton onClick={() => deleteContact(item.id)}>
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
