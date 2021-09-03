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
                                    <a :href="cnt.id == 4 ? cnt.link : $store.state.siteUrl + cnt.link" target="_blank" > <i class="fas fa-arrow-right"></i> {{cnt.name}}</a>
                                </div>
                                <div class="table_contents" v-if="cat.path == '1.3.4'">
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
                                            <tr>
                                                <td>History</td>
                                                <td><a href="/pdf/1.3.4/1/1_I_B.A_History_Field_visit_44.pdf"><img src="../assets/pdf_icon2.png" style="width:30px;" /></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Economics</td>
                                                <td><a href="/pdf/1.3.4/1/2_I_B.A_Economics_Field_visit_24.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Tamil</td>
                                                <td><a href="/pdf/1.3.4/1/3_I_B.A_Tamil_Field_visit_41.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Indian Culture</td>
                                                <td><a href="/pdf/1.3.4/1/4_I_B.Lit_Field_visit_20.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>B.Lit. Tamil</td>
                                                <td><a href="/pdf/1.3.4/1/5_I_B.A_IC_Field_visit_17.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>English</td>
                                                <td><a href="/pdf/1.3.4/1/6_I_B.A_English_Field_visit_98.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Commerce</td>
                                                <td><a href="/pdf/1.3.4/1/7_I_B.Com_Field_visit_276.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>B. Com. C.A.</td>
                                                <td><a href="/pdf/1.3.4/1/8_I_B.Com_BM_Field_visit_47.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>B. Com. B. M.</td>
                                                <td><a href="/pdf/1.3.4/1/9_I_B.Com_CA_Field_visit_54.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Mathematics</td>
                                                <td><a href="/pdf/1.3.4/1/10_I_B.Sc_Maths_Field_visit_110.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Physics</td>
                                                <td><a href="/pdf/1.3.4/1/11_I _B.Sc_.Physics_Field_ visit_108.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Chemistry</td>
                                                <td><a href="/pdf/1.3.4/1/12_I_B.Sc_Chemistry_Field_visit_157.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Botany</td>
                                                <td><a href="/pdf/1.3.4/1/13_I_B.Sc_Botany_Field_visit_69.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Microbiology</td>
                                                <td><a href="/pdf/1.3.4/1/14_I_B.Sc_Zoology_Field_visit_75.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Zoology</td>
                                                <td><a href="/pdf/1.3.4/1/15_I_B.Sc_CS_Field_visit_187.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Biotechnology</td>
                                                <td><a href="/pdf/1.3.4/1/16_I_B.C.A_Field_ visit_165.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Computer Science</td>
                                                <td><a href="/pdf/1.3.4/1/17_I_B.Sc_Phy_Edn_Field_visit_54.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Computer Applications</td>
                                                <td><a href="/pdf/1.3.4/1/18_I_B.B.A_Field_visit_125.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Information Technology</td>
                                                <td><a href="/pdf/1.3.4/1/19_I_B.Sc_Statistics _ Field_ visit_3.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Physical Education, Health Education and Sports</td>
                                                <td><a href="/pdf/1.3.4/1/20_I_B.Sc_Geography_Field_visit_14.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Business Administration</td>
                                                <td><a href="/pdf/1.3.4/1/1_I_B.A_History_Field_visit_44.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Statistics</td>
                                                <td><a href="/pdf/1.3.4/1/1_I_B.A_History_Field_visit_44.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Geography</td>
                                                <td><a href="/pdf/1.3.4/1/1_I_B.A_History_Field_visit_44.pdf"></a></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
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

