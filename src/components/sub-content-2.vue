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
                                    <a class="i_list" v-if="cnt.name !== 'Curriculam for CBCS courses' && cnt.name !== 'Minutes_of_Academic_Council_Meetings' && cnt.name !== 'Details of program syllabus revision'" :href="cnt.id == 4 ? cnt.link : $store.state.siteUrl + cnt.link" target="_blank" ><img class="send_icon" src="@/assets/send.svg" alt=""> {{cnt.name}}</a>
                                    <router-link v-if="cnt.name == 'Curriculam for CBCS courses' || cnt.name == 'Minutes_of_Academic_Council_Meetings' || cnt.name == 'Details of program syllabus revision'" class="i_list" :to="cnt.link" ><img class="send_icon" src="@/assets/send.svg" alt="">{{cnt.name}} </router-link>
                                </div>
                                <div class="table_contents courses" style="overflow-x:auto;" v-if="cat.path == '1.3.4'">
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
                                                <td style="width:20%;">{{item.name}}</td>
                                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.Iug" v-if="item.Iug !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.IIug" v-if="item.IIug !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.IIIug" v-if="item.IIIug !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.Ipg" v-if="item.Ipg !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.IIpg" v-if="item.IIpg !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.IIImca" v-if="item.IIImca !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.mphil" v-if="item.mphil !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table_contents" style="overflow-x:auto;" v-if="cat.path == '3.7.2'">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name of the institution/industry/corporate house</th>
                                                <th>Date of MoU</th>
                                                <th>Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in datas.t_3_7_2" :key="item.id">
                                                <td>{{item.id}}</td>
                                                <td>{{item.name}}</td>
                                                <td>{{item.date}}</td>
                                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="table_contents" style="overflow-x:auto;" v-if="cat.path == '3.7.1'">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name of the collaborating agency</th>
                                                <th>Year</th>
                                                <th>Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in datas.t_3_7_1" :key="item.id">
                                                <td>{{item.id}}</td>
                                                <td>{{item.name}}</td>
                                                <td>{{item.year}}</td>
                                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="year_category" v-if="cat.path == '3.4.4'" >
                                        <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">Books and chapters Published</div>
                                        <div class="year_items">
                                            <a v-for="item in datas.t_3_4_4" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                                        </div>
                                </div>
                                <div class="year_category" v-if="cat.path == '3.2.1'" >
                                        <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">Project Grants Recieved</div>
                                        <div class="year_items">
                                            <a v-for="item in datas.t_3_2_1" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                                        </div>
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

