<template>
  <div class="home">
    <!-- Masthead-->
    <header class="masthead bg-primary text-white text-center" id="home">
        <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                <div class="col-12 col-lg-5 col-md-6">
                    <h2 class="display-4 lh-1 mb-4 text-title">PETICIONES, QUEJAS, RECLAMOS Y SOLICITUDES (PQRS)</h2>
                    <a class="btn btn-outline-light py-2 px-4 mt-4 rounded-pill" href="https://startbootstrap.com/theme/new-age" data-bs-toggle="modal"
                    data-bs-target="#modalpqrs">HAGA SU SOLICITUD AQUÍ</a>
                </div>                
                <div class="col-sm-8 col-md-6">
                    <div class="px-5 px-sm-0">
                        <img class="img-fluid rounded-circle" src="../assets/img/pqrs/pqrs.png" alt="Imagen de un avión"/>
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
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>
