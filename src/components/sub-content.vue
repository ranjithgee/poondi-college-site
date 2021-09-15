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
                          </div>
                      </div>
                  </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            datas:this.$store.state.data
        }
    },
    // mounted(){
    //     this.Get()
    // },
    // methods:{
    //     Get(){
    //         axios.get(this.$store.state.baseUrl + 'datas.json').then((r)=>{
    //             console.log(r)
    //         }).catch((e)=>{
    //             console.log(e)
    //         })
    //     }
    // }
}
</script>

