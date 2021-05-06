
const base_url = 'http://localhost:3001/users'

export function setFetchUsers(payload) {
  return { type: 'USERS/FETCH_ALL_USERS', payload}
}

export function fetchUsers(payload) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${base_url}`)
      const data = await response.json()
      dispatch(setFetchUsers(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export function setFetchUserById(payload) {
  return { type: 'USERS/FETCH_USER_BY_ID', payload}
}

export function fetchUsersById(payload) {
  const id = +payload
  return async (dispatch) => {
    try {
      const response = await fetch(`${base_url}/${id}`)
      const data = await response.json()
      dispatch(setFetchUserById(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export function setAddUser(payload) {
  return { type: 'USERS/ADD_USER', payload }
}

export function addUser(payload) {
  return async (dispatch) => {
    try {
      await fetch(`${base_url}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(payload)
      })
      dispatch(setAddUser(payload))
    } catch (err) {
      console.log(err)
    }
  }
}

export function deleteUser(payload) {
  return async (dispatch) => {
    try {
      await fetch(`${base_url}/${payload}`, {
        method: "DELETE",
      })
      dispatch(fetchUsers())
    } catch (err) {
      console.log(err)
    }
  }
}

export function editUser(payload) {
  const id = +payload.id
  return async (dispatch) => {
    try {
      await fetch(`${base_url}/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(payload)
      })
      dispatch(fetchUsers)
    } catch (err) {
      console.log(err)
    }
  }
}



