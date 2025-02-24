<template>
  <div class="bg-gray-100 flex justify-center items-center h-screen p-10">
    <div
      class="container flex flex-col lg:flex-row mx-auto items-center justify-center p-10"
    >
      <div class="left lg:w-1/2 mx-4 mb-6 lg:mb-0 text-center lg:text-left">
        <img
          class="w-40 lg:w-60 p-2 mx-auto pl-5 lg:mx-0"
          src="/ServerAvatar.png"
          alt="ServerAvatar"
        />
        <div class="ml-5">
          <p class="text-lg lg:text-xl font-bold">Cloud Hosting Simplified.</p>
          <p class="text-md mt-1 mx-2 lg:mx-0">
            Effortlessly host PHP and Node.js applications on our PHP & Node.js
            Cloud Server Management Panel. Manage security, updates, and
            configurations with ease using our intuitive control panel
            <span class="font-bold">No Technical Expertise Required</span>.
          </p>
        </div>
      </div>

      <div
        class="right flex flex-col bg-white p-8 lg:p-10 mx-auto rounded-xl w-full max-w-md"
      >
        <input
          v-model="email"
          class="px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg w-full"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          v-model="password"
          class="px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg w-full"
          type="password"
          placeholder="Password"
        />
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white w-full text-center my-2 py-3 rounded-md font-bold"
          @click="login"
        >
          Log In
        </button>
        <span
          class="text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline"
        >
          Forgotten password
        </span>
        <hr class="my-2" />
        <button
          class="bg-green-600 hover:bg-green-700 text-white text-center my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit"
          @click="createAccount"
        >
          Create new account
        </button>
        <div class="flex text-center p-2 mt-6 items-center justify-center">
          <span class="text-sm cursor-pointer">
            <span class="font-bold hover:underline" @click="createPage"
              >Create a Page</span
            >
            for a celebrity, brand or business.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import { useAuthStore } from "../stores/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        console.error("Email and password are required.");
        return;
      }

      try {
        const response = await axios.post(
          "https://app.satesting1.homes/api/login",
          {
            email: this.email,
            password: this.password,
          }
        );

        const { access_token, ...userData } = response.data;
        if (!access_token) {
          console.error("Access token not found in response");
          return;
        }

        localStorage.setItem("access_token", access_token);
        const authStore = useAuthStore();
        authStore.setAccessToken(access_token);
        authStore.setUserData(userData);
        

        console.log("Login successful, redirecting to dashboard.");
        this.$router.push("/dashboard");
      } catch (error) {
        console.error(
          "Error during login:",
          error.response ? error.response.data : error.message
        );
        alert(
          "Login failed: " +
            (error.response ? error.response.data.message : error.message)
        );
      }
    },
  },
};
</script>

<style scoped>
</style>
