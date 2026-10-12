<!-- GrandChild.vue —— 孙组件：inject 直达爷爷的数据 -->
<template>
  <div class="grand">
    <p>我是孙子 GrandChild：爷爷传来的车 = <b>{{ car }}</b>（inject 直达，没经过中间层）</p>
    <span class="ver">{{ appVersion }}</span>
  </div>
</template>

<script>
export default {
  name: 'GrandChild',
  inject: ['car', 'appVersion']
}
</script>

<style scoped>
.grand {
  border: 1px solid var(--primary);
  border-radius: 8px;
  padding: 10px 14px;
  margin: 8px 0;
}

.ver {
  font-size: 12px;
  color: var(--muted);
  border: 1px dashed var(--border);
  border-radius: 999px;
  padding: 0 8px;
}
</style>
