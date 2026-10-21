<!-- ============================================================
  DirectiveLab.vue —— 小实验 07：自定义指令（4.5）
  目录：experiments/07-directive/
  要点：v-focus 自动聚焦（4.5.2）｜ v-color="值" 带值指令
        （binding.value，mounted + updated 双钩子）｜
        v-check 表单默认勾选 vs v-model（4.5.3）
  自足说明：①②对比子组件在同目录 MyInput01/MyInput02.vue
============================================================ -->
<template>
  <div class="lab">
    <h2>实验 07｜自定义指令（4.5）</h2>
    <p class="muted">指令 = "挂在标签上的 DOM 能力"：v-model 是官方的，v-focus / v-color / v-check 是我们自己造的。</p>

    <!-- ①② 自动获取焦点对比（4.5.2） -->
    <div class="row">
      <MyInput01 />
      <MyInput02 />
    </div>

    <hr />

    <!-- ③ 带值的指令：v-color，值变了 updated 钩子再跑一次 -->
    <h3>v-color="colorName"：带值指令（binding.value）</h3>
    <p>
      <select v-model="colorName">
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="#646cff">#646cff</option>
      </select>
      <span v-color="colorName" class="color-demo">我是什么颜色，指令说了算（mounted 涂一次，值变了 updated 再涂）</span>
    </p>

    <hr />

    <!-- ④ 表单默认勾选：v-check vs v-model（4.5.3） -->
    <h3>v-check 表单默认勾选：指令改的是 DOM，不是数据</h3>
    <form @submit.prevent="submit">
      <p>
        姓名：<input type="text" v-model="name" />
      </p>
      <p>
        性别：
        <label><input type="radio" value="男" v-model="gender" /> 男</label>
        <label><input type="radio" value="女" v-model="gender" /> 女</label>
      </p>
      <p>
        业务：
        <!-- v-check 必须写在 v-model 后面：v-model 也有 mounted 钩子会按数据重设勾选，
             谁写在后面谁的 mounted 后执行、说了算 -->
        <label><input type="checkbox" value="存款" v-model="business" v-check /> 存款（v-check 勾的）</label>
        <label><input type="checkbox" value="理财" v-model="business" /> 理财</label>
      </p>
      <button>提交</button>
      <span class="muted">business 数据：{{ business.length ? business.join('、') : '（空）' }}——"存款"看着勾了，数据里却没有！</span>
    </form>
  </div>
</template>

<script>
import MyInput01 from './MyInput01.vue'
import MyInput02 from './MyInput02.vue'

export default {
  name: 'DirectiveLab',
  components: { MyInput01, MyInput02 },
  data() {
    return {
      colorName: '#646cff',
      name: '张三',
      gender: '男',
      business: []
    }
  },
  directives: {
    color: {
      mounted(el, binding) {
        el.style.color = binding.value
      },
      updated(el, binding) {
        el.style.color = binding.value
      }
    },
    check: {
      mounted(el) {
        el.checked = true
      }
    }
  },
  methods: {
    submit() {
      alert(`提交：${this.name}／${this.gender}／业务=${JSON.stringify(this.business)}`)
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

.color-demo {
  margin-left: 10px;
  font-weight: 600;
}

hr {
  border: none;
  border-top: 1px dashed var(--border);
  margin: 14px 0;
}

.muted {
  color: var(--muted);
  font-size: 13px;
}
</style>