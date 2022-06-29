<template>
  <div class="order">
        <div class="order1">
            <h3>填写要购买的商品:</h3>
            <table>
                <tr>
                    <td>商品后台编号</td>
                    <td><input type="text" v-model="userinfo.id"  placeholder="填写商品编号"></td>
                </tr>
                <tr>
                    <td>商品名称</td>
                    <td><input type="text" v-model="userinfo.name"  placeholder="填写商品名称"></td>
                </tr>
                <tr>
                    <td>商品价格</td>
                    <td><input type="text" v-model="userinfo.price"  placeholder="填写商品价格"></td>
                </tr>
                <tr>
                    <td>商品数量</td>
                    <td><input type="text" v-model="userinfo.count"  placeholder="填写商品数量"></td>
                </tr>
                <tr>
                    <td colspan="2" class="textRight"><input type="button" value="添加" @click="tianjia"></td>
                </tr>
            </table>
        </div>
        <br>
        <h3>购物车:</h3>
        <div v-if="good.length==0"><h3>购物车为空</h3></div>
        <div v-else>
            <table>
                <thead>
                    <td></td>
                    <td>商品名称</td>
                    <td>价格</td>
                    <td>购买数量</td>
                    <td>操作</td>
                </thead>
                <tbody >
                    <tr v-for="(item,index) in good" :key='index' >
                        <td>{{index+1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td><input type="button" style="width:20px" value="-" @click="reduce(index)">{{item.count}} <input type="button" value="+"  style="width:20px"  @click="add(index)"></td>
                        <td><input type="button" value="移除" @click="remove(index)"></td>
                    </tr>   
                </tbody>
                
            </table>
            <div>总价为:{{total}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
      return{
        userinfo:{
            id : '',
            name: '',
            price: '',
            count : ''
        },
        useradd:{
            id : '1',
            name: '空',
            price: 0,
            count : 1
        },
        good :[
        {
            id : 1,
            name: '米家冰箱无霜三门',
            price: 1599,
            count : 1,
             //同学们可以使用这个checked去控制某个商品的选择,
            checked : false
        },
        {
            id : 2,
            name: '弘一紫米夹心面包',
            price: 19.9,
            count : 1,
            checked : false
        },

        ]
    }},
    created() {
        console.log(this.$route.query);
        this.useradd.id=this.$route.query.id
        this.useradd.name=this.$route.query.info
        this.useradd.price=this.$route.query.price
        this.useradd.count=this.$route.query.count
        this.good.push(this.useradd)
    },

    methods:{
        add(index) {
            this.good[index].count++;
        },
        reduce(index){
            if (this.good[index].count <= 0) {
                return 
            }
            else{
                this.good[index].count--;
            }
        },
        remove(index) {
            this.good.splice(index,1)
        },
        tianjia() {
            console.log('hh')
            this.good.push(this.userinfo);
        }
    },
    computed: {
        total: function(){
            let totalprice = 0;
            for(let i=0;i<this.good.length;i++){
                let a = this.good[i];
                totalprice += a.price * a.count; 
            }
            return totalprice
        }
    },
}
</script>

<style scoped>
.order {
  height: 800px;
  width: 790px;
  margin-top: 20px;
  margin-left:40px;
  font-size: 16px;
}
.order1 table {
    border:  1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
}

    
th,td{
    padding : 8px 16px;
    border:1px solid #e9e9e9;
    text-align: center;
}

th {
    background-color: #f7f7f7;
    color : #5c6b77;
    font-weight: 600;
}

.bigFont {
    font-size: 20px;
    font-style: 600;
}

.mtop30{
    margin-top: 30px;
}

.mleft20 {
    margin-left: 20px;
}

.textRight{
    text-align: right;
}

</style>