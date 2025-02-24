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
              class="las la-money-check-alt text-xl ml-5 dark:hover:text-gray-600 text-gray-500 hover:text-gray-800"
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
            class="ml-5 flex items-center m-3 text-gray-500 dark:hover:text-gray-600 hover:text-gray-800 font-medium"
          >
            <h1>Account</h1>
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
            class="ml-5 flex items-center m-3 text-gray-500 dark:hover:text-gray-600 hover:text-gray-800 font-medium"
          >
            <h1>Integration</h1>
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
          <div class="text-xl dark:text-white font-semibold">
            <h1>How it works?</h1>
          </div>
          <div class="grid grid-cols-3 gap-10 mt-5">
            <div
              class="grid grid-cols-2 gap-5 p-5 border dark:bordr-gray-800 rounded-lg h-auto bg-gradient-to-t from-[#EBF3FF] to-white dark:from-slate-800 dark:to-slate-800 dark:bg-gray-800 dark:text-white"
            >
              <div class="py-10">
                <img src="/public/step1.png" alt="" />
              </div>
              <div class="mt-2">
                <h1 class="text-blue-700 font-bold text-lg">STEP 1</h1>
                <p class="text-lg font-bold">
                  Share Your Referral <br />
                  Link
                </p>
                <p class="text-gray-500 dark:text-white">
                  Share your unique referral link or landing page with your
                  friend.
                </p>
              </div>
            </div>
            <div
              class="grid grid-cols-2 gap-5 p-5 border dark:bordr-gray-800 rounded-lg h-auto bg-gradient-to-t from-[#EBF3FF] to-white dark:from-slate-800 dark:to-slate-800 dark:bg-gray-800 dark:text-white"
            >
              <div class="mt-2">
                <img src="/public/step2.png" alt="" />
              </div>
              <div class="">
                <h1 class="text-blue-700 font-bold text-lg">STEP 2</h1>
                <p class="text-lg font-bold">Friend Signs Up</p>
                <p class="text-gray-500 dark:text-white">
                  Referred customer will receive 1 month of free services from
                  ServerAvatar upon signing up for any ServerAvatar plan.
                </p>
              </div>
            </div>
            <div
              class="grid grid-cols-2 gap-5 p-5 border dark:bordr-gray-800 rounded-lg h-auto bg-gradient-to-t from-[#EBF3FF] to-white dark:from-slate-800 dark:to-slate-800 dark:bg-gray-800 dark:text-white"
            >
              <div class="mt-4">
                <img src="/public/step3.png" alt="" />
              </div>
              <div class="">
                <h1 class="text-blue-700 font-bold text-lg">STEP 3</h1>
                <p class="text-lg font-bold">Earn Your Reward</p>
                <p class="text-gray-500 dark:text-white">
                  You will receive the free credit in your account based on one
                  month of the plan selected by your referred customer.
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="text-xl font-semibold mt-5">
              <h1 class="dark:text-white">Status</h1>
            </div>
            <div
              class="bg-white dark:bg-gray-800 dark:text-white mt-5 h-96 rounded-lg shadow-lg"
            >
              <div class="grid grid-cols-3 p-5 gap-10 h-56">
                <div
                  class="border rounded-xl shadow-md bg-gradient-to-t from-[#EBF3FF] to-white dark:from-slate-800 dark:to-slate-800 dark:bg-gray-800"
                >
                  <div class="flex p-5">
                    <img src="/public/1f517.png" alt="" />
                    <div class="ml-96 text-blue-600 font-bold text-lg">
                      <h1 class="">13</h1>
                    </div>
                  </div>
                  <div class="ml-5 font-semibold">
                    <h1>Total Clicks</h1>
                    <hr class="mt-3 mr-3" />
                  </div>
                  <div class="p-2 ml-3">
                    <h1>
                      See how many times you've shared your unique referral
                      link.
                    </h1>
                  </div>
                </div>
                <div
                  class="border rounded-xl shadow-md bg-gradient-to-t from-[#EBF3FF] to-white dark:from-slate-800 dark:to-slate-800 dark:bg-gray-800"
                >
                  <div class="flex p-5">
                    <img src="/public/1f464.png" alt="" />
                    <div class="ml-96 text-blue-600 font-bold text-lg">
                      <h1 class="">14</h1>
                    </div>
                  </div>
                  <div class="ml-5 font-semibold">
                    <h1>Total Registrations</h1>
                    <hr class="mt-3 mr-3" />
                  </div>
                  <div class="p-2 ml-3">
                    <h1>
                      See how many new users signed up using your referral.
                    </h1>
                  </div>
                </div>
                <div
                  class="border rounded-xl shadow-md bg-gradient-to-t from-[#EBF3FF] to-white dark:from-slate-800 dark:to-slate-800 dark:bg-gray-800"
                >
                  <div class="flex p-5">
                    <img src="/public/1f91d.png" alt="" />
                    <div class="ml-96 text-blue-600 font-bold text-lg">
                      <h1 class="">8</h1>
                    </div>
                  </div>
                  <div class="ml-5 font-semibold">
                    <h1>Successful Referrals</h1>
                    <hr class="mt-3 mr-3" />
                  </div>
                  <div class="p-2 ml-3">
                    <h1>
                      Check out the validity of free months you get from your
                      referrals.
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <div class="text-lg font-semibold p-5">
                  <h1>Share your unique referral Link</h1>
                </div>
                <div class="grid grid-cols-3">
                  <div class="">
                    <span
                      class="inline-flex items-center dark:text-white w-full h-10 ml-5 px-3 text-sm text-black border border-gray-300 rounded-md"
                    >
                      https://app.satesting1.homes?r=IyQwaIdO
                    </span>
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
            <div>
              <div class="mt-5 dark:text-white font-semibold text-lg">
                <h1>Instructions</h1>
              </div>
              <div
                class="text-gray-500 bg-white h-auto mt-4 dark:bg-gray-800 dark:text-white rounded-lg p-5 space-y-3 mb-32"
              >
                <h1>
                  A cookie will be stored on a prospect's device for a duration
                  of 7 days.
                </h1>
                <h1>
                  If a prospect signs up within these 7-day period, they will be
                  marked as your referral.
                </h1>
                <h1>
                  During the sign-up process, the prospect can select their plan
                  and will receive
                  <span class="font-semibold dark:text-white text-black"
                    >1 month of free services</span
                  >
                  based on the plan they select.
                </h1>
                <h1>
                  Once your referred customer purchases a ServerAvatar plan, you
                  will receive free credit, and the credit will be based on the
                  monthly plan of that referred customer even though they
                  purchased yearly plan. This credit will be added to your
                  account within 24 hours.
                </h1>
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
  
  
  