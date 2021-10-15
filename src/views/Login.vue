<template>
  <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="email" v-model="email" aria-describedby="emailHelp"
                                                placeholder="Email Address...">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="password" v-model="password"  placeholder="Password">
                                        </div>
                                        <div class="d-flex form-group justify-content-between">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                            <div class="text-center">
                                                <router-link to="/forgot" class="small" >Forgot Password</router-link>
                                            </div>
                                        </div>
                                       
                                        <button href="index.html" class="btn btn-primary btn-user btn-block" @click="loginUser()" >
                                            Login
                                        </button>
                                        <hr>
                                        <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr>
                                    <div class="justify-content-between">
                                        <p class="small">Don't have an account?
                                            <router-link to="/register" >Register with us!</router-link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import store from "../store/index.js";
export default {
  data: () => ({
   
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es obligatorio",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe ser válido",
    ],
   

    password: "",
    passwordRules: [(v) => !!v || "contraseña es obligatoria"],

    checkbox: false,
    id: null,
  }),
  methods: {
       loginUser(){
      let obj = {  
                  email: this.email, 
                  password:this.password};
      store.dispatch("getUser", obj).then(() => {
        store.dispatch("getUsers");
      });
      this.$refs.form.reset();
    }
       
  },
  created: () => {
    //accede a las acciones del store
    
    store.dispatch("getUsers");
  },
  computed: {
   
    users: () => {
      return store.state.users;
    },
  },
};
</script>

<style>
</style>