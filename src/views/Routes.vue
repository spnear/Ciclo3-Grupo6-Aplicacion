<template>
  <div class="home">
    <section class="text-white text-center my-5" id="booking">
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/img/collage/bogota.png" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/img/collage/medellin.png" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/img/collage/cartagena.png" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/img/collage/miami.png" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/img/collage/madrid.png" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/img/collage/cancun.jpg" class="card-img-top" alt="...">
                </div>
            </div>
        </div>
    </section>
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
