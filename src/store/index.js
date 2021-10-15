import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
   
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload;
    }
  },
  actions: {
    async getUsers({commit}){
      const peticion = await fetch('http://localhost:3000/users');
      const data = await peticion.json();
      console.log(data);
      commit('setUsers', data);
  },

  async setUsers({commit}, users){
    const peticion = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(users)
    });
  },
 async loginUser({commit}, users){
    const peticion = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(users)
    });},

},
  modules: {
  }
})
