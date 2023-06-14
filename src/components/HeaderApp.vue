<template>
    <div>
        <header class="">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">This in MyP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     <li class="nav-item" v-for="(link,index) in menu" :key="index">
        <router-link :to="{ name: link.routeName }" class="nav-link">
             {{ link.label }}
        </router-link>
    </li>
    </ul>
  </div>
</nav>
        </header>
    </div>
</template>

<script>
    export default {
        name : ' HeaderApp',
        data() {
            return {
                menu: [
                    {
                        label: 'Home',
                        routeName : 'home'
                    },
                    {
                        label: 'Products',
                        routeName : 'products'
                    },
                    {
                        label: 'About Us',
                        routeName : 'about'
                    },
                    {
                        label: 'Contacts',
                        routeName : 'contact'
                    },

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>