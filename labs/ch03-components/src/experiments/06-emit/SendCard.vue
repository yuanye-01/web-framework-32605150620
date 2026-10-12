<!-- SendCard.vue —— 子组件：emits 声明 + $emit 触发（携带数据） -->
<template>
  <div class="mini">
    <h3>我是子组件 SendCard</h3>
    <button @click="send">发送数据给父组件</button>
    <button @click="sendHello">发送固定问候</button>
  </div>
</template>

<script>
export default {
  name: 'SendCard',
  emits: ['sendMsg'],
  data() {
    return { msg: '我是子组件里的数据' }
  },
  methods: {
    send() {
      this.msg = '子组件消息 ' + new Date().toLocaleTimeString()
      this.$emit('sendMsg', this.msg)     // 第二参起 = 载荷
    },
    sendHello() {
      this.$emit('sendMsg', 'Hello from 子组件！')
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
