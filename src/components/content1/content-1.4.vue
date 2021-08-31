<template>
  <div>
      <div class="heading">1.4 Feedback System</div>

      <div class="list">
         <div class="item" v-for="item in datas.c_1_4" :key="item.id">
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