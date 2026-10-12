<!-- MiddleChild.vue —— 中间层：只负责往下渲染，零 props / 零 emit -->
<template>
  <div class="middle">
    <p>我是中间层 MiddleChild：我<b>没有</b>传递任何数据下去。</p>
    <GrandChild />
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue'

export default {
  name: 'MiddleChild',
  components: { GrandChild }
}
</script>

<style scoped>
.middle {
  border: 1px dashed var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  margin: 8px 0;
}
</style>
