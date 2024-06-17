<script>
import Header from '../components/Header.vue';
import { useLoginStore } from '../stores/login';
import { storeToRefs } from 'pinia';

export default {
  components: {
    Header,
  },
  setup() {
    const store = useLoginStore();
    const { isLogin } = storeToRefs(store);
    return { isLogin };
  },
  methods: {
    // Método para navegar a la página de reserva
    goBooking() {
      if (this.isLogin) {
        this.$router.push('/booking');
      } else {
        this.$router.push('/');
      }
    },
  },
  mounted() {
    // Scroll suave al elemento con el id dinámico proporcionado en la ruta
    const dynamicId = this.$route.params.id;
    const element = document.getElementById(dynamicId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },
};
</script>