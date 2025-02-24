<template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="" />
    <div class="w-full h-full sticky top-0 z-10">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full h-[calc(100vh-50px)] overflow-auto">
        <router-view></router-view>
        <div
          class="bg-white dark:bg-gray-800 dark:border-r-gray-500 dark:border-b-gray-500 border-r border-b h-12 flex"
        >
          <div class="flex items-center m-3">
            <span
              class="las la-hdd text-xl ml-5 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800"
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
            class="ml-5 flex items-center dark:hover:text-gray-600 m-3 text-gray-500 hover:text-gray-800 font-medium"
          >
            <h1>Backups</h1>
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
        <div class="grid grid-cols-2 p-5">
          <div class="font-bold dark:text-white text-xl">
            <h1>Instant Backups</h1>
          </div>

          <div class="flex justify-end">
            <button
              type="button"
              @click="fetchapplications"
              class="rounded-md px-3 py-1.5 mr-4 shadow-md hover:shadow-none text-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white bg-white"
            >
              <i class="pi pi-sync"></i>
            </button>
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-2.5 flex items-center rounded-md"
            >
              Take an Instant Backup
            </button>
          </div>
        </div>
        <div>
          <div
            class="m-5 rounded-md border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-800 bg-white items-center"
          >
            <div class="flex flex-wrap gap-x-5 gap-y-5 p-5">
              <div>
                <select
                  v-model="allbackups"
                  @change="handleDropdownChange"
                  class="border w-96 pl-2 bg-gray-100 text-gray-500 rounded dark:bg-gray-900 dark:border-gray-900 py-2.5"
                >
                  <option value="All Backups">All Backups</option>
                  <option value="Shared With Me">Application Backups</option>
                  <option value="Deleted Servers">File System Backups</option>
                  <option value="Deleted Servers">Database Backups</option>
                </select>
              </div>
              <div>
                <select
                  v-model="allservers"
                  @change="handleDropdownChange"
                  class="border w-96 pl-2 bg-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-900 rounded py-2.5"
                >
                  <option value="All Servers">All Servers</option>
                  <option value="Shared With Me">Shared With Me</option>
                  <option value="Deleted Servers">Deleted Servers</option>
                </select>
              </div>

              <div class="relative max-w-sm w-96">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                  datepicker
                  datepicker-buttons
                  datepicker-autoselect-today
                  type="date"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-900 block w-full ps-10 p-2.5 dark:bg-gray-900 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>

              <div class="flex ml-auto gap-5">
                <div class="flex justify-end">
                  <button
                    class="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-md"
                    v-tooltip.top="'Filter'"
                  >
                    <span class="material-symbols-outlined mt-2"
                      >filter_alt</span
                    >
                  </button>
                </div>
                <div class="flex justify-end">
                  <button
                    class="bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-md"
                    v-tooltip.top="'Clear Filter'"
                  >
                    <span class="material-symbols-outlined mt-2"
                      >filter_alt_off</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="m-5 mb-10 rounded-md dark:bg-gray-800 dark:border-gray-800 border border-gray-200 shadow-lg bg-white p-5 items-center"
          >
            <div class="w-full">
              <table
                class="min-w-full bg-white dark:border-gray-800 border border-gray-200"
              >
                <thead>
                  <tr
                    class="w-full bg-gray-200 dark:bg-gray-900 dark:text-white text-black text-sm leading-normal"
                  >
                    <th class="py-3 px-4">Provider</th>
                    <th class="py-3 px-4">Name</th>
                    <th class="py-3 px-4">Application</th>
                    <th class="py-3 px-4">Database</th>
                    <th class="py-3 px-4">Status</th>
                    <th class="py-3 px-4">Type</th>
                    <th class="py-3 px-4">Price</th>
                    <th class="py-3 px-4">Created At</th>
                    <th class="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="applications.length === 0">
                    <td
                      colspan="9"
                      class="text-center dark:bg-gray-700 dark:text-white py-2.5"
                    >
                      Data Not Found
                    </td>
                  </tr>
                  <tr v-for="(server, index) in applications" :key="index">
                    <td
                      class="max-w-20 truncate pl-8 p-4"
                      v-tooltip.top="server.name"
                    >
                      {{ server.server_name }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-8"
                      v-tooltip.top="server.ip"
                    >
                      {{ server.name }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-20"
                      v-tooltip.top="server.web_server"
                    >
                      {{ server.system_user }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-16"
                      v-tooltip.top="server.database_type"
                    >
                      {{ server.primary_domain }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.operating_system"
                    >
                      {{ server.php_version }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.size"
                    >
                      {{ server.size }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.framework"
                    >
                      {{ server.framework }}
                    </td>
                    <td class="max-w-20 truncate pl-12">
                      <i
                        class="cursor-pointer p-4 ml-10 pi pi-file-edit"
                        title="Server panel"
                      ></i>
                      <i
                        class="cursor-pointer text-red-500 pi pi-trash"
                        title="Disconnect"
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
  name: "Applications",
  components: {
    sidebar,
    headerTop,
  },
  data() {
    return {
      allbackups: "All Backups",
      allservers: "All Servers",
      searchQuery: "Search by a Name/IP Address",
      searchServer: "",
      applications: [],
    };
  },

  watch: {
    searchServer: "fetchapplications",
  },

  methods: {
    handleDropdownChange() {
      this.fetchapplications();
    },

    async fetchapplications() {
      this.applications = [];
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      let url = `https://app.satesting1.homes/api/organizations/${organizationId}/backups`;
      const params = new URLSearchParams();
      params.append("search", this.searchServer || "");
      params.append("per_page", 10);

      // console.log(`Fetching data from: ${url}?${params.toString()}`);

      try {
        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // console.log(response.data);
        this.applications = response.data.applications || [];

        if (!Array.isArray(this.applications)) {
          console.error("Unexpected response format:", response.data);
          this.applications = [];
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
        this.applications = [];
      }
    },

    clearSearch() {
      this.searchServer = "";
      this.fetchapplications();
    },
  },

  mounted() {
    this.fetchapplications();
  },
};
</script>
  
  <style>
</style>