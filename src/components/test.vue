<!-- <template>
  <div class="h-screen w-[300px] bg-gray-800">
    <div class="bg-gray-700 h-[50px]">
      <div class="text-xl font-bold text-center flex items-center justify-center text-white h-full">Web Dev</div>
    </div>
    <div class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-gray-900">
      <div class="menu-item text-left px-2 whitespace-nowrap">
        <div class="profile flex justify-center items-center text-center p-5 text-gray-500">
          <img
            src="https://avatars.githubusercontent.com/u/970215874?v=4"
            class="h-24 w-24 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4"
            alt="Avatar"/>
          <h5 class="text-xl font-medium leading-tight">My name</h5>
        </div>
      </div>

      <div
        class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
        <router-link to="/" class="px-2 flex space-x-2">
          <span class="pi pi-dashboard" v-tooltip.right="'Dashboard'"></span>
          <span>Dashboard</span>
        </router-link>
      </div>

      <div
        class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
        <router-link to="/user" class="px-2 flex space-x-2">
          <span class="pi pi-user" v-tooltip.right="'User'"></span>
          <span>User</span>
        </router-link>
      </div>

      <div
        class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
        <router-link to="/product" class="px-2 flex space-x-2">
          <span class="pi pi-box" v-tooltip.right="'Product'"></span>
          <span>Product</span>
        </router-link>
      </div>

      <div  
        class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
        <router-link to="/contact" class="px-2 flex space-x-2">
          <span class="pi pi-whatapp" v-tooltip.right="'Contact'"></span>
          <span>Contact</span>
        </router-link>
      </div>

      <div
        class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
        <router-link to="/customer" class="px-2 flex space-x-2">
          <span class="pi pi-shield" v-tooltip.right="'Customer'"></span>
          <span>Customer</span>
        </router-link>
      </div>

      <div
        class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
        <router-link to="/activation" class="px-2 flex space-x-2">
          <span class="pi pi-check" v-tooltip.right="'Activation'"></span>
          <span>Activation</span>
        </router-link>
      </div>

      <div
        class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
        <router-link to="/setting" class="px-2 flex space-x-2">
          <span class="pi pi-cog" v-tooltip.right="'Setting'"></span>
          <span>Setting</span>
        </router-link>
      </div>

      <div class="menu-item text-left px-2 justify-self-end">
        <a
          href="https://website-nuxt-fractal.vercel.app/"
          target="_blank"
          class="pi pi-question"
          v-tooltip.right="'About Me'"></a>
        <span>About Me</span>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style> -->


<template>
  <div class="container mx-auto mt-5">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr class="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Name</th>
          <th class="py-3 px-6 text-left">IP Address</th>
          <th class="py-3 px-6 text-left">Status</th>
          <th class="py-3 px-6 text-left">Web Server</th>
          <th class="py-3 px-6 text-left">Database</th>
          <th class="py-3 px-6 text-left">OS</th>
          <th class="py-3 px-6 text-left">Health</th>
          <th class="py-3 px-6 text-left">Actions</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6">mukesh-dont-dm</td>
          <td class="py-3 px-6">204.48.28.77</td>
          <td class="py-3 px-6"><span class="text-green-500">●</span></td>
          <td class="py-3 px-6">Nginx</td>
          <td class="py-3 px-6">MySQL</td>
          <td class="py-3 px-6">22.04</td>
          <td class="py-3 px-6">✔️</td>
          <td class="py-3 px-6">
            <button class="text-blue-500 hover:text-blue-700">Edit</button>
            <button class="text-red-500 hover:text-red-700">Delete</button>
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6">vishal-n8n-ch</td>
          <td class="py-3 px-6">192.34.56.8</td>
          <td class="py-3 px-6"><span class="text-green-500">●</span></td>
          <td class="py-3 px-6">Nginx</td>
          <td class="py-3 px-6">MongoDB</td>
          <td class="py-3 px-6">24.04</td>
          <td class="py-3 px-6">✔️</td>
          <td class="py-3 px-6">
            <button class="text-blue-500 hover:text-blue-700">Edit</button>
            <button class="text-red-500 hover:text-red-700">Delete</button>
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6">vishal-node-sem</td>
          <td class="py-3 px-6">174.138.41.46</td>
          <td class="py-3 px-6"><span class="text-green-500">●</span></td>
          <td class="py-3 px-6">Nginx</td>
          <td class="py-3 px-6">MongoDB</td>
          <td class="py-3 px-6">24.04</td>
          <td class="py-3 px-6">✔️</td>
          <td class="py-3 px-6">
            <button class="text-blue-500 hover:text-blue-700">Edit</button>
            <button class="text-red-500 hover:text-red-700">Delete</button>
          </td>
        </tr>
        <tr class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-3 px-6">Bhavik-dont-dm</td>
          <td class="py-3 px-6">165.22.145.10</td>
          <td class="py-3 px-6"><span class="text-green-500">●</span></td>
          <td class="py-3 px-6">Apache</td>
          <td class="py-3 px-6">MySQL</td>
          <td class="py-3 px-6">24.04</td>
          <td class="py-3 px-6">✔️</td>
          <td class="py-3 px-6">
            <button class="text-blue-500 hover:text-blue-700">Edit</button>
            <button class="text-red-500 hover:text-red-700">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ServerTable',
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>

