<!-- ============================================================
  CenterOrders.vue —— 实验 04 子页面：我的订单（5.3）
  目录：views/04-nested/
  要点：与 CenterProfile 同级并列的另一个 child，自带假数据
============================================================ -->
<template>
  <div class="sub-page">
    <h3>🛒 我的订单（/center/orders）</h3>
    <ul>
      <li v-for="order in orders" :key="order.id">
        {{ order.title }}——{{ order.price }} 元（{{ order.status }}）
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CenterOrders',
  data() {
    return {
      orders: [
        { id: 1, title: '《Vue.js 前端开发实战》', price: 59.8, status: '已发货' },
        { id: 2, title: '机械键盘', price: 329, status: '待付款' }
      ]
    }
  }
}
</script>

<style scoped>
.sub-page {
  border: 1px dashed var(--border);
  border-radius: 8px;
  background: #fffdf5;
  padding: 10px 14px;
}

ul {
  margin: 6px 0 0;
  padding-left: 18px;
}
</style>
