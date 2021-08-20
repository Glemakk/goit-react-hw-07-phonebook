// import { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
// import * as actions from './redux/actions/explain-actions'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import Container from './components/Container'
// import { v4 as uuidv4 } from 'uuid'

const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  // )
  // // const [filter, setFilter] = useState('')

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  // const handleChange = ({ currentTarget }) => {
  //   const value = currentTarget.value
  //   const name = currentTarget.name

  //   switch (name) {
  //     case 'contacts':
  //       setContacts(value)
  //       break
  //     case 'filter':
  //       setFilter(value)
  //       break
  //     default:
  //       return
  //   }
  // }

  // const handleSubmit = (name, number) => {
  //   const randomID = uuidv4()
  //   const newContact = { id: randomID, name, number }
  //   const findContact = contacts.find((contact) => contact.name.includes(name))

  //   findContact
  //     ? toast.warn(`${name} is already in contacts`)
  //     : setContacts((prevState) => [...prevState, newContact])
  // }

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase()
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   )
  // }

  // const deleteContact = (contactId) => {
  //   setContacts((prevState) =>
  //     prevState.filter((contact) => contact.id !== contactId),
  //   )
  // }
  // console.log('getVisibleContacts >>', getVisibleContacts())

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" autoClose={2000} />
    </Container>
  )
}

export default App

//-----the old class
// export default class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   }

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts')
//     const parsedContatcs = JSON.parse(contacts)
//     if (parsedContatcs) {
//       this.setState({ contacts: parsedContatcs })
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }

//   handleChange = ({ currentTarget }) => {
//     const value = currentTarget.value
//     const name = currentTarget.name

//     this.setState({
//       [name]: value,
//     })
//   }

//   handleSubmit = (name, number) => {
//     const randomID = uuidv4()
//     const newContact = { id: randomID, name, number }

//     const findContact = this.state.contacts.find((contact) =>
//       contact.name.includes(name),
//     )

//     findContact
//       ? toast.warn(`${name} is already in contacts`)
//       : // alert(`${name} is already in contacts`)
//         this.setState((prevState) => ({
//           contacts: [...prevState.contacts, newContact],
//         }))
//   }

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state
//     const normalizedFilter = filter.toLowerCase()
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     )
//   }

//   deleteContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId,
//       ),
//     }))
//   }

//   render() {
//     const { filter } = this.state
//     const visibleContacts = this.getVisibleContacts()
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.handleSubmit} />

//         <h2>Contacts</h2>
//         <Filter onChange={this.handleChange} filter={filter} />
//         <ContactList contacts={visibleContacts} onClick={this.deleteContact} />
//         <ToastContainer position="top-center" autoClose={2000} />
//       </Container>
//     )
//   }
// }
