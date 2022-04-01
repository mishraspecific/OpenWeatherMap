import axios from 'axios';
import { HTTP_METHODS } from './api-constants';

const AXIOS = axios.create({
  timeout: 1000,
});

const getReqJsonHeaders = async () => {
  return {
    'Content-Type': 'application/json',
  };
};

export const request = (url, httpMethod) =>
  new Promise((resolve, reject) => {
    try {
      if (url) {
        switch (httpMethod) {
          // GET
          case HTTP_METHODS.GET:
            doGet(url, resolve, reject);
            break;
        }
      }
    } catch (error) {
      reject(error);
    }
  });

/***
 * This function is used for service request with GET as request type
 * and send back completion in resolve or reject based on parent Promise.
 * @param {*} url
 * @param {*} resolve
 * @param {*} reject
 * @param {*} config
 */
const doGet = (url, resolve, reject, config = {}) => {
  AXIOS.get(url, config)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
};
