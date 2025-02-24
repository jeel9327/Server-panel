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
              class="las la-server text-xl ml-5 text-gray-500 hover:text-gray-800 dark:hover:text-gray-600"
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
            <h1>Servers</h1>
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
        <div
          class="m-5 dark:bg-gray-800 rounded-md dark:border-gray-800 border border-gray-200 shadow-lg bg-white items-center"
        >
          <div class="grid xl:grid-cols-4 md:grid-cols-3 gap-5 p-5">
            <div>
              <select
                v-model="ownedBy"
                @change="handleDropdownChange"
                class="border w-full bg-gray-100 dark:bg-gray-900 dark:border-gray-900 dark:text-white text-gray-500 rounded py-2"
              >
                <option value="Owned By Me">Owned By Me</option>
                <option value="Shared With Me">Shared With Me</option>
                <option value="Deleted Servers">Deleted Servers</option>
              </select>
            </div>

            <div>
              <select
                v-model="searchQuery"
                @change="handleDropdownChange"
                class="border rounded dark:bg-gray-900 dark:text-white dark:border-gray-900 w-full bg-gray-100 text-gray-500 p-2"
              >
                <option value="Search by a Name/IP Address">
                  Search by a Name/IP Address
                </option>
                <option value="Search by a Cloud Platform">
                  Search by a Cloud Platform
                </option>
                <option value="Search by an OS Version">
                  Search by an OS Version
                </option>
                <option value="Search by a Web Server">
                  Search by a Web Server
                </option>
                <option value="Search by a Database">
                  Search by a Database
                </option>
              </select>
            </div>

            <div class="relative">
              <i
                v-if="searchQuery === 'Search by a Name/IP Address'"
                class="pi pi-search dark:bg-gray-900 dark:text-white text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"
              ></i>

              <template v-if="searchQuery === 'Search by a Name/IP Address'">
                <input
                  type="text"
                  v-model="searchServer"
                  placeholder="Search Server"
                  class="border dark:bg-gray-900 text-gray-500 dark:text-white dark:border-gray-900 rounded w-full bg-gray-100 p-1.5 pl-8"
                />
              </template>

              <template v-else>
                <select
                  v-model="selectedSearchOption"
                  @change="fetchServers"
                  class="border dark:bg-gray-900 bg-gray-100 text-gray-500 dark:text-white rounded w-full p-2"
                >
                  <option
                    v-if="searchQuery === 'Search by a Cloud Platform'"
                    value=""
                  >
                    Select a Cloud Platform
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Cloud Platform'"
                    value="Vultr"
                  >
                    Vultr
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Cloud Platform'"
                    value="DigitalOcean"
                  >
                    DigitalOcean
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Cloud Platform'"
                    value="Linode"
                  >
                    Linode
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Cloud Platform'"
                    value="Amazon Lightsail"
                  >
                    Amazon Lightsail
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Cloud Platform'"
                    value="Hetzner"
                  >
                    Hetzner
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Cloud Platform'"
                    value="Custom"
                  >
                    Custom
                  </option>

                  <option
                    v-if="searchQuery === 'Search by an OS Version'"
                    value=""
                  >
                    Select an OS Version
                  </option>
                  <option
                    v-if="searchQuery === 'Search by an OS Version'"
                    value="24"
                  >
                    Ubuntu 24.04
                  </option>
                  <option
                    v-if="searchQuery === 'Search by an OS Version'"
                    value="22"
                  >
                    Ubuntu 22.04
                  </option>
                  <option
                    v-if="searchQuery === 'Search by an OS Version'"
                    value="20"
                  >
                    Ubuntu 20.04
                  </option>
                  <option
                    v-if="searchQuery === 'Search by an OS Version'"
                    value="18"
                  >
                    Ubuntu 18.04
                  </option>
                  <option
                    v-if="searchQuery === 'Search by an OS Version'"
                    value="16"
                  >
                    Ubuntu 16.04
                  </option>

                  <option
                    v-if="searchQuery === 'Search by a Web Server'"
                    value=""
                  >
                    Select a Web Server
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Web Server'"
                    value="apache"
                  >
                    Apache
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Web Server'"
                    value="nginx"
                  >
                    Nginx
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Web Server'"
                    value="openlitespeed"
                  >
                    OpenLiteSpeed (OLS)
                  </option>

                  <option
                    v-if="searchQuery === 'Search by a Database'"
                    value=""
                  >
                    Select a Database
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Database'"
                    value="mysql"
                  >
                    MySQL
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Database'"
                    value="mariadb"
                  >
                    MariaDB
                  </option>
                  <option
                    v-if="searchQuery === 'Search by a Database'"
                    value="mongodb"
                  >
                    MongoDB
                  </option>
                </select>
              </template>
            </div>

            <div>
              <button
                v-if="searchServer || selectedSearchOption"
                @click="clearSearch"
                class="flex bg-red-500 text-white rounded px-2 py-1 hover:bg-red-700"
              >
                Clear
              </button>
            </div>
          </div>

          <div>
            <div class="flex justify-end items-center p-5 gap-4">
              <button
                type="button"
                class="rounded-md px-3 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white py-1.5 bg-slate-100 text-gray-600 hover:bg-slate-200"
              >
                <i class="pi pi-table"></i>
              </button>

              <button
                type="button"
                @click="fetchServers"
                class="rounded-md px-3 py-1.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white bg-slate-100 text-gray-600 hover:bg-slate-200"
              >
                <i class="pi pi-sync"></i>
              </button>
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton
                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset"
                  >
                    Create
                    <ChevronDownIcon
                      class="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>

                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div class="py-1">
                      <MenuItem @click="servers1" v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm dark:text-white dark:hover:text-gray-800',
                          ]"
                          >Server</a
                        >
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm dark:text-white dark:hover:text-gray-800',
                          ]"
                          >Application</a
                        >
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <a
                          href="#"
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm dark:text-white dark:hover:text-gray-800',
                          ]"
                          >Database</a
                        >
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>
        <div class="p-5 mb-5">
          <div
            class="overflow-x-auto overflow-y-visible rounded-md border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-800 bg-white p-5 items-center"
          >
            <div class="w-full">
              <table
                class="w-full bg-white dark:border-gray-800 border border-gray-200"
              >
                <thead>
                  <tr
                    class="w-full bg-gray-200 dark:bg-gray-700 dark:text-white text-black text-sm leading-normal"
                  >
                    <th class="py-4 px-4"></th>
                    <th class="py-4 px-4">Name</th>
                    <th class="py-3 px-4">IP Address</th>
                    <th class="py-3 px-4">Status</th>
                    <th class="py-3 px-4">Web Server</th>
                    <th class="py-3 px-4">Database</th>
                    <th class="py-3 px-4">OS</th>
                    <th class="py-3 px-4">Health</th>
                    <th v-if="ownedBy === 'Deleted Servers'" class="py-3 px-4">
                      Deleted At
                    </th>
                    <th class="py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading">
                    <td
                      colspan="10"
                      class="text-center dark:bg-gray-900 dark:text-white"
                    >
                      Loading...
                    </td>
                  </tr>
                  <tr v-if="servers.length === 0 && !loading">
                    <td
                      colspan="10"
                      class="text-center py-3 dark:bg-gray-900 dark:text-white md:overflow-x-auto"
                    >
                      Data Not Found
                    </td>
                  </tr>
                  <tr
                    v-for="(server, index) in [...servers].reverse()"
                    :key="index"
                    class="dark:bg-gray-900 dark:text-white border dark:border-gray-800 even:bg-gray-50 dark:even:bg-gray-700"
                  >
                    <td
                      class="whitespace-nowrap py-5 px-5 text-sm text-center w-5"
                    >
                      <span
                        :class="`flag f-${server.country_code.toLowerCase()} rounded big-flag`"
                      ></span>
                      <!-- <h1 class="ml-2">{{ server.country_code }}</h1> -->
                    </td>
                    <td
                      @click="panel"
                      class="whitespace-nowrap max-w-20 truncate text-center cursor-pointer p-4"
                      v-tooltip.top="server.name"
                    >
                      {{ server.name || "-" }}
                    </td>

                    <td
                      class="whitespace-nowrap max-w-20 truncate text-center text-blue-600"
                      v-tooltip.top="server.ip"
                    >
                      {{ server.ip }}
                      <i
                        class="las la-pencil-alt text-lg text-red-500 cursor-pointer"
                      ></i>
                    </td>
                    <td>
                      <div
                        v-if="server && server.agent_status == '1'"
                        class="whitespace-nowrap flex justify-center items-center"
                      >
                        <i
                          class="las la-circle bg-green-500 rounded-full text-green-500 v-popper--has-tooltip"
                        ></i>
                      </div>
                      <div
                        v-if="server.agent_status == '0'"
                        class="whitespace-nowrap flex justify-center items-center"
                      >
                        <i
                          class="las la-circle bg-red-500 rounded-full text-red-500 v-popper--has-tooltip"
                        ></i>
                      </div>
                    </td>
                    <!-- <td
                    class="max-w-20 truncate text-center"
                    v-tooltip.top="server.web_server"
                  >
                    {{ server.web_server }}
                  </td> -->
                    <td>
                      <div
                        v-if="server && server.web_server == 'openlitespeed'"
                        class="whitespace-nowrap"
                      >
                        <img
                          src="/public/ols.png"
                          class="w-auto h-7 m-auto v-popper--has-tooltip"
                          alt="whitespace-nowrap"
                        />
                      </div>
                      <div
                        v-if="server.web_server == 'apache2'"
                        class="flex items-center justify-center"
                      >
                        <img
                          src="/public/apache.png"
                          class="w-6 v-popper--has-tooltip"
                          alt="whitespace-nowrap"
                        />
                        <span class="text-sm text-red-700">APACHE</span>
                      </div>
                      <div
                        v-if="
                          server.web_server == 'nginx' ||
                          server.web_server == 'mern'
                        "
                        class="whitespace-nowrap"
                      >
                        <img
                          src="/public/nginx.png"
                          class="w-auto h-7 m-auto v-popper--has-tooltip"
                          alt=""
                        />
                      </div>
                    </td>
                    <!-- <td
                    class="max-w-20 truncate  text-center"
                    v-tooltip.top="server.database_type"
                  >
                    {{ server.database_type }}
                  </td> -->
                    <td>
                      <div
                        v-if="server && server.database_type == 'mysql'"
                        class="whitespace-nowrap"
                      >
                        <img
                          src="/public/mysql.png"
                          class="w-20 h-auto mx-auto v-popper--has-tooltip"
                          alt="whitespace-nowrap"
                        />
                      </div>
                      <div v-if="server.database_type == 'mariadb'" class="">
                        <img
                          src="/public/mariadb-white.png"
                          alt="Dark Mode Logo"
                          class="w-20 h-auto mx-auto hidden dark:block"
                        />

                        <img
                          src="/public/mariadb.png"
                          alt="Light Mode Logo"
                          class="w-20 h-auto mx-auto block dark:hidden"
                        />
                      </div>
                      <div v-if="server.database_type == 'mongodb'" class="">
                        <img
                          src="/public/mongodb-white.png"
                          alt="Dark Mode Logo"
                          class="w-20 h-auto mx-auto hidden dark:block"
                        />

                        <img
                          src="/public/mongodb.png"
                          alt="Light Mode Logo"
                          class="w-20 h-auto mx-auto block dark:hidden"
                        />
                      </div>
                    </td>
                    <td
                      class="whitespace-nowrap flex justify-center gap-2 mt-6 items-center text-center"
                    >
                      <img src="/public/ubuntu.png" class="w-6 h-auto" />
                      {{ server.version }}
                    </td>
                    <!-- <td
                    class="max-w-20 truncate text-center"
                    v-tooltip.top="server.agent_version"
                    v-if="ownedBy !== 'Deleted Servers'"
                  >
                    {{ server.agent_version }}
                  </td> -->
                    <td
                      class="whitespace-nowrap max-w-20 truncate text-center"
                      v-tooltip.top="server.health_status"
                    >
                      {{ server.health_status }}
                    </td>
                    <td
                      v-if="ownedBy === 'Deleted Servers'"
                      class="whitespace-nowrap max-w-20 truncate text-center"
                      v-tooltip.top="server.deletedAt"
                    >
                      {{ server.deletedAt }}
                    </td>

                    <td
                      v-if="ownedBy !== 'Deleted Servers'"
                      class="whitespace-nowrap text-center space-x-4 flex justify-center"
                    >
                      <!-- <i
                        @click="Serverpanel"
                        class="cursor-pointer text-blue-600 las la-tachometer-alt text-xl"
                        title="Server pane"
                      ></i>
                      <i
                        @click="Serverpanel"
                        class="cursor-pointer text-green-600 las la-link text-xl"
                        title="Reconnect"
                      ></i> -->
                      <div v-if="server && server.agent_status == '1'" class="">
                        <i
                          class="cursor-pointer text-blue-600 las la-tachometer-alt text-xl"
                          title="Server Panel"
                        ></i>
                      </div>
                      <div v-if="server.agent_status == '0'" class="">
                        <i
                          class="cursor-pointer text-green-600 las la-link text-xl"
                          title="Reconnect"
                        ></i>
                      </div>

                      <i
                        @click="Delete"
                        class="cursor-pointer text-red-500 las la-trash-alt text-xl"
                        title="Disconnect"
                      ></i>
                    </td>
                    <td
                      v-if="ownedBy === 'Deleted Servers'"
                      class="whitespace-nowrap text-center"
                    >
                      <i
                        class="cursor-pointer text-white bg-blue-700 rounded-md p-1.5 pi pi-trash"
                        title=""
                      >
                        Restore</i
                      >
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
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import headerTop from "../../components/header.vue";
import sidebar from "../../components/sidebar.vue";

