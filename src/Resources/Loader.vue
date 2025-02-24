<template>
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div class="loader">
        <svg class="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"></path>
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  