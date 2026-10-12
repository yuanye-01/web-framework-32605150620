<!-- 教材【例3-2】组合式：<script setup> + ref，无 this（3.1） -->
<template>
  <div class="mini">
    <h3>组合式 API</h3>
    <p>计数器的值为：{{ count }}</p>
    <button @click="countFn">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const countFn = () => {
  count.value++                 // script 中要 .value；模板中自动解包
}
</script>

<style scoped>
.mini {
  border: 1px dashed var(--border);
  border-radius: 8px;
  padding: 10px 14px;
}
</style>
