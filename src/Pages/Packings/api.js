import axios from 'axios'

let baseUrl = 'http://localhost:2560'

export const putPackingId = (body, success, error) => {
  try {
    const configAxios = {
      method: 'put',
      timeout: 40000,
      url: `${baseUrl}/packing`,
      data: body,
      headers: { Authorization: '' }
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

export const getPackingId = (success, error) => {
  try {
    const configAxios = {
      method: 'get',
      timeout: 40000,
      url: `${baseUrl}/packing`,
      headers: { Authorization: '' }
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
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5MWY0YjFlZDk1YzU0N2I3ODg3YyIsImVtYWlsIjoiZGV2LmV2ZXJ0b25qYWNrc29uQGdtYWlsLmNvbSIsImlhdCI6MTY3MDY4MzU1MywiZXhwIjoxNjcwNzY5OTUzfQ.BOXr4RMYeHDqq5fOKz_XlscrGZboSNkcf2ZqdDZRlkI'
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

export const deletePackingId = (_id, body, success, error) => {
  try {
    const configAxios = {
      method: 'delete',
      timeout: 40000,
      url: `${baseUrl}/packing/${_id}`,
      data: body,
      headers: { Authorization: '' }
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
