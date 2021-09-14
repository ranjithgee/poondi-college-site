<template>
<section class="dashboard">
  <div class="criteria_sec">
    <Header />
     <div class="citeria_content">      
           <div class="tab_box">
             <div class="close_icon" @click="MenuBar" ><i class="fas fa-arrow-left"></i></div>
              <div class="tab_heading">
                <span> CRITERION WISE REPORT</span>
                <hr/>
              </div>
              <div class="tab_item" v-for="(data) in datas.data" :key="data.id">
                <router-link class="item_menu" :class="$route.params.id == data.route_name ? 'active ':''" :to="data.link"  @click="this.MenuBar()" ><span><i class="fas" :class="data.icon" style="min-width:17.5px;" ></i> <span class="hash">{{data.hash}}</span> {{data.name}}</span> <span class="chevron"><i class="fas fa-chevron-right chev"></i></span> </router-link> 
              </div>
              <div class="logout">
               <button @click="Logout">Logout <i class="fas fa-sign-out-alt"></i></button>
             </div>
          </div>
          <div class="content_item">
             <router-view/>
          </div>
     </div>
  </div>
</section>
</template>

<script>
import Header from '../components/header/Header.vue'
import axios from 'axios'
export default {
  components:{
    Header
  },
  beforeCreate(){
    if(!localStorage.getItem('user_token')){
      this.$router.push('/login')
    }
    if(this.$route.path == '/'){
      this.$router.push('/curricular_aspects')
    }
  },
  mounted(){
    this.Get()
  },
  data(){
    return{
      datas:this.$store.state.data,
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
    },
    Get(){
      axios.get(this.$store.state.baseUrl + 'datas.json').then((r)=>{
        console.log(r)
      }).catch((e)=>{
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
.dashboard{
  height: 100vh;
  overflow: hidden;
}
.tab_heading{
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-bottom: 40px;
}
.tab_heading span{
  padding: 0 10px;
}
.tab_heading hr{
  margin-top: 6px;
}
.logout{
  margin:50px 0 50px 0;
  /* display: flex;
  justify-content: flex-end; */
}
.logout button{
  padding: 8px 30px;
  border:none;
  outline:none;
  display: flex;
  align-items: center;
  background: white;
  font-weight: bold;
  font-size: 16px;
  color: black;
  cursor: pointer;
  border-radius: 3px;
  font-family: 'Urbanist', sans-serif;
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
  background-color:#00478f;
  height: 79.4vh;
  width: 24%;
  padding: 40px 15px 0px 15px;
  transition: .3s ease-in-out;
}
.tab_box.menu_close{
  transition: .3s ease-in-out;

}

.tab_item{
  margin: 15px 0;
  font-size: 16px;
  font-weight: 700;
  color: white;
}
.tab_item a{
  padding: 12px 15px;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0066cc;
  transition: .3s ease-in-out;
  border-radius: 30px;
  background: linear-gradient(to left, #00478f 50%, white 50%) right;
  background-size: 201%;
}
.tab_item .hash{
  margin-right: 10px;
}
.tab_item a i{
  margin-right: 10px;
}
.tab_item a .chev{
  color: #00478f;
}
.tab_item a.active{
  background: white;
  color: black;
}
.tab_item a:hover{
   background-position: left;
   color: black;
}
.content_item{
  width: 76%;
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
@media only screen and (min-width: 1270px) and (max-width: 1366px){
  .tab_item{
    font-size: 9px;
  }
  .logout button{
    font-size: 10px;
    padding: 6px 18px;
  }
  .logout button i{
    margin-left: 5px;
    margin-top: 1px;
  }
}

@media only screen and (min-width: 1367px) and (max-width: 1600px){
  .tab_item{
    font-size: 11px;
  }
  .logout button{
    font-size: 13px;
    padding: 6px 18px;
  }
  .logout button i{
    margin-left: 5px;
    margin-top: 2px;
  }
}

@media only screen and (min-width:300px) and (max-width:600px){
  .logout{
    margin:40px 0 40px 0;
  }
  .logout button{
    padding: 6px 20px;
  }
  .logout button i{
    margin-top: 2px;
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
    color: white;
  }
}
</style>
