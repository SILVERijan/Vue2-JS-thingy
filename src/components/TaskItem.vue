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
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  margin-bottom: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--surface-border);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
}

.task-item:hover {
  transform: translateX(5px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(239, 68, 68, 0.4);
}

.task-item.completed {
  opacity: 0.7;
}

.task-item.completed .text {
  text-decoration: line-through;
  color: var(--text-secondary);
}

.task-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Custom Checkbox */
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: var(--primary);
}

.text {
  font-size: 1.05rem;
  color: #fff;
  transition: color 0.3s ease;
}

.delete-btn {
  background: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.3);
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.delete-btn:hover {
  background: rgba(239, 68, 68, 0.3);
  color: #fff;
}
</style>
