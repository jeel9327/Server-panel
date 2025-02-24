<!-- <template>
    <div>
      <h1>Permissions</h1>
      <button @click="fetchPermissions">Fetch Permissions</button>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <ul v-if="permissions">
        <li v-for="permission in permissions" :key="permission.id">{{ permission.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        organizationId: 1, // Set your organization ID here
        permissions: null,
        loading: false,
        error: null,
      };
    },
    methods: {
      async fetchPermissions() {
        this.loading = true;
        this.error = null;
  
        try {
          const response = await axios.get(`https://app.satesting1.homes/api/organizations/${this.organizationId}/my-permissions/all`);
          this.permissions = response.data; // Adjust based on the actual response structure
        } catch (err) {
          this.error = 'Error fetching permissions: ' + err.message;
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add any styles you need here */
  </style>
   -->



   <!-- <template>
     
     <div>
            <div class="w-full xl:px-10 px-5 py-6 mt-4 rounded-md shadow bg-gradient-to-b from-white dark:from-slate-800 to-[#ECF3FF] dark:to-slate-800 grid xl:grid-cols-5 grid-cols-1 xl:gap-10 gap-6 content-center bg-no-repeat bg-cover bg-center" 
            style="background-image: url(src/selfhostedbg2.jpg)">

            <div class="text-4xl mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#076AFF] to-[#1536C1] font-medium">
                <h2>Welcome to <span class="border-b-4 border-yellow-500">Reseller Panel</span></h2>
            </div>
            </div>
            <p class="mt-5 text-gray-500 dark:text-gray-100">
                Discover the new Reseller Panel for seamless server management. Customize and control your platform with ease, designed specifically for your business needs. Enjoy expert support and streamlined processes that enhance your management experience.
            </p>
            <div class="flex-1 flex gap-3 mt-5 relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 truncate rounded-md pl-3">
                <h1 class="text-sa-500 flex gap-2 text-tiny items-center border-r pr-3 py-2"> 
                    <span class="material-symbols-outlined"></span>
                    License Key 
                </h1>
                <div class="relative flex-1 py-2">
                    <input type="password" name="password" id="password" readonly="" class="w-full text-[13px] border-0 p-0 bg-gray-50 dark:bg-gray-700 dark:text-white text-neutral-500" value="UBGcJX7MG3gKjstQA7VdT3JmedFLYrI3I4ZBrpPRJ4oD0H6GFKHtUZRVPugnpwmC" data-listener-added_b5a21f97="true">
                    <button type="button" class="absolute inset-y-0 right-0 flex items-center">
                        <span class="material-symbols-outlined text-lg text-neutral-500 bg-gray-50 dark:bg-gray-700 pl-3"> visibility </span>
                    </button>
                </div>
                <button class="bg-sa-500 text-white px-2">
                    <i class="las la-copy text-lg">::before</i>
                </button>
            </div>
        </div>
   </template>
   
   <script>
   export default {
   
   }
   </script>
   
   <style>
   
   </style> -->



   <!-- <template>
     
     <div class="">
          <div
            class="w-full p-5 h-96 mt-4 rounded-md shadow bg-gradient-to-b from-white dark:from-slate-800 to-[#ECF3FF] dark:to-slate-800 grid grid-cols-1 bg-no-repeat bg-cover bg-center"
            style="background-image: url(src/selfhostedbg2.jpg)"
          >
            <div>
              <div
                class="text-4xl mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#076AFF] to-[#1536C1] font-medium"
              >
                <h1>
                  Welcome to
                  <span class="border-b-4 border-yellow-500"
                    >Reseller Panel</span
                  >
                </h1>
              </div>
              <div class="mt-5  text-gray-500 dark:text-gray-100">
                <h1>Discover the new Reseller Panel for seamless server management. Customize and control your platform with <br> ease, designed specifically for your business needs. Enjoy expert support and streamlined processes that <br> enhance your management experience.</h1>
              </div>
              <div>
                <div class=" mt-5">
                  <div class="">
                    <div>
                    <span
                      class="inline-flex items-center w-full h-10  px-3 text-sm text-black border border-gray-300 rounded-md"
                    >
                      https://app.satesting1.homes?r=IyQwaIdO
                    </span>
                  </div>
                </div>
                  <div>
                    <button
                      class="bg-blue-600 hover:bg-blue-700 text-white h-10 rounded-sm w-32 ml-10"
                    >
                      <span class="pi pi-clone mr-2"></span>Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   </template>
   
   <script>
   export default {
   
   }
   </script>
   
   <style>
   
   </style> -->




   <!-- <template>
    <div
      :style="{ width: isSidebarExpanded ? '300px' : '60px' }"
      class="bg-white transition-all duration-700 shadow-xl"
    >
      <div class="h-[50px] flex justify-between">
        <div
          v-if="isSidebarExpanded"
          class="text-xl font-bold flex items-center pl-2 p-3 mt-2 justify-center text-white h-full"
        >
          <img src="/src/ServerAvatar.png" alt="" />
        </div>
        <div
          @click="toggleSidebar"
          class="flex items-center p-5 cursor-pointer text-black"
        >
          <i class="pi pi-bars mt-4"></i>
        </div>
      </div>
      <hr class="mt-5" />
  
      <div class="flex flex-col sticky top-0 z-10 h-screen overflow-y-auto">
        <div class="rounded-md px-3 gap-1.5 snap-x">
          <div
            class="flex rounded-md items-center cursor-pointer mt-4 py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-if="hasPermission('dashboard')"
            v-tooltip.right="'Dashboard'"
          >
            <router-link to="/Dashboard" class="flex items-center gap-2 space-x-2">
              <span class="pi pi-microsoft"></span>
              <span v-if="isSidebarExpanded" class="text-xl">Dashboard</span>
            </router-link>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-if="hasPermission('servers')"
            v-tooltip.right="'Servers'"
          >
            <router-link to="/Dashboard" class="flex items-center gap-2 space-x-2">
              <span class="pi pi-server"></span>
              <span v-if="isSidebarExpanded" class="text-xl">Servers</span>
            </router-link>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from "../stores/axios";
  
  export default {
    data() {
      return {
        isSidebarExpanded: true,
        permissions: [], 
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarExpanded = !this.isSidebarExpanded;
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
  
          this.permissions = response.data.data || [];
          if (!Array.isArray(this.permissions)) {
            console.error("Unexpected response format:", response.data);
            this.permissions = [];
          }
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
        }
      },
  
      hasPermission(section) {
        return this.permissions.some(permission => permission.title === section);
      },
    },
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
  <style>
  </style> -->
  

  
  <!-- <template>
    <div
      :style="{ width: isSidebarExpanded ? '300px' : '60px' }"
      class="bg-white transition-all duration-700 shadow-xl"
    >
      <div class="h-[50px] flex justify-between">
        <div
          v-if="isSidebarExpanded ? '75px' : hidden"
          class="text-xl font-bold flex items-center pl-2 p-3 mt-2 justify-center text-white h-full"
        >
          <img src="/src/ServerAvatar.png" alt="" />
        </div>
        <div
          @click="toggleSidebar"
          class="flex items-center p-5 cursor-pointer text-black"
        >
          <i class="pi pi-bars mt-4"></i>
        </div>
      </div>
      <hr class="mt-5" />
  
      <div class="flex flex-col sticky top-0 z-10 h-screen overflow-y-auto">
        <div class="rounded-md px-3 gap-1.5 snap-x">
          <div
            class="flex rounded-md items-center cursor-pointer mt-4 py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Dashboard'"
          >
            <router-link to="/Dashboard" class="flex items-center gap-2 space-x-2"
              ><span class="pi pi-microsoft"></span>
              <span v-if="isSidebarExpanded ? 'text-xl' : hidden"
                >Dashboard</span
              ></router-link
            >
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Servers'"
          >
            <router-link to="/Dashboard" class="flex items-center gap-2 space-x-2"
              ><span class="pi pi-server"></span>
              <span v-if="isSidebarExpanded ? 'text-xl' : hidden"
                >Servers</span
              ></router-link
            >
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Applications'"
          >
            <router-link
              to="/applications"
              class="flex items-center gap-2 space-x-2"
            >
              <span class="pi pi-sitemap"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden"
                >Applications</span
              >
            </router-link>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Databases'"
          >
            <router-link to="/Databases" class="flex items-center gap-2 space-x-2"
              ><span class="pi pi-database"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden">Databases</span>
            </router-link>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Backups'"
          >
            <router-link to="/Backups" class="flex items-center gap-2 space-x-2">
              <span class="pi pi-inbox"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden">Backups</span>
            </router-link>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'create'"
          >
            <router-link to="/create" class="flex items-center gap-2 space-x-2">
              <span class="pi pi-file-plus"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden">Create</span>
            </router-link>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'create1'"
          >
            <router-link to="/create1" class="flex items-center gap-2 space-x-2">
              <span class="pi pi-folder-plus"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden">Create1</span>
            </router-link>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Transactions'"
          >
            <router-link
              to="/transactions"
              class="flex items-center gap-2 space-x-2"
            >
              <span class="pi pi-money-bill"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden"
                >Transactions</span
              >
            </router-link>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Integration'"
          >
            <router-link
              to="/Integration"
              class="flex items-center gap-2 space-x-2"
              ><span class="pi pi-globe"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden"
                >Integration</span
              >
            </router-link>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer pl-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Team Management'"
          >
            <router-link
              to="/Team Managemnet"
              class="flex items-center gap-2 space-x-2"
              ><span class="pi pi-users"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden"
                >Team Managemnet</span
              >
            </router-link>
          </div>
  
          <hr class="mt-3 mb-3" />
  
          <div
            v-if="isSidebarExpanded ? 'text-md' : hidden"
            class="text-black p-2 mt-2"
          >
            <h1>Refer & Earn</h1>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer pl-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Referral Program'"
          >
            <router-link to="/referral" class="flex items-center gap-2 space-x-2"
              ><span class="pi pi-users"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden"
                >Referral Program</span
              >
            </router-link>
          </div>
  
          <div
            class="flex rounded-md py-2 pl-2 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Affiliate Program'"
          >
            <div class="flex items-center gap-2 space-x-2">
              <span class="pi pi-users"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden"
                >Affiliate Program</span
              >
            </div>
          </div>
  
          <hr class="mt-3 mb-3" />
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Billing'"
          >
            <router-link to="/Billing" class="flex items-center gap-2 space-x-2">
              <span class="pi pi-money-bill"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden">Billing</span>
            </router-link>
          </div>
  
          <div
            v-if="isSidebarExpanded ? 'text-md' : hidden"
            class="text-black p-2 mt-2"
          >
            <h1>Add-ons</h1>
          </div>
  
          <div
            class="flex rounded-md py-2 pl-2 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'InsightHub'"
          >
            <div class="flex items-center gap-2 space-x-2">
              <span class="pi pi-chart-bar"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden"
                >InsightHub</span
              >
            </div>
          </div>
  
          <div
            class="flex rounded-md py-2 pl-2 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'White-Label'"
          >
            <div class="flex items-center gap-2 space-x-2">
              <span class="pi pi-sparkles"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden"
                >White-Label</span
              >
            </div>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer pl-2 py-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Reseller Panel'"
          >
            <router-link to="/reseller" class="flex items-center gap-2 space-x-2"
              ><span class="pi pi-check-circle"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden"
                >Reseller Panel</span
              >
            </router-link>
          </div>
  
          <div
            class="flex rounded-md py-2 pl-2 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Managed Services'"
          >
            <div class="flex items-center gap-2 space-x-2">
              <span class="pi pi-wrench"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden" class="flex"
                >Managed Services
              </span>
            </div>
          </div>
  
          <div
            v-if="isSidebarExpanded ? 'text-md' : hidden"
            class="text-black p-2 mt-2"
          >
            <h1>Docs</h1>
          </div>
  
          <div
            class="flex rounded-md py-2 pl-2 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Managed Services'"
          >
            <div class="flex items-center gap-2 space-x-2">
              <span class="pi pi-book"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden" class="flex"
                >Documentation</span
              >
            </div>
          </div>
  
          <div
            class="flex rounded-md py-2 pl-2 items-center cursor-pointer text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Managed Services'"
          >
            <div class="flex items-center gap-2 space-x-2">
              <span class="pi pi-code"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden" class="flex"
                >API Documentation</span
              >
            </div>
          </div>
  
          <div
            class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
            v-tooltip.right="'Checkout'"
          >
            <router-link to="/Checkout" class="flex items-center gap-2 space-x-2">
              <span class="pi pi-shopping-cart"></span>
              <span v-if="isSidebarExpanded ? 'text-md' : hidden">Checkout</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  
  
  <script>
    import apiClient from "../stores/axios";
    
    export default {
      data() {
        return {
          isSidebarExpanded: true,
          permissions: [], 
        };
      },
      methods: {
        toggleSidebar() {
          this.isSidebarExpanded = !this.isSidebarExpanded;
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
    
            this.permissions = response.data.data || [];
            if (!Array.isArray(this.permissions)) {
              console.error("Unexpected response format:", response.data);
              this.permissions = [];
            }
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
          }
        },
    
        hasPermission(section) {
          return this.permissions.some(permission => permission.title === section);
        },
      },
      mounted() {
        this.fetchData();
      },
    };
    </script>
  
  <style>
  </style> -->
  

  
  <!-- <template>
    <div class="bg-gray-100 w-full h-auto flex">
      <sidebar class="sticky top-0 z-10 h-screen" />
      <div class="w-full h-full">
        <headerTop class="sticky top-0 z-10" />
        <div class="w-full ">
          <dashboard />
          <login />
          <router-view></router-view>
          <div class="">
            <div class="bg-white border-r-2 border-l-2 border-b-2 h-14 flex">
              <div>
                <span class="pi pi-sitemap ml-5 p-5 text-gray-500 hover:text-gray-800"></span>
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
              <div class="ml-5 p-4 text-gray-500 hover:text-gray-800 font-medium">
                <h1>Billing</h1>
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
              <div class="ml-5 p-4 text-gray-500 hover:text-gray-800 font-medium">
                <h1>Wallet</h1>
              </div>
            </div>
            <div class="p-5 grid grid-cols-3 gap-10">
              
            </div>
            <div>
              <div class="p-5 font-medium text-lg">
                <h1>Usage Summary</h1>
              </div>
              <div class="ml-5 flex gap-5">
               
              </div>
            </div>
            <div>
              <div class="m-5 rounded-md border border-gray-200 shadow-lg bg-white p-5 items-center">
                <div class="container mx-auto">
                  <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr class="bg-gray-100 text-gray-700 text-sm leading-normal">
                        <th class="py-4 px-8 text-left">Description</th>
                        <th class="py-3">Amount</th>
                        <th class="py-3">Date & Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="loading">
                        <td colspan="3" class="text-center">
                          <SkeletonLoader />
                        </td>
                      </tr>
                      <tr v-if="charges.length === 0 && !loading">
                        <td colspan="3" class="text-center text-gray-500">No Data Found</td>
                      </tr>
                      <tr v-for="(charge, index) in charges" :key="index" class="even:bg-gray-100">
                        <td class="pl-8 p-4 border" v-tooltip.top="charge.service">{{ charge.service || "N/A" }}</td>
                        <td class="text-center border">${{ charge.base_amount || "N/A" }}</td>
                        <td class="text-center border">{{ charge.created_at || "N/A" }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <Modal
        :show="open"
        @closeModal="closeModal"
        :customClass="['overflow-visible md:max-w-2xl w-full']"
      >
        <template #title>
          <span class="flex justify-between items-start">Add Credit to Wallet <span @click="closeModal" class="material-symbols-outlined cursor-pointer">close</span></span>
          <hr class="mt-5">
        </template>
        <template #default>
          <p class="mt-3 flex justify-start">Credit</p>
          <div class="grid grid-cols-3 gap-10 p-5">
            <div 
              :class="['border', 'text-center', 'cursor-pointer', 'h-10', 'p-2', 'rounded-md', selectedAmount === 10 ? 'border-blue-500 bg-blue-100 text-blue-700' : 'border-gray-500 bg-blue-50']"
              @click="updateInput(10)"
            >$10.00</div>
            <div 
              :class="['border', 'text-center', 'cursor-pointer', 'h-10', 'p-2', 'rounded-md', selectedAmount === 50 ? 'border-blue-500 bg-blue-100 text-blue-700' : 'border-gray-500 bg-blue-50']"
              @click="updateInput(50)"
            >$50.00</div>
            <div 
              :class="['border', 'text-center', 'cursor-pointer', 'h-10', 'p-2', 'rounded-md', selectedAmount === 80 ? 'border-blue-500 bg-blue-100 text-blue-700' : 'border-gray-500 bg-blue-50']"
              @click="updateInput(80)"
            >$80.00</div>
          </div>
          <div class="px-5">
            <input 
              type="number" 
              v-model="creditAmount" 
              class="border border-gray-500 w-full pl-2 h-10 rounded-md pr-2" 
            >
            <div class="flex justify-end items-end">
              <button @click="checkout" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-3">Checkout</button>
            </div>
          </div>
        </template>
      </Modal>
    </div>
  </template>
  
  <script>
  import apiClient from "../../stores/axios";
  import sidebar from "/src/components/sidebar.vue";
  import headerTop from "/src/components/header.vue";
  import Modal from "/src/components/Model.vue";
  import SkeletonLoader from "/src/components/SkeletonLoader.vue"; 
  
  export default {
    name: "charges",
    components: {
      sidebar,
      headerTop,
      Modal,
      SkeletonLoader, 
    },
    data() {
      return {
        allservers: "All Servers",
        searchServer: "",
        charges: [],
        selectedDate: null,
        open: false, 
        creditAmount: 50,
        selectedAmount: 50,
        loading: true, 
      };
    },
  
    watch: {
      searchServer: "fetchcharges",
    },
  
    methods: {
      handleDropdownChange() {
        this.fetchcharges();
      },
      openModal() {
        this.open = true;
      },
      closeModal() {
        this.open = false;
        this.selectedAmount = null;
      },
  
      async fetchcharges() {
        this.loading = true; 
        this.charges = [];
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
  
        const organizationId = 1;
        const url = `https://app.satesting1.homes/api/organizations/${organizationId}/billing-details/charges`;
        const params = new URLSearchParams();
        params.append("search", this.searchServer || "");
        params.append("per_page", 10);
        if (this.selectedDate) {
          params.append("date", this.selectedDate);
        }
  
        try {
          const response = await apiClient.get(`${url}?${params.toString()}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          if (response.data && response.data.charges) {
            this.charges = response.data.charges.data;
          } else {
            console.warn("No charges data found in the response.");
          }
        } catch (error) {
          console.error("Error fetching charges:", error.message);
        } finally {
          this.loading = false; 
        }
      },
  
      filterCharges() {
        this.fetchcharges();
      },
      clearFilter() {
        this.selectedDate = null;
        this.fetchcharges();
      },
      updateInput(amount) {
        this.creditAmount = amount;
        this.selectedAmount = amount;
      },
      checkout() {
        this.$router.push('/checkout'); 
      },
    },
  
    mounted() {
      this.fetchcharges();
  
      if (localStorage.getItem('openModal') === 'true') {
        this.openModal();
        localStorage.removeItem('openModal'); 
      }
    },
  };
  </script>
  
  <style>
  </style> -->
  


  <!-- <template>
    <div
      :style="{ width: isSidebarExpanded ? '300px' : '60px' }"
      class="bg-white transition-all duration-700 shadow-xl"
    >
      <div class="h-[50px] flex justify-between">
        <div
          v-if="isSidebarExpanded ? '75px' : hidden"
          class="text-xl font-bold flex items-center pl-2 p-3 mt-2 justify-center text-white h-full"
        >
          <img src="/src/ServerAvatar.png" alt="" />
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
          class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
          v-for="item in menu"
          :key="item.id"
        >
          <router-link :to="item.uri" class="flex items-center gap-4 rounded-md py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black">
            <i :class="item.icon" class="text-xl"></i>
            <p v-if="isSidebarExpanded">{{ item.title }}</p>
          </router-link>
        </div>
  
        <hr class="mt-3 mb-3 m-3" />
  
        <div
          v-if="isSidebarExpanded ? 'text-md' : hidden"
          class="text-black p-2 mt-2"
        >
          <h1>Refer & Earn</h1>
        </div>
  
        <div
          class="flex rounded-md items-center cursor-pointer pl-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black"
          v-tooltip.right="'Referral Program'"
        >
          <router-link to="/referral" class="flex items-center gap-1 space-x-2">
            <i class="las la-hand-holding-usd text-xl"></i>
            <span v-if="isSidebarExpanded">Referral Program</span>
          </router-link>
        </div>
  
        
  
      </div>
    </div>
  </template>
  
  <script>
  import { icon } from "@fortawesome/fontawesome-svg-core";
  import apiClient from "../stores/axios";
  import SkeletonLoader from "/src/Skeleton.vue";
  import menu from "../Resources/menu"; // Importing menu data
  
  export default {
    components: {
      icon,
      SkeletonLoader,
    },
    data() {
      return {
        isSidebarExpanded: true,
        loading: true,
        permissions: [],
        application: [],
        application_user: [],
        dashboard: [],
        firewall: [],
        organization: [],
        server: [],
        menu: menu, // Setting the menu data here
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarExpanded = !this.isSidebarExpanded;
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
  
      hasPermission(section) {
        return this.permissions.some(
          (permission) => permission.title === section
        );
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
  </style> -->
  

  
  
  <!-- <template>
    
  </template>
  
  <script>
  export default {
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

  // Set URL based on ownership
  switch (this.ownedBy) {
    case "Owned By Me":
      url = "/organizations/1/servers";
      break;
    case "Shared With Me":
      url = "/servers/shared";
      break;
    case "Deleted Servers":
      url = `/organizations/1/deleted-servers`;
      break;
  }

  const params = new URLSearchParams();
  params.append("pagination", 1);

  // Append search parameters based on query type
  switch (this.searchQuery) {
    case "Search by a Name/IP Address":
      params.append("search", "search");
      params.append("value", this.searchServer);
      break;
    case "Search by a Cloud Platform":
      params.append("search", "provider_name");
      params.append("value", this.selectedCloudPlatform.toLowerCase());
      break;
    case "Search by an OS Version":
      params.append("search", "version");
      params.append("value", this.selectedOSVersion);
      break;
    // Add other cases as needed...
  }

  try {
    const response = await apiClient.get(url, { params, headers: { Authorization: `Bearer ${accessToken}` } });
    this.servers = response.data.servers; // Adjust based on your API response structure
  } catch (error) {
    console.error("Error fetching servers:", error);
  } finally {
    this.loading = false;
  }
}

  }
  </script>
  
  <style>
  
  </style> -->
  


  <!-- <template>
    <div class="flex px-3 cursor-pointer relative" @click="toggleDropdown">
      <div class="flex bg-gray-100 rounded-md mt-1 w-60 p-1 h-16">
        <div class="size-14 py-2 mr-2">
          <img src="/src/avatar63e66a2b-6801-4afd-8e90-ab985842291c-removebg-preview.png" alt="ServerAvatar" />
        </div>
        <h1>
          <span class="text-gray-500">Organization</span> <span class="font-medium">ServerAvatar</span>
        </h1>
        <div>
          <span class="material-symbols-outlined p-4">cached</span>
        </div>
      </div>
  
      
      <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
        <ul class="py-1">
          <li @click="handleDropdownOption('Option 1')" class="cursor-pointer hover:bg-gray-100 px-4 py-2">Option 1</li>
          <li @click="handleDropdownOption('Option 2')" class="cursor-pointer hover:bg-gray-100 px-4 py-2">Option 2</li>
          <li @click="handleDropdownOption('Option 3')" class="cursor-pointer hover:bg-gray-100 px-4 py-2">Option 3</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDropdownOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      handleDropdownOption(option) {
        console.log(`Selected: ${option}`);
        this.isDropdownOpen = false; // Close dropdown after selection
        // Add any additional logic for the selected option here
      },
    },
    // Close dropdown when clicking outside
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      handleDropdownOption(option) {
        console.log(`Selected: ${option}`);
        this.isDropdownOpen = false; // Close dropdown after selection
        // Add any additional logic for the selected option here
      },
      handleClickOutside(event) {
        const dropdown = this.$el.querySelector('.flex.px-3.cursor-pointer');
        if (!dropdown.contains(event.target)) {
          this.isDropdownOpen = false; // Close dropdown if clicked outside
        }
      },
    },
  };
  </script>
  
  <style>
  
  </style> -->
  


  <!-- <template>
    <div>
      <div class="w-full bg-white border-b-2">
        <div class="flex justify-end items-center h-[70px]">
          <div class="flex space-x-3 items-center justify-center px-3">
            <div class="w-5 mr-12 flex justify-center relative" @click="toggleDropdown">
              <div class="flex bg-gray-100 rounded-md mt-1 w-60 p-1 h-16">
                <div class="size-14 py-2 mr-2">
                  <img :src="userAvatar" alt="ServerAvatar" />
                </div>
                <h1>
                  <span class="text-gray-500">Organization</span> <span class="font-medium">ServerAvatar</span>
                </h1>
                <div>
                  <span class="material-symbols-outlined p-4">cached</span>
                </div>
              </div>
  
              
              <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <ul class="py-1">
                  <li v-for="item in items" :key="item.label" @click="item.command" class="cursor-pointer hover:bg-gray-100 px-4 py-2">
                    <i :class="item.icon"></i> {{ item.label }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <Modal v-if="open" @close="closeModal" />
    </div>
  </template>
  
  <script>
  import Modal from '/src/components/Model.vue'; 
  import apiClient from "../stores/axios";
  
  export default {
    components: {
      Modal,
    },
    
    data() {
      return {
        open: false,
        creditAmount: 50, 
        selectedAmount: 50, 
        userAvatar: '', // To store the avatar URL
        isDropdownOpen: false,
        items: [
          {
            label: "Logout",
            icon: "pi pi-sign-out",
            command: () => {
              localStorage.removeItem("access_token");
              this.$router.push("/");
            },
          },
          {
            label: "Change Password",
            icon: "pi pi-key",
            command: () => {
              this.$router.push("/changepassword");
            },
          },
          {
            label: "Light Mode",
            icon: "pi pi-sun",
            command: () => {
              // Add light mode logic here
            },
          },
          {
            label: "Dark Mode",
            icon: "pi pi-moon",
            command: () => {
              // Add dark mode logic here
            },
          },
        ],
      };
    },
    
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      handleDropdownOption(option) {
        console.log(`Selected: ${option}`);
        this.isDropdownOpen = false; // Close dropdown after selection
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
          console.log("User data:", response.data);
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
      openModal() {
        this.open = true; 
      },
      closeModal() {
        this.open = false; 
        this.selectedAmount = null; 
      },
      checkout() {
        this.$router.push('/checkout'); 
      },
      updateInput(amount) {
        this.creditAmount = amount; 
        this.selectedAmount = amount; 
      },
      RedirectAndopenModal() {
        localStorage.setItem('openModal', 'true'); 
        this.$router.push('/Billing');
        this.openModal();
      },
    },
    
    mounted() {
      this.fetchUserData(); 
      document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
      handleClickOutside(event) {
        const dropdown = this.$el.querySelector('.flex.px-3.cursor-pointer');
        if (!dropdown.contains(event.target)) {
          this.isDropdownOpen = false; // Close dropdown if clicked outside
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add any additional styling here */
  </style> -->
  


  <!-- <template>
    <div class="flex px-3 cursor-pointer" @click="toggleDropdown">
      <div class="flex bg-gray-100 rounded-md mt-1 w-60 p-1 h-16">
        <div class="size-14 py-2 mr-2">
          <img src="/src/avatar63e66a2b-6801-4afd-8e90-ab985842291c-removebg-preview.png" alt="ServerAvatar" />
        </div>
        <h1>
          <span class="text-gray-500">Organization</span> <span class="font-medium">ServerAvatar</span>
        </h1>
        <div>
          <span class="material-symbols-outlined p-4">cached</span>
        </div>
      </div>
  
      
      <div v-if="isDropdownOpen" class="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
        <ul class="py-1">
          <li @click="handleDropdownOption('Option 1')" class="cursor-pointer hover:bg-gray-100 px-4 py-2">Option 1</li>
          <li @click="handleDropdownOption('Option 2')" class="cursor-pointer hover:bg-gray-100 px-4 py-2">Option 2</li>
          <li @click="handleDropdownOption('Option 3')" class="cursor-pointer hover:bg-gray-100 px-4 py-2">Option 3</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDropdownOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      handleDropdownOption(option) {
        console.log(`Selected: ${option}`);
        this.isDropdownOpen = false; 
      },
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
      handleClickOutside(event) {
        const dropdown = this.$el.querySelector('.flex.px-3.cursor-pointer');
        if (!dropdown.contains(event.target)) {
          this.isDropdownOpen = false; 
        }
      },
    },
  };
  </script>
  
  <style>
  
  </style> -->
  


  
  
  <!-- <template>
    <div>
      <div class="w-full bg-white border-b-2">
        <div class="flex justify-end items-center h-[70px]">
          <div class="flex space-x-3 items-center justify-center px-3">
            <div class="w-5 mr-12 flex justify-center">
              <div class="flex px-3 cursor-pointer" @click="toggleDropdown">
                <div class="flex bg-gray-100 rounded-md mt-1 w-60 p-1 h-16">
                  <div class="size-14 py-2 mr-2">
                    <img src="/src/avatar63e66a2b-6801-4afd-8e90-ab985842291c-removebg-preview.png" alt="ServerAvatar" />
                  </div>
                  <h1>
                    <span class="text-gray-500">Organization</span>
                    <span class="font-medium">{{ selectedOrganization }}</span>
                  </h1>
                  <div>
                    <span class="material-symbols-outlined p-4">cached</span>
                  </div>
                </div>
  
                <div v-if="isDropdownOpen" class="absolute mt-20 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <ul class="py-1">
                    <li v-for="org in organizations" :key="org.id" @click="handleDropdownOption(org.name)" class="cursor-pointer hover:bg-gray-100 px-4 py-2">
                      {{ org.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
           
          </div>
        </div>
      </div>
  
     
    </div>
  </template>
  
  <script>
  import Modal from '/src/components/Model.vue';
  import apiClient from "../stores/axios";
  import { useAuthStore } from '../stores/auth'; // Import your Pinia store
  
  export default {
    components: {
      Modal,
    },
    
    data() {
      return {
        open: false,
        isDropdownOpen: false,
        creditAmount: 50,
        selectedAmount: 50,
        selectedOrganization: 'Select Organization', // Default selected organization
        organizations: [], // Array to hold organizations
        userAvatar: '',
        items: [
          // Your menu items
        ],
      };
    },
    
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      handleDropdownOption(option) {
        this.selectedOrganization = option; // Set the selected organization
        this.isDropdownOpen = false; 
      },
      async fetchUserData() {
        const authStore = useAuthStore(); // Get the store
        const userData = authStore.userData; // Access user data
  
        if (userData && userData.organizations) {
          this.organizations = userData.organizations; // Set organizations from user data
        } else {
          console.error("No organizations found in user data.");
        }
  
        this.userAvatar = userData.avatar; // Assuming avatar is also part of userData
      },
    },
    
    mounted() {
      this.fetchUserData(); // Fetch user data on mount
    },
  };
  </script>
  
  <style>
  </style> -->
  


  
  
  <!-- <template>
    <div class="grid grid-cols-6 gap-5 h-auto mt-5">
      <div
        @click="setActiveSection('custom')"
        class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
        :class="{
          'border-2 border-blue-600 bg-blue-100': activeSection === 'custom'
        }"
      >
        <img src="/src/customIcon.png" class="min-w-7 w-7 h-auto" />
        <h1>Custom</h1>
      </div>
      <div
        v-for="provider in enabledProviders"
        :key="provider.id"
        @click="setActiveSection(provider.name.toLowerCase())"
        class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
        :class="{
          'border-2 border-blue-600 bg-blue-100': activeSection === provider.name.toLowerCase()
        }"
      >
        <img :src="provider.icon" class="min-w-7 w-7 h-auto" />
        <h1>{{ provider.name }}</h1>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from "../../stores/axios";
  import sidebar from "/src/components/sidebar.vue";
  import headerTop from "/src/components/header.vue";
  
  export default {
    name: "connect",
    components: {
      sidebar,
      headerTop,
    },
    data() {
      return {
        ownedBy: "Owned By Me",
        searchQuery: "Search by a Name/IP Address",
        searchServer: "",
        databases: [],
        enabledProviders: [],
        activeSection: "custom",
      };
    },
  
    watch: {
      searchServer: "fetchdatabases",
    },
  
    methods: {
      handleDropdownChange() {
        this.fetchdatabases();
      },
      setActiveSection(section) {
        this.activeSection = section;
      },
  
      async fetchdatabases() {
        this.databases = [];
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
  
        const organizationId = 1;
        let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;
        const params = new URLSearchParams();
  
        try {
          const response = await apiClient.get(`${url}?${params.toString()}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          this.databases = response.data.databases || [];
  
          if (!Array.isArray(this.databases)) {
            console.error("Unexpected response format:", response.data);
            this.databases = [];
          }
  
          await this.fetchEnableProviders();
        } catch (error) {
          this.handleError(error);
          this.databases = [];
        }
      },
  
      async fetchEnableProviders() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for enable providers");
          return;
        }
  
        try {
          const response = await apiClient.get(
            `https://app.satesting1.homes/api/enable-providers`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          // Assuming the response has a structure like { providers: [{ id, name, icon }] }
          this.enabledProviders = response.data.providers || [];
  
          if (!Array.isArray(this.enabledProviders)) {
            console.error(
              "Unexpected response format for enabled providers:",
              response.data
            );
            this.enabledProviders = [];
          }
        } catch (error) {
          this.handleError(error);
          this.enabledProviders = [];
        }
      },
  
      handleError(error) {
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
      },
  
      clearSearch() {
        this.searchServer = "";
        this.fetchdatabases();
      },
    },
  
    mounted() {
      this.fetchdatabases();
    },
  };
  </script>
  
  <style scoped>
 
  </style> -->
  
  <!-- <template>
    <div class="grid grid-cols-6 gap-5 h-auto mt-5">
      <div
        @click="setActiveSection('custom')"
        class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
        :class="{
          'border-2 border-blue-600 bg-blue-100': activeSection === 'custom'
        }"
      >
        <img src="/src/customIcon.png" class="min-w-7 w-7 h-auto" />
        <h1>Custom</h1>
      </div>
      <div
        v-for="provider in enabledProviders"
        :key="provider.id"
        @click="setActiveSection(provider.name.toLowerCase())"
        class="border rounded-md cursor-pointer flex items-center capitalize gap-4 p-4"
        :class="{
          'border-2 border-blue-600 bg-blue-100': activeSection === provider.name.toLowerCase()
        }"
      >
        <img :src="getProviderImage(provider.name)" class="min-w-7 w-7 h-auto" />
        <h1>{{ provider.name }}</h1>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from "../../stores/axios";
  import sidebar from "/src/components/sidebar.vue";
  import headerTop from "/src/components/header.vue";
  
  export default {
    name: "connect",
    components: {
      sidebar,
      headerTop,
    },
    data() {
      return {
        ownedBy: "Owned By Me",
        searchQuery: "Search by a Name/IP Address",
        searchServer: "",
        databases: [],
        enabledProviders: [],
        activeSection: "custom",
      };
    },
  
    watch: {
      searchServer: "fetchdatabases",
    },
  
    methods: {
      handleDropdownChange() {
        this.fetchdatabases();
      },
      setActiveSection(section) {
        this.activeSection = section;
      },
  
      getProviderImage(provider) {
        switch (provider) {
          case 'amazon lightsail':
            return '/src/amazon-lightsail.png';
          case 'digitalocean':
            return '/src/digitalocean.png';
          case 'vultr':
            return '/src/vultr.png';
          case 'linode':
            return '/src/linode.png';
          case 'hetzner':
            return '/src/hetzner.png';
        }
      },
  
      async fetchdatabases() {
        this.databases = [];
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
  
        const organizationId = 1;
        let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;
        const params = new URLSearchParams();
  
        try {
          const response = await apiClient.get(`${url}?${params.toString()}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          this.databases = response.data.databases || [];
  
          if (!Array.isArray(this.databases)) {
            console.error("Unexpected response format:", response.data);
            this.databases = [];
          }
  
          await this.fetchEnableProviders();
        } catch (error) {
          this.handleError(error);
          this.databases = [];
        }
      },
  
      async fetchEnableProviders() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for enable providers");
          return;
        }
  
        try {
          const response = await apiClient.get(
            `https://app.satesting1.homes/api/enable-providers`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          this.enabledProviders = response.data.providers || [];
  
          if (!Array.isArray(this.enabledProviders)) {
            console.error("Unexpected response format for enabled providers:", response.data);
            this.enabledProviders = [];
          }
        } catch (error) {
          this.handleError(error);
          this.enabledProviders = [];
        }
      },
  
      handleError(error) {
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
      },
  
      clearSearch() {
        this.searchServer = "";
        this.fetchdatabases();
      },
    },
  
    mounted() {
      this.fetchdatabases();
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style> -->

  <!-- <template>
  <div class="grid grid-cols-6 gap-5 h-auto mt-5">
    <div
      @click="setActiveSection('custom')"
      class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
      :class="{
        'border-2 border-blue-600 bg-blue-100': activeSection === 'custom',
      }"
    >
      <img src="/src/customIcon.png" class="min-w-7 w-7 h-auto" />
      <h1>Custom</h1>
    </div>
    <div
      v-for="provider in enabledProviders"
      :key="provider.id"
      @click="setActiveSection(provider.id)"
      class="border rounded-md cursor-pointer flex items-center capitalize gap-4 p-4"
      :class="{
        'border-2 border-blue-600 bg-blue-100': activeSection === provider.id,
      }"
    >
      <img :src="CloudLogo[provider.id].logo" class="min-w-7 w-7 h-auto" />
      <h1>{{ provider.name }}</h1>
    </div>
  </div>

  <div v-if="activeSection === 'amazonlightsail'">
    <div class="mt-5">
      <label
        for="name"
        class="label after:content-['*'] after:ml-0.5 after:text-red-500"
        >Choose a Service Provider Account</label
      >
    </div>
    <div>
      <div
        class="mt-5 grid grid-cols-1 gap-y-6 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-4"
      >
        <div id="headlessui-radiogroup-v-1-5-45" role="radiogroup">
          <div
            class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 relative cursor-pointer rounded-lg border px-3 py-3 h-full focus:ring-0 focus:outline-none"
            id="headlessui-radiogroup-option-v-1-5-46"
            role="radio"
            aria-checked="false"
            tabindex="0"
            data-headlessui-state=""
          >
            <div class="flex items-center gap-3 h-full">
              <div
                class="flex justify-center items-center px-1.5 rounded text-blue-500"
              >
                <i class="las la-user text-xl"></i>
              </div>
              <span
                class="truncate block text-center font-medium text-gray-900 dark:text-white v-popper--has-tooltip"
                >ServerAvatar</span
              >
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              class="invisible h-4 w-4 text-sa-500 absolute top-2 right-2"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div
          class="relative cursor-pointer rounded-lg flex items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none"
        >
          <div class="block text-tiny font-medium w-full">
            <div class="flex items-center gap-3 text-sa-500">
              <div
                class="flex justify-center items-center px-1.5 rounded text-blue-500"
              >
                <span><i class="las la-link text-lg"></i></span>
              </div>
              <span class="text-blue-500"> Link Account </span>
            </div>
          </div>
        </div>
        <a
          href="https://portal.aws.amazon.com/billing/signup#/start/email"
          target="_blank"
          disabled="false"
          class="relative cursor-pointer rounded-lg flex justify-center items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none disabled:opacity-50"
          ><div class="block text-tiny font-medium text-white w-full">
            <div class="flex items-center gap-3 text-sa-500">
              <div
                class="flex justify-center items-center px-1.5 rounded text-blue-500"
              >
                <i class="las la-user-plus text-lg"></i>
              </div>
              <span class="text-blue-500"> Create an Account </span>
            </div>
          </div></a
        >
      </div>
    </div>
  </div>
</template>
  
  <script>
import apiClient from "../../stores/axios";
import sidebar from "/src/components/sidebar.vue";
import headerTop from "/src/components/header.vue";
import CloudLogo from "../../providerlogo";

export default {
  name: "connect",
  components: {
    sidebar,
    headerTop,
  },
  data() {
    return {
      ownedBy: "Owned By Me",
      searchQuery: "Search by a Name/IP Address",
      searchServer: "",
      databases: [],
      enabledProviders: [],
      activeSection: "custom",
      CloudLogo: CloudLogo,
    };
  },

  watch: {
    searchServer: "fetchdatabases",
  },

  methods: {
    handleDropdownChange() {
      this.fetchdatabases();
    },
    setActiveSection(section) {
      this.activeSection = section;
    },

    async fetchdatabases() {
      this.databases = [];
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;
      const params = new URLSearchParams();

      try {
        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        this.databases = response.data.databases || [];

        if (!Array.isArray(this.databases)) {
          console.error("Unexpected response format:", response.data);
          this.databases = [];
        }

        await this.fetchEnableProviders();
      } catch (error) {
        this.handleError(error);
        this.databases = [];
      }
    },

    async fetchEnableProviders() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found for enable providers");
        return;
      }

      try {
        const response = await apiClient.get(
          `https://app.satesting1.homes/api/enable-providers`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        this.enabledProviders =
          response.data.enableProviders.cloudPlatform || [];

        if (!Array.isArray(this.enabledProviders)) {
          console.error(
            "Unexpected response format for enabled providers:",
            response.data
          );
          this.enabledProviders = [];
        }
      } catch (error) {
        this.handleError(error);
        this.enabledProviders = [];
      }
    },

    handleError(error) {
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
    },

    clearSearch() {
      this.searchServer = "";
      this.fetchdatabases();
    },
  },

  mounted() {
    this.fetchdatabases();
  },
};
</script> -->
  

<!-- <template>
  <div v-if="value == 'digitalocean'" class="grid grid-cols-6 gap-5 mt-5">
    <div
      v-for="value in digitalocean"
      :key="value.id"
      @click="setActiveSection('digitalocean')"
      class="border rounded-md cursor-pointer flex items-center capitalize gap-4 p-4"
      :class="{
        'border-2 border-blue-600 bg-blue-100': activeSection == 'digitalocean',
      }"
    >
      <i class="las la-user text-xl"></i>
      <span class="truncate">{{ value.name }}</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style> -->



