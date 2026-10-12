<!-- 教材【例3-1】选项式：按"选项"分块，this 访问实例（3.1） -->
<template>
  <div class="mini">
    <h3>选项式 API</h3>
    <p>计数器的值为：{{ count }}</p>
    <button @click="countFn">+1</button>
  </div>
</template>

<script>
export default {
  name: 'CountOptions',
  data() {
    return { count: 0 }
  },
  methods: {
    countFn() {
      this.count++
    }
  }
}
</script>

<style scoped>
.mini {
  border: 1px dashed var(--border);
  border-radius: 8px;
  padding: 10px 14px;
}
</style>
