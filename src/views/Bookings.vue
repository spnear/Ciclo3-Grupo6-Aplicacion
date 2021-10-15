<template>
  <div class="home">
    <!-- Masthead-->
    <header class="masthead bg-primary text-white text-center" id="home">
        <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                <div class="col-12 col-lg-5 col-md-6">
                    <h2 class="display-4 lh-1 mb-4 text-title">BOOKINGS</h2>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                </div>
                                <div class="form-style-2">
                                    <form action="" method="post">
                                    <h6 class="portfolio-modal-title text-secondary text-start mb-0">¿A Dónde Viajas?</h6>
                                    <label for="field2"><span class="text-secondary text-start">Desde<span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" v-model="desde"  /></label>
                                    <label for="field2"><span class="text-secondary text-start">Hacia<span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" v-model="hacia"  /></label> 
                                    
                                    <h6 class="portfolio-modal-title text-secondary text-start mb-0">¿Cúando Viajas?</h6>
                                    <label for="field2"><span class="text-secondary text-start">Fecha de ida<span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" v-model="fechaIda" /></label>
                                    <label for="field2"><span class="text-secondary text-start">Fecha de regreso<span class="required">*</span></span> <input type="text" class="input-field" name="field2" value="" v-model="fechaRegreso"  /></label> 
                                    <label for="field2"><span class="text-secondary text-start">Nombre completo<span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" v-model="nombre" /></label>
                                    <label for="field2"><span class="text-secondary text-start">Número de identificación <span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" v-model="idNumber" /></label>

                                    </form>
                                </div>
                                 <button   class="btn btn-primary btn-user btn-block" @click="newVuelo()"> RESERVAR </button>

                                 <hr/>
                                 <hr/>
                                                   <!--------- Inicio Tabla Documentos------>
                                    <table class="table">
                                    
                                        <thead>
                                        <tr>
                                            <th scope="col">Desde</th>
                                            <th scope="col">Hacia</th>
                                            <th scope="col">Fecha Ida</th>
                                            <th scope="col">Fecha Regreso</th>
                                            <th scope="col">Nombre Completo</th>
                                            <th scope="col">Numero de Id</th>
                                            <th scope="col">Elejir</th>
                                        </tr>
                                        </thead>
                                        
                                        <tbody>
                                        <tr v-for="viaje in vuelo" :key="viaje._id">
                                            <th scope="row">{{ viaje._id}}</th>
                                                <td>{{ viaje.desde }}</td>
                                                <td>{{ viaje.hacia }}</td>
                                                <td>{{ viaje.fechaIda }}</td>
                                                <td>{{ viaje.fechaRegreso }}</td>
                                                <td>{{ viaje.nombre }}</td>
                                                <td>{{ viaje.idNumber }}</td>
                                                <td>
                                            <button
                                                @click="deleteVuelo(viaje._id)"
                                                color="error"
                                                elevation="2"
                                                rounded
                                                small
                                                >Eliminar</button
                                            >
                                            <button @click="btnActualizar(viaje._id,viaje.desde,viaje.hacia,viaje.fechaIda,viaje.fechaRegreso,viaje.nombre,viaje.idNumber)" color="primary" elevation="2" rounded small
                                                >Actualizar</button
                                            >
                                            </td>
                                        </tr>
                                        </tbody>
                                    
                                    </table>
                                    <!--------- Fin Tabla Documentos ------>
                                 
     
                            </div>
                        </div>
                    </div>
                </div> 


                

                <div class="col-sm-8 col-md-6">
                    <div class="px-5 px-sm-0">
                        <img class="img-fluid rounded-circle" src="../assets/img/background/bookings.png" alt="Imagen de un avión"/>
                    </div>



                </div>    

                
                           
            </div>
        </div>
    </header>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import store from "../store/index.js";

export default {
  name: 'Home',
  components: {
    Footer
  },


  data: () => ({
    valid: true,
    desde: "",
    desdeRules: [
      (v) => !!v || "Ruta es obligatorio",
      (v) => (v && v.length <= 20) || "lugar no valido",
    ],
    hacia: "",
    haciaRules: [
      (v) => !!v || "campo obligatorio",
      (v) => (v && v.length <= 20) || "lugar no valido",
    ],
    fechaIda: "",
    fechaRules: [(v) => !!v || "fecha es obligatoria"],

    fechaRegreso: "",

    nombre: "",
    nombreRules: [
      (v) => !!v || "Nombre es obligatorio",
      (v) => (v && v.length <= 10) || "Nombre debe ser menor a 10 caracteres",
    ],

    idNumber: "",
    idNumberRules: [(v) => !!v || "identificacion es obligatoria"],

    checkbox: false,
    id: null,
  }),
  methods: {
    
   newVuelo(){
      let obj = { desde: this.desde, 
                  hacia: this.hacia, 
                  fechaIda: this.fechaIda, 
                  fechaRegreso:this.fechaRegreso,
                  nombre: this.nombre,
                  idNumber: this.idNumber
                  };
      store.dispatch("setVuelo", obj).then(() => {
        store.dispatch("getVu");
      });
      this.$refs.form.reset();
    },

    updateVu(id){
      let obj = { id: id,
                  desde: this.desde, 
                  hacia: this.hacia, 
                  fechaIda: this.fechaIda, 
                  fecheRegreso:this.fecheRegreso,
                  nombre: this.nombre,
                  idNumber: this.idNumber };
      store.dispatch("updateVu", obj).then(() => {
        store.dispatch("geVu");
        this.id = null;
      });
      this.$refs.form.reset();
    },

    deleteVu(id) {
      let obj = { id };
      store.dispatch("deleteVu", obj).then(() => {
        store.dispatch("getvu");
      });
    },

    btnActualizar(id, desde, hacia, fechaIda, fechaRegreso,nombre, idNumber){
      this.id = id;
      this.desde = desde; 
      this.hacia = hacia; 
      this.fechaIda = fechaIda; 
      this.fechaRegreso = fechaRegreso;
      this.nombre = nombre;
      this.idNumber = idNumber; 
      },
   
  },

  created: () => {
    //accede a las acciones del store
    
    store.dispatch("getVu");
  },
  computed: {
   
    vuelo: () => {
      return store.state.vuelo;
    },
  },
}



</script>

<style>
</style>
