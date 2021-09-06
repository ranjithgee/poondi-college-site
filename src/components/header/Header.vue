<template>
  <div class="header-sec">
      <div class="logo">
          <img src="@/assets/company-logo.jpg" alt="" srcset="">
          <i class="fas fa-bars" style="display:none" @click="BarIcon" ></i>
      </div>
      <div class="heading_content">
          <span class="first">A.V.V.M. Sri Pushpam College (Autonomous)</span><br/>
             <span class="second"> Poondi– 613 503, Thanjavur-Dt, Tamilnadu</span><br/>
             <span class="third"> (Affiliated to Bharathidasan University, Tiruchirappalli – 620 024)</span><br/>
             <span class="fourth"> Self Study Report (SSR) – Cycle IV </span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        BarIcon(){
            var target = document.querySelector('.tab_box');
            target.style.display='block'
        }
    }
}
</script>

<style scoped>
.header-sec{
    background: #0066cc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    color: white;
}
.logo{
    text-align: center;
    margin: 0 25px;
}
.heading_content{
    margin: 0 25px;
    text-align: center;
}
.heading_content span.first{
    font-size: 35px;
    font-weight: 600;
}
.heading_content span.second{
    font-size: 25px;
    font-weight: 600;
}

.heading_content span.third{
    font-size: 22px;
    font-weight: 600;
    font-style: italic;
}
.heading_content span.fourth{
    font-size: 27px;
    font-weight: 600;
}



@media only screen and (min-width: 1270px) and (max-width: 1366px) {
  .heading_content span.first{
    font-size: 20px;
  }
  .heading_content span.second{
    font-size: 16px;
  }
  .heading_content span.third{
    font-size: 14px;
  }
  .heading_content span.fourth{
    font-size: 18px;
  } 
  .logo img{
      width:80%;
  }   
}

@media only screen and (min-width: 1367px) and (max-width: 1600px){
    .heading_content span.first{
    font-size: 24px;
  }
  .heading_content span.second{
    font-size: 20px;
  }
  .heading_content span.third{
    font-size: 18px;
  }
  .heading_content span.fourth{
    font-size: 22px;
  } 
  .logo img{
      width:80%;
  }
} 


@media only screen and (min-width:300px) and (max-width:600px){
    .logo{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo img{
        width: 35px;
    }
    .heading_content{
        display: none;
    }
    .logo i{
        display: block!important;
        color: white;
        font-size: 25px;
        margin: 0 15px;
    }
}
</style>