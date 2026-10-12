<!-- LifecycleDemo.vue —— 实验 02 的"开关壳"：v-if 控制挂载/销毁 -->
<template>
  <div class="lab">
    <h2>实验 02｜生命周期（3.2）</h2>
    <p class="muted">挂载 → 点 +1（updated）→ 卸载（unmounted，Console 看清理）。<b>子组件的 mounted 先于父组件。</b></p>
    <button @click="show = !show">
      {{ show ? '卸载 LifecycleLab（触发 unmounted）' : '挂载 LifecycleLab（created → mounted）' }}
    </button>
    <p v-if="!show" class="muted">（组件已卸载，页面日志随组件一起消失——看 Console 的第 4 条）</p>
    <LifecycleLab v-if="show" />
    <p class="muted">↑ LifecycleDemo（父，"开关壳"）自己的 mounted 也会在 Console 打印——顺序：LifecycleLab 先、Demo 后。</p>
  </div>
</template>

<script>
import LifecycleLab from './LifecycleLab.vue'

export default {
  name: 'LifecycleDemo',
  components: { LifecycleLab },
  data() {
    return { show: true }
  },
  mounted() {
    console.log('[LifecycleDemo] 父（开关壳）mounted：我后于子组件')
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
