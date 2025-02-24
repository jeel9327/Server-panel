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
              class="las la-project-diagram text-xl ml-5 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800"
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
            <h1>Integration</h1>
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
          <div
            class="m-5 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white items-center"
          >
            <div class="grid grid-cols-3 gap-5 p-5">
              <div class="relative">
                <template v-if="searchQuery === 'Search by a Name/IP Address'">
                  <i
                    class="pi pi-search text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"
                  ></i>
                  <input
                    type="text"
                    v-model="searchServer"
                    placeholder="Search"
                    class="border rounded dark:bg-gray-900 dark:border-gray-900 w-full bg-gray-100 p-1.5 pl-8"
                  />
                </template>
              </div>
              <div>
                <select
                  v-model="ownedBy"
                  @change="handleDropdownChange"
                  class="border w-full bg-gray-100 dark:bg-gray-900 dark:border-gray-900 text-gray-500 rounded py-2"
                >
                  <option value="Owned By Me">Owned By Me</option>
                  <option value="Shared With Me">Shared With Me</option>
                  <option value="Deleted Servers">Deleted Servers</option>
                </select>
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  @click="fetchdatabases"
                  class="rounded-md px-3 py-1.5 mr-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white bg-slate-100 hover:bg-slate-200"
                >
                  <i class="pi pi-sync"></i>
                </button>
                <button class="bg-blue-600 text-white w-52 rounded-md">
                  <span class="pi pi-plus mr-2"></span>Create an Application
                </button>
              </div>
            </div>
          </div>

          <div
            class="m-5 mb-10 rounded-md border border-gray-200 shadow-lg bg-white p-5 dark:bg-gray-800 dark:border-gray-800 items-center"
          >
            <div class="w-full">
              <table
                class="min-w-full bg-white border border-gray-200 dark:border-gray-800"
              >
                <thead>
                  <tr
                    class="w-ful bg-gray-200 dark:bg-gray-700 dark:text-white text-black text-sm leading-normal"
                  >
                    <th class="py-3">Server</th>
                    <th class="py-3">Name</th>
                    <th class="py-3">Database</th>
                    <th class="py-3">Size(MB)</th>
                    <th class="py-3">Remote Access</th>
                    <th class="py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="databases.length === 0">
                    <td
                      colspan="6"
                      class="text-center dark:bg-gray-900 dark:text-white py-2.5"
                    >
                      Data Not Found
                    </td>
                  </tr>
                  <tr v-for="(databases, index) in databases" :key="index">
                    <td
                      class="max-w-20 truncate text-center"
                      v-tooltip.top="databases"
                    >
                      <!-- <img src="/src/download-removebg-preview (4).png" class="size-7" alt=""> -->
                      {{ databases.server_name }} <br />
                      <div
                        class="text-sm flex justify-start items-start ml-14 text-gray-500"
                      >
                        {{ databases.host }}
                        <span
                          class="pi pi-clone ml-1 text-blue-600 p-0.5"
                        ></span>
                      </div>
                    </td>
                    <td
                      class="max-w-20 truncate text-center"
                      v-tooltip.top="databases.name"
                    >
                      {{ databases.name }} <br />
                      <div
                        class="flex justify-start items-start ml-10 text-sm text-gray-500"
                      >
                        {{ databases.created_by_humans }}
                      </div>
                    </td>
                    <td
                      class="max-w-20 truncate text-center"
                      v-tooltip.top="databases.database_type"
                    >
                      <!-- {{ databases.database_type }} -->
                      <img
                        src="/public/mysql.svg"
                        class="size-20 ml-20"
                        alt=""
                      />
                    </td>
                    <td
                      class="max-w-20 truncate text-center"
                      v-tooltip.top="databases.size"
                    >
                      {{ databases.size }}
                    </td>
                    <td
                      class="max-w-20 truncate text-center"
                      v-tooltip.top="databases.remoteAccess"
                    >
                      {{ databases.remoteAccess }}
                    </td>
                    <td class="max-w-20 truncate pl-12">
                      <i
                        class="cursor-pointer p-4 ml-10 text-blue-700 pi pi-users"
                        title="Manage Users"
                      ></i>
                      <i
                        class="cursor-pointer text-gray-500 pi pi-trash"
                        title="Delete"
                      ></i>
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
</template>
    
    <script>
import apiClient from "../../stores/axios";
import sidebar from "/src/components/sidebar.vue";
import headerTop from "/src/components/header.vue";

export default {
  name: "referral",
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

      // const organizationId = 1;
      let url = `https://app.satesting1.homes/api/referral-info`;
      const params = new URLSearchParams();
      params.append("search", this.searchServer || "");
      params.append("per_page", 10);

      console.log(`Fetching data from: ${url}?${params.toString()}`);

      try {
        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log(response.data);
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