<template>
  <div>
      <div class="list">
          <div class="item" v-for="item in datas.data" :key="item.id" >
              <div v-for="category in item.category" :key="category.id">
                  <div  v-for="cat in category.category" :key="cat.id">
                      <div  v-if="$route.params.id == item.route_name && $route.params.subid == category.path && $route.params.cntid == cat.path" >
                            <div class="heading"  ><i class="fas fa-arrow-left" style="display:none;" @click="this.$router.go(-1)" ></i> <span v-if="$route.params.cntid !== '1.1.1'">{{cat.name}}</span> <span v-if="$route.params.cntid == '1.1.1'">{{cat.alter_name}}</span></div> 
                            <div class="sub_items">
                                <div v-for="cnt in cat.sub" :key="cnt.id" >
                                    <a class="i_list" v-if="cnt.name !== 'Curriculam for CBCS courses' && cnt.name !== 'Minutes_of_Academic_Council_Meetings'" :href="cnt.id == 4  ? cnt.link : $store.state.siteUrl + cnt.link" target="_blank" > <i class="fas fa-arrow-right"></i> {{cnt.name}}</a>
                                    <router-link v-if="cnt.name == 'Curriculam for CBCS courses' || cnt.name == 'Minutes_of_Academic_Council_Meetings'" class="i_list" :to="cnt.link" ><i class="fas fa-arrow-right"></i>{{cnt.name}} </router-link>
                                </div>
                                <div class="table_contents" style="overflow-x:auto;" v-if="cat.path == '1.3.4'">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>I UG</th>
                                                <th>II UG</th>
                                                <th>III UG</th>
                                                <th>I PG</th>
                                                <th>II PG</th>
                                                <th>III MCA</th>
                                                <th>M. Phil</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in datas.t_1_3_4" :key="item.id">
                                                <td>{{item.name}}</td>
                                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.Iug" v-if="item.Iug !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.IIug" v-if="item.IIug !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.IIIug" v-if="item.IIIug !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.Ipg" v-if="item.Ipg !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.IIpg" v-if="item.IIpg !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.IIImca" v-if="item.IIImca !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.mphil" v-if="item.mphil !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:30px;" /></a> <span v-else> - </span> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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

