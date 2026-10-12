<!-- NoteHeader.vue —— 顶部标题 + 统计四项 + 夜间模式开关
     数据全部来自 props（统计由父组件 computed 算好传下来）；夜间开关点击时 emit 报信 -->
<template>
  <header class="note-header">
    <h1>记事本 notes-app <span class="ver">{{ appVersion }}</span></h1>
    <button class="dark-btn" @click="$emit('toggle-dark')">
      {{ isDark ? '☀️ 切日间' : '🌙 切夜间' }}
    </button>
    <p class="stats">
      共 {{ total }} 条｜筛选后 {{ filtered }} 条｜总字数 {{ totalChars }}｜完成率 {{ donePercent }}%
    </p>
  </header>
</template>

<script>
export default {
  name: 'NoteHeader',
  props: {
    total: { type: Number, required: true },
    filtered: { type: Number, required: true },
    totalChars: { type: Number, required: true },
    donePercent: { type: Number, required: true },
    isDark: { type: Boolean, default: false }
  },
  inject: ['appVersion'],
  emits: ['toggle-dark']
}
</script>

<style scoped>
.note-header h1 {
  margin: 0 0 4px;
  font-size: 24px;
}

.ver {
  font-size: 12px;
  color: var(--muted);
  border: 1px dashed var(--border);
  border-radius: 999px;
  padding: 0 8px;
  vertical-align: middle;
}

.stats {
  color: var(--primary-dark);
  font-weight: 600;
}

.dark-btn {
  float: right;
}
</style>
