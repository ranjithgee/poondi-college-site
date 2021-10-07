<template>
  <div v-if="$route.params.tableid == 'table-1.2.2'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >1.2.2 Curriculum for CBCS Courses <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
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
                            <tr v-for="item in tables.t_1_2_2" :key="item.id">
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
              <div class="heading cnt"  >1.1.2. Programme wise Syllabus revision<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
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
                            <tr v-for="item in tables.t_1_1_2" :key="item.id">
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
  <div v-else-if="$route.params.tableid == 'mentor-register'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Mentor Register<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents courses" style="overflow-x:auto;" >
                    <table class="mentor">
                        <thead>
                            <tr>
                                <th>Departments</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.t_2_3_3" :key="item.id">
                                <td class="mentor_td"  >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"   target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'seed-money'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Policy documents for Sanction of seed money<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents courses" style="overflow-x:auto;" >
                    <table class="seed_money">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name of the teacher provided with seed money</th>
                                <th>The amount of seed money (INR in Lakhs)</th>
                                <th>Year of receiving</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.t_3_1_2" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.amount}}</td>
                                <td>{{item.year}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"   target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a> </td>
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
              <div class="heading cnt"  >Course Outcomes<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">UG Courses</div>
                    <div class="year_items2">
                        <a v-for="item in tables.ug_courses" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
                <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">PG Courses</div>
                    <div class="year_items2">
                        <a v-for="item in tables.pg_courses" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'experiential_learning'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Experiential Learning<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <a class="i_list" v-for="cnt in tables.t_2_3_1" :key="cnt.id"  :href="$store.state.siteUrl + cnt.link" target="_blank" >
                    <img class="send_icon" src="@/assets/send.svg" alt=""> {{cnt.name}}
                 </a>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'participative_learning'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Participative Learning<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <a class="i_list" v-for="cnt in tables.t2_2_3_1" :key="cnt.id"  :href="$store.state.siteUrl + cnt.link" target="_blank" >
                    <img class="send_icon" src="@/assets/send.svg" alt=""> {{cnt.name}}
                 </a>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'advanced_learners'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Special Programme for Advanced Learners<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <a class="i_list" v-for="cnt in tables.t_2_2_1" :key="cnt.id"  :href="$store.state.siteUrl + cnt.link" target="_blank" >
                    <img class="send_icon" src="@/assets/send.svg" alt=""> {{cnt.name}}
                 </a>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'slow_learners'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Special Programme for Slow Learners<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <a class="i_list" v-for="cnt in tables.t2_2_2_1" :key="cnt.id"  :href="$store.state.siteUrl + cnt.link" target="_blank" >
                    <img class="send_icon" src="@/assets/send.svg" alt=""> {{cnt.name}}
                 </a>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'e_content_lectures'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >E-Content of Lectures<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <a class="i_list" v-for="cnt in tables.t_2_3_2" :key="cnt.id"  :href="$store.state.siteUrl + cnt.link" target="_blank" >
                    <img class="send_icon" src="@/assets/send.svg" alt=""> {{cnt.name}}
                 </a>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'video_lectures'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Video Lectures<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <a class="i_list" v-for="cnt in tables.t2_2_3_2" :key="cnt.id"  :href="$store.state.siteUrl + cnt.link" target="_blank" >
                    <img class="send_icon" src="@/assets/send.svg" alt=""> {{cnt.name}}
                 </a>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'gender_action_plan'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Annual Gender Sensitation Action plan<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category" >
                        <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt=""> Annual Gender Sensitation Action plan</div>
                        <div class="year_items">
                            <a v-for="item in tables.t_7_1_1" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                        </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'provided_for_women'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Specific Facilities provided for Women<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category" >
                        <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt=""> Specific Facilities provided for Women</div>
                        <div class="year_items">
                            <a v-for="item in tables.t2_7_1_1" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                        </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '1.3.3_2015_2016'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Value Added Courses attendance and results<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">2015-2016</div>
                    <div class="year_items2">
                        <a v-for="item in tables.one_1_3_3" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '1.3.3_2016_2017'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Value Added Courses attendance and results<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">2016-2017</div>
                    <div class="year_items2">
                        <a v-for="item in tables.two_1_3_3" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '1.3.3_2017_2018'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Value Added Courses attendance and results<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">2017-2018</div>
                    <div class="year_items2">
                        <a v-for="item in tables.three_1_3_3" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '1.3.3_2018_2019'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Value Added Courses attendance and results<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">2018-2019</div>
                    <div class="year_items2">
                        <a v-for="item in tables.four_1_3_3" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '1.3.3_2019_2020'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Value Added Courses attendance and results<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">2019-2020</div>
                    <div class="year_items2">
                        <a v-for="item in tables.five_1_3_3" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '1.1.3_2015_2016'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Courses focus on employability<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">2015-2016</div>
                    <div class="year_items2">
                        <a v-for="item in tables.one_1_1_3" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '1.1.3_2016_2017'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Courses focus on employability<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">2016-2017</div>
                    <div class="year_items2">
                        <a v-for="item in tables.two_1_1_3" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '1.1.3_2017_2018'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Courses focus on employability<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">2017-2018</div>
                    <div class="year_items2">
                        <a v-for="item in tables.three_1_1_3" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '1.1.3_2018_2019'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Courses focus on employability<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">2018-2019</div>
                    <div class="year_items2">
                        <a v-for="item in tables.four_1_1_3" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '1.1.3_2019_2020'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Courses focus on employability<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category2" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">2019-2020</div>
                    <div class="year_items2">
                        <a v-for="item in tables.five_1_1_3" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.1.2_2015_2016'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Policy documents for Sanction of seed money<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents workshops" style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the teacher provided with seed money</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2015-2016</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.one_3_1_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.1.2_2016_2017'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Policy documents for Sanction of seed money<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents workshops" style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the teacher provided with seed money</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2016-2017</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.two_3_1_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.1.2_2017_2018'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Policy documents for Sanction of seed money<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents workshops" style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the teacher provided with seed money</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2017-2018</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.three_3_1_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.1.2_2018_2019'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Policy documents for Sanction of seed money<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents workshops" style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the teacher provided with seed money</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2018-2019</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.four_3_1_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.1.2_2019_2020'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Policy documents for Sanction of seed money<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents workshops" style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the teacher provided with seed money</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2019-2020</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.five_3_1_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.7.2_2015_2016'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Functional MoUs <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the institution/industry/corporate house</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2015-2016</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.one_3_7_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.7.2_2016_2017'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Functional MoUs <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the institution/industry/corporate house</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2016-2017</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.two_3_7_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.7.2_2017_2018'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Functional MoUs <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the institution/industry/corporate house</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2017-2018</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.three_3_7_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.7.2_2018_2019'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Functional MoUs <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the institution/industry/corporate house</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2018-2019</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.four_3_7_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.7.2_2019_2020'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Functional MoUs <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the institution/industry/corporate house</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2019-2020</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.five_3_7_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.7.1_2015_2016'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Collaborative activities <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the collaborating agency</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2015-2016</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.one_3_7_1" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.7.1_2016_2017'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Collaborative activities <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the collaborating agency</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2016-2017</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.two_3_7_1" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.7.1_2017_2018'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Collaborative activities <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the collaborating agency</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2017-2018</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.three_3_7_1" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.7.1_2018_2019'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Collaborative activities <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the collaborating agency</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2018-2019</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.four_3_7_1" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.7.1_2019_2020'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Collaborative activities <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the collaborating agency</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2019-2020</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.five_3_7_1" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '5.1.1_2015_2016'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Scholarship and freeship-govt. <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the scheme</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2015-2016</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.one_5_1_1" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '5.1.1_2016_2017'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Scholarship and freeship-govt. <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the scheme</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2016-2017</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.two_5_1_1" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '5.1.1_2017_2018'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Scholarship and freeship-govt. <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the scheme</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2017-2018</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.three_5_1_1" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '5.1.1_2018_2019'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Scholarship and freeship-govt. <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the scheme</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2018-2019</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.four_5_1_1" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '5.1.1_2019_2020'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Scholarship and freeship-govt. <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name of the scheme</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2019-2020</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.five_5_1_1" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.3.2_2015_2016'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Workshop/seminars on RM,IPR and etc. <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Workshops/seminars conducted</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2015-2016</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.one_3_3_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.3.2_2016_2017'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Workshop/seminars on RM,IPR and etc. <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Workshops/seminars conducted</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2016-2017</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.two_3_3_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.3.2_2017_2018'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Workshop/seminars on RM,IPR and etc. <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Workshops/seminars conducted</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2017-2018</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.three_3_3_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.3.2_2018_2019'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Workshop/seminars on RM,IPR and etc. <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Workshops/seminars conducted</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2018-2019</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.four_3_3_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == '3.3.2_2019_2020'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Workshop/seminars on RM,IPR and etc. <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="table_contents " style="overflow-x:auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Workshops/seminars conducted</th>
                                <th>Link</th>
                            </tr>
                            <tr class="year">
                                <th style="text-align:center;" colspan="3">2019-2020</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tables.five_3_3_2" :key="item.id">
                                <td class="s_no" >{{item.id}}</td>
                                <td >{{item.name}}</td>
                                <td class="pdf_items" ><a :href="$store.state.siteUrl + item.link"  target="_blank" ><img src="../assets/pdf_icon2.png" style="width:20px;" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else-if="$route.params.tableid == 'feedback-analysis'">
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Feedback Analysis<button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
             <div class="sub_items">
                 <div class="year_category" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">Alumni Feedback Analysis</div>
                    <div class="year_items">
                        <a v-for="item in tables.one_1_4_2" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
                <div class="year_category" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">Employer Feedback Analysis</div>
                    <div class="year_items">
                        <a v-for="item in tables.two_1_4_2" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
                <div class="year_category" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">Students Feedback Analysis</div>
                    <div class="year_items">
                        <a v-for="item in tables.three_1_4_2" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
                <div class="year_category" >
                    <div class="year_head"><img class="send_icon" src="@/assets/send.svg" alt="">Teachers Feedback Analysis</div>
                    <div class="year_items">
                        <a v-for="item in tables.four_1_4_2" :key="item.id" :href="$store.state.siteUrl + item.link" target="_blank">{{item.name}}</a>
                    </div>
                </div>
             </div>
          </div>
      </div>
  </div>
  <div v-else>
      <div class="list">
          <div class="item">
              <div class="heading cnt"  >Minutes_of_Academic_Council_Meetings <button type="button" class="back_btn" @click="this.$router.go(-1)"><i class="fas fa-chevron-left" ></i> Back</button></div> 
              <div class="sub_items">
                  <div v-for="item in tables.t_1_2_3" :key="item.id">
                      <a class="i_list" :href=" $store.state.siteUrl + item.link" target="_blank" ><img class="send_icon" src="@/assets/send.svg" alt="">{{item.name}}</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            datas:[],
            tables:[]
        }
    },
    mounted(){
        this.GetData()
        this.GetTables()
    },
    methods:{
        GetData(){
            axios.get(this.$store.state.baseUrl + 'datas.json').then((r)=>{
                this.datas = r.data
            }).catch((e)=>{
                console.log(e)
            })
        },
        GetTables(){
            axios.get(this.$store.state.baseUrl + 'tables.json').then((r)=>{
                this.tables = r.data
            }).catch((e)=>{
                console.log(e)
            })
        }
    }
}
</script>