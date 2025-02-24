<!-- <template>
    <div class="pt-3">
      <div class="grid grid-cols-5 gap-5">
        <div
          v-for="region in regions"
          :key="region.id"
          @click="setActiveSection1(region.name)"
          class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
          :class="{
            'border-2 border-blue-500 bg-blue-100':
              activeSection === region.name,
          }"
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
  import CountryFlag from "vue-country-flag";
  import apiClient from "@/stores/axios";
  import sidebar from "@/components/sidebar.vue";
  import headerTop from "@/components/header.vue";
  import CloudLogo from "@/Resources/providerlogo.js";
  import axios from "axios"; // Ensure axios is imported
  
  export default {
    name: "OSImageSelector",
    components: {
      CountryFlag,
      sidebar,
      headerTop,
    },
    data() {
      return {
        selectedOS2: "mysql",
        selectedOS1: "Apache",
        selectedOS: "ubuntu-22-04",
        selectedOption: "generate",
        isModalOpen: false,
        accountDetails: "",
        searchServer: "",
        vultr: [],
        digitalocean: [],
        selectedItem: null,
        hetzner: [],
        lightsail: [],
        linode: [],
        enabledProviders: [],
        activeSection: "custom",
        CloudLogo: CloudLogo,
        regions: [],
      };
    },
  
    watch: {
      searchServer: "fetchdatabases",
    },
    methods: {
      selectItem(item) {
        this.selectedItem = item;
      },
      handleSelection(os) {
        this.selectedOS1 = os;
      },
      handleSelection1(os) {
        this.selectedOS2 = os;
      },
      handleDropdownChange() {
        this.fetchdatabases();
      },
      setActiveSection(section) {
        this.activeSection = section;
      },
      async setActiveSection1(regionName) {
        this.activeSection = regionName;
        const providerId = 1; // Assuming provider ID is always 1
        const region = 'us-east-1'; // Replace with the actual region if needed
  
        try {
          const response = await axios.get(
            `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/${providerId}/sizes?region=${region}`
          );
          // Handle the response data as needed
          console.log("Data fetched for region:", regionName, response.data);
        } catch (error) {
          this.handleError(error);
        }
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
        this.selectedItem = item;
      },
      clearSelection() {
        this.selectedItem = null;
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
  
          await this.fetchRegions(1);
          await this.fetchEnableProviders();
        } catch (error) {
          this.handleError(error);
          this.databases = [];
        }
      },
  
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
  </script>
   -->


   <!-- <template>
    <div class="bg-gray-100 w-full h-auto flex">
      <sidebar class="sticky top-0 z-10 h-screen" />
      <div class="w-full h-full">
        <headerTop class="sticky top-0 z-10" />
        <div class="w-full">
          <router-view></router-view>
          <div class="bg-white border-r-2 border-l-2 border-b-2 h-12 flex">
            <div class="flex items-center">
              <span
                class="las la-server text-xl ml-5 m-3 text-gray-500 hover:text-gray-800"
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
              class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 font-medium"
            >
              <h1>Server</h1>
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
              class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 font-medium"
            >
              <h1>Connect</h1>
            </div>
          </div>
          <div class="p-5">
            <div class="pt-3">
              <div class="grid grid-cols-5 gap-5">
                <div
                  v-for="region in regions"
                  :key="region.id"
                  @click="fetchRegionSizes(region.id)"
                  class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
                  :class="{
                    'border-2 border-blue-500 bg-blue-100': activeSection === region.name,
                  }"
                >
                  <span
                    :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"
                  ></span>
                  <h1>{{ region.name }}</h1>
                </div>
              </div>
            </div>
            <div v-if="regionSizes.length > 0" class="mt-5">

              <h2 class="font-medium text-lg">Region Sizes</h2>
              <ul>
                <li v-for="size in regionSizes" :key="size.id">
                  {{ size.name }} - {{ size.description }}
                </li>
              </ul>
            </div>
          </div>
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
        selectedOS2: "mysql",
        selectedOS1: "Apache",
        selectedOS: "ubuntu-22-04",
        selectedOption: "generate",
        isModalOpen: false,
        accountDetails: "",
        searchServer: "",
        vultr: [],
        digitalocean: [],
        selectedItem: null,
        hetzner: [],
        lightsail: [],
        linode: [],
        enabledProviders: [],
        activeSection: "custom",
        CloudLogo: CloudLogo,
        regions: [],
        regionSizes: [], // Add this to store region sizes
      };
    },
  
    watch: {
      searchServer: "fetchdatabases",
    },
    methods: {
      selectItem(item) {
        this.selectedItem = item;
      },
      handleSelection(os) {
        this.selectedOS1 = os;
      },
      handleSelection1(os) {
        this.selectedOS2 = os;
      },
      handleDropdownChange() {
        this.fetchdatabases();
      },
      setActiveSection(section) {
        this.activeSection = section;
      },
      setActiveSection1(section) {
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
        this.selectedItem = item;
      },
      clearSelection() {
        this.selectedItem = null;
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
  
          await this.fetchRegions(1);
          await this.fetchEnableProviders();
        } catch (error) {
          this.handleError(error);
          this.databases = [];
        }
      },
  
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
  
      async fetchRegionSizes(regionId) {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for region sizes");
          return;
        }
  
        try {
          const response = await apiClient.get(
            `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/${regionId}/sizes`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          this.regionSizes = response.data.value || [];
        } catch (error) {
          this.handleError(error);
          this.regionSizes = [];
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
  
  <style>
  /* Add any additional styles here */
  </style> -->



  <!-- <template>
    <div class="pt-3">
      <div class="grid grid-cols-5 gap-5">
        <div
          v-for="region in regions"
          :key="region.id"
          @click="setActiveSection1(region)"
          class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
          :class="{
            'border-2 border-blue-500 bg-blue-100':
              activeSection === region.name,
          }"
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
  import CountryFlag from "vue-country-flag";
  import apiClient from "@/stores/axios";
  import sidebar from "@/components/sidebar.vue";
  import headerTop from "@/components/header.vue";
  import CloudLogo from "@/Resources/providerlogo.js";
  import axios from "axios"; // Ensure axios is imported
  
  export default {
    name: "OSImageSelector",
    components: {
      CountryFlag,
      sidebar,
      headerTop,
    },
    data() {
      return {
        selectedOS2: "mysql",
        selectedOS1: "Apache",
        selectedOS: "ubuntu-22-04",
        selectedOption: "generate",
        isModalOpen: false,
        accountDetails: "",
        searchServer: "",
        vultr: [],
        digitalocean: [],
        selectedItem: null,
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
      selectItem(item) {
        this.selectedItem = item;
      },
      handleSelection(os) {
        this.selectedOS1 = os;
      },
      handleSelection1(os) {
        this.selectedOS2 = os;
      },
      handleDropdownChange() {
        this.fetchdatabases();
      },
      setActiveSection(section) {
        this.activeSection = section;
      },
      async setActiveSection1(region) {
        this.activeSection = region.name; // Set the active section based on the clicked region
        const providerId = 1; // Assuming provider ID is always 1
        const regionValue = region.value; // Get the value from the clicked region
  
        try {
          const response = await axios.get(
            `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/${providerId}/sizes?region=${regionValue}`
          );
          // Handle the response data as needed
          console.log("Data fetched for region:", region.name, response.data);
        } catch (error) {
          this.handleError(error);
        }
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
        this.selectedItem = item;
      },
      clearSelection() {
        this.selectedItem = null;
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
  
          await this.fetchRegions(1);
          await this.fetchEnableProviders();
        } catch (error) {
          this.handleError(error);
          this.databases = [];
        }
      },
  
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
    <div class="bg-gray-100 w-full h-auto flex">
      <sidebar class="sticky top-0 z-10 h-screen" />
      <div class="w-full h-full">
        <headerTop class="sticky top-0 z-10" />
        <div class="w-full">
          <router-view></router-view>
          <div class="bg-white border-r-2 border-l-2 border-b-2 h-12 flex">
            <div class="flex items-center">
              <span class="las la-server text-xl ml-5 m-3 text-gray-500 hover:text-gray-800"></span>
            </div>
            <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <div class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 font-medium">
              <h1>Server</h1>
            </div>
            <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <div class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 font-medium">
              <h1>Connect</h1>
            </div>
          </div>
          <div class="p-5">
            <div class="pt-3">
              <div class="grid grid-cols-5 gap-5">
                <div
                  v-for="region in regions"
                  :key="region.id"
                  @click="handleRegionClick(region)"
                  class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
                  :class="{
                    'border-2 border-blue-500 bg-blue-100': activeSection === region.name,
                  }"
                >
                  <span :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"></span>
                  <h1>{{ region.name }}</h1>
                </div>
              </div>
            </div>
            <div v-if="regionData" class="mt-5">
              <h2 class="font-medium text-lg">Region Data</h2>
              <ul>
                <li v-for="size in regionData" :key="size.id">
                  {{ size.name }} - {{ size.description }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CountryFlag from "vue-country-flag";
  import axios from "axios";
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
        selectedOS2: "mysql",
        selectedOS1: "Apache",
        selectedOS: "ubuntu-22-04",
        selectedOption: "generate",
        isModalOpen: false,
        accountDetails: "",
        searchServer: "",
        vultr: [],
        digitalocean: [],
        selectedItem: null,
        hetzner: [],
        lightsail: [],
        linode: [],
        enabledProviders: [],
        activeSection: "custom",
        CloudLogo: CloudLogo,
        regions: [],
        regionData: null,
      };
    },
  
    watch: {
      searchServer: "fetchdatabases",
    },
    methods: {
      selectItem(item) {
        this.selectedItem = item;
      },
      handleSelection(os) {
        this.selectedOS1 = os;
      },
      handleSelection1(os) {
        this.selectedOS2 = os;
      },
      handleDropdownChange() {
        this.fetchdatabases();
      },
      setActiveSection(section) {
        this.activeSection = section;
      },
      async handleRegionClick(region) {
        this.activeSection = region.name;
        const regionValue = region.value;
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
        try {
          const response = await axios.get(
            `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          this.regionData = response.data.value || [];
          console.log("Data fetched for region:", region.value, response.data);
        } catch (error) {
          this.handleError(error);
        }
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
        this.selectedItem = item;
      },
      clearSelection() {
        this.selectedItem = null;
      },
  
      async fetchdatabases() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
  
        const organizationId = 1;
        let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;
  
        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          this.digitalocean = response.data.digitalocean || [];
          this.hetzner = response.data.hetzner || [];
          this.lightsail = response.data.lightsail || [];
          this.linode = response.data.linode || [];
          this.vultr = response.data.vultr || [];
  
          await this.fetchRegions(1);
          await this.fetchEnableProviders();
        } catch (error) {
          this.handleError(error);
        }
      },
  
      async fetchRegions(providerId) {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for regions");
          return;
        }
  
        try {
          const response = await axios.get(
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
  
      async fetchEnableProviders() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for enable providers");
          return;
        }
  
        try {
          const response = await axios.get(
            `https://app.satesting1.homes/api/enable-providers`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          this.enabledProviders = response.data.enableProviders.cloudPlatform || [];
  
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
  
  <style>
  /* Add any additional styles here */
  </style> -->




  <!-- <template>
    <div class="bg-gray-100 w-full h-auto flex">
      <sidebar class="sticky top-0 z-10 h-screen" />
      <div class="w-full h-full">
        <headerTop class="sticky top-0 z-10" />
        <div class="w-full">
          <router-view></router-view>
          <div class="bg-white border-r-2 border-l-2 border-b-2 h-12 flex">
            <div class="flex items-center">
              <span class="las la-server text-xl ml-5 m-3 text-gray-500 hover:text-gray-800"></span>
            </div>
            <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <div class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 font-medium">
              <h1>Server</h1>
            </div>
            <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <div class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 font-medium">
              <h1>Connect</h1>
            </div>
          </div>
  
          <div class="p-5">
            <div class="pt-3">
              <div class="grid grid-cols-5 gap-5">
                <div
                  v-for="region in regions"
                  :key="region.id"
                  @click="handleRegionClick(region)"
                  class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
                  :class="{
                    'border-2 border-blue-500 bg-blue-100': activeSection === region.name,
                  }"
                >
                  <span :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"></span>
                  <h1>{{ region.name }}</h1>
                </div>
              </div>
            </div>
  
            <div v-if="activeSection === 'digitalocean'" class="grid grid-cols-6 gap-5 mt-5">
              <div v-for="value in digitalocean" :key="value.id" class="border rounded-md cursor-pointer flex items-center gap-4 p-4" @click="showDetails(value)">
                <i class="las la-user text-xl text-blue-600"></i>
                <span class="truncate">{{ value.name }}</span>
              </div>
            </div>
  
            <div v-if="activeSection === 'hetzner'" class="grid grid-cols-6 gap-5 mt-5">
              <div v-for="value in hetzner" :key="value.id" class="border rounded-md cursor-pointer flex items-center gap-4 p-4" @click="showDetails(value)">
                <i class="las la-user text-xl text-blue-600"></i>
                <span class="truncate">{{ value.name }}</span>
              </div>
            </div>
  
            <div v-if="activeSection === 'lightsail'" class="grid grid-cols-6 gap-5 mt-5">
              <div v-for="value in lightsail" :key="value.id" class="border rounded-md cursor-pointer flex items-center gap-4 p-4" @click="showDetails(value)">
                <i class="las la-user text-xl text-blue-600"></i>
                <span class="truncate">{{ value.name }}</span>
              </div>
            </div>
  
            <div v-if="activeSection === 'linode'" class="grid grid-cols-6 gap-5 mt-5">
              <div v-for="value in linode" :key="value.id" class="border rounded-md cursor-pointer flex items-center gap-4 p-4" @click="showDetails(value)">
                <i class="las la-user text-xl text-blue-600"></i>
                <span class="truncate">{{ value.name }}</span>
              </div>
            </div>
  
            <div v-if="activeSection === 'vultr'" class="grid grid-cols-6 gap-5 mt-5">
              <div v-for="value in vultr" :key="value.id" class="border rounded-md cursor-pointer flex items-center gap-4 p-4" @click="showDetails(value)">
                <i class="las la-user text-xl text-blue-600"></i>
                <span class="truncate">{{ value.name }}</span>
              </div>
            </div>
  
            <link-account />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CountryFlag from "vue-country-flag";
  import axios from "axios";
  import sidebar from "@/components/sidebar.vue";
  import headerTop from "@/components/header.vue";
  import CloudLogo from "@/Resources/providerlogo.js";
  import LinkAccount from "@/components/LinkAccount.vue";
  
  export default {
    name: "OSImageSelector",
    components: {
      CountryFlag,
      sidebar,
      headerTop,
      LinkAccount,
    },
    data() {
      return {
        selectedOS2: "mysql",
        selectedOS1: "Apache",
        selectedOS: "ubuntu-22-04",
        selectedOption: "generate",
        isModalOpen: false,
        accountDetails: "",
        searchServer: "",
        vultr: [],
        digitalocean: [],
        selectedItem: null,
        hetzner: [],
        lightsail: [],
        linode: [],
        enabledProviders: [],
        activeSection: "custom",
        CloudLogo: CloudLogo,
        regions: [],
        regionData: null,
      };
    },
  
    watch: {
      searchServer: "fetchdatabases",
    },
    methods: {
      selectItem(item) {
        this.selectedItem = item;
      },
      handleSelection(os) {
        this.selectedOS1 = os;
      },
      handleSelection1(os) {
        this.selectedOS2 = os;
      },
      handleDropdownChange() {
        this.fetchdatabases();
      },
      setActiveSection(section) {
        this.activeSection = section;
      },
      async handleRegionClick(region) {
        this.activeSection = region.name;
        const regionValue = region.value;
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
        try {
          const response = await axios.get(
            `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          this.regionData = response.data.value || [];
          console.log("Data fetched for region:", region.value, response.data);
        } catch (error) {
          this.handleError(error);
        }
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
        this.selectedItem = item;
      },
      clearSelection() {
        this.selectedItem = null;
      },
  
      async fetchdatabases() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
  
        const organizationId = 1;
        let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;
  
        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          this.digitalocean = response.data.digitalocean || [];
          this.hetzner = response.data.hetzner || [];
          this.lightsail = response.data.lightsail || [];
          this.linode = response.data.linode || [];
          this.vultr = response.data.vultr || [];
  
          await this.fetchRegions(1);
          await this.fetchEnableProviders();
        } catch (error) {
          this.handleError(error);
        }
      },
  
      async fetchRegions(providerId) {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for regions");
          return;
        }
  
        try {
          const response = await axios.get(
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
  
      async fetchEnableProviders() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for enable providers");
          return;
        }
  
        try {
          const response = await axios.get(
            `https://app.satesting1.homes/api/enable-providers`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          this.enabledProviders = response.data.enableProviders.cloudPlatform || [];
  
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
  
  <style>
  /* Add any additional styles here */
  </style> -->




  <!-- <template>
    <div class="bg-gray-100 w-full h-auto flex">
      <sidebar class="sticky top-0 z-10 h-screen" />
      <div class="w-full h-full">
        <headerTop class="sticky top-0 z-10" />
        <div class="w-full">
          <router-view></router-view>
          <div class="bg-white border-r-2 border-l-2 border-b-2 h-12 flex">
            <div class="flex items-center">
              <span class="las la-server text-xl ml-5 m-3 text-gray-500 hover:text-gray-800"></span>
            </div>
            <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <div class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 font-medium">
              <h1>Server</h1>
            </div>
            <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <div class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 font-medium">
              <h1>Connect</h1>
            </div>
          </div>
  
          <div class="p-5">
            <div class="pt-3">
              <div class="grid grid-cols-5 gap-5">
                <div
                  v-for="region in regions"
                  :key="region.id"
                  @click="handleRegionClick(region)" 
                  class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
                  :class="{
                    'border-2 border-blue-500 bg-blue-100': activeSection === region.name, 
                  }"
                >
                  <span :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"></span>
                  <h1>{{ region.name }}</h1>
                </div>
              </div>
            </div>
  
\
            <div v-if="regionData && regionData.length > 0" class="mt-5">
              <h2 class="font-medium text-lg">Region Data</h2>
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="size in regionData" :key="size.id">
                    <td class="px-6 py-4 whitespace-nowrap">{{ size.name }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ size.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CountryFlag from "vue-country-flag";
  import axios from "axios";
  import sidebar from "@/components/sidebar.vue";
  import headerTop from "@/components/header.vue";
  import CloudLogo from "@/Resources/providerlogo.js";
  import LinkAccount from "../../Resources/LinkAccount.vue";
  
  export default {
    name: "OSImageSelector",
    components: {
      CountryFlag,
      sidebar,
      headerTop,
      LinkAccount,
    },
    data() {
      return {
        selectedOS2: "mysql",
        selectedOS1: "Apache",
        selectedOS: "ubuntu-22-04",
        selectedOption: "generate",
        isModalOpen: false,
        accountDetails: "",
        searchServer: "",
        vultr: [],
        digitalocean: [],
        selectedItem: null,
        hetzner: [],
        lightsail: [],
        linode: [],
        enabledProviders: [],
        activeSection: "custom", // Track the currently selected region
        CloudLogo: CloudLogo,
        regions: [],
        regionData: null, // Store the data fetched from API
      };
    },
  
    watch: {
      searchServer: "fetchdatabases",
    },
    methods: {
      handleRegionClick(region) {
        this.activeSection = region.name; // Set the active section to the selected region
        this.fetchRegionData(region.value); // Fetch data for the selected region
      },
      async fetchRegionData(regionValue) {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
        try {
          const response = await axios.get(
            `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          this.regionData = response.data.value || []; // Update regionData with the fetched data
          console.log("Data fetched for region:", regionValue, response.data);
        } catch (error) {
          this.handleError(error);
        }
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
        this.selectedItem = item;
      },
      clearSelection() {
        this.selectedItem = null;
      },
  
      async fetchdatabases() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
  
        const organizationId = 1;
        let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;
  
        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          this.digitalocean = response.data.digitalocean || [];
          this.hetzner = response.data.hetzner || [];
          this.lightsail = response.data.lightsail || [];
          this.linode = response.data.linode || [];
          this.vultr = response.data.vultr || [];
  
          await this.fetchRegions(1);
          await this.fetchEnableProviders();
        } catch (error) {
          this.handleError(error);
        }
      },
  
      async fetchRegions(providerId) {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for regions");
          return;
        }
  
        try {
          const response = await axios.get(
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
  
      async fetchEnableProviders() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for enable providers");
          return;
        }
  
        try {
          const response = await axios.get(
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
  </script>
  
  <style>
  /* Add any additional styles here */
  </style> -->



  <!-- <template>
    <div>
      <div class="pt-3">
        <div class="grid grid-cols-5 gap-5">
          <div
            v-for="region in regions"
            :key="region.id"
            @click="handleRegionClick(region)"
            class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
            :class="{
              'border-2 border-blue-500 bg-blue-100': activeSection === region.name,
            }"
          >
            <span :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"></span>
            <h1>{{ region.name }}</h1>
          </div>
        </div>
      </div>
  
      <div v-if="regionData" class="mt-5">
        <h2 class="font-medium text-lg">Region Data</h2>
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">Name</th>
              <th class="py-3 px-6 text-left">Description</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            <tr
              v-for="size in regionData"
              :key="size.id"
              class="border-b border-gray-300 hover:bg-gray-100"
            >
              <td class="py-3 px-6">{{ size.name }}</td>
              <td class="py-3 px-6">{{ size.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import CountryFlag from "vue-country-flag";
  import axios from "axios";
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
        selectedOS2: "mysql",
        selectedOS1: "Apache",
        selectedOS: "ubuntu-22-04",
        selectedOption: "generate",
        isModalOpen: false,
        accountDetails: "",
        searchServer: "",
        vultr: [],
        digitalocean: [],
        selectedItem: null,
        hetzner: [],
        lightsail: [],
        linode: [],
        enabledProviders: [],
        activeSection: "custom",
        CloudLogo: CloudLogo,
        regions: [],
        regionData: null,
      };
    },
  
    watch: {
      searchServer: "fetchdatabases",
    },
    methods: {
      selectItem(item) {
        this.selectedItem = item;
      },
      handleSelection(os) {
        this.selectedOS1 = os;
      },
      handleSelection1(os) {
        this.selectedOS2 = os;
      },
      handleDropdownChange() {
        this.fetchdatabases();
      },
      setActiveSection(section) {
        this.activeSection = section;
      },
      async handleRegionClick(region) {
        this.activeSection = region.name;
        const regionValue = region.value;
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
        try {
          const response = await axios.get(
            `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
  
          this.regionData = response.data.value || [];
          console.log("Data fetched for region:", region.value, response.data);
        } catch (error) {
          this.handleError(error);
        }
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
        this.selectedItem = item;
      },
      clearSelection() {
        this.selectedItem = null;
      },
  
      async fetchdatabases() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }
  
        const organizationId = 1;
        let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;
  
        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
  
          this.digitalocean = response.data.digitalocean || [];
          this.hetzner = response.data.hetzner || [];
          this.lightsail = response.data.lightsail || [];
          this.linode = response.data.linode || [];
          this.vultr = response.data.vultr || [];
  
          await this.fetchRegions(1);
          await this.fetchEnableProviders();
        } catch (error) {
          this.handleError(error);
        }
      },
  
      async fetchRegions(providerId) {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for regions");
          return;
        }
  
        try {
          const response = await axios.get(
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
  
      async fetchEnableProviders() {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found for enable providers");
          return;
        }
  
        try {
          const response = await axios.get(
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
  <div>
    <div class="pt-3">
      <div class="grid grid-cols-5 gap-5">
        <div
          v-for="region in regions"
          :key="region.id"
          @click="handleRegionClick(region)"
          class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
          :class="{
            'border-2 border-blue-500 bg-blue-100':
              activeSection === region.name,
          }"
        >
          <span
            :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"
          ></span>
          <h1>{{ region.name }}</h1>
        </div>
      </div>
    </div>

    <div v-if="regionData" class="mt-5">
      <h2 class="font-medium text-lg">Region Data</h2>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr
            class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
          >
            <th class="py-3 px-6 text-left">Core(s)</th>
            <th class="py-3 px-6 text-left">Memory</th>
            <th class="py-3 px-6 text-left">Storage</th>
            <th class="py-3 px-6 text-left">Bandwidth</th>
            <th class="py-3 px-6 text-left">Price</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
          <tr
            v-for="size in regionData"
            :key="size.id"
            class="border-b border-gray-300 hover:bg-gray-100"
          >
            <td class="py-3 px-6">{{ size.cores }}</td>
            <td class="py-3 px-6">{{ size.memory }}</td>
            <td class="py-3 px-6">{{ size.storage }}</td>
            <td class="py-3 px-6">{{ size.bandwidth }}</td>
            <td class="py-3 px-6">{{ size.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  <script>
import CountryFlag from "vue-country-flag";
import axios from "axios";
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
      selectedOS2: "mysql",
      selectedOS1: "Apache",
      selectedOS: "ubuntu-22-04",
      selectedOption: "generate",
      isModalOpen: false,
      accountDetails: "",
      searchServer: "",
      vultr: [],
      digitalocean: [],
      selectedItem: null,
      hetzner: [],
      lightsail: [],
      linode: [],
      enabledProviders: [],
      activeSection: "custom",
      CloudLogo: CloudLogo,
      regions: [],
      regionData: null,
    };
  },

  watch: {
    searchServer: "fetchdatabases",
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
    handleSelection(os) {
      this.selectedOS1 = os;
    },
    handleSelection1(os) {
      this.selectedOS2 = os;
    },
    handleDropdownChange() {
      this.fetchdatabases();
    },
    setActiveSection(section) {
      this.activeSection = section;
    },
    async handleRegionClick(region) {
      this.activeSection = region.name;
      const regionValue = region.value;
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }
      try {
        const response = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("Data fetched for region:", region.value, response.data);
        this.regionData = response.data.value || [];

        // Check the structure of regionData
        console.log("Region Data:", this.regionData);
      } catch (error) {
        this.handleError(error);
      }
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
      this.selectedItem = item;
    },
    clearSelection() {
      this.selectedItem = null;
    },

    async fetchdatabases() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        this.digitalocean = response.data.digitalocean || [];
        this.hetzner = response.data.hetzner || [];
        this.lightsail = response.data.lightsail || [];
        this.linode = response.data.linode || [];
        this.vultr = response.data.vultr || [];

        await this.fetchRegions(1);
        await this.fetchEnableProviders();
      } catch (error) {
        this.handleError(error);
      }
    },

    async fetchRegions(providerId) {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found for regions");
        return;
      }

      try {
        const response = await axios.get(
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

    async fetchEnableProviders() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found for enable providers");
        return;
      }

      try {
        const response = await axios.get(
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
  <div>
    <div class="pt-3">
      <div class="grid grid-cols-5 gap-5">
        <div
          v-for="region in regions"
          :key="region.id"
          @click="handleRegionClick(region)"
          class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
          :class="{
            'border-2 border-blue-500 bg-blue-100':
              activeSection === region.name,
          }"
        >
          <span
            :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"
          ></span>
          <h1>{{ region.name }}</h1>
        </div>
      </div>
    </div>

    <div v-if="regionData.length > 0" class="mt-5">
      <h2 class="font-medium text-lg">Region Data</h2>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Core(s)</th>
            <th class="py-3 px-6 text-left">Memory</th>
            <th class="py-3 px-6 text-left">Storage</th>
            <th class="py-3 px-6 text-left">Bandwidth</th>
            <th class="py-3 px-6 text-left">Price</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
          <tr
            v-for="size in regionData"
            :key="size.id"
            class="border-b border-gray-300 hover:bg-gray-100"
          >
            <td class="py-3 px-6">{{ size.cores }}</td>
            <td class="py-3 px-6">{{ size.memory }}</td>
            <td class="py-3 px-6">{{ size.storage }}</td>
            <td class="py-3 px-6">{{ size.bandwidth }}</td>
            <td class="py-3 px-6">{{ size.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="mt-5">
      <p>No data available for the selected region.</p>
    </div>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";
import axios from "axios";
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
      selectedOS2: "mysql",
      selectedOS1: "Apache",
      selectedOS: "ubuntu-22-04",
      selectedOption: "generate",
      isModalOpen: false,
      accountDetails: "",
      searchServer: "",
      vultr: [],
      digitalocean: [],
      selectedItem: null,
      hetzner: [],
      lightsail: [],
      linode: [],
      enabledProviders: [],
      activeSection: "custom",
      CloudLogo: CloudLogo,
      regions: [],
      regionData: [], // Initialize as an empty array to hold the sizes data
    };
  },

  watch: {
    searchServer: "fetchdatabases",
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
    handleSelection(os) {
      this.selectedOS1 = os;
    },
    handleSelection1(os) {
      this.selectedOS2 = os;
    },
    handleDropdownChange() {
      this.fetchdatabases();
    },
    setActiveSection(section) {
      this.activeSection = section;
    },
    async handleRegionClick(region) {
      this.activeSection = region.name;
      const regionValue = region.value;
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }
      try {
        const response = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log("Data fetched for region:", region.value, response.data);
        
        // Ensure that we are getting the correct structure
        this.regionData = response.data.value || [];
        
        // Log to check if regionData is populated correctly
        console.log("Region Data:", this.regionData);
      } catch (error) {
        this.handleError(error);
      }
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
      this.selectedItem = item;
    },
    clearSelection() {
      this.selectedItem = null;
    },

    async fetchdatabases() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        // Populate provider arrays
        this.digitalocean = response.data.digitalocean || [];
        this.hetzner = response.data.hetzner || [];
        this.lightsail = response.data.lightsail || [];
        this.linode = response.data.linode || [];
        this.vultr = response.data.vultr || [];

        await this.fetchRegions(1);
        await this.fetchEnableProviders();
      } catch (error) {
        this.handleError(error);
      }
    },

    async fetchRegions(providerId) {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found for regions");
        return;
      }

      try {
        const response = await axios.get(
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

    async fetchEnableProviders() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found for enable providers");
        return;
      }

      try {
        const response = await axios.get(
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
</script>

<style scoped>
/* Add any additional styling here if needed */
</style> -->




<!-- <template>
  <div>
    <div v-if="regions.length > 0" class="mt-5">
      <h2 class="font-medium text-lg">Region Data</h2>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-6 text-left">Core(s)</th>
            <th class="py-3 px-6 text-left">Memory (MB)</th>
            <th class="py-3 px-6 text-left">Storage (GB)</th>
            <th class="py-3 px-6 text-left">Bandwidth</th>
            <th class="py-3 px-6 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="region.length === 0">
            <td colspan="5" class="text-center">Data Not Found</td>
          </tr>
          <tr v-for="(regionData, index) in region" :key="index">
            <td class="max-w-20 px-6 truncate">{{ regionData.cpu_core }}</td>
            <td class="max-w-20 px-6 truncate">{{ regionData.ram_size_in_mb }}</td>
            <td class="max-w-20 truncate text-center">{{ regionData.disk_size_in_gb }}</td>
            <td class="max-w-20 truncate text-center">{{ regionData.bandwidth }}</td>
            <td class="max-w-20 truncate text-center">{{ regionData.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="mt-5">
      <p>No regions available.</p>
    </div>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";
import axios from "axios";
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
      selectedOS2: "mysql",
      selectedOS1: "Apache",
      selectedOS: "ubuntu-22-04",
      selectedOption: "generate",
      isModalOpen: false,
      accountDetails: "",
      searchServer: "",
      vultr: [],
      digitalocean: [],
      selectedItem: null,
      hetzner: [],
      lightsail: [],
      linode: [],
      enabledProviders: [],
      activeSection: "custom",
      CloudLogo: CloudLogo,
      regions: [],
      region: [], // This will hold the data for the selected region
    };
  },

  watch: {
    searchServer: "fetchdatabases",
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
    handleSelection(os) {
      this.selectedOS1 = os;
    },
    handleSelection1(os) {
      this.selectedOS2 = os;
    },
    handleDropdownChange() {
      this.fetchdatabases();
    },
    setActiveSection(section) {
      this.activeSection = section;
    },
    async handleRegionClick(region) {
      this.activeSection = region.name;
      const regionValue = region.value;
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }
      try {
        const response = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Assign the fetched data to the region variable
        this.region = response.data.value || [];
        console.log("Data fetched for region:", region.value, this.region);
      } catch (error) {
        this.handleError(error);
      }
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
      this.selectedItem = item;
    },
    clearSelection() {
      this.selectedItem = null;
    },

    async fetchdatabases() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        this.digitalocean = response.data.digitalocean || [];
        this.hetzner = response.data.hetzner || [];
        this.lightsail = response.data.lightsail || [];
        this.linode = response.data.linode || [];
        this.vultr = response.data.vultr || [];

        await this.fetchRegions(1);
        await this.fetchEnableProviders();
      } catch (error) {
        this.handleError(error);
      }
    },

    async fetchRegions(providerId) {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found for regions");
        return;
      }

      try {
        const response = await axios.get(
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

    async fetchEnableProviders() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found for enable providers");
        return;
      }

      try {
        const response = await axios.get(
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
</script>

<style scoped>
/* Add any additional styling here if needed */
</style> -->


<!-- <template>
  <div v-if="sizes.length > 0" class="mt-5 w-full">
    <table class="min-w-full bg-white border rounded-lg border-gray-300">
      <thead>
        <tr class="bg-gray-100 text-black text-sm leading-normal">
          <th class="py-3 px-6 text-left">Core(s)</th>
          <th class="py-3 px-6 text-left">Memory (MB)</th>
          <th class="py-3 px-6 text-left">Storage (GB)</th>
          <th class="py-3 px-6 text-left">Bandwidth</th>
          <th class="py-3 px-6 text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(size, index) in sizes" :key="index">
          <td class="max-w-20 px-6 truncate">{{ size.cpu_core }}</td>
          <td class="max-w-20 px-6 truncate">{{ size.ram_size_in_mb }}</td>
          <td class="max-w-20 truncate text-center">{{ size.disk_size_in_gb }}</td>
          <td class="max-w-20 truncate text-center">{{ size.bandwidth }}</td>
          <td class="max-w-20 truncate text-center">{{ size.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="mt-5">
    <p>No sizes available.</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OSImageSelector",
  data() {
    return {
      sizes: [], // Initialize sizes array
    };
  },
  methods: {
    async fetchSizes() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }
      
      try {
        const response = await axios.get("YOUR_API_ENDPOINT", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        this.sizes = response.data.value || []; // Update sizes with fetched data
      } catch (error) {
        console.error("Error fetching sizes:", error);
      }
    },
  },
  mounted() {
    this.fetchSizes(); // Call the fetch method on component mount
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style> -->



<!-- <template>
  <div v-if="sizes.length > 0" class="mt-5 w-full">
    <table class="min-w-full bg-white border rounded-lg border-gray-300">
      <thead>
        <tr class="bg-gray-100 text-black text-sm leading-normal">
          <th class="py-3 px-6 text-left">Core(s)</th>
          <th class="py-3 px-6 text-left">Memory (MB)</th>
          <th class="py-3 px-6 text-left">Storage (GB)</th>
          <th class="py-3 px-6 text-left">Bandwidth</th>
          <th class="py-3 px-6 text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="sizes.length === 0">
          <td colspan="5" class="text-center">Data Not Found</td>
        </tr>
        <tr v-for="(size, index) in sizes" :key="index">
          <td class="max-w-20 px-6 truncate">{{ size.cpu_core }}</td>
          <td class="max-w-20 px-6 truncate">{{ size.ram_size_in_mb }}</td>
          <td class="max-w-20 truncate text-center">{{ size.disk_size_in_gb }}</td>
          <td class="max-w-20 truncate text-center">{{ size.bandwidth }}</td>
          <td class="max-w-20 truncate text-center">{{ size.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p class="text-center mt-5">Loading data...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OSImageSelector",
  data() {
    return {
      sizes: [],
    };
  },
  methods: {
    async fetchSizes(regionValue) {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }
      try {
        const response = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        // Log the response to check the structure
        console.log("Response data:", response.data);
        this.sizes = response.data.value || [];
      } catch (error) {
        this.handleError(error);
      }
    },
    handleError(error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data.");
    },
  },
  mounted() {
    // Replace 'us-east' with a valid region value
    this.fetchSizes('us-east'); // Make sure to use a valid region
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style> -->



<!-- <template>
  <div class="mt-5 w-full">
    <table class="min-w-full bg-white border rounded-lg border-gray-300">
      <thead>
        <tr class="bg-gray-100 text-black text-sm leading-normal">
          <th class="py-3 px-6 text-left">Core(s)</th>
          <th class="py-3 px-6 text-left">Memory (MB)</th>
          <th class="py-3 px-6 text-left">Storage (GB)</th>
          <th class="py-3 px-6 text-left">Bandwidth</th>
          <th class="py-3 px-6 text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="sizes.length === 0">
          <td colspan="5" class="text-center">Data Not Found</td>
        </tr>
        <tr v-for="(size, index) in sizes" :key="index">
          <td class="max-w-20 px-6 truncate">{{ size.cpu_core }}</td>
          <td class="max-w-20 px-6 truncate">{{ size.ram_size_in_mb }}</td>
          <td class="max-w-20 truncate text-center">{{ size.disk_size_in_gb }}</td>
          <td class="max-w-20 truncate text-center">{{ size.bandwidth }}</td>
          <td class="max-w-20 truncate text-center">{{ size.price }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="loading" class="text-center mt-5">Loading data...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OSImageSelector",
  data() {
    return {
      sizes: [],
      loading: true, // Loading state
    };
  },
  methods: {
    async fetchSizes(regionValue) {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        alert("No access token found");
        this.loading = false;
        return;
      }
      try {
        const response = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("Response data:", response.data); // Log the response
        this.sizes = response.data.value || [];
      } catch (error) {
        this.handleError(error);
      } finally {
        this.loading = false; // Set loading to false after fetching
      }
    },
    handleError(error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data.");
    },
  },
  mounted() {
    // Use a valid region value
    this.fetchSizes('us-east'); // Adjust this value as needed
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style> -->





<!-- <template>
  <td class="max-w-20 text-center">
    <button
      @click="toggleSelection"
      :class="{
        'bg-blue-500 text-white': isSelected,
        'border border-gray-500': !isSelected
      }"
      class="rounded-md px-5 py-1"
    >
      {{ isSelected ? 'Selected' : 'Select' }}
    </button>
  </td>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false, // Track selection state
    };
  },
  methods: {
    toggleSelection() {
      this.isSelected = !this.isSelected; // Toggle selection state
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style> -->



<!-- <template>
  <div class="mt-5">
    <nav
      class="isolate w-80 flex xl:flex-col flex-row flex-wrap xl:divide-y xl:divide-x-0 divide-x rounded-lg border border-slate-300"
      aria-label="Tabs"
    >
      <a
        v-for="(item, index) in items"
        :key="index"
        @click="selectTab(index)"
        :class="{
          'bg-blue-500 text-white': selectedTab === index,
          'text-gray-500 hover:text-gray-700': selectedTab !== index,
          'xl:rounded-t-lg rounded-tl-lg': index === 0,
          'xl:rounded-b-lg rounded-br-lg': index === items.length - 1,
          'bg-white hover:bg-gray-50': selectedTab !== index
        }"
        class="group relative min-w-fit flex-1 cursor-pointer overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10"
      >
        <span>{{ item }}</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Nano', 'Micro', 'Small', 'Medium', 'Large', 'Xlarge', '2Xlarge', '4Xlarge'], // Tab items
      selectedTab: 0, // Track selected tab index
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index; // Update selected tab index
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style> -->



<!-- <template>
  <div class="mt-5">
    <nav
      class="isolate w-80 flex xl:flex-col flex-row flex-wrap xl:divide-y xl:divide-x-0 divide-x rounded-lg border border-slate-300"
      aria-label="Tabs"
    >
      <a
        v-for="(item, index) in items"
        :key="index"
        @click="selectTab(index)"
        :class="{
          'bg-blue-500 text-white': selectedTab === index,
          'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50': selectedTab !== index,
          'xl:rounded-t-lg rounded-tl-lg': index === 0,
          'xl:rounded-b-lg rounded-br-lg': index === items.length - 1
        }"
        class="group relative min-w-fit flex-1 cursor-pointer overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10"
      >
        <span>{{ item }}</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Nano', 'Micro', 'Small', 'Medium', 'Large', 'Xlarge', '2Xlarge', '4Xlarge'], // Tab items
      selectedTab: null, // Track selected tab index
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index; // Update selected tab index
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style> -->



<!-- <template>
  <div class="mt-5">
    <nav
      class="isolate w-80 flex xl:flex-col flex-row flex-wrap xl:divide-y xl:divide-x-0 divide-x rounded-lg border border-slate-300"
      aria-label="Tabs"
    >
      <a
        v-for="(item, index) in items"
        :key="index"
        @click="selectTab(index)"
        :class="{
          'bg-blue-500 text-white': selectedTab === index,
          'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50': selectedTab !== index,
          'xl:rounded-t-lg rounded-tl-lg': index === 0,
          'xl:rounded-b-lg rounded-br-lg': index === items.length - 1
        }"
        class="group relative min-w-fit flex-1 cursor-pointer overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10"
      >
        <span>{{ item }}</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Nano', 'Micro', 'Small', 'Medium', 'Large', 'Xlarge', '2Xlarge', '4Xlarge'], // Tab items
      selectedTab: 0, // Default selected tab index (Nano)
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index; // Update selected tab index
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style> -->



<!-- <template>
  <div>
    <p
      class="text-tiny font-semibold mb-1 mt-6 after:content-['*'] after:ml-0.5 after:text-red-500"
    >
      Select a Server Instance Size (Amazon Lightsail)
    </p>

    <button
      @click="toggleSection"
      class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
    >
      {{ isSectionVisible ? 'Hide' : 'Show' }} Server Instance Sizes
    </button>

    <div v-if="isSectionVisible" class="flex gap-5 mt-5">
      <div>
        <nav
          class="isolate w-80 flex xl:flex-col flex-row flex-wrap xl:divide-y xl:divide-x-0 divide-x rounded-lg border border-slate-300"
          aria-label="Tabs"
        >
          <a
            v-for="(size, index) in sizes"
            :key="index"
            @click="selectTab(index)"
            :class="{
              'bg-blue-200 text-blue-600': selectedTab === index,
              'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50':
                selectedTab !== index,
              'xl:rounded-t-lg rounded-tl-lg': index === 0,
              'xl:rounded-b-lg rounded-br-lg': index === sizes.length - 1,
            }"
            class="group relative min-w-fit flex-1 cursor-pointer overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10"
          >
            <span>{{ size.name }}</span>
          </a>
        </nav>
      </div>

      <div v-if="sizes" class="mt-5 w-full">
        <table class="min-w-full bg-white border rounded-lg border-gray-300">
          <thead>
            <tr class="bg-gray-100 text-black text-sm leading-normal">
              <th class="py-3 px-6">Core(s)</th>
              <th class="py-3 px-6">Memory</th>
              <th class="py-3 px-6">Storage</th>
              <th class="py-3 px-6">Bandwidth</th>
              <th class="py-3 px-6">Price</th>
              <th class="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="current_server.length === 0">
              <td colspan="6" class="text-center">Data Not Found</td>
            </tr>
            <tr v-for="(current_server, index) in current_server" :key="index">
              <td class="max-w-20 px-6 py-3.5 truncate text-center">
                {{ current_server.cpu_core }}
              </td>
              <td class="max-w-20 px-6 py-3.5 truncate text-center">
                {{ current_server.ram_size_in_mb }} MB
              </td>
              <td class="max-w-20 px-6 py-3.5 truncate text-center">
                {{ current_server.disk_size_in_gb }} GB
              </td>
              <td class="max-w-20 px-6 py-3.5 truncate text-center">
                {{ current_server.bandwidth }} GB
              </td>
              <td class="max-w-20 px-6 py-3.5 truncate text-center">
                ${{ current_server.price }} / Monthly
              </td>
              <td class="max-w-20 text-center">
                <button
                  @click="toggleSelection"
                  :class="{
                    'border border-blue-500 text-blue-500': isSelected,
                    'border border-gray-500': !isSelected,
                  }"
                  class="rounded-md px-5 py-1"
                >
                  {{ isSelected ? "Selected" : "Select" }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="isSectionVisible">
      <div class="flex items-center mt-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white w-fit p-1.5">
        <button class="px-4">
          Connect Now <i class="las la-angle-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: [], // Your sizes data
      current_server: [], // Your server data
      selectedTab: 0, // Default selected tab
      isSelected: false, // Track selection state
      isSectionVisible: false, // Control visibility of the section
    };
  },
  methods: {
    toggleSection() {
      this.isSectionVisible = !this.isSectionVisible; // Toggle section visibility
    },
    selectTab(index) {
      this.selectedTab = index; // Update selected tab index
    },
    toggleSelection() {
      this.isSelected = !this.isSelected; // Toggle selection state
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style> -->



<!-- <template>
  <div>
    <div class="flex gap-5">
      <div class="mt-5">
        <nav
          class="isolate w-80 flex xl:flex-col flex-row flex-wrap xl:divide-y xl:divide-x-0 divide-x rounded-lg border border-slate-300"
          aria-label="Tabs"
        >
          <a
            v-for="(size, index) in sizes"
            :key="index"
            @click="selectTab(index)"
            :class="{
              'bg-blue-200 text-blue-600': selectedTab === index,
              'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50':
                selectedTab !== index,
              'xl:rounded-t-lg rounded-tl-lg': index === 0,
              'xl:rounded-b-lg rounded-br-lg': index === sizes.length - 1,
            }"
            class="group relative min-w-fit flex-1 cursor-pointer overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10"
          >
            <span>{{ size.name }}</span>
          </a>
        </nav>
      </div>

      <div v-if="currentServer" class="mt-5 w-full">
        <table class="min-w-full bg-white border rounded-lg border-gray-300">
          <thead>
            <tr class="bg-gray-100 text-black text-sm leading-normal">
              <th class="py-3 px-6">Core(s)</th>
              <th class="py-3 px-6">Memory</th>
              <th class="py-3 px-6">Storage</th>
              <th class="py-3 px-6">Bandwidth</th>
              <th class="py-3 px-6">Price</th>
              <th class="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!currentServer">
              <td colspan="6" class="text-center">Data Not Found</td>
            </tr>
            <tr v-if="currentServer">
              <td class="max-w-20 px-6 py-3.5 truncate text-center">
                {{ currentServer.cpu_core }}
              </td>
              <td class="max-w-20 px-6 py-3.5 truncate text-center">
                {{ currentServer.ram_size_in_mb }} MB
              </td>
              <td class="max-w-20 px-6 py-3.5 truncate text-center">
                {{ currentServer.disk_size_in_gb }} GB
              </td>
              <td class="max-w-20 px-6 py-3.5 truncate text-center">
                {{ currentServer.bandwidth }} GB
              </td>
              <td class="max-w-20 px-6 py-3.5 truncate text-center">
                ${{ currentServer.price }} / Monthly
              </td>
              <td class="max-w-20 text-center">
                <button
                  @click="toggleSelection"
                  :class="{
                    'border border-blue-500 text-blue-500': isSelected,
                    'border border-gray-500': !isSelected,
                  }"
                  class="rounded-md px-5 py-1"
                >
                  {{ isSelected ? "Selected" : "Select" }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: [], // Populate this with your server sizes (e.g., Nano, Micro)
      currentServer: null, // To hold the currently selected server data
      selectedTab: 0, // Default selected tab
      isSelected: false, // Track selection state
    };
  },
  methods: {
    async selectTab(index) {
      this.selectedTab = index; // Update selected tab index
      await this.fetchServerData(index); // Fetch data for the selected tab
    },
    async fetchServerData(index) {
      // Replace with your actual API endpoint and logic to get data
      const response = await fetch(`https://api.example.com/servers/${index}`);
      if (response.ok) {
        this.currentServer = await response.json(); // Set current server data
      } else {
        console.error('Failed to fetch data');
        this.currentServer = null; // Reset if there's an error
      }
    },
    toggleSelection() {
      this.isSelected = !this.isSelected; // Toggle selection state
    },
  },
  mounted() {
    // Optionally, fetch initial sizes data here
    this.sizes = [
      { name: 'Nano' },
      { name: 'Micro' },
      // Add more sizes as needed
    ];
    // Optionally fetch initial data for the first tab
    this.fetchServerData(this.selectedTab);
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style> -->



<template>
  <div class="flex gap-5">
    <div class="mt-5">
      <nav
        class="isolate w-80 flex xl:flex-col flex-row flex-wrap xl:divide-y xl:divide-x-0 divide-x rounded-lg border border-slate-300"
        aria-label="Tabs"
      >
        <a
          v-for="(size, index) in sizes"
          :key="index"
          @click="selectTab(index)"
          :class="{
            'bg-blue-200 text-blue-600': selectedTab === index,
            'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50':
              selectedTab !== index,
            'xl:rounded-t-lg rounded-tl-lg': index === 0,
            'xl:rounded-b-lg rounded-br-lg': index === sizes.length - 1,
          }"
          class="group relative min-w-fit flex-1 cursor-pointer overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10"
        >
          <span>{{ size.name }}</span>
        </a>
      </nav>
    </div>

    <div v-if="current_server.length > 0" class="mt-5 w-full">
      <table class="min-w-full bg-white border rounded-lg border-gray-300">
        <thead>
          <tr class="bg-gray-100 text-black text-sm leading-normal">
            <th class="py-3 px-6">Core(s)</th>
            <th class="py-3 px-6">Memory</th>
            <th class="py-3 px-6">Storage</th>
            <th class="py-3 px-6">Bandwidth</th>
            <th class="py-3 px-6">Price</th>
            <th class="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="current_server.length === 0">
            <td colspan="6" class="text-center">Data Not Found</td>
          </tr>
          <tr v-for="(server, index) in current_server" :key="index">
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.cpu_core }}
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.ram_size_in_mb }} MB
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.disk_size_in_gb }} GB
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.bandwidth }} GB
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              ${{ server.price }} / Monthly
            </td>
            <td class="max-w-20 text-center">
              <button
                @click="toggleSelection"
                :class="{
                  'border border-blue-500 text-blue-500': isSelected,
                  'border border-gray-500': !isSelected,
                }"
                class="rounded-md px-5 py-1"
              >
                {{ isSelected ? "Selected" : "Select" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- <script>
import CountryFlag from "vue-country-flag";
import axios from "axios";
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
      selectedTab: 0,
      isSelected: false,
      selectedOS2: "mysql",
      selectedOS1: "Apache",
      selectedOS: "ubuntu-22-04",
      selectedOption: "generate",
      isModalOpen: false,
      accountDetails: "",
      searchServer: "",
      vultr: [],
      digitalocean: [],
      selectedItem: null,
      hetzner: [],
      lightsail: [],
      linode: [],
      enabledProviders: [],
      activeSection: "custom",
      CloudLogo: CloudLogo,
      regions: [],
      sizes: [],
      current_server: [],
    };
  },

  watch: {
    searchServer: "fetchdatabases",
  },
  methods: {
    async selectTab(index) {
      this.selectedTab = index;
      await this.fetchServerData(index); // Fetch data for the selected tab
    },
    toggleSelection() {
      this.isSelected = !this.isSelected;
    },
    // Other methods remain unchanged...

    async fetchServerData(index) {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      try {
        const response = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes/${index}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        this.current_server = response.data.sizes[index].list || []; // Update current_server with the selected tab's data
      } catch (error) {
        this.handleError(error);
      }
    },

    // Other methods remain unchanged...
  },

  mounted() {
    this.fetchdatabases();
    this.fetchServerData(this.selectedTab); // Fetch initial data for the first tab
  },
};
</script> -->


<template>
  <div class="flex gap-5">
    <div class="mt-5">
      <nav
        class="isolate w-80 flex xl:flex-col flex-row flex-wrap xl:divide-y xl:divide-x-0 divide-x rounded-lg border border-slate-300"
        aria-label="Tabs"
      >
        <a
          v-for="(size, index) in sizes"
          :key="index"
          @click="selectTab(index)"
          :class="{
            'bg-blue-200 text-blue-600': selectedTab === index,
            'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50':
              selectedTab !== index,
            'xl:rounded-t-lg rounded-tl-lg': index === 0,
            'xl:rounded-b-lg rounded-br-lg': index === sizes.length - 1,
          }"
          class="group relative min-w-fit flex-1 cursor-pointer overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10"
        >
          <span>{{ size.name }}</span>
        </a>
      </nav>
    </div>

    <div v-if="current_server.length > 0" class="mt-5 w-full">
      <table class="min-w-full bg-white border rounded-lg border-gray-300">
        <thead>
          <tr class="bg-gray-100 text-black text-sm leading-normal">
            <th class="py-3 px-6">Core(s)</th>
            <th class="py-3 px-6">Memory</th>
            <th class="py-3 px-6">Storage</th>
            <th class="py-3 px-6">Bandwidth</th>
            <th class="py-3 px-6">Price</th>
            <th class="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="current_server.length === 0">
            <td colspan="6" class="text-center">Data Not Found</td>
          </tr>
          <tr v-for="(server, index) in current_server" :key="index">
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.cpu_core }}
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.ram_size_in_mb }} MB
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.disk_size_in_gb }} GB
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.bandwidth }} GB
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              ${{ server.price }} / Monthly
            </td>
            <td class="max-w-20 text-center">
              <button
                @click="toggleSelection"
                :class="{
                  'border border-blue-500 text-blue-500': isSelected,
                  'border border-gray-500': !isSelected,
                }"
                class="rounded-md px-5 py-1"
              >
                {{ isSelected ? "Selected" : "Select" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- <script>
import CountryFlag from "vue-country-flag";
import axios from "axios";
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
      selectedTab: 0,
      isSelected: false,
      selectedOS2: "mysql",
      selectedOS1: "Apache",
      selectedOS: "ubuntu-22-04",
      selectedOption: "generate",
      isModalOpen: false,
      accountDetails: "",
      searchServer: "",
      vultr: [],
      digitalocean: [],
      selectedItem: null,
      hetzner: [],
      lightsail: [],
      linode: [],
      enabledProviders: [],
      activeSection: "custom",
      CloudLogo: CloudLogo,
      regions: [],
      sizes: [],
      current_server: [],
    };
  },

  watch: {
    searchServer: "fetchdatabases",
  },
  methods: {
    async selectTab(index) {
      this.selectedTab = index;
      await this.fetchCurrentServerData(); // Fetch data for the selected tab
    },
    toggleSelection() {
      this.isSelected = !this.isSelected;
    },
    async fetchCurrentServerData() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      try {
        const response = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes/${this.sizes[this.selectedTab].id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        this.current_server = response.data.list || []; // Update current_server with the selected tab's data
      } catch (error) {
        this.handleError(error);
      }
    },

    async fetchdatabases() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      const organizationId = 1;
      let url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        this.digitalocean = response.data.digitalocean || [];
        this.hetzner = response.data.hetzner || [];
        this.lightsail = response.data.lightsail || [];
        this.linode = response.data.linode || [];
        this.vultr = response.data.vultr || [];
        this.sizes = response.data.sizes || []; // Store sizes data

        await this.fetchCurrentServerData(); // Fetch initial server data
      } catch (error) {
        this.handleError(error);
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
  <div class="pt-3">
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div class="loader">Loading...</div> 
    </div>
    
    <div class="grid grid-cols-5 gap-5">  
      <div
        v-for="region in regions"
        :key="region.id"
        @click="handleRegionClick(region)"
        class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
        :class="{
          'border border-blue-800 bg-blue-100': activeSection === region.name,
        }"
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
  data() {
    return {
      regions: [], // Your regions data
      activeSection: null,
      isLoading: false, // Loading state
    };
  },
  methods: {
    async handleRegionClick(region) {
      this.activeSection = region.name;
      this.isLoading = true; // Set loading to true
      
      try {
        // Simulating API call
        await this.fetchDataForRegion(region);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.isLoading = false; // Reset loading state
      }
    },
    async fetchDataForRegion(region) {
      // Your API call logic here
      // Example: await axios.get(`/api/regions/${region.id}`);
      return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay
    },
  },
};
</script>

