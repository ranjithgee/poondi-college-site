<template>
  <div>
      <div class="heading">2.Teaching-Learning and Evaluation</div>

      <div class="list">
          <div class="item" v-for="item in datas.c_2" :key="item.id" >
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

