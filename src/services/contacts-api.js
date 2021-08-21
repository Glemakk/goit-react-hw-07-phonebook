import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:7777'

export const getContact = async () => {
  const { data } = await axios.get('/contacts')
  return data
}

export const postContact = async (contact) => {
  const { data } = await axios.post('/contacts', contact)
  return data
}

export const deleteContact = async (id) => {
  await axios.delete(`/contacts/${id}`)
  return id
}
