<template>
  <div>
      <div class="heading"> 6.2 Strategy Development and Deployment</div>

      <div class="list">
          <div class="item" v-for="item in datas.c_6_2" :key="item.id">
              <router-link :to="item.link"> <i class="fas fa-arrow-right"></i> {{item.name}}</router-link>
          </div>
      </div>
  </div>
</template>

<script>
import json from '@/JSON/mock.json'
export default {
    data(){
        return{
            datas:json
        }
    },
}
</script>