<script>
import Header from '../components/Header.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import turnosService from '../services/turnosService';
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
  data() {
    return {
      date: null,
      medico: null,
      isOpen: false,
      title: 'Turno reservado con Exito!',
      message: '',
      submessage: '',
    };
  },
  methods: {
    // Método para enviar el formulario
    async onSubmit() {
      if (this.medico === null) {
        alert('Es obligatorio ingresar un medico');
        return;
      }
      if (this.date === null) {
        alert('Es obligatorio ingresar una fecha');
        return;
      }

      // Transformar la fecha a UNIX timestamp
      const date = Math.floor(new Date(this.date).getTime() / 1000);

      const elem = {
        date: date,
        medico: {
          name: this.medico,
        },
        user: {
          email: this.user.email,
        },
      };

      try {
        await turnosService.agregar(elem);
        this.message = 'Fecha: ' + this.date;
        this.submessage = 'medico: ' + this.medico;
        this.openModal();
      } catch (error) {
        console.log(error);
        alert('Ocurrió un error reservando el turno');
      }
    },
    // Método para abrir el modal
    openModal() {
      this.isOpen = true;
    },
    // Navegar a la vista de turnos
    goTurnos() {
      this.$router.push('/myTurns');
    },
    // Navegar a la vista de inicio
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

        <h3>RESERVA TU TURNO</h3>
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
            <VueDatePicker :min-date="new Date()" model-type="MM/dd/yyyy HH:mm" class="pickerDate" v-model="date"></VueDatePicker>

            <button type="submit" @click="visible = true" class="reservarBoton" >RESERVAR</button>
            
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