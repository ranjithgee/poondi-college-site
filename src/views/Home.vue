<template>
  <div class="criteria_sec">
    <Header />
     <div class="citeria_content">
           <div class="tab_box">
              <div class="tab_item" v-for="data in datas.data" :key="data.id">
                <router-link :to="data.link">{{data.name}}</router-link> 
              </div>
          </div>
          <div class="content_item">
             <router-view/>
          </div>
     </div>
  </div>
</template>

<script>
import Header from '../components/header/Header.vue'
import json from '../JSON/mock.json'
export default {
  components:{
    Header
  },
  data(){
    return{
      datas:json
    }
  }
}
</script>

<style scoped>
/* .criteria_sec{
  margin: 80px 0;
} */
.citeria_content{
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.tab_box{
  margin-top:40px;
  width: 25%;
  padding: 20px;
}
.tab_item{
  margin: 13px 0;
  font-size: 18px;
  font-weight: 700;
  background: #0066cc;
  color: white;
}
.tab_item a{
  padding: 10px;
  color: white;
  text-decoration: none;
  width: 100%;
  display: block;
}
.content_item{
  margin: 0 40px;
  padding: 10px 70px;
  width: 75%;
}
</style>
