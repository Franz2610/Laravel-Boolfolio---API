<template>
    <div class="container" id="product-list">
        <h1>{{ title }}</h1>
        <div class="row gy-4 mb-4">
            <ProductCard v-for="(project, index) in projects" :key="project.id" :project="project" />

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
  import ProductCard from '../components/ComponentCard.vue';
  
  export default {
    'name': 'ProductList',
    components:{
        ProductCard
    },
    data() {
      return {
        title: 'Projects List',
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