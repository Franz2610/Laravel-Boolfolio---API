<template>
    <div>
        <div class="row gy-4 mb-4">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card">
            <div class="card-title">
              <h3>{{ project.name }}</h3>
            </div>
            <div class="card-body d-flex justify-content-between align-items-end">
              <div>
                <!-- <h6>{{ project.typemodel.name }}</h6> -->
                <div v-if="project.typemodel.name === 'Html'"> Html</div>
                <div v-else-if="project.typemodel.name === 'Css'"> Css</div>
                <div v-else-if="project.typemodel.name === 'Bootstrap'"> Bootstrap</div>
                <div v-else-if="project.typemodel.name === 'Vue'"> Vue</div>
                <div v-else-if="project.typemodel.name === 'Vite'"> Vite</div>
                <div v-else-if="project.typemodel.name === 'Js'"> Js</div>
                <div v-else-if="project.typemodel.name === 'Php'"> Php</div>
                <div v-else-if="project.typemodel.name === 'Laravel'"> Laravel</div>
                <div v-else-if="project.typemodel.name === 'Sass'"> Sass</div>
                <div v-else>Not a model</div>

                
                <img class="img-fluid" :src="project.image" alt="project.name">

                <!-- <p>{{ project.bodytext }}</p> -->
        <!-- <p>
        
            <router-link :to="{name: 'single-product', params:{slug: project.slug}}" class="btn btn-primary">
                Vedi Prodotto
            </router-link>
         </p> -->
         <p>
            <router-link :to="{name: 'single-product', params:{id:project.id}}" class="btn btn-primary">
                Informazioni
            </router-link>
         </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
        props: ['project'],
    }
</script>

<style lang="scss" scoped>

</style>