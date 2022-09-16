import axios from "axios";
import { handleError } from "../handle errors";
// axios.defaults.withCredentials = true;

export const post = async (route, body, config,type) => {
  try {
    let res = "";
    if (config) res = await axios.post(route, body, config);
    else res = await axios.post(route, body);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
   
    handleError(error,type);
    return error
  }
};
export const get = async (route, config,type) => {
  console.log(config);
  try {
    let res = "";
    if (config) res = await axios.get(route, config);
    else res = await axios.get(route);
      console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    handleError(error,type);
  }
};
export const put = async (route, body, config) => {
  try {
    let res = "";
    if (config) res = await axios.put(route, body, config);
    else res = await axios.put(route, body);
    console.log(res);
    return res;
  } catch (error) {
    handleError(error);
  }
};
export const deletes = async (route, config) => {
  try {
    let res = "";
    if (config) res = await axios.delete(route, config);
    else res = await axios.delete(route);
    console.log(res);
    return res;
  } catch (error) {
    handleError(error);
  }
};
export const patch = async (route, body, config) => {
  try {
    let res = "";
    console.log(config);

    if (config) res = await axios.patch(route, body, config);
    else res = await axios.patch(route, body);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};
export const multiRequest = async (requests) => {
  try {
    //  axios.all(requests).then(axios.spread((...res)=>{
    //  return res
    // }))
    return Promise.all(requests);
  } catch (error) {
    handleError(error);
  }
};
