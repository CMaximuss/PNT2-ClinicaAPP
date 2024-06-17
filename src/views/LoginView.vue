<template>
  

    <div class="containerLogin">
      <div class="izquierda"></div>
      <div class="derecha">
  
          <h1 class="neon">Dr Strange</h1>
          <div class="formulario center">
              
              <form @submit.prevent="loguear" class="center" >
  
                  <label for="email">Correo</label>
                  <input type="text" v-model="usuario.email">
                  <label for="password">Contraseña</label>
                  <input type="password" v-model="usuario.password">
  
                  <button type="submit" @click="loguear" class="loginButton">Ingresar</button>
  
              </form>
  
  
          </div>
     </div>
  
    </div>
  </template>

  
<script>
import { useLoginStore } from "../stores/login";
import usersService from "../services/userService";

export default {
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  data() {
    return {
      usuario: { email: "", password: "" },
    };
  },
  methods: {
    async loguear() {
      try {
        const usersResponse = await usersService.cargar();
        const userLog = usersResponse.find(x => x.email === this.usuario.email);

        if (userLog) {
          if (this.usuario.password === userLog.password) {
            this.login({ email: userLog.email, permissions: userLog.permissions });
            this.$router.push("/myTurns");
          } else {
            alert("Credenciales incorrectas");
          }
        } else {
          alert("No se encontró ningún usuario con el correo electrónico proporcionado");
        }
      } catch (error) {
        console.error("Error al cargar los usuarios:", error);
        alert("Error de conexión al intentar iniciar sesión");
      }
    },
  },
};
</script>


<style scoped>

    .containerLogin{
        height: 100vh;
        width: 100vw;
        background-color: blue;
        display: flex;
    }


    .izquierda{
        background-color: black;
        display:flex;
        flex: 1;
        background-image: url("../../assets/Medico Login.png");
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat
    }

    .derecha{
        background-color: rgb(48, 48, 48);
        display:flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .formulario{

        padding: 40px;
        width: 50%;
        background-color: rgb(222, 219, 219);
        border-radius: 20px;
        box-shadow: 3px 3px 10px 2px #bb3034;
       
    }
    
    .center{
        display: flex;
        flex-direction: column;
        justify-content: center ;
        align-items:center;
        width: 60%;
    }

    label{
        margin: 5px
    }


    .loginButton{

        margin-top: 20px;
        padding: 10px 20px;
        border-radius: 15px;
        background-color: rgb(55, 54, 54) ;
        border: none;
        color: white;
        font-weight: bold;
        box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.9);

    }



    form input{
        border-radius: 10px;
        padding: 10px;
        border: none;
        background-color: rgb(195, 195, 195);
        width: 100%;
    }





 h1 {
  font-size: 5rem;
  font-weight: 200;
  font-style: italic;
  color: #fff;
  padding: 1rem 1rem 1rem 1rem;
  border: 0.4rem solid #fff;
  border-radius: 2rem;
  text-transform: uppercase;
  animation: flicker 1.5s infinite alternate;     
  --neon-text-color: #ff0008;
  --neon-border-color: #ff0008;
  font-family: 'Tilt Neon', cursive;
}

input:focus {
    outline: none !important;
    border:1px solid red;
    box-shadow: 0 0 10px #ff0008;
  }

h1::-moz-selection {
  background-color: var(--neon-border-color);
  color: var(--neon-text-color);
}

h1::selection {
  background-color: var(--neon-border-color);
  color: var(--neon-text-color);
}

h1:focus {
  outline: none;
}

@keyframes flicker {
    
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      
        text-shadow:
            -0.2rem -0.2rem 1rem #fff,
            0.2rem 0.2rem 1rem #fff,
            0 0 2rem var(--neon-text-color),
            0 0 4rem var(--neon-text-color),
            0 0 6rem var(--neon-text-color),
            0 0 8rem var(--neon-text-color),
            0 0 10rem var(--neon-text-color);
        
        box-shadow:
            0 0 .5rem #fff,
            inset 0 0 .5rem #fff,
            0 0 2rem var(--neon-border-color),
            inset 0 0 2rem var(--neon-border-color),
            0 0 4rem var(--neon-border-color),
            inset 0 0 4rem var(--neon-border-color);        
    }
    
    20%, 24%, 55% {        
        text-shadow: none;
        box-shadow: none;
    }    
} 

    
</style>
