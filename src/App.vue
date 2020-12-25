<template>
    <div id="app">
        <ProductListOne />
        <ProductListTwo />
    </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
    name: 'App',

    components: { ProductListOne, ProductListTwo },

    data() {
        return {

        }
    }
}
</script>

<style>
body {
    color: #555;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
</style>
