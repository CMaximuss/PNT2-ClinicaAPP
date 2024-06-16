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

</script>

<template>
    <header>
        <h1 class="neon">Clinica Dr Strange</h1>

        <div id="sidemenu">
            <button class="sidemenu__btn" v-on:click="navOpen = !navOpen" v-bind:class="{ active: navOpen }">
                <span class="top"></span>
                <span class="mid"></span>
                <span class="bottom"></span>
            </button>
            <transition name="translateX">
                <nav v-show="navOpen">
                    <div class="sidemenu__wrapper">
                        <ul class="sidemenu__list">
                            <li @click="navigate('/home')" class="sidemenu__item"><a>Inicio</a></li>
                            <li @click="navigate('/booking')" v-if="isLogin" class="sidemenu__item"><a>Reservar</a></li>
                            <li @click="navigate('/myTurns')" v-if="isLogin" class="sidemenu__item"><a>Mis Turnos</a></li>
                            <li @click="navigate('/contactus')" class="sidemenu__item"><a>Contáctenos</a></li>
                            <li @click="navigate('/aboutus')" class="sidemenu__item"><a>Nosotros</a></li>
                            <li @click="logout()" v-if="isLogin" class="sidemenu__item"><a>Log Out</a></li>
                            <li @click="navigate('/')" v-if="!isLogin" class="sidemenu__item"><a>Login</a></li>
                        </ul>
                    </div>
                </nav>
            </transition>
        </div>


    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 100px;
    background-color: rgb(38, 38, 38);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
}

h1 {
    font-size: 3rem;
    font-weight: 200;
    font-style: italic;
    padding: 0px 20px;
    margin: 0;
    color: #fff;
    border: 0.4rem solid #fff;
    border-radius: 2rem;
    text-transform: uppercase;
    animation: flicker 1.5s infinite alternate;
    --neon-text-color: #ff0008;
    --neon-border-color: #ff0008;
    font-family: 'Tilt Neon', cursive;
}

ul li {
    cursor: pointer;
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

/* Animate neon flicker */
@keyframes flicker {

    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {

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

    20%,
    24%,
    55% {
        text-shadow: none;
        box-shadow: none;
    }
}

#sidemenu nav {
    width: 200px;
    background-color: rgb(38, 38, 38);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}

#sidemenu .sidemenu__btn {
    display: block;
    width: 50px;
    height: 50px;
    background: transparent;
    border: none;
    position: absolute;
    top:30px;
    left:30px;
    z-index: 100;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    outline: none;
}

#sidemenu .sidemenu__btn span {
    display: block;
    width: 20px;
    height: 2px;
    margin: auto;
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.4s ease;
}

#sidemenu .sidemenu__btn span.top {
    transform: translateY(-8px);
}

#sidemenu .sidemenu__btn span.bottom {
    transform: translateY(8px);
}

#sidemenu .sidemenu__btn.active .top {
    transform: rotate(-45deg);
}

#sidemenu .sidemenu__btn.active .mid {
    transform: translateX(-20px) rotate(360deg);
    opacity: 0;
}

#sidemenu .sidemenu__btn.active .bottom {
    transform: rotate(45deg);
}

#sidemenu .sidemenu__wrapper {
    padding-top: 100px;
}

#sidemenu .sidemenu__list {
    padding-top: 50px;
    list-style: none;
    padding: 0;
    margin: 0;
}

#sidemenu .sidemenu__item a {
    text-decoration: none;
    line-height: 1.6em;
    font-size: 1.2em;
    padding: 0.5em;
    display: block;
    color: white;
    transition: 0.4s ease;
    padding-left: 43px;
}

#sidemenu .sidemenu__item a:hover {
    background: lightgrey;
    color: dimgrey;
}

.translateX-enter {
    transform: translateX(0);
    opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
    transform-origin: top left 0;
    transition: 0.2s ease;
}

.translateX-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}

</style>