<style>
.loader {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> -->


<!-- <template>
  
  <div class="pt-3">
  <div
    v-if="isLoading"
    class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50"
  >
    <div class="loader"></div>
  </div>

  <div class="grid grid-cols-5 gap-5">
    <div
      v-for="region in regions"
      :key="region.id"
      @click="handleRegionClick(region)"
      class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
      :class="{
        'border border-blue-800 bg-blue-100': activeSection1 === region.name,
      }"
    >
      <span
        :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"
      ></span>
      <h1>{{ region.name }}</h1>
    </div>
  </div>

  <div v-if="activeSection1" class="flex gap-5">
    <div class="mt-5">
      <nav
        class="isolate w-80 flex xl:flex-col flex-row flex-wrap xl:divide-y xl:divide-x-0 divide-x rounded-lg border border-slate-300"
        aria-label="Tabs"
      >
        <a
          v-for="(size, index) in sizes"
          :key="index"
          @click="selectTab(index)"
          :class="{
            'bg-blue-200 text-blue-600': selectedTab === index,
            'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50':
              selectedTab !== index,
            'xl:rounded-t-lg rounded-tl-lg': index === 0,
            'xl:rounded-b-lg rounded-br-lg':
              index === sizes.length - 1,
          }"
          class="group relative min-w-fit flex-1 cursor-pointer overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10"
        >
          <span>{{ size.name }}</span>
        </a>
      </nav>
    </div>

    <div v-if="sizes.length" class="mt-5 w-full">
      <table
        class="min-w-full bg-white border rounded-lg border-gray-300"
      >
        <thead>
          <tr class="bg-gray-100 text-black text-sm leading-normal">
            <th class="py-3 px-6">Core(s)</th>
            <th class="py-3 px-6">Memory</th>
            <th class="py-3 px-6">Storage</th>
            <th class="py-3 px-6">Bandwidth</th>
            <th class="py-3 px-6">Price</th>
            <th class="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="current_server.length === 0">
            <td colspan="6" class="text-center">Data Not Found</td>
          </tr>
          <tr
            v-for="(server, index) in current_server"
            :key="index"
          >
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.cpu_core }}
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.ram_size_in_mb }} MB
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.disk_size_in_gb }} GB
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              {{ server.bandwidth }} GB
            </td>
            <td class="max-w-20 px-6 py-3.5 truncate text-center">
              ${{ server.price }} / Monthly
            </td>
            <td class="max-w-20 text-center">
              <button
                @click="toggleSelection"
                :class="{
                  'border border-blue-500 text-blue-500': isSelected,
                  'border border-gray-500': !isSelected,
                }"
                class="rounded-md px-5 py-1"
              >
                {{ isSelected ? "Selected" : "Select" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
  return {
    // ... other data properties
    activeSection1: null, // Track the currently active section
    // ... other data properties
  };
},
methods: {
  async handleRegionClick(region) {
    this.activeSection1 = region.name; // Set the active section to the clicked region
    this.isLoading = true;
    
    // Your existing API call logic
    const regionValue = region.value;
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      console.error("No access token found");
      return;
    }

    try {
      const response = await axios.get(
        `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      this.sizes = response.data.sizes || [];
      this.current_server = response.data.sizes[0].list;
    } catch (error) {
      this.handleError(error);
    } finally {
      this.isLoading = false;
    }
  },
  // ... other methods
},

}
</script>

<style>

</style> -->


<!-- <template>
  <div v-if="activeSection === 'lightsail'" class="grid grid-cols-6 gap-5 mt-5">
    <div
      v-for="value in lightsail"
      :key="value.id"
      @click="setActiveItem(value.id)"
      class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
      :class="{ 'bg-blue-100 border-blue-500': activeItem === value.id }"
    >
      <i class="las la-user text-xl text-blue-600"></i>
      <span class="truncate">{{ value.name }}</span>
    </div>

    <div>
      <div
        @click="openModal"
        class="relative cursor-pointer rounded-lg flex items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-4 focus:ring-0 focus:outline-none"
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

      <div
        v-if="isModalOpen"
        class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50"
      >
        <div class="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
          <h2 class="text-lg font-bold mb-4">Amazon Lightsail</h2>
          <hr class="mb-5" />
          <label
            for="account_name"
            class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
            >Name</label
          >
          <input
            type="text"
            v-model="accountDetails.name"
            class="border rounded-md p-2 w-full mt-2"
          />
          <label
            for="access_key"
            class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
            >Access Key</label
          >
          <input
            type="text"
            v-model="accountDetails.accessKey"
            class="border rounded-md p-2 w-full mt-2 mb-5"
          />
          <label
            for="access_secret"
            class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
            >Access Secret</label
          >
          <input
            type="text"
            v-model="accountDetails.accessSecret"
            class="border rounded-md p-2 w-full mt-2"
          />
          <div class="flex justify-end mt-4">
            <button
              @click="closeModal"
              class="bg-red-500 text-white rounded-md px-4 py-2 mr-2"
            >
              Cancel
            </button>
            <button
              @click="linkAccount"
              class="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <a
        href="https://portal.aws.amazon.com/billing/signup#/start/email"
        target="_blank"
        class="relative cursor-pointer rounded-lg flex justify-center items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none"
      >
        <div class="block text-tiny font-medium text-white w-full">
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
</template>

<script>
export default {
  data() {
    return {
      // ... existing data properties
      activeItem: null, // Track the active item
    };
  },
  methods: {
    // ... existing methods
    setActiveItem(id) {
      this.activeItem = id; // Set the active item to the clicked item's id
    },
    // ... other methods
  },
};
</script>

<style>
</style> -->


<!-- <template>
  <div class="space-y-4">
    <LinkAccountModal v-for="index in 5" :key="index" />
  </div>
</template>

<script>
import LinkAccountModal from './LinkAccountModal.vue';

export default {
  components: {
    LinkAccountModal
  }
};
</script>

<style>
/* Add any global styles here */
</style> -->


<!-- <template>
  <div class="space-y-4">
    <LinkAccountModal v-for="index in 5" :key="index" />
  </div>
</template>

<script>
import LinkAccountModal from './LinkAccountModal.vue';

export default {
  components: {
    LinkAccountModal
  }
};
</script>

<style>
/* Add any global styles here */
</style> -->


<!-- <template>
  
</template>

<script>
export default {

  async handleRegionClick(region) {
  this.activeSection1 = region.name;
  this.isLoading = true;
  const regionValue = region.value;
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    console.error("No access token found");
    this.isLoading = false; // Ensure loading state is reset
    return;
  }

  try {
    // Call your existing method to fetch data for the region
    await this.fetchDataForRegion(region);
  } catch (error) {
    console.error("Error fetching data for region:", error);
  }

  try {
    // Make both API calls simultaneously
    const [sizesResponse, regionsResponse] = await Promise.all([
      axios.get(
        `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      ),
      axios.get(
        `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/regions?region=${regionValue}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      ),
    ]);

    // Update sizes and regions based on the responses
    this.sizes = sizesResponse.data.sizes || [];
    this.regions = regionsResponse.data.regions || [];
    this.current_server = this.sizes.length > 0 ? this.sizes[0].list : []; // Adjust as needed

  } catch (error) {
    this.handleError(error);
  } finally {
    this.isLoading = false; // Ensure loading state is reset
  }
}

}
</script>

<style>

</style> -->


<!-- <template>
  <div v-if="sizes.length > 0" class="mt-5 w-full">
  <table class="min-w-full rounded-lg bg-white border border-gray-300">
    <thead>
      <tr class="bg-gray-100 text-black text-sm leading-normal">
        <th class="py-3 px-6">Core(s)</th>
        <th class="py-3 px-6">Memory</th>
        <th class="py-3 px-6">Storage</th>
        <th class="py-3 px-6">Bandwidth</th>
        <th class="py-3 px-6">Price</th>
        <th class="py-3 px-6"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="current_server.length === 0">
        <td colspan="6" class="text-center">Data Not Found</td>
      </tr>
      <tr v-for="(server, index) in current_server" :key="index">
        <td class="max-w-20 px-6 py-3.5 truncate text-center">{{ server.cpu_core }}</td>
        <td class="max-w-20 px-6 py-3.5 truncate text-center">{{ server.ram_size_in_mb }} MB</td>
        <td class="max-w-20 px-6 py-3.5 truncate text-center">{{ server.disk_size_in_gb }} GB</td>
        <td class="max-w-20 px-6 py-3.5 truncate text-center">{{ server.bandwidth }} GB</td>
        <td class="max-w-20 px-6 py-3.5 truncate text-center">${{ server.price }} / Monthly</td>
        <td class="max-w-20 text-center">
          <button @click="toggleSelection" :class="{'border border-blue-500 text-blue-500': isSelected, 'border border-gray-500': !isSelected}" class="rounded-md px-5 py-1">
            {{ isSelected ? "Selected" : "Select" }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<script>
export default {
  async handleRegionClick(region) {
  this.activeSection1 = region.name;
  this.isLoading = true;
  const regionValue = region.value;
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    console.error("No access token found");
    this.isLoading = false;
    return;
  }

  try {
    // Fetch sizes for the selected region
    const response = await axios.get(
      `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    this.sizes = response.data.sizes || [];
    if (this.sizes.length > 0) {
      // Set the current server data based on the first size
      this.current_server = this.sizes[0].list || [];
    } else {
      this.current_server = []; // Reset if no sizes are found
    }
  } catch (error) {
    this.handleError(error);
  } finally {
    this.isLoading = false;
  }
}

}
</script>

<style>

</style> -->


<!-- <template>
  <div class="grid grid-cols-5 gap-5">
  <div
    v-for="region in regions"
    :key="region.id"
    @click="handleRegionClick(region)"
    class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
    :class="{
      'border border-blue-800 bg-blue-100': activeSection1 === region.name,
    }"
  >
    <span
      :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"
    ></span>
    <h1>{{ region.name }}</h1>
    
    <svg
      v-if="activeSection1 === region.name"
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-blue-800"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 12l5 5L20 7"
      />
    </svg>
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
  v-for="region in regions"
  :key="region.id"
  @click="handleRegionClick(region)"
  class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center justify-between"
  :class="{
    'border border-blue-800 bg-blue-100':
      activeSection1 === region.name,
  }"
