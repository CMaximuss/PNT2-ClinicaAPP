<template>
  <div>
    <Header />
    <div class="bg">
      <div class="row-contacto"> 
        <div class="left">
          <p class="title-contact">CONTACTECNOS</p>
          <ol>
            <li>Domicilio: Yatay 541 CABA</li>
            <li>Whatsapp: + 54 9 115 2568956</li>
          </ol>
        </div>

        <div class="right">
          <p class="title-contact">REDES SOCIALES</p>
          <ol>
            <li>Facebook: Dr Strange</li>
            <li>Instagram: @DrStrange_Oficial</li>
            <li>Twitter: @DrStrange_</li>
          </ol>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style>
.bg {
  background-image: url("https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/dr-strange-1.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /*opacity: 0.5; /* Opacidad de la imagen de fondo */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
}

.row-contacto {
  padding-top: 150px;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}