<template>
    <div class="container" id="product-list">
  
      <div class="row gy-4 mb-4">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(project, index) in projects" :key="project.id">
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
              </div>
              
  
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
              @click="getData(currentPage - 1)">Previous</button></li>
          <li class="page-item" v-for="n in lastPage"><button :class="{ 'page-link': true, 'active': currentPage === n }"
              @click="getData(n)">{{ n }}</button>
          </li>
  
          <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 4 }"
              @click="getData(currentPage + 1)">Next</button></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    'name': 'ProdutList',
    data() {
      return {
        projects: [],
        apiUrl: 'http://localhost:8000/api',
        currentPage: 1,
        lastPage: null,
      }
    },
    methods: {
      getData(numPage) {
        axios.get(`${this.apiUrl}/projects`, {
          params: {
            'page': numPage
          }
        }).then((res) => {
          console.log(res.data.results);
          this.projects = res.data.results;
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
        })
      }
    },
    mounted() {
      this.getData(1);
    }
  }
  </script>
  
  <style lang="scss" scoped></style>