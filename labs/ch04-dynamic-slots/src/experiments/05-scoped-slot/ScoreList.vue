<!-- ============================================================
  ScoreList.vue —— 实验 05 子组件：成绩列表（4.3.4）
  目录：experiments/05-scoped-slot/
  要点：数据在子组件手里，但"每行长什么样"交给使用者决定——
        <slot> 像传 props 一样把 item / index 递出去
============================================================ -->
<template>
  <div class="score-list">
    <p class="muted">ScoreList 自带 {{ list.length }} 条成绩（数据在子组件）：</p>
    <ul>
      <li v-for="(item, index) in list" :key="item.id" :class="{ fail: item.score < 60 }">
        <!-- 把每一行的 item 和 index 递给插槽使用者；不接就显示后备内容 -->
        <slot :item="item" :index="index">
          {{ item.name }}：{{ item.score }} 分（后备渲染）
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ScoreList',
  data() {
    return {
      list: [
        { id: 1, name: '张三', score: 98 },
        { id: 2, name: '张三', score: 89 },
        { id: 3, name: '张三', score: 59 }
      ]
    }
  }
}
</script>

<style scoped>
.score-list {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
  padding: 12px 16px;
  flex: 1;
  min-width: 260px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
}

li {
  border-bottom: 1px dashed var(--border);
  padding: 6px 2px;
}

li.fail {
  color: #c0392b;
}

.muted {
  color: var(--muted);
  margin: 0;
}
</style>