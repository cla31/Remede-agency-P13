import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from '../middleware/middleware'
import '../style/components/editUser.css'

const EditUser = ({ firsN, lastN }) => {
  const dispatch = useDispatch()
  const { firstName, lastName } = useSelector((state) => state.auth)

  //Formulaire ou pas? (pour editForm=> boutons cancel, et edit)
  const [updateUserName, setUpdateUserName] = useState(false)
  const [editBackForm, setEditBackForm] = useState(false)
  //fonction pour afficher le formulaire ou l'annuler, on set setUpdateUserName et setEditBackForm
  // si updateUserName et editBackForm sont différent de true ou false, selon l'état
  const editForm = (e) => {
    e.preventDefault()
    setUpdateUserName(!updateUserName)
    setEditBackForm(!editBackForm)
  }

  //pour mettre à jour les noms et prénoms (fonction onSave)
  // les setUpdateFirstName et setUpdateLastName sont maj via e.target.value
  const [updateFirstName, setUpdateFirstName] = useState('')
  const [updateLastName, setUpdateLastName] = useState('')
  //fonction pour sauvegarder les données
  //si updateFirstName est true, soit données de updateFirstName maj ds le store sinon firstname de l'état initial
  const save = (e) => {
    e.preventDefault()
    const userUpdateData = {
      test: console.log('Les données firstName', firstName),
      firstName: updateFirstName ? updateFirstName : firstName,
      lastName: updateLastName ? updateLastName : lastName,
    }
    //maj des données ds le store cf fonction ci-dessus
    dispatch(updateData(userUpdateData))
    console.log('Les données mises à jour', userUpdateData)
    //affiche les nouveaux nom et prénom
    setUpdateUserName(!updateUserName)
    setEditBackForm(!editBackForm)
  }
  //Return
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
          <h2>{firsN + ' ' + lastN}</h2>
          <button className="edit-button" onClick={editForm}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  )
}

export default EditUser
