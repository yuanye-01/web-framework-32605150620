<!-- LifecycleLab.vue —— 生命周期实验本体：四阶段钩子 + 页面日志 -->
<template>
  <div class="inner">
    <p>count = {{ count }}（点 +1 触发 updated）</p>
    <button @click="count++">+1</button>
    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'LifecycleLab',
  data() {
    return {
      count: 0,
      timer: null,
      logs: [],
      lastUpdatedCount: null    // updated 守卫：防"记日志又触发 updated"死循环
    }
  },
  methods: {
    log(msg) {
      this.logs.push(msg)
      console.log('[LifecycleLab]', msg)
    }
  },
  created() {
    this.log('1. created：组件创建，data 可用（此刻拿不到 DOM）')
  },
  mounted() {
    this.log('2. mounted：DOM 就绪（可以 $refs / 发请求 / 开定时器）')
    this.timer = setInterval(() => console.log('[LifecycleLab] tick（mounted 开的定时器）'), 2000)
  },
  updated() {
    if (this.lastUpdatedCount !== this.count) {
      this.lastUpdatedCount = this.count
      this.log(`3. updated：数据变化后（count = ${this.count}）`)
    }
  },
  unmounted() {
    clearInterval(this.timer)
    console.log('[LifecycleLab] 4. unmounted：组件销毁，定时器已清理')
  }
}
</script>

<style scoped>
.inner {
  border: 1px dashed var(--accent);
  border-radius: 8px;
  padding: 10px 14px;
  margin-top: 8px;
}

.logs {
  list-style: none;
  background: #23272e;
  color: #c9e3d6;
  font-family: Consolas, Monaco, monospace;
  font-size: 13px;
  border-radius: 8px;
  margin: 8px 0 0;
  padding: 10px 14px;
  max-height: 140px;
  overflow-y: auto;
}

.logs li {
  line-height: 1.9;
}
</style>
