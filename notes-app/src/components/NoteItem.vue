<!-- NoteItem.vue —— 单条笔记：完成勾选划线 + 删除
     note 来自 props（只读）；删除/切换完成都是 emit 报信，由父组件（最终是 App）动数据
     appVersion 用 inject 跨级直达 App（演示 provide/inject：免掉层层 props） -->
<template>
  <li class="note-item" :class="{ done: note.done }">
    <label><input type="checkbox" :checked="note.done" @change="$emit('toggle', note.id)" /></label>
    <span class="text">{{ note.text }}</span>
    <span class="priority">【{{ note.priority }}】</span>
    <span class="tags">{{ note.tags.join('/') }}</span>
    <button class="del" @click="$emit('remove', note.id)">删除</button>
    <span class="ver">{{ appVersion }}</span>
  </li>
</template>

<script>
export default {
  name: 'NoteItem',
  props: {
    note: { type: Object, required: true }
  },
  inject: ['appVersion'],
  emits: ['remove', 'toggle']
}
</script>

<style scoped>
.note-item {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  background: var(--card);
  padding: 8px 14px;
  margin: 8px 0;
}

.note-item.done .text {
  color: var(--muted);
  text-decoration: line-through;
}

.priority {
  color: var(--primary-dark);
  font-size: 14px;
}

.tags {
  color: var(--muted);
  font-size: 14px;
}

.del {
  margin-left: auto;
}

.ver {
  font-size: 11px;
  color: var(--muted);
  border: 1px dashed var(--border);
  border-radius: 999px;
  padding: 0 6px;
}
</style>
