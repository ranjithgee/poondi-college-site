<template>
  <div v-if="$route.params.tableid == 'table-1.2.2'">
      <div class="list">
          <div class="item">
              <div class="heading"  >1.2.2 Curriculum for CBCS Courses <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents courses" style="overflow-x:auto;" >
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
                                <td style="width:20%;" >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.ug" v-if="item.ug !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.pg" v-if="item.pg !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.mphil" v-if="item.mphil !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.phd" v-if="item.phd !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'syllabus-revision'">
      <div class="list">
          <div class="item">
              <div class="heading"  >1.1.2. Programme wise Syllabus revision<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents courses" style="overflow-x:auto;" >
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
                            <tr v-for="item in datas.t_1_1_2" :key="item.id">
                                <td style="width:20%;" >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.ug" v-if="item.ug !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.pg" v-if="item.pg !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.mphil" v-if="item.mphil !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                                <td class="pdf_items"> <a :href="$store.state.siteUrl + item.phd" v-if="item.phd !== ''"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> <span v-else> - </span> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'course-outcomes'">
      <div class="list">
          <div class="item">
              <div class="heading"  >Course Outcomes<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">UG Courses</div>
                    <div class="year_items2">
                        <a v-for="item in datas.ug_courses" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
                <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">PG Courses</div>
                    <div class="year_items2">
                        <a v-for="item in datas.pg_courses" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else>
      <div class="list">
          <div class="item">
              <div class="heading"  >Minutes_of_Academic_Council_Meetings <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
              <div class="sub_items">
                  <div v-for="item in datas.t_1_2_3" :key="item.id">
                      <a class="i_list" :href=" $store.state.siteUrl + item.link" target="_blank" ><img class="send_icon" src="@/assets/send.svg" alt="">{{item.name}}</a>
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