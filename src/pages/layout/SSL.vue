<template>
    <div class="bg-gray-100 dark:bg-gray-900 w-full h-auto flex">
      <sidebar class="" />
      <div class="w-full h-full sticky top-0 z-10">
        <headerTop class="sticky top-0 z-10" />
        <div class="w-full h-[calc(100vh-50px)] overflow-auto">
          <router-view></router-view>
            <div class="bg-white dark:bg-gray-800 dark:border-r-gray-500 dark:border-l-gray-500 dark:border-b-gray-500 border-r border-l border-b h-12 flex">
                <div class="flex items-center m-3">
                    <span class="las la-server text-xl ml-5 dark:hover:text-gray-600 dark:text-gray-500 text-gray-500 hover:text-gray-800"></span>
                </div>
                <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
                </svg>
                <div class="ml-5 flex items-center m-3 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800 font-medium">
                    <h1>Servers</h1>
                </div>
                <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
                </svg>
                <div class="ml-5 flex items-center m-3 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800 font-medium">
                    <h1>mukesh-php-test(147.182.166.224)</h1>
                </div>
                <svg class="h-full w-6 flex-shrink-0 text-gray-200 dark:text-gray-400" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
                </svg>
                <div class="ml-5 flex items-center m-3 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800 font-medium">
                    <h1>Applications</h1>
                </div>
            </div>
            <div>
                <div class="fixed bottom-5 right-7 z-50 no-print">
                    <a href="https://support.satemporary.site" target="_blank" class="bg-[#485BFF] rounded-full py-2 px-2 flex items-center justify-center"><img src="/public/dark-logo-sm1.png" class="w-7" /></a>
                </div>
            </div>
            <div>
                <div>
                    <div class="p-5">
                        <div class="grid 2xl:grid-cols-10 xl:grid-cols-2 grid-cols-1 gap-5">
                            <div class="2xl:col-span-3 order-1">
                                <div class="bg-white dark:bg-gray-800 dark:text-white shadow rounded-lg h-full">
                                    <div class="bg-[#F9FAFB] dark:bg-gray-700 rounded-t-lg">
                                        <div class="px-4 py-3.5">
                                            <h2 class="text-lg">Server Overview</h2>
                                        </div>
                                    </div>
                                    <div class="px-4 pt-2 pb-3">
                                        <div class="flex justify-between items-center gap-5">
                                            <span class="flex gap-2 items-center xl:justify-start justify-center h-full"><i class="las la-server text-xl"></i><span>Server</span></span><span class="truncate text-tiny text-gray-500 dark:text-gray-300 v-popper--has-tooltip">mukesh-php-test</span>
                                        </div>
                                        <div class="flex justify-between items-center gap-5 mt-3">
                                            <span class="flex gap-2 items-center xl:justify-start justify-center h-full"><i class="las la-user-circle text-xl"></i><span>Owned by</span></span><span class="truncate text-tiny text-gray-500 dark:text-gray-300 v-popper--has-tooltip">Me</span>
                                        </div>
                                        <div class="flex justify-between items-center gap-5 mt-3">
                                            <span class="flex gap-2 items-center xl:justify-start justify-center h-full"><i class="las la-map-marker-alt text-xl"></i><span>IP Address</span></span><span class="text-tiny flex gap-2 items-center"><span class="flag f-us rounded normal-flag !mb-0"></span><span class="text-gray-500 dark:text-gray-300 ipAddress v-popper--has-tooltip">147.182.166.224</span><button>
                                                    <i class="las la-copy text-blue-500"></i></button></span>
                                        </div>
                                        <div class="flex justify-between items-center gap-5 mt-2">
                                            <span class="flex gap-2 items-center xl:justify-start justify-center h-full"><i class="las la-rss text-xl -rotate-45 -mt-1"></i><span>Status</span></span>
                                            <div class="flex h-full items-center justify-center">
                                                <div class="bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 ring-0 inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium">
                                                    <i class="fas fa-circle mr-1 text-xs text-green-500"></i>
                                                    Connected
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="2xl:col-span-4 xl:col-span-2 2xl:order-2 xl:order-3 order-2">
                                <div class="bg-white dark:bg-gray-800 dark:text-white shadow rounded-lg h-full">
                                    <div class="bg-[#F9FAFB] dark:bg-gray-700 rounded-t-lg gap-5">
                                        <div class="px-4 py-3.5 flex justify-between">
                                            <h2 class="text-lg">Application</h2>
                                            <div class="">
                                                <button class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center rounded-full focus:outline-none focus:ring-0" id="headlessui-switch-v-20-7-0" role="switch" type="button" tabindex="0" aria-checked="1">
                                                    <span class="sr-only">Use setting</span><span class="pointer-events-none absolute h-full w-full rounded-lg"></span><span class="bg-blue-500 pointer-events-none absolute mx-auto h-5 w-10 rounded-full transition-colors duration-200 ease-in-out"></span><span class="translate-x-5 pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white dark:bg-gray-200 shadow ring-0 transition-transform duration-200 ease-in-out"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-4 pt-2 pb-3">
                                        <div class="flex justify-between items-center gap-5">
                                            <span class="flex gap-2 items-center xl:justify-start justify-center h-full"><i class="las la-cubes text-2xl"></i><span>Application Name</span></span><span data-v-1ca46b38="" class="truncate text-tiny text-gray-500 dark:text-gray-300 v-popper--has-tooltip">SelfHosted</span>
                                        </div>
                                        <div data-v-1ca46b38="" class="flex justify-between items-center gap-5 mt-3">
                                            <span data-v-1ca46b38="" class="flex gap-2 items-center xl:justify-start justify-center h-full"><i data-v-1ca46b38="" class="las la-globe text-2xl"></i><span data-v-1ca46b38="">Primary Domain</span></span><a data-v-1ca46b38="" href="http://ertrththtyh.satesting.site" target="_blank" class="text-sm break-words truncate max-w-max text-blue-500 dark:text-blue-500 hover:text-blue-600 v-popper--has-tooltip">ertrththtyh.satesting.site</a>
                                        </div>
                                        <div data-v-1ca46b38="" class="flex justify-between items-center gap-5 mt-3">
                                            <span data-v-1ca46b38="" class="flex gap-2 items-center xl:justify-start justify-center h-full"><i data-v-1ca46b38="" class="lab la-expeditedssl text-2xl"></i><span data-v-1ca46b38="">SSL</span></span><span data-v-1ca46b38="" class="text-red-500 text-sm">Not Installed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="2xl:col-span-3 2xl:order-3 xl:order-2 order-3">
                                <div class="bg-white dark:bg-gray-800 dark:text-white shadow rounded-lg h-full">
                                    <div class="bg-gray-50 dark:bg-gray-700 rounded-t-lg">
                                        <div class="px-4 py-3.5">
                                            <div class="flex justify-between items-center 2xl:flex-nowrap flex-wrap gap-5">
                                                <h2 class="text-lg sm:mb-0">Specifications</h2>
                                                <div class="flex items-center gap-5">
                                                    <div>
                                                        <i class="fas fa-share-alt text-lg text-blue-500 cursor-pointer v-popper--has-tooltip"></i>
                                                    </div>
                                                    <div class="flex items-center gap-3"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-4 py-3">
                                        <div class="space-y-3">
                                            <div class="flex items-center justify-between gap-4">
                                                <div class="flex items-center gap-2">
                                                    <div class="min-w-[40px]">
                                                        <img src="/public/ubuntu.png" class="w-6 h-auto ml-1" />
                                                    </div>
                                                    <span class="text-tiny">OS</span>
                                                </div>
                                                <div class="flex flex-col gap-y-0.5">
                                                    <span class="text-tiny text-gray-500 dark:text-gray-300">Ubuntu 22.04</span>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between gap-4">
                                                <div class="flex items-center gap-2">
                                                    <div class="min-w-[40px]">
                                                        <img src="/public/apache.png" class="w-8 h-auto" />
                                                    </div>
                                                    <span class="text-tiny">Web Server</span>
                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="capitalize text-gray-500 dark:text-gray-200">Apache</span>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between gap-4">
                                                <div class="flex items-center gap-2">
                                                    <div class="min-w-[40px]">
                                                        <img src="/public/digitalocean.png" class="w-6 h-auto" />
                                                    </div>
                                                    <span class="text-tiny">Server Provider</span>
                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="capitalize text-gray-500 dark:text-gray-200">digitalocean</span>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between gap-4">
                                                <div class="flex items-center gap-2">
                                                    <div class="min-w-[40px]">
                                                        <img src="/public/mysql1.svg" class="w-8 h-auto" />
                                                    </div>
                                                    <span class="text-tiny">Database</span>
                                                </div>
                                                <div class="flex">
                                                    <span class="capitalize text-gray-500 dark:text-gray-200">mysql</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr class="mt-6 mb-4 dark:border-gray-500" />
                        </div>
                        <div>
                            <h1 class="text-xl dark:text-white">SSL Certificate</h1>
                        </div>
                        <div class="dark:text-white">
                            <h1 class="text-sm mt-2">
                                NOTE: After adding a new domains to the application, update
                                the SSL certificate once the DNS propagation is complete.
                            </h1>
                        </div>
                        <div class="mt-5 mb-10 bg-white dark:bg-gray-800 rounded-md shadow p-8">
                            <div class="dark:text-white">
                                <img src="/public/ssl.png" class="mx-auto mb-5 w-72" />
                                <h1 class="text-xl text-gray-800 dark:text-gray-300 text-center mt-3">
                                    SSL Certificate is not yet installed.
                                </h1>
                                <p class="text-gray-500 dark:text-gray-400 my-4 text-center">
                                    There are two ways to install SSL ccertificate on your
                                    application: Automatic and Custom.
                                </p>
                                <div class="grid sm:grid-cols-2 gap-8 xl:w-1/2 mx-auto">
                                    <div class="bg-gray-50 dark:bg-gray-700 rounded shadow p-3 flex flex-col justify-between">
                                        <div>
                                            <p class="mb-4 dark:text-gray-300">
                                                Automatic Installation
                                            </p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                                In Automatic Installation, We will issue SSL
                                                Certificate for your application domains and apply it
                                                instantly.
                                            </p>
                                        </div>
                                        <button @click="showSection = 'Automatic'" class="text-xs mt-8 w-full py-1.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded">
                                            Automatic Installation
                                        </button>
                                    </div>
                                    <div class="bg-gray-50 dark:bg-gray-700 rounded shadow p-3 flex flex-col justify-between">
                                        <div>
                                            <p class="mb-4 dark:text-gray-300">
                                                Custom Installation
                                            </p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                                In manual installation, you need to manually enter the
                                                certificate, private key, and chain file to install
                                                the SSL certificate.
                                            </p>
                                        </div>
                                        <button @click="showSection = 'Custom'" class="text-xs mt-8 w-full py-1.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded">
                                            Custom Installation
                                        </button>
                                    </div>
                                </div>
                                <div v-if="showSection === 'Automatic'">
                                    <div class="bg-amber-100 border border-amber-200 text-[#916C3E] rounded-md px-4 py-2 w-full mt-5 text-sm">
                                        <p>
                                            <b>Note:</b> It is necessary to verify the DNS of all
                                            damains before isntallaltion Automatic SSL. Failure to
                                            verify any domain's DNS will prevent SSL installation.
                                        </p>
                                    </div>
                                    <h3 class="mt-5 dark:text-gray-300">
                                        Automatic SSL Installation
                                    </h3>
                                    <div class="h-full mt-5">
                                        <div class="overflow-auto overflow-y-visible h-full border border-slate-300 dark:border-gray-900 rounded-md">
                                            <div class="inline-block min-w-full align-middle">
                                                <div class="shadow">
                                                    <table class="min-w-full divide-y divide-gray-300 dark:divide-slate-700">
                                                        <thead class="bg-gray-50 dark:bg-gray-700">
                                                            <tr>
                                                                <th class="text-left font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm">
                                                                    Domain Name
                                                                </th>
                                                                <th class="text-center font-semibold text-gray-900 dark:text-gray-300 py-4 px-4 text-sm">
                                                                    DNS
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="divide-y divide-gray-200 dark:divide-slate-700 bg-white dark:bg-gray-800 dark:text-white">
                                                            <tr class="even:bg-gray-50 dark:bg-slate-800">
                                                                <td class="whitespace-nowrap py-4 px-4 text-sm">
                                                                    ertrththtyh.satesting.site
                                                                    <a href="http://ertrththtyh.satesting.site" target="_blank" class="text-blue-500"><i class="las la-external-link-alt"></i></a><small class="block text-gray-500 dark:text-gray-300"></small>
                                                                </td>
                                                                <td class="whitespace-nowrap py-4 px-4 text-sm text-center">
                                                                    <i class="las la-circle text-green-500 bg-green-500 rounded-full"></i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="text-center mt-3">
                                                <button type="submit" class="disabled:opacity-75 disabled:pointer-events-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-0 font-medium rounded text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-0 ml-3">
                                                    Install Automatic SSL
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="showSection === 'Custom'">
                                    <div>
                                        <div class="grid grid-cols-1">
                                            <form action="javascript:void(0)" method="post">
                                                <div>
                                                    <label class="label after:content-['*'] after:ml-0.5 after:text-red-500" for="certificate">SSL Certificate</label><textarea name="certificate" placeholder="Paste your Certificate file contents here" cols="30" rows="10" class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-blue-500 focus:ring-0 block w-full p-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"></textarea><small class="text-red-500 error_message"></small><span style="
                                                    position: absolute;
                                                    left: 0px;
                                                    top: 0px;
                                                    pointer-events: none;
                                                "></span>
                                                </div>
                                                <div class="my-3">
                                                    <label class="label after:content-['*'] after:ml-0.5 after:text-red-500">Private Key</label><textarea name="private_key" placeholder="Paste your private key file contents here" cols="30" rows="10" class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-blue-500 focus:ring-0 block w-full p-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"></textarea><small class="text-red-500 error_message"></small>
                                                </div>
                                                <div>
                                                    <label class="label">Chain File (CA Bundle) (Optional)</label><textarea name="chain_file" placeholder="Paste your chain file contents here" cols="30" rows="10" class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-blue-500 focus:ring-0 block w-full p-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"></textarea><small class="text-red-500 error_message"></small>
                                                </div>
                                                <div class="text-center mt-3">
                                                    <button type="submit" class="disabled:opacity-75 disabled:pointer-events-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-0 font-medium rounded text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-0">
                                                        Install SSL Certificate 
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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
import sidebar from "/src/components/sidebar.vue";
import headerTop from "/src/components/header.vue";

export default {
    name: "Databases",
    components: {
        sidebar,
        headerTop,
    },
    data() {
        return {
            showSection: null,
            ownedBy: "Owned By Me",
            searchQuery: "Search by a Name/IP Address",
            searchServer: "",
            databases: [],
        };
    },

    watch: {
        searchServer: "fetchdatabases",
    },

    methods: {
        panel() {
            this.$router.push("/serverpanel");
        },
        handleDropdownChange() {
            this.fetchdatabases();
        },

        async fetchdatabases() {
            this.databases = [];
            const accessToken = localStorage.getItem("access_token");
            if (!accessToken) {
                console.error("No access token found");
                return;
            }

            const organizationId = 1;
            let url = `https://app.satesting1.homes/api/organizations/${organizationId}/databases`;
            const params = new URLSearchParams();
            params.append("search", this.searchServer || "");
            params.append("per_page", 10);

            // console.log(`Fetching data from: ${url}?${params.toString()}`);

            try {
                const response = await apiClient.get(`${url}?${params.toString()}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                // console.log(response.data);
                this.databases = response.data.databases || [];

                if (!Array.isArray(this.databases)) {
                    console.error("Unexpected response format:", response.data);
                    this.databases = [];
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
                this.databases = [];
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
</style>
