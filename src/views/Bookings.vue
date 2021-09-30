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
                                    <label for="field2"><span class="text-secondary text-start">Desde<span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label>
                                    <label for="field2"><span class="text-secondary text-start">Hacia<span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label> 
                                    
                                    <h6 class="portfolio-modal-title text-secondary text-start mb-0">¿Cúando Viajas?</h6>
                                    <label for="field2"><span class="text-secondary text-start">Fecha de ida<span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label>
                                    <label for="field2"><span class="text-secondary text-start">Fecha de regreso<span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label> 
                                    <label for="field2"><span class="text-secondary text-start">Nombre completo<span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label>
                                    <label for="field2"><span class="text-secondary text-start">Número de identificación<span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label>

                                    </form>
                                </div>
                                <a class="btn btn-outline-light py-2 px-4 mt-4 rounded-pill" href="https://startbootstrap.com/theme/new-age">RESERVAR</a>
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
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>
