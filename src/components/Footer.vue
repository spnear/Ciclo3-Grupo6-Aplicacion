<template>
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <!-- Footer Location-->
                <div class="col-sm-6 col-md-3 item">
                    <h3>Contact Us</h3>
                    <ul>
                        <p><i class="fa fa-mobile"></i>  +57-0000000000  </p>
                        <p><i class="fa fa-phone"></i>  +57-0000000000  </p>
                        <p><i class="fa fa fa-envelope"></i> info@wolkenair.com  </p>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                    <h3>Company</h3>
                    <ul>
                        <li><router-link to="/about" class="text-white" >About</router-link></li>
                        <li><router-link to="/team" class="text-white" >Team</router-link></li>
                        <li><router-link to="/routes" class="text-white" >Routes</router-link></li>
                    </ul>
                </div>
                
                    <div class="col-md-6 item text">
                        <h4 class="text-footer">WOLKENAIR,
                            <h6 class="small text-footer">Making dreams come true</h6>
                        </h4>
                    </div>
                        
                
               
            <!-- Footer Social Icons-->
                <div class="text-center margen1">
                    <a class="btn btn-outline-light" href="#!">
                        <font-awesome-icon :icon="['fab', 'facebook']" size="2x"/>
                    </a>
                    <a class="btn btn-outline-light" href="#!">
                        <font-awesome-icon :icon="['fab', 'twitter']" size="2x"/>
                    </a>
                    <a class="btn btn-outline-light" href="#!">
                        <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
                    </a>
                    <a class="btn btn-outline-light" href="#!">
                        <font-awesome-icon :icon="['fab', 'youtube']" size="2x"/>
                    </a>
                    <a class="btn btn-outline-light" href="#!">
                        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
                    </a>
                </div>
                <div class="text-center margen1">
                    <a><small>Copyright &copy; Your Website 2021</small></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="css">

</style>