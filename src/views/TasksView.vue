<template>
  <div class="tasks-view">
    <h2>3 & 7: Event Handling & Vuex State</h2>
    
    <div class="summary">
      <p>Total Tasks: <strong>{{ taskCount }}</strong></p>
      <p>Completed Tasks: <strong>{{ completedTasks.length }}</strong></p>
    </div>

    <!-- Event Handling with .prevent modifier -->
    <form @submit.prevent="submitTask" class="add-task-form">
      <input v-model="newTaskText" placeholder="Add a new task..." required />
      <button type="submit" class="btn primary">Add Task</button>
      <button type="button" @click="addDelayedTask" class="btn secondary">Add Task (Async)</button>
    </form>
    
    <!-- Event Propagation Example (.stop modifier) -->
    <div class="card" @click="handleCardClick">
      <h4>Event Propagation Example</h4>
      <p>Clicking the button inside this card uses <code>.stop</code> to prevent the card's click event.</p>
      <button @click.stop="handleButtonClick" class="btn warning">Click Me Only (.stop)</button>
    </div>

    <hr>
    
    <h3>Task List (Components & Props)</h3>
    <ul class="task-list">
      <!-- Child Component Example -->
      <!-- Passing props (task) and listening to emitted events (@toggle, @delete) -->
      <task-item 
        v-for="task in allTasks" 
        :key="task.id" 
        :task="task"
        @toggle="toggleTask"
        @delete="deleteTask"
      />
    </ul>

    <hr>

    <h3>Nested Routing</h3>
    <p>Below is a dynamic area controlled by Vue Router named views/children.</p>
    <router-link to="/tasks/nested" class="btn nested-link">Show Nested Route Info</router-link>
    <div class="nested-container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import TaskItem from '../components/TaskItem.vue'

export default {
  name: 'TasksView',
  components: {
    TaskItem
  },
  data() {
    return {
      newTaskText: ''
    }
  },
  computed: {
    ...mapGetters(['allTasks', 'completedTasks', 'taskCount'])
  },
  methods: {
    ...mapMutations({
      commitToggleTask: 'TOGGLE_TASK_STATUS',
      commitDeleteTask: 'DELETE_TASK',
      commitAddTask: 'ADD_TASK'
    }),
    ...mapActions(['addTaskAsync']),
    
    submitTask() {
      if (this.newTaskText.trim()) {
        this.commitAddTask(this.newTaskText.trim())
        this.newTaskText = ''
      }
    },
    async addDelayedTask() {
      if (this.newTaskText.trim()) {
        const text = this.newTaskText.trim()
        this.newTaskText = 'Adding...'
        await this.addTaskAsync(text)
        this.newTaskText = ''
      }
    },
    toggleTask(taskId) {
      this.commitToggleTask(taskId)
    },
    deleteTask(taskId) {
      this.commitDeleteTask(taskId)
    },
    handleCardClick() {
      alert("Card area clicked! Event bubbled up.")
    },
    handleButtonClick() {
      alert("Button clicked! Propagation stopped with .stop")
    }
  }
}
</script>

<style scoped>
.tasks-view {
  padding: 10px;
  animation: fadeIn 0.4s ease-out;
}

h2, h3 {
  color: #fff;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 10px;
}

.summary {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(0, 0, 0, 0.4));
  padding: 15px 25px;
  border-radius: 12px;
  border: 1px solid var(--surface-border);
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.summary p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.summary strong {
  color: var(--primary);
  font-size: 1.3rem;
  margin-left: 5px;
}

.add-task-form {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.add-task-form input {
  flex-grow: 1;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--surface-border);
  color: #fff;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  min-width: 250px;
}

.add-task-form input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.btn {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-family: inherit;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.3);
}

.btn:active {
  transform: translateY(0);
}

.primary { background: linear-gradient(135deg, #ef4444, #991b1b); color: white; }
.secondary { background: linear-gradient(135deg, #f87171, #dc2626); color: white; }
.warning { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; }

.task-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card {
  border: 1px dashed rgba(239, 68, 68, 0.4);
  padding: 25px;
  margin: 25px 0;
  background: rgba(239, 68, 68, 0.05);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card:hover {
  background: rgba(239, 68, 68, 0.1);
  border-color: var(--primary);
}

.nested-link {
  display: inline-block;
  background: linear-gradient(135deg, #ef4444, #991b1b);
  color: white;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 10px 15px;
  border-radius: 8px;
  transition: transform 0.2s;
}
.nested-link:hover {
  transform: translateY(-2px);
}

.nested-container {
  border: 1px solid var(--surface-border);
  border-radius: 12px;
  background: rgba(0,0,0,0.3);
  min-height: 80px;
  padding: 20px;
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.2);
}
</style>
