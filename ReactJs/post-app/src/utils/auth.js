// utils/auth.js

const auth = {
  async login(credentials) {
    // Simulate API call – in real app, you'd fetch token & user from backend
    const user = {
      id: '1',
      name: 'Demo User',
      email: credentials.email
    };

    localStorage.setItem('user', JSON.stringify(user));
    return user; // 
  },

  async logout() {
    localStorage.removeItem('user');
  },

  async getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};

export default auth;
