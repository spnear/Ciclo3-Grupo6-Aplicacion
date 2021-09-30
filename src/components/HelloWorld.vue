<template>
  <div class="hello">
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
