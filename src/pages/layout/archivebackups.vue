<template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="" />
    <div class="w-full h-full sticky top-0 z-10">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full h-[calc(100vh-50px)] overflow-auto">
        <router-view></router-view>
        <div
          class="bg-white dark:bg-gray-800 dark:border-r-gray-500  dark:border-b-gray-500 border-r border-b h-12 flex"
        >
          <div class="flex items-center m-3">
            <span
              class="las la-archive text-xl ml-5 text-gray-500 dark:hover:text-gray-600 hover:text-gray-800"
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
            <h1>Archive Backups</h1>
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
        <div class="p-6">
          <div>
            <h1 class="dark:text-white text-lg">Archive Backups</h1>
          </div>
          <div>
            <div
              class="mt-5 rounded-md border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-800 bg-white items-center"
            >
              <div class="gap-x-5 gap-y-5 grid grid-cols-3 p-5">
                <div>
                  <select
                    v-model="created"
                    @change="handleDropdownChange"
                    class="border w-full text-sm pl-2 bg-gray-100 text-gray-700 rounded dark:bg-gray-900 dark:text-white dark:border-gray-900 py-2.5"
                  >
                    <option value="Created At - Descending">
                      Created At - Descending
                    </option>
                    <option value="Created At - Ascending">
                      Created At - Ascending
                    </option>
                  </select>
                </div>

                <div>
                  <select
                    v-model="selectedServer"
                    @change="handleDropdownChange"
                    class="border w-full pl-2 text-sm bg-gray-100 text-gray-700 dark:text-white dark:bg-gray-900 dark:border-gray-900 rounded py-2.5"
                  >
                    <option value="" disabled>Select a Server</option>
                    <option
                      v-for="servers in servers"
                      :key="servers.id"
                      :value="servers.name"
                    >
                      {{ servers.name }} ({{ servers.ip }})
                    </option>
                  </select>
                </div>
                <div>
                  <select
                    v-model="all"
                    @change="handleDropdownChange"
                    class="border w-full pl-2 text-sm bg-gray-100 dark:text-white text-gray-700 dark:bg-gray-900 dark:border-gray-900 rounded py-2.5"
                  >
                    <option value="Application">Application</option>
                    <option value="File System">File System</option>
                    <option value="Database">Database</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mt-5 mb-5">
              <div>
                <div
                  class="rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white p-5 items-center"
                >
                  <div class="w-full">
                    <table
                      class="min-w-full bg-white border dark:border-gray-800 border-gray-200"
                    >
                      <thead>
                        <tr
                          class="w-full bg-gray-200 text-black text-sm dark:bg-gray-700 dark:text-white leading-normal"
                        >
                          <th
                            scope="col"
                            class="relative w-12 px-6 sm:w-16 sm:px-8"
                          >
                            <input
                              type="checkbox"
                              class="dark:bg-white/5 absolute left-4 top-1/2 -mt-2 h-4 w-4 dark:bg-gray-900 rounded border-slate-300 dark:border-white/10 dark:checked:bg-sa-500 dark:text-sa-500 text-sa-500 hover:text-sa-600 focus:ring-0 sm:left-6"
                            />
                          </th>
                          <th class="py-3">Provider</th>
                          <th class="py-3">Application</th>
                          <th class="py-3">Database</th>
                          <th class="py-3">Status</th>
                          <th class="py-3">Type</th>
                          <th class="py-3">Price</th>
                          <th class="py-3">Created At</th>
                          <th class="py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="application.length === 0">
                          <td
                            colspan="9"
                            class="text-center py-2.5 dark:bg-gray-900 dark:text-white"
                          >
                            Data Not Found
                          </td>
                        </tr>
                        <tr
                          v-for="(application, index) in application"
                          :key="index"
                          class="dark:bg-gray-900 dark:text-white"
                        >
                          <td
                            @click="panel"
                            class="max-w-20 px-6 truncate cursor-pointer text-center"
                            v-tooltip.top="application"
                          >
                            {{ application.application_name }} <br />
                            <div
                              class="text-sm flex justify-center text-gray-500"
                            >
                              {{ application.host }}
                              <span
                                class="pi pi-clone cursor-pointer ml-1 text-blue-600 p-0.5"
                              ></span>
                            </div>
                          </td>
                          <td
                            class="max-w-20 px-6 truncate text-center"
                            v-tooltip.top="application.name"
                          >
                            {{ application.database_name }} <br />
                            <div
                              class="flex justify-center text-sm text-gray-500"
                            >
                              {{ application.created_by_humans }}
                            </div>
                          </td>
                          <td
                            class="max-w-20 truncate text-center"
                            v-tooltip.top="application.database_type"
                          >
                            {{ application.status }}
                            <img
                              src="/public/mysql.svg"
                              class="size-20 ml-20"
                              alt=""
                            />
                          </td>
                          <td
                            class="max-w-20 px-6 truncate text-center"
                            v-tooltip.top="application.name"
                          >
                            {{ application.price }} <br />
                            <div
                              class="flex justify-center text-sm text-gray-500"
                            >
                              {{ application.application_size }}
                            </div>
                          </td>
                          <td
                            class="max-w-20 truncate text-center"
                            v-tooltip.top="application.remoteAccess"
                          >
                            {{ application.created_at }}
                          </td>
                          <td class="max-w-20 truncate pl-12">
                            <i
                              class="cursor-pointer p-4 ml-10 text-blue-700 pi pi-users"
                              title="Manage Users"
                            ></i>
                            <i
                              class="cursor-pointer text-red-500 pi pi-trash"
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
      </div>
    </div>
  </div>
</template>
    
<script>
import headerTop from "../../components/header.vue";
import sidebar from "../../components/sidebar.vue";
import apiClient from "../../stores/axios";
export default {
  name: "archivebackups",
  name: "application",
  components: { headerTop, sidebar },
  data() {
    return {
      created: "Created At - Descending",
      all: "Application",
      archivebackups: [],
      selectedServer: "",
      servers: [],
      application: [],
    };
  },

  methods: {
    handleDropdownChange() {
      this.fetchapplication();
    },

    async fetchapplication() {
      this.application = [];
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      let url = `https://app.satesting1.homes/api/organizations/${organizationId}/backups/archive/application`;
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
        this.application = response.data.application || [];

        if (!Array.isArray(this.application)) {
          console.error("Unexpected response format:", response.data);
          this.application = [];
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
        this.application = [];
      }
    },

    async fetchapplication() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      const url = `https://app.satesting1.homes/api/organizations/${organizationId}/backups/deleted-server`;

      try {
        const response = await apiClient.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        this.servers = response.data.servers || [];

        if (!Array.isArray(this.servers)) {
          console.error("Unexpected response format:", response.data);
          this.servers = [];
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
        this.servers = [];
      }
    },
  },

  mounted() {
    this.fetchapplication();
  },
};
</script>
    
  <style>
</style>
    
    