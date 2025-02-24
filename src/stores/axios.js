// import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: `https://api.satesting1.homes`, 
//   headers: {
//     'Content-Type': '/organizations/1/servers',
//   },
// });

// export default apiClient;


import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://api.satesting1.homes`, 
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default apiClient;


