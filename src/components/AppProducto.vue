<template>
  <div class="about">
    <div class="container" id="appCont">
        <div class="row">
        </div>
        <div class="row">
            <h3>{{ info.data.nombre }}</h3>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 ">
                <img :src="info.data.imagen" alt="" width="400">
            </div>
            <div  class="col-12 col-sm-6  col-md-8">
                <h6>{{ info.data.descripcion }}</h6>
                <div  class="p-3 mb-2 text-white" :style="precioEstilos">
                    Precio: {{ info.data.precio }} BOB
                </div>
                <h5>Color</h5>
                <div>
                    <div v-for="color in info.data.colores" class="color-box clic" :style="'background:'+color"></div>
                </div>
                <h5>Cantidad</h5>
                <div class="quantity">
                    <button v-on:click="num -= 1">-</button> <div id="num">{{ num }}</div> <button v-on:click="num += 1">+</button>
                </div>
                <div id="btnComprar" class="buy-box" v-if="num<=1">
                    <button type="button" v-on:click="comprar" class="btn btn-primary" disabled="true" >Comprar</button>
                </div>
                <div id="btnComprar" class="buy-box" v-else>
                    <button type="button" v-on:click="comprar(pedido)" class="btn btn-primary">Comprar</button>
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
 
        info:{ 
            data:{id:null,
                nombre: null,
            descripcion: null,
            imagen:null,
            precioEstilos:null,
            precio:null,
            colores: []
                  }},
      pedido:
            {
                id:null,
                cantidad: 1,
                color:null
            },
            num:1,
            nombre: "Dron LU3 MAX GPS 8K HD",
            descripcion: "Dron LU3 MAX GPS 8K HD profesional con <b>cámara Dual</b>,cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricóptero plegable",
            imagen:"https://ae01.alicdn.com/kf/Sc3cc58f2a441419f970cc01f9e5358fbw/Dron-LU3-MAX-GPS-8K-HD-profesional-con-c-mara-Dual-card-n-autoestabilizador-Motor-sin.jpg_Q90.jpg_.webp",
            precioEstilos:"background: orangered; color: white; font-weight: bold;",
            precio:"620",
            colores: ["red", "blue", "black", "yellow"]
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    comprar: function (event) {
                alert('id: '+event.id+' cantidad: '+event.cantidad+ ' color: '+event.color, )
            }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  mounted() {
    axios
     .get('http://127.0.0.1:3000/Productos')
     .then(response => (this.info = response))
  },
  components: {
  }
}
</script>
<style>
body {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    color: #444;
  }
  
  table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }
  
  th {
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  td {
    background-color: #f9f9f9;
  }
  
  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }
  
  th.active {
    color: #fff;
  }
  
  th.active .arrow {
    opacity: 1;
  }
  
  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }
  
  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }
  
  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }
  </style>