<!-- <template>
  <div>
    <div class="grid grid-cols-6 gap-5 h-auto mt-5">
      <div
        @click="setActiveSection('custom')"
        class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
        :class="{
          'border-2 border-blue-600 bg-blue-100': activeSection === 'custom',
        }"
      >
        <img src="/public/customIcon.png" class="min-w-7 w-7 h-auto" />
        <h1>Custom</h1>
      </div>
      <div
        v-for="provider in enabledProviders"
        :key="provider.id"
        @click="setActiveSection(provider)"
        class="border rounded-md cursor-pointer flex items-center capitalize gap-4 p-4"
        :class="{
          'border-2 border-blue-600 bg-blue-100': activeSection === provider,
        }"
      >
        <img :src="CloudLogo[provider].logo" class="min-w-7 w-7 h-auto" />
        <h1>{{ provider }}</h1>
      </div>
    </div>

    
    <div v-if="activeSection === 'digitalocean'" class="grid grid-cols-6 gap-5 mt-5">
      <div
        v-for="value in digitalocean"
        :key="value.id"
        class="border rounded-md cursor-pointer flex items-center capitalize gap-4 p-4"
      >
        <i class="las la-user text-xl"></i>
        <span class="truncate">{{ value.name }}</span>
      </div>
      <div
        class="relative cursor-pointer rounded-lg flex items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none"
      >
        <div class="block text-tiny font-medium w-full">
          <div class="flex items-center gap-3 text-sa-500">
            <div class="flex justify-center items-center px-1.5 rounded text-blue-500">
              <span><i class="las la-link text-lg"></i></span>
            </div>
            <span class="text-blue-500"> Link Account </span>
          </div>
        </div>
      </div>
      <a
        href="https://cloud.digitalocean.com/registrations/new"
        target="_blank"
        class="relative cursor-pointer rounded-lg flex justify-center items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none"
      >
        <div class="block text-tiny font-medium text-white w-full">
          <div class="flex items-center gap-3 text-sa-500">
            <div class="flex justify-center items-center px-1.5 rounded text-blue-500">
              <i class="las la-user-plus"></i>
            </div>
            <span class="text-blue-500"> Create Account </span>
          </div>
        </div>
      </a>
    </div>

    
  </div>
</template>

<script>
import apiClient from "@/stores/axios";
import sidebar from "@/components/sidebar.vue";
import headerTop from "@/components/header.vue";
import CloudLogo from "@/Resources/providerlogo.js";

export default {
  name: "connect",
  components: {
    sidebar,
    headerTop,
  },
  data() {
    return {
      searchServer: "",
      vultr: [],
      digitalocean: [],
      hetzner: [],
      lightsail: [],
      linode: [],
      enabledProviders: [],
      activeSection: "custom",
      CloudLogo: CloudLogo,
    };
  },

  watch: {
    searchServer: "fetchdatabases",
  },

  methods: {
    handleDropdownChange() {
      this.fetchdatabases();
    },
    setActiveSection(section) {
      this.activeSection = section;
      // If the clicked section is a provider, it will automatically hide the custom section
    },

    async fetchdatabases() {
      // Your existing fetch logic
      // Ensure to populate this.digitalocean with the correct data
    },

    async fetchEnableProviders() {
      // Your existing fetch logic
    },

    handleError(error) {
      // Your existing error handling logic
    },

    clearSearch() {
      this.searchServer = "";
      this.fetchdatabases();
    },
  },

  mounted() {
    this.fetchdatabases();
  },
};
</script>

<style>
</style> -->



<!-- <div v-if="activeSection === 'digitalocean'">
              <div class="mt-5">
                <label
                  for="name"
                  class="label after:content-['*'] after:ml-0.5 after:text-red-500"
                  >Choose a Service Provider Account</label
                >
              </div>
              <div>
                <div
                  class="mt-5 grid grid-cols-1 gap-y-6 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-4"
                >
                  <div id="headlessui-radiogroup-v-1-5-145" role="radiogroup">
                    <div
                      class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 relative cursor-pointer rounded-lg border px-3 py-3 h-full focus:ring-0 focus:outline-none"
                      id="headlessui-radiogroup-option-v-1-5-146"
                      role="radio"
                      aria-checked="false"
                      tabindex="0"
                      data-headlessui-state=""
                    >
                      <div class="flex items-center gap-3 h-full">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-sa-500"
                        >
                          <i class="las la-user text-xl"></i>
                        </div>
                        <span
                          class="truncate block text-center font-medium text-gray-900 dark:text-white v-popper--has-tooltip"
                          >dipali@serveravatar.com</span
                        >
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="invisible h-4 w-4 text-sa-500 absolute top-2 right-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div id="headlessui-radiogroup-v-1-5-143" role="radiogroup">
                    <div
                      class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 relative cursor-pointer rounded-lg border px-3 py-3 h-full focus:ring-0 focus:outline-none"
                      id="headlessui-radiogroup-option-v-1-5-144"
                      role="radio"
                      aria-checked="false"
                      tabindex="0"
                      data-headlessui-state=""
                    >
                      <div class="flex items-center gap-3 h-full">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-sa-500"
                        >
                          <i class="las la-user text-xl"></i>
                        </div>
                        <span
                          class="truncate block text-center font-medium text-gray-900 dark:text-white v-popper--has-tooltip"
                          >nishant@serveravatar.com</span
                        >
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="invisible h-4 w-4 text-sa-500 absolute top-2 right-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div id="headlessui-radiogroup-v-1-5-141" role="radiogroup">
                    <div
                      class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 relative cursor-pointer rounded-lg border px-3 py-3 h-full focus:ring-0 focus:outline-none"
                      id="headlessui-radiogroup-option-v-1-5-142"
                      role="radio"
                      aria-checked="false"
                      tabindex="0"
                      data-headlessui-state=""
                    >
                      <div class="flex items-center gap-3 h-full">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-sa-500"
                        >
                          <i class="las la-user text-xl"></i>
                        </div>
                        <span
                          class="truncate block text-center font-medium text-gray-900 dark:text-white v-popper--has-tooltip"
                          >smit@serveravatar.com</span
                        >
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="invisible h-4 w-4 text-sa-500 absolute top-2 right-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div id="headlessui-radiogroup-v-1-5-139" role="radiogroup">
                    <div
                      class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 relative cursor-pointer rounded-lg border px-3 py-3 h-full focus:ring-0 focus:outline-none"
                      id="headlessui-radiogroup-option-v-1-5-140"
                      role="radio"
                      aria-checked="false"
                      tabindex="0"
                      data-headlessui-state=""
                    >
                      <div class="flex items-center gap-3 h-full">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-sa-500"
                        >
                          <i class="las la-user text-xl"></i>
                        </div>
                        <span
                          class="truncate block text-center font-medium text-gray-900 dark:text-white v-popper--has-tooltip"
                          >krishna@serveravatar.com</span
                        >
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="invisible h-4 w-4 text-sa-500 absolute top-2 right-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="relative cursor-pointer rounded-lg flex items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none"
                  >
                    <div class="block text-tiny font-medium w-full">
                      <div class="flex items-center gap-3 text-sa-500">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-blue-500"
                        >
                          <span><i class="las la-link text-lg"></i></span>
                        </div>
                        <span class="text-blue-500"> Link Account </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://cloud.digitalocean.com/registrations/new"
                    target="_blank"
                    disabled="false"
                    class="relative cursor-pointer rounded-lg flex justify-center items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none disabled:opacity-50"
                    ><div class="block text-tiny font-medium text-white w-full">
                      <div class="flex items-center gap-3 text-sa-500">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-blue-500"
                        >
                          <i class="las la-user-plus text-lg"></i>
                        </div>
                        <span class="text-blue-500"> Create an Account </span>
                      </div>
                    </div></a
                  >
                </div>
              </div>
            </div> -->



            <!-- <template>
              
              <div v-if="activeSection === 'linode'">
              <div class="mt-5">
                <label
                  for="name"
                  class="label after:content-['*'] after:ml-0.5 after:text-red-500"
                  >Choose a Service Provider Account</label
                >
              </div>
              <div>
                <div
                  class="mt-5 grid grid-cols-1 gap-y-6 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-4"
                >
                  <div id="headlessui-radiogroup-v-1-5-45" role="radiogroup">
                    <div
                      class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 relative cursor-pointer rounded-lg border px-3 py-3 h-full focus:ring-0 focus:outline-none"
                      id="headlessui-radiogroup-option-v-1-5-46"
                      role="radio"
                      aria-checked="false"
                      tabindex="0"
                      data-headlessui-state=""
                    >
                      <div class="flex items-center gap-3 h-full">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-blue-500"
                        >
                          <i class="las la-user text-xl"></i>
                        </div>
                        <span
                          class="truncate block text-center font-medium text-gray-900 dark:text-white v-popper--has-tooltip"
                        >
                          smitpipaliya31@gmail.com</span
                        >
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="invisible h-4 w-4 text-sa-500 absolute top-2 right-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="relative cursor-pointer rounded-lg flex items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none"
                  >
                    <div class="block text-tiny font-medium w-full">
                      <div class="flex items-center gap-3 text-sa-500">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-blue-500"
                        >
                          <span><i class="las la-link text-lg"></i></span>
                        </div>
                        <span class="text-blue-500"> Link Account </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://portal.aws.amazon.com/billing/signup#/start/email"
                    target="_blank"
                    disabled="false"
                    class="relative cursor-pointer rounded-lg flex justify-center items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none disabled:opacity-50"
                    ><div class="block text-tiny font-medium text-white w-full">
                      <div class="flex items-center gap-3 text-sa-500">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-blue-500"
                        >
                          <i class="las la-user-plus text-lg"></i>
                        </div>
                        <span class="text-blue-500"> Create an Account </span>
                      </div>
                    </div></a
                  >
                </div>
              </div>
            </div>
            <div v-if="activeSection === 'hetzner'">
              <div class="mt-5">
                <label
                  for="name"
                  class="label after:content-['*'] after:ml-0.5 after:text-red-500"
                  >Choose a Service Provider Account</label
                >
              </div>
              <div>
                <div
                  class="mt-5 grid grid-cols-1 gap-y-6 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-4"
                >
                  <div id="headlessui-radiogroup-v-1-5-45" role="radiogroup">
                    <div
                      class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 relative cursor-pointer rounded-lg border px-3 py-3 h-full focus:ring-0 focus:outline-none"
                      id="headlessui-radiogroup-option-v-1-5-46"
                      role="radio"
                      aria-checked="false"
                      tabindex="0"
                      data-headlessui-state=""
                    >
                      <div class="flex items-center gap-3 h-full">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-blue-500"
                        >
                          <i class="las la-user text-xl"></i>
                        </div>
                        <span
                          class="truncate block text-center font-medium text-gray-900 dark:text-white v-popper--has-tooltip"
                        >
                          Hetzner</span
                        >
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        class="invisible h-4 w-4 text-sa-500 absolute top-2 right-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="relative cursor-pointer rounded-lg flex items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none"
                  >
                    <div class="block text-tiny font-medium w-full">
                      <div class="flex items-center gap-3 text-sa-500">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-blue-500"
                        >
                          <span><i class="las la-link text-lg"></i></span>
                        </div>
                        <span class="text-blue-500"> Link Account </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://portal.aws.amazon.com/billing/signup#/start/email"
                    target="_blank"
                    disabled="false"
                    class="relative cursor-pointer rounded-lg flex justify-center items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none disabled:opacity-50"
                    ><div class="block text-tiny font-medium text-white w-full">
                      <div class="flex items-center gap-3 text-sa-500">
                        <div
                          class="flex justify-center items-center px-1.5 rounded text-blue-500"
                        >
                          <i class="las la-user-plus text-lg"></i>
                        </div>
                        <span class="text-blue-500"> Create an Account </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            </template>
            
            <script>
            export default {
            
            }
            </script>
            
            <style>
            
            </style> -->
  
        

            <!-- <template>
              <div>
                
                <div
                  @click="openModal"
                  class="relative cursor-pointer rounded-lg flex items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none"
                >
                  <div class="block text-tiny font-medium w-full">
                    <div class="flex items-center gap-3 text-sa-500">
                      <div class="flex justify-center items-center px-1.5 rounded text-blue-500">
                        <span><i class="las la-link text-lg"></i></span>
                      </div>
                      <span class="text-blue-500"> Link Account </span>
                    </div>
                  </div>
                </div>
            
                
                <div
                  v-if="isModalOpen"
                  class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50"
                >
                  <div class="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
                    <h2 class="text-lg font-bold mb-4">Link Your Account</h2>
                    <p>Please enter your account details to link.</p>
                    <input
                      type="text"
                      v-model="accountDetails"
                      placeholder="Enter your account details"
                      class="border rounded-md p-2 w-full mt-2"
                    />
                    <div class="flex justify-end mt-4">
                      <button @click="closeModal" class="bg-red-500 text-white rounded-md px-4 py-2 mr-2">Cancel</button>
                      <button @click="linkAccount" class="bg-blue-500 text-white rounded-md px-4 py-2">Link</button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            
            <script>
            export default {
              data() {
                return {
                  isModalOpen: false,
                  accountDetails: "", // To store account details
                };
              },
              methods: {
                openModal() {
                  this.isModalOpen = true;
                },
                closeModal() {
                  this.isModalOpen = false;
                },
                linkAccount() {
                  // Logic to link the account goes here
                  console.log("Linking account with details:", this.accountDetails);
                  this.closeModal(); // Close the modal after linking
                },
              },
            };
            </script>
            
            <style>
            /* Add any additional styles if necessary */
            </style> -->
            


            <!-- <template>
              <div>
                <div
                  v-for="value in digitalocean"
                  :key="value.id"
                  class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
                  @click="showDetails(value)"
                >
                  <i class="las la-user text-xl text-blue-600"></i>
                  <span class="truncate">{{ value.name }}</span>
                </div>
            
               
                <div v-if="selectedItem" class="mt-5 p-4 border rounded-lg bg-gray-100">
                  <h2 class="text-lg font-bold">{{ selectedItem.name }} Details</h2>
                  <p class="mt-2">Here are the details for {{ selectedItem.name }}:</p>
                  <ul class="list-disc list-inside">
                    <li>ID: {{ selectedItem.id }}</li>
                    
                  </ul>
                  <button @click="clearSelection" class="mt-4 bg-red-500 text-white rounded-md px-4 py-2">Close</button>
                </div>
              </div>
            </template>
            
            <script>
            import apiClient from "@/stores/axios";
            import sidebar from "@/components/sidebar.vue";
            import headerTop from "@/components/header.vue";
            import CloudLogo from "@/Resources/providerlogo.js";
            
            export default {
              name: "connect",
              components: {
                sidebar,
                headerTop,
              },
              data() {
                return {
                  isModalOpen: false,
                  accountDetails: "",
                  searchServer: "",
                  vultr: [],
                  digitalocean: [],
                  hetzner: [],
                  lightsail: [],
                  linode: [],
                  enabledProviders: [],
                  activeSection: "custom",
                  selectedItem: null, // New property to store the selected item
                  CloudLogo: CloudLogo,
                };
              },
            
              watch: {
                searchServer: "fetchdatabases",
              },
            
              methods: {
                handleDropdownChange() {
                  this.fetchdatabases();
                },
                setActiveSection(section) {
                  this.activeSection = section;
                },
                openModal() {
                  this.isModalOpen = true;
                },
                closeModal() {
                  this.isModalOpen = false;
                },
                linkAccount() {
                  console.log("Linking account with details:", this.accountDetails);
                  this.closeModal();
                },
                showDetails(item) {
                  this.selectedItem = item; // Set the selected item
                },
                clearSelection() {
                  this.selectedItem = null; // Clear the selection
                },
            
                async fetchdatabases() {
                  this.databases = [];
                  const accessToken = localStorage.getItem("access_token");
                  if (!accessToken) {
                    console.error("No access token found");
                    return;
                  }
            
                  const organizationId = 1;
                  let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;
                  const params = new URLSearchParams();
            
                  try {
                    const response = await apiClient.get(`${url}?${params.toString()}`, {
                      headers: {
                        Authorization: `Bearer ${accessToken}`,
                      },
                    });
                    this.digitalocean = response.data.digitalocean || [];
                    this.hetzner = response.data.hetzner || [];
                    this.lightsail = response.data.lightsail || [];
                    this.linode = response.data.linode || [];
                    this.vultr = response.data.vultr || [];
            
                    if (!Array.isArray(this.databases)) {
                      console.error("Unexpected response format:", response.data);
                      this.databases = [];
                    }
            
                    await this.fetchEnableProviders();
                  } catch (error) {
                    this.handleError(error);
                    this.databases = [];
                  }
                },
            
                async fetchEnableProviders() {
                  const accessToken = localStorage.getItem("access_token");
                  if (!accessToken) {
                    console.error("No access token found for enable providers");
                    return;
                  }
            
                  try {
                    const response = await apiClient.get(
                      `https://app.satesting1.homes/api/enable-providers`,
                      {
                        headers: {
                          Authorization: `Bearer ${accessToken}`,
                        },
                      }
                    );
            
                    this.enabledProviders =
                      response.data.enableProviders.cloudPlatform || [];
            
                    if (!Array.isArray(this.enabledProviders)) {
                      console.error(
                        "Unexpected response format for enabled providers:",
                        response.data
                      );
                      this.enabledProviders = [];
                    }
                  } catch (error) {
                    this.handleError(error);
                    this.enabledProviders = [];
                  }
                },
            
                handleError(error) {
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
                },
            
                clearSearch() {
                  this.searchServer = "";
                  this.fetchdatabases();
                },
              },
            
              mounted() {
                this.fetchdatabases();
              },
            };
            </script> -->
            



            <!-- <template>
              <fieldset>
                <legend class="text-sm/6 font-semibold text-gray-900">Select a mailing list</legend>
                <RadioGroup v-model="selectedMailingLists" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <RadioGroupOption as="template" v-for="mailingList in mailingLists" :key="mailingList.id" :value="mailingList" :aria-label="mailingList.title" :aria-description="`${mailingList.description} to ${mailingList.users}`" v-slot="{ active, checked }">
                    <div :class="[active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-xs focus:outline-hidden']">
                      <span class="flex flex-1">
                        <span class="flex flex-col">
                          <span class="block text-sm font-medium text-gray-900">{{ mailingList.title }}</span>
                          <span class="mt-1 flex items-center text-sm text-gray-500">{{ mailingList.description }}</span>
                          <span class="mt-6 text-sm font-medium text-gray-900">{{ mailingList.users }}</span>
                        </span>
                      </span>
                      <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'size-5 text-indigo-600']" aria-hidden="true" />
                      <span :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-600' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </fieldset>
            </template>
            
            <script setup>
            import { ref } from 'vue'
            import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
            import { CheckCircleIcon } from '@heroicons/vue/20/solid'
            
            const mailingLists = [
              { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
              { id: 2, title: 'Existing customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
              { id: 3, title: 'Trial users', description: 'Last message sent 4 days ago', users: '2740 users' },
            ]
            
            const selectedMailingLists = ref(mailingLists[0])
            </script> -->
  




            <!-- <template>
              <div
                class="bg-gray-100 border mt-3 border-gray-300 sm:w-3/4 xl:w-3/5 rounded-lg py-5 p-5"
              >
                <div class="flex space-x-5">
                  <div class="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="generate"
                      name="default-radio"
                      v-model="selectedOption"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      for="default-radio-2"
                      class="ms-2 text-sm font-medium text-gray-900"
                    >Generate New Key</label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="add"
                      name="default-radio"
                      v-model="selectedOption"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900"
                    >Add Public Key</label>
                  </div>
                </div>
                <div class="mt-5" v-if="selectedOption === 'add'">
                  <h1
                    for="description"
                    class="label after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Add Public Key
                  </h1>
                  <div class="mt-3">
                    <textarea
                      name="public_key"
                      id="public_key"
                      rows="3"
                      class="mt-2 border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2"
                      placeholder="Paste Your Public Key Here"
                    ></textarea>
                  </div>
                </div>
              </div>
            </template>
            
            <script>
            import CountryFlag from "vue-country-flag";
            import apiClient from "@/stores/axios";
            import sidebar from "@/components/sidebar.vue";
            import headerTop from "@/components/header.vue";
            import CloudLogo from "@/Resources/providerlogo.js";
            
            export default {
              name: "connect",
              components: {
                CountryFlag,
                sidebar,
                headerTop,
              },
              data() {
                return {
                  selectedOption: 'generate', // Default option
                  // ... other data properties
                };
              },
              // ... other methods and lifecycle hooks
            };
            </script> -->
            


            <!-- <template>
              <div>
                <p class="text-base font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
                  Select an OS Image
                </p>
                <ul class="grid w-full gap-6 grid-cols-6 mt-3">
                  <li>
                    <input
                      type="radio"
                      id="ubuntu-24-04"
                      name="hosting"
                      value="ubuntu-24-04"
                      class="hidden peer"
                      v-model="selectedOS"
                      required
                    />
                    <label
                      for="ubuntu-24-04"
                      class="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div class="flex space-x-5">
                        <img src="/public/ubuntu.png" class="w-7 h-auto" />
                        <div class="w-full text-lg">Ubuntu 24.04</div>
                      </div>
                    </label>
                  </li>
            
                  <li>
                    <input
                      type="radio"
                      id="ubuntu-22-04"
                      name="hosting"
                      value="ubuntu-22-04"
                      class="hidden peer"
                      v-model="selectedOS"
                      required
                    />
                    <label
                      for="ubuntu-22-04"
                      class="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div class="flex space-x-5">
                        <img src="/public/ubuntu.png" class="w-7 h-auto" />
                        <div class="w-full text-lg">Ubuntu 22.04</div>
                      </div>
                    </label>
                  </li>
            
                  <li>
                    <input
                      type="radio"
                      id="ubuntu-20-04"
                      name="hosting"
                      value="ubuntu-20-04"
                      class="hidden peer"
                      v-model="selectedOS"
                      required
                    />
                    <label
                      for="ubuntu-20-04"
                      class="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div class="flex space-x-5">
                        <img src="/public/ubuntu.png" class="w-7 h-auto" />
                        <div class="w-full text-lg">Ubuntu 20.04</div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </template>
            
            <script>
            export default {
              name: "OSImageSelector",
              data() {
                return {
                  selectedOS: '', // This will hold the value of the selected OS
                };
              },
            };
            </script>
            
            <style scoped>
            /* Add any additional styles here if needed */
            </style> -->
            



            <!-- <template>
              <fieldset>
                <legend class="text-sm/6 font-semibold text-gray-900">Select a mailing list</legend>
                <RadioGroup v-model="selectedMailingLists" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  <RadioGroupOption as="template" v-for="mailingList in mailingLists" :key="mailingList.id" :value="mailingList" :aria-label="mailingList.title" :aria-description="`${mailingList.description} to ${mailingList.users}`" v-slot="{ active, checked }">
                    <div :class="[active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-xs focus:outline-hidden']">
                      <span class="flex flex-1">
                        <span class="flex flex-col">
                          <span class="block text-sm font-medium text-gray-900">{{ mailingList.title }}</span>
                          <span class="mt-1 flex items-center text-sm text-gray-500">{{ mailingList.description }}</span>
                          <span class="mt-6 text-sm font-medium text-gray-900">{{ mailingList.users }}</span>
                        </span>
                      </span>
                      <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'size-5 text-indigo-600']" aria-hidden="true" />
                      <span :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-600' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </fieldset>
            </template>
            
            <script setup>
            import { ref } from 'vue'
            import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
            import { CheckCircleIcon } from '@heroicons/vue/20/solid'
            
            const mailingLists = [
              { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
              { id: 2, title: 'Existing customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
              { id: 3, title: 'Trial users', description: 'Last message sent 4 days ago', users: '2740 users' },
            ]
            
            const selectedMailingLists = ref(mailingLists[0])
            </script> -->
  


            <!-- <template>
              <div>
                <p class="text-base font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
                  Select an OS Image
                </p>
                <ul class="grid w-full gap-6 grid-cols-6 mt-3">
                  <li>
                    <input
                      type="radio"
                      id="ubuntu-24-04"
                      name="hosting"
                      value="ubuntu-24-04"
                      class="hidden peer"
                      v-model="selectedOS"
                      @change="handleSelection('Ubuntu 24.04')"
                      required
                    />
                    <label
                      for="ubuntu-24-04"
                      class="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                    >
                      <div class="flex space-x-5">
                        <img src="/public/ubuntu.png" class="w-7 h-auto" />
                        <div class="w-full text-lg">Ubuntu 24.04</div>
                      </div>
                    </label>
                  </li>
            
                  <li>
                    <input
                      type="radio"
                      id="ubuntu-22-04"
                      name="hosting"
                      value="ubuntu-22-04"
                      class="hidden peer"
                      v-model="selectedOS"
                      @change="handleSelection('Ubuntu 22.04')"
                      required
                    />
                    <label
                      for="ubuntu-22-04"
                      class="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                    >
                      <div class="flex space-x-5">
                        <img src="/public/ubuntu.png" class="w-7 h-auto" />
                        <div class="w-full text-lg">Ubuntu 22.04</div>
                      </div>
                    </label>
                  </li>
            
                  <li>
                    <input
                      type="radio"
                      id="ubuntu-20-04"
                      name="hosting"
                      value="ubuntu-20-04"
                      class="hidden peer"
                      v-model="selectedOS"
                      @change="handleSelection('Ubuntu 20.04')"
                      required
                    />
                    <label
                      for="ubuntu-20-04"
                      class="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                    >
                      <div class="flex space-x-5">
                        <img src="/public/ubuntu.png" class="w-7 h-auto" />
                        <div class="w-full text-lg">Ubuntu 20.04</div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </template>
            
            <script>
            export default {
              name: "OSImageSelector",
              data() {
                return {
                  selectedOS: 'ubuntu-22-04', // Set default selected OS
                };
              },
              methods: {
                handleSelection(os) {
                  console.log(`${os} selected.`);
                  // Add any additional logic you want to execute on selection
                },
              },
            };
            </script>
            
            <style scoped>
            /* Add any additional styles here if needed */
            </style> -->
            





            <!-- <template>
              <div id="headlessui-radiogroup-v-12-5-75" role="radiogroup">
                <div
                  class="mt-4 grid grid-cols-1 gap-y-6 xl:grid-cols-4 sm:grid-cols-2 sm:gap-x-4"
                  role="none"
                >
                  <div
                    class="border-sa-500 bg-sa-50 dark:bg-gray-800 relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                    role="radio"
                    :aria-checked="selectedOption === 'apache'"
                    tabindex="0"
                    @click="handleSelection('apache')"
                    :class="{ 'bg-sa-50': selectedOption === 'apache' }"
                  >
                    <div class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5">
                      <div>
                        <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                          <img src="/public/apache.png" class="h-auto mx-auto w-10" />
                        </span>
                        <span class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white">Apache</span>
                      </div>
                      <div>
                        <ul class="list-disc pl-4 text-tiny dark:text-white">
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Apache</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">PHP (From 7.2 to 8.3)</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">PHP-FPM Configuration</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">MySQL/MariaDB</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Redis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
            
                  <div
                    class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                    role="radio"
                    :aria-checked="selectedOption === 'nginx'"
                    tabindex="0"
                    @click="handleSelection('nginx')"
                    :class="{ 'bg-sa-50': selectedOption === 'nginx' }"
                  >
                    <div class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5">
                      <div>
                        <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                          <img src="/public/nginx.png" class="h-auto mx-auto w-10" />
                        </span>
                        <span class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white">Nginx</span>
                      </div>
                      <div>
                        <ul class="list-disc pl-4 text-tiny dark:text-white">
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Nginx</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">PHP (From 7.2 to 8.3)</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">PHP-FPM Configuration</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">MySQL/MariaDB</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Redis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
            
                  
            
                  <div
                    class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                    role="radio"
                    :aria-checked="selectedOption === 'ols'"
                    tabindex="0"
                    @click="handleSelection('ols')"
                    :class="{ 'bg-sa-50': selectedOption === 'ols' }"
                  >
                    <div class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5">
                      <div>
                        <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                          <img src="/public/ols.png" class="h-auto mx-auto w-10" />
                        </span>
                        <span class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white">OLS</span>
                      </div>
                      <div>
                        <ul class="list-disc pl-4 text-tiny dark:text-white">
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">OpenLiteSpeed</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">LSPHP From 7.4 to 8.3</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">MySQL/MariaDB</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Redis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
            
                  <div
                    class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                    role="radio"
                    :aria-checked="selectedOption === 'node'"
                    tabindex="0"
                    @click="handleSelection('node')"
                    :class="{ 'bg-sa-50': selectedOption === 'node' }"
                  >
                    <div class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5">
                      <div>
                        <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                          <img src="/public/node.png" class="h-auto mx-auto w-28" />
                        </span>
                        <span class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white">Node Stack</span>
                      </div>
                      <div>
                        <ul class="list-disc pl-4 text-tiny dark:text-white">
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Nginx</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">MongoDB</li>
                          <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Redis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            
            <script>
            export default {
              name: "WebServerSelector",
              data() {
                return {
                  selectedOption: 'apache', // Set default selected option
                };
              },
              methods: {
                handleSelection(option) {
                  this.selectedOption = option; // Update the selected option
                  console.log(`${option} selected.`);
                  // Add any additional logic you want to execute on selection
                },
              },
            };
            </script>
            
            <style scoped>
            /* Add any additional styles here if needed */
            </style> -->
            




            <!-- <template>
              <div class="pt-3">
                <div class="grid grid-cols-5 gap-5">
                  <div
                    v-for="region in regions"
                    :key="region.id" 
                    class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
                  >
                    <country-flag
                      :country="region.countryCode" 
                      class="rounded big-flag"
                    ></country-flag>
                    <h1>{{ region.name }}</h1>
                  </div>
                </div>
              </div>
            </template>
            
            <script>
            import CountryFlag from "vue-country-flag";
            import apiClient from "@/stores/axios";
            import sidebar from "@/components/sidebar.vue";
            import headerTop from "@/components/header.vue";
            import CloudLogo from "@/Resources/providerlogo.js";
            
            export default {
              name: "OSImageSelector",
              components: {
                CountryFlag,
                sidebar,
                headerTop,
              },
              data() {
                return {
                  selectedOS: "ubuntu-22-04",
                  selectedOption: "generate",
                  isModalOpen: false,
                  accountDetails: "",
                  searchServer: "",
                  vultr: [],
                  digitalocean: [],
                  hetzner: [],
                  lightsail: [],
                  linode: [],
                  enabledProviders: [],
                  activeSection: "custom",
                  selectedItem: null,
                  CloudLogo: CloudLogo,
                  regions: [],
                };
              },
            
              watch: {
                searchServer: "fetchdatabases",
              },
              methods: {
                // ... existing methods remain unchanged
            
                async fetchRegions(providerId) {
                  const accessToken = localStorage.getItem("access_token");
                  if (!accessToken) {
                    console.error("No access token found for regions");
                    return;
                  }
            
                  try {
                    const response = await apiClient.get(
                      `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/${providerId}/regions`,
                      {
                        headers: {
                          Authorization: `Bearer ${accessToken}`,
                        },
                      }
                    );
            
                    this.regions = response.data || [];
                  } catch (error) {
                    this.handleError(error);
                    this.regions = [];
                  }
                },
            
                // ... other methods remain unchanged
              },
            
              mounted() {
                this.fetchdatabases();
              },
            };
            </script>
            
            <style scoped>
            .big-flag {
              width: 40px; /* Adjust size as necessary */
              height: 30px; /* Adjust size as necessary */
            }
            </style> -->
            


            <!-- <template>
              <div
                class="mt-4 grid grid-cols-1 gap-y-6 xl:grid-cols-4 sm:grid-cols-2 sm:gap-x-4"
                role="none"
              >
                <div
                  @click="handleSelection('Apache')"
                  :class="['relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none', selectedOS === 'Apache' ? 'border-sa-500 bg-sa-50' : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600']"
                >
                  <div class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5">
                    <div>
                      <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                        <img src="/public/apache.png" class="h-auto mx-auto w-10" />
                      </span>
                      <span class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white">Apache</span>
                    </div>
                    <div>
                      <ul class="list-disc pl-4 text-tiny dark:text-white">
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Apache</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">PHP (From 7.2 to 8.3)</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">PHP-FPM Configuration</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">MySQL/MariaDB</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Redis</li>
                      </ul>
                    </div>
                  </div>
                </div>
            
                <div
                  @click="handleSelection('Nginx')"
                  :class="['relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none', selectedOS === 'Nginx' ? 'border-sa-500 bg-sa-50' : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600']"
                >
                  <div class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5">
                    <div>
                      <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                        <img src="/public/nginx.png" class="h-auto mx-auto w-10" />
                      </span>
                      <span class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white">Nginx</span>
                    </div>
                    <div>
                      <ul class="list-disc pl-4 text-tiny dark:text-white">
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Nginx</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">PHP (From 7.2 to 8.3)</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">PHP-FPM Configuration</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">MySQL/MariaDB</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Redis</li>
                      </ul>
                    </div>
                  </div>
                </div>
            
                <div
                  @click="handleSelection('OLS')"
                  :class="['relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none', selectedOS === 'OLS' ? 'border-sa-500 bg-sa-50' : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600']"
                >
                  <div class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5">
                    <div>
                      <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                        <img src="/public/ols.png" class="h-auto mx-auto w-10" />
                      </span>
                      <span class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white">OLS</span>
                    </div>
                    <div>
                      <ul class="list-disc pl-4 text-tiny dark:text-white">
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">OpenLiteSpeed</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">LSPHP From 7.4 to 8.3</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">MySQL/MariaDB</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Redis</li>
                      </ul>
                    </div>
                  </div>
                </div>
            
                <div
                  @click="handleSelection('Node Stack')"
                  :class="['relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none', selectedOS === 'Node Stack' ? 'border-sa-500 bg-sa-50' : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600']"
                >
                  <div class="absolute top-2 left-2 bg-sa-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                    <span>BETA</span>
                  </div>
                  <div class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5">
                    <div>
                      <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                        <img src="/public/node.png" class="h-auto mx-auto w-28" />
                      </span>
                      <span class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white">Node Stack</span>
                    </div>
                    <div>
                      <ul class="list-disc pl-4 text-tiny dark:text-white">
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Nginx</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">MongoDB</li>
                        <li class="py-1.5 text-sm text-gray-500 dark:text-gray-300">Redis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </template>
            
            <script>
            export default {
              name: "OSImageSelector",
              data() {
                return {
                  selectedOS: null,
                  // Other data properties...
                };
              },
              methods: {
                handleSelection(os) {
                  this.selectedOS = os;
                  console.log("Selected OS:", this.selectedOS); // Log the selected OS
                },
                // Other methods...
              },
            };
            </script>
            
            <style scoped>
            /* Add any additional styles here */
            </style> -->
            



            <!-- <template>
              <div>
                <div
                  class="mt-4 grid grid-cols-1 gap-y-6 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-4"
                  role="none"
                >
                  <div
                    @click="handleSelection('MySQL')"
                    :class="['border-sa-500 bg-sa-50 dark:bg-gray-800 cursor-pointer relative rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none', selectedOS1 === 'MySQL' ? 'border-sa-500 bg-sa-50' : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600']"
                  >
                    <span class="flex justify-center items-center h-full">
                      <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                        <img src="/public/mysql.png" class="h-auto w-32" />
                      </span>
                    </span>
                  </div>
            
                  <div
                    @click="handleSelection('MariaDB')"
                    :class="['bg-white dark:bg-gray-800 cursor-pointer relative rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none', selectedOS1 === 'MariaDB' ? 'border-sa-500 bg-sa-50' : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600']"
                  >
                    <span class="flex justify-center items-center h-full">
                      <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                        <img src="/public/mariadb.png" class="h-auto w-32" />
                      </span>
                    </span>
                  </div>
            
                  <div
                    class="bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600 opacity-50 pointer-events-none relative rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                  >
                    <span class="flex justify-center items-center h-full">
                      <span class="block text-4xl font-medium text-gray-900 dark:text-white">
                        <img src="/public/mongodb.png" class="h-auto w-28" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </template>
            
            <script>
            import CountryFlag from "vue-country-flag";
            import apiClient from "@/stores/axios";
            import sidebar from "@/components/sidebar.vue";
            import headerTop from "@/components/header.vue";
            import CloudLogo from "@/Resources/providerlogo.js";
            
            export default {
              name: "OSImageSelector",
              components: {
                CountryFlag,
                sidebar,
                headerTop,
              },
              data() {
                return {
                  selectedOS1: null, // Initialize selectedOS1
                  // Other data properties...
                };
              },
              methods: {
                handleSelection(os) {
                  this.selectedOS1 = os;
                  console.log("Selected OS:", this.selectedOS1); // Log the selected OS
                },
                // Other methods...
              },
              mounted() {
                this.fetchdatabases();
              },
            };
            </script>
            
            <style scoped>
            /* Add any additional styles here */
            </style> -->
            


  
  
<!-- <template>
  <div class="pt-3">
    <div class="grid grid-cols-5 gap-5">
      <div
        v-for="region in regions"
        :key="region.id"
        class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
      >
        <span
          :class="`flag f-${region.flagCode} rounded big-flag`"
        ></span>
        <h1>{{ region.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";
import apiClient from "@/stores/axios";

export default {
  name: "OSImageSelector",
  components: {
    CountryFlag,
  },
  data() {
    return {
      regions: [],
    };
  },
  methods: {
    async fetchRegions(providerId) {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found for regions");
        return;
      }

      try {
        const response = await apiClient.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/${providerId}/regions`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        this.regions = response.data || [];  // Ensure this has the correct structure
      } catch (error) {
        this.handleError(error);
        this.regions = [];
      }
    },
  },
  mounted() {
    this.fetchRegions(1);  // Call with the appropriate provider ID
  },
};
</script> -->



<!-- <template>
  
  <div class="pt-3">
  <div class="grid grid-cols-5 gap-5">
    <div
      v-for="region in regions"
      :key="region.id"  
      class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
    >
      <span
        :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`" 
      ></span>
      <h1>{{ region.name }}</h1>
    </div>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style> -->



<!-- <template>
  <div class="pt-3">
    <div class="grid grid-cols-5 gap-5">
      <div
        v-for="region in regions"
        :key="region.id"
        class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
        :class="{ 'opacity-50 cursor-not-allowed': !region.available }"  
        @click="handleClick(region)" 
        v-if="region.available"  
      >
        <span
          :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"
        ></span>
        <h1>{{ region.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OSImageSelector",
  data() {
    return {
      regions: [],
    };
  },
  methods: {
    async fetchRegions(providerId) {
      // Your existing fetch logic
    },
    handleClick(region) {
      // Handle the click event here
      console.log("Clicked on region:", region);
      // You can perform additional actions based on the clicked region
    },
  },
  mounted() {
    this.fetchRegions(1);  // Call with the appropriate provider ID
  },
};
</script>

<style scoped>
/* Optional: Add any additional styles here */
</style> -->




<!-- <template>
  <div class="bg-gray-100 w-full h-auto flex">
    <sidebar class="sticky top-0 z-10 h-screen" />
    <div class="w-full h-full">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full">
        <Loader :isLoading="isLoading" />

        <router-view></router-view>
        <div class="bg-white border-r-2 border-l-2 border-b-2 h-12 flex">
         
        </div>
        <div class="p-5">
          <div class="bg-white rounded-md p-5 mb-20">
            
            <div class="grid grid-cols-6 gap-5 h-auto mt-5">
              <div
                @click="setActiveSection('custom')"
                class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
                :class="{
                  'border-2 border-blue-600 bg-blue-100':
                    activeSection === 'custom',
                }"
              >
                <img src="/public/customIcon.png" class="min-w-7 w-7 h-auto" />
                <h1>Custom</h1>
              </div>
              
            </div>

            <div v-if="activeSection === 'custom'">
              <div>
                <div class="mt-5 font-medium">
                  <h1>Connect with IP and Password</h1>
                </div>
                <div class="bg-[#FAFAFB] dark:bg-gray-700 border xl:w-3/4 dark:border-0 rounded-lg p-4 mt-5">
                  
                </div>
              </div>
              <div class="flex items-center mt-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white w-fit p-1.5">
                <button @click="handleConnect">Connect Now <i class="las la-angle-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from './Loader.vue'; // Import the loader component

export default {
  name: "OSImageSelector",
  components: {
    Loader,
    sidebar,
    headerTop,
  },
  data() {
    return {
      // Your existing data properties
      isLoading: false, // Add loading state
    };
  },
  methods: {
    async handleConnect() {
      this.isLoading = true; // Show loader
      try {
        // Simulate an API call or any operation
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual API call
        // Handle successful connection logic
      } catch (error) {
        // Handle error
      } finally {
        this.isLoading = false; // Hide loader
      }
    },
    // Your other methods
  },
};
</script>

<style>
/* Your existing styles */
</style> -->




<!-- <template>
  <div>
    <div
      v-for="value in digitalocean"
      :key="value.id"
      class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
      @click="selectItem(value)"
    >
      <i class="las la-user text-xl text-blue-600"></i>
      <span class="truncate">{{ value.name }}</span>
    </div>

    
    <div v-if="selectedItem" class="mt-5 p-5 bg-white border rounded-md">
      <h2 class="text-lg font-semibold">Details for {{ selectedItem.name }}</h2>
      <p><strong>ID:</strong> {{ selectedItem.id }}</p>
      <p>
        <strong>Description:</strong>
        {{ selectedItem.description || "No description available." }}
      </p>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      digitalocean: [], // Your existing array of values
      selectedItem: null, // Property to hold the selected item
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item; // Set the selected item
    },
    // Other methods...
  },
};
</script>

<style>
/* Your existing styles */
</style> -->




<!-- <template>
  <div>
    <div
      class="mt-4 grid grid-cols-1 gap-y-6 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-4"
    >
      <div
        @click="handleSelection1('mysql')"
        :class="[
          'relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none',
          selectedOS2 === 'mysql'
            ? 'border-blue-500 bg-blue-50'
            : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600',
        ]"
      >
        <span class="flex justify-center items-center h-full">
          <span class="block text-4xl font-medium text-gray-900 dark:text-white">
            <img src="/public/mysql.png" class="h-auto w-32" />
          </span>
        </span>
      </div>

      <div
        @click="handleSelection1('mariadb')"
        :class="[
          'relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none',
          selectedOS2 === 'mariadb'
            ? 'border-blue-500 bg-blue-50'
            : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600',
        ]"
      >
        <span class="flex justify-center items-center h-full">
          <span class="block text-4xl font-medium text-gray-900 dark:text-white">
            <img src="/public/mariadb.png" class="h-auto w-32" />
          </span>
        </span>
      </div>

      <div
        @click="handleSelection1('mongodb')"
        :class="[
          'relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none',
          selectedOS2 === 'mongodb'
            ? 'border-blue-500 bg-blue-50'
            : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600',
        ]"
      >
        <span class="flex justify-center items-center h-full">
          <span class="block text-4xl font-medium text-gray-900 dark:text-white">
            <img src="/public/mongodb.png" class="h-auto w-32" />
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOS2: null, // Property to hold the selected section
    };
  },
  methods: {
    handleSelection1(os) {
      this.selectedOS2 = os; // Set the selected section
    },
  },
};
</script>

<style>
/* Your existing styles */
</style> -->




<!-- <template>
  <div class="bg-gray-100 h-screen p-10">
    <div
      class="container flex flex-col lg:flex-row mx-auto items-center justify-center p-10"
    >
      <div class="left lg:w-1/2 mx-4 mb-6 lg:mb-0 text-center lg:text-left">
        <img
          class="w-40 lg:w-60 p-2 mx-auto lg:mx-0"
          src="/ServerAvatar.png"
          alt="ServerAvatar"
        />
        <div class="ml-5">
          <p class="text-lg lg:text-xl font-bold">Cloud Hosting Simplified.</p>
          <p class="text-md mt-1 mx-2 lg:mx-0">
            Effortlessly host PHP and Node.js applications on our PHP & Node.js
            Cloud Server Management Panel. Manage security, updates, and
            configurations with ease using our intuitive control panel
            <span class="font-bold">No Technical Expertise Required</span>.
          </p>
        </div>
      </div>

      <div
        class="right flex flex-col bg-white p-8 lg:p-10 mx-auto rounded-xl w-full max-w-md"
      >
        <input
          v-model="email"
          class="px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg w-full"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          v-model="password"
          class="px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg w-full"
          type="password"
          placeholder="Password"
        />
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white w-full text-center my-2 py-3 rounded-md font-bold"
          @click="login"
        >
          Log In
        </button>
        <span
          class="text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline"
        >
          Forgotten password
        </span>
        <hr class="my-2" />
        <button
          class="bg-green-600 hover:bg-green-700 text-white text-center my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit"
          @click="createAccount"
        >
          Create new account
        </button>
        <div class="flex text-center p-2 mt-6 items-center justify-center">
          <span class="text-sm cursor-pointer">
            <span class="font-bold hover:underline" @click="createPage"
              >Create a Page</span
            >
            for a celebrity, brand or business.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useAuthStore } from "../stores/auth";
