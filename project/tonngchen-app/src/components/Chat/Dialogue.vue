<template>
    <div class="chat-container">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="{ aiMessage: message.isAI, userMessage: !message.isAI }"
      >
        <div class="avatar" :class="message.isAI ? 'aiAvatar' : 'userAvatar'">
          {{ message.isAI ? '🤖' : '👤' }}
        </div>
        <div class="message-text" :class="message.isAI ? 'aiText' : 'userText'">
          {{ message.text }}
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  messages: {
    type: Array,
    required: true
  }
});

</script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
  }
  
  .aiMessage {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    flex-direction: row-reverse;
  }
  
  .userMessage {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    flex-direction: row;
  }
  
  .avatar {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  
  .aiAvatar {
    order: 1;
    margin-left: 0.5rem;
  }
  
  .message-text {
    background-color: #e9ecef;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  
  .aiText {
    background-color: #007bff;
    color: white;
  }
  
  .userText {
    background-color: #6c757d;
    color: white;
  }
  </style>