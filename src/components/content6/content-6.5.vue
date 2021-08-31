<template>
  <div>
      <div class="heading"><i class="fas fa-arrow-left" @click="this.$router.go(-1)" ></i>6.5 Internal Quality Assurance System (IQAS)</div>

      <div class="list">
          <div class="item" v-for="item in datas.c_6_4" :key="item.id">
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