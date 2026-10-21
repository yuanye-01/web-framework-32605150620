<!-- ============================================================
  MyResume.vue —— 实验 06 子组件：简历外壳（4.4 案例）
  目录：experiments/06-resume/
  要点：外壳只管排版（头像区/技能区/正文区/操作区），内容全部
        由插槽留空：#header 具名、#skills 作用域（技能数组由本组件
        提供）、默认正文、#footer 具名 + 后备内容
============================================================ -->
<template>
  <div class="resume">
    <header class="top">
      <div class="avatar">👤</div>
      <div class="who">
        <slot name="header">
          <h3>姓名</h3>
          <p class="muted">求职意向</p>
        </slot>
      </div>
    </header>

    <section class="skills">
      <h4>技能标签</h4>
      <div class="tags">
        <!-- 作用域插槽：把技能数组递出去，标签长什么样由使用者决定 -->
        <slot name="skills" :skills="skills">
          <span v-for="skill in skills" :key="skill" class="tag">{{ skill }}</span>
        </slot>
      </div>
    </section>

    <section class="body">
      <slot>
        <p class="muted">（正文：教育经历 / 实习经历 / 自我评价——由使用者填入）</p>
      </slot>
    </section>

    <footer class="ops">
      <slot name="footer">
        <button>编辑</button>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MyResume',
  data() {
    return {
      skills: ['Vue.js', 'JavaScript', 'CSS3', 'HTML5']
    }
  }
}
</script>

<style scoped>
.resume {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
  width: 380px;
  overflow: hidden;
}

.top {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  background: linear-gradient(135deg, var(--primary-bg), #fff);
  border-bottom: 1px solid var(--border);
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #ffe58f;
  border: 2px solid var(--warn);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
}

.who h3 {
  margin: 0;
}

.skills {
  padding: 10px 20px;
}

.skills h4 {
  margin: 4px 0 6px;
  font-size: 14px;
  color: var(--muted);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background: #e8f0fe;
  color: #1a56b0;
  border-radius: 999px;
  font-size: 12px;
  padding: 2px 12px;
}

.body {
  padding: 4px 20px 12px;
  font-size: 14px;
}

.ops {
  border-top: 1px dashed var(--border);
  padding: 10px 20px;
  display: flex;
  gap: 10px;
}

.muted {
  color: var(--muted);
  margin: 2px 0;
}
</style>