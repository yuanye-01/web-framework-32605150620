<!-- ============================================================
  StyleBindingLab.vue —— 小实验 04：样式绑定（2.8）
  目录：experiments/04-style-binding/
  要点：:class 三种写法 / :style 对象绑定（色板滑块）
        / .dark 夜间模式（换 CSS 变量，作用于本实验卡片）
============================================================ -->
<template>
  <div class="lab" :class="{ dark: isDark }">
    <h2>实验 04｜样式绑定（2.8）</h2>
    <button @click="isDark = !isDark">{{ isDark ? '☀️ 本卡片切日间' : '🌙 本卡片切夜间' }}</button>

    <h3>① 对象语法：条件挂类</h3>
    <p :class="{ active: count > 0 }">count &gt; 0 时这行变绿加粗（count = {{ count }}）</p>
    <button @click="count++">count +1</button>

    <h3>② 数组语法：三选一切换</h3>
    <p :class="[sizeClass]">字号随按钮切换（{{ sizeClass }}）</p>
    <button @click="sizeClass = sizeClass === 'size-s' ? 'size-m' : sizeClass === 'size-m' ? 'size-l' : 'size-s'">循环切换 S→M→L</button>

    <h3>③ 数组嵌对象：固定类 + 条件类（最常用）</h3>
    <p :class="['badge', { done: isDone }]">{{ isDone ? '已完成' : '进行中' }}</p>
    <button @click="isDone = !isDone">切换完成态</button>

    <h3>:style 对象绑定：色板滑块</h3>
    <p :style="{ color: themeColor, fontSize: fontSize + 'px' }">颜色 {{ themeColor }}｜字号 {{ fontSize }}px</p>
    <label>颜色 <input type="color" v-model="themeColor" /></label>
    <label>字号 <input type="range" min="12" max="32" v-model.number="fontSize" /></label>
  </div>
</template>

<script>
export default {
  name: 'StyleBindingLab',
  data() {
    return {
      isDark: false,
      count: 0,
      sizeClass: 'size-m',
      isDone: false,
      themeColor: '#42b883',
      fontSize: 18
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
  transition: background 0.2s;
}

/* 本实验自己的夜间模式（.dark 挂在本卡片根上，只影响卡片内部） */
.lab.dark {
  --primary-bg: #1f3a2e;
  --text: #e6edf3;
  --muted: #8b98a9;
  --card: #242b36;
  --border: #3a4452;
  background: var(--card);
  color: var(--text);
}

.active {
  color: var(--primary-dark);
  font-weight: bold;
}

.size-s { font-size: 12px; }
.size-m { font-size: 16px; }
.size-l { font-size: 22px; }

.badge {
  display: inline-block;
  border: 1px solid var(--primary);
  border-radius: 999px;
  padding: 2px 14px;
}

.badge.done {
  color: var(--muted);
  text-decoration: line-through;
}

h3 {
  font-size: 15px;
  margin: 12px 0 6px;
}
</style>
