import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:7777'

export const getContact = async () => {
  const { data } = await axios.get('/contacts')
  return data
}

export const postContact = async () => {
  const { data } = await axios.post('/contacts')
  return data
}
