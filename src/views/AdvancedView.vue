<template>
  <div class="advanced-view">
    <h2>5: Advanced Component Communication</h2>
    
    <!-- Slots Example -->
    <div class="section">
      <h3>Slots Content Distribution</h3>
      <modal-dialog v-if="showModal" @close="showModal = false">
        <template v-slot:default>
          <p>This is dynamic content passed into the <code>modal-dialog</code> component using <strong>Slots</strong>.</p>
        </template>
        
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

      <div class="tab-content">
        <component :is="currentTabComponent"></component>
      </div>
    </div>

    <hr>
    
    <!-- Lifecycle Hooks Example -->
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
const TabOne = {
  template: '<p>This is the content for <strong>Tab One</strong>. Loaded dynamically!</p>'
}
const TabTwo = {
  template: '<p>This is <strong>Tab Two</strong>. <br>The component instance changed without routing.</p>'
}
const TabThree = {
  template: '<p>And finally, <strong>Tab Three</strong>.</p>'
}

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
  padding: 10px;
  animation: fadeIn 0.4s ease-out;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: var(--text-primary);
  border-bottom: 2px solid var(--surface-border);
  padding-bottom: 10px;
}

h3 {
  color: #fff;
  margin-bottom: 15px;
}

.section {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--surface-border);
  padding: 25px;
  border-radius: 16px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(0); }

.primary { background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; }
.danger { background: linear-gradient(135deg, #ef4444, #b91c1c); color: white; }

/* Modal CSS styling assuming it gets rendered here */
.modal {
  border: 1px solid var(--surface-border);
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 16px;
  padding: 25px;
  margin-top: 15px;
  box-shadow: var(--shadow-lg);
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  color: #fff;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.modal-footer {
  margin-top: 20px;
  text-align: right;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 15px;
}

/* Segmented Control style tabs */
.tabs {
  display: inline-flex;
  background: rgba(0, 0, 0, 0.3);
  padding: 6px;
  border-radius: 12px;
  margin-bottom: 20px;
  gap: 5px;
}

.tab-btn {
  padding: 10px 25px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: inherit;
}

.tab-btn:hover {
  color: #fff;
}

.tab-btn.active {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3);
}

.tab-content {
  border: 1px solid var(--surface-border);
  padding: 25px;
  border-radius: 12px;
  background: rgba(0,0,0,0.3);
  min-height: 100px;
  color: var(--text-primary);
  animation: fadeIn 0.3s ease-in-out;
}

ul {
  padding-left: 20px;
  color: var(--text-secondary);
}
ul li {
  margin-bottom: 8px;
}
</style>
