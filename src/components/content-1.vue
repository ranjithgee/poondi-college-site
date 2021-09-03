<template>
  <div>

      <div class="list">
          <div class="item" v-for="item in datas.data" :key="item.id" >
              <div v-if="$route.params.id == item.route_name">
                  <div class="heading">{{item.name}}</div>
                  <div class="sub_items">
                      <div  v-for="category in item.category" :key="category.id">
                         <router-link :to="category.link"> <i class="fas fa-arrow-right"></i> {{category.name}}</router-link>
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

