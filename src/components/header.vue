<template>
  <div>
    <div class="w-full dark:bg-gray-800 bg-white border-b dark:border-b-gray-500">
      <div class="flex justify-end items-center h-[70px]">
        <div class="flex space-x-3 items-center justify-center px-3">
          <div class="w-5 mr-12 flex justify-center">
            <div class="flex px-3 cursor-pointer" @click="toggleDropdown">
              <div
                class="flex bg-gray-100  dark:bg-slate-700 dark:text-white rounded-md mt-2 w-60 p-1 h-16 items-center justify-between"
              >
                <div class="size-14 py-1.5 mr-2 w-10">
                  <img
                    class="dark:bg-white dark:rounded-full"
                    src="/public/avatar63e66a2b-6801-4afd-8e90-ab985842291c-removebg-preview.png"
                    alt="ServerAvatar"
                  />
                </div>
                <h1 class="flex-1">
                  <span class="text-gray-500"></span>
                  <p class="text-gray-500 dark:text-white text-sm mt-1.5">Organization</p>
                  <span class="font-medium">{{ selectedOrganization }}</span>
                </h1>
                <div>
                  <span class="material-symbols-outlined py-4">cached</span>
                </div>
              </div>

              <div
                v-if="isDropdownOpen"
                class="absolute mt-20 w-60 bg-white rounded-md shadow-lg z-10"
              >
                <ul class="overflow-auto scrollbar-container1">
                  <li
                    v-for="org in organizations"
                    :key="org.id"
                    @click="handleDropdownOption(org.name)"
                    class="flex gap-3 cursor-pointer dark:bg-gray-800 dark:text-white hover:bg-gray-100 px-4 py-2"
                  >
                    <span class="material-symbols-outlined"
                      >moving_ministry</span
                    >
                    {{ org.name }}
                  </li>
                </ul>
                <button
                  @click="create1"
                  class="sticky bottom-0 border-t dark:bg-gray-800 bg-white text-blue-700 w-full h-10"
                >
                  <span class="pi pi-plus mr-2"></span>Create an Organization
                </button>
              </div>
            </div>

            <div class="p-3 mr-60">
              <div class="text-md dark:text-white font-semibold">
                Credits
                <div>
                  <button
                    class="bg-blue-600 hover:bg-blue-700 flex items-center text-white text-sm rounded-full p-1 px-4"
                    @click="RedirectAndopenModal"
                  >
                    $0.000<span class="material-symbols-outlined pl-1"
                      >add</span
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
          <span class="material-symbols-outlined dark:text-white cursor-pointer p-2 text-3xl"
            >notifications</span
          >

          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 bg-white dark:bg-gray-800 px-0.5 rounded-full py-2 text-sm font-semibold text-gray-900"
              >
                <Avatar
                  class="mr-2 w-10 mt-2"
                  :style="{ backgroundColor: '#9c27b0', color: '#ffffff' }"
                  shape="circle"
                  @click="toggle"
                  aria-haspopup="true"
                  aria-controls="overlay_menu"
                >
                  <template #icon>
                    <img
                      :src="userAvatar"
                      alt="ServerAvatar"
                      class="w-10 h-10 object-cover"
                    />
                  </template>
                </Avatar>
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
                class="absolute right-0 z-10 mt-2 dark:bg-gray-700  w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }" class="flex gap-3">
                    <a
                      @click="logout"
                      :class="[
                        active
                          ? 'bg-gray-100 text-gray-900 cursor-pointer  outline-none '
                          : 'text-gray-700 ',
                        'block px-4 py-2  text-sm dark:text-white dark:hover:text-gray-900',
                      ]"
                    >
                      <i class="pi pi-sign-out"></i>
                      Logout
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }" class="flex gap-3">
                    <a
                      href="#"
                      @click="chnagepassword"
                      :class="[
                        active
                          ? 'bg-gray-100 text-gray-900 outline-none'
                          : 'text-gray-700',
                        'block px-4 py-2 text-sm dark:text-white dark:hover:text-gray-900',
                      ]"
                    >
                      <i class="pi pi-key"></i>
                      Change Password</a
                    >
                  </MenuItem>

                  <MenuItem v-slot="{ active }" class="flex gap-3">
                    <a
                      href="#"
                      @click="setLightMode"
                      :class="[
                        active
                          ? 'bg-gray-100 text-gray-900 outline-none'
                          : 'text-gray-700',
                        'block px-4 py-2 text-sm dark:text-white dark:hover:text-gray-900',
                      ]"
                    >
                      <i class="pi pi-sun"></i>
                      Light Mode</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }" class="flex gap-3">
                    <a
                      href="#"
                      @click="setDarkMode"
                      :class="[
                        active
                          ? 'bg-gray-100 text-gray-900 outline-none'
                          : 'text-gray-700',
                        'block px-4 py-2 text-sm dark:text-white dark:hover:text-gray-900',
                      ]"
                    >
                      <i class="pi pi-moon"></i>
                      Dark Mode</a
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <Modal
      :show="open"
      @closeModal="closeModal"
      :customClass="['overflow-visible md:max-w-2xl w-full']"
    >
      <template #title>
        <span class="flex justify-between  items-start"
          >Add Credit to Wallet
          <span
            @click="closeModal"
            class="material-symbols-outlined  cursor-pointer"
            >close</span
          ></span
        >
        <hr class="mt-5" />
      </template>
      <template #default>
        <p class="mt-3 flex dark:text-white justify-start">Credit</p>
        <div class="grid grid-cols-3 gap-10 p-5">
          <div
            :class="[
              'border',
              'text-center',
              'cursor-pointer',
              'h-10',
              'p-2',
              'rounded-md',
              'dark:bg-gray-800',
              selectedAmount === 10
                ? 'border-blue-500 bg-blue-100 text-blue-700'
                : 'border-gray-500 bg-blue-50',
            ]"
            @click="updateInput(10)"
          >
            $10.00
          </div>
          <div
            :class="[
              'border',
              'text-center',
              'cursor-pointer',
              'h-10',
              'p-2',
              'rounded-md',
              selectedAmount === 50
                ? 'border-blue-500 bg-blue-100 text-blue-700'
                : 'border-gray-500 bg-blue-50',
            ]"
            @click="updateInput(50)"
          >
            $50.00
          </div>
          <div
            :class="[
              'border',
              'text-center',
              'cursor-pointer',
              'h-10',
              'p-2',
              'rounded-md',
              selectedAmount === 80
                ? 'border-blue-500 bg-blue-100 text-blue-700'
                : 'border-gray-500 bg-blue-50',
            ]"
            @click="updateInput(80)"
          >
            $80.00
          </div>
        </div>
        <div class="px-5">
          <input
            type="number"
            v-model="creditAmount"
            class="border border-gray-500 w-full pl-2 h-10 rounded-md pr-2"
          />
          <div class="flex justify-end items-end">
            <button
              @click="checkout"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-3"
            >
              Checkout
            </button>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import Modal from "/src/components/Model.vue";
