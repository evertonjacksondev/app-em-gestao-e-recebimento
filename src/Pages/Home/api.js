const axios = require('axios');

let baseUrl = 'https://quaint-tan-toga.cyclic.app';

export const putHomeId = (body, success, error) => {
    try {
  
      const configAxios = {
        method: 'put',
        timeout: 20000,
        url: `${baseUrl}/home`,
        data: body,
        headers: {Authorization: ""},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }

  export const getHomeId = (success, error) => {
    try {
  
      const configAxios = {
        method: 'get',
        timeout: 20000,
        url: `${baseUrl}/home`,
        headers: {Authorization: ""},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }

  export const postHome = (body, success, error) => {
    try {
  
      const configAxios = {
        method: 'post',
        timeout: 20000,
        url: `${baseUrl}/home`,
        data: body,
        headers: {Authorization: ""},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }

  export const deleteHomeId = (_id, body, success, error) => {
    try {
  
      const configAxios = {
        method: 'delete',
        timeout: 20000,
        url: `${baseUrl}/home/${_id}`,
        data: body,
        headers: {Authorization: ""},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }