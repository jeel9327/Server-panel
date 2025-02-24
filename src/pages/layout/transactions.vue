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
              <h1>Transactions</h1>
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
          <div class="grid grid-cols-2 p-7">
            <div class="flex items-center">
              <h1 class="text-xl font-medium text-gray-900 dark:text-white">
                Transactions
              </h1>
            </div>
            <div class="flex justify-end">
              <div class="">
                <button
                  type="button"
                  @click="fetchpayment"
                  class="rounded-md px-3.5 py-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white shadow-lg bg-white hover:shadow-none"
                >
                  <i class="pi pi-sync"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="px-7 mb-10">
            <div
              class="rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-900 shadow-lg bg-white p-5 items-center"
            >
              <div class="w-full">
                <table
                  class="min-w-full bg-white border dark:border-gray-900 border-gray-200"
                >
                  <thead>
                    <tr
                      class="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white text-sm leading-normal"
                    >
                      <th class="py-4">Payment Gateway</th>
                      <th class="py-3 px-10 text-left">Description</th>
                      <th class="py-3 px-1.5">Amount</th>
                      <th class="py-3 px-1.5">Discount</th>
                      <th class="py-3 px-1.5">Date & Time</th>
                      <th class="py-3 px-1.5">Status</th>
                      <th class="py-3 px-1.5">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="payment.length === 0">
                      <td colspan="7" class="text-center text-gray-500">
                        No Data Found
                      </td>
                    </tr>
                    <tr
                      v-for="(payment, index) in payment"
                      :key="index"
                      class="even:bg-gray-100 dark:even:bg-gray-800 dark:bg-gray-900 dark:text-white"
                    >
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
                          class="text-sm bg-yellow-50 text-yellow-600 dark:bg-yellow-500/15 dark:text-yellow-400 rounded-full py-1 border border-yellow-600/20"
                        >
                          <div>Pending</div>
                        </div>
                        <div
                          v-if="payment && payment.status == 1"
                          class="text-sm bg-green-50 text-green-600 dark:bg-green-500/15 dark:text-green-400 rounded-full py-1 border border-green-600/20"
                        >
                          <div>Success</div>
                        </div>
                        <div
                          v-if="payment && payment.status == 0"
                          class="text-sm bg-red-50 text-red-600 rounded-full py-1 border border-red-600/20"
                        >
                          <div>Success</div>
                        </div>
                        <div v-if="payment && payment.status == 0" class="">
                          <div>Failed</div>
                        </div>
                      </td>
                      <td class="p-4">
                        <div
                          @click="Invoice"
                          v-if="payment && payment.status == 1"
                          class="text-sm bg-blue-700 hover:bg-blue-800 text-white cursor-pointer dark:border-0 rounded-md text-center py-1 border"
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
    Invoice() {
      this.$router.push("/Invoice");
    },

    async fetchpayment() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const url = `https://app.satesting1.homes/api/payment`;
      const params = new URLSearchParams();

      try {
        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.data && response.data) {
          this.payment = response.data.transactions.data;
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
</style>