 <template>
  <div
    :style="{ width: isSidebarExpanded ? '60px' : '300px' }"
    class="bg-white shadow-xl"
  >
    <div class="dark:bg-gray-800 dark:text-white ">
      <div class="h-[50px] flex justify-between">
        <div
          v-if="!isSidebarExpanded ? '75px' : hidden"
          class="text-xl font-bold flex items-center pl-2 p-3 mt-2 justify-center text-white h-full"
        >
          <img
            src="/public/dark-logo.png"
            alt="Dark Mode Logo"
            class="h-10 w-auto hidden dark:block"
          />

          <img
            src="/public/ServerAvatar.png"
            alt="Light Mode Logo"
            class="h-10 w-auto block dark:hidden"
          />
        </div>
        <div
          @click="toggleSidebar"
          class="flex items-center p-5 dark:text-white cursor-pointer text-black"
        >
          <i class="pi pi-bars mt-4"></i>
        </div>
      </div>
      <hr class="mt-5 dark:border-gray-500" />

      <div
        :class="[
          'flex flex-col border-r dark:border-gray-500 sticky top-0 z-10 h-screen overflow-y-auto dark:bg-gray-800 scrollbar-container',
          !isSidebarExpanded ? 'bg-white' : 'bg-blue-600 , text-white , dark:bg-gray-800',
        ]"
      >
        <SkeletonLoader v-if="loading" />

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Dashboard'"
          @click="fetchUserData"
        >
          <router-link
            to="/dashboard"
            class="flex items-center gap-x-1 space-x-2"
            ><i class="las la-tachometer-alt text-2xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden">Dashboard</span>
          </router-link>
        </div>

        <div
          class="flex rounded-md items-center dark:text-white  dark:hover:bg-blue-500/20 dark:hover:text-blue-400 cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
          v-tooltip.right="item.title"
          v-for="item in menu"
          :key="item.id"
          @click="handleMenuClick(item)"
          :class="[
            !isSidebarExpanded
              ? 'dark:text-white hover:bg-gray-50  hover:text-black'
              : ' text-white hover:bg-white hover:text-blue-600',
            'dark:hover:bg-blue-500/20 dark:hover:text-blue-400',
          ]"
        >
          <router-link
            :to="item.uri"
            class="flex items-center gap-4 w-full rounded-md py-2 pl-2"
            :class="[
              !isSidebarExpanded
                ? 'text-gray-700 dark:text-white hover:text-black'
                : 'text-white hover:text-blue-400',
            ]"
          >
            <i :class="item.icon" class="text-xl"></i>
            <p v-if="!isSidebarExpanded">{{ item.title }}</p>
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Integration'"
        >
          <router-link to="" class="flex items-center gap-2 space-x-2"
            ><i class="las la-project-diagram text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >Integration</span
            >
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700  hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Team Management'"
        >
          <router-link to="" class="flex items-center gap-1 space-x-2"
            ><i class="las la-users text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >Team Managemnet</span
            >
          </router-link>
        </div>

        <hr class="mt-3 mb-3 m-3 dark:border-gray-500" />

        <div
          v-if="!isSidebarExpanded ? 'text-md' : hidden"
          class="text-black dark:text-white p-2 mt-2"
        >
          <h1>Refer & Earn</h1>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Referral Program'"
          @click="fetchUserData"
        >
          <router-link to="/referral" class="flex items-center gap-1 space-x-2"
            ><i class="las la-hand-holding-usd text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >Referral Program</span
            >
          </router-link>
        </div>

        <a
          href="https://affiliates.serveravatar.com/login"
          target="_blank"
          disabled="false"
        >
          <div
            :class="[
              'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
              !isSidebarExpanded
                ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
                : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
            ]"
            v-tooltip.right="'Affiliate Program'"
            @click="fetchUserData"
          >
            <div class="flex items-center gap-1 space-x-2">
              <i class="las la-handshake text-xl"></i>
              <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
                >Affiliate Program</span
              >
            </div>
          </div>
        </a>

        <hr class="mt-3 mb-3 m-3 dark:border-gray-500" />

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Billing'"
          @click="openBillingSidebar"
         
        >
          <router-link to="" class="flex items-center gap-1 space-x-2">
            <i class="las la-money-bill text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden">Billing</span>
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Transactions'"
          @click="fetchUserData"
        >
          <router-link
            to="/transactions"
            class="flex items-center gap-2 space-x-2"
          >
            <span class="pi pi-money-bill"></span>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >Transactions</span
            >
          </router-link>
        </div>

        <div
          v-if="!isSidebarExpanded ? 'text-md' : hidden"
          class="text-black dark:text-white p-2 mt-2"
        >
          <h1>Add-ons</h1>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'InsightHub'"
          @click="fetchUserData"
        >
          <div class="flex items-center gap-1 space-x-2">
            <i class="las la-chart-bar text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >InsightHub</span
            >
          </div>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'White-Label'"
          @click="fetchUserData"
        >
          <div class="flex items-center gap-1 space-x-2">
            <i class="las la-cogs text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >White-Label</span
            >
          </div>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Reseller Panel'"
          @click="fetchUserData"
        >
          <router-link to="/reseller" class="flex items-center gap-1 space-x-2"
            ><i class="las la-check-circle text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >Reseller Panel</span
            >
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Managed Services'"
          @click="fetchUserData"
        >
          <router-link to="/managed" class="flex items-center gap-1 space-x-2"
            ><i class="las la-hand-holding-heart text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >Managed Services</span
            >
          </router-link>
        </div>

        <div
          v-if="!isSidebarExpanded ? 'text-md' : hidden"
          class="text-black dark:text-white p-2 mt-2"
        >
          <h1>Docs</h1>
        </div>

        <a
          href="https://serveravatar.com/docs/intro/"
          target="_blank"
          disabled="false"
        >
          <div
            :class="[
              'flex rounded-md items-center cursor-pointer py-3 pl-4',
              !isSidebarExpanded
                ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
                : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
            ]"
            v-tooltip.right="'Documentation'"
            @click="fetchUserData"
          >
            <div class="flex items-center gap-1 space-x-2">
              <i class="las la-book text-xl"></i>
              <span v-if="!isSidebarExpanded ? 'text-md' : hidden" class="flex"
                >Documentation</span
              >
            </div>
          </div>
        </a>

        <a
          href="https://serveravatar.com/api-docs/"
          target="_blank"
          disabled="false"
        >
          <div
            :class="[
              'flex rounded-md items-center cursor-pointer py-3 pl-4',
              !isSidebarExpanded
                ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
                : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
            ]"
            v-tooltip.right="'API Documentation'"
            @click="fetchUserData"
          >
            <div class="flex items-center gap-1 space-x-2">
              <i class="las la-code text-xl"></i>
              <span v-if="!isSidebarExpanded ? 'text-md' : hidden" class="flex"
                >API Documentation</span
              >
            </div>
          </div>
        </a>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'create'"
          @click="fetchUserData"
        >
          <router-link to="/create" class="flex items-center gap-2 space-x-2">
            <span class="pi pi-file-plus"></span>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden">Create</span>
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'create1'"
          @click="fetchUserData"
        >
          <router-link to="/create1" class="flex items-center gap-2 space-x-2">
            <span class="pi pi-folder-plus"></span>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden">Create1</span>
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center  cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Checkout'"
          @click="fetchUserData"
        >
          <router-link to="/Checkout" class="flex items-center gap-2 space-x-2">
            <span class="pi pi-shopping-cart"></span>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden">Checkout</span>
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Plan'"
          @click="fetchUserData"
        >
          <router-link to="/plan" class="flex items-center gap-2 space-x-2">
            <i class="las la-boxes flex-shrink-0 text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden">Plan</span>
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Git'"
          @click="fetchUserData"
        >
          <router-link to="/git" class="flex items-center gap-2 space-x-2">
            <i class="lab la-git flex-shrink-0 text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden">Git</span>
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Cloud Storage'"
          @click="fetchUserData"
        >
          <router-link
            to="/cloudstorage"
            class="flex items-center gap-2 space-x-2"
          >
            <i class="las la-cloud-upload-alt text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >Cloud Storage</span
            >
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Cloud Platforms'"
          @click="fetchUserData"
        >
          <router-link
            to="/cloudplatforms"
            class="flex items-center gap-2 space-x-2"
          >
            <i class="lab la-buffer text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >Cloud Platforms</span
            >
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Organization'"
          @click="fetchUserData"
        >
          <router-link
            to="/organization"
            class="flex items-center gap-2 space-x-2"
          >
            <i class="las la-building text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >Organization</span
            >
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'Customer'"
          @click="fetchUserData"
        >
          <router-link to="/customer" class="flex items-center gap-2 space-x-2">
            <i class="pi pi-users text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden">Customer</span>
          </router-link>
        </div>

        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-4 mb-10',
            !isSidebarExpanded
              ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50 dark:hover:bg-blue-500/20'
              : 'text-white hover:bg-white dark:hover:bg-blue-500/20 hover:text-blue-400',
          ]"
          v-tooltip.right="'SSL Certificate'"
          @click="fetchUserData"
        >
          <router-link to="/ssl" class="flex items-center gap-2 space-x-2">
            <i class="las la-lock text-xl"></i>
            <span v-if="!isSidebarExpanded ? 'text-md' : hidden"
              >SSL Certificate</span
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- second sidebar -->

  <div
    v-if="isSecondSidebarVisible"
    :class="[
      'bg-white dark:bg-gray-800 dark:text-white',
      !isSidebarExpanded ? 'hidden' : 'block',
      'w-80',
      'transition-all duration-700',
      !isSidebarExpanded ? 'bg-blue-500' : '',
    ]"
    @click.stop
  >
    <div class="">
      <!-- <h1 class="p-5">Hello</h1> -->
      <img src="/public/ServerAvatar.png" alt="" class="w-32 h-10 mt-0.5" />
      <!-- <hr class="mt-7" /> -->
      <div class="border-t mt-7 dark:border-gray-500"></div>
      <div class="">
        <h1>Hello</h1>
      </div>
    </div>
  </div>
