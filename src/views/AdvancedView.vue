<template>
  <div class="advanced-view">
    <h2>5: Advanced Component Communication</h2>
    
    <!-- Slots Example -->
    <div class="section">
      <h3>Slots Content Distribution</h3>
      <modal-dialog v-if="showModal" @close="showModal = false">
        <!-- Using the default slot -->
        <template v-slot:default>
          <p>This is dynamic content passed into the <code>modal-dialog</code> component using <strong>Slots</strong>.</p>
        </template>
        
        <!-- Named Slot (if our modal supported it, normally syntax is v-slot:footer) -->
        <template v-slot:footer>
          <button @click="showModal = false" class="btn danger">Confirm / Close</button>
        </template>
      </modal-dialog>
      <button @click="showModal = true" class="btn primary" v-else>Open Modal with Slot Content</button>
    </div>

    <hr>

    <!-- Dynamic Components Example -->
    <div class="section">
      <h3>Dynamic Components</h3>
      <div class="tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          @click="currentTab = tab"
          :class="['tab-btn', { active: currentTab === tab }]"
        >
          {{ tab }}
        </button>
      </div>

      <!-- <component :is="..."> renders dynamically -->
      <div class="tab-content">
        <component :is="currentTabComponent"></component>
      </div>
    </div>

    <hr>
    
    <!-- Lifecycle Hooks Example (Demonstrated in console, plus a prop) -->
    <div class="section">
      <h3>Lifecycle Hooks</h3>
      <p>Check your browser console to see the logs from this view's lifecycle hooks!</p>
      <ul>
        <li><code>created()</code></li>
        <li><code>mounted()</code></li>
        <li><code>beforeDestroy()</code></li>
      </ul>
    </div>
  </div>
</template>

<script>
// Inline components for the Dynamic Components example
const TabOne = {
  template: '<p>This is the content for <strong>Tab One</strong>. Loaded dynamically!</p>'
}
const TabTwo = {
  template: '<p>This is <strong>Tab Two</strong>. <br>The component instance changed without routing.</p>'
}
const TabThree = {
  template: '<p>And finally, <strong>Tab Three</strong>.</p>'
}

// Inline component for the Slot example
const ModalDialog = {
  template: `
    <div class="modal">
      <div class="modal-content">
        <h4>Modal Title</h4>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">Close</button>
          </slot>
        </div>
      </div>
    </div>
  `
}

export default {
  name: 'AdvancedView',
  components: {
    ModalDialog,
    TabOne,
    TabTwo,
    TabThree
  },
  data() {
    return {
      showModal: false,
      currentTab: 'TabOne',
      tabs: ['TabOne', 'TabTwo', 'TabThree']
    }
  },
  computed: {
    currentTabComponent() {
      return this.currentTab
    }
  },
  // --- LIFECYCLE HOOKS ---
  created() {
    console.log('[AdvancedView] created hook called! State and reactivity are ready.')
  },
  mounted() {
    console.log('[AdvancedView] mounted hook called! DOM is now rendered.')
  },
  beforeDestroy() {
    console.log('[AdvancedView] beforeDestroy hook called! Cleaning up resources.')
  }
}
</script>

<style scoped>
.advanced-view {
  padding: 20px;
}
.section {
  margin-bottom: 30px;
}
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.primary { background-color: #42b983; color: white; }
.danger { background-color: #e74c3c; color: white; }

.modal {
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  margin-top: 10px;
}
.modal-footer {
  margin-top: 15px;
  text-align: right;
  border-top: 1px solid #eee;
  padding-top: 10px;
}

.tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}
.tab-btn {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-bottom: none;
  background-color: #eee;
  cursor: pointer;
  border-radius: 4px 4px 0 0;
}
.tab-btn.active {
  background-color: white;
  border-bottom: 1px solid white;
  margin-bottom: -1px;
  font-weight: bold;
}
.tab-content {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 0 4px 4px 4px;
  background-color: white;
}
</style>
