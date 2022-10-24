<template>
  <footer id="appnavfoot" :style="footerColor">
        <div class="text-white" style="background-color: teal" >Integrantes: {{ integrantes }}</div>
    </footer>
</template>

<script>
    export default {
       
        name: 'appMenu',
        data(){
            return {
                footerColor:"background-color: slategrey",
            integrantes:"Stephanie Luna Quevedo, Luis Alberto Quispe Pinto"
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