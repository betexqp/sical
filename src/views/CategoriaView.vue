<template>
    <h5>Buscador de Categoria</h5>
<form action="">
<div class="input-group mb-3">
    <input type="text" v-model="textoABuscar" class="form-control" placeholder="Buscar Material" >
    <button class="btn btn-outline-secondary" @click.prevent="getMaterial()">Buscar</button>
</div>
</form> 
<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
        :checked="getMaterial()" v-on:input="$store.state.soloTerminado = $event.target.checked">
    <label class="form-check-label" for="flexSwitchCheckChecked">Mostrar solo precio mayo a 100</label>
</div>
<div class="accordion" id="accordionExample">

<div class="accordion-item" v-for="(value, index) in lista">
<h2 class="accordion-header" id="headingTwo">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
    :data-bs-target="`#collapseTwo${index}`" aria-expanded="false"
    :aria-controls="`collapseTwo${index}`">
    <input type="checkbox" :checked="value.precio"
        @click="setearCheckbox(value.precio, value.id)">
    {{value.nombre}}
</button>
</h2>
<div :id="`collapseTwo${index}`" class="accordion-collapse collapse" aria-labelledby="headingTwo"
data-bs-parent="#accordionExample">
<div class="accordion-body">
    {{value.descripcion}}

    <app-acciones @onAccion="irA($event, value.id)"></app-acciones>

</div>
</div>
</div>

</div>
<div>
<h1>Categoria</h1>
<table border="1">
<thead>
<th>Id</th>
<th>Nombre</th>
<th>DESCRIPCION</th>
<th>PRECIO</th>
<th>DISTRIBUIDORA</th>
</thead>
<tr v-for="data in info ">
<td>{{data.id}}</td>
<td>{{data.nombre}}</td>
<td>{{data.descripcion}}</td>
<td>{{data.precio}}</td>
<td>{{data.distribuidora}}</td>
</tr>
</table>
<br>
<form @submit.prevent="agregarMaterial()">
    <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="tarea.nombre" placeholder="Nombre Material"
        aria-describedby="button-addon2">
        <input type="text" class="form-control" v-model="tarea.descripcion" placeholder="Descripcion Material"
        aria-describedby="button-addon2">
        <input type="text" class="form-control" v-model="tarea.precio" placeholder="Precio Material"
        aria-describedby="button-addon2">
        <input type="text" class="form-control" v-model="tarea.distribuidora" placeholder="Distribuidora Material"
        aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="submit">Agregar Material</button>
    </div>
</form>






</div>
</template>

<script>
import AppAcciones from '@/components/AppAcciones.vue';
export default {
name: 'tareaView',
data() {
return {
    info:{ 
    data:{id:null,
        nombre: null,
    descripcion: null,
    imagen:null,
    distribuidora:null,
    precio:null
          }},
    soloTeminado: false,
    textoABuscar: '',
    tarea: {
        titulo: null,
        contenido: null,
        terminado: false
    },
    material: {
        nombre: null,
        descripcion: null,
        precio: null,
        distribuidora: null
    },
    tareas: []
}
},
methods: {
agregarMaterial() {
    axios({
        method: "post",
        url: process.env.VUE_APP_RUTA_API+"/material",
        data: this.tarea
    })
        .then(response => {
            console.log(response);
            this.info.nombre = null;
            
            this.getMaterial();
        })
        .catch(e => console.log(e));
},

getMaterial() {
    axios({
        method: "get",
        url: process.env.VUE_APP_RUTA_API+"/material/?q="+this.textoABuscar

   })
        .then(response => {
            this.info = response.data;
       //     console.log(response);
        })
        .catch(e => console.log(e));
},
setearCheckbox(precio, id) {
    axios({
        method: "patch",
        url: process.env.VUE_APP_RUTA_API+"/tareas/" + id,
        data: {
            precio: !precio
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(e => console.log(e));
},
irA(opcion, material_id) {
    if (opcion === 'editar') {
        this.$router.push({ name: 'editarTarea', params: { id: material_id } });
    } else {
        if (confirm("Esta seguro de eliminar el material")) {
            axios({
                method: "delete",
                url: process.env.VUE_APP_RUTA_API+"/material/" + material_id
            })
                .then(response => {
                    this.getMaterial();
                    console.log(response);
                })
                .catch(e => console.log(e));
        }
    }
},
lista_(){
    
    if(this.$store.state.soloTerminado){
        return this.info.filter(item =>{
            return item.precio;
        });
    }
    return this.info;
}
},
computed: {
lista(){
    if(this.$store.state.soloTerminado){
        return this.material.filter(item =>{
            return item.precio;
        });
    }
    return this.info;
}
},
mounted() {
this.getMaterial()
   
axios
.get(process.env.VUE_APP_RUTA_API+"/material")
.then(response => (this.info = response.data))
},
components: {
AppAcciones
}
}
</script>

<style>
.color-box {
width: 40px;
height: 40px;
border-radius: 50%;
margin: 7px;
display: inline-block;
}

.clic{
cursor: pointer;
}

.quantity button{
border-radius: 50%;
display: inline-block;
width: 30px;
}
.quantity div{
text-align: center;
min-width: 30px;
display: inline-block;
font-weight: bold;
}
.buy-box{
margin: 20px;
}
footer {

text-align: center;
padding: 30px 10px;
margin-top: 50px;
min-height: 100px;
}
.container{
margin-top: 50px;
}
.producto-relacionado-precio{
background: orangered;
color: white;
text-align: center;
padding: 10px; 
}
</style>