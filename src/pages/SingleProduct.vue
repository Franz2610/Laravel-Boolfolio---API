<template>
    <div v-if="project">

        <h1>Singolo Prodotto</h1>
         <h1>{{ project.name }}</h1>
        <img class="img-fluid" :src="project.image" alt="project.name">
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name : 'SingleProduct',
    data() {
        return{
            project: null,
            apiUrl: 'http://localhost:8000/api',
        }
    },
    methods:{

        getProduct(){
            axios.get(`${this.apiUrl}/projects/${this.$route.params.id}`).then((res)=>{
                console.log(res.data.results);
                if(res.data.success){
                    this.project = res.data.results;
                    console.log(res.data.results);
                } else{
                    this.$router.push({name : 'not found'})
                }
            })
        }
    },
    mounted(){
        // this.$router;
        // this.$route;
        this.getProduct();

    }

}
</script>

<style lang="scss" scoped>

</style>