<template>
  <div>
      <div class="heading"><i class="fas fa-arrow-left" @click="this.$router.go(-1)" ></i>1.1.1 Revision of Curricula</div>

      <div class="list">
          <div class="item" v-for="item in datas.c_1_1_1" :key="item.id">
              <a :href="item.link" target="_blank"> <i class="fas fa-arrow-right"></i> {{item.name}}</a>
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