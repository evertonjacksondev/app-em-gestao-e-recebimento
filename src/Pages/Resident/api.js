const axios = require('axios');

let baseUrl = 'http://localhost:2560'
const Authorization = `Bearer ${
  JSON.parse(sessionStorage.getItem('auth'))
    ? JSON.parse(sessionStorage.getItem('auth')).token
    : ''
}`

export const putResidentId = (body, success, error) => {
    try {
  
      const configAxios = {
        method: 'put',
        timeout: 20000,
        url: `${baseUrl}/resident`,
        data: body,
        headers: {Authorization},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }

  export const getResidentId = (success, error) => {
    try {
  
      const configAxios = {
        method: 'get',
        timeout: 20000,
        url: `${baseUrl}/resident`,
        headers: {Authorization},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }

  export const postResident = (body, success, error) => {
    try {
  
      const configAxios = {
        method: 'post',
        timeout: 20000,
        url: `${baseUrl}/resident`,
        data: body,
        headers: {Authorization},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }

  export const deleteResidentId = (_id, body, success, error) => {
    try {
  
      const configAxios = {
        method: 'delete',
        timeout: 20000,
        url: `${baseUrl}/resident/${_id}`,
        data: body,
        headers: {Authorization},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }