export default [
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
]