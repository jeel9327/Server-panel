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
              class="las la-building text-xl ml-5 text-gray-500 dark:hover:text-gray-600 hover:text-gray-800"
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
            <h1>Organization</h1>
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
        <div class="p-5 mb-10">
          <div class="grid grid-cols-4 gap-5">
            <div class="col-span-1">
              <h1
                class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
              >
                Basic Detail
              </h1>
            </div>
            <div class="col-span-3">
              <form class="space-y-5" method="post">
                <div
                  class="bg-white dark:text-white dark:bg-gray-800 rounded-md shadow-md p-4"
                >
                  <div class="w-full">
                    <label
                      class="label after:content-['*'] after:ml-0.5 after:text-red-500"
                      >Name</label
                    >
                    <input
                      type="text"
                      placeholder="My Organization"
                      class="border dark:bg-gray-800 dark:border-gray-600 mt-3 w-full border-slate-300 p-2 rounded-lg text-sm"
                    />
                  </div>
                  <div class="mt-4 font-semibold">
                    <h1>Logo</h1>
                  </div>
                  <!-- <div class="mt-4 flex gap-5">
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
                        class="bg-white text-gray-500 dark:bg-gray-700 dark:border-gray-500 dark:text-white font-semibold text-base rounded py-3.5 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed font-[sans-serif]"
                      >
                        <span class="material-symbols-outlined text-slate-400">
                          upload
                        </span>
                        Upload a Logo

                        <input type="file" id="uploadFile1" class="hidden" />
                      </label>
                    </div>
                  </div>
                  <button
                    class="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 mt-5 rounded-md"
                  >
                    Update
                  </button> -->
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
                        <span class="material-symbols-outlined text-slate-400"
                          >upload</span
                        >
                        Upload a Logo
                        <input
                          type="file"
                          id="uploadFile1"
                          class="hidden"
                          @change="onFileChange"
                        />
                      </label>
                      <p
                        v-if="fileName"
                        class="mt-2 text-gray-700 dark:text-white"
                      >
                        {{ fileName }}
                      </p>
                    </div>
                  </div>
                  <button
                    class="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 mt-5 rounded-md"
                    @click="showToast"
                  >
                    Update
                  </button>

                  <div
                    v-if="showToastMessage"
                    class="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-md"
                  >
                    {{ toastMessage }}
                  </div>
                </div>
              </form>
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
  components: { headerTop, sidebar },
  data() {
    return {};
  },
  methods: {},
};
</script>
    
  <style>
</style>
    
    