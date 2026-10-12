<template>
  <div id="app" :class="{ dark: isDark }">
    <!-- 顶部：标题 + 统计 + 夜间开关（统计是 App 的 computed 算好传下去） -->
    <NoteHeader
      :total="notes.length"
      :filtered="filteredNotes.length"
      :total-chars="totalChars"
      :done-percent="donePercent"
      :is-dark="isDark"
      @toggle-dark="isDark = !isDark"
    />

    <!-- 表单：表单数据住 NoteForm 自己，提交时 emit('add', 笔记) 上报 -->
    <NoteForm @add="addNote" @error="showError" />

    <!-- 搜索框：搜索词住 App（filteredNotes 的依赖） -->
    <input v-model="keyword" placeholder="搜索笔记…" />

    <p v-if="savedTip" class="save-tip">{{ savedTip }}</p>

    <!-- 列表：filteredNotes 传下去；删除/完成的报信逐级回到 App 动数据 -->
    <NoteList :notes="filteredNotes" @remove="removeNote" @toggle="toggleNote" />

    <p v-if="filteredNotes.length === 0 && notes.length > 0">没有匹配「{{ keyword }}」的笔记</p>
    <p v-if="notes.length === 0">暂无笔记，快添加一条吧</p>

    <hr />

    <h2>🎯 事件实验室（2.4—2.5）</h2>
    <EventLab />
  </div>
</template>

<script>
import NoteHeader from './components/NoteHeader.vue'
import NoteForm from './components/NoteForm.vue'
import NoteList from './components/NoteList.vue'
import EventLab from './components/EventLab.vue'

export default {
  name: 'App',
  components: { NoteHeader, NoteForm, NoteList, EventLab },
  provide() {
    return {
      appVersion: 'notes-app-v1'    // 跨级：NoteHeader / NoteItem 直接 inject
    }
  },
  data() {
    return {
      keyword: '',
      isDark: false,
      savedTip: '',
      saveTimer: null,
      notes: [],               // 单一数据源：笔记只住 App
      nextId: 1
    }
  },
  computed: {
    filteredNotes() {
      return this.notes.filter(n => n.text.includes(this.keyword))
    },
    totalChars() {
      return this.notes.reduce((sum, n) => sum + n.text.length, 0)
    },
    donePercent() {
      if (this.notes.length === 0) return 0
      const done = this.notes.filter(n => n.done).length
      return Math.round((done / this.notes.length) * 100)
    }
  },
  watch: {
    notes: {
      handler() {
        this.savedTip = '正在保存…'
        clearTimeout(this.saveTimer)
        this.saveTimer = setTimeout(() => {
          this.savedTip = '已自动保存 ✓'
        }, 600)
      },
      deep: true
    }
  },
  methods: {
    addNote(note) {
      this.notes.push({ id: this.nextId++, done: false, ...note })
    },
    removeNote(id) {
      this.notes = this.notes.filter(n => n.id !== id)
    },
    toggleNote(id) {
      const note = this.notes.find(n => n.id === id)
      if (note) note.done = !note.done
    },
    showError(msg) {
      console.warn('[NoteForm]', msg)
    }
  }
}
</script>

<style scoped>
.save-tip {
  display: inline-block;
  background: var(--primary-bg);
  color: var(--primary-dark);
  border: 1px solid var(--primary);
  border-radius: 999px;
  padding: 2px 14px;
  font-size: 14px;
}
</style>
