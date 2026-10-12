<!-- NoteForm.vue —— 添加笔记的表单
     表单数据（newNote/priority/tags）住在本组件，提交时打包 emit('add', 笔记对象) 上报父组件
     @submit.prevent：回车/点按钮即添加，且阻止页面刷新（综合作业要求）
     加分项：必填校验，失败 emit('error', 提示语) -->
<template>
  <form class="note-form" @submit.prevent="submit">
    <input v-model="newNote" placeholder="输入笔记内容，回车即添加" />

    <div class="radios">
      <label><input type="radio" value="高" v-model="priority" /> 高</label>
      <label><input type="radio" value="中" v-model="priority" /> 中</label>
      <label><input type="radio" value="低" v-model="priority" /> 低</label>
    </div>

    <div class="checkboxes">
      <label><input type="checkbox" value="待办" v-model="tags" /> 待办</label>
      <label><input type="checkbox" value="灵感" v-model="tags" /> 灵感</label>
    </div>

    <button type="submit">添加</button>

    <p class="preview">实时展示 → 内容：{{ newNote || '（空）' }}｜优先级：{{ priority }}｜标签：{{ tags.join('、') || '（未选）' }}</p>
    <p v-if="errorTip" class="error">{{ errorTip }}</p>
  </form>
</template>

<script>
export default {
  name: 'NoteForm',
  emits: ['add', 'error'],
  data() {
    return {
      newNote: '',
      priority: '中',
      tags: [],
      errorTip: ''
    }
  },
  methods: {
    submit() {
      if (!this.newNote.trim()) {
        this.errorTip = '内容不能为空，请输入笔记再提交'
        this.$emit('error', '必填校验失败：内容为空')
        setTimeout(() => { this.errorTip = '' }, 2000)
        return
      }
      this.$emit('add', {
        text: this.newNote.trim(),
        priority: this.priority,
        tags: [...this.tags]
      })
      this.newNote = ''
      this.errorTip = ''
    }
  }
}
</script>

<style scoped>
.note-form {
  margin: 10px 0;
}

.radios,
.checkboxes {
  margin: 6px 0;
}

.preview {
  color: var(--muted);
  font-size: 14px;
}

.error {
  color: #c0392b;
  font-size: 14px;
  font-weight: 600;
}
</style>
