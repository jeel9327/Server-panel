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
              class="las la-puzzle-piece text-xl ml-5 m-3 text-gray-500 dark:hover:text-gray-400 hover:text-gray-800"
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
            class="ml-5 flex items-center m-3 text-gray-500 dark:hover:text-gray-400 hover:text-gray-800 font-medium"
          >
            <h1>Add-ons</h1>
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
            class="ml-5 flex items-center m-3 text-gray-500 dark:hover:text-gray-400 hover:text-gray-800 font-medium"
          >
            <h1>Managed Services Pack</h1>
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
        <div class="p-3">
          <div class="rounded-md px-3 mb-10">
            <div>
              <div
                class="w-full xl:px-10 px-5 py-12 mt-4 rounded-xl from-white dark:from-slate-800 to-[#ECF3FF] dark:to-slate-800 shadow bg-no-repeat bg-cover bg-center bg-[url('/public/add-on-bg-light.png')] dark:bg-[url('/public/dark-self-hosted-bg.png')]"
              >
                <div class="grid md:grid-cols-5 grid-cols-1 gap-10">
                  <div
                    class="bg-clip-text text-transparent bg-gradient-to-r from-[#076AFF] to-[#1536C1] md:col-span-3"
                  >
                    <h1 class="text-3xl">
                      <label class="">Welcome to the</label>
                      <p class="dark:text-blue-600">
                        Automation with
                        <span class="border-b-2 border-yellow-500"
                          >Managed Services Pack!</span
                        >
                      </p>
                    </h1>
                    <p class="text-gray-500 dark:text-gray-300 mt-5 text-tiny">
                      Thank you for choosing the Managed Services Pack! You’ve
                      made a smart decision to elevate your server management
                      experience with our premium, expert-driven services. This
                      pack is designed to streamline your operations, provide
                      reliable support, and ensure your server runs at peak
                      performance effortlessly.
                    </p>
                  </div>
                  <div
                    class="justify-self-center place-self-center md:col-span-2"
                  >
                    <div>
                      <div
                        class="max-w-sm bg-white border dark:bg-gray-800 dark:border-gray-600 dark:text-white border-gray-200 shadow rounded-xl py-3 px-3.5 relative"
                      >
                        <div class="flex flex-wrap items-center gap-3">
                          <div
                            class="bg-red-50 rounded-full py-1 px-2 h-fit flex justify-center items-center"
                          >
                            <span
                              class="material-symbols-outlined text-xl text-red-500"
                            >
                              calendar_month
                            </span>
                          </div>
                          <div
                            class="border-l-2 dark:border-gray-600 rounded-y-md border-l-gray-200"
                          >
                            <p
                              class="text-gray-500 dark:text-white text-lg pl-2.5"
                            >
                              Expiry Date
                            </p>
                            <span class="text-tiny pl-2.5">2025-05-11</span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="max-w-sm bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white shadow rounded-xl py-3 px-3.5 relative mt-3"
                      >
                        <div class="flex flex-wrap items-center gap-3">
                          <div
                            class="bg-green-100 rounded-full py-1 px-2 h-fit flex justify-center items-center"
                          >
                            <span
                              class="material-symbols-outlined text-xl text-green-500"
                            >
                              cycle
                            </span>
                          </div>
                          <div
                            class="border-l-2 dark:border-gray-600 rounded-y-md border-l-gray-200"
                          >
                            <p
                              class="text-gray-500 dark:text-white text-lg pl-2.5"
                            >
                              Cycle
                            </p>
                            <span class="text-tiny pl-2.5">Half-Yearly</span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="max-w-sm bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white shadow rounded-xl py-3 px-3.5 relative mt-3"
                      >
                        <div class="flex flex-wrap items-center gap-3">
                          <div
                            class="bg-blue-50 rounded-full py-0.5 px-1.5 h-fit flex justify-center items-center"
                          >
                            <span
                              class="material-symbols-outlined text-2xl text-blue-500"
                            >
                              attach_money
                            </span>
                          </div>
                          <div
                            class="border-l-2 dark:border-gray-600 rounded-y-md border-l-gray-200"
                          >
                            <p
                              class="text-gray-500 dark:text-white text-lg pl-2.5"
                            >
                              Pricing
                            </p>
                            <span class="text-tiny pl-2.5">$550</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="top-notice mt-5 inset-x-0 rounded bg-yellow-100 dark:bg-yellow-500/30 text-yellow-700 dark:text-yellow-400 text-sm flex items-center justify-center p-2"
                >
                  <div class="w-full">
                    <p class="font-medium md:text-tiny sm:text-sm text-xs">
                      <span class="flex items-center gap-2"
                        ><span class="material-symbols-outlined text-lg">
                          error
                        </span>
                        You have canceled the Managed Service Pack add-on plan.
                        Now, you can manually renew it after it expires.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <h2 class="leading-none dark:text-white font-medium text-lg">
                  General Specifications 🚀
                </h2>
              </div>
              <div class="mt-8">
                <div
                  class="grid [25px]:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-5"
                >
                  <div>
                    <div
                      class="relative overflow-hidden dark:border-gray-600 border-white border from-white dark:to-slate-800 shadow bg-no-repeat bg-cover bg-center bg-[url('/public/add-on-bg-light.png')] dark:bg-[url('/public/dark-self-hosted-bg.png')] rounded-lg flex flex-col gap-2"
                    >
                      <div
                        class="border border-gray-200 dark:border-gray-600 relative mt-7"
                      ></div>
                      <div
                        class="absolute top-3 left-4 font-semibold dark:bg-blue-600 dark:text-white text-blue-600 w-fit bg-white rounded px-1.5 py-1 flex items-center justify-center"
                      >
                        <span class="material-symbols-outlined text-[25px]">
                          troubleshoot
                        </span>
                      </div>
                      <div class="p-5">
                        <span class="text-lg block dark:text-white"
                          >App Level troubleshooting</span
                        >
                        <p
                          class="text-tiny text-[#8D8FB7] mt-1 dark:text-white"
                        >
                          Quickly resolve app-specific issues with targeted
                          troubleshooting to minimize downtime add keep your
                          operations smooth.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div
                        class="relative overflow-hidden dark:border-gray-600 border-white border from-white dark:to-slate-800 shadow bg-no-repeat bg-cover bg-center bg-[url('/public/add-on-bg-light.png')] dark:bg-[url('/public/dark-self-hosted-bg.png')] rounded-lg flex flex-col gap-2"
                      >
                        <div
                          class="border dark:border-gray-600 border-gray-200 relative mt-7"
                        ></div>
                        <div
                          class="absolute top-3 left-4 font-semibold dark:bg-blue-600 dark:text-white text-blue-600 w-fit bg-white rounded px-1.5 py-1 flex items-center justify-center"
                        >
                          <span class="material-symbols-outlined text-[25px]">
                            dynamic_form
                          </span>
                        </div>
                        <div class="p-5">
                          <span class="text-lg block dark:text-white"
                            >Custom Server Config</span
                          >
                          <p
                            class="text-tiny text-[#8D8FB7] mt-1 dark:text-white"
                          >
                            Tailor server configurations to your unique needs,
                            <br />
                            ensuring your infrastructure aligns with your
                            business requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div
                        class="relative overflow-hidden dark:border-gray-600 border-white border from-white dark:to-slate-800 shadow bg-no-repeat bg-cover bg-center bg-[url('/public/add-on-bg-light.png')] dark:bg-[url('/public/dark-self-hosted-bg.png')] rounded-lg flex flex-col gap-2"
                      >
                        <div
                          class="border dark:border-gray-600 border-gray-200 relative mt-7"
                        ></div>
                        <div
                          class="absolute top-3 left-4 font-semibold dark:bg-blue-600 dark:text-white text-blue-600 w-fit bg-white rounded px-1.5 py-1 flex items-center justify-center"
                        >
                          <span class="material-symbols-outlined text-[25px]">
                            support_agent
                          </span>
                        </div>
                        <div class="p-5">
                          <span class="text-lg block dark:text-white"
                            >High Priority Support
                          </span>
                          <p
                            class="text-tiny text-[#8D8FB7] mt-1 dark:text-white"
                          >
                            Access faster response times and dedicated
                            assistance to address critical issues, helping
                            maintain seamless server performance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="grid [25px]:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-5"
                >
                  <div>
                    <div
                      class="relative overflow-hidden dark:border-gray-600 border-white border from-white dark:to-slate-800 shadow bg-no-repeat bg-cover bg-center bg-[url('/public/add-on-bg-light.png')] dark:bg-[url('/public/dark-self-hosted-bg.png')] rounded-lg flex flex-col gap-2"
                    >
                      <div
                        class="border dark:border-gray-600 border-gray-200 relative mt-7"
                      ></div>
                      <div
                        class="absolute top-3 left-4 font-semibold dark:bg-blue-600 dark:text-white text-blue-600 w-fit bg-white rounded px-1.5 py-1 flex items-center justify-center"
                      >
                        <span class="material-symbols-outlined text-[25px]">
                          smart_toy
                        </span>
                      </div>
                      <div class="p-5">
                        <span class="text-lg block dark:text-white"
                          >AI Assistant
                          <span class="text-sm">(Coming soon)</span></span
                        >
                        <p
                          class="text-tiny text-[#8D8FB7] mt-1 dark:text-white"
                        >
                          Enhance management efficiency with AI-drive insights
                          and tools that monitor, predict, and optimize your
                          server environment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div
                        class="relative overflow-hidden dark:border-gray-600 border-white border from-white dark:to-slate-800 shadow bg-no-repeat bg-cover bg-center bg-[url('/public/add-on-bg-light.png')] dark:bg-[url('/public/dark-self-hosted-bg.png')] rounded-lg flex flex-col gap-2"
                      >
                        <div
                          class="border dark:border-gray-600 border-gray-200 relative mt-7"
                        ></div>
                        <div
                          class="absolute top-3 left-4 font-semibold dark:bg-blue-600 dark:text-white text-blue-600 w-fit bg-white rounded px-1.5 py-1 flex items-center justify-center"
                        >
                          <span class="material-symbols-outlined text-[25px]">
                            query_stats
                          </span>
                        </div>
                        <div class="p-5">
                          <span class="text-lg block dark:text-white"
                            >Optimisation Assist</span
                          >
                          <p
                            class="text-tiny text-[#8D8FB7] mt-1 dark:text-white"
                          >
                            Boost server performance with expert recommendations
                            and adjustments, tailored specifically to improve
                            your infrastructure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div
                        class="relative overflow-hidden dark:border-gray-600 border-white border from-white dark:to-slate-800 shadow bg-no-repeat bg-cover bg-center bg-[url('/public/add-on-bg-light.png')] dark:bg-[url('/public/dark-self-hosted-bg.png')] rounded-lg flex flex-col gap-2"
                      >
                        <div
                          class="border border-gray-200 dark:border-gray-600 relative mt-7"
                        ></div>
                        <div
                          class="absolute top-3 left-4 font-semibold text-blue-600 dark:text-sa-200 dark:text-gray-300 w-fit bg-white dark:bg-blue-700 rounded px-1 py-0.5 flex items-center justify-center"
                        >
                          <img src="/public/slack1.png" class="w-[26px] py-1" />
                        </div>
                        <div class="p-5">
                          <span class="text-lg dark:text-white block"
                            >Slack Channel</span
                          >
                          <p
                            class="text-tiny text-[#8D8FB7] dark:text-white mt-1"
                          >
                            Stay connected with our team for real-time support
                            and updates through a dedicated Slack channel
                            designed for you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="grid [25px]:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-5"
                >
                  <div>
                    <div
                      class="relative overflow-hidden dark:border-gray-600 border-white border from-white dark:to-slate-800 shadow bg-no-repeat bg-cover bg-center bg-[url('/public/add-on-bg-light.png')] dark:bg-[url('/public/dark-self-hosted-bg.png')] rounded-lg flex flex-col gap-2"
                    >
                      <div
                        class="border dark:border-gray-600 border-gray-200 relative mt-7"
                      ></div>
                      <div
                        class="absolute top-3 left-4 font-semibold dark:bg-blue-600 dark:text-white text-blue-600 w-fit bg-white rounded px-1.5 py-1 flex items-center justify-center"
                      >
                        <span class="material-symbols-outlined text-[25px]">
                          monitoring
                        </span>
                      </div>
                      <div class="p-5">
                        <span class="text-lg block dark:text-white"
                          >Pro-Active Monitoring</span
                        >
                        <p
                          class="text-tiny text-[#8D8FB7] mt-1 dark:text-white"
                        >
                          Identify potential issues before they arise with 24/7
                          monitoring and alert to keep your systems running
                          smoothly.
                        </p>
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
import headerTop from "../../components/header.vue";
import sidebar from "../../components/sidebar.vue";
export default {
  components: { headerTop, sidebar },
};
</script>
  
  <style>
</style>
  
  
  