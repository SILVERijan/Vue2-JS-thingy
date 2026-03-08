<template>
  <div id="app">
    <nav class="navbar">
      <h1>Vue Tasks</h1>
      <div class="links">
        <router-link to="/">Home (Basics)</router-link> |
        <router-link to="/tasks">Tasks (Vuex & Events)</router-link> |
        <router-link to="/advanced">Advanced (Slots & Hooks)</router-link>
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
/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f4f7f6;
}
.navbar {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}
.navbar h1 {
  margin-bottom: 10px;
  color: #42b983;
}
.links {
  margin-top: 10px;
}
.links a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 5px 10px;
}
.links a.router-link-exact-active, .links a.router-link-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
.container {
  max-width: 800px;
  margin: 30px auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
</style>
