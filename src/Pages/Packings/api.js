import axios from 'axios'

let baseUrl = 'https://quaint-tan-toga.cyclic.app'
const Authorization = `Bearer ${
  JSON.parse(sessionStorage.getItem('auth'))
    ? JSON.parse(sessionStorage.getItem('auth')).token
    : ''
}`

export const putPackingId = (body, success, error) => {
  try {
    const configAxios = {
      method: 'put',
      timeout: 40000,
      url: `${baseUrl}/packing`,
      data: body,
      headers: { Authorization }
    }

    axios(configAxios)
      .then(response => {
        success(response.data)
      })
      .catch(err => {
        error(err.response ? err.response.data : err)
      })
  } catch (error) {
    error(error.response ? error.response.data : error)
  }
}

export const getPackingId = (_id, success, error) => {
  try {
    const configAxios = {
      method: 'get',
      timeout: 40000,
      url: `${baseUrl}/packing/${_id}`,
      headers: { Authorization }
    }

    axios(configAxios)
      .then(response => {
        success(response.data)
      })
      .catch(err => {
        error(err.response ? err.response.data : err)
      })
  } catch (error) {
    error(error.response ? error.response.data : error)
  }
}

export const getPacking = (success, error) => {
  try {
    const configAxios = {
      method: 'get',
      timeout: 40000,
      url: `${baseUrl}/packing`,
      headers: { Authorization }
    }

    axios(configAxios)
      .then(response => {
        success(response.data)
      })
      .catch(err => {
        error(err.response ? err.response.data : err)
      })
  } catch (error) {
    error(error.response ? error.response.data : error)
  }
}

export const postPacking = (body, success, error) => {
  try {
    const configAxios = {
      method: 'post',
      timeout: 40000,
      url: `${baseUrl}/packing`,
      data: body,
      headers: {
        Authorization
      }
    }
    axios(configAxios)
      .then(response => {
        success(response.data)
      })
      .catch(err => {
        error(err.response ? Object.values(err.response.data) : err)
      })
  } catch (error) {
    error(error.response ? error.response.data : error)
  }
}

export const deletePackingId = (_id, success, error) => {
  try {
    const configAxios = {
      method: 'delete',
      timeout: 40000,
      url: `${baseUrl}/packing/${_id}`,
      headers: { Authorization }
    }

    axios(configAxios)
      .then(response => {
        success(response.data)
      })
      .catch(err => {
        error(err.response ? err.response.data : err)
      })
  } catch (error) {
    error(error.response ? error.response.data : error)
  }
}
