import axios from 'axios';

const AUTHENTICATION_URL = 'https://mars-authentication-api.herokuapp.com/v1';
const GENERATE_CODE_URL = 'https://mars-promotion-api.herokuapp.com/v1';
const HTTP_STATUS_OK = 200;

const loginRequest = async (login, password, setIsLoginFailed, setIsLoggedIn, setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await axios.post(`${AUTHENTICATION_URL}/login`, {
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
    setIsLoading(false);
  } catch (error) {
    setIsLoading(true);
    setIsLoginFailed(true);
    setIsLoggedIn(false);
    console.error(error);
    setIsLoading(false);
  }
};

const apiRequest = async (method, endpoint, data = null, setIsLoading) => {
  try {
    setIsLoading(true);
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let response;

    switch (method.toLowerCase()) {
    case 'get':
      response = await axios.get(`${GENERATE_CODE_URL}${endpoint}`, config);
      break;
    case 'post':
      response = await axios.post(`${GENERATE_CODE_URL}${endpoint}`, data, config);
      break;
    case 'put':
      response = await axios.put(`${GENERATE_CODE_URL}${endpoint}`, data, config);
      break;
    case 'delete':
      response = await axios.delete(`${GENERATE_CODE_URL}${endpoint}`, config);
      break;
    default:
      throw new Error(`Invalid HTTP method: ${method}`);
    }
    setIsLoading(false);
    return response.data;
  } catch (error) {
    setIsLoading(true);
    console.error(error);
    setIsLoading(false);
    throw error;
  }
};

export {
  loginRequest,
  apiRequest,
};
