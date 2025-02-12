<template>
    <transition :name="transitionName" appear>
      <slot></slot>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'TransitionFromBottom',
    data() {
      return {
        transitionName: 'slide-bottom'
      }
    }
  }
  </script>
  
  <style scoped>
  .slide-bottom-enter-active,
  .slide-bottom-leave-active {
    transition: all 3s ease;
  }
  
  .slide-bottom-enter-from,
  .slide-bottom-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
  </style>