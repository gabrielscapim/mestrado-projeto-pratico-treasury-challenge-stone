import axios from 'axios';

const URL = 'https://mars-authentication-api.herokuapp.com/v1';
const HTTP_STATUS_OK = 200;

const loginRequest = async (login, password, setIsLoginFailed, setIsLoggedIn) => {
  try {
    const response = await axios.post(`${URL}/login`, {
      login,
      password,
    });

    const { status, data } = response;

    if (status === HTTP_STATUS_OK) {
      localStorage.setItem('token', data);
      localStorage.setItem('tokenGenerationTime', Date.now());
      setIsLoginFailed(false);
      setIsLoggedIn(true);
    }
  } catch (error) {
    setIsLoginFailed(true);
    setIsLoggedIn(false);
    console.error(error);
  }
};

const apiRequest = async (method, endpoint, data = null) => {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let response;

    switch (method.toLowerCase()) {
    case 'get':
      response = await axios.get(`${URL}${endpoint}`, config);
      break;
    case 'post':
      response = await axios.post(`${URL}${endpoint}`, data, config);
      break;
    case 'put':
      response = await axios.put(`${URL}${endpoint}`, data, config);
      break;
    case 'delete':
      response = await axios.delete(`${URL}${endpoint}`, config);
      break;
    default:
      throw new Error(`Invalid HTTP method: ${method}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  loginRequest,
  apiRequest,
};
