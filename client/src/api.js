import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getOperators = () => axios.get(`${baseUrl}opt/getopt`);

export const getOperatorsByCity = (city) =>
  axios.get(`${baseUrl}opt/getopt/${city}`);

export const getOperatorsByCityAndDistrict = (city, district) =>
  axios.get(`${baseUrl}opt/getopt/${city}/${district}`);

export const addOperator = (operator) =>
  axios.post(`${baseUrl}opt/addopt`, operator);
