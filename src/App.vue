<template>
  <div id="app">
    <nav class="navbar">
      <h1>Vue Tasks</h1>
      <div class="links">
        <router-link to="/">Home (Basics)</router-link>
        <router-link to="/tasks">Tasks (Vuex & Events)</router-link>
        <router-link to="/advanced">Advanced (Slots & Hooks)</router-link>
        <router-link to="/login">Login</router-link>
      </div>
    </nav>
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Global Modern Styles */
:root {
  --primary: #ef4444;       /* Red 500 */
  --primary-hover: #dc2626; /* Red 600 */
  --secondary: #7f1d1d;     /* Red 900 */
  --bg-gradient-start: #0a0000; /* Almost Black */
  --bg-gradient-end: #1a0505;   /* Very Dark Dark Red/Black */
  --surface: rgba(20, 20, 20, 0.4);
  --surface-border: rgba(239, 68, 68, 0.2);
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --shadow-lg: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
  background: linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-end));
  background-attachment: fixed;
  min-height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

/* Glassmorphic Navbar */
.navbar {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 20px 40px;
  border-radius: 16px;
  border: 1px solid var(--surface-border);
  box-shadow: var(--shadow-lg);
  text-align: center;
  width: 90%;
  max-width: 900px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.navbar:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.4);
}

.navbar h1 {
  margin-bottom: 15px;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(to right, #fca5a5, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

.links a {
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Custom separator handling since we removed the | from template */
.links a:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.1);
}

.links a.router-link-exact-active, .links a.router-link-active {
  color: #fff;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
}

/* Main Container styled beautifully */
.container {
  width: 90%;
  max-width: 900px;
  background: var(--surface);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid var(--surface-border);
  box-shadow: var(--shadow-lg);
  animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Utility to ensure elements look crisp */
hr {
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 30px 0;
}
</style>
