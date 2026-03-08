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
    // Vuex mapGetters allows easy access to store getters in computed properties
    ...mapGetters(['allTasks', 'completedTasks', 'taskCount'])
  },
  methods: {
    // Vuex mapping
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
    // Event Handler responding to child component emit
    toggleTask(taskId) {
      this.commitToggleTask(taskId)
    },
    // Event Handler responding to child component emit
    deleteTask(taskId) {
      this.commitDeleteTask(taskId)
    },

    // Event Modifiers Examples
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
  padding: 20px;
}
.summary {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  background-color: #e2f0fb;
  padding: 10px 20px;
  border-radius: 6px;
}
.add-task-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.add-task-form input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.primary { background-color: #42b983; color: white; }
.secondary { background-color: #34495e; color: white; }
.warning { background-color: #e67e22; color: white; }

.task-list {
  list-style: none;
  padding: 0;
}
.card {
  border: 1px dashed #ccc;
  padding: 20px;
  margin: 20px 0;
  background-color: #fafafa;
  cursor: pointer;
}
.nested-link {
  display: inline-block;
  background-color: #9b59b6;
  color: white;
  text-decoration: none;
  margin-bottom: 15px;
}
.nested-container {
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  min-height: 50px;
}
</style>
