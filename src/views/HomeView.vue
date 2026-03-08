<template>
  <div class="home-view">
    <h2>1 & 2: Vue Instance, Data Binding & Directives</h2>
    
    <!-- Interpolation & v-bind -->
    <p>Message: <strong>{{ message }}</strong></p>
    <a :href="userLink" target="_blank" class="vue-link">Vue 2 Documentation</a>

    <hr>
    
    <!-- v-model for Two-Way Data Binding -->
    <div class="input-section">
      <h3>Two-Way Binding</h3>
      <input v-model="userInput" placeholder="Type something..." />
      <p>You typed: {{ userInput }}</p>
    </div>

    <hr>

    <!-- Computed Properties -->
    <div class="computed-section">
      <h3>Computed Properties</h3>
      <p>Original Message: {{ message }}</p>
      <p>Reversed Message: {{ reversedMessage }}</p>
    </div>

    <hr>

    <!-- Directives (v-if, v-show, v-for) -->
    <div class="directives-section">
      <h3>Directives</h3>
      
      <button @click="toggleVis" class="btn">Toggle Visibility (v-if & v-show)</button>
      
      <p v-if="isVisible" class="alert success">This element uses <code>v-if</code>. It is completely removed/added to the DOM.</p>
      <p v-else class="alert error">The <code>v-if</code> condition is false!</p>
      
      <p v-show="isVisible" class="alert info">This element uses <code>v-show</code>. Its CSS display is toggled.</p>
      
      <h4>v-for Example (List of Features)</h4>
      <ul>
        <li v-for="(feature, index) in features" :key="index">
          {{ index + 1 }}. {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    // Vue Instance Data
    return {
      message: 'Welcome to the Vue 2 Dashboard!',
      userLink: 'https://v2.vuejs.org/',
      userInput: '',
      isVisible: true,
      features: ['Data Binding', 'Directives', 'Event Handling', 'Components', 'Vue Router', 'Vuex']
    }
  },
  computed: {
    // Computed Properties: Cached based on reactive dependencies
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    toggleVis() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style scoped>
.home-view {
  padding: 20px;
}
.input-section, .computed-section, .directives-section {
  margin: 20px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
}
.btn:hover {
  background-color: #3aa876;
}
.vue-link {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
.alert {
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}
.success { background-color: #d4edda; color: #155724; }
.error { background-color: #f8d7da; color: #721c24; }
.info { background-color: #d1ecf1; color: #0c5460; }
</style>
