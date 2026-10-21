<!-- ============================================================
  DynamicLab.vue —— 小实验 01：动态组件（4.1.1—4.1.2）
  目录：experiments/01-dynamic/
  要点：<component :is> 占位渲染 ｜ shallowRef 浅层包装 ｜ 切换 = 销毁重建
  自足说明：本实验自带 MyLeft / MyRight 两个子组件，不依赖外部
============================================================ -->
<template>
  <div class="lab">
    <h2>实验 01｜动态组件（4.1.1—4.1.2）</h2>
    <p class="muted">
      <b>component 标签的 is 属性</b>指到谁就渲染谁；切换时旧组件被<b>销毁</b>、新组件重新<b>挂载</b>（打开 F12 看控制台）。
    </p>

    <div class="tabs">
      <button :class="{ on: cur === MyLeft }" @click="cur = MyLeft">展示MyLeft组件</button>
      <button :class="{ on: cur === MyRight }" @click="cur = MyRight">展示MyRight组件</button>
    </div>

    <component :is="cur"></component>

    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
import { shallowRef } from 'vue'
import MyLeft from './MyLeft.vue'
import MyRight from './MyRight.vue'

export default {
  name: 'DynamicLab',
  components: { MyLeft, MyRight },
  data() {
    return {
      cur: shallowRef(MyLeft),
      logs: ['初始：is 指向 MyLeft']
    }
  },
  computed: {
    // 模板里要写 cur = MyLeft，得把两个组件对象暴露给模板（computed 不加 this 前缀直接引用 import）
    MyLeft() {
      return MyLeft
    },
    MyRight() {
      return MyRight
    }
  },
  watch: {
    // data 里的 shallowRef 会被自动解包：模板和 watch 都直接用 cur，
    // 拿到的已经是组件对象本身（不能写 'cur.value'——那是组合式的 .value 口径）
    cur(comp) {
      const name = comp === MyLeft ? 'MyLeft' : 'MyRight'
      this.logs.unshift(`is 切到 ${name}（旧组件销毁、新组件挂载，count 归零）`)
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

.tabs {
  display: flex;
  gap: 10px;
}

.tabs button.on {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
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