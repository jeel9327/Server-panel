<!-- <template>
    <div class="bg-gray-100 w-full h-auto flex">
      <sidebar class="sticky top-0 z-10 h-screen" />
      <div class="w-full h-full">
        <headerTop class="sticky top-0 z-10" />
        <div class="w-full">
          <router-view></router-view>
          <div class="bg-white border-r-2 border-l-2 border-b-2 h-12 flex">
            <div class="flex items-center">
              <span class="las la-server text-xl ml-5 m-3 text-gray-500"></span>
            </div>
            <svg
              class="h-full w-6 flex-shrink-0 text-gray-200"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <div class="ml-5 flex items-center m-3 text-gray-500 font-medium">
              <h1>Server</h1>
            </div>
            <svg
              class="h-full w-6 flex-shrink-0 text-gray-200"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <div class="ml-5 flex items-center m-3 text-gray-500 font-medium">
              <h1>Connect</h1>
            </div>
          </div>
          <div class="p-5">
            <div class="bg-white rounded-md p-5">
              <div class="flex items-center gap-3">
                <h1 class="font-medium text-lg">Connect a Server</h1>
                <img src="/public/serverIcon.png" class="w-10" alt="" />
              </div>
              <div>
                <div class="grid grid-cols-6 gap-5 h-auto mt-5">
                  <div
                    v-tooltip.top="'Custom'"
                    @click="setActiveSection('custom')"
                    class="border rounded-md cursor-pointer flex items-center gap-4 p-4"
                    :class="{
                      'border-2 border-blue-600 bg-blue-100':
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
                    v-tooltip.top="provider"
                    v-for="provider in enabledProviders"
                    :key="provider.id"
                    @click="setActiveSection()"
                    class="border rounded-md cursor-pointer flex items-center capitalize gap-4 p-4"
                    :class="{
                      'border-2 border-blue-600 bg-blue-100':
                        activeSection === provider,
                    }"
                  >
                    <img
                      :src="CloudLogo[provider].logo"
                      class="min-w-7 w-7 h-auto"
                    />
                    <h1>{{ provider }}</h1>
                  </div>
                </div>
  
                <div v-if="activeSection === 'custom'">
                  <div>
                    <div class="mt-5 font-medium">
                      <h1>Connect with IP and Password</h1>
                    </div>
                    <div class="bg-[#FAFAFB] border xl:w-3/4 rounded-lg p-4 mt-5">
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
                            class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2.5"
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
                                class="h-4 w-4 rounded border-slate-300 text-sa-500 hover:text-sa-600 focus:ring-0"
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
                                  class="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                  >No, Dont Cleanup My Server.</label
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
                              class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2.5"
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
                              class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2.5"
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
                              class="border text-gray-900 text-sm rounded-lg border-slate-300 focus:border-sa-500 focus:ring-0 block w-full p-2.5"
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
                    <div class="mt-6 bg-[#EDF1F5] rounded-lg border px-5 py-3">
                      <div class="md:flex items-center justify-between gap-5">
                        <div class="flex-1">
                          <h2 class="font-semibold">Requirement</h2>
                          <p class="text-gray-700 text-sm mt-1">
                            Here is a list of things you should have before
                            attempting to connect with ServerAvatar:
                          </p>
                          <ol class="mt-5 text-sm">
                            <li class="text-gray-700 flex gap-1">
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
                            <li class="mt-3 text-gray-700 flex gap-1">
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
                            <li class="mt-3 text-gray-700 flex gap-1">
                              <span
                                class="material-symbols-outlined text-blue-500"
                                >check_circle</span
                              >
                              <p>
                                <b>Supported OS:</b> Ubuntu 20.04 or Ubuntu 22.04
                                or Ubuntu 24.04.
                              </p>
                            </li>
                            <li class="mt-3 text-gray-700 flex gap-1">
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
                          <p class="text-gray-700 text-sm mt-5">
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
                    <div id="headlessui-radiogroup-v-12-5-75" role="radiogroup">
                      <div
                        class="mt-4 grid grid-cols-1 gap-y-6 xl:grid-cols-4 sm:grid-cols-2 sm:gap-x-4"
                        role="none"
                      >
                        <div
                          class="border-sa-500 bg-sa-50 relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                          id="headlessui-radiogroup-option-v-12-5-76"
                          role="radio"
                          aria-checked="true"
                          tabindex="0"
                          data-headlessui-state="checked"
                          aria-labelledby="headlessui-label-v-12-5-77 headlessui-label-v-12-5-78"
                          aria-describedby="headlessui-description-v-12-5-79"
                        >
                          <div
                            class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5"
                          >
                            <div>
                              <span
                                id="headlessui-label-v-12-5-77"
                                class="block text-4xl font-medium text-gray-900"
                                ><img
                                  src="/public/apache.png"
                                  class="h-auto mx-auto w-10" /></span
                              ><span
                                id="headlessui-label-v-12-5-78"
                                class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900"
                                >Apache</span
                              >
                            </div>
                            <div id="headlessui-description-v-12-5-79">
                              <ul class="list-disc pl-4 text-tiny">
                                <li class="py-1.5 text-sm text-gray-500">
                                  Apache
                                </li>
                                <li class="py-1.5 text-sm text-gray-500">
                                  PHP (From 7.2 to 8.3)
                                </li>
  
                                <li class="py-1.5 text-sm text-gray-500">
                                  PHP-FPM Configuration
                                </li>
                                <li class="py-1.5 text-sm text-gray-500">
                                  MySQL/MariaDB
                                </li>
                                <li class="py-1.5 text-sm text-gray-500">
                                  Redis
                                </li>
                              </ul>
                            </div>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            class="h-4 w-4 text-sa-500 absolute top-2 right-2"
                          ></svg>
                        </div>
                        <div
                          class="bg-white border-slate-300 relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                          id="headlessui-radiogroup-option-v-12-5-80"
                          role="radio"
                          aria-checked="false"
                          tabindex="-1"
                          data-headlessui-state=""
                          aria-labelledby="headlessui-label-v-12-5-81 headlessui-label-v-12-5-82"
                          aria-describedby="headlessui-description-v-12-5-83"
                        >
                          <div
                            class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5"
                          >
                            <div>
                              <span
                                id="headlessui-label-v-12-5-81"
                                class="block text-4xl font-medium text-gray-900"
                                ><img
                                  src="/public/nginx.png"
                                  class="h-auto mx-auto w-10" /></span
                              ><span
                                id="headlessui-label-v-12-5-82"
                                class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900"
                                >Nginx</span
                              >
                            </div>
                            <div id="headlessui-description-v-12-5-83">
                              <ul class="list-disc pl-4 text-tiny">
                                <li class="py-1.5 text-sm text-gray-500">
                                  Nginx
                                </li>
                                <li class="py-1.5 text-sm text-gray-500">
                                  PHP (From 7.2 to 8.3)
                                </li>
  
                                <li class="py-1.5 text-sm text-gray-500">
                                  PHP-FPM Configuration
                                </li>
                                <li class="py-1.5 text-sm text-gray-500">
                                  MySQL/MariaDB
                                </li>
                                <li class="py-1.5 text-sm text-gray-500">
                                  Redis
                                </li>
                              </ul>
                            </div>
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
                        <div
                          class="bg-white border-slate-300 relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                          id="headlessui-radiogroup-option-v-12-5-84"
                          role="radio"
                          aria-checked="false"
                          tabindex="-1"
                          data-headlessui-state=""
                          aria-labelledby="headlessui-label-v-12-5-85 headlessui-label-v-12-5-86"
                          aria-describedby="headlessui-description-v-12-5-87"
                        >
                          <div
                            class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5"
                          >
                            <div>
                              <span
                                id="headlessui-label-v-12-5-85"
                                class="block text-4xl font-medium text-gray-900"
                                ><img
                                  src="/public/ols.png"
                                  class="h-auto mx-auto w-10" /></span
                              ><span
                                id="headlessui-label-v-12-5-86"
                                class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900"
                                >OLS</span
                              >
                            </div>
                            <div id="headlessui-description-v-12-5-87">
                              <ul class="list-disc pl-4 text-tiny">
                                <li class="py-1.5 text-sm text-gray-500">
                                  OpenLiteSpeed
                                </li>
  
                                <li class="py-1.5 text-sm text-gray-500">
                                  LSPHP From 7.4 to 8.3
                                </li>
  
                                <li class="py-1.5 text-sm text-gray-500">
                                  MySQL/MariaDB
                                </li>
                                <li class="py-1.5 text-sm text-gray-500">
                                  Redis
                                </li>
                              </ul>
                            </div>
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
                        <div
                          class="bg-white border-slate-300 relative cursor-pointer rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                          id="headlessui-radiogroup-option-v-12-5-88"
                          role="radio"
                          aria-checked="false"
                          tabindex="-1"
                          data-headlessui-state=""
                          aria-labelledby="headlessui-label-v-12-5-89 headlessui-label-v-12-5-90"
                          aria-describedby="headlessui-description-v-12-5-91"
                        >
                          <div
                            class="absolute top-2 left-2 bg-sa-500 text-white text-xs font-bold px-2 py-1 rounded-md"
                          >
                            <span class="">BETA</span>
                          </div>
                          <div
                            class="flex items-center h-full 2xl:gap-5 xl:gap-4 gap-5"
                          >
                            <div>
                              <span
                                id="headlessui-label-v-12-5-89"
                                class="block text-4xl font-medium text-gray-900"
                                ><img
                                  src="/public/node.png"
                                  class="h-auto mx-auto w-28" /></span
                              ><span
                                id="headlessui-label-v-12-5-90"
                                class="block sm:text-tiny text-sm font-bold text-center tracking-wide mt-4 text-gray-900"
                                >Node Stack</span
                              >
                            </div>
                            <div id="headlessui-description-v-12-5-91">
                              <ul class="list-disc pl-4 text-tiny">
                                <li class="py-1.5 text-sm text-gray-500">
                                  Nginx
                                </li>
  
                                <li class="py-1.5 text-sm text-gray-500">
                                  MongoDB
                                </li>
                                <li class="py-1.5 text-sm text-gray-500">
                                  Redis
                                </li>
                              </ul>
                            </div>
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
                    </div>
                  </div>
                  <div>
                    <p
                      class="mt-6 text-base dark:text-white after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                      Select a Database
                    </p>
                  </div>
                  <div id="headlessui-radiogroup-v-12-5-92" role="radiogroup">
                    <div
                      class="mt-4 grid grid-cols-1 gap-y-6 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-4"
                      role="none"
                    >
                      <div
                        class="border-sa-500 bg-sa-50 cursor-pointer relative rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                        id="headlessui-radiogroup-option-v-12-5-93"
                        role="radio"
                        aria-checked="true"
                        tabindex="0"
                        data-headlessui-state="checked"
                        aria-labelledby="headlessui-label-v-12-5-94"
                      >
                        <span class="flex justify-center items-center h-full"
                          ><span
                            id="headlessui-label-v-12-5-94"
                            class="block text-4xl font-medium text-gray-900"
                            ><img
                              src="/public/mysql.png"
                              class="h-auto w-32" /></span></span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          class="h-4 w-4 text-sa-500 absolute top-2 right-2"
                        ></svg>
                      </div>
                      <div
                        class="bg-white border-slate-300 cursor-pointer relative rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                        id="headlessui-radiogroup-option-v-12-5-95"
                        role="radio"
                        aria-checked="false"
                        tabindex="-1"
                        data-headlessui-state=""
                        aria-labelledby="headlessui-label-v-12-5-96"
                      >
                        <span class="flex justify-center items-center h-full"
                          ><span
                            id="headlessui-label-v-12-5-96"
                            class="block text-4xl font-medium text-gray-900"
                            ><img
                              src="/public/mariadb.png"
                              class="h-auto w-32" /></span></span
                        ><svg
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
                      <div
                        class="bg-white border-slate-300 opacity-50 pointer-events-none relative rounded-lg border px-4 py-3 focus:ring-0 focus:outline-none"
                        id="headlessui-radiogroup-option-v-12-5-97"
                        role="radio"
                        aria-checked="false"
                        tabindex="-1"
                        data-headlessui-state="disabled"
                        aria-labelledby="headlessui-label-v-12-5-98"
                        aria-disabled="true"
                      >
                        <span class="flex justify-center items-center h-full"
                          ><span
                            id="headlessui-label-v-12-5-98"
                            class="block text-4xl font-medium text-gray-900"
                            ><img
                              src="/public/mongodb.png"
                              class="h-auto w-28" /></span></span
                        ><svg
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
                  </div>
                  <div>
                    <div class="mt-5">
                      <label for="nodejs_install" class="text-base"
                        >Install Node.js</label
                      >
                    </div>
  
                    <div
                      class="bg-[#FAFAFB] sm:w-3/4 xl:w-3/5 border border-slate-300 sm:rounded-lg mt-3"
                    >
                      <div class="p-4">
                        <div class="flex items-center">
                          <div class="sm:flex sm:flex-shrink-0 sm:items-center">
                            <button
                              class="bg-gray-300 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0"
                              id="headlessui-switch-v-1-5-43"
                              role="switch"
                              type="button"
                              tabindex="0"
                              aria-checked="false"
                              data-headlessui-state=""
                              aria-describedby="headlessui-description-v-1-5-44"
                            >
                              <span
                                aria-hidden="true"
                                class="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white ring-0 transition duration-200 ease-in-out"
                              ></span>
                            </button>
                          </div>
                          <div class="text-sm text-gray-500 ml-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  import apiClient from "@/stores/axios";
  import sidebar from "@/components/sidebar.vue";
  import headerTop from "@/components/header.vue";
  import CloudLogo from "@/Resources/providerlogo";
  
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
  </script>
      
      <style>
  </style> -->




  <template>
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
  

      <NarrowSidebar v-if="isNarrowSidebarVisible" />
    </div>
  </template>
  
  <script>
  import { icon } from "@fortawesome/fontawesome-svg-core";
  import apiClient from "../stores/axios";
  import SkeletonLoader from "/src/Skeleton.vue";
  import menu from "../Resources/menu";
  import NarrowSidebar from "./NarrowSidebar.vue"; // Import the new component
  
  export default {
    components: {
      icon,
      SkeletonLoader,
      menu,
      NarrowSidebar, // Register the new component
    },
    data() {
      return {
        isSidebarExpanded: true,
        loading: true,
        isNarrowSidebarVisible: false,
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
  </style>
  