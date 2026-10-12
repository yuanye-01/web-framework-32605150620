<!-- GlobalDemo.vue —— 全局注册演示：main.js 里 app.component 注册（3.3.1）
     注意：App.vue 里【没有】import 我、components 里也没有我——照样能用！ -->
<template>
  <div class="mini">
    <h3>全局注册</h3>
    <p>我在 <b>main.js</b> 里注册（app.component），App 没 import 我也能用——但代价是始终会打进包里。</p>
  </div>
</template>

<script>
export default {
  name: 'GlobalDemo'
}
</script>

<style scoped>
.mini {
  border: 1px dashed var(--primary);
  border-radius: 8px;
  padding: 10px 14px;
}
</style>
