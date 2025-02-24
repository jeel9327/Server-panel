<template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="" />
    <div class="w-full h-full sticky top-0 z-10">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full h-[calc(100vh-50px)] overflow-auto">
        <router-view></router-view>
        <div class="">
          <div
            class="bg-white dark:bg-gray-800 dark:border-r-gray-500 dark:border-l-gray-500 dark:border-b-gray-500 border-r border-l border-b h-12 flex"
          >
            <div class="flex items-center m-3">
              <span
                class="pi pi-money-bill ml-5 text-gray-500 hover:text-gray-800 dark:hover:text-gray-600"
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
            <div
              class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-600 font-medium"
            >
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
            <div
              class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-600 font-medium"
            >
              <h1>transactions</h1>
            </div>
          </div>
          <div>
            <div class="fixed bottom-5 right-7 z-50 no-print">
              <a
                href="https://support.satemporary.site"
                target="_blank"
                class="bg-[#485BFF] rounded-full py-2 px-2 flex items-center justify-center"
                ><img src="/public/dark-logo-sm1.png" class="w-7"
              /></a>
            </div>
          </div>
          <div class="p-7">
            <div class="">
              <div class="flex justify-end mb-5">
                <button
                  @click="printPage"
                  class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                >
                  Print
                </button>
              </div>
            </div>
            <div
              id="printableArea"
              class="bg-white dark:bg-gray-800 dark:text-white p-5 mb-5 rounded-md shadow-lg h-auto"
            >
              <div class="grid grid-cols-2">
                <div>
                  <!-- <img
                    src="/public/ServerAvatar.png"
                    class="w-48 h-14"
                    alt=""
                  /> -->
                  <img
                    src="/public/dark-logo.png"
                    alt="Dark Mode Logo"
                    class="h-10 w-auto hidden dark:block"
                  />
                  <img
                    src="/public/ServerAvatar.png"
                    alt="Light Mode Logo"
                    class="h-10 w-auto block dark:hidden"
                  />
                </div>
                <div class="text-right">
                  <h1 class="text-4xl font-medium">Tax Invoice</h1>
                  <p class="mt-3">E/S/0432/24-25</p>
                  <p class="">Date & Time: 2024-11-23 10:35:17</p>
                </div>
              </div>
              <div class="grid grid-cols-2 mt-6">
                <div class="">
                  <h1 class="text-xl font-semibold">From</h1>
                  <p>ServerAvatar Cloud Technologies PVT LTD</p>
                  <p>
                    101, Skyview Business Horizonr, Near Swaminarayan Parking,
                    Sarthana Jakatnaka, <br />
                    Surat - 395006
                  </p>
                  <p>
                    <span class="font-semibold">PAN Number : </span
                    ><span>A1DEFS1940C</span>
                  </p>
                  <p>
                    <span class="font-semibold">TEST : </span
                    ><span>fdsfsdfdsfsdf</span>
                  </p>
                </div>
                <div class="text-right">
                  <h1 class="text-xl font-semibold">To</h1>
                  <p>Radadiya Dipali</p>
                  <p>Surat, Surat, Bono, 32424f, Ghana</p>
                  <p class="mt-3">
                    <span class="font-semibold">test : </span
                    ><span>6354342</span>
                  </p>
                  <p class="mt-3">
                    <span class="font-semibold">Status : </span
                    ><span>Paid</span>
                  </p>
                </div>
              </div>
              <div>
                <div class="mt-5">
                  <div class="container mx-auto">
                    <table class="min-w-full border-gray-400 border-b-2">
                      <thead>
                        <tr
                          class="bg-gray-100 text-black border-gray-400 border-b-2 text-sm"
                        >
                          <th class="py-3">#</th>
                          <th class="py-3 px-10 text-left">Service</th>
                          <th class="py-3 text-right pr-5">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="payment?.length < 0">
                          <td
                            colspan="3"
                            class="py-2 text-center text-gray-300"
                          >
                            No Data Found
                          </td>
                        </tr>
                        <tr v-for="(payment, index) in payment" :key="index">
                          <td>
                            <div
                              v-if="payment && payment.gateway == 'Stripe'"
                              class=""
                            >
                              <img
                                src="/public/stripe.png"
                                class="w-10 m-auto"
                                alt=""
                              />
                            </div>
                            <div v-if="payment.gateway == 'Paypal'" class="">
                              <img
                                src="/public/paypal.png"
                                class="w-10 m-auto"
                                alt=""
                              />
                            </div>
                            <div v-if="payment.gateway == 'Instamojo'" class="">
                              <img
                                src="/public/instamojo.png"
                                class="w-10 m-auto"
                                alt=""
                              />
                            </div>
                          </td>
                          <td class="pl-8 p-2">
                            {{ payment.service || "N/A" }}
                          </td>
                          <td class="text-center">
                            ${{ payment.final_amount || "N/A" }}
                          </td>
                          <td class="text-center">
                            {{ payment.discount_amount || "$0.000" }}
                          </td>
                          <td class="text-center">
                            {{ payment.created_at || "N/A" }}
                          </td>
                          <td class="text-center">
                            <div
                              v-if="payment && payment.status == 2"
                              class="text-sm bg-yellow-50 text-yellow-600 rounded-full py-1 border border-yellow-600/20"
                            >
                              <div>Pending</div>
                            </div>
                            <div
                              v-if="payment && payment.status == 1"
                              class="text-sm bg-green-50 text-green-600 rounded-full py-1 border border-green-600/20"
                            >
                              <div>Success</div>
                            </div>
                            <div
                              v-if="payment && payment.status == 0"
                              class="text-sm bg-red-50 text-red-600 rounded-full py-1 border border-red-600/20"
                            >
                              <div>Failed</div>
                            </div>
                          </td>
                          <td class="p-4">
                            <div
                              v-if="payment && payment.status == 1"
                              class="text-sm bg-blue-700 hover:bg-blue-800 text-white cursor-pointer rounded-md text-center py-1 border"
                            >
                              <div>Invoice</div>
                            </div>
                            <div
                              v-if="payment && payment.status == 2"
                              class="text-center"
                            >
                              <div>-</div>
                            </div>
                            <div
                              v-if="payment && payment.status == 0"
                              class="text-center"
                            >
                              <div></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div>
                <div class="text-right mt-4">
                  <p class="mt-3 font-semibold">
                    <span class="mr-3">Amount: </span><span>$324.60</span>
                  </p>
                  <p class="mt-3 font-semibold">
                    <span class="mr-3">Discount: </span><span>$0.00</span>
                  </p>
                  <p class="mt-3 font-semibold underline">
                    <span class="mr-3">Grand Total: </span><span>$324.60</span>
                  </p>
                </div>
              </div>
              <div class="text-center mt-5 font-semibold">
                <h1>It's good to have business with you!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "../../stores/axios";
