<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg bg-navbar text-uppercase fixed-top" id="mainNav">
        <div class="container">
            <picture class="picture-logo">
                <img class="img-logo" src="../assets/img/logoapp/Logosinfondo-WolkenAir.png" href="#page-top" alt="Logo aerolínea WolkenAir"/>
            </picture>
            <!--<a class="navbar-brand" href="#page-top">WOLKENAIR</a>-->
            <button class="navbar-toggler text-uppercase font-weight-bold border-menu text-white rounded" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-0 mx-lg-1">
                        <router-link to="/">Home</router-link> |
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <router-link to="/about">About</router-link> |
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <router-link to="/routes">Routes</router-link> |
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <router-link to="/bookings">Bookings</router-link> |
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <router-link to="/contact">Contact</router-link> |
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <router-link to="/team">Team</router-link> |
                    </li>
                    <li class="nav-item mx-0 mx-lg-1">
                        <router-link to="/pqrs">PQRS</router-link> |
                    </li>
                


                    <router-link to="/login">Login</router-link> |
                    <router-link to="/register">Register</router-link> |
                    <router-link to="/forgot">Forgot Password</router-link>
                         
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="css">

</style>