<!-- ============================================================
  User.vue —— 实验 03 页面：用户详情（5.2.3 动态路由取参）
  目录：views/03-dynamic/
  要点：$route.params.id 取动态参数；从 /user/1 点到 /user/2
        是"同一个组件复用"，需要 watch 路由才能响应参数变化
============================================================ -->
<template>
  <div class="page">
    <h2>🆔 用户详情</h2>
    <!-- 补全：当前路由信息对象 → 路径参数集合 → 名叫 id 的那个（问路用 $route，不是 $router） -->
    <p>用户ID：<b class="big">{{ $route.params.id }}</b>（来自 <code>$route.params.id</code>）</p>
    <p class="muted">从用户 1 直接点去用户 2：地址变了、参数也变了——但组件没有重新创建（看下面的观看次数）。</p>
    <p>本组件被复用观看了 <b>{{ viewed }}</b> 次（mounted 只跑一次；参数变化走 watch）</p>
    <router-link to="/users">← 回用户列表</router-link>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return { viewed: 1 }
  },
  mounted() {
    console.log('User 组件挂载了：', this.$route.params.id)
  },
  watch: {
    // 同一组件复用时，params 变化不会重挂组件——要自己侦听
    // 补全：侦听键写成字符串（提示：'$route.params.id'，引号别丢）
    '$route.params.id'(newId) {
      console.log('参数变了：', newId)
      this.viewed++
    }
  }
}
</script>

<style scoped>
.page {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

.big {
  font-size: 22px;
  color: var(--primary-dark);
}

code {
  background: #f0f1ff;
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}

.muted {
  color: var(--muted);
}
</style>
