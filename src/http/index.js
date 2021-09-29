import axios from 'axios';

const httpCreate = (baseURL, timeout = 120e3) => {
  const instance = axios.create({
    baseURL,
    timeout,
    headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
  });
  return instance;
}

export {
  httpCreate,
}