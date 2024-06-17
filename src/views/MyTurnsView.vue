<template>
    <Header />
    <div class="container">
        <div class="background"></div>
        <h2>MIS TURNOS</h2>
        <div class="grid">
          <li v-for="turno in turnos" :key="turno.id">
            <div class="card">
              <p>Medico: {{ turno.medico.name }}</p> 
              <p>Fecha {{ 
                  formatearFecha(turno.date)
                }}</p>
              <p>Hora {{ 
                  formatearHora(turno.date)
                }}</p>
              <p @click="deleteTurno(turno.id)" class="close_button">Eliminar</p>
              <p @click="editar(turno.id)" class="edit_button">Editar</p>
            </div>
          </li>
        </div>
        
    </div>
  </template>
  
  <script>
  import turnosService from "../services/turnosService";
  import Header from "../components/Header.vue";
  import { useLoginStore } from '../stores/login';
  import { storeToRefs } from 'pinia';
  import formatDate from '../utils/formatDate';
  export default {
    setup(){
      const store = useLoginStore()
      const { user } = storeToRefs(store)
      const {havePermissions} = store
      return { user, havePermissions }
    },
    components: { Header },
    data() {
      return {
        turnos: [],
        elemento: {},
      };
    },
    mounted() {
      this.cargarLista();
    },
    methods: {
      async cargarLista() {
        try {
          if(this.havePermissions("admin")){
          this.turnos = await turnosService.cargar(this.user.email,"admin")}
          else{
            this.turnos = await turnosService.cargar(this.user.email,"user")
          }
        } catch (error) {
          alert(error);
        }
      },
      editar(idTurno){
        this.$router.push('/myTurns/' + idTurno)
      },
      async deleteTurno(idTurno){
        try {
          await turnosService.eliminar(idTurno);
          this.turnos = this.turnos.filter(x => x.id !== idTurno)
        } catch (error) {
          alert(error);
        }
      },
      formatearFecha(timestamp) {
        const date = formatDate.getTotalDateReturnInUnixWithoutHours(timestamp)
        return date;
      },
      formatearHora(date) {
        const dateToReturn = new Date(date * 1000);
        let hora = dateToReturn.getHours() + ":" + dateToReturn.getMinutes();
        return hora;
      },
    },
  };
  </script>
  
  <style>
  .grid {
    margin-top: 20px;
    overflow-y: scroll;
    margin-bottom: 20px;
  }
  
  .close_button {
    position: absolute;
    bottom: 57px;
    right: 17px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .edit_button {
    position: absolute;
    bottom: 17px;
    right: 17px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .grid::-webkit-scrollbar {
    width: 0.5em; /* Ancho de la barra de desplazamiento */
  }
  
  .grid::-webkit-scrollbar-track {
    background-color: transparent; /* Color de fondo de la pista */
  }
  
  .grid::-webkit-scrollbar-thumb {
    background-color: transparent; /* Color del pulgar (parte arrastrable) */
  }
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 20px 10px;
    margin-bottom: 20px;
    width: 300px;
    background-color: rgb(200, 200, 200);
    border-radius: 5px;
    box-shadow: 3px 3px 10px 2px #b3b3b3;
    position: relative;
  }
  
  p {
    padding: 0;
    margin: 5px;
  }
  
  h2 {
    margin: 0;
    padding: 0;
    font-size: 30px;
    color: rgb(3, 3, 3);
  }
  
  li {
    list-style-type: none;
  }
  
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://decosalud.com/wp-content/uploads/2019/12/Mostrador-CLINICA-DENTAL.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.8; /* Opacidad de la imagen de fondo */
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .container {
    width: 100%;
    display: flex;
    padding-top: 150px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: calc(100vh - 150px);
  }
  </style>
  