import sidebar from "/src/components/sidebar.vue";
import headerTop from "/src/components/header.vue";
import Modal from "/src/components/Model.vue";

export default {
  name: "payment",
  components: {
    sidebar,
    headerTop,
    Modal,
  },
  data() {
    return {
      allservers: "All Servers",
      searchServer: "",
      payment: [],
    };
  },

  watch: {
    searchServer: "fetchpayment",
  },

  methods: {
    handleDropdownChange() {
      this.fetchpayment();
    },
    openModal() {
      this.open = true;
    },
    closeModal() {
      this.open = false;
      this.selectedAmount = null;
    },
    printPage() {
      const originalContents = document.body.innerHTML;
      const printableArea = document.getElementById("printableArea").innerHTML;

      document.body.innerHTML = printableArea;

      const style = document.createElement("style");
      style.innerHTML = `
        @media print {
          body {
            padding: 30px;
          }
          .top-notice,
          .verify-notice,
          .sidebar,
          .print-btn,
          .add-credit-btn,
          .secondary-header,
          footer,
          nav {
            display: none;
          }
        }
      `;
      document.head.appendChild(style);

      window.print();

      document.body.innerHTML = originalContents;
      document.head.removeChild(style);
    },

    async fetchpayment() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const url = `https://app.satesting1.homes/api/payment/M3Co559oWQQM2a7y7XPAVMbXiVN1UYBf`;
      const params = new URLSearchParams();

      try {
        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.data && response.data) {
          this.payment = response.data.transactions;
        } else {
          console.warn("No payment data found in the response.");
        }
      } catch (error) {
        console.error("Error fetching payment:", error.message);
      }
    },

    filterpayment() {
      this.fetchpayment();
    },
    clearFilter() {
      this.selectedDate = null;
      this.fetchpayment();
    },
  },

  mounted() {
    this.fetchpayment();
  },
};
</script>

<style>
@media print {
  body {
    padding: 0;
    margin: 0;
  }
  .top-notice,
  .verify-notice,
  .sidebar,
  .print-btn,
  .add-credit-btn,
  .secondary-header,
  footer,
  nav {
    display: none;
  }
}
</style>
