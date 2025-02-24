// import { defineStore } from 'pinia';


// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     access_token: null,
//   }),
//   actions: {
//     setAccessToken(access_token) {
//       this.access_token = access_token;
//     },
//     clearAccessToken() {
//       this.access_token = null;
//     },
//   },
// });





// import { defineStore } from 'pinia';

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     access_token: null,
//     userData: null, 
//   }),
//   actions: {
//     setAccessToken(access_token) {
//       this.access_token = access_token;
//     },
//     setUserData(userData) { 
//       this.userData = userData;
//     },
//     clearAuthData() {
//       this.access_token = null;
//       this.userData = null; 
//     },
//   },
// });



import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    access_token: null,
    userData: null, 
  }),
  persist:true,
  actions: {
    setAccessToken(access_token) {
      this.access_token = access_token;
    },
    setUserData(userData) { 
      this.userData = userData;
    },
    // clearAuthData() {
    //   this.access_token = null;
    //   this.userData = null; 
    // },
  },
});