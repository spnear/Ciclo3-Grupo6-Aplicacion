<template>
  <div class="home">
    <!-- Navigation-->   
    <section class="page-section bg-contactus text-secondary mb-0" id="contact">
        <div class="container px-5">
            <h2 class="display-4 lh-1 mb-4 text-title">CONTACT US</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card_contact">
                    <h3 class="card_contact-title bg-transparent text-center mt-3">GIVE US A CALL</h3>
                    <picture class="img-fluid centrar">
                        <img class="mb-2 img-contact" src="../assets/img/contact/Call_WA-06.png" alt="Ícono teléfono" />
                    </picture>
                    <div class="card_contact-body">
                      <h5 class="card_contact-title text-center">xxxxxxxxxx</h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card_contact centrar">
                    <h3 class="card_contact-title text-center mt-3 bg-transparent ">SEND US AN EMAIL</h3>
                    <picture class="img-fluid centrar">
                        <img class="mb-2 img-contact" src="../assets/img/contact/Email_WA-06.png" alt="Ícono enviar email" />
                    </picture>
                    <div class="card_contact-body">
                      <h5 class="card_contact-title text-center">xxxxxxxxxx</h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card_contact">
                    <h3 class="card_contact-title text-center mt-3">COME SEE US</h3>
                    <picture class="img-fluid centrar">
                        <img class="mb-2 img-contact" src="../assets/img/contact/Loc_WA-06.png" alt="Ícono ubicación" />
                    </picture>
                    <div class="card_contact-body">
                      <h5 class="card_contact-title text-center">xxxxxxxxxx</h5>
                    </div>
                  </div>
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
