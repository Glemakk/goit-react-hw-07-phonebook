// import PropTypes from 'prop-types'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IconContext } from 'react-icons'
import { FcSearch } from 'react-icons/fc'

import { InputDiv } from '../ContactForm/ContactForm.styled'
import { Input } from '../ContactForm/ContactForm.styled'
import { FilterContainer } from './Filter.styled'
// import { getFilter } from '../../redux/selectors/contacts-selectors'
// import { filterItem } from '../../redux/actions/filter'
import { getFilter } from '../../redux/contacts/contacts-selectors'
import { changeFilter } from '../../redux/contacts/contactsActions'

export default function Filter({ onChange }) {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)
  return (
    <label>
      <FilterContainer>
        <h3>Find contacts by name</h3>
        <InputDiv>
          <IconContext.Provider value={{ size: '23px' }}>
            <FcSearch />
          </IconContext.Provider>
          &nbsp;
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
            placeholder="Search contact"
            autoComplete="off"
          />
        </InputDiv>
      </FilterContainer>
    </label>
  )
}
// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// }
