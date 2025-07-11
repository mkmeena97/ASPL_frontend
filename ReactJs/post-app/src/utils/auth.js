
 const auth = {
  async login(credentials) {
    // In a real app, this would call an API
    localStorage.setItem('user', JSON.stringify({
      id: '1',
      name: 'Demo User',
      email: credentials.email
    }));
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