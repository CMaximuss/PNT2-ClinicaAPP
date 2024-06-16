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

  