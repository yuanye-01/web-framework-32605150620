<!-- ============================================================
  ResumeLab.vue —— 小实验 06：插槽案例——我的简历（4.4）
  目录：experiments/06-resume/
  要点：教材 4.4 案例的复刻——把硬编码简历改成插槽版；
        #header / 默认 / #skills(作用域) / #footer 四路内容全部
        由父组件（本文件）注入，MyResume 外壳一行内容都不写死
============================================================ -->
<template>
  <div class="lab">
    <h2>实验 06｜插槽案例——我的简历（4.4）</h2>
    <p class="muted">外壳 MyResume 只有排版；姓名、经历、按钮全从插槽注入，换个填法就是一份新简历。</p>

    <div class="row">
      <!-- 简历一：张三·前端 -->
      <MyResume>
        <template #header>
          <h3>{{ person.name }}</h3>
          <p class="muted">求职意向：{{ person.intent }}</p>
        </template>

        <template #skills="{ skills }">
          <span v-for="skill in skills" :key="skill" class="tag mine">{{ skill }}</span>
        </template>

        <p><b>教育经历</b>：XX 大学 · 计算机科学与技术（2024—2028）</p>
        <p><b>实习经历</b>：XX 科技前端实习生——用 Vue3 拆组件、修样式</p>
        <p><b>自我评价</b>：{{ person.intro }}</p>

        <template #footer>
          <button>下载PDF</button>
          <button>编辑</button>
        </template>
      </MyResume>

      <!-- 简历二：几乎什么都不填 → 全部走后备内容 -->
      <MyResume>
        <template #header>
          <h3>空白菜鸟</h3>
          <p class="muted">求职意向：都行</p>
        </template>
      </MyResume>
    </div>
  </div>
</template>

<script>
import MyResume from './MyResume.vue'

export default {
  name: 'ResumeLab',
  components: { MyResume },
  data() {
    return {
      person: {
        name: '张三',
        intent: '前端开发工程师',
        intro: '组件拆得清、插槽用得溜，KeepAlive 帮我留住状态。'
      }
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

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.tag.mine {
  background: var(--primary-bg);
  color: var(--primary-dark);
}

.muted {
  color: var(--muted);
  margin: 2px 0;
}
</style>