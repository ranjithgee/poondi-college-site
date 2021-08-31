<template>
  <div class="criteria_sec">
    <Header />
     <div class="citeria_content">
           <div class="tab_box">
              <div class="tab_item" v-for="data in datas.data" :key="data.id">
                <router-link exact-active-class="active" :to="data.link">{{data.name}}</router-link> 
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
      datas:json,
    }
  }
}
</script>

<style scoped>
.citeria_content{
  margin: 50px 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.tab_box{
  margin-top:40px;
  margin:40px 20px 0 20px;
  width: 25%;
  padding: 50px 35px;
  box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
  border-radius: 13px;
}
.tab_item{
  margin: 18px 0;
  font-size: 16px;
  font-weight: 700;
  background: #0066cc;
  color: white;
}
.tab_item a{
  padding: 12px 15px;
  color: white;
  text-decoration: none;
  width: 100%;
  display: block;
  transition: .3s ease-in-out;
}
.tab_item a.active{
  color: black;
}
.tab_item a:hover{
  color: black;
  transition: .3s ease-in-out;
}
.content_item{
  margin: 0 40px;
  padding: 10px 70px;
  width: 75%;
}
</style>
