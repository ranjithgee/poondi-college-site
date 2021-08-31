<template>
  <div>
      <div class="heading"><i class="fas fa-arrow-left" @click="this.$router.go(-1)" ></i>3.6 Extension Activities</div>

      <div class="list">
          <div class="item" v-for="item in datas.c_3_6" :key="item.id">
              <router-link :to="item.link"> <i class="fas fa-arrow-right"></i> {{item.name}}</router-link>
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