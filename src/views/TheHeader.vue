import { RouterLink} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
<template>
    <header>
        <router-link to="/coaches">
            <h1>Find a Coach</h1>
        </router-link>
        <div class="routes">
            <router-link to="/coaches"><button>All coaches</button> </router-link>
            <router-link to="/register"><button>Requests</button></router-link>
        </div>
    </header>
</template>
<script>
export default {

}
</script>
<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    background-color: rgba(21, 77, 127, 0.675);
    padding: 0 7%;
}

a {
    text-decoration: none;
}

h1 {
    color: black
}

button:hover {
    border: 1px solid rgba(0, 255, 179, 0.623);
    box-shadow: 0px 0px 10px 2px rgba(0, 255, 179, 0.623);
}



.routes {
    display: flex;
    justify-content: space-between;
    width: 250px;
}
</style>