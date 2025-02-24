// import { createRouter, createWebHistory } from 'vue-router';
// import routes from './routes';

// const router = Router();

// function Router() {
//     const router = new createRouter({
//         history: createWebHistory(),
//         routes,
//     });

//     // router.beforeEach((to, from, next) => {
//     //     console.log(to)
//     //     if(to.meta.requiresAuth){
            
//     //     }else{
//     //         if(localStorage.getItem("accessToken")){
//     //             // redirect to dashboard
//     //         }else{
//     //             next()
//     //         }
//     //     }
//     // })                
//     // return router;
// }

// export default router;



import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("accessToken") !== null;

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login'); 
    } else if (!to.meta.requiresAuth && isAuthenticated && to.name === "Login") {
        next('/dashboard'); 
    } else {
        next(); 
    }
});

export default router;






