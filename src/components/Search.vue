<template>
  <div>
      <div class="header1 w">
            <div class="header-logo">
                <a href="#"><img src="../../public/images/mao.jpg" alt="**商城" title="**商城"></a>
            </div>
            <div class="nothing"></div>
            <div class="header-nav">
                <ul>
                    <li><a href="#title1">家电</a></li>
                    <li><a href="#title2">手机</a></li>
                    <li><a href="#title3">食品</a></li>
                    <li><a href="#title4">服装</a></li>
                </ul>
            </div>
            <div class="header-search">
                
                <input style="width: 400px;height:40px;" type="search" name="search" id="search" placeholder="请输入商品名称">
                
                <el-button type="primary" round>搜索</el-button>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nothing {
    height: 70px;
    width: 200px;
    float: left;
    background-image: url("../../public/images/4.jpg");
}
.header1 {
    height: 100px;
}

.header-logo img {
    height: 50px;
    width: 50px;
    padding: 10px;
    float: left;
}
.header-nav li {
    float: left;
    height: 50px;
    text-align: center;
    padding-top: 30px;
    padding-left: 30px;
}
.header-nav li a:hover {
    color: skyblue;
}
.header-search {
    float: right;
    height: 80px;
    padding-top: 20px;
    padding-left: 10px;
}
.header-search el-button {
    
    width: 120px;
}
</style>