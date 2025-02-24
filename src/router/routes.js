// export default [
//     {
//         name: "Master",
//         path: '/',
//         component:import("../pages/layout/master.vue"),
//         redirect: '/dashboard',
//         accessToken: true,
//         children: [
//             {
//                 name:"dashboard",
//                 path:"/dashboard",
//                 component:import("../pages/layout/dashboard.vue"),
//                 accessToken: true,
                
//             },            
//         ]   
//     },
//     {
//         name: "Login",
//         path: '/login',
//         component: import("../pages/login.vue"),
//         accessToken: false,
//         // meta: {
//         //     requiresAuth: false
//         // }

//     },
    
// ];


export default [
    {
        name: "Master",
        path: '/dashboard',
        component: import("../pages/layout/master.vue"),
        children: [
            {
                name: "dashboard",
                path: "dashboard",
                component: import("../pages/layout/dashboard.vue"),
                meta: { requiresAuth: true },
            },
        ],
    },
    {
        name: "servers",
        path: '/servers',
        component: import("/src/pages/layout/servers.vue"), 
        children: [],
    },
    {
        name: "applications",
        path: '/applications',
        component: import("/src/pages/layout/Applications.vue"), 
        children: [],
    },
    {
        name: "databases",
        path: '/databases',
        component: import("/src/pages/layout/Databeses.vue"), 
        children: [],
    },
    {
        name: "backups",
        path: '/backups',
        component: import("/src/pages/layout/Backups.vue"), 
        children: [],
    },
    {
        name: "integration",
        path: '/integration',
        component: import("/src/pages/layout/Integration.vue"), 
        children: [],
    },
    {
        name: "Team Managemnet",
        path: '/managemnet',
        component: import("/src/pages/layout/Teammanagement.vue"), 
        children: [],
    },
    {
        name: "create",
        path: '/create',
        component: import("/src/pages/layout/Create.vue"), 
        children: [],
    },
    {
        name: "referral",
        path: '/referral',
        component: import("/src/pages/layout/referral.vue"), 
        children: [],
    },
    {
        name: "create1",
        path: '/create1',
        component: import("/src/pages/layout/Create1.vue"), 
        children: [],
    },
    {
        name: "Billing",
        path: '/billing',
        component: import("/src/pages/layout/Billing.vue"), 
        children: [],
    },
    {
        name: "Checkout",
        path: '/checkout',
        component: import("/src/pages/layout/Checkout.vue"), 
        children: [],
    },
    {
        name: "Transactions",
        path: '/transactions',
        component: import("/src/pages/layout/transactions.vue"), 
        children: [],
    },
    {
        name: "Invoice",
        path: '/invoice',
        component: import("/src/pages/layout/Invoice.vue"), 
        children: [],
    },
    {
        name: "details",
        path: '/details',
        component: import("/src/pages/layout/details.vue"), 
        children: [],
    },
    {
        name: "reseller",
        path: '/reseller',
        component: import("/src/pages/layout/reseller.vue"), 
        children: [],
    },
    {
        name: "connect",
        path: '/connect',
        component: import("/src/pages/layout/connect.vue"), 
        children: [],
    },
    {
        name: "managed",
        path: '/managed',
        component: import("/src/pages/layout/Managedservices.vue"), 
        children: [],
    },
    {
        name: "plan",
        path: '/plan',
        component: import("/src/pages/layout/plan.vue"), 
        children: [],
    },
    {
        name: "serverpanel",
        path: '/serverpanel',
        component: import("/src/pages/layout/serverpanel.vue"), 
        children: [],
    },
    {
        name: "git",
        path: '/git',
        component: import("/src/pages/layout/git.vue"), 
        children: [],
    },
    {
        name: "cloudstorage",
        path: '/cloudstorage',
        component: import("/src/pages/layout/cloudstorage.vue"), 
        children: [],
    },
    {
        name: "cloudplatforms",
        path: '/cloudplatforms',
        component: import("/src/pages/layout/cloudplatforms.vue"), 
        children: [],
    },
    {
        name: "organization",
        path: '/organization',
        component: import("/src/pages/layout/organization.vue"), 
        children: [],
    },
    {
        name: "archivebackups",
        path: '/archivebackups',
        component: import("/src/pages/layout/archivebackups.vue"), 
        children: [],
    },
    {
        name: "customer",
        path: '/customer',
        component: import("/src/pages/layout/Customer.vue"), 
        children: [],
    },
    {
        name: "SSL",
        path: '/ssl',
        component: import("/src/pages/layout/SSL.vue"), 
        children: [],
    },

    {
        name: "Login",
        path: '/',
        component: import("../pages/login.vue"),
        meta: { requiresAuth: false }, 
    },
    {
        name: "Changepassword",
        path: '/changepassword',
        component: import("/src/pages/layout/changepassword.vue"),
        meta: { requiresAuth: false }, 
    },
];



