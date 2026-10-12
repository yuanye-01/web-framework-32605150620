<!-- ProvideInjectLab.vue —— 实验 07：跨级传递（3.7）
     教材例 3-12 同构：爷爷 provide，孙子 inject，中间层零传递。
     课程选项式：provide() 选项 + inject: []（教材用 provide()/inject() 函数，📖 对照） -->
<template>
  <div class="lab">
    <h2>实验 07｜provide / inject 跨级（3.7）</h2>
    <p class="muted">爷爷（本组件）provide 一辆车；中间层 MiddleChild <b>零传递</b>；孙子 GrandChild 直接 inject。</p>

    <p>爷爷说：我提供的是「{{ car }}」</p>
    <button @click="car = car === '宝马' ? '奔驰' : '宝马'">换一辆车（注意：选项式 provide 非响应式，孙子不会跟变——见下方说明）</button>

    <MiddleChild />
    <p class="muted">⚠️ 选项式 provide 的值<b>不是响应式</b>（创建时定格）——这是教材 3.7 的进阶边界，组合式传 ref 可保持响应式。</p>
  </div>
</template>

<script>
import MiddleChild from './MiddleChild.vue'

export default {
  name: 'ProvideInjectLab',
  components: { MiddleChild },
  provide() {
    return {
      car: this.car,
      appVersion: 'ch03-lab-v1'     // 顺便再 provide 一个版本号
    }
  },
  data() {
    return { car: '宝马' }
  }
}
</script>

<style scoped>
.lab {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

.muted {
  color: var(--muted);
}
</style>
