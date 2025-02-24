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
              class="las la-server text-xl ml-5 dark:hover:text-gray-600 dark:text-gray-500 text-gray-500 hover:text-gray-800"
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
            <h1>Servers</h1>
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
            <h1>bhavik-backup-test-server (157.245.250.250)</h1>
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
            <div class="grid 2xl:grid-cols-10 xl:grid-cols-2 grid-cols-1 gap-5">
              <div class="2xl:col-span-3 order-1">
                <div
                  class="bg-white dark:bg-gray-800 dark:text-white shadow rounded-lg h-full"
                >
                  <div class="bg-[#F9FAFB] dark:bg-gray-700 rounded-t-lg">
                    <div class="px-4 py-3.5">
                      <h2 class="text-lg">Server Overview</h2>
                    </div>
                  </div>
                  <div class="px-4 pt-2 pb-3">
                    <div class="flex justify-between items-center gap-5">
                      <span
                        class="flex gap-2 items-center xl:justify-start justify-center h-full"
                        ><i class="las la-server text-xl"></i
                        ><span>Server</span></span
                      ><span
                        class="truncate text-tiny text-gray-500 dark:text-gray-300 v-popper--has-tooltip"
                        >bhavik-backup-test-server</span
                      >
                    </div>
                    <div class="flex justify-between items-center gap-5 mt-3">
                      <span
                        class="flex gap-2 items-center xl:justify-start justify-center h-full"
                        ><i class="las la-user-circle text-xl"></i
                        ><span>Owned by</span></span
                      ><span
                        class="truncate text-tiny text-gray-500 dark:text-gray-300 v-popper--has-tooltip"
                        >Me</span
                      >
                    </div>
                    <div class="flex justify-between items-center gap-5 mt-3">
                      <span
                        class="flex gap-2 items-center xl:justify-start justify-center h-full"
                        ><i class="las la-map-marker-alt text-xl"></i
                        ><span>IP Address</span></span
                      ><span class="text-tiny flex gap-2 items-center"
                        ><span
                          class="flag f-us rounded normal-flag !mb-0"
                        ></span
                        ><span
                          class="text-gray-500 dark:text-gray-300 ipAddress v-popper--has-tooltip"
                          >157.245.250.250</span
                        ><button>
                          <i class="las la-copy text-blue-500"></i></button
                      ></span>
                    </div>
                    <div class="flex justify-between items-center gap-5 mt-2">
                      <span
                        class="flex gap-2 items-center xl:justify-start justify-center h-full"
                        ><i class="las la-rss text-xl -rotate-45 -mt-1"></i
                        ><span>Status</span></span
                      >
                      <div class="flex h-full items-center justify-center">
                        <div
                          class="bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 ring-0 inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium"
                        >
                          <i
                            class="fas fa-circle mr-1 text-xs text-green-500"
                          ></i>
                          Connected
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="2xl:col-span-4 xl:col-span-2 2xl:order-2 xl:order-3 order-2"
              >
                <div
                  class="bg-white dark:bg-gray-800 dark:text-white shadow rounded-lg h-full"
                >
                  <div class="bg-[#F9FAFB] dark:bg-gray-700 rounded-t-lg">
                    <div class="px-4 py-3.5">
                      <h2 class="text-lg">Configurations</h2>
                    </div>
                  </div>
                  <div class="px-4 py-3 pt-3.5">
                    <div
                      class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-5 sm:gap-y-7"
                    >
                      <div class="flex gap-2">
                        <div
                          class="bg-[#E5E7EB] dark:bg-gray-700 h-full min-w-[0.3rem] w-[0.3rem] rounded-full"
                        ></div>
                        <div class="flex-1 w-full">
                          <span>CPU Model Name</span>
                          <div class="flex flex-col gap-2 max-w-fit mt-1">
                            <span
                              class="text-gray-600 dark:text-gray-400 truncate text-sm v-popper--has-tooltip"
                              >DO-Regular</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="flex gap-2">
                        <div
                          class="bg-[#E5E7EB] dark:bg-gray-700 h-full min-w-[0.3rem] w-[0.3rem] rounded-full"
                        ></div>
                        <div>
                          <span>Cores</span>
                          <div class="mt-1">
                            <span class="text-gray-600 dark:text-gray-400"
                              >1</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="flex gap-2">
                        <div
                          class="bg-[#E5E7EB] dark:bg-gray-700 h-full min-w-[0.3rem] w-[0.3rem] rounded-full"
                        ></div>
                        <div>
                          <span>Agent Version</span>
                          <div class="mt-1">
                            <span
                              class="text-sm text-gray-600 dark:text-gray-400"
                            >
                              Current: v7.12</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="flex gap-2">
                        <div
                          class="bg-[#E5E7EB] dark:bg-gray-700 h-full min-w-[0.3rem] w-[0.3rem] rounded-full"
                        ></div>
                        <div class="flex-1 w-full">
                          <span>Timezone</span>
                          <div class="mt-1 max-w-fit flex flex-col">
                            <span
                              class="text-gray-600 dark:text-gray-400 truncate text-sm v-popper--has-tooltip"
                              >Etc/UTC</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="flex gap-2">
                        <div
                          class="bg-[#E5E7EB] dark:bg-gray-700 h-full min-w-[0.3rem] w-[0.3rem] rounded-full"
                        ></div>
                        <div class="flex-1 w-full">
                          <span>Uptime</span>
                          <div class="flex flex-col gap-2 max-w-fit mt-1">
                            <span
                              class="text-sm truncate text-gray-600 dark:text-gray-400 v-popper--has-tooltip"
                              >up 4 hours, 26 minutes</span
                            >
                          </div>
                        </div>
                      </div>
                      <div class="flex gap-2">
                        <div
                          class="bg-[#E5E7EB] dark:bg-gray-700 h-full min-w-[0.3rem] w-[0.3rem] rounded-full"
                        ></div>
                        <div>
                          <span>Node Version</span>
                          <div>
                            <span
                              class="text-sm text-gray-600 dark:text-gray-400 mt-1"
                              >v22.13.0</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="2xl:col-span-3 2xl:order-3 xl:order-2 order-3">
                <div
                  class="bg-white dark:bg-gray-800 dark:text-white shadow rounded-lg h-full"
                >
                  <div class="bg-gray-50 dark:bg-gray-700 rounded-t-lg">
                    <div class="px-4 py-3.5">
                      <div
                        class="flex justify-between items-center 2xl:flex-nowrap flex-wrap gap-5"
                      >
                        <h2 class="text-lg sm:mb-0">Specifications</h2>
                        <div class="flex items-center gap-5">
                          <div>
                            <i
                              class="fas fa-share-alt text-lg text-blue-500 cursor-pointer v-popper--has-tooltip"
                            ></i>
                          </div>
                          <div>
                            <i
                              class="las la-sync-alt text-xl text-yellow-500 cursor-pointer v-popper--has-tooltip"
                            ></i>
                          </div>
                          <div class="flex items-center gap-3">
                            <span
                              class="text-gray-500 dark:text-gray-300 text-tiny"
                              >Firewall</span
                            ><button
                              class="bg-blue-500 relative inline-flex h-4 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0"
                              id="headlessui-switch-v-37-7-0"
                              role="switch"
                              type="button"
                              tabindex="0"
                              aria-checked="1"
                            >
                              <span
                                aria-hidden="true"
                                class="translate-x-4 pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                              ></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3">
                    <div class="space-y-3">
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2">
                          <div class="min-w-[40px]">
                            <img
                              src="/public/ubuntu.png"
                              class="w-6 h-auto ml-1"
                            />
                          </div>
                          <span class="text-tiny">OS</span>
                        </div>
                        <div class="flex flex-col gap-y-0.5">
                          <span
                            class="text-tiny text-gray-500 dark:text-gray-300"
                            >Ubuntu 22.04</span
                          >
                        </div>
                      </div>
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2">
                          <div class="min-w-[40px]">
                            <img src="/public/apache.png" class="w-8 h-auto" />
                          </div>
                          <span class="text-tiny">Web Server</span>
                        </div>
                        <div class="flex flex-col">
                          <span
                            class="capitalize text-gray-500 dark:text-gray-200"
                            >Apache</span
                          >
                        </div>
                      </div>
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2">
                          <div class="min-w-[40px]">
                            <img
                              src="/public/digitalocean.png"
                              class="w-6 h-auto"
                            />
                          </div>
                          <span class="text-tiny">Server Provider</span>
                        </div>
                        <div class="flex flex-col">
                          <span
                            class="capitalize text-gray-500 dark:text-gray-200"
                            >digitalocean</span
                          >
                        </div>
                      </div>
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2">
                          <div class="min-w-[40px]">
                            <img src="/public/mysql1.svg" class="w-8 h-auto" />
                          </div>
                          <span class="text-tiny">Database</span>
                        </div>
                        <div class="flex">
                          <span
                            class="capitalize text-gray-500 dark:text-gray-200"
                            >mysql</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <hr class="mt-6 mb-4 dark:border-gray-500" />
            </div>
            <div>
              <h1 class="text-xl dark:text-white">Server Panel</h1>
            </div>
            <div>
              <div class="grid xl:grid-cols-4 sm:grid-cols-2 gap-6 mt-3 mb-10">
                <div
                  class="bg-white dark:bg-gray-800 dark:text-white rounded-md shadow p-4"
                >
                  <div class="flex justify-between items-center text-tiny">
                    <i class="las la-cubes text-2xl"></i>
                    <p class="text-2xl text-[#8e8e8e] dark:text-gray-400">2</p>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <p class="text-tiny">Applications</p>
                    <a
                      href="/organizations/1/servers/1397/applications/create"
                      class="bg-blue-100 dark:bg-blue-100 hover:bg-blue-200 rounded py-1 px-2 text-xs text-blue-500 opacity-100"
                      as="button"
                      ><i class="las la-plus mr-2"></i>Add
                    </a>
                  </div>
                </div>
                <div
                  class="bg-white dark:bg-gray-800 dark:text-white rounded-md shadow p-4"
                >
                  <div class="flex justify-between items-center text-tiny">
                    <i class="las la-database text-2xl"></i>
                    <p class="text-2xl text-[#8e8e8e] dark:text-gray-400">2</p>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <p class="text-tiny">Databases</p>
                    <a
                      href="/organizations/1/servers/1397/databases/create"
                      class="bg-blue-100 dark:bg-blue-100 hover:bg-blue-200 rounded py-1 px-2 text-xs text-blue-500 opacity-100"
                      as="button"
                      ><i class="las la-plus mr-2"></i>Add
                    </a>
                  </div>
                </div>
                <div
                  class="bg-white dark:bg-gray-800 dark:text-white rounded-md shadow p-4"
                >
                  <div class="flex justify-between items-center text-tiny">
                    <i class="las la-sync-alt text-2xl"></i>
                    <p class="text-2xl text-[#8e8e8e] dark:text-gray-400">0</p>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <p class="text-tiny">Cronjobs</p>
                    <a
                      href="/organizations/1/servers/1397/cronjobs/create"
                      class="bg-blue-100 dark:bg-blue-100 hover:bg-blue-200 rounded py-1 px-2 text-xs text-blue-500 opacity-100"
                      as="button"
                      ><i class="las la-plus mr-2"></i>Add
                    </a>
                  </div>
                </div>
                <div
                  class="bg-white dark:bg-gray-800 dark:text-white rounded-md shadow p-4"
                >
                  <div class="flex justify-between items-center text-tiny">
                    <i class="las la-users text-2xl"></i>
                    <p class="text-2xl text-[#8e8e8e] dark:text-gray-400">2</p>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <p class="text-tiny">Application Users</p>
                    <a
                      href="/organizations/1/servers/1397/users/create"
                      class="bg-blue-100 dark:bg-blue-100 hover:bg-blue-200 rounded py-1 px-2 text-xs text-blue-500 opacity-100"
                      as="button"
                      ><i class="las la-plus mr-2"></i>Add
                    </a>
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
      let url = `https://app.satesting1.homes/api/organizations/${organizationId}/servers/1397/usage`;
      const params = new URLSearchParams();

      try {
        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

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