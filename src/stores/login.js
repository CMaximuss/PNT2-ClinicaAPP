import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
  state: () => {
    return { 
      isLogin: false, 
      user: { email: '', permissions: [] } 
    };
  },
  actions: {
    // Acción para cerrar sesión
    logout() {
      this.isLogin = false;
      this.user = { email: '', permissions: [] };
    },
    // Acción para iniciar sesión
    login(user) {
      this.isLogin = true;
      this.user.email = user.email;
      
      if (!Array.isArray(this.user.permissions)) {
        this.user.permissions = [];
      }
      this.user.permissions = user.permissions;
    },
    // Verifica si el usuario tiene un permiso específico
    havePermissions(access) {
      if (this.user && Array.isArray(this.user.permissions)) {
        return this.user.permissions.some(permission => permission === access);
      }
      return false; 
    },
  },
});
