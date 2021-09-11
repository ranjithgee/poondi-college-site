<template>
  <div>

      <div class="list">
          <div class="item" v-for="item in datas.data" :key="item.id" >
              <div v-if="$route.params.id == item.route_name">
                  <div class="heading">
                      <div class="breadcrumbs"><span> <router-link :to="item.link" > Home </router-link><i class="fas fa-chevron-right" ></i> <router-link :to="item.link">{{item.name}}</router-link></span></div>
                      {{item.name}}
                  </div>
                  <div class="sub_items">
                      <div  v-for="category in item.category" :key="category.id">
                         <router-link class="i_list" :to="category.link"> <img class="send_icon" src="@/assets/send.svg" alt=""> {{category.name}}</router-link>
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

