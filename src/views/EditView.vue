<script>
import Header from '../components/Header.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import turnosService from '../services/turnosService';
import formatDate from '../utils/formatDate';
import { useLoginStore } from '../stores/login';
import { storeToRefs } from 'pinia';

export default {
  components: {
    Header,
    VueDatePicker,
  },
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);
    return { isLogin, user };
  },
  mounted() {
    this.cargarTurno();
  },
  data() {
    return {
      date: null,
      medico: null,
      isOpen: false,
      title: 'Turno modificado con Exito!',
      message: '',
      submessage: '',
    };
  },
  methods: {
    getId() {
      const currentURL = this.$route.fullPath;
      const id = currentURL.split('/').pop();
      return id;
    },
    async cargarTurno() {
      const id = this.getId();
      try {
        const turno = await turnosService.getById(id);
        const date = formatDate.getTotalDateReturnInUnix(turno.date);
        this.date = date;
        this.medico = turno.medico.name;
      } catch (error) {
        alert(error);
      }
    },
    async onSubmit() {
      if (!this.medico) {
        alert('Es obligatorio ingresar un medico');
        return;
      }
      if (!this.date) {
        alert('Es obligatorio ingresar una fecha');
        return;
      }

      // Transformar la fecha a UNIX timestamp
      const date = Math.floor(new Date(this.date).getTime() / 1000);
      const elem = {
        date: date,
        medico: { name: this.medico },
        user: { email: this.user.email },
      };

      const id = this.getId();

      try {
        await turnosService.modificar(id, elem);
        this.message = 'Fecha: ' + this.date;
        this.submessage = 'medico: ' + this.medico;
        this.openModal();
      } catch (error) {
        console.log(error);
        alert('Ocurrió un error reservando el turno');
      }
    },
    openModal() {
      this.isOpen = true;
    },
    goTurnos() {
      this.$router.push('/myTurns');
    },
    goHome() {
      this.$router.push('/home');
    },
  },
};
</script>


<template>
  
    <Header />
    <div class="container">
        <div class="background"></div>

        <h3>MODIFICAR TU TURNO</h3>
        <form v-on:submit.prevent="onSubmit">
            <label>Elegi tu medico</label>
            <select v-model="medico">
                <option value=""></option>
                <option value="Dr Strange - Brujo">Dr Strange</option>
                <option value="Dr Osvaldo La Port - Cirujano">Dr Osvaldo La Port</option>
                <option value="Dr Cormillot - Nutricionista">Dr Cormillot</option>
                <option value="Dr House - Traumatologo">Dr House</option>
            </select>
            
            <label>Elegi la fecha disponible</label>
            <VueDatePicker  :min-date="new Date()" model-type="MM/dd/yyyy HH:mm" class="pickerDate" v-model="date"></VueDatePicker>

            <button type="submit" @click="visible = true" class="reservarBoton" >MODIFICAR</button>
            
        </form>

        <div class="modal-overlay" v-show="isOpen">
            <div class="modal-container">
                <div class="modal-content">
                <h2 class="title">{{ title }}</h2>
                <p>{{ message }}</p>
                <p>{{ submessage }}</p>
                <div class="row">
                    <button class="turnos_button" @click="goTurnos">Ir a mis turnos</button>
                    <button class="home_button" @click="goHome">Ir al home</button>
                </div>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>

    .turnos_button {
        background-color: #4a8357;
    }

    .home_button {
        background-color: #2c7fa8;
    }

    .row button {
        margin-left: 10px;
        padding: 10px;
        border-radius: 20px;
        border: none;
        font-weight: bold;
        color: white;
    }

    .title {
        color: black;
    }

    .row button:hover {
        cursor: pointer;
    }

    .row {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    select {
        padding: 10px 5px;
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    label {
        color: white;
        margin-bottom: 10px;
    }

    h3 {
        color: white;
        font-size: 30px;
    }

    .reservarBoton {
        margin-top: 20px;
        padding: 20px 50px;
        border-radius: 25px;
        background-color: rgb(55, 54, 54) ;
        border: none;
        color: white;
        font-size: 25px;
        font-weight: bold;
        box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.9);
    }

    .reservarBoton:hover {
        cursor: pointer;
    }


    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://images.stockcake.com/public/7/e/b/7eb8f1e8-35a0-4ef1-a2bf-4f3d01119ec9_large/dental-clinic-interior-stockcake.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .container {
        height: calc(100vh - 150px);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-container {
        background-color: #fff;
        padding: 20px;
    }

    .modal-content {
        text-align: center;
    }


</style>

