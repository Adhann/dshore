import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { editUser, fetchUsersById } from "../store/action"

export default function FormEdit() {
  
  const {id} = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => {
    return {
      user: state.user
    }
  })

  const [formDataEdit, setFormDataEdit] = useState({
    id: "",
    name: "",
    username: "",
    email: ""
  })

  useEffect(() => {
    dispatch(fetchUsersById(id))
  }, [dispatch, id])

  useEffect(() => {
    setFormDataEdit({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    })
  }, [user])

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormDataEdit((prev) => ({ ...prev, [name]: value}))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(editUser(formDataEdit))
    history.push('/')
  }

  return (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-6">
        <h1>Form Edit User</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={formDataEdit.name} onChange={handleOnChange} name="name" required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" value={formDataEdit.username} onChange={handleOnChange} name="username" required/>
          </div>
          <div className="mb-3">
            <label className="form-label">email</label>
            <input type="email" className="form-control" value={formDataEdit.email} onChange={handleOnChange} name="email" required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>

  )
}