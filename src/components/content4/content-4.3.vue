<template>
  <div>
      <div class="heading"> 4.3 IT Infrastructure</div>

      <div class="list">
          <div class="item" v-for="item in datas.c_4_3" :key="item.id">
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