>
  <div class="flex items-center">
    <span
      :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"
    ></span>
    <h1 class="ml-2">{{ region.name }}</h1>
  </div>

  <div class="flex justify-end items-center">
    <span
      v-if="activeSection1 === region.name"
      class="material-symbols-outlined text-blue-700"
    >
      check_circle
    </span>
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
<div class="flex gap-5">
  <div class="mt-5">
    <nav class="isolate w-80 flex xl:flex-col flex-row flex-wrap xl:divide-y xl:divide-x-0 divide-x rounded-lg border border-slate-300">
      <a
        v-for="(sizes, index) in sizes"
        :key="index"
        @click="selectTab(index)"
        :class="{
          'bg-blue-200 text-blue-600': selectedTab === index,
          'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50': selectedTab !== index,
          'xl:rounded-t-lg rounded-tl-lg': index === 0,
          'xl:rounded-b-lg rounded-br-lg': index === sizes.length - 1,
        }"
        class="group relative min-w-fit flex-1 cursor-pointer overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10"
      >
        <span>{{ sizes.name }}</span>
      </a>
    </nav>
  </div>

  <div v-if="current_server.length > 0" class="mt-5 w-full">
    <div class="border rounded-lg p-2">
      <table class="min-w-full bg-white border-gray-300">
        <thead>
          <tr class="bg-gray-100 text-black border-b-2 text-sm leading-normal">
            <th class="py-4 px-6">Core(s)</th>
            <th class="py-3 px-6">Memory</th>
            <th class="py-3 px-6">Storage</th>
            <th class="py-3 px-6">Bandwidth</th>
            <th class="py-3 px-6">Price</th>
            <th class="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="current_server.length === 0">
            <td colspan="6" class="text-center">Data Not Found</td>
          </tr>
          <tr v-for="(server, index) in current_server" :key="index">
            <td class="max-w-20 p-3.5 truncate text-center">{{ server.cpu_core }}</td>
            <td class="max-w-20 truncate text-center">{{ server.ram_size_in_mb }} MB</td>
            <td class="max-w-20 truncate text-center">{{ server.disk_size_in_gb }} GB</td>
            <td class="max-w-20 truncate text-center">{{ server.bandwidth }} GB</td>
            <td class="max-w-20 truncate text-center">${{ server.price }} / Monthly</td>
            <td class="max-w-20 text-center">
              <button @click="toggleSelection" :class="{
                'border border-blue-500 text-blue-500': isSelected,
                'border border-gray-500': !isSelected,
              }" class="rounded-md px-5 py-1">
                {{ isSelected ? "Selected" : "Select" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
import CountryFlag from "vue-country-flag";
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
      Zone: "Select an Availability Zone",
      selectedTab: 0,
      isSelected: false,
      selectedOS2: "mysql",
      selectedOS1: "Apache",
      selectedOS: "ubuntu-22-04",
      selectedOption: "generate",
      isModalOpen: false,
      accountDetails: "",
      searchServer: "",
      vultr: [],
      digitalocean: [],
      selectedItem: null,
      hetzner: [],
      lightsail: [],
      linode: [],
      enabledProviders: [],
      activeSection: "custom",
      CloudLogo: CloudLogo,
      regions: [],
      activeSection1: null,
      isLoading: false,
      sizes: [],
      current_server: [],
    };
  },

  watch: {
    searchServer: "fetchdatabases",
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
      this.current_server = this.sizes[index].list || []; 
    },
    toggleSelection() {
      this.isSelected = !this.isSelected;
    },
    async handleRegionClick(region) {
      this.current_server = this.sizes[0]?.list || [];
    },
  },

  mounted() {
    this.fetchdatabases();
  },
};
</script> -->




<!-- <template>
  <div>

    <div class="grid grid-cols-6 gap-5 mt-5">
      <div
        v-for="(provider, index) in providers"
        :key="index"
        @click="toggleProvider(index)"
        class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
        :class="{
          'bg-blue-100 border-blue-500': activeProvider === index,
        }"
      >
        <i class="las la-user text-xl text-blue-600"></i>
        <span class="truncate">{{ provider.name }}</span>
      </div>
    </div>

 
    <div v-for="(provider, index) in providers" :key="index">
      <div v-if="activeProvider === index">
        <div class="flex items-center mt-5">
          <h2 class="text-lg font-bold">{{ provider.name }} Details</h2>
          <button @click="openModal" class="ml-4 bg-blue-500 text-white rounded-md px-2 py-1">Link Account</button>
        </div>
        <div class="grid grid-cols-6 gap-5 mt-5">
          <div v-for="value in provider.data" :key="value.id" @click="showDetails(value)" class="border rounded-md cursor-pointer flex items-center gap-4 p-4">
            <i class="las la-user text-xl text-blue-600"></i>
            <span class="truncate">{{ value.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div class="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
        <h2 class="text-lg font-bold mb-4">Link Account</h2>
        <input type="text" v-model="accountDetails" class="border rounded-md p-2 w-full mt-2" placeholder="Account Details" />
        <div class="flex justify-end mt-4">
          <button @click="closeModal" class="bg-red-500 text-white rounded-md px-4 py-2 mr-2">Cancel</button>
          <button @click="linkAccount" class="bg-blue-500 text-white rounded-md px-4 py-2">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountDetails: "",
      isModalOpen: false,
      activeProvider: null,
      providers: [
        {
          name: "DigitalOcean",
          data: [], // Populate this with your API data
        },
        {
          name: "Lightsail",
          data: [], // Populate this with your API data
        },
        {
          name: "Vultr",
          data: [], // Populate this with your API data
        },
        {
          name: "Hetzner",
          data: [], // Populate this with your API data
        },
        {
          name: "Linode",
          data: [], // Populate this with your API data
        },
      ],
    };
  },
  methods: {
    toggleProvider(index) {
      this.activeProvider = this.activeProvider === index ? null : index; // Toggle visibility
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
      // Handle showing details for the selected item
      console.log("Selected Item:", item);
    },
  },
};
</script>

<style scoped>
/* Add your Tailwind CSS custom styles here if needed */
</style> -->


<!-- <template>
  <div>
    <headerTop />
    <sidebar />
    <h1>{{ Zone }}</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="region in regions" :key="region.id">{{ region.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CountryFlag from "vue-country-flag";
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
      Zone: "Select an Availability Zone",
      isLoading: false,
      regions: [],
    };
  },

  methods: {
    async fetchRegionsWithApi() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      this.isLoading = true; // Start loading

      try {
        const response = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/regions?region=ap-northeast-2`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Assuming the response has the regions data
        this.regions = response.data || [];
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false; // Stop loading
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
  },

  mounted() {
    // Fetch regions when the component mounts
    this.fetchRegionsWithApi();
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style> -->



<!-- <template>
  <div>
    <select
      v-model="selectedZone"
      @change="handleDropdownChange"
      class="border w-2/5 text-black bg-white rounded py-2 mt-1"
    >
      <option value="" disabled>Select an Availability Zone</option>
      <option v-for="zone in zones" :key="zone" :value="zone">
        {{ zone }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedZone: '', // For dropdown binding
      zones: [] // To hold zone names
    };
  },
  methods: {
    async fetchZones(regionValue) {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      try {
        const response = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/regions?region=${regionValue}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Assuming the response is an array of objects with a property 'ZoneName'
        this.zones = response.data.map(region => region.ZoneName).filter(Boolean);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    handleRegionClick(region) {
      // Call fetchZones with the selected region's value
      this.fetchZones(region.value);
    },
    handleDropdownChange() {
      console.log("Selected Zone:", this.selectedZone);
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style> -->

<!-- <template>
  <div>
    <select
      v-model="Zone"
      @change="handleDropdownChange"
      class="border w-2/5 text-black bg-white rounded py-2 mt-1"
    >
      <option value="" disabled>Select an Availability Zone</option>
      <option v-for="region in regions" :key="region.id" :value="region.name">
        {{ region.name }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      Zone: '',
      sizes: [],
      current_server: [],
      regions: [],
      isLoading: false,
      activeSection1: '',
    };
  },
  methods: {
    async handleRegionClick(region) {
      // Your existing code for fetching sizes and regions
    },
    handleError(error) {
      console.error(error);
    },
  },
};
</script>

<style>
/* Add any custom styles here */
</style> -->


<!-- <template>
  <div :class="{ 'dark': isDarkMode }">
    <button @click="toggleDarkMode">
      Toggle Dark Mode
    </button>
    <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <h1>Hello, World!</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
};
</script>

<style>
/* Optional: Add some transitions */
html {
  transition: background-color 0.5s, color 0.5s;
}
</style> -->



<!-- <template>
  <header class="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
    <h1 class="text-gray-900 dark:text-white">My Application</h1>
    <button @click="toggleDarkMode" class="bg-gray-200 dark:bg-gray-600 p-2 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    const savedMode = localStorage.getItem('dark-mode');
    this.isDarkMode = savedMode === 'true';
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('dark-mode', this.isDarkMode);
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
};
</script>

<style>
/* Optional: Add some transitions */
html {
  transition: background-color 0.5s, color 0.5s;
}
</style> -->


<!-- <template>
  <header class="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
    <h1 class="text-gray-900 dark:text-white">My Application</h1>
    <button @click="toggleDarkMode" class="bg-gray-200 dark:bg-gray-600 p-2 rounded">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    // Check localStorage for saved mode
    const savedMode = localStorage.getItem('dark-mode');
    this.isDarkMode = savedMode === 'true';
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      // Save preference to localStorage
      localStorage.setItem('dark-mode', this.isDarkMode);
      // Add or remove dark class
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
};
</script>

<style>
/* Optional: Add some transitions */
html {
  transition: background-color 0.5s, color 0.5s;
}
</style> -->


<!-- <template>
  <div>
    <select
      v-model="selectedZone"
      @change="handleDropdownChange"
      class="border w-2/5 text-black bg-white rounded py-2 mt-1"
    >
      <option value="" disabled>Select a Zone</option>
      <option
        v-for="zone in zones"
        :key="zone.id"
        :value="zone.zoneName"
      >
        {{ zone.zoneName }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedZone: "", // To store selected zone
      zones: [], // Holds the zones for the dropdown
      isLoading: false, // Loading indicator
    };
  },
  methods: {
    async handleRegionClick(region) {
      this.isLoading = true; // Show loading
      const regionValue = region.value; // Get the region value
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      try {
        // First API call to sizes
        const sizesResponse = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        this.sizes = sizesResponse.data.sizes || [];
        this.current_server = sizesResponse.data.sizes[0]?.list || [];

        // Second API call to regions (fetch zones from `region_zones`)
        const regionsResponse = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/regions?region=${regionValue}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Assuming regionsResponse.data.region_zones contains the zones
        this.zones = regionsResponse.data.region_zones || [];
      } catch (error) {
        console.error("Error fetching regions/zones:", error);
      } finally {
        this.isLoading = false; // Stop loading
      }
    },
    handleDropdownChange() {
      console.log("Selected zone:", this.selectedZone);
    },
  },
};
</script>

<style scoped>
/* Optional: Add any custom styles if required */
</style> -->



<!-- <template>
  <div :class="theme">
    <div class="w-full bg-white border-b-2 dark:bg-gray-800">
      <div class="flex justify-end items-center h-[70px]">
        <div class="flex space-x-3 items-center justify-center px-3">


          <span @click="toggleTheme" class="cursor-pointer">
            <span class="material-symbols-outlined text-3xl">
              {{ isDarkMode ? 'light_mode' : 'dark_mode' }}
            </span>
          </span>

          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton class="inline-flex w-full justify-center gap-x-1.5 bg-white px-0.5 rounded-full py-2 text-sm font-semibold text-gray-900">
                <Avatar class="mr-2 w-10 mt-2" :style="{ backgroundColor: '#9c27b0', color: '#ffffff' }" shape="circle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
                  <template #icon>
                    <img :src="userAvatar" alt="ServerAvatar" class="w-10 h-10 object-cover" />
                  </template>
                </Avatar>
              </MenuButton>
            </div>

          </Menu>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
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
  },
  data() {
    return {
      open: false,
      isDropdownOpen: false,
      creditAmount: 50,
      selectedAmount: 50,
      selectedOrganization: "ServerAvatar",
      organizations: [],
      userAvatar: "",
      isDarkMode: false, // Theme state
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
      this.applyTheme();
    },
    applyTheme() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    // Other methods...
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
    // Fetch user data...
  },
};
</script>

<style scoped>
/* Add any specific styles for your component here */
.dark {
  background-color: #1a202c; /* Dark background */
  color: white; /* Light text */
}
</style> -->




<!-- <template>
  <div :class="theme">
    <MenuItem v-slot="{ active }" class="flex gap-3">
      <a
        href="#"
        @click="setLightMode"
        :class="[
          active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700',
          'block px-4 py-2 text-sm'
        ]"
      >
        <i class="pi pi-sun"></i>
        Light Mode
      </a>
    </MenuItem>
    <MenuItem v-slot="{ active }" class="flex gap-3">
      <a
        href="#"
        @click="setDarkMode"
        :class="[
          active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700',
          'block px-4 py-2 text-sm'
        ]"
      >
        <i class="pi pi-moon"></i>
        Dark Mode
      </a>
    </MenuItem>

   
    <img
      :src="currentLogo"
      alt="Logo"
      class="h-10 w-auto hidden lg:block ml-0"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light', // Default theme
    };
  },
  computed: {
    currentLogo() {
      return this.theme === 'dark' ? '/public/dark-logo.png' : '/public/ServerAvatar.png';
    },
  },
  methods: {
    setLightMode() {
      this.theme = 'light';
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    },
    setDarkMode() {
      this.theme = 'dark';
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    },
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme = savedTheme;
      document.body.classList.toggle('dark', savedTheme === 'dark');
    }
  },
};
</script>

<style>
/* Add your light and dark mode styles here */
body.light {
  background-color: white;
  color: black;
}

body.dark {
  background-color: black;
  color: white;
}
</style> -->



<!-- <template>
  <div>

    <img
      v-if="isDarkMode"
      class="h-10 w-auto lg:block ml-0"
      src="/public/dark-logo.png"
      alt="Dark Logo"
    />

    <img
      v-else
      class="h-10 w-auto lg:block ml-0"
      src="/public/ServerAvatar.png"
      alt="Light Logo"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false, // Default mode is light
    };
  },
  mounted() {
    // Auto-detect system color scheme
    this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Listen for system color scheme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        this.isDarkMode = event.matches;
      });
  },
};
</script> -->



<!-- <div class="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">

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
</div> -->

<!-- <div 
  class="min-h-screen bg-cover bg-center transition-all duration-300"
  :class="darkMode ? 'bg-[url(/public/dark-self-hosted-bg.png)]' : 'bg-[url(/public/add-on-bg-light.png)]'">
</div> -->


<!-- <div
  class="w-full xl:px-10 px-5 py-12 mt-4 rounded-xl shadow bg-no-repeat bg-cover bg-center transition-all duration-300"
  style="background-image: url('/public/add-on-bg-light.png');"
  dark:style="background-image: url('/public/dark-self-hosted-bg.png');"
>

  <p class="text-gray-800 dark:text-gray-100">This is a test for light and dark mode background images.</p>
</div> -->

<!-- <div
  class="w-full xl:px-10 px-5 py-12 mt-4 rounded-xl shadow bg-no-repeat bg-cover bg-center transition-all duration-300 bg-[url('/public/add-on-bg-light.png')] dark:bg-[url('/public/dark-self-hosted-bg.png')]"
>

  <p class="text-gray-800 dark:text-gray-100">
    This is a test for light and dark mode background images.
  </p>
</div> -->


<!-- <div
  class="w-full xl:px-10 px-5 py-6 mt-4 rounded-md shadow bg-gradient-to-b from-white dark:from-slate-800 to-[#ECF3FF] dark:to-slate-800 grid xl:grid-cols-5 grid-cols-1 xl:gap-10 gap-6 content-center bg-no-repeat bg-cover bg-center transition-all duration-300 bg-[url('/public/selfhostedbg2.png')] dark:bg-[url('/public/selfhostedbg2-dark.png')]"
>

  <p class="text-gray-800 dark:text-gray-100">
    This content adapts to dark mode.
  </p>
</div> -->





<!-- <template>
  <div>
   
    <td
      class="max-w-20 truncate text-center text-blue-600"
      v-tooltip.top="server.ip"
    >
      {{ server.ip }}
      <i
        class="las la-pencil-alt text-lg text-red-500 cursor-pointer"
        @click="openModal"
      ></i>
    </td>


    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 transition-opacity"
    >
      <div
        class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Edit Server IP
        </h2>
        <input
          type="text"
          v-model="serverIP"
          placeholder="Enter new IP address"
          class="w-full px-4 py-2 border rounded-md dark:border-gray-700 focus:ring focus:ring-blue-300 outline-none dark:bg-gray-800 dark:text-gray-200"
        />
        <div class="mt-4 flex justify-end">
          <button
            class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md mr-2"
            @click="closeModal"
          >
            Cancel
          </button>
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded-md"
            @click="saveChanges"
          >
            Save
          </button>
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
      serverIP: "", // Replace with actual server IP if required
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    saveChanges() {
      console.log("New IP Address: ", this.serverIP);
      this.closeModal();
    },
  },
};
</script>

<style>
/* Optional: Add transitions or additional styles */
</style> -->



<!-- <template>
  <td class="max-w-20 truncate text-center" v-tooltip.top="server.web_server">
  <img 
    v-if="server.web_server === 'apache2'" 
    src="/public/apache.png" 
    alt="Active" 
    class="w-10 h-10 inline-block" 
  />
  <img 
    v-else-if="server.web_server === 'Inactive'" 
    src="/path/to/inactive-image.png" 
    alt="Inactive" 
    class="w-10 h-10 inline-block" 
  />
  <img 
    v-else-if="server.web_server === 'Maintenance'" 
    src="/path/to/maintenance-image.png" 
    alt="Maintenance" 
    class="w-10 h-10 inline-block" 
  />
  <img 
    v-else 
    src="/path/to/default-image.png" 
    alt="Default" 
    class="w-10 h-10 inline-block" 
  />
  <span class="ml-2">{{ server.web_server }}</span>
</td>

</template>

<script>
export default {

}
</script> -->


<!-- <template>
  <div class="flex">
    <div
      :class="[
        'bg-white transition-all duration-700 shadow-xl',
        isSidebarExpanded ? 'w-80' : 'w-16'
      ]"
    >
  
      <div class="p-4">
        <h2 class="text-lg font-bold mb-4">Sidebar</h2>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          @click="toggleSidebar"
        >
          Close Sidebar
        </button>
      </div>
    </div>

    <div class="flex-1 p-4">
      <h1 class="text-2xl font-bold mb-4">Main Content</h1>
      <p>This is the main content area.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarExpanded: true
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
    }
  }
};
</script>

<style>
.bg-white {
  background-color: white;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 700ms;
}
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.w-80 {
  width: 20rem;
}
.w-16 {
  width: 4rem;
}
</style> -->



<!-- <template>
  <div class="flex">
    <div
      :class="[
        'bg-white transition-all duration-700 shadow-xl',
        isSidebarExpanded ? 'w-80' : 'w-16'
      ]"
    >
      
      <div class="p-4">
        <h2 class="text-lg font-bold mb-4">Main Sidebar</h2>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          @click="toggleMainSidebar"
        >
          Close Main Sidebar
        </button>
      </div>
    </div>

    <div
      v-if="isBackupsSidebarOpen"
      :class="[
        'bg-white transition-all duration-700 shadow-xl',
        'w-80'
      ]"
    >
     
      <div class="p-4">
        <h2 class="text-lg font-bold mb-4">Backups Sidebar</h2>
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          @click="toggleBackupsSidebar"
        >
          Close Backups Sidebar
        </button>
      </div>
    </div>

    <div class="flex-1 p-4">
      <h1 class="text-2xl font-bold mb-4">Main Content</h1>
      <p>This is the main content area.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarExpanded: true,
      isBackupsSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
      this.isBackupsSidebarOpen = true;
    },
    toggleBackupsSidebar() {
      this.isBackupsSidebarOpen = !this.isBackupsSidebarOpen;
    }
  }
};
</script>

<style>
.bg-white {
  background-color: white;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 700ms;
}
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.w-80 {
  width: 20rem;
}
.w-16 {
  width: 4rem;
}
</style> -->


<!-- <template>
  <div
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
            class="dark:bg-gray-900 dark:text-white"
          >
            <td
              @click="showServerPanel(gitProvider)"
              class="max-w-20 px-6 truncate cursor-pointer text-center"
              v-tooltip.top="gitProvider.name"
            >
              {{ gitProvider.name }}
            </td>
            <td
              class="max-w-20 px-6 truncate text-center"
              v-tooltip.top="gitProvider.email"
            >
              {{ gitProvider.email }}
            </td>
            <td class="max-w-20 truncate text-center">
              <i
                class="cursor-pointer p-4 ml-10 text-blue-700 pi pi-users"
                title="Manage Users"
                @click="manageUsers(gitProvider)"
              ></i>
              <i
                class="cursor-pointer text-red-500 pi pi-trash"
                title="Delete"
                @click="deleteGitProvider(gitProvider)"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
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
      gitProviders: [],
      searchQuery: "",
    };
  },
  watch: {
    searchQuery: "fetchGitProviders",
  },
  methods: {
    showServerPanel(gitProvider) {
      this.$router.push({ name: "ServerPanel", params: { gitProvider } });
    },
    manageUsers(gitProvider) {
      this.$router.push({ name: "ManageUsers", params: { gitProvider } });
    },
    async deleteGitProvider(gitProvider) {
      try {
        await apiClient.delete(`/api/organizations/1/git-providers/${gitProvider.id}`);
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
        const params = new URLSearchParams();
        params.append("search", this.searchQuery || "");
        params.append("per_page", 10);

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
/* Add any custom styles here */
</style> -->


<!-- <template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="sticky top-0 z-10 h-screen" />
    <div class="w-full h-full">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full">
        <router-view></router-view>
        <div
          class="bg-white dark:bg-gray-800 dark:border-r-gray-500 dark:border-l-gray-500 dark:border-b-gray-500 border-r border-l border-b h-12 flex"
        >
          
        </div>
        <div class="p-5">
          <div class="grid grid-cols-4 gap-5">

          </div>
        </div>
        <div>
          <div
            class="m-5 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white items-center"
          >
            <div class="grid grid-cols-3 gap-5 p-5">

            </div>
          </div>

          <div
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
                    class="dark:bg-gray-900 dark:text-white"
                  >
                    <td
                      @click="showServerPanel(gitProvider)"
                      class="max-w-20 px-6 truncate cursor-pointer text-center"
                      v-tooltip.top="gitProvider.name"
                    >
                      {{ gitProvider.name }}
                    </td>
                    <td
                      class="max-w-20 px-6 truncate text-center"
                      v-tooltip.top="gitProvider.email"
                    >
                      {{ gitProvider.email }}
                    </td>
                    <td class="max-w-20 truncate text-center">
                      <i
                        class="cursor-pointer p-4 ml-10 text-blue-700 pi pi-users"
                        title="Manage Users"
                        @click="manageUsers(gitProvider)"
                      ></i>
                      <i
                        class="cursor-pointer text-red-500 pi pi-trash"
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
      gitProviders: [],
      searchQuery: "",
    };
  },
  watch: {
    searchQuery: "fetchGitProviders",
  },
  methods: {
    showServerPanel(gitProvider) {
      this.$router.push({ name: "ServerPanel", params: { gitProvider } });
    },
    manageUsers(gitProvider) {
      this.$router.push({ name: "ManageUsers", params: { gitProvider } });
    },
    async deleteGitProvider(gitProvider) {
      try {
        await apiClient.delete(`/api/organizations/1/git-providers/${gitProvider.id}`);
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
        const params = new URLSearchParams();
        params.append("search", this.searchQuery || "");
        params.append("per_page", 10);

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
/* Add any custom styles here */
</style> -->




<!-- <template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="sticky top-0 z-10 h-screen" />
    <div class="w-full h-full">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full">
        <div
          class="bg-white dark:bg-gray-800 dark:border-r-gray-500 dark:border-l-gray-500 dark:border-b-gray-500 border-r border-l border-b h-12 flex"
        >
          <div class="flex items-center m-3">
            <span
              class="las la-cloud-upload-alt text-xl ml-5 dark:hover:text-gray-600 dark:text-gray-500 text-gray-500 hover:text-gray-800"
            ></span>
          </div>
          <h1
            class="ml-5 flex items-center m-3 dark:text-white text-gray-500 font-medium"
          >
            Integration
          </h1>
          <h1
            class="ml-5 flex items-center m-3 dark:text-white text-gray-500 font-medium"
          >
            Cloud Storage
          </h1>
        </div>

        <div class="p-5">
          <div class="grid grid-cols-5 gap-5">
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow text-tiny"
              >
                <img
                  src="/public/gdrive.png"
                  class="w-12 h-auto mx-auto"
                  alt="Google Drive"
                />
                <p class="py-3.5 text-center">Google Drive</p>
                <hr class="my-3 dark:border-gray-700" />
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
                  <i class="las la-link mr-3 text-lg"></i>Link Google Drive
                </button>
              </div>
            </div>
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow"
              >
                <img
                  src="/public/dropbox.svg"
                  class="w-12 h-auto mx-auto"
                  alt="Dropbox"
                />
                <p class="text-center py-3.5">Dropbox</p>
                <hr class="my-3 dark:border-gray-700" />
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
                  <i class="las la-link mr-3 text-lg"></i>Link Dropbox
                </button>
              </div>
            </div>
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow"
              >
                <img
                  src="/public/amazon-s3.svg"
                  class="w-11 h-auto mx-auto"
                  alt="Amazon S3"
                />
                <p class="text-center py-3.5">Amazon S3</p>
                <hr class="my-3 dark:border-gray-700" />
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
                  <i class="las la-link mr-3 text-lg"></i>Link Amazon S3
                </button>
              </div>
            </div>
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow"
              >
                <img
                  src="/public/amazon-s3.svg"
                  class="w-11 h-auto mx-auto"
                  alt="S3 Compatible Storage"
                />
                <p class="text-center py-3.5">S3 Compatible Storage</p>
                <hr class="my-3 dark:border-gray-700" />
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
                  <i class="las la-link mr-3 text-lg"></i>Link S3 Compatible
                  Storage
                </button>
              </div>
            </div>
            <div>
              <div
                class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow"
              >
                <img
                  src="/public/wasabi.png"
                  class="w-12 h-auto mx-auto"
                  alt="Wasabi"
                />
                <p class="text-center py-3.5">Wasabi</p>
                <hr class="my-3 dark:border-gray-700" />
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
                  <i class="las la-link mr-3 text-lg"></i>Link Wasabi
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class="m-5 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white p-5"
          >
            <div class="container mx-auto">
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
                  <tr v-if="cloudstorageproviders.length === 0">
                    <td
                      colspan="3"
                      class="text-center py-2.5 dark:bg-gray-900 dark:text-white"
                    >
                      Data Not Found
                    </td>
                  </tr>
                  <tr
                    v-for="cloudstorageprovider in cloudstorageproviders"
                    :key="cloudstorageprovider.id"
                    class="dark:bg-gray-900 dark:text-white even:bg-gray-50 dark:even:bg-slate-800"
                  >
                    <td>
                      <div v-if="cloudstorageprovider.provider === 'wasabi'">
                        <img
                          src="/public/wasabi.png"
                          class="w-11 h-auto ml-5"
                          alt="Wasabi"
                        />
                      </div>
                      <div v-if="cloudstorageprovider.provider === 'custom_s3'">
                        <img
                          src="/public/amazon-s3.svg"
                          class="w-10 h-auto ml-5"
                          alt="Custom S3"
                        />
                      </div>
                      <div v-if="cloudstorageprovider.provider === 'gdrive'">
                        <img
                          src="/public/gdrive.png"
                          class="w-10 h-auto ml-5"
                          alt="Google Drive"
                        />
                      </div>
                      <div v-if="cloudstorageprovider.provider === 'dropbox'">
                        <img
                          src="/public/dropbox.svg"
                          class="w-10 h-auto ml-5"
                          alt="Dropbox"
                        />
                      </div>
                    </td>
                    <td class="truncate">{{ cloudstorageprovider.email }}</td>
                    <td class="truncate flex justify-end items-end">
                      <i
                        class="cursor-pointer px-8 p-4 text-center text-red-500 pi pi-trash"
                        title="Delete"
                        @click="
                          deleteCloudStorageProvider(cloudstorageprovider)
                        "
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
  name: "CloudStorageProviders",
  components: {
    sidebar,
    headerTop,
  },
  data() {
    return {
      searchServer: "",
      cloudstorageproviders: [],
    };
  },

  watch: {
    searchServer: "fetchCloudStorageProviders",
  },

  methods: {
    async deleteCloudStorageProvider(cloudstorageprovider) {
      try {
        await apiClient.delete(
          `/api/organizations/1/cloud-storage-providers/${cloudstorageprovider.id}`
        );
        this.fetchCloudStorageProviders();
      } catch (error) {
        console.error("Error deleting cloud storage provider:", error);
        alert("Error deleting cloud storage provider.");
      }
    },
    async fetchCloudStorageProviders() {
      try {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }

        const organizationId = 1;
        const url = `https://app.satesting1.homes/api/organizations/${organizationId}/cloud-storage-providers`;
        const params = new URLSearchParams();
        params.append("search", this.searchServer || "");

        const response = await apiClient.get(`${url}?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        this.cloudstorageproviders = response.data.data || [];
      } catch (error) {
        console.error("Error fetching cloud storage providers:", error);
        alert("Error fetching cloud storage providers.");
      }
    },
  },

  mounted() {
    this.fetchCloudStorageProviders();
  },
};
</script>

<style scoped>
</style> -->


<!-- <template>
  <div class="mt-4 flex gap-5">
    <div class="flex items-center">
      <img
        src="/public/avatar63e66a2b-6801-4afd-8e90-ab985842291c-removebg-preview.png"
        class="w-10 dark:bg-white rounded-full"
        alt=""
      />
    </div>
    <div>
      <label
        for="uploadFile1"
        class="bg-white text-gray-500 dark:bg-gray-700 dark:border-gray-500 dark:text-white font-semibold text-base rounded py-3.5 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed"
      >
        <span class="material-symbols-outlined text-slate-400">upload</span>
        Upload a Logo
        <input type="file" id="uploadFile1" class="hidden" @change="onFileChange" />
      </label>
      <p v-if="fileName" class="mt-2 text-gray-700 dark:text-white">{{ fileName }}</p>
    </div>
  </div>
  <button
    class="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 mt-5 rounded-md"
    @click="handleUpdate"
  >
    Update
  </button>

  <div v-if="showToastMessage" class="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-md">
    {{ toastMessage }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileName: '',
      showToastMessage: false,
      toastMessage: 'File uploaded successfully!',
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
      }
    },
    handleUpdate() {
      // Show toast notification
      this.showToastMessage = true;

      // Clear the file input and file name
      this.fileName = '';
      this.$refs.uploadFileInput.value = null; // Clear the input file

      // Hide toast after 3 seconds
      setTimeout(() => {
        this.showToastMessage = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style> -->



<!-- <template>
  <div>
    <select
      v-model="selectedServer"
      @change="handleDropdownChange"
      class="border w-full pl-2 bg-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-900 rounded py-2.5"
    >
      <option value="" disabled>Select a Server</option>
      <option v-for="servers in servers" :key="servers.id" :value="servers.name">
        {{ servers.name }}
      </option>
    </select>
  </div>
</template>

<script>
import headerTop from "../../components/header.vue";
import sidebar from "../../components/sidebar.vue";
import apiClient from "../../stores/axios";

export default {
  name: "archivebackups",
  components: { headerTop, sidebar },
  data() {
    return {
      selectedServer: '', // Selected server from dropdown
      servers: [], // Array to hold server data
    };
  },
  methods: {
    handleDropdownChange() {
      console.log('Selected Server:', this.selectedServer);
      // You can add any additional logic here if needed
    },

    async fetchdatabases() {
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

        console.log(response.data);
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
    this.fetchdatabases(); // Fetch databases when the component is mounted
  },
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style> -->



<!-- <template>
  <td
    class="max-w-20 truncate text-center text-blue-600 cursor-pointer"
    @click="copyToClipboard(server.ip)"
  >
    {{ server.ip }}
    <i class="las la-pencil-alt text-lg text-red-500"></i>
  </td>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  props: {
    server: {
      type: Object,
      required: true
    }
  },
  setup() {
    const toast = useToast();

    const copyToClipboard = (ip) => {
      navigator.clipboard.writeText(ip).then(() => {
        toast.success("IP address copied!");
      }).catch(err => {
        toast.error("Failed to copy IP address.");
      });
    };

    return {
      copyToClipboard
    };
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style> -->



<!-- <template>
  <div class="grid sm:grid-cols-2 gap-8 xl:w-1/2 mx-auto">
    <div
      class="bg-gray-50 dark:bg-gray-700 rounded shadow p-3 flex flex-col justify-between"
    >
      <div>
        <p class="mb-4 dark:text-gray-300">Automatic Installation</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          In Automatic Installation, We will issue SSL Certificate for your
          application domains and apply it instantly.
        </p>
      </div>
      <button
        @click="showSection = 'hello'"
        class="text-xs mt-8 w-full py-1.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        Automatic Installation
      </button>
    </div>
    <div
      class="bg-gray-50 dark:bg-gray-700 rounded shadow p-3 flex flex-col justify-between"
    >
      <div>
        <p class="mb-4 dark:text-gray-300">Custom Installation</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          In manual installation, you need to manually enter the certificate,
          private key, and chain file to install the SSL certificate.
        </p>
      </div>
      <button
        @click="showSection = 'welcome'"
        class="text-xs mt-8 w-full py-1.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        Custom Installation
      </button>
    </div>
  </div>
  <div v-if="showSection === 'hello'">
    <h1>Hello</h1>
  </div>
  <div v-if="showSection === 'welcome'">
    <h1>Welcome</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSection: null, // Default is hidden
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style> -->

<!-- <template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="sticky top-0 z-10 h-screen" />
    <div class="w-full h-full">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full">
        <router-view></router-view>
        <div class="m-5 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white p-5 items-center">
          <div class="w-full">
            <table class="min-w-full bg-white border dark:border-gray-900 border-gray-200">
              <thead>
                <tr class="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white text-sm leading-normal">
                  <th scope="col" class="text-left font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm">Provider</th>
                  <th scope="col" class="text-left font-semibold text-gray-900 dark:text-gray-300 py-4 text-sm">Email</th>
                  <th scope="col" class="font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="cloudserverproviders.length === 0">
                  <td colspan="3" class="text-center py-2.5 dark:bg-gray-900 dark:text-white">Data Not Found</td>
                </tr>
                <tr v-for="cloudserverprovider in cloudserverproviders" :key="cloudserverprovider.id" class="dark:bg-gray-900 dark:text-white even:bg-gray-50 dark:even:bg-slate-800">
                  <td>
                    <img :src="getProviderImage(cloudserverprovider.provider)" class="w-10 h-auto ml-5 v-popper--has-tooltip" :alt="cloudserverprovider.provider" />
                  </td>
                  <td class="truncate">{{ cloudserverprovider.email }}</td>
                  <td class="truncate flex justify-end items-end">
                    <i class="cursor-pointer px-8 p-4 text-center text-red-500 pi pi-trash" title="Delete" @click="deleteGitProvider(cloudserverprovider)"></i>
                  </td>
                </tr>
              </tbody>
            </table>
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
      searchServer: "",
      cloudserverproviders: [],
    };
  },

  watch: {
    searchServer: "fetchCloudServerProviders",
  },

  methods: {
    getProviderImage(provider) {
      const images = {
        lightsail: "/public/amazon-lightsail.png",
        hetzner: "/public/hetzner.png",
        linode: "/public/linode.png",
        vultr: "/public/vultr.png",
        digitalocean: "/public/digitalocean.png",
      };
      return images[provider] || '';
    },
    async deleteGitProvider(cloudserverprovider) {
      try {
        await apiClient.delete(`/api/organizations/1/${cloudserverprovider.id}`);
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
          provider: '',
          search: this.searchServer,
        });

        const response = await apiClient.get(`https://app.satesting1.homes/api/organizations/${organizationId}/cloud-server-providers?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

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
</style> -->



<!-- <template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="sticky top-0 z-10 h-screen" />
    <div class="w-full h-full">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full">
        <router-view></router-view>
        <div class="bg-white dark:bg-gray-800 dark:border-r-gray-500 dark:border-l-gray-500 dark:border-b-gray-500 border-r border-l border-b h-12 flex">
          <div class="flex items-center m-3">
            <span class="las la-cloud-upload-alt text-xl ml-5 dark:hover:text-gray-600 dark:text-gray-500 text-gray-500 hover:text-gray-800"></span>
          </div>
          <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
          </svg>
          <div class="ml-5 flex items-center m-3 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800 font-medium">
            <h1>Integration</h1>
          </div>
          <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
          </svg>
          <div class="ml-5 flex items-center m-3 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800 font-medium">
            <h1>Cloud Storage</h1>
          </div>
        </div>
        <div>
          <div class="fixed bottom-5 right-7 z-50 no-print">
            <a href="https://support.satemporary.site" target="_blank" class="bg-[#485BFF] rounded-full py-2 px-2 flex items-center justify-center">
              <img src="/public/dark-logo-sm1.png" class="w-7" />
            </a>
          </div>
        </div>
        <div class="p-5">
          <div class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <div>
              <div class="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-md shadow text-tiny">
                <img src="/public/gdrive.png" class="w-12 h-auto mx-auto" alt="Google Drive" />
                <p class="py-3.5 text-center">Google Drive</p>
                <hr class="my-3" />
                <button class="w-full bg-[#F7F7F7] hover:bg-neutral-100 dark:bg-gray-900 hover:dark:bg-gray-900 p-3 shadow text-sm text-gray-600 dark:text-white rounded-md flex items-center justify-center">
                  <i class="las la-info-circle mr-3 text-blue-600 dark:text-white"></i>Information
                </button>
                <button class="disabled:cursor-not-allowed disabled:opacity-50 w-full bg-sa-500/[0.1] dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-sa-500/[0.2] text-blue-600 hover:text-sa-600 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center">
                  <i class="las la-link mr-3 text-lg"></i>Link Google Drive
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="m-5 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white items-center">
            <div class="grid grid-cols-3 gap-5 p-5">
              <div>
                <select v-model="All" @change="handleDropdownChange" class="border w-full bg-gray-100 dark:text-white dark:bg-gray-900 dark:border-gray-900 text-gray-500 rounded py-2">
                  <option value="All">All</option>
                  <option value="Google Drive">Google Drive</option>
                  <option value="Dropbox">Dropbox</option>
                  <option value="Amazon S3">Amazon S3</option>
                  <option value="Wasabi">Wasabi</option>
                  <option value="S3 Compatible Storage">S3 Compatible Storage</option>
                </select>
              </div>
              <div class="relative">
                <template v-if="searchQuery === 'Search by a Name/IP Address'">
                  <i class="pi pi-search text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"></i>
                  <input type="text" v-model="searchServer" placeholder="Search" class="border rounded dark:bg-gray-900 dark:text-white dark:border-gray-900 w-full bg-gray-100 p-1.5 pl-8" />
                </template>
              </div>
              <div class="flex justify-end">
                <button type="button" @click="fetchCloudStorageProviders" class="rounded-md px-3 py-1.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white bg-slate-100 hover:bg-slate-200">
                  <i class="pi pi-sync"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="m-5 rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg bg-white p-5 items-center">
            <div class="w-full">
              <table class="min-w-full bg-white border dark:border-gray-900 border-gray-200">
                <thead>
                  <tr class="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white text-sm leading-normal">
                    <th scope="col" class="text-left font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm">Provider</th>
                    <th scope="col" class="text-left font-semibold text-gray-900 dark:text-gray-300 py-4 text-sm">Email</th>
                    <th scope="col" class="font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="cloudstorageproviders.length === 0">
                    <td colspan="3" class="text-center py-2.5 dark:bg-gray-900 dark:text-white">Data Not Found</td>
                  </tr>
                  <tr v-for="cloudstorageprovider in cloudstorageproviders" :key="cloudstorageprovider.id" class="dark:bg-gray-900 dark:text-white even:bg-gray-50 dark:even:bg-slate-800">
                    <td>
                      <img :src="getProviderImage(cloudstorageprovider.provider)" class="w-10 h-auto ml-5 v-popper--has-tooltip" :alt="cloudstorageprovider.provider" />
                    </td>
                    <td class="truncate">{{ cloudstorageprovider.email }}</td>
                    <td class="truncate flex justify-end items-end">
                      <i class="cursor-pointer px-8 p-4 text-center text-red-500 pi pi-trash" title="Delete" @click="deleteCloudStorageProvider(cloudstorageprovider)"></i>
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
  name: "CloudStorageProviders",
  components: {
    sidebar,
    headerTop,
  },
  data() {
    return {
      All: "All",
      searchQuery: "Search by a Name/IP Address",
      searchServer: "",
      cloudstorageproviders: [],
    };
  },

  watch: {
    searchServer: "fetchCloudStorageProviders",
  },

  methods: {
    getProviderImage(provider) {
      const images = {
        wasabi: "/public/wasabi.png",
        custom_s3: "/public/amazon-s3.svg",
        gdrive: "/public/gdrive.png",
        dropbox: "/public/dropbox.svg",
      };
      return images[provider] || '';
    },
    async deleteCloudStorageProvider(cloudstorageprovider) {
      try {
        await apiClient.delete(`/api/organizations/1/cloud-storage-providers/${cloudstorageprovider.id}`);
        this.fetchCloudStorageProviders();
      } catch (error) {
        console.error("Error deleting cloud storage provider:", error);
        alert("Error deleting cloud storage provider.");
      }
    },
    async fetchCloudStorageProviders() {
      try {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          console.error("No access token found");
          return;
        }

        const organizationId = 1;
        const params = new URLSearchParams({
          pagination: 1,
          provider: '',
          search: this.searchServer,
        });

        const response = await apiClient.get(`https://app.satesting1.homes/api/organizations/${organizationId}/cloud-storage-providers?${params.toString()}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        this.cloudstorageproviders = response.data.data || [];
      } catch (error) {
        console.error("Error fetching cloud storage providers:", error);
        alert("Error fetching cloud storage providers.");
      }
    },
  },

  mounted() {
    this.fetchCloudStorageProviders();
  },
};
</script>

<style>
</style> -->


<!-- <template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="sticky top-0 z-10 h-screen" />
    <div class="w-full h-full">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full">
        <router-view></router-view>
   
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
                  >Information
                </button>
                <button
                  @click="showModal('lightsail')"
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full bg-sa-500/[0.1] dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-sa-500/[0.2] text-blue-600 hover:text-sa-600 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                >
                  <i class="las la-link mr-3 text-lg"></i>Link Amazon Lightsail
                </button>
                <a
                  href="https://portal.aws.amazon.com/billing/signup#/start/email"
                  target="_blank"
                  class="disabled:cursor-not-allowed disabled:opacity-50 w-full dark:bg-blue-600 dark:text-white dark:hover:text-white hover:bg-blue-500/[0.2] text-blue-500 hover:text-blue-700 p-2 shadow rounded-md mt-3 text-sm flex items-center justify-center"
                >
                  <i class="las la-user-plus mr-3 text-lg"></i> Create an
                  Account
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>


  <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6"
      >
        <div class="flex justify-end">
          <button
            @click="showModal = false"
            class="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-4">
          <img
            v-if="selectedProvider === 'lightsail'"
            src="/public/amazon-lightsail.png"
            class="w-24 h-auto mx-auto"
            alt="Amazon Lightsail"
          />
          <img
            v-if="selectedProvider === 'vultr'"
            src="/public/vultr.png"
            class="w-24 h-auto mx-auto"
            alt="Vultr"
          />
          <img
            v-if="selectedProvider === 'digitalocean'"
            src="/public/digitalocean.png"
            class="w-24 h-auto mx-auto"
            alt="DigitalOcean"
          />
          <img
            v-if="selectedProvider === 'linode'"
            src="/public/linode.png"
            class="w-24 h-auto mx-auto"
            alt="Linode"
          />
          <img
            v-if="selectedProvider === 'hetzner'"
            src="/public/hetzner.png"
            class="w-24 h-auto mx-auto"
            alt="Hetzner"
          />
          <h2 class="text-lg font-medium text-center mt-4">
            {{ selectedProvider.toUpperCase() }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-center mt-2">
            Please enter your credentials to link your
            {{ selectedProvider }} account.
          </p>
          <form class="mt-4">
            <div class="mb-4">
              <label
                for="name"
                class="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >Name</label
              >
              <input
                type="text"
                id="name"
                class="border rounded-md px-3 py-2 w-full dark:bg-gray-900 dark:text-white"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-4">
              <label
                for="accessKey"
                class="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >Access Key</label
              >
              <input
                type="text"
                id="accessKey"
                class="border rounded-md px-3 py-2 w-full dark:bg-gray-900 dark:text-white"
                placeholder="Enter your access key"
              />
            </div>
            <div class="mb-4">
              <label
                for="accessSecret"
                class="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >Access Secret</label
              >
              <input
                type="text"
                id="accessSecret"
                class="border rounded-md px-3 py-2 w-full dark:bg-gray-900 dark:text-white"
                placeholder="Enter your access secret"
              />
            </div>
            <button
              type="button"
              @click="linkAccount"
              class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full"
            >
              Link Account
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      selectedProvider: null,
    };
  },
  methods: {
    showModal(provider) {
      this.showModal = true;
      this.selectedProvider = provider;
    },
    linkAccount() {
      // Implement your logic to link the account here
      console.log("Linking account for", this.selectedProvider);
      this.showModal = false;
    },
  },
};
</script> -->


<!-- <template>
  <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
    <sidebar class="sticky top-0 z-10 h-screen" />
    <div class="w-full h-full">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full">
        <router-view></router-view>
        <div class="m-5 rounded-md dark:bg-gray-800 dark:border-gray-800 border border-gray-200 shadow-lg bg-white items-center">
          <div class="grid grid-cols-3 gap-5 p-5">
            <div class="relative">
              <i
                class="pi pi-search text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"
              ></i>
              <input
                type="text"
                v-model="searchServer"
                placeholder="Search"
                class="border rounded dark:bg-gray-900 dark:border-gray-900 dark:text-white w-full bg-gray-100 p-1.5 pl-8"
              />
            </div>
            <div>
              <select
                v-model="selectedServer"
                @change="handleDropdownChange"
                class="border w-full bg-gray-100 dark:bg-gray-900 dark:border-gray-900 dark:text-white text-gray-500 rounded py-2"
              >
                <option value="">All Servers</option>
                <option v-for="server in uniqueServers" :key="server" :value="server">
                  {{ server }}
                </option>
              </select>
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                @click="fetchApplications"
                class="rounded-md px-3 py-1.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white mr-4 bg-slate-100 hover:bg-slate-200"
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
          class="m-5 rounded-md border dark:bg-gray-800 dark:border-gray-800 border-gray-200 shadow-lg bg-white p-5 items-center"
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
                    colspan="9"
                    class="text-center py-2.5 dark:bg-gray-900 dark:text-white"
                  >
                    No Data Found
                  </td>
                </tr>

                <tr
                  v-for="(application, index) in filteredApplications"
                  :key="index"
                  class="dark:bg-gray-900 dark:text-white border-b dark:border-b-gray-600"
                >
                  <td
                    @click="panel"
                    class="text-center p-4 cursor-pointer"
                    v-tooltip.top="databases"
                  >
                    {{ application.server_name || "-" }} <br />
                    <div
                      class="text-sm text-center  text-gray-500 dark:text-gray-300"
                    >
                      {{ application.ip }}
                      <span
                        class="las la-copy cursor-pointer ml-1 text-blue-600 p-0.5"
                      ></span>
                    </div>
                  </td>
                  <td class="pl-8 p-4" v-tooltip.top="databases">
                    {{ application.name || "-" }} <br />
                    <div
                      class="text-sm flex justify-start items-start text-gray-500"
                    >
                      {{ application.created_by_humans }}
                    </div>
                  </td>
                  <td
                    class="text-center bg-blue-50 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 ring-blue-700/10 dark:ring-blue-400/30 rounded-full inline-flex items-cente justify-center px-2.5 py-1 text-xs font-medium ring-1 ring-inset"
                    v-tooltip.top="application.system_user"
                  >
                    {{ application.system_user || "-" }}
                  </td>
                  <td class="text-center">
                    {{ application.primary_domain || "-" }}
                    <a
                      href="http://jg8lzk.cloudgorilla.site"
                      target="_blank"
                      class="text-blue-600"
                      ><i class="las la-external-link-alt"></i
                    ></a>
                  </td>
                  <td
                    class="text-center"
                    v-tooltip.top="application.php_version"
                  >
                    {{ application.php_version || "-" }}
                  </td>
                  <td>
                    <div
                      v-if="application && application.active == '1'"
                      class="whitespace-nowrap flex justify-center items-center"
                    >
                      <i
                        class="las la-circle bg-green-500 rounded-full text-green-500"
                      ></i>
                    </div>
                    <div
                      v-if="application.active == '0'"
                      class="whitespace-nowrap flex justify-center items-center"
                    >
                      <i
                        class="las la-circle bg-red-500 rounded-full text-red-500"
                      ></i>
                    </div>
                  </td>
                  <td>
                    <div
                      v-if="application && !application.ssl_type == ''"
                      class="whitespace-nowrap flex justify-center items-center"
                    >
                      <i class="las la-lock text-green-500"></i>
                    </div>
                    <div
                      v-else
                      class="whitespace-nowrap  flex justify-center items-center"
                    >
                      <i class="las la-lock-open text-red-500"></i>
                    </div>
                  </td>
                  <td class="text-center" v-tooltip.top="application.size">
                    {{ application.size || "0.00" }}
                  </td>
                  <td
                    class="text-center"
                    v-tooltip.top="application.framework"
                  >
                    {{ application.framework || "-" }}
                  </td>
                  <td class="pl-10 space-x-3 flex items-center pt-7 pr-5">
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
      return [...new Set(this.applications.map(app => app.server_name).filter(Boolean))];
    },
    filteredApplications() {
      if (this.selectedServer) {
        return this.applications.filter(
          app => app.server_name === this.selectedServer
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

<style></style> -->


<!-- essential-point -->
<!-- <script>
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
      essentialPoints: [], // New data property for essential points
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

    // New method to fetch essential points
    async fetchEssentialPoints() {
      const organizationId = 196;
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

        if (response.data && Array.isArray(response.data)) {
          this.essentialPoints = response.data;
        } else {
          this.essentialPoints = [];
        }
      } catch (error) {
        console.error("Error fetching essential points:", error);
        this.essentialPoints = [];
      }
    },
  },

  mounted() {
    this.fetchServers();
    this.fetchEssentialPoints(); // Call the new method to fetch essential points
  },
};
</script> -->


<!-- <template>
  <div class="overflow-auto h-full">
    <div class="bg-white dark:bg-gray-800 dark:border-r-gray-500 dark:border-l-gray-500 dark:border-b-gray-500 border-r border-l border-b h-12 flex">
      <div class="flex items-center m-3">
        <span class="las la-tachometer-alt dark:text-gray-500 dark:hover:text-gray-600 text-2xl ml-5 text-gray-500 hover:text-gray-800"></span>
      </div>
      <svg class="h-full w-6 dark:text-gray-500 flex-shrink-0 text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
      </svg>
      <div class="ml-5 flex items-center dark:text-gray-500 dark:hover:text-gray-600 m-3 text-gray-500 hover:text-gray-800 font-medium">
        <h1>Dashboard</h1>
      </div>
    </div>

    <div class="p-10 dark:bg-gray-900">
      <div class="bg-white p-5 h-auto dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 gap-5 mt-5">
          <div class="border h-auto rounded-lg">
            <div class="grid grid-cols-2 p-3">
              <div>
                <span class="material-symbols-outlined text-lg text-blue-600 dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1">dns</span>
              </div>
              <div class="flex justify-end items-end pr-1">
                <a href="/servers" class="flex gap-1 items-center text-xs text-sa-500">
                  <span class="hover:underline text-nowrap text-blue-600">View all Servers</span>
                  <span class="material-symbols-outlined text-blue-600 text-lg">arrow_right_alt</span>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 p-3">
              <div class="font-semibold text-lg">
                <h1>Servers</h1>
              </div>
              <div class="flex justify-end items-end pr-1 font-semibold text-lg">
                <h1>{{ serverCount }}</h1>
              </div>
            </div>
          </div>
          <div class="border h-auto rounded-lg">
            <div class="grid grid-cols-2 p-3">
              <div>
                <span class="material-symbols-outlined text-blue-600 text-lg dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1">deployed_code</span>
              </div>
              <div class="flex justify-end items-end pr-1">
                <a href="/applications" class="flex gap-1 items-center text-xs text-sa-500">
                  <span class="hover:underline text-nowrap text-blue-600">View all Applications</span>
                  <span class="material-symbols-outlined text-blue-600 text-lg">arrow_right_alt</span>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 p-3">
              <div class="font-semibold text-lg">
                <h1>Applications</h1>
              </div>
              <div class="flex justify-end items-end pr-1 font-semibold text-lg">
                <h1>{{ applicationCount }}</h1>
              </div>
            </div>
          </div>
          <div class="border h-auto rounded-lg">
            <div class="grid grid-cols-2 p-3">
              <div>
                <span class="material-symbols-outlined text-blue-600 text-lg dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1">database</span>
              </div>
              <div class="flex justify-end items-end pr-1">
                <a href="/databases" class="flex gap-1 items-center text-nowrap text-xs text-sa-500">
                  <span class="hover:underline text-blue-600">View all Databases</span>
                  <span class="material-symbols-outlined text-blue-600 text-lg">arrow_right_alt</span>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 p-3">
              <div class="font-semibold text-lg">
                <h1>Databases</h1>
              </div>
              <div class="flex justify-end items-end pr-1 font-semibold text-lg">
                <h1>{{ databaseCount }}</h1>
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
      serverCount: 0, // New property for server count
      applicationCount: 0, // New property for application count
      databaseCount: 0, // New property for database count
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
      // Existing code...
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
          this.serverCount = response.data.counts.server_count; // Update server count
          this.applicationCount = response.data.counts.application_count; // Update application count
          this.databaseCount = response.data.counts.database_count; // Update database count
        } else {
          this.serverCount = 0;
          this.applicationCount = 0;
          this.databaseCount = 0;
        }
      } catch (error) {
        console.error("Error fetching essential points:", error);
        this.serverCount = 0;
        this.applicationCount = 0;
        this.databaseCount = 0;
      }
    },

    clearSearch() {
      // Existing code...
    },
  },

  mounted() {
    this.fetchServers();
    this.fetchEssentialPoints();
  },
};
</script>

<style scoped>
</style> -->


<!-- <template>
  <div class="grid xl:grid-cols-4 lg:grid-cols-3 gap-5 mt-5">
    <div class="border h-auto rounded-lg">
      <div class="grid grid-cols-2 p-3">
        <div>
          <span class="material-symbols-outlined text-lg text-blue-600 dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1">dns</span>
        </div>
        <div class="flex justify-end items-end pr-1">
          <a href="/servers" class="flex gap-1 items-center text-xs text-sa-500">
            <span class="hover:underline text-nowrap text-blue-600">View all Servers</span>
            <span class="material-symbols-outlined text-blue-600 text-lg">arrow_right_alt</span>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 p-3">
        <div class="font-semibold text-lg">
          <h1>Servers</h1>
        </div>
        <div class="flex justify-end items-end pr-1 font-semibold text-lg">
          <h1>{{ serverCount }}</h1>
        </div>
      </div>
    </div>
    <div class="border h-auto rounded-lg">
      <div class="grid grid-cols-2 p-3">
        <div>
          <span class="material-symbols-outlined text-blue-600 text-lg dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1">deployed_code</span>
        </div>
        <div class="flex justify-end items-end pr-1">
          <a href="/applications" class="flex gap-1 items-center text-xs text-sa-500">
            <span class="hover:underline text-nowrap text-blue-600">View all Applications</span>
            <span class="material-symbols-outlined text-blue-600 text-lg">arrow_right_alt</span>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 p-3">
        <div class="font-semibold text-lg">
          <h1>Applications</h1>
        </div>
        <div class="flex justify-end items-end pr-1 font-semibold text-lg">
          <h1>{{ applicationCount }}</h1>
        </div>
      </div>
    </div>
    <div class="border h-auto rounded-lg">
      <div class="grid grid-cols-2 p-3">
        <div>
          <span class="material-symbols-outlined text-blue-600 text-lg dark:text-blue-300 bg-blue-50/100 dark:bg-blue-500/20 rounded px-1">database</span>
        </div>
        <div class="flex justify-end items-end pr-1">
          <a href="/databases" class="flex gap-1 items-center text-nowrap text-xs text-sa-500">
            <span class="hover:underline text-blue-600">View all Databases</span>
            <span class="material-symbols-outlined text-blue-600 text-lg">arrow_right_alt</span>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 p-3">
        <div class="font-semibold text-lg">
          <h1>Databases</h1>
        </div>
        <div class="flex justify-end items-end pr-1 font-semibold text-lg">
          <h1>{{ databaseCount }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "../../stores/axios";

export default {
  data() {
    return {
      serverCount: 0,
      applicationCount: 0,
      databaseCount: 0,
    };
  },
  methods: {
    async fetchEssentialPoints() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }
      try {
        const response = await apiClient.get("/organizations/1/essential-point", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (response.data) {
          this.serverCount = response.data.server_count || 0;
          this.applicationCount = response.data.application_count || 0;
          this.databaseCount = response.data.database_count || 0;
        }
      } catch (error) {
        console.error("Error fetching essential points:", error);
      }
    },
  },
  mounted() {
    this.fetchEssentialPoints();
  },
};
</script> -->


<!-- <template>
  <div
    :style="{ width: isSidebarExpanded ? '300px' : '60px' }"
    class="bg-white transition-all duration-700 shadow-xl"
  >
    
    <div class="dark:bg-gray-800 dark:text-white">
      <div class="h-[50px] flex justify-between">
        <div
          v-if="isSidebarExpanded ? '75px' : hidden"
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
    
    </div>
  </div>

  
  <div :class="['bg-white', isSidebarExpanded ? 'hidden' : 'block', 'w-80', 'transition-all duration-700', isSidebarExpanded ? 'bg-blue-500' : '']">
    <div class="">
      <h1 class="p-5">Hello</h1>
      <hr class="mt-1.5" />
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
      isSidebarExpanded: true,
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
      this.isSidebarExpanded = !this.isSidebarExpanded;
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
      this.isSidebarExpanded = this.screenWidth >= 1000;
    },
    // Other methods...
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

<style scoped>
/* Add any additional styles if necessary */
</style> -->



<!-- <template>
  <div
    :style="{ width: isSidebarExpanded ? '300px' : '60px' }"
    :class="[
      'transition-all duration-700 shadow-xl',
      isSidebarExpanded ? 'bg-white' : 'bg-blue-500',
    ]"
  >
    <div class="dark:bg-gray-800 dark:text-white">
      <div class="h-[50px] flex justify-between">
        <div
          v-if="isSidebarExpanded ? '75px' : hidden"
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
    </div>
  </div>

  <div
    :class="[
      'flex rounded-md items-center dark:text-white dark:hover:text-blue-400 cursor-pointer py-3 pl-3.5 text-gray-700 hover:bg-gray-50 hover:text-black',
      isSidebarExpanded ? 'dark:hover:bg-blue-500/20' : 'bg-blue-500',
    ]"
    v-tooltip.right="'Dashboard'"
    @click="fetchUserData"
  >
    <router-link to="/dashboard" class="flex items-center gap-x-1 space-x-2">
      <i class="las la-tachometer-alt text-2xl"></i>
      <span v-if="isSidebarExpanded ? 'text-md' : hidden">Dashboard</span>
    </router-link>
  </div>

  <div
    :class="[
      'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
      isSidebarExpanded
        ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50'
        : 'bg-blue-500 text-white',
    ]"
    v-tooltip.right="'Dashboard'"
    @click="fetchUserData"
  >
    <router-link to="/dashboard" class="flex items-center gap-x-1 space-x-2">
      <i class="las la-tachometer-alt text-2xl"></i>
      <span v-if="isSidebarExpanded ? 'text-md' : hidden">Dashboard</span>
    </router-link>
  </div>

  <div
    class="flex rounded-md items-center cursor-pointer py-2 pl-2"
    v-tooltip.right="item.title"
    v-for="item in menu"
    :key="item.id"
    @click="fetchUserData"
    :class="[
      isSidebarExpanded
        ? 'dark:text-white hover:bg-gray-50 hover:text-black'
        : 'bg-blue-500 text-white',
      'dark:hover:bg-blue-500/20 dark:hover:text-blue-400',
    ]"
  >
    <router-link
      :to="item.uri"
      class="flex items-center gap-4 w-full rounded-md py-2 pl-2"
      :class="[
        isSidebarExpanded
          ? 'text-gray-700 dark:text-white hover:text-black'
          : 'text-white',
      ]"
    >
      <i :class="item.icon" class="text-xl"></i>
      <p v-if="isSidebarExpanded">{{ item.title }}</p>
    </router-link>
  </div>

  <div
    :class="[
      'bg-white',
      isSidebarExpanded ? 'hidden' : 'block',
      'w-80',
      'transition-all duration-700',
    ]"
  >
    <div class="">
      <h1 class="p-5">Hello</h1>
      <hr class="mt-1.5" />
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
      isSidebarExpanded: true,
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
      this.isSidebarExpanded = !this.isSidebarExpanded;
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
      this.isSidebarExpanded = this.screenWidth >= 1000;
    },
    // Other methods...
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

<style scoped>
/* Add any additional styles if necessary */
</style> -->



<!-- <template>
  
  <div
  :style="{ width: isSidebarExpanded ? '300px' : '60px' }"
  :class="['shadow-xl', isSidebarExpanded ? 'bg-white' : 'bg-blue-500']"
>
  <div class="dark:bg-gray-800 dark:text-white">
    <div class="h-[50px] flex justify-between">
      <div
        v-if="isSidebarExpanded ? '75px' : hidden"
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
  </div>

  <div
  :class="[
      'flex flex-col sticky top-0 z-10 h-screen overflow-y-auto scrollbar-container',
      isSidebarExpanded ? 'bg-white' : 'bg-blue-500'
    ]"
  >
    <SkeletonLoader v-if="loading" />

    <div
      class="flex rounded-md items-center dark:text-white dark:hover:bg-blue-500/20 dark:hover:text-blue-400 cursor-pointer py-3 pl-3.5 text-gray-700 hover:bg-gray-50 hover:text-black"
      v-tooltip.right="'Dashboard'"
      @click="fetchUserData"
    >
      <router-link
        to="/dashboard"
        class="flex items-center gap-x-1 space-x-2"
      >
        <i class="las la-tachometer-alt text-2xl"></i>
        <span v-if="isSidebarExpanded ? 'text-md' : hidden">Dashboard</span>
      </router-link>
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
    class="bg-white shadow-xl"
  >
    
    <div class="dark:bg-gray-800 dark:text-white">
      <div class="h-[50px] flex justify-between">
        <div
          v-if="isSidebarExpanded ? '75px' : hidden"
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
          'flex flex-col sticky top-0 z-10 h-screen overflow-y-auto scrollbar-container',
          isSidebarExpanded ? 'bg-white' : 'bg-blue-600 text-white',
        ]"
      >
        
        <div
          :class="[
            'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
            isSidebarExpanded ? 'dark:text-white hover:bg-gray-50' : 'text-white hover:bg-white',
          ]"
          v-tooltip.right="'Integration'"
          @click="redirectToSecondSidebar"
        >
          <router-link to="/Integration" class="flex items-center gap-2 space-x-2">
            <i class="las la-project-diagram text-xl"></i>
            <span v-if="isSidebarExpanded">Integration</span>
          </router-link>
        </div>

     
      </div>
    </div>
  </div>


  <div
    :class="[
      'bg-white',
      isSecondSidebarVisible ? 'block' : 'hidden',
      'w-80',
      'transition-all duration-700',
      isSecondSidebarVisible ? 'bg-blue-500' : '',
    ]"
    @click.stop
  >
    <div>
      <img src="/public/ServerAvatar.png" alt="" class="w-32 h-10 mt-0.5" />
      <hr class="mt-7" />
      <div>
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
      isSidebarExpanded: true,
      loading: true,
      permissions: [],
      application: [],
      application_user: [],
      dashboard: [],
      firewall: [],
      organization: [],
      server: [],
      menu: menu,
      isSecondSidebarVisible: false, // New property to track second sidebar visibility
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
      this.isSecondSidebarVisible = false; // Close second sidebar when toggling first
    },
    redirectToSecondSidebar() {
      this.isSecondSidebarVisible = true; // Show the second sidebar
      this.isSidebarExpanded = false; // Optionally close the first sidebar
    },
    // ... other existing methods
  },

  mounted() {
    this.fetchData();
    window.addEventListener("resize", this.handleResize);
  },
  
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script> -->



<!-- <template>
  <div>
    
    <div
      class="flex flex-col sticky top-0 z-10 h-screen overflow-y-auto"
      :class="isSidebarExpanded ? 'bg-white' : 'bg-blue-600 text-white'"
    >
      <div
        v-for="item in menu"
        :key="item.id"
        class="flex rounded-md items-center cursor-pointer py-2 pl-2 text-gray-700 hover:bg-gray-50 hover:text-black"
        @click="handleMenuClick(item)"
      >
        <router-link
          :to="item.uri"
          class="flex items-center gap-4 w-full rounded-md py-2 pl-2"
        >
          <i :class="item.icon" class="text-xl"></i>
          <p v-if="isSidebarExpanded">{{ item.title }}</p>
        </router-link>
      </div>
    </div>

    
    <div
      v-if="isSecondSidebarVisible"
      class="bg-white w-80 transition-all duration-700"
    >
      <h1>Second Sidebar Content</h1>
      <button @click="closeSecondSidebar">Close</button>
      
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
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      isSidebarExpanded: true,
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
      this.isSecondSidebarVisible = false; // Close second sidebar when toggling first
    },
    handleMenuClick(item) {
      // Check if the clicked item is "Backups" or "Archive Backups"
      if (item.title === "Backups" || item.title === "Archive Backups") {
        this.isSecondSidebarVisible = true; // Show the second sidebar
        this.isSidebarExpanded = false; // Close the first sidebar
      } else {
        this.fetchUserData(item); // Call fetchUserData for other items
      }
    },
    async fetchUserData(item) {
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
    closeSecondSidebar() {
      this.isSecondSidebarVisible = false; // Close the second sidebar
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
</script> -->


<!-- <div
  :class="[
    'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
    isSidebarExpanded
      ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50'
      : 'text-white hover:bg-white hover:text-blue-600',
  ]"
  v-tooltip.right="'Billing'"
  @click="redirectToSecondSidebar"
>
  <i class="las la-money-bill text-xl"></i>
  <span v-if="isSidebarExpanded">Billing</span>
</div>

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
      isSidebarExpanded: true,
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
    
    redirectToSecondSidebar() {
      this.isSecondSidebarVisible = true; 
      this.isSidebarExpanded = false;      
      this.$router.push("/billing");      
    },
    
    async fetchUserData() {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      try {
        const response = await apiClient.get(`/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("An error occurred while fetching user data.");
      }
    },

    async fetchData() {
      this.permissions = [];
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      try {
        const response = await apiClient.get(
          `https://app.satesting1.homes/api/organizations/1/my-permissions/all`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        this.application = response.data.permissions.application;
        this.application_user = response.data.permissions.application_user;
        this.dashboard = response.data.permissions.dashboard;
        this.firewall = response.data.permissions.firewall;
        this.organization = response.data.permissions.organization;
        this.server = response.data.permissions.server;
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching permissions.");
      } finally {
        this.loading = false;
      }
    },
  },
  
  mounted() {
    this.fetchData();
  },
};
</script> -->



<!-- <template>
  <div
  :class="[
    'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
    isSidebarExpanded
      ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50'
      : 'text-white hover:bg-white hover:text-blue-600',
  ]"
  v-tooltip.right="'Integration'"
  @click="handleIntegrationClick" 
>
  <i class="las la-project-diagram text-xl"></i>
  <span v-if="isSidebarExpanded" class="text-md">Integration</span>
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
      isSidebarExpanded: true,
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
    handleIntegrationClick() {
      this.isSecondSidebarVisible = true; // Show the second sidebar
      this.isSidebarExpanded = false; // Close the first sidebar
      this.$router.push('/integration'); // Change the route to /integration
    },
    handleMenuClick(item) {
      if (item.title === "Backups" || item.title === "Archive Backups") {
        this.isSecondSidebarVisible = true; 
        this.isSidebarExpanded = false; 
      } else {
        this.fetchUserData(item); 
      }
    },
    // ... other methods remain unchanged
  },
  mounted() {
    this.fetchData();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script> -->






<!-- <div
  :class="[
    'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
    isSidebarExpanded
      ? 'text-white hover:bg-white hover:text-blue-600'
      : 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50',
  ]"
  v-tooltip.right="'Billing'"
  @click="openBillingSidebar"
>
  <i class="las la-money-bill text-xl"></i>
  <span v-if="isSidebarExpanded" class="text-md">Billing</span>
</div>

<script>
export default {
  data() {
    return {
      isSidebarExpanded: false,
      isSecondSidebarVisible: false,
    };
  },
  methods: {
    openBillingSidebar() {
      // Pehle sidebar expand karo
      this.isSidebarExpanded = true;
      this.isSecondSidebarVisible = true;

      // Fir ensure karo ki routing properly ho
      setTimeout(() => {
        this.$router.push({ name: "Billing" });
      }, 100); // Thoda delay diya taaki sidebar toggle hone ka time mile
    }
  }
};
</script> -->



<!-- <div
  :class="[
    'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
    isSidebarExpanded
      ? 'text-white hover:bg-white hover:text-blue-600'
      : 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50',
  ]"
  v-tooltip.right="'Billing'"
  @click="openBillingSidebar"
>
  <i class="las la-money-bill text-xl"></i>
  <span v-if="isSidebarExpanded" class="text-md">Billing</span>
</div>

<script>
export default {
  data() {
    return {
      isSidebarExpanded: false,
      isSecondSidebarVisible: false,
      hasOpenedOnce: false, // Track karega ki ek bar open ho chuka hai ya nahi
    };
  },
  methods: {
    openBillingSidebar() {
      if (!this.hasOpenedOnce) {
        // Pehli baar hi expand karna hai
        this.isSidebarExpanded = true;
        this.isSecondSidebarVisible = true;
        this.hasOpenedOnce = true; // Mark kar diya ki ek baar ho chuka hai

        // Routing ka dhyan rakho
        setTimeout(() => {
          this.$router.push({ name: "Billing" });
        }, 100);
      }
    }
  }
};
</script> -->



<!-- <div
  :class="[
    'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
    isSidebarExpanded
      ? 'text-white hover:bg-white hover:text-blue-600'
      : 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50',
  ]"
  v-tooltip.right="'Billing'"
  @click="openBillingSidebar"
>
  <i class="las la-money-bill text-xl"></i>
  <span v-if="isSidebarExpanded" class="text-md">Billing</span>
</div>

<script>
export default {
  data() {
    return {
      isSidebarExpanded: false,
      isSecondSidebarVisible: false,
    };
  },
  methods: {
    openBillingSidebar() {
      // Pehle hi check karenge ki already open hai ya nahi
      if (!this.isSidebarExpanded || !this.isSecondSidebarVisible) {
        this.isSidebarExpanded = true;
        this.isSecondSidebarVisible = true;

        // Vue ka $nextTick use kiya taaki UI changes apply ho jaye
        this.$nextTick(() => {
          this.$router.push({ name: "Billing" });
        });
      }
    }
  }
};
</script> -->




