<template>
  <div>
      <div class="list">
          <div class="item" v-for="item in datas.data" :key="item.id" >
              <div v-for="category in item.category" :key="category.id">
                  <div  v-for="cat in category.category" :key="cat.id">
                      <div  v-if="$route.params.id == item.route_name && $route.params.subid == category.path && $route.params.cntid == cat.path" >
                            <div class="heading"  ><i class="fas fa-arrow-left" style="display:none;" @click="this.$router.go(-1)" ></i> <span v-if="$route.params.cntid !== '1.1.1'">{{cat.name}}</span> <span v-if="$route.params.cntid == '1.1.1'">{{cat.alter_name}}</span></div> 
                            <div class="sub_items">
                                <div v-for="cnt in cat.sub" :key="cnt.id" >
                                    <a :href="cnt.id == 4 ? cnt.link : $store.state.siteUrl + cnt.link" target="_blank" > <i class="fas fa-arrow-right"></i> {{cnt.name}}</a>
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
export default {
    data(){
        return{
            datas:this.$store.state.data
        }
    },
}
</script>

