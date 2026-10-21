<template>
  <div id="app">
    <h1>ch04-dynamic-slots｜第 4 章实验台</h1>
    <p class="muted">第 04 课（4.1—4.5）：动态组件 · KeepAlive · 插槽 · 自定义指令</p>

    <nav class="lab-nav">
      <a href="#exp-01">01 动态组件</a>
      <a href="#exp-02">02 KeepAlive</a>
      <a href="#exp-03">03 默认插槽</a>
      <a href="#exp-04">04 具名插槽</a>
      <a href="#exp-05">05 作用域插槽</a>
      <a href="#exp-06">06 我的简历</a>
      <a href="#exp-07">07 自定义指令</a>
    </nav>

    <!-- 一个小实验一个 section：id 与菜单锚点对应，先占位、逐实验填充 -->
    <section id="exp-01"><DynamicLab /></section>
    <section id="exp-02"><KeepAliveLab /></section>
    <section id="exp-03"><SlotBasicLab /></section>
    <section id="exp-04"><p class="muted">（任务 4 完成后挂载 NamedSlotLab）</p></section>
    <section id="exp-05"><p class="muted">（任务 5 完成后挂载 ScopedSlotLab）</p></section>
    <section id="exp-06"><p class="muted">（任务 6 完成后挂载 ResumeLab）</p></section>
    <section id="exp-07"><p class="muted">（任务 7 完成后挂载 DirectiveLab）</p></section>
  </div>
</template>

<script>
import DynamicLab from './experiments/01-dynamic/DynamicLab.vue'
import KeepAliveLab from './experiments/02-keepalive/KeepAliveLab.vue'
import SlotBasicLab from './experiments/03-slot-basic/SlotBasicLab.vue'

export default {
  name: 'App',
  components: { DynamicLab, KeepAliveLab, SlotBasicLab }
}
</script>

<style scoped>
.lab-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 20px;
}

.lab-nav a {
  color: var(--primary-dark);
  text-decoration: none;
  border: 1px solid var(--primary);
  border-radius: 999px;
  padding: 3px 14px;
  font-size: 14px;
}

.lab-nav a:hover {
  background: var(--primary-bg);
}

section {
  margin: 18px 0;
}

.muted {
  color: var(--muted);
  margin-top: 0;
}
</style>