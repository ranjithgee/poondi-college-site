<template>
  <div class="criteria_sec">
    <Header />
     <div class="citeria_content">
           <div class="tab_box">
              <div class="tab_item" v-for="(data, index) in datas.data" :key="data.id">
                <router-link class="item_menu" :class="activeTab === index ? 'active':''" :to="data.link"  @click="activeTab = index" ><span><i class="fas" :class="data.icon" ></i>{{data.name}}</span> <span class="chevron"><i class="fas fa-chevron-right"></i></span> </router-link> 
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
  beforeCreate(){
    if(!localStorage.getItem('user_token')){
      this.$router.push('/login')
    }
  },
  data(){
    return{
      datas:json,
      activeTab:0
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
  width: 27%;
  padding: 50px 25px;
  box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
  border-radius: 13px;
}
.tab_item{
  margin: 18px 0;
  font-size: 16px;
  font-weight: 700;
  color: white;
}
.tab_item a{
  padding: 12px 15px;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .3s ease-in-out;
}
.tab_item a i{
  margin-right: 10px;
}
.tab_item a.active{
  background: #0066cc;
  color: white;
}
.tab_item a:hover{
  transition: .3s ease-in-out;
}
.content_item{
  margin: 0 40px;
  padding: 10px 70px;
  width: 73%;
}
.chevron{
  color: white;
}
@media only screen and (min-width:300px) and (max-width:600px){
  .citeria_content{
    display: block;
    margin: 0;
  }
  .tab_box{
    width:85%;
    margin:20px auto;
    padding: 20px 15px;
  }
  .tab_item{
    font-size: 11px;
    margin:15px 0;
  }
  .content_item{
    width: 92%;
    margin: 40px auto;
    padding: 0;
  }
}
</style>
