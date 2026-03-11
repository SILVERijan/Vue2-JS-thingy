<template>
  <div class="login-view">
    <div class="login-card">
      <div class="card-header">
        <h2>Welcome Back</h2>
        <p>Please log in to your account</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group" :class="{ 'has-error': errors.email }">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="you@example.com"
              @input="validateEmail"
            >
          </div>
          <span class="error-text" v-if="errors.email">{{ errors.email }}</span>
        </div>

        <div class="form-group" :class="{ 'has-error': errors.password }">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <input 
              type="password" 
              id="password" 
              v-model="form.password" 
              placeholder="••••••••"
              @input="validatePassword"
            >
          </div>
          <span class="error-text" v-if="errors.password">{{ errors.password }}</span>
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="form.remember">
            <span>Remember me</span>
          </label>
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>

        <button type="submit" class="submit-btn" :disabled="isLoading || !isFormValid">
          <span v-if="isLoading" class="loader"></span>
          <span v-else>Sign In</span>
        </button>
      </form>

      <div class="card-footer">
        <p>Don't have an account? <a href="#">Sign up here</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false
      },
      errors: {
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  computed: {
    isFormValid() {
      return this.form.email && 
             this.form.password && 
             !this.errors.email && 
             !this.errors.password;
    }
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email) {
        this.errors.email = 'Email is required';
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address';
      } else {
        this.errors.email = '';
      }
    },
    validatePassword() {
      if (!this.form.password) {
        this.errors.password = 'Password is required';
      } else if (this.form.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters';
      } else {
        this.errors.password = '';
      }
    },
    handleLogin() {
      this.validateEmail();
      this.validatePassword();

      if (this.isFormValid) {
        this.isLoading = true;
        // Simulate API call
        setTimeout(() => {
          this.isLoading = false;
          // Normally dispatch action to vuex
          this.$router.push('/');
        }, 1500);
      }
    }
  }
}
</script>

<style scoped>
.login-view {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.login-card {
  width: 100%;
  max-width: 440px;
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  position: relative;
  overflow: hidden;
}

/* Subtle gradient orb in background */
.login-card::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(239,68,68,0) 70%);
  border-radius: 50%;
  z-index: 0;
  pointer-events: none;
}

.card-header {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}

.card-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  background: linear-gradient(to right, #fca5a5, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-header p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 14px;
  width: 18px;
  height: 18px;
  color: #94a3b8;
  transition: color 0.3s ease;
}

.input-wrapper input {
  width: 100%;
  padding: 14px 14px 14px 44px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  outline: none;
}

.input-wrapper input:focus {
  background: rgba(15, 23, 42, 0.8);
  border-color: rgba(239, 68, 68, 0.5);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}

.input-wrapper input:focus + .input-icon,
.input-wrapper input:not(:placeholder-shown) ~ .input-icon {
  color: var(--primary);
}

.has-error .input-wrapper input {
  border-color: #f87171;
  background: rgba(248, 113, 113, 0.05);
}

.error-text {
  color: #fca5a5;
  font-size: 0.8rem;
  margin-top: 4px;
  animation: slideDown 0.2s ease-out forwards;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-top: 4px;
  margin-bottom: 8px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  cursor: pointer;
}

.remember-me input[type="checkbox"] {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(15, 23, 42, 0.6);
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.remember-me input[type="checkbox"]:checked {
  background: var(--primary);
  border-color: var(--primary);
}

.remember-me input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 5px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.forgot-password {
  color: #fca5a5;
  text-decoration: none;
  transition: color 0.2s ease;
}

.forgot-password:hover {
  color: var(--primary);
  text-decoration: underline;
}

.submit-btn {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
  position: relative;
  overflow: hidden;
}

.submit-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
  transform: skewX(-20deg);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  20% { left: 200%; }
  100% { left: 200%; }
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(1px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  background: linear-gradient(135deg, #64748b, #475569);
  box-shadow: none;
}

.submit-btn:disabled::after {
  display: none;
}

.loader {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.card-footer {
  text-align: center;
  margin-top: 30px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;
}

.card-footer a {
  color: #fca5a5;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.card-footer a:hover {
  color: var(--primary);
  text-decoration: underline;
}
</style>
