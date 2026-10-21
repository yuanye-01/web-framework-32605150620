<!-- ============================================================
  SlotBasicLab.vue —— 小实验 03：默认插槽与后备内容（4.3.1—4.3.2）
  目录：experiments/03-slot-basic/
  要点：双标签传入插槽内容（父作用域的数据也能用）｜
        单标签/空内容 → 显示 <slot> 里写好的后备内容
============================================================ -->
<template>
  <div class="lab">
    <h2>实验 03｜默认插槽与后备内容（4.3.1—4.3.2）</h2>
    <p class="muted">同一个 AddressCard，三张卡片三种用法——内容由使用者决定。</p>

    <div class="row">
      <!-- ① 双标签传入纯文本 -->
      <AddressCard>
        <p>收货地址：北京市海淀区</p>
        <p>收货人：张三</p>
      </AddressCard>

      <!-- ② 插槽内容可以是任意模板：加粗、着色、甚至组件 -->
      <AddressCard>
        <p><b>收货地址：{{ city }}</b>（来自父组件数据）</p>
        <p>收货人：{{ name }} <span class="badge">加急</span></p>
      </AddressCard>

      <!-- ③ 什么都不传 → 后备内容生效 -->
      <AddressCard></AddressCard>
    </div>
  </div>
</template>

<script>
import AddressCard from './AddressCard.vue'

export default {
  name: 'SlotBasicLab',
  components: { AddressCard },
  data() {
    return {
      city: '成都市成华区',
      name: '李四'
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

.badge {
  background: var(--warn);
  color: #fff;
  border-radius: 999px;
  font-size: 12px;
  padding: 1px 10px;
}

.muted {
  color: var(--muted);
}
</style>