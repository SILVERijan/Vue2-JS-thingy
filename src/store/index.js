import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, text: 'Learn Vue Basics', completed: true },
      { id: 2, text: 'Master Components', completed: false },
      { id: 3, text: 'Understand Vue Router', completed: false },
      { id: 4, text: 'Implement Vuex', completed: false }
    ],
    nextId: 5
  },
  getters: {
    allTasks: state => state.tasks,
    completedTasks: state => state.tasks.filter(t => t.completed),
    incompleteTasks: state => state.tasks.filter(t => !t.completed),
    taskCount: state => state.tasks.length
  },
  mutations: {
    ADD_TASK(state, text) {
      state.tasks.push({
        id: state.nextId++,
        text,
        completed: false
      })
    },
    TOGGLE_TASK_STATUS(state, taskId) {
      const task = state.tasks.find(t => t.id === taskId)
      if (task) {
        task.completed = !task.completed
      }
    },
    DELETE_TASK(state, taskId) {
      state.tasks = state.tasks.filter(t => t.id !== taskId)
    }
  },
  actions: {
    // Simulating an asynchronous action
    addTaskAsync({ commit }, text) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('ADD_TASK', text)
          resolve()
        }, 1000)
      })
    }
  }
})
