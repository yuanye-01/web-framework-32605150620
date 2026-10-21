<!-- ============================================================
  AddressCard.vue —— 实验 03 子组件：收货信息卡片（4.3.1—4.3.2）
  目录：experiments/03-slot-basic/
  要点：<slot> 占位 ｜ 标签内写"后备（兜底）内容"，不传内容时生效
  对比：硬编码版（收货地址、收货人写死在模板里）只能展示一份；
        插槽版谁用谁填，一张卡片展示千家地址。
============================================================ -->
<template>
  <div class="card">
    <header>📦 收货信息</header>
    <!-- 占位：使用者在双标签里塞什么，这里就显示什么；
         什么都不塞，就显示标签内写好的后备内容 -->
    <slot>
      <p>暂无收货信息，请填写～</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'AddressCard'
}
</script>

<style scoped>
.card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
  padding: 12px 16px;
  min-width: 220px;
}

header {
  font-weight: 600;
  border-bottom: 1px dashed var(--border);
  padding-bottom: 6px;
  margin-bottom: 8px;
}
</style>