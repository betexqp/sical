<template>
  <div class="about">
    <div class="container">
        <div class="row">
            <h4>Productos relacionados</h4>
        </div>
        <div class="row" id="appprod">
            <div class="col" v-for="lista in info.data">
                <div class=" card" style="width: 18rem;"  v-on:click="alerta(lista)">
                    <div class=" card-body" >
                        <h5 class="card-title">{{ lista.nombre }}</h5>
                        <img :src="lista.imagen" alt="" width="265">
                        <p class="card-text">{{ lista.descripcion }}</p>
                        <div class="producto-relacionado-precio">Precio:{{ lista.precio }} BOB</div>
                            <div>
                                <div v-for="color in lista.colores" class="color-box" :style="'background:'+color"></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
        info:{},
        productosRelacionados:[
        {
            id:2,
            imagen:"https://ae01.alicdn.com/kf/Hd59f72dd965d467dbbd499275a70b1d4z/Dron-plegable-KF102-con-Gps-8K-c-mara-Dual-HD-2-ejes-card-n-Motor-sin.jpg_Q90.jpg_.webp",
            nombre: "KF102",
            descripcion: "Dron plegable KF102 con Gps, 8K, cámara Dual HD, 2 ejes,cardán, Motor sin escobillas, fotografía aérea, 1200M de distancia, novedad de 2022",
            precio:"1180",
            colores: ["orange", "blue"]
        },
        {
            id:3,
            imagen:"https://ae01.alicdn.com/kf/S947d9284b5ea4531a1bec599a09a1f49K/KBDFA-Dron-E888-RC-cuadric-ptero-profesional-FPV-4K-HD-fotograf-a-a-rea-evitaci-n.jpg_Q90.jpg_.webp",
            nombre: "KBDFA-Dron E888 RC",
            descripcion: "KBDFA-Dron E888 RC, cuadricóptero profesional FPV, 4K HD,fotografía aérea, evitación de obstáculos, helicóptero, juguetes de distancia",
            precio:"154",
            colores: ["black", "midnightblue"]
        },
        {
            id:4,
            imagen:"https://ae01.alicdn.com/kf/S552326188797415ab6c729f850ab2639R/Dron-Profesional-4K-con-GPS-8K-c-mara-HD-3-ejes-card-n-antivibraci-n-evitaci.jpg_Q90.jpg_.webp",
            nombre: "Dron Profesional 4K con GPS",
            descripcion: "Dron Profesional 4K con GPS, 8K, cámara HD, 3 ejes, cardánantivibración, evitación de obstáculos, fotografía aérea, Quadcopter, nuevo",
            precio:"1800",
            colores: ["teal", "blue", "slategrey", "navy"]
        }]
    }
  },
  methods: {
    alerta:  function (event){
        alert("Estos son los datos de la targeta!! \n Nombre: " +event.nombre +"\n Descripcion: " +event.descripcion +"\n Precio: " +event.precio);
    }
  },
  computed: {
  },
  mounted() {
    axios
      .get('http://127.0.0.1:3000/ProductosRelacionados')
      .then(response => (this.info = response))
  },
  components: {
  }
}
</script>