<!-- <template>
  <div>
    
    <div
      :style="{ width: isSidebarExpanded ? '60px' : '300px' }"
      class="bg-white shadow-xl"
    >
      <div class="dark:bg-gray-800 dark:text-white">
       
        <div class="h-[50px] flex justify-between">
          <div
            v-if="!isSidebarExpanded"
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
            'flex flex-col sticky top-0 z-10 h-screen overflow-y-auto scrollbar-container',
            !isSidebarExpanded ? 'bg-white' : 'bg-blue-600 text-white',
          ]"
        >
         
          <div
            :class="[
              'flex rounded-md items-center cursor-pointer py-3 pl-3.5',
              !isSidebarExpanded
                ? 'dark:text-white dark:hover:text-blue-400 text-gray-700 hover:bg-gray-50'
                : 'text-white hover:bg-white hover:text-blue-600',
            ]"
            v-tooltip.right="'Billing'"
            @click="redirectToSecondSidebar"
          >
            <div class="flex items-center gap-1 space-x-2">
              <i class="las la-money-bill text-xl"></i>
              <span v-if="!isSidebarExpanded">Billing</span>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    <div
      v-if="isSecondSidebarVisible"
      :class="[
        'bg-white',
        'w-80',
        'transition-all duration-700',
        'fixed top-0 right-0 h-screen z-20 shadow-lg',
      ]"
      @click.stop
    >
      <div class="p-5">
        <img src="/public/ServerAvatar.png" alt="" class="w-32 h-10 mt-0.5" />
        <hr class="mt-7" />
        <div>
          <h1>Billing Details</h1>
     
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isSidebarExpanded: false,
      isSecondSidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
      this.isSecondSidebarVisible = false; // Close second sidebar when main sidebar is toggled
    },
    redirectToSecondSidebar() {
      // Open the second sidebar
      this.isSecondSidebarVisible = true;

      // Redirect to the billing route
      this.$router.push({ name: "Billing" });
    },
  },
  methods: {
  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.isSecondSidebarVisible = false;
  },
  redirectToSecondSidebar() {
    this.isSidebarExpanded = true; // Expand the sidebar
    this.isSecondSidebarVisible = true; // Show the second sidebar

    // Use nextTick to ensure the UI updates before the redirect
    this.$nextTick(() => {
      this.$router.push({ name: 'Billing' }); // Redirect to the Billing section
    });
  },
  handleMenuClick(item) {
    if (item.title === "Backups" || item.title === "Archive Backups") {
      this.isSecondSidebarVisible = true;
      this.isSidebarExpanded = false;
    } else {
      this.fetchUserData(item);
    }
  },
  // Other methods...
},

};
</script> -->



