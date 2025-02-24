<template>
    <DefaultLayout>
        <template #breadcrumb>
            <Breadcrumb :breadcrumb="breadcrumb"/>
        </template>
        <div class="container-fluid mx-auto my-5 h-full">
            <div class="bg-white dark:bg-gray-800 rounded-md shadow p-5">
                <div class="flex flex-wrap gap-5 justify-between items-center" v-if="essentialPoints.server_count == 0">
                    <div class="sm:flex gap-5 items-center">
                        <img src="/images/server-hosting.png" class="w-20"/> 
                        <div>
                            <h2 class="font-semibold text-xl dark:text-gray-300">Connect Your First Server</h2>
                            <p class="text-gray-500 dark:text-gray-300 text-sm mt-2">Get started with ServerAvatar by linking your cloud VPS to our panel.</p>
                            <p class="text-gray-500 dark:text-gray-300 text-sm mt-1">Jump into efficient server management right away!</p>
                        </div>
                    </div>
                    <div>
                        <div v-if="user && user.email_verified_at && this.currentOrganization">
                            <router-link  
                                :to="{
                                    name: 'ServerConnect',
                                    params: {
                                        organization: this.currentOrganization.id
                                    }
                                }"
                                class="disabled:opacity-75 disabled:pointer-events-none text-white bg-sa-500 hover:bg-sa-600 focus:outline-none focus:ring-0 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-sa-500 dark:hover:bg-sa-600 dark:focus:ring-0" 
                                v-if="hasPermission('server','create')"
                            >
                                Connect a Server
                            </router-link>
                            <div v-else class="bg-sa-500 rounded text-white px-5 py-2.5 text-sm opacity-50" v-tooltip="'You do not have permission.'">
                                Connect a Server
                            </div>  
                        </div>
                        <div v-else class="bg-sa-500 rounded text-white px-5 py-2.5 text-sm opacity-50" v-tooltip="'Please verify your email address first.'">
                            Connect a Server
                        </div>  
                    </div>
                </div>
                <div v-else>
                    <div class="flex flex-wrap justify-between gap-5">
                        <div>
                            <h2 class="font-semibold text-xl dark:text-gray-300" v-if="user">Hello, {{ user.name }}</h2>
                            <p class="text-gray-500 text-sm mt-1 dark:text-gray-300">Welcome to ServerAvatar</p>
                        </div>  
                        <Menu as="div" class="relative inline-block text-left">
                            <div v-if="user && user.email_verified_at">
                                <MenuButton v-if="hasPermission('server','create') || hasPermission('application','create') || hasPermission('database','create')" class="inline-flex w-full justify-center rounded-md bg-sa-500 hover:bg-sa-600 text-white px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-0">
                                    Create
                                    <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </MenuButton>
                            </div>
                            <div v-else>
                                <Button disabled v-tooltip="`Please verify your email address first.`">Create</Button>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <MenuItems class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div class="py-1">
                                        <MenuItem v-if="hasPermission('server','create')">
                                            <router-link :to="{name: 'ServerConnect', params: {organization: currentOrganization.id}}" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">Server</router-link>
                                        </MenuItem>
                                        <MenuItem v-if="hasPermission('application','create') && allServers.length" :disabled="!allServers.length">
                                            <button @click="openModal('application')" class=" disabled:opacity-50 disabled:pointer-events-none block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 w-full text-left dark:hover:bg-gray-800">Application</button>
                                        </MenuItem>
                                        <MenuItem v-if="hasPermission('database','create') && allServers.length" :disabled="!allServers.length">
                                            <button @click="openModal('database')" class=" disabled:opacity-50 disabled:pointer-events-none block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 w-full text-left dark:hover:bg-gray-800">Database</button>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                    <div class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-5">
                        <div class="dark:bg-gray-800 border dark:border-gray-600 rounded-md p-3">
                            <div class="flex justify-between items-start flex-wrap">
                                <span class="material-symbols-outlined text-lg text-sa-500 dark:text-blue-300 bg-sa-50 dark:bg-blue-500/20 rounded px-1">
                                    dns
                                </span>
                                <router-link class="flex gap-1 items-center text-xs text-sa-500" v-if="hasPermission('dashboard', 'servers')" :to="{
                                    name: 'Dashboard'
                                }">
                                    <span class="hover:underline">View all Servers</span>
                                    <span class="material-symbols-outlined text-lg">
                                        arrow_right_alt
                                    </span>
                                </router-link>
                            </div>
                            <div class="flex justify-between items-center mt-3 font-semibold">
                                <span class="dark:text-gray-300">Servers</span>
                                <span class="text-xl dark:text-gray-300">{{ essentialPoints.server_count }}</span>
                            </div>
                        </div>
                        <template v-if="currentOrganization">
                            <div class="dark:bg-gray-800 border dark:border-gray-600 rounded-md p-3">
                                <div class="flex justify-between items-start flex-wrap">
                                    <span class="material-symbols-outlined text-lg text-sa-500 dark:text-blue-300 bg-sa-50 dark:bg-blue-500/20 rounded px-1">
                                        deployed_code
                                    </span>
                                    <router-link class="flex gap-1 items-center text-xs text-sa-500" v-if="hasPermission('dashboard', 'applications')" :to="{
                                        name: 'Applications',
                                        params: {
                                            organization: currentOrganization.id
                                        }
                                    }">
                                        <span class="hover:underline">View all Applications</span>
                                        <span class="material-symbols-outlined text-lg">
                                            arrow_right_alt
                                        </span>
                                    </router-link>
                                </div>
                                <div class="flex justify-between items-center mt-3 font-semibold">
                                    <span class="dark:text-gray-300">Applications</span>
                                    <span class="text-xl dark:text-gray-300">{{ essentialPoints.application_count }}</span>
                                </div>
                            </div>
                            <div class="dark:bg-gray-800 border dark:border-gray-600 rounded-md p-3">
                                <div class="flex justify-between items-start flex-wrap">
                                    <span class="material-symbols-outlined text-lg text-sa-500 dark:text-blue-300 bg-sa-50 dark:bg-blue-500/20 rounded px-1">
                                        database
                                    </span>
                                    <router-link class="flex gap-1 items-center text-xs text-sa-500" v-if="hasPermission('dashboard', 'databases')" :to="{
                                        name: 'Databases',
                                        params: {
                                            organization: currentOrganization.id
                                        }
                                    }">
                                        <span class="hover:underline">View all Databases</span>
                                        <span class="material-symbols-outlined text-lg">
                                            arrow_right_alt
                                        </span>
                                    </router-link>
                                </div>
                                <div class="flex justify-between items-center mt-3 font-semibold">
                                    <span class="dark:text-gray-300">Databases</span>
                                    <span class="text-xl dark:text-gray-300">{{ essentialPoints.database_count }}</span>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <template v-if="!essentialPoints.onboarding_skipped">
                    <div class="mt-7">
                        <div class="flex gap-2 items-center">
                            <img src="/images/rocket.png" class="w-11"/> 
                            <h2 class="font-medium text-lg dark:text-gray-300">"Essential points"</h2>
                        </div>
    
                        <div class="flex flex-col gap-7 h-fit w-full mt-5">
                            <div class="relative w-full">
                                <div class="absolute mt-0.5 top-10 left-5 w-px border-l-2 border-dashed border-sa-500 h-full" aria-hidden="true"></div>
                                <div class="flex gap-5">
                                    <span :class="['material-symbols-outlined text-xl text-sa-500 dark:text-blue-300 bg-sa-50 dark:bg-blue-500/20 flex items-center justify-center px-2.5 py-1.5 h-fit rounded-full tabular-nums']">
                                        foggy
                                    </span>
                                    <div class="sm:flex justify-between sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
                                        <div>
                                            <div class="md:flex items-center space-3">
                                                <p :class="['text-gray-800 dark:text-gray-300 flex items-center gap-1']">
                                                    Integrate Cloud Platforms
                                                    <a target="_blank" href="https://serveravatar.com/docs/integrations/cloud-platform/getting-started">
                                                        <span class="material-symbols-outlined -rotate-45 text-lg text-sa-500 hover:text-sa-600">
                                                            link
                                                        </span>
                                                    </a>
                                                </p>
                                                <span class="text-[10px] bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-gray-500 rounded px-2 py-0.5">
                                                    Recommended, but not required
                                                </span>
                                            </div>
                                            <p class="text-gray-500 dark:text-gray-300 text-xs block mt-1">Cloud Platform integrations speed up server setup and connections, eliminating the need to switch between platforms.</p>
                                        </div>
                                        <div class="min-w-fit" v-if="currentOrganization">
                                            <template v-if="!essentialPoints.cloudPlatformIntegration">
                                                <router-link v-if="hasPermission('organization', 'cloud-platforms')" 
                                                    :to="{
                                                        name: 'CloudServiceProvider',
                                                        params: {
                                                            organization: currentOrganization.id
                                                        }
                                                    }"
                                                    class="bg-sa-50 hover:bg-sa-100 dark:bg-sa-500 dark:hover:bg-sa-600 dark:text-white rounded sm:px-5 px-3 py-2 text-sm h-fit"
                                                >
                                                    Integrate Provider
                                                </router-link>
                                                <div v-else v-tooltip="'You do not have permission'" class="opacity-50 bg-sa-50 dark:bg-sa-500 dark:text-white rounded sm:px-5 px-3 py-2 text-sm h-fit">
                                                    Integrate Provider
                                                </div>
                                            </template>
                                            <div class="w-36 flex justify-center" v-else>
                                                <i class="fas fa-check-circle text-xl text-sa-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute mt-0.5 top-10 left-5 w-px border-l-2 border-dashed border-sa-500 h-full" aria-hidden="true"></div>
                                <div class="flex gap-5">
                                    <span :class="['material-symbols-outlined text-xl text-sa-500 dark:text-blue-300 bg-sa-50 dark:bg-blue-500/20 flex items-center justify-center px-2.5 py-1.5 h-fit rounded-full tabular-nums']">
                                        dns
                                    </span>
                                    <div class="sm:flex justify-between sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
                                        <div>
                                            <p :class="['text-gray-800 dark:text-gray-300 flex items-center gap-1']">
                                                Connect a Server
                                                <a target="_blank" href="https://serveravatar.com/docs/server-management/installation/direct-method">
                                                    <span class="material-symbols-outlined -rotate-45 text-lg text-sa-500 hover:text-sa-600">
                                                        link
                                                    </span>
                                                </a>
                                            </p>
                                            <p class="text-gray-500 dark:text-gray-300 text-xs block mt-1"> If you have any other cloud platform, You can connect a custom Ubuntu 22.04 or 20.04 server without any issue.</p>
                                        </div>
                                        <div class="min-w-fit" v-if="currentOrganization">
                                            <template v-if="essentialPoints.server_count == 0">
                                                <template v-if="user && user.email_verified_at && this.currentOrganization" >
                                                    <router-link v-if="hasPermission('server', 'create')" 
                                                        :to="{
                                                            name: 'ServerConnect',
                                                            params: {
                                                                organization: currentOrganization.id
                                                            }
                                                        }"
                                                        class="bg-sa-50 hover:bg-sa-100 dark:bg-sa-500 dark:hover:bg-sa-600 dark:text-white rounded sm:px-7 px-5 py-2 text-sm h-fit"
                                                    >
                                                        Connect Server
                                                    </router-link>
                                                    <div v-else v-tooltip="'You do not have permission'" class="opacity-50 bg-sa-50 dark:bg-sa-500 dark:text-white rounded sm:px-7 px-5 py-2 text-sm h-fit">
                                                        Connect Server
                                                    </div>
                                                </template>
                                                <div v-else v-tooltip="'Please verify your email address first.'" class="opacity-50 bg-sa-50 dark:bg-sa-500 dark:text-white rounded sm:px-7 px-5 py-2 text-sm h-fit">
                                                    Connect Server
                                                </div>
                                            </template>
                                            <div class="w-36 flex justify-center" v-else>
                                                <i class="fas fa-check-circle text-xl text-sa-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute mt-0.5 top-10 left-5 w-px border-l-2 border-dashed border-sa-500 h-full" aria-hidden="true"></div>
                                <div class="flex gap-5">
                                    <i class="lab la-github text-2xl text-sa-500 dark:text-blue-300 bg-sa-50 dark:bg-blue-500/20 flex items-center justify-center px-2 py-1 h-fit rounded-full tabular-nums"></i>
                                    <div class="sm:flex justify-between sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
                                        <div>
                                            <div class="md:flex items-center space-3">
                                                <p :class="['text-gray-800 dark:text-gray-300 flex items-center gap-1']">
                                                    Integrate Git
                                                    <a target="_blank" href="https://serveravatar.com/docs/integrations/git">
                                                        <span class="material-symbols-outlined -rotate-45 text-lg text-sa-500 hover:text-sa-600">
                                                            link
                                                        </span>
                                                    </a>
                                                </p>
                                                <span class="text-[10px] bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-gray-500 rounded px-2 py-0.5">
                                                    Recommended, but not required
                                                </span>
                                            </div>
                                            <p class="text-gray-500 dark:text-gray-300 text-xs block mt-1">Git integrations let you deploy applications using Bitbucket, GitHub, or GitLab repositories.</p>
                                        </div>
                                        <div class="min-w-fit" v-if="currentOrganization">
                                            <template v-if="!essentialPoints.gitIntegration">
                                                <router-link v-if="hasPermission('organization', 'git')" 
                                                    :to="{
                                                        name: 'GitDeployment',
                                                        params: {
                                                            organization: currentOrganization.id
                                                        }
                                                    }"
                                                    class="bg-sa-50 hover:bg-sa-100 dark:bg-sa-500 dark:hover:bg-sa-600 dark:text-white rounded sm:px-5 px-3 py-2 text-sm h-fit"
                                                >
                                                    Integrate Provider
                                                </router-link>
                                                <div v-else v-tooltip="'You do not have permission'" class="opacity-50 bg-sa-50 dark:bg-sa-500 dark:text-white rounded sm:px-5 px-3 py-2 text-sm h-fit">
                                                    Integrate Provider
                                                </div>
                                            </template>
                                            <div class="w-36 flex justify-center" v-else>
                                                <i class="fas fa-check-circle text-xl text-sa-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute mt-0.5 top-10 left-5 w-px border-l-2 border-dashed border-sa-500 h-full" aria-hidden="true"></div>
                                <div class="flex gap-5">
                                    <span :class="['material-symbols-outlined text-xl text-sa-500 dark:text-blue-300 bg-sa-50 dark:bg-blue-500/20 flex items-center justify-center px-2.5 py-1.5 h-fit rounded-full tabular-nums']">
                                        deployed_code
                                    </span>
                                    <div class="sm:flex justify-between sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
                                        <div>
                                            <p :class="['text-gray-800 dark:text-gray-300 flex items-center gap-1']">
                                                Create Application
                                                <a target="_blank" href="https://serveravatar.com/docs/application/deploy-custom-php">
                                                    <span class="material-symbols-outlined -rotate-45 text-lg text-sa-500 hover:text-sa-600">
                                                        link
                                                    </span>
                                                </a>
                                            </p>
                                            <p class="text-gray-500 dark:text-gray-300 text-xs block mt-1">Deploy and manage custom applications and one-click installers swiftly with the ServerAvatar platform.</p>
                                        </div>
                                        <div class="min-w-fit">
                                            <template v-if="essentialPoints.application_count == 0">
                                                <button @click="openModal('application')" v-if="hasPermission('application', 'create')" 
                                                    class="bg-sa-50 hover:bg-sa-100 dark:bg-sa-500 dark:hover:bg-sa-600 dark:text-white rounded sm:px-4 px-2 py-2 text-sm h-fit"
                                                >
                                                    Create Application
                                                </button>
                                                <div v-else v-tooltip="'You do not have permission'" class="opacity-50 bg-sa-50 dark:bg-sa-500 dark:text-white rounded sm:px-4 px-2 py-2 text-sm h-fit">
                                                    Create Application
                                                </div>
                                            </template>
                                            <div class="w-36 flex justify-center" v-else>
                                                <i class="fas fa-check-circle text-xl text-sa-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="flex gap-5">
                                    <span :class="['material-symbols-outlined text-xl text-sa-500 dark:text-blue-300 bg-sa-50 dark:bg-blue-500/20 flex items-center justify-center px-2.5 py-1.5 h-fit rounded-full tabular-nums']">
                                        cloud_download
                                    </span>
                                    <div class="sm:flex justify-between sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
                                        <div>
                                            <div class="md:flex items-center space-3">
                                                <p :class="['text-gray-800 dark:text-gray-300 flex items-center gap-1']">
                                                    Integrate Cloud Storage
                                                    <a target="_blank" href="https://serveravatar.com/docs/integrations/cloud-storage/getting-started">
                                                        <span class="material-symbols-outlined -rotate-45 text-lg text-sa-500 hover:text-sa-600">
                                                            link
                                                        </span>
                                                    </a>
                                                </p>
                                                <span class="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 rounded px-2 py-0.5">
                                                    Recommended, but not required
                                                </span>
                                            </div>
                                            <p class="text-gray-500 dark:text-gray-300 text-xs block mt-1">Cloud storage integrations let you store backups, Applications, Databases, or Filesystem backups with multiple storage options.</p>
                                        </div>
                                        <div class="min-w-fit" v-if="currentOrganization">
                                            <template v-if="!essentialPoints.cloudStorageIntegration">
                                                <router-link v-if="hasPermission('organization', 'cloud-storage')" 
                                                    :to="{
                                                        name: 'CloudStorageProvider',
                                                        params: {
                                                            organization: currentOrganization.id
                                                        }
                                                    }"
                                                    class="bg-sa-50 hover:bg-sa-100 dark:bg-sa-500 dark:hover:bg-sa-600 dark:text-white rounded sm:px-5 px-3 py-2 text-sm h-fit"
                                                >
                                                    Integrate Provider
                                                </router-link>
                                                <div v-else v-tooltip="'You do not have permission'" class="opacity-50 bg-sa-50 dark:bg-sa-500 dark:text-white rounded sm:px-5 px-3 py-2 text-sm h-fit">
                                                    Integrate Provider
                                                </div>
                                            </template>
                                            <div class="w-36 flex justify-center" v-else>
                                                <i class="fas fa-check-circle text-xl text-sa-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-7 text-end">
                        <button class="bg-sa-50 hover:bg-sa-100 dark:bg-sa-500 dark:hover:bg-sa-600 dark:text-white text-sa-500 px-6 py-1.5 rounded text-sm" @click="skip()">Skip</button>
                    </div>
                </template>
                <div class="mt-7" v-if="essentialPoints.server_count > 0">
                    <template v-if="hasPermission('dashboard', 'servers') || hasPermission('dashboard', 'applications')">
                        <div class="flex gap-5 justify-between items-center">
                            <h2 class="font-semibold text-xl dark:text-gray-300">Overview</h2>
                        </div>
                        <div class="mt-5">
                            <div class="block">
                                <div class="border-b border-gray-200 dark:border-gray-600">
                                    <nav class="-mb-px flex space-x-4" aria-label="Tabs">
                                        <a v-if="hasPermission('dashboard', 'servers')" @click="currentTab = 'servers'" :class="[currentTab == 'servers' ? 'border-sa-500 text-sa-500' : 'border-transparent text-gray-900 dark:text-gray-300', 'whitespace-nowrap border-b-2 py-2 px-4 font-medium cursor-pointer']" >Servers</a>
                                        <a v-if="hasPermission('dashboard', 'applications')" @click="currentTab = 'applications'" :class="[currentTab == 'applications' ? 'border-sa-500 text-sa-500' : 'border-transparent text-gray-900 dark:text-gray-300', 'whitespace-nowrap border-b-2 py-2 px-4 font-medium cursor-pointer']" >Applications</a>
                                    </nav>
                                </div>
                            </div>
                            <template v-if="currentTab == 'servers'">
                                <Table :head="[]" v-if="allServers.length > 0 && !refreshing">
                                    <tr class="even:bg-gray-50 dark:even:bg-slate-800" v-for="(server, key) in allServers.slice(-5).reverse()" :key="key">
                                        <td class="whitespace-nowrap py-4 px-4 text-sm max-w-52 w-52">
                                            <div class="flex gap-3 items-center">
                                                <img
                                                    :src="providerLogo(server.provider_name)"
                                                    class="w-7 h-auto"
                                                    v-tooltip="`${CloudLogos[server.provider_name].title}`"
                                                />
                                                <div class="flex flex-col gap-1 max-w-full">
                                                    <div class="flex items-center gap-2">
                                                        <i
                                                            class="fas fa-circle text-xs"
                                                            :class="server.agent_status == '1' ? 'text-green-600' : server.agent_status == '0' ? 'text-red-500' : 'text-gray-500'"
                                                            v-tooltip.top="`${server.agent_status == '1' ? 'Connected' : server.agent_status == '0' ? 'Not Connected' : server.agent_status}`"
                                                        ></i>
                                                        <div class="overflow-x-auto inline">
                                                            <template v-if="hasPermission('server', 'server-panel')">
                                                                <router-link v-if="(server.agent_status == '1' || server.agent_status == 'Connected')" :to="{name: 'ServerPanelIndex', params: {organization: server.organization_id, server: server.id}}"
                                                                    class="flex items-center"
                                                                >
                                                                    <p
                                                                        class="truncate font-semibold text-tiny text-gray-800 dark:text-white"
                                                                        v-tooltip="`${server.name}`"
                                                                    >
                                                                        {{ server.name }}
                                                                    </p>
                                                                </router-link>
                                                                <p
                                                                    class="truncate text-gray-500 dark:text-white"
                                                                    v-tooltip="`${server.name}`"  v-if="server.agent_status == 'failed' || server.agent_status == 'not_supported' || server.agent_status == '0' || server.agent_status == 'Not Connected'">
                                                                    {{ server.name }}
                                                                </p>
                                                                <router-link v-if="server.agent_status !== '1' && server.agent_status !== 'Connected' && server.agent_status !== '0' && server.agent_status !== 'Not Connected' && server.agent_status != 'failed' && server.agent_status !== 'not_supported'" :to="{
                                                                    name: 'ServerInstallation',
                                                                    params:{
                                                                        organization: currentOrganization.id,
                                                                        server: server.id
                                                                    }
                                                                }">
                                                                    <p
                                                                        class="truncate dark:text-white"
                                                                        v-tooltip="`${server.name}`"
                                                                    >
                                                                        {{ server.name }}
                                                                    </p>
                                                                </router-link>
                                                            </template>
                                                            <p
                                                                class="truncate text-gray-500 dark:text-white"
                                                                v-else
                                                                v-tooltip="`${server.name}`">
                                                                {{ server.name }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center gap-2">
                                                        <country-flag :country="server.country_code" size="small"/>
                                                        <button @click="copyToClipboard(server.ip)">
                                                            <span class="truncate text-gray-500 dark:text-gray-300" v-tooltip="server.ip">{{ server.ip }}</span>
                                                        </button>
                                                    </div>
                                                    <span class="text-gray-500 dark:text-gray-300">
                                                        {{ server.created_by_humans }}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 px-4 text-center">
                                            <div class="flex flex-col gap-2.5">
                                                <span class="text-tiny mb-3 font-semibold">Web Server</span>
                                                <div class="flex justify-center">
                                                    <img
                                                        v-if="server.web_server == 'nginx' || server.web_server == 'mern'"
                                                        src="/svg/web-servers/nginx.svg"
                                                        class="w-auto h-7"
                                                        v-tooltip="`Nginx`"
                                                    />
                                                    <img
                                                        v-else-if="server.web_server == 'openlitespeed'"
                                                        src="/svg/web-servers/ols.svg"
                                                        class="w-auto h-7"
                                                        v-tooltip="`Openlitespeed`"
                                                    />
                                                    <img
                                                        v-else
                                                        src="/svg/web-servers/apache.svg"
                                                        class="w-6 h-auto"
                                                        v-tooltip="`Apache`"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 px-4 text-center">
                                            <div class="flex flex-col gap-2.5">
                                                <span class="text-tiny mb-3 font-semibold">Database</span>
                                                <img
                                                    v-if="server.database_type == 'mysql'"
                                                    src="/svg/databases/mysql.svg"
                                                    class="w-20 h-auto mx-auto"
                                                    v-tooltip="`MySql`"
                                                />
                                                <template v-else-if="server.database_type == 'mongodb'">
                                                    <img
                                                        src="/svg/databases/mongodb.png"
                                                        class="w-20 h-auto mx-auto block dark:hidden"
                                                        v-tooltip="'MongoDB'"
                                                    />
                                                    <img
                                                        src="/svg/databases/mongodb-white.png"
                                                        class="w-20 h-auto mx-auto hidden dark:block"
                                                        v-tooltip="'MongoDB'"
                                                    />
                                                </template>
                                                <template v-else>
                                                    <img
                                                        src="/svg/databases/mariadb.svg"
                                                        class="w-20 h-auto mx-auto block dark:hidden"
                                                        v-tooltip="`MariaDB`"
                                                    />
                                                    <img
                                                        src="/svg/databases/mariadb-white.png"
                                                        class="w-20 h-auto mx-auto hidden dark:block"
                                                        v-tooltip="`MariaDB`"
                                                    />
                                                </template>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 px-4 text-center">
                                            <div class="flex flex-col gap-2.5">
                                                <span class="text-tiny mb-2 font-semibold">OS</span>
                                                <div class="flex gap-2 items-center justify-center">
                                                    <img
                                                        src="/svg/ubuntu.svg"
                                                        class="w-6 h-auto"
                                                    />
                                                    <span class="text-sm inline">{{ server.version }}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap p-4 text-sm text-right">
                                            <div class="flex gap-4 items-center justify-end w-full">
                                                <template v-if="hasPermission('server', 'server-panel')">
                                                    <router-link v-if="(server.agent_status == '1' || server.agent_status == 'Connected')" :to="{name: 'ServerPanelIndex', params: {organization: server.organization_id, server: server.id}}"
                                                        class="text-xs flex items-center"
                                                        v-tooltip="'Server Panel'"
                                                    >
                                                        <i class="las la-tachometer-alt text-xl text-sa-500 dark:text-sa-400"></i>
                                                    </router-link>
                                                    <span v-if="server.agent_status == 'failed' || server.agent_status == 'not_supported'" class="text-gray-500 dark:text-gray-200 sm:text-sm text-xs flex items-center">
                                                        <i class="las la-tachometer-alt text-xl mr-1"></i>
                                                    </span>
                                                    <router-link v-if="server.agent_status !== '1' && server.agent_status !== 'Connected' && server.agent_status !== '0' && server.agent_status !== 'Not Connected' && server.agent_status !== 'failed' && server.agent_status !== 'not_supported'" v-tooltip="'Installation Status'" :to="{
                                                        name: 'ServerInstallation',
                                                        params:{
                                                            organization: currentOrganization.id,
                                                            server: server.id
                                                        }
                                                    }">
                                                        <i class="las la-tachometer-alt text-xl mr-1 text-sa-500"></i>
                                                    </router-link>
                                                </template>
                                                <button @click="reconnectServer(server)" :disabled="reconnecting" class="disabled:opacity-50 disabled:pointer-events-none" v-if="server.agent_status == '0' || server.agent_status == 'Not Connected'" v-tooltip="'Reconnect'">
                                                    <i class="las la-link text-xl text-green-500"></i>
                                                </button>
                                                <template v-if="hasPermission('server','delete')">
                                                    <button
                                                        @click="openServerDeleteConfirmationModal(server)"
                                                        class="flex text-xs items-center"
                                                        v-tooltip="'Disconnect'"
                                                    >
                                                        <i class="las la-trash text-xl text-red-600"></i>
                                                    </button>
                                                </template>
                                            </div>
                                        </td>
                                    </tr>
                                </Table>
                                <template v-else>
                                    <TableSkeleton :heads="5" :rows="5" v-if="refreshing"/>
                                    <Table :head="[]" v-else>
                                        <tr>
                                            <td :colspan="5" class="text-center text-sm px-6 py-4">
                                                {{
                                                    refreshing ? "Loading Data" : "No Data Found"
                                                }}
                                            </td>
                                        </tr>
                                    </Table>
                                </template>
                            </template>
                            <template v-if="currentTab == 'applications'">
                                <Table :head="7" v-if="applications.length > 0">
                                    <tr class="even:bg-gray-50 dark:even:bg-slate-800" v-for="application in applications" :key="application.id">
                                        <td class="whitespace-nowrap py-4 px-4 text-sm">
                                            <template v-if="hasPermission('application', 'dashboard') && currentOrganization && application.agent_status == '1'">
                                                <router-link :to="{name: 'ApplicationPanelIndex', params: {
                                                        organization: currentOrganization.id,
                                                        server: application.server_id,
                                                        application:application.id
                                                    }}">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-tiny font-semibold">Server</span>
                                                        <span class="text-gray-500 dark:text-gray-300">{{ application.server_name }}</span>
                                                        <div class="flex items-center gap-2">
                                                            <country-flag size="small" :country="application.country_code"/>
                                                            <span class="text-gray-500 dark:text-gray-300 block text-xs">
                                                                {{ application.ip }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </router-link>
                                            </template>
                                            <div class="flex flex-col gap-1" v-else>
                                                <span class="text-tiny font-semibold">Server</span>
                                                <span class="text-gray-500 dark:text-gray-300">{{ application.server_name }}</span>
                                                <div class="flex items-center gap-2">
                                                    <country-flag size="small" :country="application.country_code"/>
                                                    <span class="text-gray-500 dark:text-gray-300 block text-xs">
                                                        {{ application.ip }}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 px-4 text-sm">
                                            <template v-if="hasPermission('application', 'dashboard') && currentOrganization && application.agent_status == '1'">
                                                <router-link :to="{name: 'ApplicationPanelIndex', params: {
                                                        organization: currentOrganization.id,
                                                        server: application.server_id,
                                                        application:application.id
                                                    }}">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-tiny font-semibold">Name</span>
                                                        <span class="text-gray-500 dark:text-gray-300">{{application.name}}</span>
                                                        <div class="flex items-center gap-2">
                                                            <i class="fab fa-php text-xl" v-if="application.framework == 'custom'" v-tooltip="'Custom'"></i>
                                                            <img
                                                                v-else
                                                                :src="getIconForFramework(application.framework)"
                                                                class="w-4"
                                                                v-tooltip="capitalizeString(application.framework)"
                                                            />
                                                            <div>
                                                                <span class="text-gray-500 dark:text-gray-300 block text-xs">{{ application.created_by_humans }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </router-link>
                                            </template> 
                                            <div class="flex flex-col gap-1" v-else>
                                                <span class="text-tiny font-semibold">Name</span>
                                                <span class="text-gray-500 dark:text-gray-300">{{application.name}}</span>
                                                <div class="flex items-center gap-2">
                                                    <i class="fab fa-php text-xl" v-if="application.framework == 'custom'" v-tooltip="'Custom'"></i>
                                                    <img
                                                        v-else
                                                        :src="getIconForFramework(application.framework)"
                                                        class="w-4"
                                                        v-tooltip="capitalizeString(application.framework)"
                                                    />
                                                    <div>
                                                        <span class="text-gray-500 dark:text-gray-300 block text-xs">{{ application.created_by_humans }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 px-4 text-sm">
                                            <div class="flex flex-col gap-1">
                                                <span class="text-tiny font-semibold">Application User</span>
                                                <span class="text-sm text-gray-500 dark:text-gray-300 mt-1" v-if="application.system_user && application.system_user.username">
                                                    {{ application.system_user.username }}
                                                </span>
                                                <span class="text-sm text-gray-500 dark:text-gray-300 mt-1" v-else>
                                                    {{ application.system_user }}
                                                </span>
                                                <div class="text-sm text-gray-500 dark:text-gray-300">
                                                    {{application.primary_domain}}
                                                    <a :href="'http://' + application.primary_domain" target="_blank" class="text-sa-500">
                                                        <i class="las la-external-link-alt"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 px-4 text-sm text-center">
                                            <div class="flex flex-col gap-4">
                                                <span class="text-tiny font-semibold">PHP Version</span>
                                                <span class="text-gray-500 dark:text-gray-300" v-if="application.php_version == 8">8.0</span>
                                                <span class="text-gray-500 dark:text-gray-300" v-else-if="application.php_version == 7">7.0</span>
                                                <span class="text-gray-500 dark:text-gray-300" v-else-if="application.php_version == 0 || application.php_version == null">-</span>
                                                <span class="text-gray-500 dark:text-gray-300" v-else>{{ application.php_version }}</span>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 px-4 text-sm text-center">
                                            <div class="flex flex-col gap-3.5">
                                                <span class="text-tiny font-semibold">SSL</span>
                                                <i class="las la-lock text-green-500 text-base" v-tooltip="'SSL Installed'" v-if="application.ssl_type"></i>
                                                <i class="las la-lock-open text-red-500 text-base" v-tooltip="'SSL Not Installed'" v-else></i>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 px-4 text-sm text-center">
                                            <div class="flex flex-col gap-3.5">
                                                <span class="text-tiny font-semibold">Size (MB)</span>
                                                <span class="text-gray-500 dark:text-gray-300">{{ application.size.toFixed(2) }}</span>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 px-4 text-sm text-center">
                                            <div class="flex flex-col gap-3.5">
                                                <span class="text-tiny font-semibold">WP Auto Login</span>
                                                <div>
                                                    <button v-tooltip="`WP Auto Login`" @click="$refs.wpMagicLogin.fetchWpAdmins(application)" v-if="application.framework=='wordpress' && hasPermission('application', 'wp-login')">
                                                        <span class="material-symbols-outlined text-xl text-green-600 hover:text-green-700">
                                                            login
                                                        </span>
                                                    </button>
                                                    <span v-else>-</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 px-4 text-sm">
                                            <div class="flex gap-4 justify-center items-center">
                                                <template v-if="hasPermission('application', 'dashboard') && currentOrganization">
                                                    <router-link v-tooltip="'Application Dashboard'" v-if="application.agent_status == '1'" :to="{name: 'ApplicationPanelIndex', params: {
                                                        organization: currentOrganization.id,
                                                        server: application.server_id,
                                                        application:application.id
                                                    }}">
                                                        <i class="las la-tachometer-alt text-sa-500 dark:text-sa-500 text-xl"></i>
                                                    </router-link>
                                                    <i class="las la-tachometer-alt text-gray-500 dark:text-gray-300 text-xl" v-else></i>
                                                </template>
                                                <router-link v-tooltip="'PHP Settings'" v-if="hasPermission('application', 'php-settings') && hasPermission('application', 'dashboard') && currentOrganization && application.web_server !== 'mern'" :to="{name: 'ApplicationPanelPHPSettings', params: {organization: currentOrganization.id, server: application.server_id, application:application.id}}">
                                                    <i class="fab fa-php text-xl"></i>
                                                </router-link>
                                                <button v-if="application.agent_status == '1'" @click="sendCredentials(application.id, application.server_id)"><i class="las la-envelope text-lg" v-tooltip="`SFTP Credentials`"></i></button>
                                                <i class="las la-envelope text-lg text-gray-500" v-else></i>
                                                <template v-if="hasPermission('application', 'delete')">
                                                    <button v-if="application.agent_status == '1'" @click="openDeleteConfirmationModal(application)"><i class="las la-trash-alt text-lg text-red-500" v-tooltip="`Delete`"></i></button>
                                                    <i class="las la-trash-alt text-lg text-gray-500" v-else></i>
                                                </template>
                                            </div>
                                        </td>
                                    </tr>
                                </Table>
                                <template v-else>
                                    <TableSkeleton :rows="8" v-if="applicationRefreshing"/>
                                    <Table :head="[]" v-else>
                                        <tr>
                                            <td colspan="8" class="text-center text-sm px-6 py-4">
                                                {{
                                                    applicationRefreshing ? "Please Wait" : "No Data Found"
                                                }}
                                            </td>
                                        </tr>
                                    </Table>
                                </template>
                            </template>
                        </div>
                    </template>
                </div>
                <div class="mt-7">
                    <h2 class="font-semibold text-xl dark:text-gray-300">Docs</h2>
                    <div class="bg-gray-50 dark:bg-gray-700 p-5 border-l-4 border-sa-500 mt-5">
                        <div class="grid xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5">
                            <div class="xl:col-span-3 col-span-1 place-self-center">
                                <h2 class="text-xl font-semibold text-center dark:text-gray-300">Instant Links</h2>
                                <div class="grid md:grid-cols-2 gap-5 mt-8 mb-2">
                                    <a href="https://serveravatar.com/blog/" target="_blank" class="group">
                                        <div class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3">
                                            <div class="text-center text-tiny">
                                                <span class="dark:text-gray-300">Blog</span>
                                                <span class="material-symbols-outlined -rotate-45 text-sa-500 group-hover:text-sa-600 text-lg align-middle ml-1">
                                                    link
                                                </span>
                                            </div>
                                            <p class="text-gray-500 text-xs mt-1 text-center">"Summarize all Blogs briefly."</p>
                                        </div>
                                    </a>
                                    <a href="https://serveravatar.com/api-docs/" target="_blank" class="group" >
                                        <div class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3">
                                            <div class="text-center text-tiny">
                                                <span class="dark:text-gray-300">API Documentation</span>
                                                <span class="material-symbols-outlined -rotate-45 text-sa-500 group-hover:text-sa-600 text-lg align-middle ml-1">
                                                    link
                                                </span>
                                            </div>
                                            <p class="text-gray-500 text-xs mt-1 text-center">"Summarize API Documentation briefly."</p>
                                        </div>
                                    </a>
                                    <a href="https://serveravatar.com/docs/intro" target="_blank" class="group" >
                                        <div class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3">
                                            <div class="text-center text-tiny">
                                                <span class="dark:text-gray-300">Product Docs</span>
                                                <span class="material-symbols-outlined -rotate-45 text-sa-500 group-hover:text-sa-600 text-lg align-middle ml-1">
                                                    link
                                                </span>
                                            </div>
                                            <p class="text-gray-500 text-xs mt-1 text-center">"Summarize Product Documentation briefly."</p>
                                        </div>
                                    </a>
                                    <a href="https://serveravatar.com/deployments" target="_blank" class="group">
                                        <div class="bg-white dark:bg-gray-800 border dark:border-gray-600 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 rounded-md px-7 py-3">
                                            <div class="text-center text-tiny">
                                                <span class="dark:text-gray-300">Deployment Tutorials</span>
                                                <span class="material-symbols-outlined -rotate-45 text-sa-500 group-hover:text-sa-600 text-lg align-middle ml-1">
                                                    link
                                                </span>
                                            </div>
                                            <p class="text-gray-500 text-xs mt-1 text-center">"Summarize all Deployment Tutorials briefly."</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="xl:col-span-2 col-span-1 place-self-center">
                                <img src="/images/Light_doc.png" class="w-64" v-if="!dark"/>
                                <img src="/images/Dark_Doc.png" class="w-64" v-else/>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>

        <WpMagicLogin ref="wpMagicLogin"></WpMagicLogin>

        <Modal
            :customClass="['xl:max-w-4xl sm:max-w-2xl']"
            :modalTitle="createType == 'application' ? 'Create Application' : 'Create Database'"
            :openModal="showModal"
            @closeModal="closeModal()"
        >
            <template v-if="allServers.length">
                <label class="dark:text-white text-tiny after:content-['*'] after:ml-0.5 after:text-red-500">Select a Server</label>
                <CustomScrollbar class="max-h-96 min-h-[2.5rem] mt-3">
                    <RadioGroup v-model="currentServer">
                        <div class="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-3 gap-5">
                            <template v-for="server in allServers" :key="server.id"> 
                                <RadioGroupOption
                                    as="template"
                                    v-if="server.agent_status == '1'"
                                    :value="server.id"
                                    v-slot="{ checked }"
                                    @click="createAppOrDb"
                                >
                                    <div
                                        :class="[
                                           checked ? 'border-sa-500' : '',
                                            'relative cursor-pointer rounded-lg border-2 dark:border-gray-500 bg-white dark:bg-gray-800 p-3 shadow focus:outline-none',
                                        ]"
                                    >
                                        <div class="">
                                            <span class="flex flex-col max-w-full">
                                                <RadioGroupLabel
                                                    as="p"
                                                    class="text-tiny font-medium truncate text-gray-900 dark:text-white"
                                                    v-tooltip="server.name"
                                                >{{ server.name }}
                                                </RadioGroupLabel>
                                                <RadioGroupLabel
                                                    as="span"
                                                    class="text-sm font-medium mt-1 text-gray-500 dark:text-white"
                                                >({{ server.ip }})
                                                </RadioGroupLabel>
                                            </span>
                                        </div>
                                        <CheckCircleIcon
                                            :class="[ !checked ? 'invisible' : '', 'h-4 w-4 text-sa-500 absolute top-2 right-2']"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </RadioGroupOption>
                            </template>
                        </div>
                    </RadioGroup>
                </CustomScrollbar>
            </template>
            <template v-else>
                <div class="bg-blue-100 text-blue-500 text-tiny rounded-md px-4 py-3">
                    <p>
                        You currently don't have any servers connected to your account. Please connect at least one server to create {{ createType == 'application' ? 'an application' : 'a database' }}.
                    </p>
                </div>
                <div class="mt-3" v-if="hasPermission('server', 'create') && user && user.email_verified_at && this.currentOrganization">
                    <router-link
                        :to="{
                            name: 'ServerConnect',
                            params: {
                                organization: currentOrganization.id
                            }
                        }"
                        class="bg-sa-500 text-white rounded px-6 py-2 text-sm h-fit"
                    >
                        Connect a Server
                    </router-link>
                </div>
            </template>
        </Modal>

        <Confirmation
            confirmationTitle="Disconnect Server"
            submitBtnTitle="Yes, I'm sure"
            :showLoader="showConfirmLoader"
            :show="showConfirmation"
            @confirm="disconnectServerFn(true)"
            @closeModal="closeServerDeleteConfirmationModal"
        >
            <template #icon>
                <i
                    class="fas fa-warning h-6 w-6 text-xl text-red-600 text-center flex items-center justify-center"
                    aria-hidden="true"
                ></i>
            </template>
            <template #content>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    Are you sure you want to disconnect this server?
                </p>
                <div class="flex flex-col" v-if="disconnectServer">
                    <div class="">
                        <div class="py-2 inline-block min-w-full">
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                    <tbody>
                                        <tr class="bg-white dark:bg-gray-800">
                                            <td class="p-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">Server Name:</td>
                                            <td class="text-sm text-gray-900 dark:text-gray-300 font-bold p-2 whitespace-nowrap">
                                                {{disconnectServer.name}}
                                            </td>
                                        </tr>
                                        <tr class="bg-white dark:bg-gray-800">
                                            <td class="p-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">Server IP:</td>
                                            <td class="text-sm text-gray-900 dark:text-gray-300 font-bold p-2 whitespace-nowrap">
                                                {{disconnectServer.ip}}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="mb-3 dark:border-gray-600"/>
                <p class="text-sm text-gray-600 dark:text-gray-400" v-if="!hosted">
                    Once the server is disconnected from {{ siteSettings.name }}, You cannot re-connect it without the help of support!
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400" v-else>
                    Once the server is disconnected from {{ siteSettings.name }}, This action will remove all data on the server, and it cannot be recovered. Please confirm your decision to proceed with the disconnection process.
                </p>
                <hr class="my-3 dark:border-gray-600"/>
                <div class="mt-3 flex" v-if="disconnectServer && disconnectServer.provider_name !== 'custom' && !hosted">
                    <input
                        type="checkbox"
                        id="receive_credential"
                        v-model="deleteProvider"
                        class="form-checkbox w-3 h-3 rounded text-sa-500 hover:text-sa-600 dark:border-white/30 dark:bg-white/5 dark:checked:bg-sa-500 mr-1 mt-1 focus:ring-0 focus:outline-none"
                    />
                    <label
                        for="receive_credential"
                        class="ml-2 text-sm dark:text-white"
                        >Would you like to delete this server from Cloud Service Provider?</label
                    >
                </div>
            </template>
        </Confirmation>

        <Confirmation
            :customClass="['overflow-visible']"
            confirmationTitle="Delete Application"
            submitBtnTitle="Yes, I'm sure"
            :showLoader="showAppConfirmLoader"
            :show="showAppConfirmation"
            @confirm="deleteApplicationFn(deleteApplication.server_id, deleteApplication.id, database_ids)"
            @closeModal="closeConfirmationModal"
        >
            <template #icon>
                <i
                    class="fas fa-warning h-6 w-6 text-xl text-red-600 text-center flex items-center justify-center"
                    aria-hidden="true"
                ></i>
            </template>
            <template #content>
                <p class="text-sm text-gray-600 dark:text-gray-400" v-if="deleteApplication">
                    Are you sure you want to delete this application?
                </p>
                <div class="flex flex-col" v-if="deleteApplication">
                    <div class="">
                        <div class="py-2 inline-block min-w-full">
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                    <tbody>
                                        <tr class="bg-white dark:bg-gray-800 border">
                                            <td class="p-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">Application Name:</td>
                                            <td class="text-sm text-gray-900 dark:text-gray-300 font-bold p-2 whitespace-nowrap">
                                                {{deleteApplication.name}}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-2" v-if="databases.length">
                    <label class="text-sm text-gray-600 dark:text-gray-400 mb-1">Choose the database you wish to delete:</label>
                    <multiselect
                        ref="deleteDb"
                        :class="[dark ? 'custom-css' : '']"
                        v-model="selectedDatabases"
                        :options="databases"
                        :close-on-select="false"
                        :clear-on-select="false"
                        :multiple="true"
                        :searchable="true"
                        selectLabel="Select"
                        deselectLabel="Remove"
                        placeholder="Select a Database"
                        label="name"
                        track-by="id"
                    >
                        <template #noOptions>
                            No Database Found.
                        </template>
                        <template #noResult>
                            No Database Found.
                        </template>
                    </multiselect>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400" v-if="deleteApplication">
                    <template v-if="databases.length">
                        Please be aware that once you delete the application and databases, they cannot be restored. Take this into consideration before proceeding with the deletion.
                    </template>
                    <template v-else>
                        Deleting the application will result in the permanent removal of its files. However, the database connected to this application will not be deleted automatically. If you wish to remove the database as well, you can do so manually from the database list. Please make sure to consider this before proceeding with the application deletion.
                    </template>
                </p>
            </template>
        </Confirmation>
    </DefaultLayout>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { theme } from "@/store/theme";
