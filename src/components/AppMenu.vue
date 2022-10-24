<template>
  <nav id="app" class="navbar navbar-expand-lg " :style="menuColor">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{marca}}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="color">
                    <li class="nav-item" v-for="item in menus">
                        <a class="nav-link" aria-current="page" :href="item.url">{{ item.etiqueta }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
       
        name: 'appMenu',
        data(){
            return {
        marca: 'ALMACENES',
        menuColor:"background-color:lightblue",  
        menus: [{
            etiqueta: "CATEGORIA",
            url: "categoria"
            },
            {
            etiqueta: "MATERIAL",
            url: "material"
        }],
              mode:null
            }
        },
        props:["titulo"],
        methods: {
        },
        computed: {
        },
        mounted(){
          this.mode = process.env.VUE_APP_MODE
        },
        components: {
        }
    }
</script>

<style>

</style>