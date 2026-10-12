<template>
  <div class="lab">
    <h2>实验 03｜侦听器（2.7）</h2>
    <p class="muted">勾选/增删触发"自动保存"；改 name 两种侦听都响，改 city 只有 deep 响。</p>

    <input v-model="keyword" placeholder="输入搜索词，看 Console 新旧值" />
    <p v-if="savedTip" class="save-tip">{{ savedTip }}</p>

    <ul class="notes">
      <li v-for="note in notes" :key="note.id">
        <label><input type="checkbox" v-model="note.done" /></label>
        {{ note.text }}
        <button @click="notes.splice(notes.indexOf(note), 1)">删除</button>
      </li>
    </ul>
    <button @click="notes.push({ id: Date.now(), text: '新增一条笔记（触发 deep 侦听）', done: false })">添加一条</button>

    <hr />

    <h3>👂 deep / 路径侦听对比</h3>
    <p>user.name = {{ user.name }}｜user.city = {{ user.city }}</p>
    <button @click="user.name = ['张三', '李四', '王五'][Math.floor(Math.random() * 3)]">改 user.name（两种侦听都响）</button>
    <button @click="user.city = ['成都', '绵阳', '乐山'][Math.floor(Math.random() * 3)]">改 user.city（只有 deep 响）</button>
  </div>
</template>

<script>
export default {
  name: 'WatchLab',
  data() {
    return {
      keyword: '',
      savedTip: '',
      saveTimer: null,
      notes: [
        { id: 1, text: '侦听器自动保存演示', done: false },
        { id: 2, text: 'deep 深层侦听', done: false }
      ],
      user: { name: '张三', city: '成都' }
    }
  },
  watch: {
    // 写法一：简写（新旧值）
    keyword(newVal, oldVal) {
      console.log(`搜索词从 "${oldVal}" 变为 "${newVal}"`)
    },
    // 写法二：标准 + deep + immediate（自动保存 + 防抖）
    notes: {
      handler() {
        this.savedTip = '正在保存…'
        clearTimeout(this.saveTimer)
        this.saveTimer = setTimeout(() => {
          this.savedTip = '已自动保存 ✓'
        }, 500)
      },
      deep: true,
      immediate: true
    },
    // 写法三：路径侦听（只盯 name）
    'user.name'(v) {
      this.savedTip = `路径侦听：user.name 变成 "${v}"`
      console.log('路径侦听 user.name：', v)
    },
    // 对比：deep 盯整个 user
    user: {
      handler(v) {
        this.savedTip = 'deep 侦听：user 整体变了（含嵌套）'
        console.log('deep 侦听 user：', v.name, v.city)
      },
      deep: true
    }
  }
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

.save-tip {
  display: inline-block;
  background: var(--primary-bg);
  color: var(--primary-dark);
  border: 1px solid var(--primary);
  border-radius: 999px;
  padding: 2px 14px;
  font-size: 14px;
}

.notes {
  list-style: none;
  margin: 10px 0;
  padding: 0;
  display: grid;
  gap: 8px;
}

.notes li {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 8px 14px;
}

.muted {
  color: var(--muted);
}
</style>
