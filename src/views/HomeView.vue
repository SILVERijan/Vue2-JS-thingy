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
    return {
      message: 'Welcome to the Vue 2 Dashboard!',
      userLink: 'https://v2.vuejs.org/',
      userInput: '',
      isVisible: true,
      features: ['Data Binding', 'Directives', 'Event Handling', 'Components', 'Vue Router', 'Vuex']
    }
  },
  computed: {
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
  padding: 10px;
  animation: fadeIn 0.5s ease-out;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: var(--text-primary);
  border-bottom: 2px solid var(--surface-border);
  padding-bottom: 10px;
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #fff;
}

.input-section, .computed-section, .directives-section {
  margin: 25px 0;
  padding: 25px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid var(--surface-border);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.input-section:hover, .computed-section:hover, .directives-section:hover {
  transform: translateY(-2px);
  border-color: rgba(239, 68, 68, 0.3);
}

p {
  line-height: 1.6;
  margin-bottom: 10px;
  color: var(--text-secondary);
}

strong {
  color: #fff;
}

input {
  width: 100%;
  max-width: 400px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--surface-border);
  color: #fff;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-bottom: 15px;
  font-family: inherit;
}

input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.btn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3);
  font-family: inherit;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(239, 68, 68, 0.4);
}

.btn:active {
  transform: translateY(0);
}

.vue-link {
  display: inline-block;
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  margin-top: 10px;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.vue-link:hover {
  color: var(--primary-hover);
  border-bottom-color: var(--primary-hover);
}

.alert {
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid transparent;
}

.alert code {
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 4px;
  font-family: monospace;
  margin: 0 4px;
}

.success { 
  background: rgba(16, 185, 129, 0.1); 
  border-color: rgba(16, 185, 129, 0.3);
  color: #34d399; 
}
.error { 
  background: rgba(239, 68, 68, 0.1); 
  border-color: rgba(239, 68, 68, 0.3);
  color: #f87171; 
}
.info { 
  background: rgba(56, 189, 248, 0.1); 
  border-color: rgba(56, 189, 248, 0.3);
  color: #7dd3fc; 
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 15px;
}

ul li {
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 8px;
  border-radius: 6px;
  border-left: 3px solid var(--primary);
  color: var(--text-secondary);
  transition: transform 0.2s ease, background 0.2s ease;
}

ul li:hover {
  transform: translateX(5px);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}
</style>
