import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addItem } from '../../redux/actions/item'
import { addItem } from '../../redux/contacts/contactsOperations'
import { getItems } from '../../redux/contacts/contacts-selectors'
// import { addItem } from '../../redux/slice/contacts'
import { toast, Zoom } from 'react-toastify'
// import { v4 as uuidv4 } from 'uuid'

import { FcPhoneAndroid, FcBusinessContact } from 'react-icons/fc'
import { IconContext } from 'react-icons'

import Button from '../Button'
import { Form, InputDiv, Input } from './ContactForm.styled'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()
  const stateContacts = useSelector(getItems)
  console.log('stateContacts >>', stateContacts)

  const handleChange = (event) => {
    const { name, value } = event.currentTarget

    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      default:
        //можно вместо return написать, например, "Неподдерживаемый тип поля"
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const findContact = stateContacts.find((contact) =>
      contact.name.includes(name),
    )
    if (findContact) {
      toast.warn(`${name} is already in contacts`)
      return
    }
    const newContact = { name, number }
    dispatch(addItem(newContact)) &&
      toast.success(`"${name}" added to contacts `, {
        transition: Zoom,
      })
    clearForm()
  }

  const clearForm = () => {
    setName('')
    setNumber('')
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>
          <h2>Name</h2>
          <InputDiv>
            <IconContext.Provider value={{ size: '23px' }}>
              <FcBusinessContact />
            </IconContext.Provider>
            &nbsp;
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              autoComplete="off"
            />
          </InputDiv>
        </label>

        <label>
          <h2>Number</h2>
          <InputDiv>
            <IconContext.Provider value={{ size: '23px' }}>
              <FcPhoneAndroid />
            </IconContext.Provider>
            &nbsp;
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              autoComplete="off"
            />
          </InputDiv>
        </label>
        <Button text="Add contact" />
      </Form>
    </div>
  )
}

export default ContactForm
