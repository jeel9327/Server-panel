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
            <h1>Cloud Platform</h1>
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
          <div
            class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5"
          >
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow text-tiny"
              >
                <img
                  src="/public/amazon-lightsail.png"
                  class="w-12 h-auto mx-auto"
                  alt="Amazon Lightsail"
                />
                <p class="py-3.5 text-center">Amazon Lightsail</p>
                <hr class="my-3" />
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
                  <i class="las la-link mr-3 text-lg"></i>Link Amazon Lightsail
                </button>
                <a
                  href="https://portal.aws.amazon.com/billing/signup#/start/email"
                  target="_blank"
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-blue-500/[0.2] text-blue-500 hover:text-blue-700 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                  ><i class="las la-user-plus mr-3 text-lg"></i> Create an
                  Account
                </a>
              </div>
            </div>
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow"
              >
                <img
                  src="/public/vultr.png"
                  class="w-12 h-auto mx-auto"
                  alt="Vultr"
                />
                <p class="text-center py-3.5">Vultr</p>
                <hr class="my-3" />
                <button
                  class="w-full bg-[#F7F7F7] hover:bg-neutral-100 dark:bg-gray-900 hover:dark:bg-gray-900 p-3 shadow text-sm text-gray-600 dark:text-white rounded-md flex items-center justify-center"
                >
                  <i
                    class="las la-info-circle mr-3 text-blue-600 dark:text-white"
                  ></i
                  >Information
                </button>
                <button
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full bg-sa-500/[0.1] dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-sa-500/[0.2] text-blue-600 hover:text-sa-600 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                >
                  <i class="las la-link mr-3 text-lg"></i>Link Vultr
                </button>
                <a
                  href="https://www.vultr.com/"
                  target="_blank"
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-blue-500/[0.2] text-blue-500 hover:text-blue-700 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                  ><i class="las la-user-plus mr-3 text-lg"></i> Create an
                  Account
                </a>
              </div>
            </div>
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow"
              >
                <img
                  src="/public/digitalocean.png"
                  class="w-11 h-auto mx-auto"
                  alt="DigitalOcean"
                />
                <p class="text-center py-3.5">DigitalOcean</p>
                <hr class="my-3" />
                <button
                  class="w-full bg-[#F7F7F7] hover:bg-neutral-100 dark:bg-gray-900 hover:dark:bg-gray-900 p-3 shadow text-sm text-gray-600 dark:text-white rounded-md flex items-center justify-center"
                >
                  <i
                    class="las la-info-circle mr-3 text-blue-600 dark:text-white"
                  ></i
                  >Information
                </button>
                <button
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full bg-sa-500/[0.1] dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-sa-500/[0.2] text-blue-600 hover:text-sa-600 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                >
                  <i class="las la-link mr-3 text-lg"></i>Link DigitalOcean
                </button>
                <a
                  href="https://www.digitalocean.com/"
                  target="_blank"
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-blue-500/[0.2] text-blue-500 hover:text-blue-700 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                  ><i class="las la-user-plus mr-3 text-lg"></i> Create an
                  Account
                </a>
              </div>
            </div>
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow"
              >
                <img
                  src="/public/linode.png"
                  class="w-11 h-auto mx-auto"
                  alt="Linode"
                />
                <p class="text-center py-3.5">Linode</p>
                <hr class="my-3" />
                <button
                  class="w-full bg-[#F7F7F7] hover:bg-neutral-100 dark:bg-gray-900 hover:dark:bg-gray-900 p-3 shadow text-sm text-gray-600 dark:text-white rounded-md flex items-center justify-center"
                >
                  <i
                    class="las la-info-circle mr-3 text-blue-600 dark:text-white"
                  ></i
                  >Information
                </button>
                <button
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full bg-sa-500/[0.1] dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-sa-500/[0.2] text-blue-600 hover:text-sa-600 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                >
                  <i class="las la-link mr-3 text-lg"></i>Link Linode Storage
                </button>
                <a
                  href="https://www.linode.com/lp/refer/"
                  target="_blank"
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-blue-500/[0.2] text-blue-500 hover:text-blue-700 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                  ><i class="las la-user-plus mr-3 text-lg"></i> Create an
                  Account
                </a>
              </div>
            </div>
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow"
              >
                <img
                  src="/public/hetzner.png"
                  class="w-12 h-auto mx-auto"
                  alt="Hetzner"
                />
                <p class="text-center py-3.5">Hetzner</p>
                <hr class="my-3" />
                <button
                  class="w-full bg-[#F7F7F7] hover:bg-neutral-100 dark:bg-gray-900 hover:dark:bg-gray-900 p-3 shadow text-sm text-gray-600 dark:text-white rounded-md flex items-center justify-center"
                >
                  <i
                    class="las la-info-circle mr-3 text-blue-600 dark:text-white"
                  ></i
                  >Information
                </button>
                <button
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full bg-sa-500/[0.1] dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-sa-500/[0.2] text-blue-600 hover:text-sa-600 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                >
                  <i class="las la-link mr-3 text-lg"></i>Link Hetzner
                </button>
                <a
                  href="https://accounts.hetzner.com/signUp"
                  target="_blank"
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-blue-500/[0.2] text-blue-500 hover:text-blue-700 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                  ><i class="las la-user-plus mr-3 text-lg"></i> Create an
                  Account
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="m-5 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white items-center"
          >
            <div class="grid grid-cols-3 gap-5 p-5">
              <div>
                <select
                  v-model="All"
                  @change="handleDropdownChange"
                  class="border w-full bg-gray-100 dark:text-white dark:bg-gray-900 dark:border-gray-900 text-gray-500 rounded py-2"
                >
                  <option value="All">All</option>
                  <option value="Lightsail">Lightsail</option>
                  <option value="Vultr">Vultr</option>
                  <option value="DigitalOcean">DigitalOcean</option>
                  <option value="DigitalOcean">Linode</option>
                  <option value="DigitalOcean">Hetzner</option>
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
                  <tr v-if="cloudserverproviders.length === 0">
                    <td
                      colspan="3"
                      class="text-center py-2.5 dark:bg-gray-900 dark:text-white"
                    >
                      Data Not Found
                    </td>
                  </tr>
                  <tr
                    v-for="cloudserverprovider in cloudserverproviders"
                    :key="cloudserverprovider.id"
                    class="dark:bg-gray-900 dark:text-white even:bg-gray-50 py-3 dark:even:bg-slate-800"
                  >
                    <td>
                      <div
                        v-if="
                          cloudserverprovider &&
                          cloudserverprovider.provider == 'lightsail'
                        "
                        class="py-4 px-4"
                      >
                        <img
                          src="/public/amazon-lightsail.png"
                          class="w-8 h-auto v-popper--has-tooltip"
                          alt="lightsail"
                        />
                      </div>
                      <div
                        v-if="cloudserverprovider.provider == 'hetzner'"
                        class="py-4 px-4"
                      >
                        <img
                          src="/public/hetzner.png"
                          class="w-8 h-auto v-popper--has-tooltip"
                          alt="hetzner"
                        />
                      </div>
                      <div
                        v-if="cloudserverprovider.provider == 'linode'"
                        class="py-4 px-4"
                      >
                        <img
                          src="/public/linode.png"
                          class="w-8 h-auto v-popper--has-tooltip"
                          alt="linode"
                        />
                      </div>
                      <div
                        v-if="cloudserverprovider.provider == 'vultr'"
                        class="py-4 px-4"
                      >
                        <img
                          src="/public/vultr.png"
                          class="w-8 h-auto v-popper--has-tooltip"
                          alt="vultr"
                        />
                      </div>
                      <div
                        v-if="cloudserverprovider.provider == 'digitalocean'"
                        class="py-4 px-4"
                      >
                        <img
                          src="/public/digitalocean.png"
                          class="w-8 h-auto v-popper--has-tooltip"
                          alt="digitalocean"
                        />
                      </div>
                    </td>
                    <td class="truncate">
                      {{ cloudserverprovider.name }}
                    </td>
                    <td class="truncate flex  justify-end items-end">
                      <i
                        class="cursor-pointer px-8 p-4 text-center text-red-500 text-xl las la-trash-alt"
                        @click="deleteGitProvider(cloudserverprovider)"
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
  name: "CloudServerProviders",
  components: {
    sidebar,
    headerTop,
  },
  data() {
    return {
      All: "All",
      searchQuery: "Search by a Name/IP Address",
      searchServer: "",
      cloudserverproviders: [],
    };
  },

  watch: {
    searchServer: "fetchCloudServerProviders",
  },

  methods: {
    showServerPanel(cloudserverprovider) {
      this.$router.push({
        name: "ServerPanel",
        params: { cloudserverprovider },
      });
    },
    manageUsers(cloudserverprovider) {
      this.$router.push({
        name: "ManageUsers",
        params: { cloudserverprovider },
      });
    },
    async deleteGitProvider(cloudserverprovider) {
      try {
        await apiClient.delete(
          `/api/organizations/1/${cloudserverprovider.id}`
        );
        this.fetchCloudServerProviders();
      } catch (error) {
        console.error("Error deleting git provider:", error);
        alert("Error deleting git provider.");
      }
    },

    async fetchCloudServerProviders() {
      try {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }

        const organizationId = 1;
        const params = new URLSearchParams({
          pagination: 1,
          provider: "",
          search: this.searchServer,
        });

        const response = await apiClient.get(
          `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers?${params.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        this.cloudserverproviders = response.data.data || [];
      } catch (error) {
        console.error("Error fetching git providers:", error);
        alert("Error fetching git providers.");
      }
    },
  },

  mounted() {
    this.fetchCloudServerProviders();
  },
};
</script>
      
      <style>
</style>