<template>
  <div class="bg-gray-100 w-full h-auto flex">
    <sidebar class="" />
    <div class="w-full h-full sticky top-0 z-10">
      <headerTop class="sticky top-0 z-10" />
      <div class="w-full h-[calc(100vh-50px)]">
        <dashboard />
         <login />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import headerTop from "../../components/header.vue";
import sidebar from "../../components/sidebar.vue";
import dashboard from "./dashboard.vue";
import Homepage from "../../components/Homepage.vue";
export default {
  components: {headerTop, sidebar,Homepage,dashboard },
};
</script>

<style>
</style>


