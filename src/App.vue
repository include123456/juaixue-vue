<template>
    <div id="app">
        <search-title></search-title>
        <index-detail></index-detail>
       <!-- <div id="nav">
            <router-link to="/">HelloWorld</router-link>
            |
            <router-link to="/user">user</router-link>
            <router-view/>
        </div>-->
    </div>
</template>
<script>
    import SearchTitle from "./components/SearchTitle";
    import IndexDetail from "./components/indexDetail";
    export default {
        components: {IndexDetail, SearchTitle},
        comment:{
            Search:SearchTitle
        },
        name: 'app'
    }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
