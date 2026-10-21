<!-- ============================================================
  MyRight.vue —— 实验 01 子组件：右页签（4.1.2）
  目录：experiments/01-dynamic/
  要点：与 MyLeft 同构，只换文案与配色
============================================================ -->
<template>
  <div class="tab-card right">
    <h3>MyRight 组件</h3>
    <p>component 标签 is 属性绑定的组件换了，页面跟着换。</p>
    <p>count 值为：{{ count }}</p>
    <button @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyRight',
  data() {
    return { count: 0 }
  },
  mounted() {
    console.log('MyRight组件挂载完了')
  },
  unmounted() {
    console.log('MyRight组件被销毁了')
  }
}
</script>

<style scoped>
.tab-card {
  border: 1.5px solid var(--accent);
  border-radius: 8px;
  padding: 10px 16px;
  margin-top: 10px;
  background: #f0f1ff;
}

.tab-card.right {
  border-color: var(--accent);
}
</style>