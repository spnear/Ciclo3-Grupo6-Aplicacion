import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    vuelo: []
   
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload;
    },
    setVuelo(state, payload){
      state.users = payload;
    }
  },
  actions: {
    async setVuelo({commit}, vuelo){
      const peticion = await fetch('http://localhost:3000/vuelo', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(vuelo)
      });
    },

    async updateVu({commit}, vuelo){
      const peticion = await fetch('http://localhost:3000/vuelo', {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(vuelo)
      });
    },
    
    async getVu({commit}){
      const peticion = await fetch('http://localhost:3000/vuelo');
      const data = await peticion.json();
      console.log(data);
      commit('setVuelo', data);
  }, 

  async deleteVu({commit},vuelo){
    const peticion = await fetch('http://localhost:3000/users', {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(vuelo)
    });
  },




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
