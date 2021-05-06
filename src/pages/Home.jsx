import { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { deleteUser, fetchUsers } from '../store/action'
export default function Home() {

  const { users } = useSelector((state) => {
    return {
      users: state.users
    }
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }

  const handleEdit = (id) => {
    history.push(`/edit-user/${id}`)
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, number) => {
            return (
              <tr key={user.id}>
                <td>{number + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  <button className="btn btn-warning m-2" style={{minWidth: "100px"}} onClick={() => handleEdit(user.id)}>Edit</button>
                  <button className="btn btn-danger m-2 " style={{minWidth: "100px"}} onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}