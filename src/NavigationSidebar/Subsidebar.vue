<!-- <template>
  <div
    :style="{ width: isBackupsSidebarOpen ? '300px' : '60px' }"
    class="bg-white transition-all duration-700 shadow-xl"
  >
    <div class="h-[50px] flex justify-between">
      <div
        v-if="isBackupsSidebarOpen ? '75px' : hidden"
        class="text-xl font-bold flex items-center pl-2 p-3 mt-2 justify-center text-white h-full"
      >
        <img src="/public/ServerAvatar.png" alt="" />
      </div>
      <div
        @click="toggleSidebar"
        class="flex items-center p-5 cursor-pointer text-black"
      >
        <i class="pi pi-bars mt-4"></i>
      </div>
    </div>
    <hr class="mt-5" />

    <div
      class="flex flex-col sticky top-0 z-10 h-screen overflow-y-auto scrollbar-container"
    >
      <SkeletonLoader v-if="loading" />

      <div
        class="flex rounded-md items-center cursor-pointer py-3 pl-3.5 text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Dashboard'"
        @click="fetchUserData"
      >
        <router-link to="/dashboard" class="flex items-center gap-x-1 space-x-2"
          ><i class="las la-tachometer-alt text-2xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden">Dashboard</span>
        </router-link>
      </div>

      <div
          class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
          v-tooltip.right="item.title"
          v-for="item in menu"
          :key="item.id"
          @click="fetchUserData"
        >
          <router-link :to="item.uri" class="flex items-center gap-4 rounded-md py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black">
            <i :class="item.icon" class="text-xl"></i>
            <p v-if="isBackupsSidebarOpen">{{ item.title }}</p>
          </router-link>
        </div>

      <div
        class="flex rounded-md items-center cursor-pointer py-3 pl-4 text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Integration'"
        @click="fetchUserData"
      >
        <router-link to="/Integration" class="flex items-center gap-2 space-x-2"
          ><i class="las la-project-diagram text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden">Integration</span>
        </router-link>
      </div>

      <div
        class="flex rounded-md items-center cursor-pointer pl-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Team Management'"
        @click="fetchUserData"
      >
        <router-link
          to="/managemnet"
          class="flex items-center gap-1 space-x-2"
          ><i class="las la-users text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden"
            >Team Managemnet</span
          >
        </router-link>
      </div>

      <hr class="mt-3 mb-3 m-3" />

      <div
        v-if="isBackupsSidebarOpen ? 'text-md' : hidden"
        class="text-black p-2 mt-2"
      >
        <h1>Refer & Earn</h1>
      </div>

      <div
        class="flex rounded-md items-center cursor-pointer pl-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Referral Program'"
        @click="fetchUserData"
      >
        <router-link to="/referral" class="flex items-center gap-1 space-x-2"
          ><i class="las la-hand-holding-usd text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden"
            >Referral Program</span
          >
        </router-link>
      </div>

      <div
        class="flex rounded-md py-3 pl-4 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Affiliate Program'"
        @click="fetchUserData"
      >
        <div class="flex items-center gap-1 space-x-2">
          <i class="las la-handshake text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden"
            >Affiliate Program</span
          >
        </div>
      </div>

      <hr class="mt-3 mb-3 m-3" />

      <div
        class="flex rounded-md items-center cursor-pointer py-3 pl-4 text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Billing'"
        @click="fetchUserData"
      >
        <router-link to="/Billing" class="flex items-center gap-1 space-x-2">
          <i class="las la-money-bill text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden">Billing</span>
        </router-link>
      </div>

      <div
        class="flex rounded-md items-center cursor-pointer py-3 pl-4 text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Transactions'"
        @click="fetchUserData"
      >
        <router-link
          to="/transactions"
          class="flex items-center gap-2 space-x-2"
        >
          <span class="pi pi-money-bill"></span>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden"
            >Transactions</span
          >
        </router-link>
      </div>

      <div
        v-if="isBackupsSidebarOpen ? 'text-md' : hidden"
        class="text-black p-2 mt-2"
      >
        <h1>Add-ons</h1>
      </div>

      <div
        class="flex rounded-md py-3 pl-4 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'InsightHub'"
        @click="fetchUserData"
      >
        <div class="flex items-center gap-1 space-x-2">
          <i class="las la-chart-bar text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden">InsightHub</span>
        </div>
      </div>

      <div
        class="flex rounded-md py-3 pl-4 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'White-Label'"
        @click="fetchUserData"
      >
        <div class="flex items-center gap-1 space-x-2">
          <i class="las la-cogs text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden">White-Label</span>
        </div>
      </div>

      <div
        class="flex rounded-md items-center cursor-pointer pl-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Reseller Panel'"
        @click="fetchUserData"
      >
        <router-link to="/reseller" class="flex items-center gap-1 space-x-2"
          ><i class="las la-check-circle text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden"
            >Reseller Panel</span
          >
        </router-link>
      </div>

      <div
        class="flex rounded-md py-3 pl-4 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Managed Services'"
        @click="fetchUserData"
      >
        <div class="flex items-center gap-1 space-x-2">
          <i class="las la-hand-holding-heart text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden" class="flex"
            >Managed Services
          </span>
        </div>
      </div>

      <div
        v-if="isBackupsSidebarOpen ? 'text-md' : hidden"
        class="text-black p-2 mt-2"
      >
        <h1>Docs</h1>
      </div>

      <div
        class="flex rounded-md py-3 pl-4 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Documentation'"
        @click="fetchUserData"
      >
        <div class="flex items-center gap-1 space-x-2">
          <i class="las la-book text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden" class="flex"
            >Documentation</span
          >
        </div>
      </div>

      <div
        class="flex rounded-md py-3 pl-4 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'API Documentation'"
        @click="fetchUserData"
      >
        <div class="flex items-center gap-1 space-x-2">
          <i class="las la-code text-xl"></i>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden" class="flex"
            >API Documentation</span
          >
        </div>
      </div>

      <div
        class="flex rounded-md items-center cursor-pointer py-3 pl-4 text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'create'"
        @click="fetchUserData"
      >
        <router-link to="/create" class="flex items-center gap-2 space-x-2">
          <span class="pi pi-file-plus"></span>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden">Create</span>
        </router-link>
      </div>

      <div
        class="flex rounded-md items-center cursor-pointer py-3 pl-4 text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'create1'"
        @click="fetchUserData"
      >
        <router-link to="/create1" class="flex items-center gap-2 space-x-2">
          <span class="pi pi-folder-plus"></span>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden">Create1</span>
        </router-link>
      </div>

      

      <div
        class="flex rounded-md items-center mb-5 cursor-pointer py-3 pl-4 text-gray-700 hover:bg-gray-50 hover:text-black"
        v-tooltip.right="'Checkout'"
        @click="fetchUserData"
      >
        <router-link to="/Checkout" class="flex items-center gap-2 space-x-2">
          <span class="pi pi-shopping-cart"></span>
          <span v-if="isBackupsSidebarOpen ? 'text-md' : hidden">Checkout</span>
        </router-link>
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
      isBackupsSidebarOpen: true,
      loading: true,
      permissions: [],
      application: [],
      application_user: [],
      dashboard: [],
      firewall: [],
      organization: [],
      server: [],
      menu: menu, 
    };
  },
  methods: {
    toggleSidebar() {
      this.isBackupsSidebarOpen = !this.isBackupsSidebarOpen;
    },

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
          // console.log("User data:", response.data);
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
  -->


  <template>
     <div
    v-if="isSecondSidebarVisible"
    :class="[
      'bg-white',
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
      <hr class="mt-7" />
      <div>
        <h1>Hello</h1>
      </div>
    </div>
    </div>
  </template>

  <script>

</script>