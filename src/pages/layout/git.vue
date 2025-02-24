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
              class="las la-project-diagram text-xl ml-5 dark:hover:text-gray-600 dark:text-gray-500 text-gray-500 hover:text-gray-800"
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
            <h1>Git</h1>
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
        <div class="p-5">
          <div class="grid grid-cols-4 gap-5">
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow text-tiny"
              >
                <img src="/public/bitbucket.png" class="w-12 h-auto mx-auto" />
                <p class="py-3.5 text-center">Bitbucket</p>
                <hr class="my-" />
                <button
                  class="w-full bg-[#F7F7F7] hover:bg-neutral-100 dark:bg-gray-900 hover:dark:bg-gray-900 p-3 shadow text-sm text-gray-600 dark:text-white rounded-md flex items-center justify-center"
                >
                  <i
                    class="las la-info-circle mr-3 text-blue-600 dark:text-white"
                  ></i
                  >Information</button
                ><button
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full bg-sa-500/[0.1] dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-sa-500/[0.2] text-blue-600 hover:text-sa-600 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                >
                  <i class="las la-link mr-3 text-lg"></i>Link Bitbucket
                </button>
              </div>
            </div>
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow"
              >
                <img src="/public/github.svg" class="w-12 h-auto mx-auto" />
                <p class="text-center py-3.5">Github</p>
                <hr class="my-" />
                <button
                  class="w-full bg-[#F7F7F7] hover:bg-neutral-100 dark:bg-gray-900 hover:dark:bg-gray-900 p-3 shadow text-sm text-gray-600 dark:text-white rounded-md flex items-center justify-center"
                >
                  <i
                    class="las la-info-circle mr-3 text-blue-600 dark:text-white"
                  ></i
                  >Information</button
                ><button
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full bg-sa-500/[0.1] dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-sa-500/[0.2] text-blue-600 hover:text-sa-600 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                >
                  <i class="las la-link mr-3 text-lg"></i>Link Guthub
                </button>
              </div>
            </div>
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow"
              >
                <img src="/public/gitlab.svg" class="w-12 h-auto mx-auto" />
                <p class="text-center py-3.5">Gitlab</p>
                <hr class="my-" />
                <button
                  class="w-full bg-[#F7F7F7] hover:bg-neutral-100 dark:bg-gray-900 hover:dark:bg-gray-900 p-3 shadow text-sm text-gray-600 dark:text-white rounded-md flex items-center justify-center"
                >
                  <i
                    class="las la-info-circle mr-3 text-blue-600 dark:text-white"
                  ></i
                  >Information</button
                ><button
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full bg-sa-500/[0.1] dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-sa-500/[0.2] text-blue-600 hover:text-sa-600 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                >
                  <i class="las la-link mr-3 text-lg"></i>Link Gitlab
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="m-5  rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white items-center"
          >
            <div class="grid grid-cols-3 gap-5 p-5">
              <div>
                <select
                  v-model="All"
                  @change="handleDropdownChange"
                  class="border w-full bg-gray-100 dark:text-white dark:bg-gray-900 dark:border-gray-900 text-gray-500 rounded py-2"
                >
                  <option value="All">All</option>
                  <option value="Bitbucket">Bitbucket</option>
                  <option value="Github">Github</option>
                  <option value="Gitlab">Gitlab</option>
                </select>
              </div>
              <div class="relative">
                <template v-if="searchQuery === 'Search by a Name/IP Address'">
                  <i
                    class="pi pi-search text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"
                  ></i>
                  <input
                    type="text"
                    v-model="searchServer"
                    placeholder="Search"
                    class="border rounded dark:bg-gray-900 text-gray-500 dark:text-white dark:border-gray-900 w-full bg-gray-100 p-1.5 pl-8"
                  />
                </template>
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  @click="fetchdatabases"
                  class="rounded-md px-3 py-1.5 text-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white bg-slate-100 hover:bg-slate-200"
                >
                  <i class="pi pi-sync"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- <div
            class="m-5 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white p-5 items-center"
          >
            <div class="container mx-auto">
              <table
                class="min-w-full bg-white border dark:border-gray-800 border-gray-200"
              >
                <thead>
                  <tr
                    class="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white text-sm leading-normal"
                  >
                    <th
                      scope="col"
                      class="text-left font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm"
                    >
                      Provider
                    </th>
                    <th
                      scope="col"
                      class="text-left font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm text-right"
                    >
                      Acrions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="databases.length === 0">
                    <td
                      colspan="3"
                      class="text-center py-2.5 dark:bg-gray-900 dark:text-white"
                    >
                      Data Not Found
                    </td>
                  </tr>
                  <tr
                    v-for="(databases, index) in databases"
                    :key="index"
                    class="dark:bg-gray-900 dark:text-white"
                  >
                    <td
                      @click="panel"
                      class="max-w-20 px-6 truncate cursor-pointer text-center"
                      v-tooltip.top="databases"
                    >
                      {{ databases.email }}
                    </td>
                    <td
                      class="max-w-20 px-6 truncate text-center"
                      v-tooltip.top="databases.name"
                    >
                      {{ databases.id }}
                    </td>
                    <td
                      class="max-w-20 truncate text-center"
                      v-tooltip.top="databases.database_type"
                    >
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
          </div> -->
          <div
            class="m-5 mb-10 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white p-5 items-center"
          >
            <div class="w-full">
              <table
                class="min-w-full bg-white border dark:border-gray-900 border-gray-200"
              >
                <thead>
                  <tr
                    class="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white text-sm leading-normal"
                  >
                    <th
                      scope="col"
                      class="text-left font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm"
                    >
                      Provider
                    </th>
                    <th
                      scope="col"
                      class="text-left font-semibold text-gray-900 dark:text-gray-300 py-4 text-sm"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm text-right"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="gitProviders.length === 0">
                    <td
                      colspan="3"
                      class="text-center py-2.5 dark:bg-gray-900 dark:text-white"
                    >
                      Data Not Found
                    </td>
                  </tr>
                  <tr
                    v-for="gitProvider in gitProviders"
                    :key="gitProvider.id"
                    class="dark:bg-gray-900 dark:text-white even:bg-gray-50 dark:even:bg-slate-800"
                  >
                    <td>
                      <div
                        v-if="gitProvider && gitProvider.provider == 'github'"
                        class=""
                      >
                        <img
                          src="/public/github.svg"
                          class="w-11 h-auto ml-5 v-popper--has-tooltip"
                          alt=""
                        />
                      </div>
                      <div v-if="gitProvider.provider == 'gitlab'" class="">
                        <img
                          src="/public/gitlab.svg"
                          class="w-10 h-auto ml-5 v-popper--has-tooltip"
                          alt=""
                        />
                      </div>
                      <div v-if="gitProvider.provider == 'bitbucket'" class="">
                        <img
                          src="/public/bitbucket.png"
                          class="w-10 h-auto ml-5 v-popper--has-tooltip"
                          alt=""
                        />
                      </div>
                    </td>
                    <td class="truncate">
                      {{ gitProvider.email }}
                    </td>
                    <td class="truncate flex justify-end items-end">
                      <i
                        class="cursor-pointer px-8 p-4 text-center text-red-500 pi pi-trash"
                        title="Delete"
                        @click="deleteGitProvider(gitProvider)"
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
  name: "GitProviders",
  components: {
    sidebar,
    headerTop,
  },
  data() {
    return {
      All: "All",
      searchQuery: "Search by a Name/IP Address",
      searchServer: "",
      gitProviders: [],
    };
  },

  watch: {
    searchServer: "fetchGitProviders",
  },

  //   methods: {
  //     panel() {
  //       this.$router.push("/serverpanel");
  //     },
  //     handleDropdownChange() {
  //       this.fetchdatabases();
  //     },

  //     async fetchdatabases() {
  //       this.databases = [];
  //       const accessToken = localStorage.getItem("access_token");
  //       if (!accessToken) {
  //         console.error("No access token found");
  //         return;
  //       }

  //       const organizationId = 1;
  //       let url = `https://app.satesting1.homes/api/organizations/${organizationId}/git-providers`;
  //       const params = new URLSearchParams();
  //       params.append("search", this.searchServer || "");
  //       params.append("per_page", 10);

  //       try {
  //         const response = await apiClient.get(`${url}?${params.toString()}`, {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         });

  //         this.databases = response.data.databases || [];

  //         if (!Array.isArray(this.databases)) {
  //           console.error("Unexpected response format:", response.data);
  //           this.databases = [];
  //         }
  //       } catch (error) {
  //         if (error.response) {
  //           console.error("Error fetching servers:", error.response.data);
  //           alert(`Error: ${error.response.data.message || "An error occurred"}`);
  //         } else if (error.request) {
  //           console.error("No response received:", error.request);
  //           alert("Network error: No response from server.");
  //         } else {
  //           console.error("Error setting up request:", error.message);
  //           alert(`Error: ${error.message}`);
  //         }
  //         this.databases = [];
  //       }
  //     },

  //     clearSearch() {
  //       this.searchServer = "";
  //       this.fetchdatabases();
  //     },
  //   },

  methods: {
    showServerPanel(gitProvider) {
      this.$router.push({ name: "ServerPanel", params: { gitProvider } });
    },
    manageUsers(gitProvider) {
      this.$router.push({ name: "ManageUsers", params: { gitProvider } });
    },
    async deleteGitProvider(gitProvider) {
      try {
        await apiClient.delete(
          `/api/organizations/1/git-providers/${gitProvider.id}`
        );
        this.fetchGitProviders();
      } catch (error) {
        console.error("Error deleting git provider:", error);
        alert("Error deleting git provider.");
      }
    },
    async fetchGitProviders() {
      try {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }

        const organizationId = 1;
        let url = `https://app.satesting1.homes/api/organizations/${organizationId}/git-providers`;
        const params = new URLSearchParams({
          pagination: 1,
          provider: "",
          search: this.searchServer,
        });
        // params.append("search", this.searchQuery || "");
        // params.append("per_page", 10);

        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        this.gitProviders = response.data.data || [];
      } catch (error) {
        console.error("Error fetching git providers:", error);
        alert("Error fetching git providers.");
      }
    },
  },

  mounted() {
    this.fetchGitProviders();
  },
};
</script>
    
    <style>
</style>