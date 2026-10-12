<!-- NoteList.vue —— 笔记列表容器：接住 filteredNotes，逐条渲染 NoteItem
     容器自己不碰数据：删除/完成的报信原样向上转发给 App（emit 透传） -->
<template>
  <ul class="note-list">
    <NoteItem
      v-for="(note, index) in notes"
      :key="note.id"
      :note="note"
      @remove="$emit('remove', $event)"
      @toggle="$emit('toggle', $event)"
    />
  </ul>
</template>

<script>
import NoteItem from './NoteItem.vue'

export default {
  name: 'NoteList',
  components: { NoteItem },
  props: {
    notes: { type: Array, required: true }
  },
  emits: ['remove', 'toggle']
}
</script>

<style scoped>
.note-list {
  padding: 0;
}
</style>
