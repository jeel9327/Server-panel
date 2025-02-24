<template>
    <div class="bg-gray-100 w-full h-auto flex">
      <sidebar />
      <div class="w-full h-full">
        <headerTop />
        <div class="w-full h-[calc(100vh-50px)]">
          <router-view></router-view>
          <div class="bg-white border h-14 flex">
            <div>
              <span
                class="pi pi-shopping-cart ml-5 p-5 text-gray-500 hover:text-gray-800"
              ></span>
            </div>
            <svg
              class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <div class="ml-5 p-4 text-gray-500 hover:text-gray-800 font-medium">
              <h1>Billing</h1>
            </div>
            <svg
              class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <div class="ml-5 p-4 text-gray-500 hover:text-gray-800 font-medium">
              <h1>Checkout</h1>
            </div>
          </div>
          <div class="flex justify-center py-10 h-auto">
            <div class="border border-r-0 w-1/3 bg-purple-50 p-5">
              <div class="mt-5 w-48 m-auto">
                <img src="/public/ServerAvatar.png" alt="" />
              </div>
              <div class="">
                <div
                  class="border mt-7 h-14 w-full bg-blue-100 border-blue-700 p-2 rounded-md"
                >
                  <div class="flex justify-between items-center mt-1">
                    <span class="font-semibold text-xl flex items-center">
                      Add Credits
                    </span>
                    <p class="text-blue-600 font-semibold text-xl">$50.000</p>
                  </div>
                </div>
              </div>
              <div class="font-semibold text-gray-500 mt-5">
                <h1>Important Information</h1>
              </div>
              <div
                class="mt-2 bg-zinc-300 list-disc bg-opacity-20 text-zinc-500 rounded-md"
              >
                <h1 class="text-sm text-gray-500 p-1">
                  You will be redirected to the payment gateway to complete the
                  payment after clicking on "Pay Now" button.
                </h1>
                <h1 class="text-sm text-gray-500 p-1">
                  We provide 30 days money back guarantee on your first purchase.
                  We do not provide any money-back guarantee for any "Self-hosted"
                  systems.
                </h1>
                <h1 class="text-sm text-gray-500 p-1">
                  If you are an Indian customer, A GST of 18% will be charged on
                  your transaction. If you have a GST number, Please update it in
                  your organisation settings.
                </h1>
              </div>
            </div>
            <div class="border border-l-0 w-1/3 bg-white p-5">
              <h1 class="font-semibold text-2xl mt-7">Checkout</h1>
              <h1 class="text-gray-500 text-sm mt-3">Your Order Summary</h1>
              <hr class="mt-3" />
              <div class="flex justify-between">
                <h1 class="text-lg font-medium mt-3">Sub Total</h1>
                <h1 class="text-gray-500 font-medium mt-3">$50.000</h1>
              </div>
              <hr class="mt-3" />
              <div class="flex justify-between">
                <h1 class="text-lg font-medium mt-3">Grand Total</h1>
                <h1 class="text-gray-500 font-medium mt-3">$50.000</h1>
              </div>
              <hr class="mt-3" />
              <h1
                class="text-blue-600 font-semibold text-sm mt-5 cursor-pointer underline"
              >
                Do You have a Promo Code?
              </h1>
              <button
                class="bg-blue-600 hover:bg-blue-700 mt-7 text-white w-full text-center my-2 py-3 rounded-md font-medium"
                @click="checkout"
              >
                <span class="pi pi-lock mr-2"></span>Pay Securely With Stripe
              </button>
              <div class="flex justify-center gap-5 mt-5">
                <img class="w-14 h-14" src="/public/checkout1.png" alt="" />
                <img class="w-36 h-12" src="/public/checkout2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
  import headerTop from "../../components/header.vue";
  import sidebar from "../../components/sidebar.vue";
  export default {
    components: { headerTop, sidebar },
  };

  </script>
    
    <style>
  </style>
    
    
    