<template>
  <div class="home">
    <!-- Masthead-->
    <header class="masthead bg-primary text-white text-center" id="home">
        <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                <div class="col-12 col-lg-5 col-md-6">
                    <h2 class="display-4 lh-1 mb-4 text-title">CMS CONCEPT</h2>
                    <p class="lead fw-normal text-muted mb-5 mb-lg-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquia.</p>
                    <a class="btn btn-outline-light py-2 px-4 mt-4 rounded-pill">
                        Login
                    </a>
                    <router-link to="/login">Link a la página de about</router-link>


                </div>                
                <div class="col-sm-8 col-md-6">
                    <img class="img-fluid rounded-circle" src="../assets/img/background/avion_home-02.png" alt="Imagen de un avión"/>
                </div>               
            </div>
        </div>
    </header>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Carroussel/>
    <Services/>
    <News/>
    <PortfolioTeam/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PortfolioTeam from '@/components/PortfolioTeam.vue'
import Footer from '@/components/Footer.vue'
import News from '@/components/News.vue'
import Services from '@/components/Services.vue'
import Carroussel from '../components/Carroussel.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carroussel,
    Services,
    News,
    PortfolioTeam,
    Footer
  }
}
</script>
