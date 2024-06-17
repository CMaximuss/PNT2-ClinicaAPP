<template>
    <div class="not-found">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <router-link to="/" class="back-link">Volver a la página principal</router-link>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  .not-found {
    text-align: center;
    margin-top: 100px;
  } 
  
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .back-link {
    color: blue;
  }
  
  </style>