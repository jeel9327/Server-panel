<!-- <template>
  <div class="overflow-auto h-full">
    <div
      class="bg-white  dark:bg-gray-800 dark:border-r-gray-500 dark:border-l-gray-500 dark:border-b-gray-500 border-r border-l border-b h-12 flex"
    >
      <div class="flex items-center m-3">
        <span
          class="las la-tachometer-alt dark:text-gray-500 dark:hover:text-gray-600 text-2xl ml-5 text-gray-500 hover:text-gray-800"
        ></span>
      </div>
      <svg
        class="h-full w-6 dark:text-gray-500 flex-shrink-0 text-gray-200"
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
        <h1>Dashboard</h1>
      </div>
    </div>

    <div class="p-10 dark:bg-gray-900  ">
      <div
        class="bg-white p-5 h-auto dark:bg-gray-800 dark:text-white rounded-lg shadow-lg"
      >
        <div class="grid grid-cols-2">
          <div>
            <h1 class="text-xl font-semibold">Hello, Smit Pipaliya</h1>
            <p class="text-gray-500 text-sm">Welcome to ServerAvatar</p>
          </div>
          <div>
            <div class="text-right flex justify-end items-end">
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
                    class="absolute right-0 z-10 mt-2 w-56 dark:bg-gray-700 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 gap-5 mt-5">
          <div class="border h-auto rounded-lg">
            <div class="grid grid-cols-2 p-3">
              <div>
                <span
                  class="material-symbols-outlined text-lg  text-blue-600 dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1"
                >
                  dns
                </span>
              </div>
              <div class="flex justify-end items-end pr-1">
                <a
                  href="/servers"
                  class="flex gap-1 items-center text-xs text-sa-500"
                >
                  <span class="hover:underline text-nowrap text-blue-600"
                    >View all Servers</span
                  >
                  <span class="material-symbols-outlined text-blue-600 text-lg">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 p-3">
              <div class="font-semibold text-lg">
                <h1>Servers</h1>
              </div>
              <div
                class="flex justify-end items-end pr-1 font-semibold text-lg"
              >
                <h1>7</h1>
              </div>
            </div>
          </div>
          <div class="border h-auto rounded-lg">
            <div class="grid grid-cols-2 p-3">
              <div>
                <span
                  class="material-symbols-outlined text-blue-600 text-lg  dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1"
                >
                  deployed_code
                </span>
              </div>
              <div class="flex justify-end items-end pr-1">
                <a
                  href="/applications"
                  class="flex gap-1 items-center text-xs text-sa-500"
                >
                  <span class="hover:underline text-nowrap text-blue-600"
                    >View all Applications</span
                  >
                  <span class="material-symbols-outlined text-blue-600 text-lg">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 p-3">
              <div class="font-semibold text-lg">
                <h1>Applications</h1>
              </div>
              <div
                class="flex justify-end items-end pr-1 font-semibold text-lg"
              >
                <h1>75</h1>
              </div>
            </div>
          </div>
          <div class="border h-auto rounded-lg">
            <div class="grid grid-cols-2 p-3">
              <div>
                <span
                  class="material-symbols-outlined text-blue-600 text-lg  dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1"
                >
                  database
                </span>
              </div>
              <div class="flex justify-end items-end pr-1">
                <a
                  href="/databases"
                  class="flex gap-1 items-center text-nowrap text-xs text-sa-500"
                >
                  <span class="hover:underline text-blue-600"
                    >View all Databases</span
                  >
                  <span class="material-symbols-outlined text-blue-600 text-lg">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 p-3">
              <div class="font-semibold text-lg">
                <h1>Databases</h1>
              </div>
              <div
                class="flex justify-end items-end pr-1 font-semibold text-lg"
              >
                <h1>74</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="font-semibold mt-5 text-xl">
          <h1>Overview</h1>
        </div>
        <div class="mt-5">
          <div class="pl-5 gap-5 flex font-medium">
            <h1>Servers</h1>
            <h1>Applications</h1>
          </div>
          <hr class="mt-3" />
          <div class="mt-5">
            <div class="w-full">
              <table
                class="min-w-full bg-white dark:bg-gray-800 border border-gray-200"
              >
                <thead>
                  <tr
                    class="w-full bg-gray-200 text-black text-sm leading-normal"
                  ></tr>
                </thead>
                <tbody>
                  <tr v-if="servers.length === 0">
                    <td colspan="8" class="text-center md:overflow-x-auto">
                      Data Not Found
                    </td>
                  </tr>
                  <tr
                    v-for="(server, index) in servers"
                    :key="index"
                    class="even:bg-gray-200"
                  >
                    <td
                      class="max-w-20 truncate pl-8 p-4"
                      v-tooltip.top="server.name"
                    >
                      {{ server.name }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-8"
                      v-tooltip.top="server.ip"
                    >
                      {{ server.ip }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-20"
                      v-tooltip.top="server.web_server"
                    >
                      {{ server.web_server }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-16"
                      v-tooltip.top="server.database_type"
                    >
                      {{ server.database_type }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.operating_system"
                    >
                      {{ server.operating_system }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.version"
                      v-if="ownedBy === 'Deleted Servers'"
                    >
                      {{ server.version }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.agent_version"
                      v-if="ownedBy !== 'Deleted Servers'"
                    >
                      {{ server.agent_version }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.health_status"
                    >
                      {{ server.health_status }}
                    </td>
                    <td
                      v-if="ownedBy === 'Deleted Servers'"
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.deletedAt"
                    >
                      {{ server.deletedAt }}
                    </td>

                    <td
                      v-if="ownedBy !== 'Deleted Servers'"
                      class="text-center"
                    >
                      <i
                        class="cursor-pointer p-4 pi pi-file-edit"
                        title="Server panel"
                      ></i>
                      <i
                        class="cursor-pointer text-red-500 pi pi-trash"
                        title="Disconnect"
                      ></i>
                    </td>
                    <td
                      v-if="ownedBy === 'Deleted Servers'"
                      class="text-center"
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
        <div>
          <div class="mt-7">
            <h2 class="font-semibold text-xl dark:text-gray-300">Docs</h2>
          </div>
          <div>
            <div
              class="bg-gray-50 dark:bg-gray-700 p-5 border-l-4 border-blue-600 mt-5"
            >
              <div class="grid xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5">
                <div class="xl:col-span-3 col-span-1 place-self-center">
                  <h2
                    class="text-xl font-semibold text-center dark:text-gray-300"
                  >
                    Instant Links
                  </h2>
                  <div class="grid md:grid-cols-2 gap-5 mt-8 mb-2">
                    <a
                      href="https://serveravatar.com/blog/"
                      target="_blank"
                      class="group"
                      ><div
                        class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3"
                      >
                        <div class="text-center text-tiny">
                          <span class="dark:text-gray-300">Blog</span
                          ><span
                            class="material-symbols-outlined -rotate-45 text-blue-600 group-hover:text-sa-600 text-lg align-middle ml-1"
                          >
                            link
                          </span>
                        </div>
                        <p class="text-gray-500 text-xs mt-1 text-center">
                          "Summarize all Blogs briefly."
                        </p>
                      </div></a
                    ><a
                      href="https://serveravatar.com/api-docs/"
                      target="_blank"
                      class="group"
                      ><div
                        class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3"
                      >
                        <div class="text-center text-tiny">
                          <span class="dark:text-gray-300"
                            >API Documentation</span
                          ><span
                            class="material-symbols-outlined -rotate-45 text-blue-600 group-hover:text-sa-600 text-lg align-middle ml-1"
                          >
                            link
                          </span>
                        </div>
                        <p class="text-gray-500 text-xs mt-1 text-center">
                          "Summarize API Documentation briefly."
                        </p>
                      </div></a
                    ><a
                      href="https://serveravatar.com/docs/intro"
                      target="_blank"
                      class="group"
                      ><div
                        class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3"
                      >
                        <div class="text-center text-tiny">
                          <span class="dark:text-gray-300">Product Docs</span
                          ><span
                            class="material-symbols-outlined -rotate-45 text-blue-600 group-hover:text-sa-600 text-lg align-middle ml-1"
                          >
                            link
                          </span>
                        </div>
                        <p class="text-gray-500 text-xs mt-1 text-center">
                          "Summarize Product Documentation briefly."
                        </p>
                      </div></a
                    ><a
                      href="https://serveravatar.com/deployments"
                      target="_blank"
                      class="group"
                      ><div
                        class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3"
                      >
                        <div class="text-center text-tiny">
                          <span class="dark:text-gray-300"
                            >Deployment Tutorials</span
                          ><span
                            class="material-symbols-outlined -rotate-45 text-blue-600 group-hover:text-sa-600 text-lg align-middle ml-1"
                          >
                            link
                          </span>
                        </div>
                        <p class="text-gray-500 text-xs mt-1 text-center">
                          "Summarize all Deployment Tutorials briefly."
                        </p>
                      </div></a
                    >
                  </div>
                </div>
                <div class="xl:col-span-2 col-span-1 place-self-center">
                  <img src="/public/docs.png" class="w-64" />
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

    async fetchServers() {
      this.servers = [];
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
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

<style scoped>
</style> -->



<template>
  <div class="overflow-auto h-full">
    <div
      class="bg-white dark:bg-gray-800 dark:border-r-gray-500 dark:border-b-gray-500 border-r border-b h-12 flex"
    >
      <div class="flex items-center m-3">
        <span
          class="las la-tachometer-alt dark:text-gray-500 dark:hover:text-gray-600 text-2xl ml-5 text-gray-500 hover:text-gray-800"
        ></span>
      </div>
      <svg
        class="h-full w-6 dark:text-gray-500 flex-shrink-0 text-gray-200"
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
        <h1>Dashboard</h1>
      </div>
    </div>

    <div class="p-10 dark:bg-gray-900">
      <div
        class="bg-white p-5 h-auto dark:bg-gray-800 dark:text-white rounded-lg shadow-lg"
      >
        <div class="grid grid-cols-2">
          <div>
            <h1 class="text-xl font-semibold">Hello, Smit Pipaliya</h1>
            <p class="text-gray-500 text-sm">Welcome to ServerAvatar</p>
          </div>
          <div>
            <div class="text-right flex justify-end items-end">
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
                    class="absolute right-0 z-10 mt-2 w-56 dark:bg-gray-700 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 gap-5 mt-5">
          <div class="border h-auto rounded-lg">
            <div class="grid grid-cols-2 p-3">
              <div>
                <span
                  class="material-symbols-outlined text-lg text-blue-600 dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1"
                >
                  dns
                </span>
              </div>
              <div class="flex justify-end items-end pr-1">
                <a
                  href="/servers"
                  class="flex gap-1 items-center text-xs text-sa-500"
                >
                  <span class="hover:underline text-nowrap text-blue-600"
                    >View all Servers</span
                  >
                  <span class="material-symbols-outlined text-blue-600 text-lg">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 p-3">
              <div class="font-semibold text-lg">
                <h1>Servers</h1>
              </div>
              <div
                class="flex justify-end items-end pr-1 font-semibold text-lg"
              >
                <h1>{{ serverCount }}</h1>
              </div>
            </div>
          </div>
          <div class="border h-auto rounded-lg">
            <div class="grid grid-cols-2 p-3">
              <div>
                <span
                  class="material-symbols-outlined text-blue-600 text-lg dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1"
                >
                  deployed_code
                </span>
              </div>
              <div class="flex justify-end items-end pr-1">
                <a
                  href="/applications"
                  class="flex gap-1 items-center text-xs text-sa-500"
                >
                  <span class="hover:underline text-nowrap text-blue-600"
                    >View all Applications</span
                  >
                  <span class="material-symbols-outlined text-blue-600 text-lg">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 p-3">
              <div class="font-semibold text-lg">
                <h1>Applications</h1>
              </div>
              <div
                class="flex justify-end items-end pr-1 font-semibold text-lg"
              >
                <h1>{{ applicationCount }}</h1>
              </div>
            </div>
          </div>
          <div class="border h-auto rounded-lg">
            <div class="grid grid-cols-2 p-3">
              <div>
                <span
                  class="material-symbols-outlined text-blue-600 text-lg dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1"
                >
                  database
                </span>
              </div>
              <div class="flex justify-end items-end pr-1">
                <a
                  href="/databases"
                  class="flex gap-1 items-center text-nowrap text-xs text-sa-500"
                >
                  <span class="hover:underline text-blue-600"
                    >View all Databases</span
                  >
                  <span class="material-symbols-outlined text-blue-600 text-lg">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 p-3">
              <div class="font-semibold text-lg">
                <h1>Databases</h1>
              </div>
              <div
                class="flex justify-end items-end pr-1 font-semibold text-lg"
              >
                <h1>{{ databaseCount }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="font-semibold mt-5 text-xl">
          <h1>Overview</h1>
        </div>
        <div class="mt-5">
          <div class="pl-5 gap-5 flex font-medium">
            <h1>Servers</h1>
            <h1>Applications</h1>
          </div>
          <hr class="mt-3" />
          <div class="mt-5">
            <!-- <div class="w-full">
              <table
                class="min-w-full bg-white dark:bg-gray-800 border border-gray-200"
              >
                <thead>
                  <tr
                    class="w-full bg-gray-200 text-black text-sm leading-normal"
                  ></tr>
                </thead>
                <tbody>
                  <tr v-if="servers.length === 0">
                    <td colspan="8" class="text-center md:overflow-x-auto">
                      Data Not Found
                    </td>
                  </tr>
                  <tr
                    v-for="(server, index) in servers"
                    :key="index"
                    class="even:bg-gray-200"
                  >
                    <td
                      class="max-w-20 truncate pl-8 p-4"
                      v-tooltip.top="server.name"
                    >
                      {{ server.name }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-8"
                      v-tooltip.top="server.ip"
                    >
                      {{ server.ip }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-20"
                      v-tooltip.top="server.web_server"
                    >
                      {{ server.web_server }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-16"
                      v-tooltip.top="server.database_type"
                    >
                      {{ server.database_type }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.operating_system"
                    >
                      {{ server.operating_system }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.version"
                      v-if="ownedBy === 'Deleted Servers'"
                    >
                      {{ server.version }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.agent_version"
                      v-if="ownedBy !== 'Deleted Servers'"
                    >
                      {{ server.agent_version }}
                    </td>
                    <td
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.health_status"
                    >
                      {{ server.health_status }}
                    </td>
                    <td
                      v-if="ownedBy === 'Deleted Servers'"
                      class="max-w-20 truncate pl-12"
                      v-tooltip.top="server.deletedAt"
                    >
                      {{ server.deletedAt }}
                    </td>

                    <td
                      v-if="ownedBy !== 'Deleted Servers'"
                      class="text-center"
                    >
                      <i
                        class="cursor-pointer p-4 pi pi-file-edit"
                        title="Server panel"
                      ></i>
                      <i
                        class="cursor-pointer text-red-500 pi pi-trash"
                        title="Disconnect"
                      ></i>
                    </td>
                    <td
                      v-if="ownedBy === 'Deleted Servers'"
                      class="text-center"
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
            </div> -->

            <div class="w-full">
              <table
                class="w-full bg-white dark:border-gray-800 border border-gray-200"
              >
                <thead>
                  <tr
                    class="w-full bg-gray-200 dark:bg-gray-700 dark:text-white text-black text-sm leading-normal"
                  ></tr>
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
                          title="Server pane"
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
        <div>
          <div class="mt-7">
            <h2 class="font-semibold text-xl dark:text-gray-300">Docs</h2>
          </div>
          <div>
            <div
              class="bg-gray-50 dark:bg-gray-700 p-5 border-l-4 border-blue-600 mt-5"
            >
              <div class="grid xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5">
                <div class="xl:col-span-3 col-span-1 place-self-center">
                  <h2
                    class="text-xl font-semibold text-center dark:text-gray-300"
                  >
                    Instant Links
                  </h2>
                  <div class="grid md:grid-cols-2 gap-5 mt-8 mb-2">
                    <a
                      href="https://serveravatar.com/blog/"
                      target="_blank"
                      class="group"
                      ><div
                        class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3"
                      >
                        <div class="text-center text-tiny">
                          <span class="dark:text-gray-300">Blog</span
                          ><span
                            class="material-symbols-outlined -rotate-45 text-blue-600 group-hover:text-sa-600 text-lg align-middle ml-1"
                          >
                            link
                          </span>
                        </div>
                        <p class="text-gray-500 text-xs mt-1 text-center">
                          "Summarize all Blogs briefly."
                        </p>
                      </div></a
                    ><a
                      href="https://serveravatar.com/api-docs/"
                      target="_blank"
                      class="group"
                      ><div
                        class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3"
                      >
                        <div class="text-center text-tiny">
                          <span class="dark:text-gray-300"
                            >API Documentation</span
                          ><span
                            class="material-symbols-outlined -rotate-45 text-blue-600 group-hover:text-sa-600 text-lg align-middle ml-1"
                          >
                            link
                          </span>
                        </div>
                        <p class="text-gray-500 text-xs mt-1 text-center">
                          "Summarize API Documentation briefly."
                        </p>
                      </div></a
                    ><a
                      href="https://serveravatar.com/docs/intro"
                      target="_blank"
                      class="group"
                      ><div
                        class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3"
                      >
                        <div class="text-center text-tiny">
                          <span class="dark:text-gray-300">Product Docs</span
                          ><span
                            class="material-symbols-outlined -rotate-45 text-blue-600 group-hover:text-sa-600 text-lg align-middle ml-1"
                          >
                            link
                          </span>
                        </div>
                        <p class="text-gray-500 text-xs mt-1 text-center">
                          "Summarize Product Documentation briefly."
                        </p>
                      </div></a
                    ><a
                      href="https://serveravatar.com/deployments"
                      target="_blank"
                      class="group"
                      ><div
                        class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3"
                      >
                        <div class="text-center text-tiny">
                          <span class="dark:text-gray-300"
                            >Deployment Tutorials</span
                          ><span
                            class="material-symbols-outlined -rotate-45 text-blue-600 group-hover:text-sa-600 text-lg align-middle ml-1"
                          >
                            link
                          </span>
                        </div>
                        <p class="text-gray-500 text-xs mt-1 text-center">
                          "Summarize all Deployment Tutorials briefly."
                        </p>
                      </div></a
                    >
                  </div>
                </div>
                <div class="xl:col-span-2 col-span-1 place-self-center">
                  <img src="/public/docs.png" class="w-64" />
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
      essentialPoints: [],
      serverCount: 0,
      applicationCount: 0,
      databaseCount: 0,
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

    async fetchServers() {
      this.servers = [];
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
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
      }
    },

    clearSearch() {
      this.searchServer = "";
      this.selectedSearchOption = "";
      this.searchQuery = "Search by a Name/IP Address";
      this.fetchServers();
    },

    async fetchEssentialPoints() {
      const organizationId = 1;
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      try {
        const response = await apiClient.get(
          `/organizations/${organizationId}/essential-point`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.data && response.data.counts) {
          this.serverCount = response.data.counts.server_count;
          this.applicationCount = response.data.counts.application_count;
          this.databaseCount = response.data.counts.database_count;
        } else {
          this.serverCount = 0;
          this.applicationCount = 0;
          this.databaseCount = 0;
        }

        if (response.data && Array.isArray(response.data)) {
          this.essentialPoints = response.data;
        } else {
          this.essentialPoints = [];
        }
      } catch (error) {
        console.error("Error fetching essential points:", error);
        this.essentialPoints = [];
        this.serverCount = 0;
        this.applicationCount = 0;
        this.databaseCount = 0;
      }
    },
  },

  mounted() {
    this.fetchServers();
    this.fetchEssentialPoints();
  },
};
</script>

<style scoped>
</style>
