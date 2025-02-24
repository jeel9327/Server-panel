<template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="" />
    <div class="w-full h-full sticky top-0 z-10">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full h-[calc(100vh-50px)] overflow-auto">
        <router-view></router-view>
        <div class="">
          <div
            class="bg-white dark:bg-gray-800 dark:border-r-gray-500 dark:border-b-gray-500 border-r border-b h-12 flex"
          >
            <div class="flex items-center m-3">
              <span
                class="pi pi-sitemap ml-5 text-gray-500 hover:text-gray-800 dark:hover:text-gray-600"
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
              <h1>Wallet</h1>
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
          <div class="p-5 grid grid-cols-3 gap-10">
            <div
              class="border dark:border-gray-900 h-28 rounded-lg bg-gradient-to-r from-blue-700 to-blue-400"
            >
              <div class="grid grid-cols-2">
                <!-- <div
                  class="text-white mt-8 text-center ml-3 rounded-full p-2 px-5"
                >
                  <span class="material-symbols-outlined mt-1.5"
                    >account_balance_wallet</span
                  >
                </div> -->
                <div class="flex">
                  <div
                    class="h-10 w-10 mt-8 m-5 rounded-full flex justify-center items-center text-2xl text-white bg-gray-300/50"
                  >
                    <i class="las la-wallet"></i>
                  </div>
                  <h1 class="text-white text-lg font-semibold mt-6">
                    Available Credits <br /><span class="font-bold text-xl"
                      >$0</span
                    >
                  </h1>
                </div>
                <div
                  @click="openModal"
                  class="ml-32 px-4 py-3.5 mt-0.5 inline-block justify-center items-center border-l-2 cursor-pointer"
                >
                  <span
                    class="material-symbols-outlined text-white flex justify-center items-center text-5xl"
                    >add</span
                  >
                  <h1
                    class="text-white text-xl flex justify-center items-center font-semibold"
                  >
                    ADD
                  </h1>
                </div>
              </div>
            </div>
            <div class="h-28">
              <div
                class="border flex justify-center h-11 p-2 rounded-lg bg-blue-200 font-semibold text-blue-500"
              >
                <h1>Redeem Credits</h1>
              </div>
              <div class="flex">
                <input
                  type="text"
                  v-model="redeemCode"
                  placeholder="Enter Redeem Code"
                  class="border dark:bg-gray-700 dark:border-gray-900 dark:text-white h-11 w-96 mt-5 rounded-lg pl-2"
                />
                <button
                  :disabled="!redeemCode"
                  class="bg-blue-600 text-white w-24 h-11 mt-5 ml-5 rounded-lg"
                  :class="{ 'opacity-50 cursor-not-allowed': !redeemCode }"
                >
                  Apply
                </button>
              </div>
            </div>
            <div class="h-28">
              <div
                class="border flex justify-center h-11 p-2 rounded-lg bg-blue-200 font-semibold text-blue-500"
              >
                <h1>Minimum Credit Reminder</h1>
              </div>
              <div class="flex">
                <input
                  type="number"
                  v-model="credit"
                  placeholder="Enter Minimum Credit"
                  class="border dark:bg-gray-700 dark:text-white dark:border-gray-900 h-11 w-96 mt-5 rounded-lg pl-2 pr-2"
                />
                <button
                  :disabled="!credit"
                  class="bg-blue-600 text-white w-24 h-11 mt-5 ml-5 rounded-lg"
                  :class="{ 'opacity-50 cursor-not-allowed': !credit }"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="p-5 dark:text-white font-medium text-lg">
              <h1>Usage Summary</h1>
            </div>
            <div class="ml-5 flex gap-5">
              <div class="relative w-52">
                <div
                  class="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
                <input
                  id="datepicker-actions"
                  v-model="selectedDate"
                  datepicker
                  datepicker-buttons
                  datepicker-autoselect-today
                  type="date"
                  class="bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Select Date"
                />
              </div>
              <div class="flex gap-3">
                <div
                  class="bg-blue-600 hover:bg-blue-700 text-white p-2 w-20 flex justify-center items-center rounded-md"
                >
                  <button @click="filterCharges">Filter</button>
                </div>
                <div
                  class="bg-red-600 hover:bg-red-700 text-white p-2 w-20 flex justify-center items-center rounded-md"
                >
                  <button @click="clearFilter">Clear</button>
                </div>
              </div>
              <div class="ml-auto">
                <button
                  type="button"
                  @click="fetchcharges"
                  class="rounded-md dark:bg-gray-700 text-gray-500 dark:hover:bg-gray-600 dark:text-white px-3 py-1.5 mr-6 bg-white shadow-md hover:shadow-none"
                >
                  <i class="pi pi-sync"></i>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              class="m-5 mb-10 rounded-md border border-gray-200 dark:bg-gray-800 shadow-lg bg-white p-5 items-center"
            >
              <div class="w-full">
                <table class="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr
                      class="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white text-sm leading-normal"
                    >
                      <th class="py-4 px-8 text-left">Description</th>
                      <th class="py-3">Amount</th>
                      <th class="py-3">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="charges.length === 0">
                      <td
                        colspan="3"
                        class="text-center dark:bg-gray-900 dark:text-white text-gray-500"
                      >
                        No Data Found
                      </td>
                    </tr>
                    <tr
                      v-for="(charge, index) in charges"
                      :key="index"
                      class="even:bg-gray-100 dark:even:bg-gray-800 dark:bg-gray-900 dark:text-white"
                    >
                      <td
                        class="pl-8 p-4 border"
                        v-tooltip.top="charge.service"
                      >
                        {{ charge.service || "N/A" }}
                      </td>
                      <td class="text-center border">
                        ${{ charge.base_amount || "N/A" }}
                      </td>
                      <td class="text-center border">
                        {{ charge.created_at || "N/A" }}
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

    <Modal
      :show="open"
      @closeModal="closeModal"
      :customClass="['overflow-visible md:max-w-2xl w-full']"
    >
      <template #title>
        <span class="flex justify-between dark:text-white items-start"
          >Add Credit to Wallet
          <span
            @click="closeModal"
            class="material-symbols-outlined cursor-pointer"
            >close</span
          ></span
        >
        <hr class="mt-5" />
      </template>
      <template #default>
        <p class="mt-3 dark:text-white flex justify-start">Credit</p>
        <div class="grid grid-cols-3 gap-10 p-5">
          <div
            :class="[
              'border',
              'text-center',
              'cursor-pointer',
              'h-10',
              'p-2',
              'rounded-md',
              selectedAmount === 10
                ? 'border-blue-500 bg-blue-100 text-blue-700'
                : 'border-gray-500 bg-blue-50',
            ]"
            @click="updateInput(10)"
          >
            $10.00
          </div>
          <div
            :class="[
              'border',
              'text-center',
              'cursor-pointer',
              'h-10',
              'p-2',
              'rounded-md',
              selectedAmount === 50
                ? 'border-blue-500 bg-blue-100 text-blue-700'
                : 'border-gray-500 bg-blue-50',
            ]"
            @click="updateInput(50)"
          >
            $50.00
          </div>
          <div
            :class="[
              'border',
              'text-center',
              'cursor-pointer',
              'h-10',
              'p-2',
              'rounded-md',
              selectedAmount === 80
                ? 'border-blue-500 bg-blue-100 text-blue-700'
                : 'border-gray-500 bg-blue-50',
            ]"
            @click="updateInput(80)"
          >
            $80.00
          </div>
        </div>
        <div class="px-5">
          <input
            type="number"
            v-model="creditAmount"
            class="border border-gray-500 w-full pl-2 h-10 rounded-md pr-2"
          />
          <div class="flex justify-end items-end">
            <button
              @click="checkout"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-3"
            >
              Checkout
            </button>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import apiClient from "../../stores/axios";
