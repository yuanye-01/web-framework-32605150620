<!-- ============================================================
  MyInput02.vue —— 实验 07 子组件②：使用自定义指令（4.5.2）
  目录：experiments/07-directive/
  要点：directives 选项声明私有指令（本组件内可用）；
        mounted(el) 钩子在元素插入页面后执行 el.focus()——
        页面一打开就自动聚焦，ref 和方法都不用写
============================================================ -->
<template>
  <div class="box">
    <p>② 指令版：页面一打开自动聚焦（点本卡片任意处再按 F5 试试）</p>
    <input v-focus type="text" v-model="msg" />
  </div>
</template>

<script>
export default {
  name: 'MyInput02',
  data() {
    return { msg: '123456789' }
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>

<style scoped>
.box {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  flex: 1;
  background: #fff;
}

.box p {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--muted);
}
</style>