<template>
  <div>
    <div
      @click="openModal"
      class="relative cursor-pointer rounded-lg flex items-center bg-[#E5F0FF] dark:bg-gray-700 border-t-2 border-blue-500 px-3 py-4 focus:ring-0 focus:outline-none"
    >
      <div class="block text-tiny font-medium w-full">
        <div class="flex items-center gap-3 text-sa-500">
          <div class="flex justify-center items-center px-1.5 rounded text-blue-500">
            <span><i class="las la-link text-lg"></i></span>
          </div>
          <span class="text-blue-500"> Link Account </span>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div class="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
        <h2 class="text-lg font-bold mb-4">Amazon Lightsail</h2>
        <hr class="mb-5" />
        <label for="account_name" class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500">Name</label>
        <input type="text" v-model="accountDetails.name" class="border rounded-md p-2 w-full mt-2" />
        <p class="text-gray-500 text-xs mt-3 mb-5">
          Use this to recognize your credentials if you have more than one account per provider.
        </p>
        <label for="access_key" class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500">Access Key</label>
        <input type="text" v-model="accountDetails.accessKey" class="border rounded-md p-2 w-full mt-2 mb-5" />
        <label for="access_secret" class="text-tiny after:content-['*'] after:ml-0.5 after:text-red-500">Access Secret</label>
        <input type="text" v-model="accountDetails.accessSecret" class="border rounded-md p-2 w-full mt-2" />
        <div class="flex justify-end mt-4">
          <button @click="closeModal" class="bg-red-500 text-white rounded-md px-4 py-2 mr-2">Cancel</button>
          <button @click="linkAccount" class="bg-blue-500 text-white rounded-md px-4 py-2">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      accountDetails: {
        name: '',
        accessKey: '',
        accessSecret: ''
      }
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    linkAccount() {
      // Logic to link the account
      console.log(this.accountDetails);
      this.closeModal();
    }
  }
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
