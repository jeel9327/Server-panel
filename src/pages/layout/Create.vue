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
          <div class="flex items-center m-3">
            <span
              class="pi pi-file-plus ml-5 text-gray-500 hover:text-gray-800 dark:hover:text-gray-600"
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
            <h1>Backups</h1>
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
            <h1>Create</h1>
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
        <div class="grid grid-cols-2 gap-5 dark:text-white p-5 mt-5 ml-3 mb-10">
          <div class="">
            <h1 class="text-xl font-semibold">Create an Instant Backup</h1>
            <p class="mt-5 text-gray-500">
              Creating an instant backup allows you to save a copy of your
              important files and data, ensuring protection against loss or
              corruption.
            </p>
            <p class="mt-3 text-gray-500">
              This process lets you take a backup of your files and data without
              interrupting its operation and will make the recovery easier from
              unexpected incidents.
            </p>
            <h1 class="mt-5 text-lg font-medium">Backup Type:</h1>
            <p class="mt-3 text-lg ml-5">
              <span class="font-medium">File System: </span
              ><span class="text-gray-500"
                >This option will create a backup for only files of the selected
                application.</span
              >
            </p>
            <p class="mt-2 text-lg ml-5">
              <span class="font-medium">Application: </span
              ><span class="text-gray-500"
                >This option includes the backup of your application along with
                its files and database.</span
              >
            </p>
            <p class="mt-2 text-lg ml-5">
              <span class="font-medium">Database: </span
              ><span class="text-gray-500"
                >This option will create a backup for the selected database
                only.</span
              >
            </p>
            <h1 class="mt-7 text-lg font-medium">File Type:</h1>
            <p class="mt-3 text-lg ml-5">
              <span class="font-medium">.tar: </span
              ><span class="text-gray-500"
                >This option will give your backup in an archived file format
                that combines multiple files without compression.</span
              >
            </p>
            <p class="mt-3 text-lg ml-5">
              <span class="font-medium">.tar.gz: </span
              ><span class="text-gray-500"
                >This option will give you a compressed version of a .tar file.
                You can select this option to reduce file size.</span
              >
            </p>
            <h1 class="mt-7 text-lg font-medium">Database File Type:</h1>
            <p class="mt-3 text-lg ml-5">
              <span class="font-medium">.sql: </span
              ><span class="text-gray-500"
                >This option will give you a backup file in .sql format, which
                is compatible with any SQL-compatible database management
                system.</span
              >
            </p>
            <p class="mt-3 text-lg ml-5">
              <span class="font-medium">.sql.gz: </span
              ><span class="text-gray-500"
                >This option will give you a compressed backup file that will
                reduce file size for easier storage and transfer.</span
              >
            </p>
            <p class="mt-5 text-lg">
              <span class="font-medium">Retention Period: </span
              ><span class="text-gray-500"
                >Define how long you want to keep the backup by selecting the
                retention period.</span
              >
            </p>
            <a
              href="https://serveravatar.com/docs/backups/instant-backup/"
              class="btn"
              target="_blank"
            >
              <div class="text-xl text-blue-600 font-semibold mt-2">
                <button>Read More</button>
              </div>
            </a>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5">
            <h1 class="font-semibold">Name</h1>
            <input
              type="text"
              placeholder="Enter backup name"
              class="border dark:bg-gray-800 rounded-md mt-2 pl-2 h-10 min-w-full"
            />

            <h1 class="font-semibold mt-4">Backup Type</h1>
            <div class="grid grid-cols-3 gap-10 mt-5 text-center">
              <div
                @click="setActiveSection('fileSystem')"
                class="border border-gray-200 cursor-pointer rounded-lg shadow-lg h-32"
                :class="{
                  'border-2 border-blue-600 ': activeSection === 'fileSystem',
                }"
              >
                <span class="material-symbols-outlined mt-5 mb-5">draft</span
                ><br />File System
              </div>
              <div
                @click="setActiveSection('application')"
                class="border border-gray-200 cursor-pointer rounded-lg shadow-lg h-32"
                :class="{
                  'border-2 border-blue-600': activeSection === 'application',
                }"
              >
                <span class="material-symbols-outlined mt-5 mb-5"
                  >grid_view</span
                ><br />Application
              </div>
              <div
                @click="setActiveSection('database')"
                class="border border-gray-200 cursor-pointer rounded-lg shadow-lg h-32"
                :class="{
                  'border-2 border-blue-600': activeSection === 'database',
                }"
              >
                <span class="material-symbols-outlined mt-5 mb-5"
                  >data_table</span
                ><br />Database
              </div>
            </div>

            <div v-if="activeSection === 'fileSystem'">
              <h1 class="font-semibold mt-4">File Type</h1>
              <div class="flex flex-col mt-2">
                <div class="mb-6">
                  <div class="flex items-center">
                    <label class="flex items-center mr-4">
                      <input
                        type="radio"
                        value="tar"
                        v-model="selectedFruit"
                        class="form-radio h-4 w-4 text-blue-600"
                      />
                      <span class="ml-2">.tar</span>
                    </label>
                    <label class="flex items-center mr-4">
                      <input
                        type="radio"
                        value="tar.gz"
                        v-model="selectedFruit"
                        class="form-radio h-4 w-4 text-blue-600"
                      />
                      <span class="ml-2">.tar.gz</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-5">
                <div>
                  <h1 class="font-medium">Server</h1>
                  <div class="mt-2">
                    <select
                      v-model="chooseaserver"
                      @change="handleDropdownChange"
                      class="border border-x-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Choose a Server">Choose a Server</option>
                      <option value="No Server Found">No Server Found</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h1 class="font-medium">Application</h1>
                  <div class="mt-2">
                    <select
                      v-model="chooseaapplication"
                      @change="handleDropdownChange"
                      class="border border-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Choose an Application">
                        Choose an Application
                      </option>
                      <option value="No Application Found">
                        No Application Found
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-5 mt-4">
                <div>
                  <h1 class="font-medium">Storage Provider</h1>
                  <div class="mt-2">
                    <select
                      v-model="chooseaprovider"
                      @change="handleDropdownChange"
                      class="border border-x-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Choose a Provider">
                        Choose a Provider
                      </option>
                      <option value="Wasabi">Wasabi</option>
                      <option value="S3 Compatible Storage">
                        S3 Compatible Storage
                      </option>
                      <option value="Google Drive">Google Drive</option>
                      <option value="Amazon S3">Amazon S3</option>
                      <option value="Dropbox">Dropbox</option>
                      <option value="ServerAvatar">ServerAvatar</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h1 class="font-medium">Retention Period</h1>
                  <div class="mt-2">
                    <select
                      v-model="selectretntionperiod"
                      @change="handleDropdownChange"
                      class="border border-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Select Retention Period">
                        Select Retention Period
                      </option>
                      <option value="No Application Found">
                        No Application Found
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class="bg-blue-600 text-white w-56 h-10 mt-5 rounded-md"
                >
                  Create an Instant Backup
                </button>
              </div>
            </div>

            <!-- Application Section -->
            <div v-if="activeSection === 'application'">
              <div class="grid grid-cols-2">
                <div>
                  <h1 class="font-semibold mt-4">File Type</h1>
                  <div class="flex flex-col mt-2">
                    <div class="mb-6">
                      <div class="flex items-center">
                        <label class="flex items-center mr-4">
                          <input
                            type="radio"
                            value="tar"
                            v-model="selectedtar"
                            class="form-radio h-4 w-4 text-blue-600"
                          />
                          <span class="ml-2">.tar</span>
                        </label>
                        <label class="flex items-center mr-4">
                          <input
                            type="radio"
                            value="tar.gz"
                            v-model="selectedtar"
                            class="form-radio h-4 w-4 text-blue-600"
                          />
                          <span class="ml-2">.tar.gz</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 class="font-semibold mt-4 ml-3">Database File Type</h1>
                  <div class="flex flex-col mt-2 ml-3">
                    <div class="mb-6">
                      <div class="flex items-center">
                        <label class="flex items-center mr-4">
                          <input
                            type="radio"
                            value="tar"
                            v-model="selectedsql"
                            class="form-radio h-4 w-4 text-blue-600"
                          />
                          <span class="ml-2">.sql</span>
                        </label>
                        <label class="flex items-center mr-4">
                          <input
                            type="radio"
                            value="tar.gz"
                            v-model="selectedsql"
                            class="form-radio h-4 w-4 text-blue-600"
                          />
                          <span class="ml-2">.sql.gz</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-5">
                <div>
                  <h1 class="font-medium">Server</h1>
                  <div class="mt-2">
                    <select
                      v-model="chooseaserver"
                      @change="handleDropdownChange"
                      class="border border-x-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Choose a Server">Choose a Server</option>
                      <option value="No Server Found">No Server Found</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h1 class="font-medium">Application</h1>
                  <div class="mt-2">
                    <select
                      v-model="chooseaapplication"
                      @change="handleDropdownChange"
                      class="border border-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Choose an Application">
                        Choose an Application
                      </option>
                      <option value="No Application Found">
                        No Application Found
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-5 mt-4">
                <div>
                  <h1 class="font-medium">Database</h1>
                  <div class="mt-2">
                    <select
                      v-model="chooseadatabase"
                      @change="handleDropdownChange"
                      class="border border-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Choose a Database">
                        Choose a Database
                      </option>
                      <option value="No Application Found">
                        No Application Found
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <h1 class="font-medium">Storage Provider</h1>
                  <div class="mt-2">
                    <select
                      v-model="chooseaprovider"
                      @change="handleDropdownChange"
                      class="border border-x-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Choose a Provider">
                        Choose a Provider
                      </option>
                      <option value="Wasabi">Wasabi</option>
                      <option value="S3 Compatible Storage">
                        S3 Compatible Storage
                      </option>
                      <option value="Google Drive">Google Drive</option>
                      <option value="Amazon S3">Amazon S3</option>
                      <option value="Dropbox">Dropbox</option>
                      <option value="ServerAvatar">ServerAvatar</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <h1 class="font-medium">Retention Period</h1>
                  <div class="mt-2">
                    <select
                      v-model="selectretentionperiod"
                      @change="handleDropdownChange"
                      class="border border-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Select Retention Period">
                        Select Retention Period
                      </option>
                      <option value="No Application Found">
                        No Application Found
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class="bg-blue-600 text-white w-56 h-10 mt-5 rounded-md"
                >
                  Create an Instant Backup
                </button>
              </div>
            </div>

            <!-- Database Section  -->
            <div v-if="activeSection === 'database'">
              <h1 class="font-semibold mt-4">Database File Type</h1>
              <div class="flex flex-col mt-2">
                <div class="mb-6">
                  <div class="flex items-center">
                    <label class="flex items-center mr-4">
                      <input
                        type="radio"
                        value="sql"
                        v-model="selectedSql"
                        class="form-radio h-4 w-4 text-blue-600"
                      />
                      <span class="ml-2">.sql</span>
                    </label>
                    <label class="flex items-center mr-4">
                      <input
                        type="radio"
                        value="sql.gz"
                        v-model="selectedSql"
                        class="form-radio h-4 w-4 text-blue-600"
                      />
                      <span class="ml-2">.sql.gz</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-5">
                <div>
                  <h1 class="font-medium">Server</h1>
                  <div class="mt-2">
                    <select
                      v-model="chooseaserver"
                      @change="handleDropdownChange"
                      class="border border-x-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Choose a Server">Choose a Server</option>
                      <option value="No Server Found">No Server Found</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h1 class="font-medium">Database</h1>
                  <div class="mt-2">
                    <select
                      v-model="chooseadatabase"
                      @change="handleDropdownChange"
                      class="border border-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Choose a Database">
                        Choose a Database
                      </option>
                      <option value="No Application Found">
                        No Application Found
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-5 mt-4">
                <div>
                  <h1 class="font-medium">Storage Provider</h1>
                  <div class="mt-2">
                    <select
                      v-model="chooseaprovider"
                      @change="handleDropdownChange"
                      class="border border-x-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Choose a Provider">
                        Choose a Provider
                      </option>
                      <option value="Wasabi">Wasabi</option>
                      <option value="S3 Compatible Storage">
                        S3 Compatible Storage
                      </option>
                      <option value="Google Drive">Google Drive</option>
                      <option value="Amazon S3">Amazon S3</option>
                      <option value="Dropbox">Dropbox</option>
                      <option value="ServerAvatar">ServerAvatar</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h1 class="font-medium">Retention Period</h1>
                  <div class="mt-2">
                    <select
                      v-model="selectretntionperiod"
                      @change="handleDropdownChange"
                      class="border border-gray-300 dark:bg-gray-800 dark:text-white w-full pl-2 bg-white text-black rounded py-3"
                    >
                      <option value="Select Retention Period">
                        Select Retention Period
                      </option>
                      <option value="Shared With Me">
                        No Application Found
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class="bg-blue-600 text-white w-56 h-10 mt-5 rounded-md"
                >
                  Create an Instant Backup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from "../../components/header.vue";
import sidebar from "../../components/sidebar.vue";

export default {
  components: {
    headerTop,
    sidebar,
  },
  data() {
    return {
      selectedFruit: "",
      selectedtar: "",
      selectedsql: "",
      selectedSql: "",
      chooseaserver: "Choose a Server",
      chooseaapplication: "Choose an Application",
      chooseaprovider: "Choose a Provider",
      selectretntionperiod: "Select Retention Period",
      chooseadatabase: "Choose a Database",
      activeSection: "fileSystem",
      selectretentionperiod: "Select Retention Period",
    };
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section;
    },
    handleDropdownChange() {},
  },
};
</script>

<style>
</style>
