import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from '../middleware/middleware'
import '../style/components/editUser.css'
import PropTypes from 'prop-types'
/**
 * Creation of the EditUser component to access and edit form to update name and lastname.
 * @component
 * @param {string} firstN
 * @param {string} lastN
 * @returns {JSX.Element} EditUser component
 */

const EditUser = ({ firstN, lastN }) => {
  const dispatch = useDispatch()
  const { firstName, lastName } = useSelector((state) => state.auth)
  const [updateUserName, setUpdateUserName] = useState(false)
  const [editBackForm, setEditBackForm] = useState(false)
  const editForm = (e) => {
    e.preventDefault()
    setUpdateUserName(!updateUserName)
    setEditBackForm(!editBackForm)
  }
  const [updateFirstName, setUpdateFirstName] = useState('')
  const [updateLastName, setUpdateLastName] = useState('')
  const save = (e) => {
    e.preventDefault()
    const userUpdateData = {
      firstName: updateFirstName ? updateFirstName : firstName,
      lastName: updateLastName ? updateLastName : lastName,
    }
    dispatch(updateData(userUpdateData))
    setUpdateUserName(!updateUserName)
    setEditBackForm(!editBackForm)
  }

  return (
    <div className="header">
      <h1 className={editBackForm ? 'black-title' : 'white-title'}>
        Welcome back
      </h1>
      {/* Si les données sont mises à jour */}
      {updateUserName ? (
        <form className="user-form">
          <div className="input-wrapper">
            <label htmlFor="first-name"></label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder={firstName}
              required
              onChange={(e) => setUpdateFirstName(e.target.value)}
            />
            <label htmlFor="last-name"></label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder={lastName}
              required
              onChange={(e) => setUpdateLastName(e.target.value)}
            />
          </div>

          <div className="user-buttons">
            <button className="btn" type="submit" onClick={save}>
              Save
            </button>
            <button className="btn" type="submit" onClick={editForm}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2>{firstN + ' ' + lastN}</h2>
          <button className="edit-button" onClick={editForm}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  )
}

export default EditUser

//Proptypes
EditUser.propTypes = {
  firsN: PropTypes.string,
  lastN: PropTypes.string,
}
