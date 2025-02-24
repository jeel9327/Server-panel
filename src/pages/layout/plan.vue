<template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="" />
    <div class="w-full h-full sticky top-0 z-10">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full h-[calc(100vh-50px)] overflow-auto">
        <router-view></router-view>
        <div
          class="bg-white dark:bg-gray-800 dark:border-r-gray-500 dark:border-l-gray-500 dark:border-b-gray-500 border-r border-l border-b h-12 flex"
        >
          <div class="flex items-center m-3">
            <span
              class="las la-money-check-alt text-xl ml-5 dark:hover:text-gray-600 dark:text-gray-500 text-gray-500 hover:text-gray-800"
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
            class="ml-5 flex items-center m-3 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800 font-medium"
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
            class="ml-5 flex items-center m-3 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800 font-medium"
          >
            <h1>Plan</h1>
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
        <div>
          <div class="p-5">
            <div
              :class="[
                'w-full xl:px-10 px-5 mb-10 py-6 mt-4 rounded-md shadow bg-gradient-to-b from-white dark:from-slate-800 to-[#ECF3FF] dark:to-slate-800',
              ]"
            >
              <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                <div class="">
                  <div
                    class="flex items-center dark:text-white justify-between"
                  >
                    <h2 class="text-2xl font-semibold">Professional</h2>
                    <p class="text-blue-700 ml-48 font-semibold">
                      <span class="text-3xl font-bold">$1249</span>/Yearly
                    </p>
                  </div>
                  <p class="text-tiny text-sm dark:text-white text-gray-500">
                    Robust tools for growth
                  </p>
                  <h1 class="py-2.5 text-sm dark:text-white">
                    Ideal for drowing teams, this plan offers the flexibility
                    and resources needed to scale without limits. With unlimited
                    applications and team management features, it's tailored for
                    businesses seeling efficient server and application
                    manangement Enjoy enhanced support response times and
                    increased API access to keep your operations running
                    smoothly.
                  </h1>
                </div>
                <div
                  class="md:col-span-2 border-l pl-5 dark:text-white border-gray-300 w-full"
                >
                  <div class="border-b border-gray-300 pb-5">
                    <div class="flex gap-3 items-center justify-between w-full">
                      <div>
                        <h1>Features</h1>

                        <span
                          class="text-gray-500 dark:text-white block text-xs mt-1"
                        >
                          Professional plan features outlined for easy
                          viewing.</span
                        >
                      </div>
                      <div
                        class="bg-green-100 rounded-full px-2 py-1.5 flex items-center justify-center gap-2.5"
                      >
                        <i
                          class="fa-solid fa-circle text-green-500 text-[12px]"
                        ></i>
                        <span class="pi pi-circle-fill text-green-500"></span>
                        <p class="text-green-500 text-sm">Active</p>
                      </div>
                    </div>
                  </div>
                  <div class="md:col-span-3 flex justify-between w-full pt-5">
                    <div
                      class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5"
                    >
                      <div>
                        <p
                          class="text-tiny dark:text-white font-semibold text-gray-900 mb-2"
                        >
                          Core Features
                        </p>
                        <div class="flex gap-2">
                          <span
                            class="text-blue-500 material-symbols-outlined text-base"
                            >check</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >Unlimited Servers</span
                            >
                          </div>
                        </div>
                        <div class="flex gap-2 space-y-2">
                          <span
                            class="text-blue-500 mt-2 material-symbols-outlined text-base"
                            >check</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >Unlimited Applications</span
                            >
                          </div>
                        </div>
                        <div class="flex gap-2 space-y-2">
                          <span
                            class="text-blue-500 mt-2 material-symbols-outlined text-base"
                            >check</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >All Server Management Features</span
                            >
                          </div>
                        </div>
                        <div class="flex gap-2 space-y-2">
                          <span
                            class="text-blue-500 mt-2 material-symbols-outlined text-base"
                            >check</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >All Apllication Management Features</span
                            >
                          </div>
                        </div>
                        <div class="flex gap-2 space-y-2">
                          <span
                            class="text-blue-500 mt-2 material-symbols-outlined text-base"
                            >check</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >All Team Management Features</span
                            >
                          </div>
                        </div>
                        <div class="flex gap-2 space-y-2">
                          <span
                            class="text-red-500 mt-2 material-symbols-outlined text-base"
                            >close</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >Monitoring Suite</span
                            >
                          </div>
                        </div>
                        <div class="flex gap-2 space-y-2">
                          <span
                            class="text-red-500 mt-2 material-symbols-outlined text-base"
                            >close</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >White-Label Suite</span
                            >
                          </div>
                        </div>
                      </div>
                      <div>
                        <p
                          class="text-tiny font-semibold dark:text-white text-gray-900 mb-2"
                        >
                          Support
                        </p>
                        <div class="flex gap-2">
                          <span
                            class="material-symbols-outlined text-[16px] mt-1.5 text-gray-500"
                          >
                            schedule
                          </span>
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >Response Time</span
                            >
                            <p
                              :class="[
                                'text-sm text-blue-500 font-semibold dark:text-white',
                              ]"
                            >
                              12 Hours
                            </p>
                          </div>
                        </div>
                        <div class="flex gap-2 space-y-2">
                          <span
                            class="text-blue-500 mt-2 material-symbols-outlined text-base"
                            >check</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >Community Support</span
                            >
                          </div>
                        </div>
                        <div class="flex gap-2 space-y-2">
                          <span
                            class="text-blue-500 mt-2 material-symbols-outlined text-base"
                            >check</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >E-mail Support</span
                            >
                          </div>
                        </div>
                        <div class="flex gap-2 space-y-2">
                          <span
                            class="text-red-500 mt-2 material-symbols-outlined text-base"
                            >close</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >App Level Troubleshooting</span
                            >
                          </div>
                        </div>
                        <div class="flex gap-2 space-y-2">
                          <span
                            class="text-red-500 mt-2 material-symbols-outlined text-base"
                            >close</span
                          >
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >Private On-Boarding Session</span
                            >
                          </div>
                        </div>
                      </div>
                      <div>
                        <p
                          class="text-tiny font-semibold dark:text-white text-gray-900 mb-2"
                        >
                          API Rate Limit
                        </p>
                        <div class="flex gap-2">
                          <span
                            class="material-symbols-outlined text-base mt-0.5 text-gray-500"
                          >
                            sync_alt
                          </span>
                          <div>
                            <span
                              :class="['text-sm text-gray-800 dark:text-white']"
                              >Per Minute</span
                            >
                            <p :class="['text-sm text-blue-500 font-semibold']">
                              1500 Requests
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="flex">
                        <p
                          class="text-xl dark:text-white font-semibold text-gray-900 flex gap-2"
                        >
                          Cycle
                          <span class="text-gray-500"> :Lifetime</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default {
  name: "Databases",
  components: {
    sidebar,
    headerTop,
  },
  data() {
    return {
      ownedBy: "Owned By Me",
      searchQuery: "Search by a Name/IP Address",
      searchServer: "",
      databases: [],
    };
  },

  watch: {
    searchServer: "fetchdatabases",
  },

  methods: {
    handleDropdownChange() {
      this.fetchdatabases();
    },

    async fetchdatabases() {
      this.databases = [];
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      let url = `https://app.satesting1.homes/api/organizations/${organizationId}/new-subscription-plan`;
      const params = new URLSearchParams();
      params.append("search", this.searchServer || "");
      params.append("per_page", 10);

      try {
        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // console.log(response.data);
        this.databases = response.data.databases || [];

        if (!Array.isArray(this.databases)) {
          console.error("Unexpected response format:", response.data);
          this.databases = [];
        }
      } catch (error) {
        if (error.response) {
          console.error("Error fetching servers:", error.response.data);
          alert(`Error: ${error.response.data.message || "An error occurred"}`);
        } else if (error.request) {
          console.error("No response received:", error.request);
          alert("Network error: No response from server.");
        } else {
          console.error("Error setting up request:", error.message);
          alert(`Error: ${error.message}`);
        }
        this.databases = [];
      }
    },

    clearSearch() {
      this.searchServer = "";
      this.fetchdatabases();
    },
  },

  mounted() {
    this.fetchdatabases();
  },
};
</script>
    
    <style>
</style>