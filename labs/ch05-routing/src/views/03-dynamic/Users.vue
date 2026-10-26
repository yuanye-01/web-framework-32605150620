<!-- ============================================================
  Users.vue —— 实验 03 页面：用户列表（5.2.3 动态路由入口）
  目录：views/03-dynamic/
  要点：一个规则 /user/:id 匹配 /user/1、/user/2、/user/9527 …
        三种传参写法：字符串拼接 / :to 对象 / 命名路由（5.4 预告）
============================================================ -->
<template>
  <div class="page">
    <h2>👥 用户列表</h2>
    <p class="muted">路由规则只有一条 <code>/user/:id</code>，却能匹配下面所有用户页——:id 是"占位符"。</p>

    <ul class="user-list">
      <li>
        <!-- 样例：to 直接写死字符串地址 -->
        <router-link to="/user/1">写法① 字符串：用户 1</router-link>
      </li>
      <li>
        <!-- 补全：:to 动态绑定，把 data 里的 id 拼进地址（提示：'/user/' + id） -->
        <router-link :to="'/user/' + id">写法② 拼接变量：用户 {{ id }}（id 在 data 里）</router-link>
      </li>
      <li>
        <!-- 补全：对象写法，path 字段写完整地址 '/user/9527' -->
        <router-link :to="{ path: '/user/9527' }">写法③ 对象 path：用户 9527</router-link>
      </li>
    </ul>

    <p class="muted">点任意一个：地址栏变 <code>#/user/几</code>，右侧 User 页显示"用户ID：几"。</p>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return { id: 2 }
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

.user-list {
  list-style: none;
  padding: 0;
  margin: 8px 0;
}

.user-list li {
  border-bottom: 1px dashed var(--border);
  padding: 6px 2px;
}

code {
  background: var(--primary-bg);
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}

.muted {
  color: var(--muted);
}
</style>
