<template>
  <div class="criteria_sec">
    <Header />
     <div class="citeria_content">      
           <div class="tab_box">
             <div class="close_icon" @click="MenuBar" ><i class="fas fa-arrow-left"></i></div>
             <div class="logout">
               <button @click="Logout">Logout <i class="fas fa-sign-out-alt"></i></button>
             </div>
              <div class="tab_item" v-for="(data, index) in datas.data" :key="data.id">
                <router-link class="item_menu" :class="activeTab === index ? 'active ':''" :to="data.link"  @click="activeTab = index, this.MenuBar()" ><span><i class="fas" :class="data.icon" ></i>{{data.name}}</span> <span class="chevron"><i class="fas fa-chevron-right"></i></span> </router-link> 
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
    }else{
      this.$router.push('/curricular_aspects')
    }
  },
  data(){
    return{
      datas:json,
      activeTab:0
    }
  },
  methods:{
    MenuBar(){
      if(window.innerWidth < 600){
        var modal = document.querySelector('.tab_box');
        modal.style.display='none';
      }
    },
    Logout(){
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.logout{
  margin:30px 0 50px 0;
}
.logout button{
  padding: 8px 30px;
  border:none;
  outline:none;
  display: flex;
  align-items: center;
  background: #0066cc;
  color: white;
  cursor: pointer;
  border-radius: 3px;
}
.logout button i{
  margin-left: 5px;
  margin-top: 3px;
}
.logout button:hover{
  opacity: 0.9;
}
.breadcrums{
  font-weight: bold;
  font-size: 18px;
}
.breadcrums span{
  cursor: pointer;
}
.citeria_content{
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.tab_box{
  box-shadow: 0 2px 10px 4px rgb(0 0 0/10%);
  height: 79.4vh;
  width: 22%;
  padding: 0px 15px 50px 15px;
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
  background: #0066cc;
  color: white;
  transition: .3s ease-in-out;
}
.content_item{
  width: 78%;
  height: 79.4vh;
  overflow: hidden;
  overflow-y: scroll ;
}
.content_item::-webkit-scrollbar {
  display: none;
}
.chevron{
  color: white;
}
.close_icon{
    font-size: 20px;
    padding-left: 3px;
    margin-bottom: 25px;
    display: none;
}
@keyframes fadeDown {
    from{
        opacity: 0;
        transform: translate3d(0,-100%,0);
    }
    to{
        opacity: 1;
        transform: none;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
  .logout{
    margin:40px 0 40px 0;
  }
  .logout button{
    padding: 6px 20px;
  }
  .citeria_content{
    display: block;
    margin: 0;
  }
  .tab_box{
    width:93%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    padding: 20px 15px;
    display: none;
    animation: fadeDown .5s;
  }
  .tab_item{
    font-size: 11px;
    margin:15px 0;
  }
  .content_item{
    width: 96%;
    margin: 40px auto;
    padding: 0;
  }
  .close_icon{
    display: block;
  }
}
</style>
