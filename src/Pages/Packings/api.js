const axios = require('axios');

let baseUrl = 'https://quaint-tan-toga.cyclic.app';

export const putPackingId = (body, success, error) => {
    try {
  
      const configAxios = {
        method: 'put',
        timeout: 20000,
        url: `${baseUrl}/packing`,
        data: body,
        headers: {Authorization: ""},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }

  export const getPackingId = (success, error) => {
    try {
  
      const configAxios = {
        method: 'get',
        timeout: 20000,
        url: `${baseUrl}/packing`,
        headers: {Authorization: ""},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }

  export const postPacking = (body, success, error) => {
    try {
  
      const configAxios = {
        method: 'post',
        timeout: 20000,
        url: `${baseUrl}/packing`,
        data: body,
        headers: {Authorization: ""},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }

  export const deletePackingId = (_id, body, success, error) => {
    try {
  
      const configAxios = {
        method: 'delete',
        timeout: 20000,
        url: `${baseUrl}/packing/${_id}`,
        data: body,
        headers: {Authorization: ""},
      };
  
      axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
    } catch (error) {
      error(error.response ? error.response.data : error);
    }
  }