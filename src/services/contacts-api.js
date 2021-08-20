import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:7777'

export const contactsApi = async () => {
  const { data } = await axios.get('/contacts')
  return data
}
