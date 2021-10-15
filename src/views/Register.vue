<template>
    <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form class="user">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="firstName" v-model="firstName" rules="firstNameRules"
                                            placeholder="First Name">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control form-control-user" id="lastName" v-model="lastName" rules="lastNameRules"
                                            placeholder="Last Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="number" class="form-control form-control-user" id="idNumber"   v-model="idNumber" rules="idNumberRules"
                                        placeholder="Identification number">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" id="email" v-model="email" rules="emailRules"
                                        placeholder="Email Address">
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" class="form-control form-control-user"
                                            id="password" v-model="password" rules="passwordRules" placeholder="Password">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control form-control-user"
                                            id="RepeatPassword" placeholder="Repeat Password">
                                    </div>
                                </div>
                                <button  href="index.html" class="btn btn-primary btn-user btn-block" @click="newUser()"> Register Account </button>
                                <hr>
                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Register with Google
                                </a>
                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a>
                            </form>
                            <hr>
                            <div class="text-center">
                                <router-link to="/forgot" class="small" >Forgot Password</router-link>
                            </div>
                            <div class="text-center">
                                <router-link to="/login" class="small" >Already have an account? Login!</router-link>
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
    valid: true,
    firstName: "",
    firstNameRules: [
      (v) => !!v || "Nombre es obligatorio",
      (v) => (v && v.length <= 10) || "Nombre debe ser menor a 10 caracteres",
    ],
    lastName: "",
    lastNameRules: [
      (v) => !!v || "Apellido es obligatorio",
      (v) => (v && v.length <= 10) || "Apellido debe ser menor a 10 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es obligatorio",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe ser válido",
    ],
    idNumber: "",
    idNumberRules: [(v) => !!v || "identificacion es obligatoria"],

    password: "",
    passwordRules: [(v) => !!v || "contraseña es obligatoria"],

    checkbox: false,
    id: null,
  }),
  methods: {
    
   newUser(){
      let obj = { firstName: this.firstName, 
                  lastName: this.lastName, 
                  idNumber: this.idNumber, 
                  email: this.email, 
                  password:this.password};
      store.dispatch("setUsers", obj).then(() => {
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