import apiClient from "../stores/axios";
import { useAuthStore } from "../stores/auth";

export default {
  components: {
    Modal,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },

  data() {
    return {
      theme: 'light',
      open: false,
      isDropdownOpen: false,
      creditAmount: 50,
      selectedAmount: 50,
      selectedOrganization: "ServerAvatar",
      organizations: [],
      userAvatar: "",
    };
  },

  methods: {
    setLightMode() {
      this.theme = 'light';
      document.body.classList.remove('dark');
    },
    setDarkMode() {
      this.theme = 'dark';
      document.body.classList.add('dark');
    },
    chnagepassword() {
      this.$router.push("/changepassword");
      localStorage.removeItem("access_token");
    },
    logout() {
      this.$router.push("/");
      localStorage.removeItem("access_token");
    },
    openModal() {
      this.open = true;
    },
    closeModal() {
      this.open = false;
      this.selectedAmount = null;
    },
    checkout() {
      this.$router.push("/checkout");
    },
    create1() {
      this.$router.push("/create1");
    },
    updateInput(amount) {
      this.creditAmount = amount;
      this.selectedAmount = amount;
    },
    RedirectAndopenModal() {
      localStorage.setItem("openModal", "true");
      this.$router.push("/Billing");
      this.openModal();
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleDropdownOption(option) {
      this.selectedOrganization = option;
      console.log(`Selected: ${option}`);
      this.isDropdownOpen = false;
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector(".flex.px-3.cursor-pointer");
      if (!dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },

    async fetchUserData() {
      const authStore = useAuthStore();
      const userData = authStore.userData;
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access Token Found");
        return;
      }
      if (userData && userData.organizations) {
        this.organizations = userData.organizations;
      } else {
        console.error("No organizations found in user data.");
      }

      this.userAvatar = userData.avatar;

      const url = `/me`;

      try {
        const response = await apiClient.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        this.userAvatar = response.data.avatar;
      } catch (error) {
        if (error.response) {
          console.error("Error fetching user data:", error.response.data);
          alert(`Error: ${error.response.data.message || "An error occurred"}`);
        } else if (error.request) {
          console.error("No response received:", error.request);
          alert("Network error: No response from server.");
        } else {
          console.error("Error setting up request:", error.message);
          alert(`Error: ${error.message}`);
        }
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },

  mounted() {
    this.fetchUserData();
    document.addEventListener("click", this.handleClickOutside);
  },
};
</script>

<style>
.scrollbar-container1 {
  max-height: 220px;
  overflow-y: hidden;
  transition: overflow-y 0.3s;
}

.scrollbar-container1:hover {
  overflow-y: auto;
}

.scrollbar-container1::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-container1::-webkit-scrollbar-thumb {
  background: #cfcece;
  border-radius: 4px;
}

.scrollbar-container::-webkit-scrollbar-thumb:hover {
  background: #b1aeae;
}
</style>
