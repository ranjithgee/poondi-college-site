<template>
  <div>
      <div class="list">
          <div class="item" v-for="item in datas.data" :key="item.id" >
              <div v-for="category in item.category" :key="category.id">
                  <div  v-for="cat in category.category" :key="cat.id">
                      <div  v-if="$route.params.id == item.id && $route.params.subid == category.id && $route.params.cntid == cat.id" >
                            <div class="heading"  ><i class="fas fa-arrow-left" @click="this.$router.go(-1)" ></i> {{cat.name}}</div> 
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

