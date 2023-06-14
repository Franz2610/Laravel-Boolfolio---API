import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from './pages/HomePage.Vue';
import ProductList from './pages/ProductList.Vue';
import AboutUs from './pages/AboutUs.Vue';
import ContactUs from './pages/ContactUs.Vue';
import SingleProduct from './pages/SingleProduct.Vue';
import NotFound from './pages/NotFound.vue'

const router = createRouter(  {
    history : createWebHashHistory(),
    routes : [
        {
            path: '/',
            name : 'home',
            component : HomePage
        },
        {
            path: '/products',
            name : 'products',
            component : ProductList
        },        {
            path: '/about',
            name : 'about',
            component : AboutUs
        },       
        {
            path: '/contact',
            name : 'contact',
            component : ContactUs
        },
        {
            path: '/products/:id',
            name : 'single-product',
            component : SingleProduct
        },
        {
            path: '/:pathMatch(.*)*',
            name : 'not found',
            component : NotFound
        },
    ]

})

export{router};