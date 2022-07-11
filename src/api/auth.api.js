import http from '@/apiClient'

// register with email and password
export async function register (payload) {
  try {
    const { data } = await http.post('/api/register', payload)
    return data
  } catch (error) {
    return error.response
  }
}

export async function login (payload) {
  // signin with email and password
  try {
    const { data } = await http.post('/api/login', payload)
    return data
  } catch (error) {
    return error.response
  }
}

export async function logout () {
  // sign current user out
  try {
    const { data } = await http.post('/api/logout')
    return data
  } catch (error) {
    return error
  }
}

export async function loadCurrentUser () {
  try {
    const { data } = await http.get('/api/current')
    return data
  } catch (error) {
    return error
  }
}

export async function upload (payload) {
  try {
    const { data } = await http.post('/api/upload', payload)
    return data
  } catch (error) {
    return error
  }
}
