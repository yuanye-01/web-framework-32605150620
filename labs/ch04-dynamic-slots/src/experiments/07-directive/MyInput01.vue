<!-- ============================================================
  MyInput01.vue —— 实验 07 子组件①：不用自定义指令（4.5.2）
  目录：experiments/07-directive/
  要点：ref 拿 DOM + $refs 手动 focus()——能用，但每次都要
        写 ref 名、写方法，换个输入框再来一遍
============================================================ -->
<template>
  <div class="box">
    <p>① 手动版：点按钮才聚焦</p>
    <input ref="inputRef" type="text" v-model="msg" />
    <button @click="getFocus">获取焦点</button>
  </div>
</template>

<script>
export default {
  name: 'MyInput01',
  data() {
    return { msg: 'Vue.js前端开发实战' }
  },
  methods: {
    getFocus() {
      this.$refs.inputRef.focus()
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