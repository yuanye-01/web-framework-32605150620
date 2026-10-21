<!-- ============================================================
  KeepAliveLab.vue —— 小实验 02：KeepAlive 组件缓存（4.1.3 + 4.2）
  目录：experiments/02-keepalive/
  要点：<KeepAlive> 包裹后组件切走不销毁、count 保留 ｜
        activated / deactivated 缓存专属生命周期 ｜
        include / exclude / max 三个常用属性（4.2.2）
  自足说明：本实验自带 MyLeft / MyRight 两个子组件，不依赖外部
============================================================ -->
<template>
  <div class="lab">
    <h2>实验 02｜KeepAlive 组件缓存（4.1.3 + 4.2）</h2>
    <p class="muted">
      KeepAlive 包住 component 后，切走的组件被<b>缓存</b>而不是销毁——count 不丢、控制台不出现"被销毁了"。
    </p>

    <div class="mode-row">
      <label><input type="radio" value="all" v-model="mode" /> 全缓存</label>
      <label><input type="radio" value="include" v-model="mode" /> include="MyLeft"（只缓存左）</label>
      <label><input type="radio" value="exclude" v-model="mode" /> exclude="MyLeft"（除了左都缓存）</label>
      <label><input type="radio" value="max" v-model="mode" /> :max="1"（最多缓存 1 个）</label>
    </div>

    <div class="tabs">
      <button :class="{ on: cur === MyLeft }" @click="cur = MyLeft">展示MyLeft组件</button>
      <button :class="{ on: cur === MyRight }" @click="cur = MyRight">展示MyRight组件</button>
    </div>

    <!-- 同一个 KeepAlive，四个属性随单选切换：undefined 表示"不启用该属性" -->
    <KeepAlive
      :include="mode === 'include' ? 'MyLeft' : undefined"
      :exclude="mode === 'exclude' ? 'MyLeft' : undefined"
      :max="mode === 'max' ? 1 : undefined"
    >
      <component :is="cur"></component>
    </KeepAlive>

    <p class="muted">
      当前模式：<b>{{ modeLabel }}</b>——来回切几轮，数一数页签里的 count、盯一盯 F12 控制台。
    </p>
  </div>
</template>

<script>
import { shallowRef } from 'vue'
import MyLeft from './MyLeft.vue'
import MyRight from './MyRight.vue'

export default {
  name: 'KeepAliveLab',
  components: { MyLeft, MyRight },
  data() {
    return {
      cur: shallowRef(MyLeft),
      mode: 'all'
    }
  },
  computed: {
    MyLeft() {
      return MyLeft
    },
    MyRight() {
      return MyRight
    },
    modeLabel() {
      return {
        all: '不写属性，包住的都缓存',
        include: 'include="MyLeft"：只有 MyLeft 被缓存，MyRight 照样销毁重建',
        exclude: 'exclude="MyLeft"：MyLeft 不缓存，MyRight 被缓存',
        max: ':max="1"：最多缓存 1 个，挤掉最久没用的那个'
      }[this.mode]
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

.mode-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  margin: 8px 0;
}

.mode-row label {
  font-size: 14px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-top: 6px;
}

.tabs button.on {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.muted {
  color: var(--muted);
}
</style>