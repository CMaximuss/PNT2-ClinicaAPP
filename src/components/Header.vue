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
        <span class="btn">Dr Strange</span>

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


ul li {
    cursor: pointer;
}

.btn{
cursor:pointer;
	position:relative;
	padding:10px 20px;
	background:white;
	font-size:28px;
	border-top-right-radius:10px;
	border-bottom-left-radius:10px;
	transition:all 1s;
	&:after,&:before{
		content:" ";
		width:10px;
		height:10px;
		position:absolute;
		border :0px solid #fff;
		transition:all 1s;
		}
	&:after{
		top:-1px;
		left:-1px;
		border-top:5px solid black;
		border-left:5px solid black;
	}
	&:before{
		bottom:-1px;
		right:-1px;
		border-bottom:5px solid black;
		border-right:5px solid black;
	}
	&:hover{
		border-top-right-radius:0px;
	border-bottom-left-radius:0px;
		 background:rgba(0,0,0,.5);
		 color:white;
		&:before,&:after{
			
			width:100%;
			height:100%;
			 border-color:white;
		}
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