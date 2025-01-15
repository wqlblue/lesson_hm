<template>
  <el-form
    style="position:absolute;left:45%"
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="auto"
  >
    <el-form-item label="Name" prop="name">
      <el-input v-model="form.name" size="small" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="form.password" type="password" size="small" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { login } from '../api/index'; // 确保路径正确

const formRef = ref(null);
const form = reactive({
  name: '',
  password: ''
});
const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'change' },
    { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' },
    { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'change' }
  ]
};
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;

  try {
    // 将validate方法封装为Promise
    const valid = await new Promise((resolve) => {
      formRef.value.validate((isValid) => {
        resolve(isValid);
      });
    });

    if (!valid) {
      console.log('验证失败');
      return;
    }

    console.log('验证成功');
    const res = await login(form);
    console.log('登录响应:', res);
    // 这里可以处理登录成功后的逻辑，如跳转页面等
  } catch (error) {
    console.error('登录过程中出现错误:', error);
    // 错误处理逻辑
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* 样式根据需要自行定义 */
</style>