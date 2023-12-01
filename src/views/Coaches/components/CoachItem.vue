<template lang="">
    <div class="coachItem">
        <h2>{{name}}</h2>
        <h4>{{`Cost: $ ${price} /hour`}}</h4>
        <ul>
            <li v-for="tg in tag" :key="id+tg"><p :class="[tg]">{{tg}}</p></li>
        </ul>
        <div class="buttons">
            <router-link :to="route"><button>Contact</button></router-link>
            <!-- <router-link><button></button></router-link> -->
        </div>
    </div>
</template>
<script>

export default {
    props: ['id', 'name', 'price', 'tag'],
    computed: {
        route() {
            return '/contact/' + this.id
        }
    },
    methods: {

    },
}
</script>
<style scoped>
.coachItem {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgb(57, 57, 57);
    height: 220px;
    color: white;
    border-radius: 5px;
    padding: 20px;
}

ul {
    display: flex;
    justify-content: start;
    list-style-type: none;
    text-align: start;
}

p {
    margin: 10px;
    border-radius: 5px;
    padding: 5px;
    text-transform: capitalize;
}

h4 {
    color: rgb(255, 224, 184);
}



button:hover {
    border: 1px solid rgba(0, 94, 255, 0.623);
    box-shadow: 0px 0px 10px 2px rgba(0, 94, 255, 0.623);
}

button {
    border: 1px solid rgba(0, 94, 255, 0.623);
}

.buttons {
    display: flex;
    justify-content: flex-end;
}
</style>