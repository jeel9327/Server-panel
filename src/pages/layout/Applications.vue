<template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="" />
    <div class="w-full h-full sticky top-0 z-10">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full h-[calc(100vh-50px)] overflow-auto">
        <router-view></router-view>
        <div
          class="bg-white dark:bg-gray-800 dark:border-r-gray-500  dark:border-b-gray-500 border-r  border-b h-12 flex"
        >
          <div class="flex items-center m-3">
            <span
              class="las la-cubes text-xl ml-5 dark:text-gray-500 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800"
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
            class="ml-5 flex items-center dark:text-gray-500 dark:hover:text-gray-600 m-3 text-gray-500 hover:text-gray-800 font-medium"
          >
            <h1>Applications</h1>
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
            class="m-5 rounded-md dark:bg-gray-800 dark:border-gray-800 border border-gray-200 shadow-lg bg-white items-center"
          >
            <div class="grid grid-cols-3 gap-5 p-5">
              <div class="relative">
                <i
                  class="pi pi-search text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"
                ></i>
                <input
                  type="text"
                  v-model="searchServer"
                  placeholder="Search"
                  class="border rounded dark:bg-gray-900 text-gray-500 dark:border-gray-900 dark:text-white w-full bg-gray-100 p-1.5 pl-8"
                />
              </div>
              <div>
                <select
                  v-model="selectedServer"
                  @change="handleDropdownChange"
                  class="border w-full bg-gray-100 dark:bg-gray-900 dark:border-gray-900 dark:text-white text-gray-500 rounded py-2"
                >
                  <option value="">All Servers</option>
                  <option
                    v-for="(applications, index) in applications"
                    :key="index"
                  >
                    {{ applications.server_name }}
                  </option>
                </select>
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  @click="fetchApplications"
                  class="rounded-md px-3 py-1.5 dark:bg-gray-700 text-gray-600 dark:hover:bg-gray-600 dark:text-white mr-4 bg-slate-100 hover:bg-slate-200"
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
            class="m-5 mb-10 rounded-md border dark:bg-gray-800 dark:border-gray-800 border-gray-200 shadow-lg bg-white p-5 items-center"
          >
            <div class="w-full">
              <table
                class="min-w-full bg-white border border-gray-200 dark:border-gray-800"
              >
                <thead>
                  <tr
                    class="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white text-sm leading-normal"
                  >
                    <th class="py-3 px-4">Server</th>
                    <th class="py-3 px-4">Name</th>
                    <th class="py-3 px-4">Application User</th>
                    <th class="py-3 px-4">Primary Domain</th>
                    <th class="py-3 px-4">PHP Version</th>
                    <th class="py-3 px-4">Status</th>
                    <th class="py-3 px-4">SSL</th>
                    <th class="py-3 px-4">Size (MB)</th>
                    <th class="py-3 px-4">Framework</th>
                    <th class="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="applications.length === 0">
                    <td
                      colspan="10"
                      class="text-center py-2.5 dark:bg-gray-900 dark:text-white"
                    >
                      No Data Found
                    </td>
                  </tr>

                  <tr
                    v-for="(applications, index) in applications"
                    :key="index"
                    class="dark:bg-gray-900 dark:text-white border-b dark:border-b-gray-600"
                  >
                    <td
                      @click="panel"
                      class="text-center truncate p-4 cursor-pointer"
                      v-tooltip.top="databases"
                    >
                      {{ applications.server_name || "-" }} <br />
                      <div
                        class="text-sm text-center text-gray-500 dark:text-gray-300"
                      >
                        {{ applications.ip }}
                        <span
                          class="las la-copy cursor-pointer ml-1 text-blue-600 p-0.5"
                        ></span>
                      </div>
                    </td>
                    <td class="pl-8 p-4 truncate" v-tooltip.top="databases">
                      {{ applications.name || "-" }} <br />
                      <div
                        class="text-sm flex justify-start items-start text-gray-500"
                      >
                        {{ applications.created_by_humans }}
                      </div>
                    </td>
                    <td
                      class="text-center bg-blue-50 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 ring-blue-700/10 dark:ring-blue-400/30 rounded-full inline-flex items-cente justify-center px-2.5 py-1 text-xs font-medium ring-1 ring-inset"
                      v-tooltip.top="applications.system_user"
                    >
                      {{ applications.system_user || "-" }}
                    </td>
                    <td class="text-center">
                      {{ applications.primary_domain || "-" }}
                      <a
                        href="http://jg8lzk.cloudgorilla.site"
                        target="_blank"
                        class="text-blue-600"
                        ><i class="las la-external-link-alt"></i
                      ></a>
                    </td>
                    <td
                      class="text-center"
                      v-tooltip.top="applications.php_version"
                    >
                      {{ applications.php_version || "-" }}
                    </td>
                    <td>
                      <div
                        v-if="applications && applications.active == '1'"
                        class="whitespace-nowrap flex justify-center items-center"
                      >
                        <!-- <span class="material-symbols-outlined text-green-500">
                          check_circle
                        </span> -->
                        <img src="/public/yes.png" alt="" class="w-5">
                      </div>
                      <div
                        v-if="applications.active == '0'"
                        class="whitespace-nowrap flex justify-center items-center"
                      >
                        <!-- <span class="material-symbols-outlined text-red-500">
                          check_circle
                        </span> -->
                        <img src="/public/remove.png" alt="" class="w-5">
                      </div>
                    </td>
                    <td>
                      <div
                        v-if="applications && !applications.ssl_type == ''"
                        class="whitespace-nowrap flex justify-center items-center"
                      >
                        <i class="las la-lock text-green-500"></i>
                      </div>
                      <div
                        v-else
                        class="whitespace-nowrap flex justify-center items-center"
                      >
                        <i class="las la-lock-open text-red-500"></i>
                      </div>
                    </td>
                    <td class="text-center" v-tooltip.top="applications.size">
                      {{ applications.size || "0.00" }}
                    </td>
                    <td
                      class="text-center"
                      v-tooltip.top="applications.framework"
                    >
                      {{ applications.framework || "-" }}
                    </td>
                    <td class="space-x-3 flex items-center py-7 px-5">
                      <i
                        @click="applicationdashboard"
                        class="las la-tachometer-alt cursor-pointer text-blue-600 text-xl"
                        title="Application Dashboard"
                      ></i>
                      <i
                        @click="SFTPcredentials"
                        class="las la-envelope text-lg text-black dark:text-white cursor-pointer"
                        title="SFTP Credentials"
                      ></i>
                      <i
                        @click="Delete"
                        class="las la-trash-alt text-xl text-red-600 cursor-pointer"
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
  name: "Applications",
  components: {
    sidebar,
    headerTop,
  },
  data() {
    return {
      allservers: "All Servers",
      searchServer: "",
      applications: [],
      selectedServer: "",
    };
  },

  computed: {
    uniqueServers() {
      return [
        ...new Set(
          this.applications.map((app) => app.server_name).filter(Boolean)
        ),
      ];
    },
    filteredApplications() {
      if (this.selectedServer) {
        return this.applications.filter(
          (app) => app.server_name === this.selectedServer
        );
      }
      return this.applications;
    },
  },

  watch: {
    searchServer: "fetchApplications",
  },

  methods: {
    handleDropdownChange() {
      this.fetchApplications();
    },
    panel() {
      this.$router.push("/serverpanel");
    },
    applicationdashboard() {
      this.$router.push("/servers");
    },
    SFTPcredentials() {
      this.$router.push("/transactions");
    },
    Delete() {
      this.$router.push("/checkout");
    },

    // async fetchApplications() {
    //   const accessToken = localStorage.getItem("access_token");
    //   if (!accessToken) {
    //     console.error("No access token found");
    //     return;
    //   }

    async fetchApplications() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      const url = `https://app.satesting1.homes/api/organizations/${organizationId}/applications`;
      const params = {
        search: this.searchServer || "",
        per_page: 10,
      };

      try {
        const response = await apiClient.get(url, {
          headers: { Authorization: `Bearer ${accessToken}` },
          params,
        });

        this.applications = response.data.applications.data;
      } catch (error) {
        console.error("Error fetching applications:", error.message);
      }
    },

    clearSearch() {
      this.searchServer = "";
      this.fetchApplications();
    },
  },

  mounted() {
    this.fetchApplications();
  },
};
</script>

<style>
</style>