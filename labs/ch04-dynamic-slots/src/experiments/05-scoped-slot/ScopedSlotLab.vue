<!-- ============================================================
  ScopedSlotLab.vue —— 小实验 05：作用域插槽（4.3.4）
  目录：experiments/05-scoped-slot/
  要点：v-slot:default="slotProps" 接子组件数据（完整写法）｜
        #default="{ item }" 解构插槽Prop（简写）｜
        默认插槽独一份时 v-slot 可直接写在组件标签上
============================================================ -->
<template>
  <div class="lab">
    <h2>实验 05｜作用域插槽（4.3.4）</h2>
    <p class="muted">同一份子组件数据，父组件决定每行怎么渲染——两种接收写法各来一份。</p>

    <div class="row">
      <!-- 写法一：完整写法，slotProps 一整个接住 -->
      <ScoreList>
        <template v-slot:default="slotProps">
          <b>第 {{ slotProps.index + 1 }} 行</b>｜{{ slotProps.item.name }} 得了
          <b :class="{ good: slotProps.item.score >= 90 }">{{ slotProps.item.score }}</b> 分
        </template>
      </ScoreList>

      <!-- 写法二：解构插槽 Prop，直接取 item（推荐） -->
      <ScoreList>
        <template #default="{ item, index }">
          {{ index + 1 }}. {{ item.name }} ——
          <span :class="item.score >= 90 ? 'good' : 'fail'">
            {{ item.score >= 60 ? item.score + ' 分（合格）' : item.score + ' 分（挂科，补考见）' }}
          </span>
        </template>
      </ScoreList>
    </div>
  </div>
</template>

<script>
import ScoreList from './ScoreList.vue'

export default {
  name: 'ScopedSlotLab',
  components: { ScoreList }
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

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.good {
  color: var(--primary-dark);
}

.fail {
  color: #c0392b;
}

.muted {
  color: var(--muted);
}
</style>