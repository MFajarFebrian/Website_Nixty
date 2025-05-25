import { ref } from 'vue';

interface User {
  id: number;
  email: string;
  name: string | null;
  account_type: 'user' | 'admin';
  created_at: string;
  google_id?: string;
  profile_picture?: string;
}

// Create a reactive user state that persists across components
const user = ref<User | null>(null);

export function useAuth() {
  // Initialize user from sessionStorage if available
  const initUser = () => {
    const userJson = sessionStorage.getItem('currentUser');
    if (userJson) {
      try {
        user.value = JSON.parse(userJson);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  };

  // Set the current user and update sessionStorage
  const setUser = (newUser: User | null) => {
    user.value = newUser;
    if (newUser) {
      sessionStorage.setItem('currentUser', JSON.stringify(newUser));
    } else {
      sessionStorage.removeItem('currentUser');
    }
  };

  // Clear the current user (logout)
  const logout = () => {
    user.value = null;
    sessionStorage.removeItem('currentUser');
  };

  return {
    user,
    initUser,
    setUser,
    logout
  };
} 