<template>
  <div class="bg-gray-100 w-full h-auto flex">
    <sidebar class="" />
    <div class="w-full h-full sticky top-0 z-10">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full h-[calc(100vh-50px)]">
        <router-view></router-view>
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
        <div class="overflow-auto">
          <div class="grid grid-cols-2 mt-20">
            <div class="">
              <div class="flex font-bold text-7xl ml-8">
                <h1>Self-managed Cloud Hosting Solution.</h1>
              </div>
              <div class="flex text-2xl ml-8 mt-5 text-gray-600">
                <p>
                  Host and manage super fast WordPress, PHP, and Node.js
                  applications on VPS, VM, Cloud Instances and dedicated
                  servers. No technical knowledge required.
                </p>
              </div>

              <div class="flex ml-8 mt-4 font-semibold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <h1>No Restrictions on Traffic, Sites and Configuration.</h1>
              </div>

              <div class="flex ml-8 mt-2 font-semibold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <h1>Have Ultimate(root) Freedom on your Sites and servers.</h1>
              </div>

              <div class="flex ml-8 mt-2 font-extrabold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <h1>Save at least 40% of your managed hosting expenses.</h1>
              </div>

              <div>
                <a
                  href="https://app.serveravatar.com/register"
                  class="btn relative rounded-full w-56 p-3 mt-5 ml-8 inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-blue-800 group"
                >
                  <span
                    class="w-56 h-48 rounded-full bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
                  ></span>
                  <span
                    class="relative text-center w-full transition-colors duration-300 ease-in-out text-white"
                    >Start 7-Days Free Trial</span
                  >
                </a>
              </div>

              <div class="flex ml-10 mt-4">
                <span class="pi pi-verified text-blue-700 mr-1 mt-1"></span>
                <p class="mr-4">No Credit Card Required</p>
                <span class="pi pi-verified text-blue-700 mr-1 mt-1"></span>
                <p class="mr-4">Cancel Anytime</p>
                <span class="pi pi-verified text-blue-700 mr-1 mt-1"></span>
                <p class="mr-4">No Auto-charge</p>
              </div>
            </div>
            <div class="flex size-10/12 ml-auto mt-10">
              <img src="/public/hero-thumb-v6.png" alt="" />
            </div>
          </div>

          <div class="flex justify-center mt-16 font-bold text-7xl">
            <h1>Automate Everything!</h1>
          </div>

          <div class="grid grid-cols-3 ml-32 mt-20 mb-20">
            <div>
              <span
                class="pi pi-server text-4xl text-blue-800 mb-12 ml-32"
              ></span>
              <h1 class="font-bold text-2xl mb-4">Automatic Server Setup</h1>
              <p
                class="flex justify-center items-center w-80 mb-3 text-gray-700 dark:text-gray-400"
              >
                You do not have to manually install and configure services on
                your server. You can just select a desired tech stack and
                ServerAvatar will handle the rest.
              </p>
            </div>
            <div>
              <span
                class="pi pi-objects-column text-4xl text-blue-800 mb-12 ml-32"
              ></span>
              <h1 class="font-bold text-2xl mb-4">Automatic Deployments</h1>
              <p
                class="flex justify-center items-center w-72 mb-3 text-gray-700 dark:text-gray-400"
              >
                You do not have to manually upload files on your server to
                install anything. Use our auto-installers or Git integrations to
                automate the deployments.
              </p>
            </div>
            <div>
              <span
                class="pi pi-refresh text-4xl text-blue-800 mb-12 ml-32"
              ></span>
              <h1 class="font-bold text-2xl mb-4">Automatic Backups</h1>
              <p
                class="flex justify-center items-center w-72 mb-3 text-gray-700 dark:text-gray-400"
              >
                With ServerAvatar's Backup feature, you can easily create,
                schedule, and manage backups for your filesystem, applications,
                and databases.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 mt-20">
            <div class="">
              <div class="flex font-bold text-7xl ml-8">
                <h1>Save More with Smart Approach</h1>
              </div>
              <div class="flex text-2xl ml-8 mt-5 text-gray-600">
                <p>
                  ServerAvatar is designed as a control panel. Hence, It allows
                  you to choose the server provider of your choice. Allowing you
                  the freedom to control and manage your hosting expenses.
                </p>
              </div>

              <div class="flex ml-8 mt-4 font-semibold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <h1>
                  Manage Unlimited sites and servers at flat ServerAvatar fees!
                </h1>
              </div>

              <div class="flex ml-8 mt-2 font-semibold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <h1>
                  Control and pay server cost directly to server provider.
                </h1>
              </div>

              <div class="flex ml-8 mt-2 font-extrabold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <h1>
                  Retain root access to your servers - Have ultimate control!
                </h1>
              </div>

              <div>
                <h1 class="text-gray-600 ml-10 mt-6 text-lg mb-10">
                  <span class="font-bold text-black">Fact:</span> Managed
                  hosting users save at least 40% of their hosting expenses
                  after moving to ServerAvatar.
                </h1>
              </div>
            </div>
            <div class="flex size-10/12 ml-auto mt-10">
              <img src="/public/Thum-2.png" alt="" />
            </div>
          </div>

          <div class="grid grid-cols-2 ml-8 mt-10">
            <div class="size-3/4">
              <img src="/public/Thum.jpeg" alt="" />
            </div>

            <div>
              <div class="justify-center text-7xl font-bold">
                <h1>Manage everything from one dashboard</h1>
              </div>
              <div class="p-5 text-1xl font-semibold text-gray-700">
                <h1>
                  Simplify your hosting with ServerAvatar. We provide everything
                  you need on a single dashboard.
                </h1>
              </div>

              <div class="flex ml-8 mt-4 font-semibold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <p>1-click Installer</p>
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 ml-4"
                ></span>
                <p>Deploy custom apps</p>
              </div>

              <div class="flex ml-8 mt-2 font-semibold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <p>Automatic and Custom SSL</p>
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 ml-4"
                ></span>
                <p>Manage Databases</p>
              </div>

              <div class="flex ml-8 mt-2 font-extrabold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <p>Remote Database Access</p>
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 ml-4"
                ></span>
                <p>SSL Certificates</p>
              </div>

              <div class="flex ml-8 mt-2 font-extrabold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <p>Git - Push and Deploy</p>
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 ml-4"
                ></span>
                <p>Cronjobs</p>
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 ml-4"
                ></span>
                <p>File Manager</p>
              </div>

              <div class="flex ml-8 mt-2 font-extrabold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <p>Automatic Security Updates</p>
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 ml-4"
                ></span>
                <p>Automated Staging Area</p>
              </div>

              <div class="flex ml-8 mt-2 font-extrabold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <p>Temporary Domains</p>
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 ml-4"
                ></span>
                <p>Logs</p>
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 ml-4"
                ></span>
                <p>DNS (Cloudflare)</p>
              </div>

              <div class="flex ml-8 mt-2 font-extrabold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <p>SSH/SFTP Access</p>
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 ml-4"
                ></span>
                <p>Multiple Tech Stacks</p>
              </div>

              <div class="flex ml-8 mt-2 font-extrabold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <p>Automated Server Provisioning</p>
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 ml-4"
                ></span>
                <p>Backups and Restore</p>
              </div>
              <div>
                <div>
                  <a
                    href="https://serveravatar.com/features"
                    class="btn relative rounded-full w-56 p-3 mt-5 ml-8 inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-blue-800 group"
                  >
                    <span
                      class="w-56 h-48 rounded-full bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
                    ></span>
                    <span
                      class="relative text-center w-full transition-colors duration-300 ease-in-out text-white"
                      >See All Features</span
                    >
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 mt-20">
            <div class="">
              <div class="flex font-bold text-7xl ml-8 mt-16">
                <h1>Work with your Team, Or clients!</h1>
              </div>
              <div class="flex text-2xl ml-8 mt-5 text-gray-600">
                <p>
                  ServerAvatar makes it easy for you to share access with your
                  team members whether temporary or permanent. It is possible.
                </p>
              </div>

              <div class="flex ml-8 mt-4 font-semibold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <h1>Create and Manage Roles with Permissions</h1>
              </div>

              <div class="flex ml-8 mt-2 font-semibold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <h1>Manage Multiple Teams and Members</h1>
              </div>

              <div class="flex ml-8 mt-2 font-extrabold">
                <span class="pi pi-verified text-green-700 mr-3 mt-1"></span>
                <h1>Share a server temporarily with freelancer</h1>
              </div>
            </div>
            <div class="flex size-full ml-auto">
              <img src="/public/Tea.png" alt="" />
            </div>
          </div>

          <div class="grid grid-cols-2 ml-6 mt-10">
            <div class="size-full">
              <img src="/public/Design-1.jpeg" alt="" />
            </div>

            <div>
              <div class="justify-center text-7xl font-bold">
                <h1>Integrate your apps & do more</h1>
              </div>
              <div class="p-5 text-2xl text-gray-700">
                <h1>
                  Integrate with various services you use on regular basis to
                  host your sites, manage backups and manage code. It will save
                  you lots of time in repetitive tasks.
                </h1>
              </div>

              <div class="flex ml-8 mt-4 font-semibold">
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 text-xl"
                ></span>
                <p>Automated Provisioning with Cloud Platform Integrations</p>
              </div>

              <div class="flex ml-8 mt-2 font-semibold">
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 text-xl"
                ></span>
                <p>S3 Buckets, Wasabi and Google Drive for Backup storage</p>
              </div>

              <div class="flex ml-8 mt-2 font-extrabold">
                <span
                  class="pi pi-verified text-green-700 mr-3 mt-1 text-xl"
                ></span>
                <p>Build &Deploy from Github, Gitlab and BitBucket.</p>
              </div>

              <div>
                <div>
                  <a
                    href="https://serveravatar.com/integrations/"
                    class="btn relative rounded-full w-56 p-3 mt-5 ml-8 inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-blue-800 group"
                  >
                    <span
                      class="w-56 h-48 rounded-full bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
                    ></span>
                    <span
                      class="relative text-center w-full transition-colors duration-300 ease-in-out text-white"
                      >See All Integrations</span
                    >
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="p-3">
            <div class="grid grid-cols-3 gap-3 mt-20">
              <div
                class="border-2 border-black rounded-md h-56 hover:bg-blue-700 hover:text-white transition duration-700 ease-in-out"
              >
                <span
                  class="font-bold text-xl ml-5 mt-5 mb-5 pi pi-download"
                ></span>
                <h1 class="font-bold text-2xl ml-5 mb-5">
                  Automatic Installation
                </h1>
                <p class="ml-5">
                  Configure a desired tech stack on your VM without touching the
                  command line.
                </p>
                <a
                  href="https://serveravatar.com/docs/server-management/installation/direct-method"
                  target="_blank"
                >
                  <span class="pi pi-arrow-right ml-5 mt-5"></span>
                </a>
              </div>
              <div
                class="border-2 border-black rounded-md h-56 hover:bg-blue-700 hover:text-white transition duration-700 ease-in-out"
              >
                <span
                  class="font-bold text-xl ml-5 mt-5 mb-5 pi pi-desktop"
                ></span>
                <h1 class="font-bold text-2xl ml-5 mb-5">Quick Deployments</h1>
                <p class="ml-5">
                  Deploy from Git with an additional benefit of "Push to Deploy"
                  functionality.
                </p>
                <a
                  href="https://serveravatar.com/docs/application/deploy-node.js-site/git-deploy/getting-started"
                  target="_blank"
                >
                  <span class="pi pi-arrow-right ml-5 mt-5"></span>
                </a>
              </div>
              <div
                class="border-2 border-black rounded-md h-56 hover:bg-blue-700 hover:text-white transition duration-700 ease-in-out"
              >
                <span
                  class="font-bold text-xl ml-5 mt-5 mb-5 pi pi-arrow-circle-down"
                ></span>
                <h1 class="font-bold text-2xl ml-5 mb-5">
                  One-Click Installer
                </h1>
                <p class="ml-5">
                  The quickest and most convenient way to deploy popular web
                  applications.
                </p>
                <a
                  href="https://serveravatar.com/docs/application/one-click-installer/getting-started"
                  target="_blank"
                >
                  <span class="pi pi-arrow-right ml-5 mt-5"></span>
                </a>
              </div>
            </div>
          </div>

          <div class="p-3">
            <div class="grid grid-cols-3 gap-3">
              <div
                class="border-2 border-black rounded-md h-56 hover:bg-blue-700 hover:text-white transition duration-700 ease-in-out"
              >
                <span
                  class="font-bold text-xl ml-5 mt-5 mb-5 pi pi-shopping-bag"
                ></span>
                <h1 class="font-bold text-2xl ml-5 mb-5">
                  Powerful File Manager
                </h1>
                <p class="ml-5">
                  Manage, edit, extract, compress and perform other actions on
                  your files.
                </p>
                <a
                  href="https://serveravatar.com/docs/application/file-manager/"
                  target="_blank"
                >
                  <span class="pi pi-arrow-right ml-5 mt-5"></span>
                </a>
              </div>
              <div
                class="border-2 border-black rounded-md h-56 hover:bg-blue-700 hover:text-white transition duration-700 ease-in-out"
              >
                <span
                  class="font-bold text-xl ml-5 mt-5 mb-5 pi pi-shield"
                ></span>
                <h1 class="font-bold text-2xl ml-5 mb-5">
                  Automatic SSL Certificates
                </h1>
                <p class="ml-5">
                  One-Click SSL certificates for your sites with fully automated
                  renewals.
                </p>
                <a
                  href="https://serveravatar.com/docs/application/automatic-installation/"
                  target="_blank"
                >
                  <span class="pi pi-arrow-right ml-5 mt-5"></span>
                </a>
              </div>
              <div
                class="border-2 border-black rounded-md h-56 hover:bg-blue-700 hover:text-white transition duration-700 ease-in-out"
              >
                <span
                  class="font-bold text-xl ml-5 mt-5 mb-5 pi pi-clone"
                ></span>
                <h1 class="font-bold text-2xl ml-5 mb-5">
                  One-Click Site Cloning
                </h1>
                <p class="ml-5">
                  Clone your sites on same as well as different servers with a
                  single click.
                </p>
                <a
                  href="https://serveravatar.com/docs/application/clone/"
                  target="_blank"
                >
                  <span class="pi pi-arrow-right ml-5 mt-5"></span>
                </a>
              </div>
            </div>
          </div>

          <div class="p-3">
            <div class="grid grid-cols-3 gap-3">
              <div
                class="border-2 border-black rounded-md h-56 hover:bg-blue-700 hover:text-white transition duration-700 ease-in-out"
              >
                <span
                  class="font-bold text-xl ml-5 mt-5 mb-5 pi pi-globe"
                ></span>
                <h1 class="font-bold text-2xl ml-5 mb-5">Temporary Domains</h1>
                <p class="ml-5">
                  You do not need a domain to create a new project, we provide
                  temporary domains.
                </p>
                <a
                  href="https://serveravatar.com/docs/application/staging-area"
                  target="_blank"
                >
                  <span class="pi pi-arrow-right ml-5 mt-5"></span>
                </a>
              </div>
              <div
                class="border-2 border-black rounded-md h-56 hover:bg-blue-700 hover:text-white transition duration-700 ease-in-out"
              >
                <span class="font-bold text-xl ml-5 mt-5 mb-5 pi pi-cog"></span>
                <h1 class="font-bold text-2xl ml-5 mb-5">
                  Dedicated PHP Settings
                </h1>
                <p class="ml-5">
                  Even in the same server, each app can have different PHP
                  settings and version.
                </p>
                <a
                  href="https://serveravatar.com/docs/application/php-settings/"
                  target="_blank"
                >
                  <span class="pi pi-arrow-right ml-5 mt-5"></span>
                </a>
              </div>
              <div
                class="border-2 border-black rounded-md h-56 hover:bg-blue-700 hover:text-white transition duration-700 ease-in-out"
              >
                <span
                  class="font-bold text-xl ml-5 mt-5 mb-5 pi pi-envelope"
                ></span>
                <h1 class="font-bold text-2xl ml-5 mb-5">
                  One-Click Staging Area
                </h1>
                <p class="ml-5">
                  Create a staging area with one click, make changes, and push
                  to production..
                </p>
                <a
                  href="https://serveravatar.com/docs/application/staging-area"
                  target="_blank"
                >
                  <span class="pi pi-arrow-right ml-5 mt-5"></span>
                </a>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2">
            <div>
              <div class="text-6xl font-bold ml-8 mt-10">
                <h1>Most frequently asked questions</h1>
              </div>
              <p class="text-gray-700 text-xl ml-8 mt-5">
                ServerAvatar is a very unique tool for developers and webmasters
                in web hosting market. Here are some of the questions we receive
                on regular basis. Feel free to use the contact form if your
                question is not covered here.
              </p>
              <div>
                <a
                  href="https://serveravatar.com/contact-us/"
                  class="btn relative rounded-full w-56 p-3 mt-5 ml-8 inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-blue-800 group"
                >
                  <span
                    class="w-56 h-48 rounded-full bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
                  ></span>
                  <span
                    class="relative text-center w-full transition-colors duration-300 ease-in-out text-white"
                    >Ask More questions</span
                  >
                </a>
              </div>
            </div>

            <div>
              <div class="text-2xl font-bold ml-5 mt-10 hover:text-blue-700">
                <h1>Q. Is it alternative to managed hosting or cloudways?</h1>
                <hr class="mt-5 mb-5" />
              </div>
              <p class="text-xl text-gray-700 ml-5">
                Yes, ServerAvatar is an alternative to managed hosting. The
                difference is, You have full access to your server in case of
                ServerAvatar. You can also host sites on custom Ubuntu servers.
              </p>
              <hr class="mt-5 mb-5 ml-5" />
              <h1 class="text-2xl font-bold ml-5 mt-10 hover:text-blue-700">
                Q. Can I host multiple sites on a single Server?
              </h1>
              <hr class="mt-5 mb-5 ml-5" />
              <h1 class="text-2xl font-bold ml-5 mt-10 hover:text-blue-700">
                Q. Are there any additional charges on top of subscription?
              </h1>
              <hr class="mt-5 mb-5 ml-5" />
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
  name: "Customers",
  components: {
    headerTop,
    sidebar,
  },
};
</script>
  
    <style>
</style>