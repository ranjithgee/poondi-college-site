<template>
  <div>
      <div class="list">
          <div class="item" v-for="item in datas.data" :key="item.id" >
                  <div v-for="category in item.category" :key="category.id">
                      <div  v-if="$route.params.id == item.id && $route.params.subid == category.id">
                          <div class="heading"  ><i class="fas fa-arrow-left" @click="this.$router.go(-1)" ></i> {{category.name}}</div>
                          <div class="sub_items">
                              <div  v-for="cat in category.category" :key="cat.id">
                                 <router-link :to="cat.link"> <i class="fas fa-arrow-right"></i> {{cat.name}}</router-link>
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

