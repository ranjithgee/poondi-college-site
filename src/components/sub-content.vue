<template>
  <div>
      <div class="list">
          <div class="item" v-for="item in datas.data" :key="item.id" >
                  <div v-for="category in item.category" :key="category.id">
                      <div  v-if="$route.params.id == item.route_name && $route.params.subid == category.path">
                          <div class="heading"  >
                              <div class="breadcrumbs"><span><router-link :to="item.link">Home</router-link> <i class="fas fa-chevron-right" ></i> <router-link :to="item.link">{{item.name}}</router-link> <i class="fas fa-chevron-right" ></i> <router-link class="crnt_page" :to="category.link">{{category.name}}</router-link> </span></div>
                                {{category.name}}<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button>
                          </div>
                          <div class="sub_items">
                              <div  v-for="cat in category.category" :key="cat.id">
                                 <router-link class="i_list" :to="cat.link"><img class="send_icon" src="@/assets/send.svg" alt=""> {{cat.name}}</router-link>
                              </div>
                              <div v-if="$route.params.subid == 'extended_profile_3.1'">
                                  <div class="year_category"  >
                                        <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">3.1 Extended Profile</div>
                                        <div class="year_items">
                                            <a v-for="item in tables.extend_3_1" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                                        </div>
                                  </div>
                              </div>
                              <div v-if="$route.params.subid == 'extended_profile_4.1'">
                                  <div class="year_category"  >
                                        <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">4.1 Extended Profile</div>
                                        <div class="year_items">
                                            <a v-for="item in tables.extend_4_1" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                                        </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            datas:[],
            tables:[]
        }
    },
    mounted(){
        this.GetData()
        this.GetTables()
    },
    methods:{
        GetData(){
            axios.get(this.$store.state.baseUrl + 'datas.json').then((r)=>{
                this.datas = r.data
            }).catch((e)=>{
                console.log(e)
            })
        },
        GetTables(){
            axios.get(this.$store.state.baseUrl + 'tables.json').then((r)=>{
                this.tables=r.data
            }).catch((e)=>{
                console.log(e)
            })
        }
    }
}
</script>

