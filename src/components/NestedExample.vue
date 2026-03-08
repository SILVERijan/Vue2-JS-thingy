<template>
  <div class="nested-example">
    <h4>Nested Route Content</h4>
    <p>This component is rendered inside <code>TasksView.vue</code> because it matches the <code>/tasks/nested</code> path.</p>
  </div>
</template>

<script>
export default {
  name: 'NestedExample'
}
</script>

<style scoped>
.nested-example {
  padding: 15px;
  background-color: #f1f2f6;
  border-left: 4px solid #9b59b6;
}
</style>
