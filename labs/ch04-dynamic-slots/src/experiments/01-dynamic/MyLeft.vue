<!-- ============================================================
  MyLeft.vue —— 实验 01 子组件：左页签（4.1.2）
  目录：experiments/01-dynamic/
  要点：带一个 count，配合父组件观察"切换 = 销毁重建"
============================================================ -->
<template>
  <div class="tab-card left">
    <h3>MyLeft 组件</h3>
    <p>count 值为：{{ count }}</p>
    <button @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyLeft',
  data() {
    return { count: 0 }
  },
  mounted() {
    console.log('MyLeft组件挂载完了')
  },
  unmounted() {
    console.log('MyLeft组件被销毁了')
  }
}
</script>

<style scoped>
.tab-card {
  border: 1.5px solid var(--primary);
  border-radius: 8px;
  padding: 10px 16px;
  margin-top: 10px;
  background: var(--primary-bg);
}

.tab-card.left {
  border-color: var(--primary);
}
</style>