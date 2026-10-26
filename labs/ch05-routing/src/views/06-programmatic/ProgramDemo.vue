<!-- ============================================================
  ProgramDemo.vue —— 实验 06 页面：编程式导航驾驶舱（5.5）
  目录：views/06-programmatic/
  要点：this.$router.push / replace 四种写法 + query 传参；
        push 留历史（能后退）、replace 不留（后退回不来）
  ⚠️ path 与 params 不能同用（params 会被忽略）——按钮⑥演示这个坑
============================================================ -->
<template>
  <div class="page">
    <h2>🕹️ 编程式导航（5.5）</h2>
    <p class="muted">不用 router-link，用 JS 代码跳——按钮点起来：</p>

    <div class="btn-grid">
      <button @click="goStr">① push 字符串<br />去用户9527</button>
      <button @click="goPath">② push 对象 path<br />去用户1</button>
      <button @click="goName">③ push 对象 name+params<br />去用户2</button>
      <button @click="goQuery">④ push query 传参<br />去搜索"vue"</button>
      <button @click="goReplace">⑤ replace 替换<br />去About（不留历史）</button>
      <button @click="goBroken">⑥ 反例：path+params 同用<br />params 会被忽略</button>
    </div>

    <p class="muted">
      试历史记录：先点①再点⑤，然后按浏览器"后退"——回到的是本页（replace 把用户9527那条历史顶掉了）。<br />
      ④之后地址栏是 <code>#/search?kw=vue</code>，Search 页用 <code>$route.query.kw</code> 取值。
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProgramDemo',
  methods: {
    // 样例①：push + 字符串地址——"开车"用 $router（不是 $route！）
    goStr() {
      this.$router.push('/user/9527')
    },
    // 补全②：push + 对象 path 写法，去 /user/1
    goPath() {
      this.$router.push({ path: '/user/1' })
    },
    // 补全③：push + 对象 name 写法带 params，去用户 2（路由叫 'user'）
    goName() {
      this.$router.push({ name: 'user', params: { id: 2 } })
    },
    // 补全④：push 去 /search，query 带关键词 kw: 'vue'
    goQuery() {
      this.$router.push({ path: '/search', query: { kw: 'vue' } })
    },
    // 补全⑤：replace（不是 push！）去 /about——顶掉历史记录
    goReplace() {
      this.$router.replace('/about')
    },
    // 补全⑥：故意把 path:'/user' 和 params:{ id: 3 } 塞进同一个对象里 push——
    // 预期：params 被忽略 → 跳到没有 id 的 /user → 404（亲手造坑验证教材 135 页的警告）
    goBroken() {
      this.$router.push({ path: '/user', params: { id: 3 } })
    }
  }
}
</script>

<style scoped>
.page {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

.btn-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
}

.btn-grid button {
  flex: 1;
  min-width: 150px;
  line-height: 1.5;
}

code {
  background: var(--primary-bg);
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}

.muted {
  color: var(--muted);
  font-size: 13px;
}
</style>
