<script>
import { storeToRefs } from 'pinia';
import { useLoginStore } from '../stores/login';

export default{
    setup(){
        const { logout } = useLoginStore(); 
        const store = useLoginStore()
        const { isLogin } = storeToRefs(store)
        return { isLogin: isLogin.value, logout }
    },
    methods: {
        navigate(value){
            this.$router.push(value)
        },
        logout(){
            this.logout()
            this.isLogin = false;
            this.$router.push('/home')
        }
    },
    data() {
        return {
            navOpen: false
        };
    }
};
