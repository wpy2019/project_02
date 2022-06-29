<template>
<!-- <div class="slide">
    <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in list" :key="item">
      <h3 class="medium"><img :src="item" ></h3>
    </el-carousel-item>
  </el-carousel>
  </div> -->
   <!--外层div通过ref获取高度-->
 <div class="M1container" >
       <el-carousel>
            <!-- 这里 -->
            <el-carousel-item v-for="item in list" :key="item">
                <h3><img :src="item" ></h3>
            </el-carousel-item>
  </el-carousel>
    </div>

</template>

<script>
export default {
data:function(){
    return {
        list:[
            'images/1.jpg',
            'images/2.jpg',
            'images/3.jpg',
            'images/4.jpg'
        ]
    }
},
        // :height="M1Height + 'px'"
        // :interval="2000"
    // mounted(){
    //     this.M1Height = this.$refs.M1c.clientHeight;
    // }

}
</script>

<style>
.M1container {
    width: 100%;
    float: right;
    margin-bottom: 30px;
}

h3 img{
    height: 460px;
    width: 1226px;
}
</style>