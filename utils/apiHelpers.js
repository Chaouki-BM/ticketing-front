import axios from 'axios';

const BASE_URL = 'http://192.168.1.27:3500';

const postApi = async (url, body, config = {}) => {
  try {
    let result = await axios.post(`${BASE_URL}/${url}`, body, config);
    console.log('Data', result);
    if (result.data) {
      return result.data;
    } else {
      return null;
    }
  } catch (error) {
    console.warn(error);
    return null;
  }
};

const putApi = async (url, body, config = {}) => {
  try {
    let resp = await axios.put(`${BASE_URL}/${url}`, body, config);
   // console.log(resp.data);
    let {data} = resp;
    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log('error', error);
    console.warn(error.message);
    return null;
  }
};

const getApi = async (url, config = {}) => {
  try {
    let {data} = await axios.get(`${BASE_URL}/${url}`, config);

    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};
const deleteApi = async (url, config = {}) => {
  try {
    let {data} = axios.delete(`${BASE_URL}/${url}`, config);
    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

export {postApi, getApi, deleteApi, putApi, BASE_URL};