import sidebar from "/src/components/sidebar.vue";
import headerTop from "/src/components/header.vue";
import Modal from "/src/components/Model.vue";

export default {
  name: "charges",
  components: {
    sidebar,
    headerTop,
    Modal,
  },
  data() {
    return {
      redeemCode: "",
      credit: "",
      allservers: "All Servers",
      searchServer: "",
      charges: [],
      selectedDate: null,
      open: false,
      creditAmount: 50,
      selectedAmount: 50,
    };
  },

  watch: {
    searchServer: "fetchcharges",
  },

  methods: {
    handleDropdownChange() {
      this.fetchcharges();
    },
    openModal() {
      this.open = true;
    },
    closeModal() {
      this.open = false;
      this.selectedAmount = null;
    },

    async fetchcharges() {
      this.charges = [];
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      const url = `https://app.satesting1.homes/api/organizations/${organizationId}/billing-details/charges`;
      const params = new URLSearchParams();
      params.append("search", this.searchServer || "");
      params.append("per_page", 10);
      if (this.selectedDate) {
        params.append("date", this.selectedDate);
      }

      try {
        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.data && response.data.charges) {
          this.charges = response.data.charges.data;
        } else {
          console.warn("No charges data found in the response.");
        }
      } catch (error) {
        console.error("Error fetching charges:", error.message);
      }
    },

    filterCharges() {
      this.fetchcharges();
    },
    clearFilter() {
      this.selectedDate = null;
      this.fetchcharges();
    },
    updateInput(amount) {
      this.creditAmount = amount;
      this.selectedAmount = amount;
    },
    checkout() {
      this.$router.push("/checkout");
    },
  },

  mounted() {
    this.fetchcharges();

    if (localStorage.getItem("openModal") === "true") {
      this.openModal();
      localStorage.removeItem("openModal");
    }
  },
};
</script>

<style>
</style>
