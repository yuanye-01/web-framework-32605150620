<!-- ============================================================
  ModifierChainLab.vue —— 小实验 01：修饰符串联（2.5.3）
  目录：experiments/01-modifier-chain/
  要点：@事件.修饰符1.修饰符2 从左到右依次执行
============================================================ -->
<template>
  <div class="lab">
    <h2>实验 01｜修饰符串联（2.5.3）</h2>
    <p class="muted">串联按<b>从左到右</b>依次执行：`.stop` 先剪断冒泡，`.prevent` 再拦下跳转。</p>

    <div class="bubble" @click="log('outer 触发（外层 @click）')">
      外层盒子 @click
      <button @click.stop="log('inner 触发（.stop：冒泡被阻止，外层不响）')">内层 .stop</button>
      <button @click="log('inner 触发（无 .stop：冒泡到外层）')">内层 无.stop</button>
      <a href="https://vuejs.org" @click.stop.prevent="log('串联 .stop.prevent：冒泡和跳转都被拦下，只出这一条')">(串联实验) .stop.prevent</a>
    </div>

    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ModifierChainLab',
  data() {
    return { logs: [] }
  },
  methods: {
    log(msg) {
      this.logs.unshift(msg)
      console.log(msg)
    }
  }
}
</script>

<style scoped>
.lab {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

.bubble {
  border: 1.5px solid var(--primary);
  background: var(--primary-bg);
  padding: 6px 12px;
  margin: 8px 0;
  border-radius: 8px;
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
  min-height: 2em;
}

.logs li {
  line-height: 1.9;
}

.muted {
  color: var(--muted);
}
</style>