</template>



<script>
import { icon } from "@fortawesome/fontawesome-svg-core";
import apiClient from "../stores/axios";
import SkeletonLoader from "/src/Skeleton.vue";
import menu from "../Resources/menu";

export default {
  components: {
    icon,
    SkeletonLoader,
    menu,
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      isSidebarExpanded: false,
      loading: true,
      permissions: [],
      application: [],
      application_user: [],
      dashboard: [],
      firewall: [],
      organization: [],
      server: [],
      menu: menu,
      isSecondSidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
      this.isSecondSidebarVisible = false;
    },
    openBillingSidebar() {
      this.isSidebarExpanded = true;
      this.isSecondSidebarVisible = true;
      this.$router.push({ name: "Billing" });
    },
    handleMenuClick(item) {
      if (item.title === "Backups" || item.title === "Archive Backups") {
        this.isSecondSidebarVisible = true;
        this.isSidebarExpanded = false;
      } else {
        this.fetchUserData(item);
      }
    },
    // handleResize() {
    //   this.screenWidth = window.innerWidth;
    //   this.isSidebarExpanded = this.screenWidth >= 1000;
    //   if (this.screenWidth < 1000) {
    //     this.isSidebarExpanded = false;
    //   } else {
    //     this.isSidebarExpanded = true;
    //   }
    // },

    async fetchUserData() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const url = `/me`;

      try {
        const response = await apiClient.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      } catch (error) {
        if (error.response) {
          console.error("Errorbut fetching user data:", error.response.data);
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

    async fetchData() {
      this.permissions = [];
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      const url = `https://app.satesting1.homes/api/organizations/${organizationId}/my-permissions/all`;
      const params = new URLSearchParams();

      try {
        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        this.application = response.data.permissions.application;
        this.application_user = response.data.permissions.application_user;
        this.backup = response.data.permissions.backup;
        this.cronjob = response.data.permissions.cronjob;
        this.dashboard = response.data.permissions.dashboard;
        this.database = response.data.permissions.database;
        this.firewall = response.data.permissions.firewall;
        this.organization = response.data.permissions.organization;
        this.server = response.data.permissions.server;
      } catch (error) {
        if (error.response) {
          console.error("Error fetching data:", error.response.data);
          alert(`Error: ${error.response.data.message || "An error occurred"}`);
        } else if (error.request) {
          console.error("No response received:", error.request);
          alert("Network error: No response from server.");
        } else {
          console.error("Error setting up request:", error.message);
          alert(`Error: ${error.message}`);
        }
        this.permissions = [];
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchData();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
.scrollbar-container {
  max-height: calc(100vh - 50px);
  overflow-y: hidden;
  transition: overflow-y 0.3s;
}

.scrollbar-container:hover {
  overflow-y: auto;
}

.scrollbar-container::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-container::-webkit-scrollbar-thumb {
  background: #cfcece;
  border-radius: 4px;
}

.scrollbar-container::-webkit-scrollbar-thumb:hover {
  background: #b1aeae;
}
</style>
 
