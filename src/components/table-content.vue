<template>
  <div v-if="$route.params.tableid == 'table-1.2.2'">
      <div class="list">
          <div class="item">
              <div class="heading"  ><i class="fas fa-arrow-left" style="display:none;" @click="this.$router.go(-1)" ></i>1.2.2 Curriculum for CBCS Courses</div> 
             <div class="sub_items">
                 <div class="table_contents" style="overflow-x:auto;" >
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>UG</th>
                                <th>PG</th>
                                <th>M.Phil.</th>
                                <th>Ph.D</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in datas.t_1_2_2" :key="item.id">
                                <td>{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.ug" v-if="item.ug !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.pg" v-if="item.pg !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.mphil" v-if="item.mphil !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.phd" v-if="item.phd !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else>
      <div class="list">
          <div class="item">
              <div class="heading"  ><i class="fas fa-arrow-left" style="display:none;" @click="this.$router.go(-1)" ></i>Minutes_of_Academic_Council_Meetings</div> 
              <div class="sub_items">
                  <div v-for="item in datas.t_1_2_3" :key="item.id">
                      <a class="i_list" :href=" $store.state.siteUrl + item.link" target="_blank" > <i class="fas fa-arrow-right"></i> {{item.name}}</a>
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