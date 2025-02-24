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
              class="pi pi-shopping-cart ml-5 text-gray-500 hover:text-gray-800 dark:hover:text-gray-600"
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
            class="ml-5 flex items-center m-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-600 font-medium"
          >
            <h1>Reseller Panel</h1>
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
          <div>
            <div
              class="w-full xl:px-10 px-5 py-6 mt-4 rounded-md shadow from-white dark:from-slate-800 to-[#ECF3FF] dark:to-slate-800 grid xl:grid-cols-5 grid-cols-1 xl:gap-10 gap-6 content-center bg-no-repeat bg-cover bg-center bg-[url('/public/selfhostedbg2.png')] dark:bg-[url('/public/dark-self-hosted-bg.png')]"
            >
              <div class="xl:col-span-3">
                <div class="">
                  <h2
                    class="text-4xl mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#076AFF] to-[#1536C1] font-medium"
                  >
                    Welcome to
                    <span class="border-b-4 border-yellow-500"
                      >Reseller Panel</span
                    >
                  </h2>
                  <!-- <h2 class="text-4xl mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#076AFF] to-[#1536C1] font-medium"></h2> -->
                </div>
                <p class="mt-5 text-gray-500 dark:text-gray-100">
                  Discover the new Reseller Panel for seamless server
                  management. Customize and control your platform with ease,
                  designed specifically for your business needs. Enjoy expert
                  support and streamlined processes that enhance your management
                  experience.
                </p>
                <div
                  class="flex-1 flex gap-3 mt-5 relative bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 truncate rounded-md pl-3"
                >
                  <h1
                    class="text-sa-500 flex gap-2 text-tiny items-center border-r pr-3 py-2"
                  >
                    <span class="material-symbols-outlined"> key </span> License
                    Key
                  </h1>
                  <div class="relative flex-1 py-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      readonly=""
                      class="w-full text-[13px] border-0 p-0 bg-gray-50 dark:bg-gray-700 dark:text-white text-neutral-500"
                      value="UBGcJX7MG3gKjstQA7VdT3JmedFLYrI3I4ZBrpPRJ4oD0H6GFKHtUZRVPugnpwmC"
                    /><button
                      type="button"
                      class="absolute inset-y-0 right-0 flex items-center"
                    >
                      <span
                        class="material-symbols-outlined text-lg text-neutral-500 bg-gray-50 dark:bg-gray-700 pl-3"
                      >
                        visibility
                      </span>
                    </button>
                  </div>
                  <button class="bg-sa-500 bg-blue-600 text-white px-2">
                    <i class="las la-copy text-lg"></i>
                  </button>
                </div>
              </div>
              <div
                class="flex justify-self-center xl:justify-end xl:col-span-2 h-fit"
              >
                <div
                  class="max-w-sm bg-white border dark:border-sa-500 dark:border-blue-600 border-gray-200 dark:bg-slate-800 dark:text-white rounded-lg py-3 px-3.5 relative"
                >
                  <div class="max-w-[300px] min-w-[200px]">
                    <div class="">
                      <div class="flex flex-wrap items-center gap-3">
                        <div
                          class="bg-gradient-to-t from-blue-50 to-white dark:from-gray-700 dark:to-gray-700 border dark:border-0 rounded-full py-1 px-2 h-fit flex justify-center items-center"
                          style="
                            box-shadow: rgba(7, 106, 255, 0.28) 0px 0px 11.31px
                              0px;
                          "
                        >
                          <span
                            class="material-symbols-outlined dark:text-blue-600 text-xl text-blue-600"
                          >
                            calendar_month
                          </span>
                        </div>
                        <div class="rounded-y-md dark:border-gray-600 pl-2.5">
                          <p class="text-gray-500 dark:text-gray-300 text-tiny">
                            Purchase Date
                          </p>
                          <span class="text-base dark:text-gray-200"
                            >2024-09-09 13:32:11</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="my-4">
                      <div class="flex flex-wrap items-center gap-3">
                        <div
                          class="bg-gradient-to-t from-blue-50 to-white dark:from-gray-700 dark:to-gray-700 border dark:border-0 rounded-full py-1 px-2 h-fit flex justify-center items-center"
                          style="
                            box-shadow: rgba(7, 106, 255, 0.28) 0px 0px 11.31px
                              0px;
                          "
                        >
                          <span
                            class="material-symbols-outlined dark:text-blue-600 text-xl text-blue-600"
                          >
                            public
                          </span>
                        </div>
                        <div class="rounded-y-md dark:border-gray-600 pl-2.5">
                          <p class="text-gray-500 dark:text-gray-300 text-tiny">
                            Domain
                          </p>
                          <div class="flex items-center">
                            <span
                              class="text-base dark:text-gray-200 max-w-[200px] truncate block v-popper--has-tooltip"
                              >whitelabel.satesting1.homes</span
                            ><button class="ml-1.5 v-popper--has-tooltip">
                              <i
                                class="las la-pencil-alt text-xl text-green-500"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <div class="flex flex-wrap items-center gap-3">
                        <div
                          class="bg-gradient-to-t from-blue-50 to-white dark:from-gray-700 dark:to-gray-700 border dark:border-0 rounded-full py-0.5 px-1.5 h-fit flex justify-center items-center"
                          style="
                            box-shadow: rgba(7, 106, 255, 0.28) 0px 0px 11.31px
                              0px;
                          "
                        >
                          <span
                            class="material-symbols-outlined dark:text-blue-600 text-2xl text-blue-600"
                          >
                            attach_money
                          </span>
                        </div>
                        <div class="rounded-y-md dark:border-gray-600 pl-2.5">
                          <p
                            class="mb-1 text-gray-500 dark:text-gray-300 text-tiny"
                          >
                            Pricing
                          </p>
                          <span class="text-base dark:text-gray-200">$149</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="leading-none dark:text-white font-medium text-lg mt-5">
            <h1>General Specifications 🚀</h1>
          </div>
          <div class="grid grid-cols-4 gap-5 mt-5">
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-cyan-400 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined">query_stats</span>
              <span class="text-lg font-medium">Effortless Log Analysis</span>
              <span class="text-sm text-slate-500 text-opacity-95">
                Unleash log analysis power effortlessly. Our minimal setup gets
                you running in minutes. Dive into insightful analytics for
                hassle-free, data-driven decisions.
              </span>
            </div>
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-blue-700 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined">dashboard</span>
              <span class="text-lg font-medium">Dynamic Dashboard</span>
              <span class="text-sm text-slate-500 text-opacity-95">
                Visualize and analyze your data with customizable filters for
                tailored insights.
              </span>
            </div>
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-cyan-400 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined">video_label</span>
              <span class="text-lg font-medium">White Labeling</span>
              <span class="text-sm text-slate-500 text-opacity-95">
                Make our platform your own! Customize the user experience with
                your brand identity.
              </span>
            </div>
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-blue-700 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined">group</span>
              <span class="text-lg font-medium">Team Management</span>
              <span class="text-sm text-slate-500 text-opacity-95">
                Empower collaboration and control access with efficient user
                management and permission settings.
              </span>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-5 mt-5">
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-cyan-400 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined">sentiment_satisfied</span>
              <span class="text-lg font-medium">Lifetime Peace of Mind</span>
              <span class="text-sm text-slate-500 text-opacity-95">
                Enjoy ongoing value and confidence with access to perpetual
                updates, dedicated support, and worry-free service.
              </span>
            </div>
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-blue-700 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined">dns</span>
              <span class="text-lg font-medium">In-App Insights</span>
              <span class="text-sm text-slate-500 text-opacity-95">
                Uncover the inner workings of your applications and pinpoint
                areas for optimization with granular, application-level log
                analysis.
              </span>
            </div>
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-cyan-400 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined">monitoring</span>
              <span class="text-lg font-medium">Data Vision</span>
              <span class="text-sm text-slate-500 text-opacity-95">
                Transform complex data into crystal-clear insights with
                intuitive graphs and charts.
              </span>
            </div>
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-blue-700 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined">readiness_score</span>
              <span class="text-lg font-medium">Performance Insights</span>
              <span class="text-sm text-slate-500 text-opacity-95">
                Get to the bottom of slowdowns. InsightHub analyzes request
                patterns, identifies bottlenecks, and helps you optimize your
                applications for peak performance.
              </span>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-5 mt-5 mb-10">
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-cyan-400 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined">cards</span>
              <span class="text-lg font-medium">User-Friendly Interface</span>
              <span class="text-sm text-slate-500 text-opacity-95">
                No technical expertise needed. InsightHub's intuitive interface
                makes it easy for anyone to monitor their servers with
                confidence.
              </span>
            </div>
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-blue-700 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined">groups</span>
              <span class="text-lg font-medium">Visitor Insights</span>
              <span class="text-sm text-slate-500 text-opacity-95">
                Track user journeys across your site. See popular pages, paths
                taken, and engagement metrics to understand how visitors
                navigate and interact with your content.
              </span>
            </div>
            <div
              class="bg-white dark:text-white dark:bg-slate-800 rounded-lg border-t-4 border-cyan-400 text-center p-5 flex flex-col gap-2"
            >
              <span class="material-symbols-outlined"
                >admin_panel_settings</span
              >
              <span class="text-lg font-medium"
                >Stay GDPR-Ready with InsightHub</span
              >
              <span class="text-sm text-slate-500 text-opacity-95">
                Set granular permissions and access levels to ensure only
                authorized individuals see your server data.
              </span>
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
    
    
    