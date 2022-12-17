import axios from 'axios'

let baseUrl = 'https://quaint-tan-toga.cyclic.app'

export const LoginAuth = (body, success, error) => {
  try {
    const configAxios = {
      method: 'post',
      timeout: 40000,
      url: `${baseUrl}/login`,
      data: body
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
