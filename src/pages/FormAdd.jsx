import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { addUser } from "../store/action"

export default function FormAdd() {

  const dispatch = useDispatch()
  const history = useHistory()

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value}))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser(formData))
    history.push('/')
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1>Form add User</h1>
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={formData.name} onChange={handleOnChange} name="name" required/>
              </div>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" value={formData.username} onChange={handleOnChange} name="username" required/>
              </div>
              <div className="mb-3">
                <label className="form-label">email</label>
                <input type="email" className="form-control" value={formData.email} onChange={handleOnChange} name="email" required/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}