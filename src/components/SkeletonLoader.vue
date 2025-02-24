<template>
    <div class="p-5">
      <div class="bg-white rounded-md p-5">
        <div class="flex items-center gap-3">
          <div class="animate-pulse h-6 w-1/3 bg-gray-200 rounded"></div>
          <div class="animate-pulse h-10 w-10 bg-gray-200 rounded-full"></div>
        </div>
        <div class="grid grid-cols-6 gap-5 h-auto mt-5">
          <div class="border rounded-md cursor-pointer flex items-center gap-4 p-4 animate-pulse">
            <div class="h-7 w-7 bg-gray-200 rounded-full"></div>
            <div class="animate-pulse h-5 w-1/2 bg-gray-200 rounded"></div>
          </div>
          <div v-for="n in 5" :key="n" class="border rounded-md cursor-pointer flex items-center capitalize gap-4 p-4 animate-pulse">
            <div class="h-7 w-7 bg-gray-200 rounded-full"></div>
            <div class="animate-pulse h-5 w-1/2 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div class="mt-5">
          <div class="animate-pulse h-5 w-1/3 bg-gray-200 rounded"></div>
          <div class="bg-[#FAFAFB] border rounded-lg p-4 mt-5">
            <div class="grid grid-cols-2 gap-5">
              <div>
                <div class="animate-pulse h-5 w-1/2 bg-gray-200 rounded"></div>
                <div class="animate-pulse h-10 w-full bg-gray-200 rounded mt-2"></div>
                <div class="animate-pulse h-5 w-1/2 bg-gray-200 rounded mt-5"></div>
              </div>
              <div>
                <div class="animate-pulse h-5 w-1/2 bg-gray-200 rounded"></div>
                <div class="animate-pulse h-10 w-full bg-gray-200 rounded mt-2"></div>
                <div class="animate-pulse h-5 w-1/2 bg-gray-200 rounded mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkeletonLoader',
  };
  </script>
  
  <style scoped>
  /* You can customize styles here */
  </style>
  