import * as XLSX from 'xlsx'; // Import the xlsx library

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        console.error("Email and password are required.");
        return;
      }

      try {
        const response = await axios.post(
          "https://app.satesting1.homes/api/login",
          {
            email: this.email,
            password: this.password,
          }
        );

        const { access_token, ...userData } = response.data;
        if (!access_token) {
          console.error("Access token not found in response");
          return;
        }

        localStorage.setItem("access_token", access_token);
        const authStore = useAuthStore();
        authStore.setAccessToken(access_token);
        authStore.setUserData(userData);

        console.log("Login successful, redirecting to dashboard.");
        this.$router.push("/dashboard");

        // Call the function to export data to Excel
        this.exportToExcel({ email: this.email, ...userData });

      } catch (error) {
        console.error(
          "Error during login:",
          error.response ? error.response.data : error.message
        );
        alert(
          "Login failed: " +
            (error.response ? error.response.data.message : error.message)
        );
      }
    },

    exportToExcel(data) {
      // Create a new workbook and a worksheet
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet([data]);

      // Append the worksheet to the workbook
      XLSX.utils.book_append_sheet(wb, ws, "LoginData");

      // Generate a binary string
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

      // Create a Blob from the binary string
      const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

      // Create a link element to download the file
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", "login_data.xlsx");

      // Append to the body and trigger click
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
</style> -->




<!-- <template>
  <div class="flex">
    <div
      :style="{ width: isSidebarExpanded ? '300px' : '60px' }"
      class="bg-white transition-all duration-700 shadow-xl"
    >
      <div class="h-[50px] flex justify-between">
        <div
          v-if="isSidebarExpanded ? '75px' : hidden"
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
            <span v-if="isSidebarExpanded ? 'text-md' : hidden">Dashboard</span>
          </router-link>
        </div>

        <div
          class="flex rounded-md items-center cursor-pointer py-3 pl-3 text-gray-700 hover:bg-gray-50 hover:text-black"
          v-tooltip.right="'Integration'"
          @click="toggleIntegrationSidebar"
        >
          <router-link to="/Integration" class="flex items-center gap-2 space-x-2"
            ><i class="las la-project-diagram text-xl"></i>
            <span v-if="isSidebarExpanded ? 'text-md' : hidden">Integration</span>
          </router-link>
        </div>

        


      </div>
    </div>

    
    <div
      v-if="isNarrowSidebarVisible"
      class="bg-gray-100 transition-all duration-700 shadow-xl w-60"
    >
      <div class="flex flex-col h-screen">
        <h2 class="text-lg font-bold p-4">Narrow Sidebar</h2>
        


        <div class="flex flex-col p-4">
          <router-link to="/some-path" class="py-2">New Option 1</router-link>
          <router-link to="/another-path" class="py-2">New Option 2</router-link>
           
        </div>
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
      isSidebarExpanded: true,
      loading: true,
      isNarrowSidebarVisible: false, // New data property
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
      this.isSidebarExpanded = !this.isSidebarExpanded;
    },

    toggleIntegrationSidebar() {
      this.isNarrowSidebarVisible = true; // Show new sidebar
      this.isSidebarExpanded = false; // Hide the main sidebar
      this.fetchUserData(); // Fetch user data if needed
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
        // Handle the response as needed
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
</style> -->




<!-- NarrowSidebar.vue -->
<template>
  <div class="bg-gray-100 transition-all duration-700 shadow-xl w-60">
    <div class="flex flex-col h-screen">
      <h2 class="text-lg font-bold p-4">Narrow Sidebar</h2>
      <div class="flex flex-col p-4">
        <router-link to="/some-path" class="py-2">New Option 1</router-link>
        <router-link to="/another-path" class="py-2">New Option 2</router-link>
        <!-- Add more links or options as needed -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NarrowSidebar',
};
</script>

<style scoped>
/* Add any styles specific to the narrow sidebar here */
</style>
