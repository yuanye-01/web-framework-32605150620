<!-- ============================================================
  NamedDemo.vue —— 实验 05 页面：命名路由对照台（5.4）
  目录：views/05-named/
  要点：同一个目标 /user/9527 两种写法对照——
        路径写法直观但要手拼；命名写法 path 改了不用改跳转代码
============================================================ -->
<template>
  <div class="page">
    <h2>🏷️ 命名路由（5.4）</h2>
    <p class="muted">同一个目标，两种写法：</p>

    <ul>
      <li>
        <!-- 样例：路径写法——直观，但路径写死了 -->
        <router-link to="/user/9527">路径写法：to="/user/9527"</router-link>
        <span class="muted">——直观，但路径写死了</span>
      </li>
      <li>
        <!-- 补全：对象写法跳同一个目标——name 写路由表里的名字，参数交给 params
             （提示：{ name: 'user', params: { id: 9527 } }，name 别忘引号） -->
        <router-link :to="{ name: 'user', params: { id: 9527 } }">命名写法：:to="{ name: 'user', params: { id: 9527 } }"</router-link>
        <span class="muted">——按 name 找路由，参数交给 params</span>
      </li>
    </ul>

    <p class="muted">好处在"改路径"的时候：把路由表里 /user/:id 改成 /member/:id，路径写法全断、命名写法照常——跳转与路径解耦。</p>
  </div>
</template>

<script>
export default {
  name: 'NamedDemo'
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

ul {
  list-style: none;
  padding: 0;
  margin: 8px 0;
}

li {
  border-bottom: 1px dashed var(--border);
  padding: 6px 2px;
}

.muted {
  color: var(--muted);
  font-size: 13px;
}
</style>
