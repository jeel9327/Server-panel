// import { createApp } from 'vue'
// import './style.css'

// import App from './App.vue'
// import router from './router'
// import PrimeVue from 'primevue/config';
// import {createpinia} from './stores/auth.js'

// import 'primevue/resources/themes/tailwind-light/theme.css';
// import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';
// import InputText from 'primevue/inputtext';
// import Avatar from 'primevue/avatar';
// import Menu from 'primevue/menu';
// import 'primeicons/primeicons.css';



// import Tooltip from 'primevue/tooltip';

 


// const app = createApp(App);
// const pinia = createpinia();




// app.component("InputText",InputText);
// app.component("Avatar",Avatar);
// app.component("Menu",Menu);

// app.directive('tooltip', Tooltip);

// app.use(router);
// app.use(pinia);
// app.use(PrimeVue);
// app.mount('#app')
 


import { createApp } from 'vue';
import './style.css';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import CountryFlag from 'vue-country-flag'
import { createPinia } from 'pinia';  
import Skeleton from 'primevue/skeleton';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Tooltip from 'primevue/tooltip';

const app = createApp(App);
const pinia = createPinia(); 
pinia.use(piniaPluginPersistedstate);

app.component("InputText", InputText);
app.component("Avatar", Avatar);
app.component("Menu", Menu);
app.component("Skeleton", Skeleton);
app.component('country-flag', CountryFlag);

app.directive('tooltip', Tooltip);

app.use(pinia);
app.use(router);
app.use(PrimeVue);

app.mount('#app');