import { mapState } from "pinia";
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { CheckCircleIcon } from "@heroicons/vue/20/solid";
import { CheckIcon } from "@heroicons/vue/24/solid";
import CloudLogos from '@/CloudProviderLogos'
import CountryFlag from "vue-country-flag-next";
import AppMixin from '@/mixins/application'
import DatabaseMixin from '@/mixins/database'
import ServerMixin from '@/mixins/server'
import Multiselect from "vue-multiselect";
import WpMagicLogin from '@/components/application/WpMagicLink.vue'

export default {
    mixins: [AppMixin, DatabaseMixin, ServerMixin],
    data(){
        return{
            breadcrumb: {
                pages : [
                    {name: 'Dashboard', href: '/', current: true},
                ],
                icon: 'las la-tachometer-alt'
            },
            CloudLogos: CloudLogos,
            currentTab: 'servers',
            createType: '',
            currentServer: '',
            allServers: [],
            // servers: [],
            applications: [],
            showModal: false,
            disconnectServer: null,
            showConfirmLoader: false,
            showConfirmation: false,
            deleteProvider: false,
            refreshing: false,
            applicationRefreshing: false,
            databases: [],
            database_ids: [],
            selectedDatabases: [],
            showAppConfirmLoader: false,
            showAppConfirmation: false,
            deleteApplication: null,
            reconnecting: false,
            essentialPoints: {
                application: false,
                application_count: 0,
                cloudPlatformIntegration: false,
                cloudStorageIntegration: false,
                database_count: 0,
                gitIntegration: false,
                onboarding_skipped: false,
                server: false,
                server_count: 0
            }
        }
    },
    components: {
        Multiselect, CountryFlag, RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, CheckCircleIcon, CheckIcon,
        Menu, MenuButton, MenuItem, MenuItems,ChevronDownIcon,WpMagicLogin
    },
    created(){
        this.fetchOnboardingDetails()
        if(this.currentOrganization && this.hasPermission('dashboard', 'servers')){
            this.fetchAllServer()
            // this.getServerList()
        }
        if(this.currentOrganization && this.hasPermission('dashboard', 'applications')){
            this.getApplications()
        }
    },
    watch: {
        selectedDatabases(val){
            this.database_ids = val.map(value => value.id)
        },
        'memberPermissions': {
            handler(val){
                if(this.currentOrganization){
                    this.fetchOnboardingDetails()
                    if(this.hasPermission('dashboard', 'servers')){
                        this.fetchAllServer()
                        // this.getServerList()
                    }
                    if(this.hasPermission('dashboard', 'applications')){
                        this.getApplications()
                    }
                }
            }
        },
    },
    computed: {
        authStore(){
            return useAuthStore()
        },
        user(){
            return this.authStore.user
        },
        currentOrganization(){
            return this.authStore.currentOrganization
        }, 
        memberPermissions(){
            return this.authStore.memberPermissions
        },
        // ...mapState(useAuthStore, ["user", "currentOrganization", "memberPermissions"]),
        ...mapState(theme, ["dark"])
    },
    methods: {
        openModal(type){
            this.createType = type
            this.showModal = true
        },
        closeModal(){
            this.createType = ''
            this.showModal = false
        },
        providerLogo(provider){
            return this.CloudLogos[provider].logo;
        },
        openServerDeleteConfirmationModal(server) {
            this.disconnectServer = server;
            this.showConfirmation = !this.showConfirmation;
        },
        closeServerDeleteConfirmationModal() {
            this.showConfirmLoader = false;
            this.showConfirmation = false;
            this.disconnectServer = null;
        },
        openDeleteConfirmationModal(app) {
            if(this.hasPermission('server', 'database-list') && this.hasPermission('database', 'delete')){
                this.fetchAllDatabase(app.server_id)
            }
            this.deleteApplication = app;
            this.showAppConfirmation = !this.showAppConfirmation;
        },
        closeConfirmationModal() {
            this.databases = []
            this.database_ids = []
            this.selectedDatabases = []
            this.showAppConfirmLoader = false;
            this.showAppConfirmation = false;
            this.deleteApplication = null;
        },
        createAppOrDb(){
            if(this.currentServer){
                setTimeout(() => {
                    let server = this.allServers.find(server => server.id == this.currentServer)
                    if(this.createType == 'application'){
                        this.$router.push({
                            name: 'ServerPanelCreateApplication',
                            params: {
                                organization: server.organization_id,
                                server: this.currentServer
                            }
                        })
                    }else{
                        this.$router.push({
                            name: 'ServerPanelCreateDatabase',
                            params: {
                                organization: server.organization_id,
                                server: this.currentServer
                            }
                        })
                    }
                }, 300)
            }
        },
        async fetchOnboardingDetails(){
            let url = `/organizations/${this.currentOrganization.id}/essential-point`;
            await this.$axios.get(`${url}`)
            .then(({ data }) => {
                this.essentialPoints = data.essentialPoints
            })
            .catch(({response:{data}}) => {
                this.$toast.error(data.message);
            })
        },
        async skip(){
            let url = `/organizations/${this.currentOrganization.id}/onboarding-skip`;
            await this.$axios.get(`${url}`)
            .then(({ data }) => {
                this.fetchOnboardingDetails()
            })
            .catch(({response:{data}}) => {
                this.$toast.error(data.message);
            })
        },
        async fetchAllServer(){
            let url = `/organizations/${this.currentOrganization.id}/servers`;
            await this.$axios.get(`${url}`)
            .then(({ data }) => {
                this.allServers = data.servers;
            })
            .catch(({response:{data}}) => {
                this.$toast.error(data.message);
            })
        },
        // async getServerList() {
        //     this.refreshing = true
        //     let url = `/organizations/${this.currentOrganization.id}/servers?`;

        //     await this.$axios.get(`${url}&pagination=1&per_page=5`).then(({ data }) => {
        //         this.servers = data.servers.data;
        //     }).catch(({response:{data}}) => {
        //         this.$toast.error(data.message);
        //         this.servers = [];
        //     }).finally(() => {
        //         this.refreshing = false
        //     })
        // },
        async getApplications(){
            this.applicationRefreshing = true
            let url = `/organizations/${this.currentOrganization.id}/applications?pagination=0&per_page=5`;
            await this.$axios.get(`${url}`)
            .then(({ data }) => {
                this.applications = data.applications.data;
            }).catch(({ response: { data } }) => {
                this.$toast.error(data.message);
            }).finally(() => {
                this.applicationRefreshing = false
            })
        }
    }
}
</script>