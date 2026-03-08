<template>
  <li class="task-item" :class="{ completed: task.completed }">
    <div class="task-content">
      <input 
        type="checkbox" 
        :checked="task.completed" 
        @change="$emit('toggle', task.id)" 
      />
      <span class="text">{{ task.text }}</span>
    </div>
    <button @click="$emit('delete', task.id)" class="delete-btn">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'TaskItem',
  // 4: Props - Receiving data from parent component
  props: {
    task: {
      type: Object,
      required: true
    }
  }
  // This component uses $emit in the template to communicate back to the parent
}
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  margin-bottom: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.task-item.completed .text {
  text-decoration: line-through;
  color: #888;
}
.task-content {
  display: flex;
  align-items: center;
  gap: 15px;
}
.delete-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}
.delete-btn:hover {
  background-color: #c0392b;
}
</style>
