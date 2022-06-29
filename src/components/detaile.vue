<template>
<div><Search></Search>
      <div class="detaile">
        <div class="title"><h2>商品详情</h2></div>
        <div class="im">
            <img :src="imgsrc">
        </div>
        <div class="pro">
            <h2>{{info}}</h2><br>
            <div style="color:#ff6700">价格：{{price}}</div>
            <div style="height:172px"></div>
            <button @click="add">加入购物车</button>
        </div>
    </div>
    </div>
</template>

<script>

import Search from './Search'
export default {
    name: 'detail',
    components: {
        Search
    },
    // props:['good'],
    data() {
        return {
            // id:this.$route.params.id,
            // goodlist:[],
            id:'',
            info:'',
            imgsrc:'',
            price:'',
            count:''
        }
    },
    created() {
        console.log('路由信息');
        console.log(this.$route);
        console.log(this.$route.params);
        console.log(this.$route.query);
        this.id = this.$route.query.id;
        this.info = this.$route.query.info;
        this.imgsrc = this.$route.query.imgsrc;
        this.price = this.$route.query.price
        
    },
    
    methods: {
        add() {
            this.$router.push({
                name:'order',
                query:{
                    id:this.id,
                    info:this.info,
                    price:this.price,
                    count:1
                }
            })

        }
    }
}
</script>

<style scoped>
    .detaile {
        background-color: #f5f5f5;
        position: fixed;
        width: 996px;
        height: 374px;
        left: 14%;
        top: 25%;
    }
    .title {
        margin-left: 14px;
        width: 996px;
        height: 30px;
    }
    .im {
        /* background-color: blue; */
        float: left;
        height: 280px;
        width: 280px;
        margin: 14px;
        border-style: groove;
        border-width: 3px;
        
    } 
    .im img {
        height: 280px;
        width: 280px;
    }
    .pro {
        width: 350px;
        height: 280px;
        /* background-color: blueviolet; */
        float: left;
        margin: 14px;
    }   
    button {
        padding:10px;
        cursor:pointer;
        border:1px solid black;
        border-radius:4px;
        background-color: rgb(231, 229, 224);
    }  
</style>