<template>
    <div class="flex flex-col h-screen">
      <header class="flex flex-nowrap fixed w-full items-center top-0 px-6 py-4 bg-gray-100">
        <div class="text-2xl font-bold">
          ChatGPT
        </div>
        <div class="ml-4 text-sm text-gray-500">
          基于OpenAI的ChatGPT自然语言模型人工智能对话
        </div>
        <div class="ml-auto">
          <button @click="toggleConfig" class="text-sm">设置</button>
        </div>
      </header>
      <main class="flex-1 flex items-center justify-center bg-white">
        <div class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
      </main>
      <footer class="bg-gray-100 p-4">
        <div class="flex items-center">
          <label :class="['text-sm', 'text-gray-500']">{{ label }}</label>
          <input type="text" v-model="inputValue" @input="updateLabel" class="ml-2 w-full p-2 border border-gray-300 rounded">
          <button @click="handleInputSubmit" class="ml-2 px-4 py-2 bg-blue-500 text-white rounded">保存/发送</button>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue';

const isConfig = ref(true); // true api-key 设置 false 聊天
const apiKey = ref('');
const messageContent = ref('');
const inputValue = ref('');

// 动态计算标签文本
const label = computed(() => {
  return isConfig.value ? '请输入API KEY:' : '请输入信息:';
});

const toggleConfig = () => {
  isConfig.value = !isConfig.value;
  // 当切换回配置模式时，重置输入框和标签文本
  if (isConfig.value) {
    inputValue.value = '';
    label.value = '请输入API KEY:';
  }
};

const updateLabel = () => {
  // 如果在配置模式下且输入框有内容，则切换标签文本
  if (isConfig.value && inputValue.value.trim() !== '') {
    label.value = '请输入信息:';
  }
};

const handleInputSubmit = () => {
  if (isConfig.value) {
    // 保存 API Key
    saveApiKey();
  } else {
    // 发送消息
    sendMessage();
  }
};

const saveApiKey = () => {
  apiKey.value = inputValue.value;
  console.log('API Key saved:', apiKey.value);
  // 保存 API Key 后切换到聊天界面
  toggleConfig();
};

const sendMessage = () => {
  messageContent.value = inputValue.value;
  console.log('Message sent:', messageContent.value);
  // 清空输入框
  inputValue.value = '';
};
</script>