export default {
  name: "UserTable",
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
    headerTop,
    sidebar,
  },
  data() {
    return {
      ownedBy: "Owned By Me",
      searchQuery: "Search by a Name/IP Address",
      searchServer: "",
      selectedSearchOption: "",
      selectedCloudPlatform: "",
      selectedOSVersion: "",
      selectedWebServer: "",
      selectedDatabase: "",
      servers: [],
      loading: false,
    };
  },

  watch: {
    searchServer: "fetchServers",
  },

  methods: {
    handleDropdownChange() {
      this.fetchServers();
    },
    servers1() {
      this.$router.push("/connect");
    },
    panel() {
      this.$router.push("/serverpanel");
    },
    Delete() {
      this.$router.push("/backups");
    },
    servers1() {
      this.$router.push("/connect");
    },

    async fetchServers() {
      this.loading = true;
      this.servers = [];
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        this.loading = false;
        return;
      }

      let url = "";

      if (this.ownedBy === "Owned By Me") {
        url = "/organizations/1/servers";
      } else if (this.ownedBy === "Shared With Me") {
        url = "/servers/shared";
      } else if (this.ownedBy === "Deleted Servers") {
        url = `/organizations/1/deleted-servers`;
      }

      const params = new URLSearchParams();
      params.append("pagination", 1);

      if (this.searchQuery === "Search by a Name/IP Address") {
        params.append("search", "search");
        params.append("value", this.searchServer);
      } else if (this.searchQuery === "Search by a Cloud Platform") {
        params.append("search", "provider_name");
        params.append("value", this.selectedCloudPlatform.toLowerCase());
      } else if (this.searchQuery === "Search by an OS Version") {
        params.append("search", "version");
        params.append("value", this.selectedOSVersion);
      } else if (this.searchQuery === "Search by a Web Server") {
        params.append("search", "web_server");
        params.append("value", this.selectedWebServer.toLowerCase());
      } else if (this.searchQuery === "Search by a Database") {
        params.append("search", "database_type");
        params.append("value", this.selectedDatabase.toLowerCase());
      }

      if (params.has("search") && params.get("value")) {
        url += `?${params.toString()}`;
      }

      try {
        const response = await apiClient.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (
          this.ownedBy === "Deleted Servers" &&
          Array.isArray(response.data.deletedServers.data)
        ) {
          this.servers = response.data.deletedServers.data;
        } else if (Array.isArray(response.data.servers)) {
          this.servers = response.data.servers;
        } else {
          this.servers = [];
        }
      } catch (error) {
        console.error("Error fetching servers:", error);
        this.servers = [];
      } finally {
        this.loading = false;
      }
    },

    clearSearch() {
      this.searchServer = "";
      this.selectedSearchOption = "";
      this.searchQuery = "Search by a Name/IP Address";
      this.fetchServers();
    },
  },

  mounted() {
    this.fetchServers();
  },
};
</script>

<style>
</style>
  

  