
<template>
    <div>
        <Header />
        <div class="containerAbout">
            <h4>NOSOTROS</h4>
            <div class="containerText">
                <div class="row">
                    <p>
                        Nuestra clínica se dedica a brindar atención médica de alta calidad y personalizada a cada uno de nuestros pacientes. Contamos con un equipo de profesionales de la salud altamente capacitados y comprometidos con el bienestar de la comunidad. 
                        <br /><br />
                        Ofrecemos una amplia gama de servicios, incluyendo consultas generales, especialidades médicas, servicios de laboratorio y atención de urgencias.
                    </p>
                    <img class="ml" src="https://www.corachan.com/images/102151/blog_entry.jpeg" />
                </div>

                <div class="row">
                    <img class="mr" src="https://agendapro.com/web_assets/img/Salud_2_Clinicas.webp" />
                    <p>
                        Nos enorgullece mantener un ambiente acogedor y seguro, donde cada paciente es tratado con respeto y empatía.
                        <br /><br />
                        Nuestra clínica fue fundada en 1998 con la visión de proporcionar atención médica accesible y de alta calidad a nuestra comunidad.
                    </p>
                </div>

                <div class="row">
                    <p>
                        Lo que comenzó como una pequeña consulta se ha convertido en un centro médico integral, gracias al compromiso y la dedicación de nuestros fundadores y personal.
                        <br /><br />
                        Desde nuestros inicios, nos hemos esforzado por mantenernos a la vanguardia de la medicina, incorporando las últimas tecnologías y prácticas innovadoras en nuestro servicio. A lo largo de los años, hemos ampliado nuestras instalaciones y servicios para incluir múltiples especialidades, laboratorios de diagnóstico avanzado y una unidad de atención de urgencias.
                    </p>
                    <img class="ml" src="https://i.pinimg.com/236x/c0/2e/25/c02e25d5194f37f39d26b9aae2a20889.jpg" />
                </div>

                <div class="row">
                    <img class="mr" src="https://images.stockcake.com/public/a/4/2/a42a26f9-28cb-4be0-9b0a-883f9667c806_large/dental-clinic-interior-stockcake.jpg" />
                    <p>
                        Nuestro crecimiento ha sido posible gracias a la confianza y apoyo de nuestros pacientes, quienes nos han elegido para cuidar de su salud y la de sus familias. A lo largo de nuestra historia, hemos mantenido nuestro compromiso con la excelencia, la empatía y el respeto, valores que siguen guiando nuestra misión hoy en día.
                        <br /><br />
                        Esperamos poder brindar una atencion correcta y cuidarte. ¡Visítanos en nuestra clininca Dr Strange!
                    </p>
                </div>
                
            </div>
            
        </div>
        <Footer />
    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    components: { Header, Footer },
}
</script>

<style>

    .containerAbout h4 {
        color: black;
        font-size: 2em;
    }

    .row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }

    .mr {
        margin-right: 40px;
    }

    .ml {
        margin-left: 40px;
    }

    .row p, .row img {
        flex: 1;
    }

    .row img {
        width: 200px;
        height: 250px;
        border-radius: 30px;
    }

    .containerAbout {
        padding-top: 120px;
        width: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-bottom: 30px;
    }

    .containerText {
        width: 80%;
    }

    .containerText p {
        color: black;
        text-align: justify;
    }

</style>