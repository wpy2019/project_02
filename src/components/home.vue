<template>
  <div >
    <!-- 头部区域 -->
    
    <div class="w">
    <Search></Search></div>
    <!-- 轮播 -->
    <div class="lunbo w">
      <silde></silde></div>
      <!-- 产品 -->
      <div class="pro">
      <div class="product w">
        <div class="project_title" id="title1">家电区</div>
      <goodlist v-for="item in firstlist" :good="item" :key="item.id" style="margin-left: 5px"></goodlist>
    </div>
    <div class="product w">
      <div class="project_title" id="title2">手机区</div>
      <goodlist v-for="item in phonelist" :good="item" :key="item.id" style="margin-left: 5px"></goodlist>
    </div>
    <div class="product w">
          <div class="project_title" id="title3">食品区</div>
      <goodlist v-for="item in foodlist" :good="item" :key="item.id" style="margin-left: 5px"></goodlist>
    </div>
    <div class="product w">
          <div class="project_title" id="title4">服装区</div>
      <goodlist v-for="item in clothlist" :good="item" :key="item.id" style="margin-left: 5px"></goodlist>
    </div>
    </div>
    <!-- 页尾 -->
    <div class="w">
    <Footer></Footer></div>
    <div><tool></tool></div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from "./Header"
import Search from "./Search.vue"
import Silde from './silde.vue'
import goodlist from "./goodlist"
import Footer from "./Footer"
import tool from './tool.vue'

export default {
    components: {
    Header,
    Search,
    Silde,
    goodlist,
    Footer,
    tool

  },
      data : function(){
    return {
      user: 'wpy',
      phonelist: [],
      firstlist: [],
      foodlist: [],
      clothlist:[]
    }
  },
    created ()  {
        axios({
            method:'get',
            url:'/goodlist',
            // params:{
            //   id: 123
            // }
          }).then((response)=>{console.log(response);
            this.phonelist = response.data.phoneinfos;
            this.firstlist = response.data.productinfos;
            this.foodlist = response.data.foodinfos;
            this.clothlist = response.data.clothinfos;})
}
}
</script>

<style>

</style>