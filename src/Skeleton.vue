<template>
    <div class="skeleton-loader">
      <div class="skeleton-item" v-for="index in 22" :key="index">
        <div class="skeleton-icon"></div>
        <div class="skeleton-text"></div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .skeleton-loader {
    display: flex;
    flex-direction: column;
  }
  
  .skeleton-item {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  
  .skeleton-icon {
    width: 30px;
    height: 30px;
    background: #e0e0e0;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .skeleton-text {
    width: 180px;
    height: 20px;
    background: #e0e0e0;
    border-radius: 4px;
  }
  </style>
  