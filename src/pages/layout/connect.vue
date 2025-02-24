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
          <div class="flex items-center">
            <span
              class="las la-server text-xl ml-5 m-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-600"
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
            class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-600 font-medium"
          >
            <h1>Connect</h1>
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
            class="bg-white dark:bg-gray-800 dark:text-white rounded-md p-5 mb-10"
          >
            <div class="flex items-center gap-3">
              <h1 class="font-medium text-lg">Connect a Server</h1>
              <img src="/public/serverIcon.png" class="w-10" alt="" />
            </div>
            <div>
              <div class="grid grid-cols-6 gap-5 h-auto mt-5">
                <div
                  @click="setActiveSection('custom')"
                  class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
                  :class="{
                    'border-2 border-blue-600 bg-blue-100 dark:bg-gray-800':
                      activeSection === 'custom',
                  }"
                >
                  <img
                    src="/public/customIcon.png"
                    class="min-w-7 w-7 h-auto"
                  />
                  <h1>Custom</h1>
                </div>
                <div
                  v-for="provider in enabledProviders"
                  :key="provider.id"
                  @click="setActiveSection(provider)"
                  class="border rounded-md cursor-pointer flex items-center capitalize gap-4 p-4"
                  :class="{
                    'border border-blue-600 bg-blue-100 dark:bg-gray-800':
                      activeSection === provider,
                  }"
                >
                  <img
                    :src="CloudLogo[provider].logo"
                    class="min-w-7 w-7 h-auto"
                  />
                  <h1>
                    {{
                      provider == "lightsail" ? "Amazon Lightsail" : provider
                    }}
                  </h1>
                </div>
              </div>

              <div v-if="activeSection === 'custom'">
                <div>
                  <div class="mt-5 font-medium">
                    <h1>Connect with IP and Password</h1>
                  </div>
                  <div
                    class="bg-[#FAFAFB] dark:bg-gray-700 border xl:w-3/4 dark:border-0 rounded-lg p-4 mt-5"
                  >
                    <div class="grid grid-cols-2 gap-5">
                      <div>
                        <label
                          for="name"
                          class="label after:content-['*'] after:ml-0.5 after:text-red-500"
                          >Server Name</label
                        >
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Niche Site / Frontend"
                        />
                        <small
                          class="text-red-500 error_message"
                          id="name_message"
                        ></small>
                        <div class="relative flex items-start mt-2">
                          <div class="flex h-5 items-center">
                            <input
                              id="root_password_available"
                              true-value="false"
                              false-value="true"
                              aria-describedby="root_password_available-description"
                              name="root_password_available"
                              type="checkbox"
                              class="h-4 w-4 rounded border-slate-300 dark:border-white/10 dark:bg-white/5 dark:checked:bg-sa-500 text-sa-500 hover:text-sa-600 focus:ring-0"
                            />
                          </div>
                          <div class="ml-3 text-sm">
                            <label
                              for="root_password_available"
                              class="dark:text-white"
                              >I don't have an IP address and root
                              password.</label
                            >
                          </div>
                        </div>
                        <div class="mt-5">
                          <label
                            for="cleanupServerOption"
                            class="label after:content-['*'] after:ml-0.5 after:text-red-500"
                            >Cleanup Server</label
                          >
                          <div class="space-y-4">
                            <div class="flex">
                              <input
                                id="cleanupServer"
                                unchecked-value="0"
                                name="notification-method"
                                type="radio"
                                checked=""
                                class="h-4 w-4 mt-1 border-slate-300 text-sa-600 focus:ring-sa-600"
                                value="1"
                              />
                              <label
                                for="cleanupServer"
                                class="ml-3 block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                                >Yes, If you encounter any conflicting packages,
                                please proceed to remove them.</label
                              >
                            </div>
                            <div class="flex">
                              <input
                                id="dontclean"
                                unchecked-value="1"
                                name="notification-method"
                                type="radio"
                                class="h-4 w-4 mt-1 border-slate-300 text-sa-600 focus:ring-sa-600"
                                value="0"
                              /><label
                                for="dontclean"
                                class="ml-3 block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                                >No, Don't Cleanup My Server.</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <label
                            for="ip"
                            class="label after:content-['*'] after:ml-0.5 after:text-red-500"
                            >Enter IP Address (IPv4)</label
                          >
                          <input
                            type="text"
                            name="ip"
                            id="ip"
                            class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="12.23.34.45"
                          />
                          <small
                            class="text-red-500 error_message"
                            id="ip_message"
                          ></small>
                        </div>
                        <div class="mt-3">
                          <label
                            for="root_password"
                            class="label after:content-['*'] after:ml-0.5 after:text-red-500"
                            >Enter Root Password</label
                          >
                          <input
                            type="text"
                            name="root_password"
                            id="root_password"
                            class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="!@#45567**)^#"
                          />
                          <small
                            class="text-red-500 error_message"
                            id="root_password_message"
                          ></small>
                        </div>
                        <div class="mt-3">
                          <label
                            for="ssh_port"
                            class="label after:content-['*'] after:ml-0.5 after:text-red-500"
                            >Enter SSH Port</label
                          >
                          <input
                            type="text"
                            name="ssh_port"
                            id="ssh_port"
                            class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="22"
                          />
                          <small
                            class="text-red-500 error_message"
                            id="ssh_port_message"
                          ></small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="mt-6 bg-[#EDF1F5] dark:bg-blue-600/10 rounded-lg border dark:border-blue-600/10 px-5 py-3"
                  >
                    <div class="md:flex items-center justify-between gap-5">
                      <div class="flex-1">
                        <h2 class="dark:text-gray-300 font-semibold">
                          Requirement
                        </h2>
                        <p
                          class="text-gray-700 dark:text-gray-300 text-sm mt-1"
                        >
                          Here is a list of things you should have before
                          attempting to connect with ServerAvatar:
                        </p>
                        <ol class="mt-5 text-sm">
                          <li
                            class="text-gray-700 dark:text-gray-300 flex gap-1"
                          >
                            <span
                              class="material-symbols-outlined text-blue-500"
                              >check_circle</span
                            >
                            <p>
                              <b>Accessible Port: </b> If your cloud platform or
                              server provider provides a firewall, enable
                              incoming connections on port 43210.
                            </p>
                          </li>
                          <li
                            class="mt-3 text-gray-700 dark:text-gray-300 flex gap-1"
                          >
                            <span
                              class="material-symbols-outlined text-blue-500"
                              >check_circle</span
                            >
                            <p>
                              <b>Public IP Address:</b> A server should have a
                              public IP. If the IP changes, you can reconnect
                              your server by updating the IP address in
                              ServerAvatar.
                            </p>
                          </li>
                          <li
                            class="mt-3 text-gray-700 dark:text-gray-300 flex gap-1"
                          >
                            <span
                              class="material-symbols-outlined text-blue-500"
                              >check_circle</span
                            >
                            <p>
                              <b>Supported OS:</b> Ubuntu 20.04 or Ubuntu 22.04
                              or Ubuntu 24.04.
                            </p>
                          </li>
                          <li
                            class="mt-3 text-gray-700 dark:text-gray-300 flex gap-1"
                          >
                            <span
                              class="material-symbols-outlined text-blue-500"
                              >check_circle</span
                            >
                            <p>
                              <b>No Conflicts:</b> If your server is already
                              hosting a website, you cannot connect it with
                              ServerAvatar. You have to connect a fresh server
                              with a clean Ubuntu OS only.
                            </p>
                          </li>
                        </ol>
                        <p
                          class="text-gray-700 dark:text-gray-300 text-sm mt-5"
                        >
                          Browse our
                          <a
                            href="https://serveravatar.com/docs/server-management/installation/direct-method"
                            target="_blank"
                            class="text-blue-500"
                            >Documentation</a
                          >
                          for more details.
                        </p>
                      </div>
                      <div>
                        <img src="/public/guide.png" class="md:mx-0 mx-auto" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p
                      class="mt-6 text-base dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                      Select a Tech Stack
                    </p>
                  </div>

                  <div
                    class="mt-4 grid grid-cols-1 gap-y-6 xl:grid-cols-4 sm:grid-cols-2 sm:gap-x-4"
                    role="none"
                  >
                    <div
                      @click="handleSelection('Apache')"
                      id="Apache"
                      :class="[
                        'relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none',
                        selectedOS1 === 'Apache'
                          ? 'border-blue-500 bg-blue-50 dark:bg-gray-800'
                          : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600',
                      ]"
                    >
                      <div
                        class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5"
                      >
                        <div>
                          <span
                            class="block text-4xl font-medium text-gray-900 dark:text-white"
                          >
                            <img
                              src="/public/apache.png"
                              class="h-auto mx-auto w-10"
                            />
                          </span>
                          <span
                            class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white"
                            >Apache</span
                          >
                        </div>
                        <div>
                          <ul class="list-disc pl-4 text-tiny dark:text-white">
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              Apache
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              PHP (From 7.2 to 8.3)
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              PHP-FPM Configuration
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              MySQL/MariaDB
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              Redis
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      @click="handleSelection('Nginx')"
                      :class="[
                        'relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none',
                        selectedOS1 === 'Nginx'
                          ? 'border-blue-500 bg-blue-50 dark:bg-gray-800'
                          : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600',
                      ]"
                    >
                      <div
                        class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5"
                      >
                        <div>
                          <span
                            class="block text-4xl font-medium text-gray-900 dark:text-white"
                          >
                            <img
                              src="/public/nginx.png"
                              class="h-auto mx-auto w-10"
                            />
                          </span>
                          <span
                            class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white"
                            >Nginx</span
                          >
                        </div>
                        <div>
                          <ul class="list-disc pl-4 text-tiny dark:text-white">
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              Nginx
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              PHP (From 7.2 to 8.3)
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              PHP-FPM Configuration
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              MySQL/MariaDB
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              Redis
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      @click="handleSelection('OLS')"
                      :class="[
                        'relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none',
                        selectedOS1 === 'OLS'
                          ? 'border-blue-500 bg-blue-50 dark:bg-gray-800'
                          : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600',
                      ]"
                    >
                      <div
                        class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5"
                      >
                        <div>
                          <span
                            class="block text-4xl font-medium text-gray-900 dark:text-white"
                          >
                            <img
                              src="/public/ols.png"
                              class="h-auto mx-auto w-10"
                            />
                          </span>
                          <span
                            class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white"
                            >OLS</span
                          >
                        </div>
                        <div>
                          <ul class="list-disc pl-4 text-tiny dark:text-white">
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              OpenLiteSpeed
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              LSPHP From 7.4 to 8.3
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              MySQL/MariaDB
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              Redis
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      @click="handleSelection('Node Stack')"
                      :class="[
                        'relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none',
                        selectedOS1 === 'Node Stack'
                          ? 'border-blue-500 bg-blue-50 dark:bg-gray-800'
                          : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600',
                      ]"
                    >
                      <div
                        class="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md"
                      >
                        <h1>BETA</h1>
                      </div>
                      <div
                        class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5"
                      >
                        <div>
                          <span
                            class="block text-4xl font-medium text-gray-900 dark:text-white"
                          >
                            <img
                              src="/public/node.png"
                              class="h-auto mx-auto w-28"
                            />
                          </span>
                          <span
                            class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900 dark:text-white"
                            >Node Stack</span
                          >
                        </div>
                        <div>
                          <ul class="list-disc pl-4 text-tiny dark:text-white">
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              Nginx
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              MongoDB
                            </li>
                            <li
                              class="py-1.5 text-sm text-gray-500 dark:text-gray-300"
                            >
                              Redis
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p
                    class="mt-6 text-base dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Select a Database
                  </p>
                </div>
                <div>
                  <div>
                    <div
                      class="mt-4 grid grid-cols-1 gap-y-6 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-4"
                    >
                      <div
                        @click="handleSelection1('mysql')"
                        :class="[
                          'relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none',
                          selectedOS2 === 'mysql'
                            ? 'border-blue-500 bg-blue-50 dark:bg-gray-800'
                            : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600',
                        ]"
                      >
                        <span class="flex justify-center items-center h-full">
                          <span
                            class="block text-4xl font-medium text-gray-900 dark:text-white"
                          >
                            <img src="/public/mysql.png" class="h-auto w-32" />
                          </span>
                        </span>
                      </div>

                      <div
                        @click="handleSelection1('mariadb')"
                        :class="[
                          'relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none',
                          selectedOS2 === 'mariadb'
                            ? 'border-blue-500 bg-blue-50 dark:bg-gray-800'
                            : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600',
                        ]"
                      >
                        <span class="flex justify-center items-center h-full">
                          <span
                            class="block text-4xl font-medium text-gray-900 dark:text-white"
                          >
                            <img
                              src="/public/mariadb.png"
                              class="h-auto w-32"
                            />
                          </span>
                        </span>
                      </div>

                      <div
                        @click="handleSelection1('mongodb')"
                        :class="[
                          'relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none',
                          selectedOS2 === 'mongodb'
                            ? 'border-blue-500 bg-blue-50 dark:bg-gray-800'
                            : 'bg-white dark:bg-gray-800 border-slate-300 dark:border-gray-600',
                        ]"
                      >
                        <span class="flex justify-center items-center h-full">
                          <span
                            class="block text-4xl font-medium text-gray-900 dark:text-white"
                          >
                            <img
                              src="/public/mongodb.png"
                              class="h-auto w-32"
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="mt-5">
                    <label
                      for="nodejs_install"
                      class="text-base dark:text-white"
                      >Install Node.js</label
                    >
                  </div>

                  <div
                    class="bg-[#FAFAFB] dark:bg-gray-700 sm:w-3/4 xl:w-3/5 dark:border-0 border border-slate-300 dark:border-gray-600 dark:text-white sm:rounded-lg mt-3"
                  >
                    <div class="p-4">
                      <div class="flex items-center">
                        <label class="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            class="sr-only peer"
                          />
                          <div
                            class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 dark:bg-gray-500 peer-checked:bg-blue-600"
                          ></div>
                        </label>
                        <div class="text-sm text-gray-500 dark:text-white ml-5">
                          <p id="headlessui-description-v-1-5-44">
                            Enabling toggle button will automatically install
                            the latest LTS (Long-Term Support) version of
                            Node.js on your server.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="flex items-center mt-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white w-fit p-1.5"
                  >
                    <button class="px-4">
                      Connect Now <i class="las la-angle-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="mt-5">
                <label
                  for="name"
                  class="font-medium label after:content-['*'] after:ml-0.5 after:text-red-500"
                  >Choose a Service Provider Account</label
                >
              </div>
              <div
                v-if="activeSection === 'digitalocean'"
                class="grid grid-cols-6 gap-5 mt-5"
              >
                <div
                  v-for="value in digitalocean"
                  :key="value.id"
                  @click="showDetails(value)"
                  class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
                  :class="{
                    'bg-blue-100 border-blue-500 dark:bg-gray-800':
                      selectedItem === value,
                  }"
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
                    <div
                      class="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3"
                    >
                      <h2 class="text-lg font-bold mb-4">Amazon Lightsail</h2>
                      <hr class="mb-5" />
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Name</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
                        class="border rounded-md p-2 w-full mt-2"
                      />
                      <p class="text-gray-500 text-xs mt-3 mb-5">
                        Use this to recognise your credentials if you have more
                        than one account per provider.
                      </p>
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Access Key</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
                        class="border rounded-md p-2 w-full mt-2 mb-5"
                      />
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Access Secret</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
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
                </div>
                <a
                  href="https://cloud.digitalocean.com/registrations/new"
                  target="_blank"
                  class="relative cursor-pointer rounded-lg flex justify-center items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none"
                >
                  <div class="block text-tiny font-medium text-white w-full">
                    <div class="flex items-center gap-3 text-sa-500">
                      <div
                        class="flex justify-center items-center px-1.5 rounded text-blue-500"
                      >
                        <i class="las la-user-plus"></i>
                      </div>
                      <span class="text-blue-500"> Create Account </span>
                    </div>
                  </div>
                </a>
              </div>

              <div
                v-if="activeSection === 'lightsail'"
                class="grid grid-cols-6 gap-5 mt-5"
              >
                <div
                  v-for="value in lightsail"
                  :key="value.id"
                  @click="showDetails(value)"
                  class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
                  :class="{
                    'bg-blue-100 border-blue-500 dark:bg-gray-800':
                      selectedItem === value,
                  }"
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
                    <div
                      class="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3"
                    >
                      <h2 class="text-lg font-bold mb-4">Amazon Lightsail</h2>
                      <hr class="mb-5" />
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Name</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
                        class="border rounded-md p-2 w-full mt-2"
                      />
                      <p class="text-gray-500 text-xs mt-3 mb-5">
                        Use this to recognise your credentials if you have more
                        than one account per provider.
                      </p>
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Access Key</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
                        class="border rounded-md p-2 w-full mt-2 mb-5"
                      />
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Access Secret</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
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

              <div
                v-if="activeSection === 'vultr'"
                class="grid grid-cols-6 gap-5 mt-5"
              >
                <div
                  v-for="value in vultr"
                  :key="value.id"
                  @click="showDetails(value)"
                  class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
                  :class="{
                    'bg-blue-100 border-blue-500 dark:bg-gray-800':
                      selectedItem === value,
                  }"
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
                    <div
                      class="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3"
                    >
                      <h2 class="text-lg font-bold mb-4">Amazon Lightsail</h2>
                      <hr class="mb-5" />
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Name</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
                        class="border rounded-md p-2 w-full mt-2"
                      />
                      <p class="text-gray-500 text-xs mt-3 mb-5">
                        Use this to recognise your credentials if you have more
                        than one account per provider.
                      </p>
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Access Key</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
                        class="border rounded-md p-2 w-full mt-2 mb-5"
                      />
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Access Secret</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
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

              <div
                v-if="activeSection === 'linode'"
                class="grid grid-cols-6 gap-5 mt-5"
              >
                <div
                  v-for="value in linode"
                  :key="value.id"
                  @click="showDetails(value)"
                  class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
                  :class="{
                    'bg-blue-100 border-blue-500 dark:bg-gray-800':
                      selectedItem === value,
                  }"
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
                    <div
                      class="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3"
                    >
                      <h2 class="text-lg font-bold mb-4">Amazon Lightsail</h2>
                      <hr class="mb-5" />
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Name</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
                        class="border rounded-md p-2 w-full mt-2"
                      />
                      <p class="text-gray-500 text-xs mt-3 mb-5">
                        Use this to recognise your credentials if you have more
                        than one account per provider.
                      </p>
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Access Key</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
                        class="border rounded-md p-2 w-full mt-2 mb-5"
                      />
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Access Secret</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
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

              <div
                v-if="activeSection === 'hetzner'"
                class="grid grid-cols-6 gap-5 mt-5"
              >
                <div
                  v-for="value in hetzner"
                  :key="value.id"
                  @click="showDetails(value)"
                  class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
                  :class="{
                    'bg-blue-100 border-blue-500 dark:bg-gray-800':
                      selectedItem === value,
                  }"
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
                    <div
                      class="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3"
                    >
                      <h2 class="text-lg font-bold mb-4">Amazon Lightsail</h2>
                      <hr class="mb-5" />
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Name</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
                        class="border rounded-md p-2 w-full mt-2"
                      />
                      <p class="text-gray-500 text-xs mt-3 mb-5">
                        Use this to recognise your credentials if you have more
                        than one account per provider.
                      </p>
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Access Key</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
                        class="border rounded-md p-2 w-full mt-2 mb-5"
                      />
                      <label
                        for="root_password_available"
                        class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500"
                        >Access Secret</label
                      >
                      <input
                        type="text"
                        v-model="accountDetails"
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
                </div>
                <a
                  href="https://portal.aws.amazon.com/billing/signup#/start/email"
                  target="_blank"
                  disabled="false"
                  class="relative cursor-pointer rounded-lg flex justify-center items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-3 focus:ring-0 focus:outline-none disabled:opacity-50"
                  ><div class="block text-tiny font-medium text-white w-full">
                    <div class="flex items-center gap-3 text-sa-500">
                      <div
                        class="flex justifzy-center items-center px-1.5 rounded text-blue-500"
                      >
                        <i class="las la-user-plus text-lg"></i>
                      </div>
                      <span class="text-blue-500"> Create an Account </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div v-if="selectedItem" class="bg-white dark:bg-gray-800 h-auto">
              <div class="mt-7">
                <h1 class="font-medium">Server Information</h1>
              </div>

              <div class="mt-3">
                <div
                  class="bg-[#FAFAFB] border xl:w-3/4 dark:bg-gray-700 rounded-lg p-4"
                >
                  <div class="grid-cols-1 grid gap-5">
                    <div class="sm:flex w-full gap-6">
                      <div class="sm:w-1/2 w-full">
                        <label
                          for="name"
                          class="label font-medium dark:text-white text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                          >Server Name</label
                        ><input
                          type="text"
                          class="border mt-2 text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Niche Site / Frontend"
                        /><small class="text-red-500 error_message"></small>
                      </div>
                      <div class="sm:w-1/2 w-full mt-5 sm:mt-0">
                        <label
                          class="font-medium text-sm label after:content-['*'] after:ml-0.5 after:text-red-500"
                          >Cleanup Server</label
                        >
                        <div class="space-y-4 mt-2">
                          <div class="flex">
                            <input
                              name="notification-method"
                              type="radio"
                              checked=""
                              class="h-4 w-4 mt-1 border-slate-300 text-sa-600 focus:ring-sa-600"
                              value="1"
                            /><label
                              for="cleanupServer"
                              class="ml-3 block text-sm dark:text-white font-medium leading-6 text-gray-900"
                              >Yes, If you encounter any conflicting packages,
                              please proceed to remove them.</label
                            >
                          </div>
                          <div class="flex">
                            <input
                              name="notification-method"
                              type="radio"
                              class="h-4 w-4 mt-1 border-slate-300 text-sa-600 focus:ring-sa-600"
                              value="0"
                            /><label
                              for="dontclean"
                              class="ml-3 block text-sm dark:text-white font-medium leading-6 text-gray-900"
                              >No, Dont Cleanup My Server.</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p
                  class="text-base mt-5 font-semibold after:content-['*'] after:ml-0.5 after:text-red-500"
                >
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
                      class="inline-flex dark:bg-gray-700 items-center justify-between w-full py-3 px-4 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-blue-600 peer-checked:bg-blue-100 dark:peer-checked:bg-gray-800 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
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
                      class="inline-flex dark:bg-gray-700 items-center justify-between w-full py-3 px-4 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-blue-600 peer-checked:bg-blue-100 dark:peer-checked:bg-gray-800 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
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
                      class="inline-flex dark:bg-gray-700 items-center justify-between w-full py-3 px-4 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white peer-checked:border-blue-600 peer-checked:bg-blue-100 dark:peer-checked:bg-gray-800 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                    >
                      <div class="flex space-x-5">
                        <img src="/public/ubuntu.png" class="w-7 h-auto" />
                        <div class="w-full text-lg">Ubuntu 20.04</div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>

              <div class="mt-5">
                <h1
                  class="font-semibold text-base dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Select a SSH Key
                </h1>
              </div>

              <div
                class="bg-gray-100 border mt-3 border-gray-300 dark:bg-gray-700 sm:w-3/4 xl:w-3/5 rounded-lg py-5 p-5"
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
                      class="ms-2 text-sm dark:text-white font-medium text-gray-900"
                      >Generate New Key</label
                    >
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
                      class="ms-2 text-sm font-medium dark:text-white text-gray-900"
                      >Add Public Key</label
                    >
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
                      class="mt-2 border dark:bg-gray-800 dark:text-white text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2"
                      placeholder="Paste Your Public Key Here"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="mt-5">
                <label for="nodejs_install" class="text-base dark:text-white"
                  >Install Node.js</label
                >
              </div>

              <div
                class="bg-[#FAFAFB] dark:bg-gray-700 sm:w-3/4 xl:w-3/5 dark:border-0 border border-slate-300 dark:border-gray-600 dark:text-white sm:rounded-lg mt-3"
              >
                <div class="p-4">
                  <div class="flex items-center">
                    <label class="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div
                        class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                      ></div>
                    </label>

                    <div class="text-sm text-gray-500 dark:text-white ml-5">
                      <p id="headlessui-description-v-1-5-44">
                        Enabling toggle button will automatically install the
                        latest LTS (Long-Term Support) version of Node.js on
                        your server.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p
                  class="text-tiny font-semibold mb-1 mt-5 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Select a Server Location (Amazon Lightsail)
                </p>
              </div>

              <div>
                <div class="pt-3">
                  <div
                    v-if="isLoading"
                    class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50"
                  >
                    <div class="loader"></div>
                  </div>

                  <!-- <div class="grid grid-cols-5 gap-5">
                    <div
                      v-for="region in regions"
                      :key="region.id"
                      @click="handleRegionClick(region)"
                      class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center"
                      :class="{
                        'border border-blue-800 bg-blue-100':
                          activeSection1 === region.name,
                      }"
                    >
                      <span
                        :class="`flag f-${region.country_code.toLowerCase()} rounded big-flag`"
                      ></span>
                      <h1>{{ region.name }}</h1>
                    </div>
                  </div> -->

                  <div class="grid grid-cols-5 gap-5">
                    <div
                      v-for="region in regions"
                      :key="region.id"
                      @click="handleRegionClick(region)"
                      class="border flex py-4 cursor-pointer rounded-md border-gray-300 px-5 gap-5 items-center justify-between"
                      :class="{
                        'border border-blue-800 bg-blue-100 dark:bg-gray-800':
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
                  </div>
                </div>

                <div>
                  <p
                    class="text-tiny font-semibold mb-1 mt-7 dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Select a Availability Zone (Amazon Lightsail)
                  </p>
                </div>

                <!-- <div>
                  <select
                    v-model="Zone"
                    @change="handleDropdownChange"
                    class="border w-2/5 text-black bg-white rounded py-2 mt-1"
                  >
                    <option value="Select a Availability Zone">
                      Select a Availability Zone
                    </option>
                    <option value="Shared With Me">Shared With Me</option>
                    <option value="Deleted Servers">Deleted Servers</option>
                  </select>
                </div> -->

                <div>
                  <select
                    v-model="selectedZone"
                    @change="handleDropdownChange"
                    class="border w-2/5 text-black dark:bg-gray-800 dark:text-white bg-white rounded py-2 mt-1"
                  >
                    <option value="">Select a Availability Zone</option>
                    <option
                      v-for="zone in zones"
                      :key="zone.id"
                      :value="zone.zoneName"
                    >
                      {{ zone.zoneName }}
                    </option>
                  </select>
                </div>

                <div>
                  <p
                    class="text-tiny font-semibold mb-1 mt-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Select a Server Instance Size (Amazon Lightsail)
                  </p>
                </div>

                <div class="flex gap-5">
                  <div class="mt-5">
                    <nav
                      class="isolate w-80 flex xl:flex-col flex-row flex-wrap xl:divide-y xl:divide-x-0 divide-x rounded-lg border border-slate-300"
                    >
                      <a
                        v-for="(sizes, index) in sizes"
                        :key="index"
                        @click="selectTab(index)"
                        :class="{
                          'bg-blue-200 text-blue-600 dark:bg-gray-700 dark:text-white':
                            selectedTab === index,
                          'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800':
                            selectedTab !== index,
                          'xl:rounded-t-lg rounded-tl-lg': index === 0,
                          'xl:rounded-b-lg rounded-br-lg':
                            index === sizes.length - 1,
                        }"
                        class="group relative min-w-fit flex-1 cursor-pointer overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10"
                      >
                        <span>{{ sizes.name }}</span>
                      </a>
                    </nav>
                  </div>

                  <div v-if="sizes" class="mt-5 w-full">
                    <div class="border rounded-lg p-2">
                      <table class="min-w-full bg-white border-gray-300">
                        <thead>
                          <tr
                            class="bg-gray-100 text-black dark:bg-gray-800 dark:text-white border-b-2 text-sm leading-normal"
                          >
                            <th class="py-4 px-6">Core(s)</th>
                            <th class="py-3 px-6">Memory</th>
                            <th class="py-3 px-6">Storage</th>
                            <th class="py-3 px-6">Bandwith</th>
                            <th class="py-3 px-6">Price</th>
                            <th class="py-3 px-6"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-if="current_server.length === 0">
                            <td colspan="6" class="text-center">
                              Data Not Found
                            </td>
                          </tr>
                          <tr
                            v-for="(current_server, index) in current_server"
                            :key="index"
                            class="dark:bg-gray-900"
                          >
                            <td
                              class="max-w-20 p-3.5 truncate text-center"
                              v-tooltip.top="current_server"
                            >
                              {{ current_server.cpu_core }}
                            </td>
                            <td class="max-w-20 truncate text-center">
                              {{ current_server.ram_size_in_mb }} MB
                            </td>
                            <td class="max-w-20 truncate text-center">
                              {{ current_server.disk_size_in_gb }} GB
                            </td>
                            <td class="max-w-20 truncate text-center">
                              {{ current_server.bandwidth }} GB
                            </td>
                            <td class="max-w-20 truncate text-center">
                              ${{ current_server.price }} / Monthly
                            </td>
                            <td class="max-w-20 text-center">
                              <button
                                @click="toggleSelection"
                                :class="{
                                  'border border-blue-500 text-blue-500':
                                    isSelected,
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
              </div>

              <div>
                <div
                  class="flex items-center mt-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white w-fit p-1.5"
                >
                  <button class="px-4">
                    Connect Now <i class="las la-angle-right"></i>
                  </button>
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
      selectedZone: "",
      zones: [],
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
    selectItem(item) {
      this.selectedItem = item;
    },
    handleSelection(os) {
      this.selectedOS1 = os;
    },
    handleSelection1(os) {
      this.selectedOS2 = os;
    },
    // handleDropdownChange() {
    //   this.fetchdatabases();
    // },
    setActiveSection(section) {
      this.activeSection = section;
    },

    // async handleRegionClick(region) {
    //   this.activeSection1 = region.name;
    //   this.isLoading = true;
    //   this.current_server = this.sizes[0]?.list || [];
    //   const regionValue = region.value;
    //   const accessToken = localStorage.getItem("access_token");

    //   if (!accessToken) {
    //     console.error("No access token found");
    //     return;
    //   }

    //   try {
    //     const response = await axios.get(
    //       `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/sizes?region=${regionValue}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${accessToken}`,
    //         },
    //       }
    //     );

    //     // this.sizes = response.data.sizes || [];
    //     // this.current_server = response.data.sizes[0].list;

    //     this.sizes = sizesResponse.data.sizes || [];
    //     this.current_server = sizesResponse.data.sizes[0]?.list || [];

    //     const additionalResponse = await axios.get(
    //       `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/regions?region=${regionValue}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${accessToken}`,
    //         },
    //       }
    //     );

    //     this.zones = regionsResponse.data.region_zones || [];

    //   } catch (error) {
    //     this.handleError(error);
    //   } finally {
    //     this.isLoading = false;
    //   }
    // },

    async handleRegionClick(region) {
      this.activeSection1 = region.name;
      this.isLoading = true;
      this.current_server = this.sizes[0]?.list || [];
      const regionValue = region.value;
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        console.error("No access token found");
        return;
      }

      try {
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

        const regionsResponse = await axios.get(
          `https://app.satesting1.homes/api/organizations/1/cloud-server-providers/1/regions?region=${regionValue}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        this.zones = regionsResponse.data.region_zones || [];
      } catch (error) {
        console.error("Error fetching regions/zones:", error);
      } finally {
        this.isLoading = false;
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

    async fetchDataForRegion(region) {
      return new Promise((resolve) => setTimeout(resolve, 2000));
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
        s;
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
.loader {
  border: 3px solid #9b9b9b;
  border-top: 3px solid #ffffff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>