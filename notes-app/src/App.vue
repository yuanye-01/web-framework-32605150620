<template>
  <div id="app">
    <h1>记事本 notes-app · 第 2 章实验</h1>
    <NoteCard />
    <hr />
    <h2>📝 记事本雏形（综合任务）</h2>

    <input v-model="newNote" placeholder="输入笔记内容" @keyup.enter="addNote" />
    <button @click="addNote">添加</button>
    <br />
    <label><input type="radio" value="高" v-model="priority" /> 高</label>
    <label><input type="radio" value="中" v-model="priority" /> 中</label>
    <label><input type="radio" value="低" v-model="priority" /> 低</label>
    <br />
    <label><input type="checkbox" value="待办" v-model="tags" /> 待办</label>
    <label><input type="checkbox" value="灵感" v-model="tags" /> 灵感</label>

    <p>实时展示 → 内容：{{ newNote }}｜优先级：{{ priority }}｜标签：{{ tags.join('、') || '（未选）' }}</p>

    <ul>
      <li v-for="(note, index) in notes" :key="note.id">
        {{ index + 1 }}. {{ note.text }} 【{{ note.priority }}】{{ note.tags.join('/') }}
        <button @click="notes.splice(index, 1)">删除</button>
      </li>
    </ul>

    <p v-if="notes.length === 0">暂无笔记，快添加一条吧</p>
    <p v-show="notes.length > 0">共 {{ notes.length }} 条</p>
  </div>
</template>

<script>
import NoteCard from './components/NoteCard.vue'
export default {
  components: { NoteCard },
  data() {
    return {
      newNote: '',      // 输入框内容
      priority: '中',    // 优先级（单选，单值）
      tags: [],         // 标签（复选，数组）
      notes: [],        // 笔记列表：{ id, text, priority, tags }
      nextId: 1         // 唯一 id 发号器
    }
  },
  methods: {
    addNote() {
      if (!this.newNote.trim()) return            // 空内容不添加
      this.notes.push({
        id: this.nextId++,                        // 唯一 id：:key 的规范取值
        text: this.newNote.trim(),
        priority: this.priority,
        tags: [...this.tags]                      // 复制一份，避免和表单联动
      })
      this.newNote = ''
    }
  }
}
</script>
