<template>
  <div class="goods-item-class">
    <div class="imgbox">
      <!-- <a :href="`#/detaile/${good.id}`" > -->
      <router-link :to="{name:'detaile',query:{ id:good.id, info:good.info, imgsrc:good.imgsrc, price:good.price}}">
        <img v-bind:src="good.imgsrc" />
        </router-link>
      <!-- </a>  -->
      </div>
    <div class="goods-info-class">
      <p>{{ good.info }}</p>
      <div style="color:#ff6700">价格：{{ good.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'good',
  props: {
    good: {
      type: Object,
      required: true,
    },
  },

};
</script>

<style>
.goods-item-class {
  float: left;
  background-color: white;
  margin: 5px;
  text-align: center;
}
.imgbox img {
  height: 210px;
  width: 210px;

}
</style>