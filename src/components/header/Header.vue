<template>
<section class="header">
  <div class="header-sec">
      <div class="logo">
          <img src="@/assets/company-logo.jpg" alt="" srcset="">
          <i class="fas fa-bars" style="display:none" @click="BarIcon" ></i>
      </div>
      <div class="heading_content">
          <span class="first">A.V.V.M. Sri Pushpam College (Autonomous)</span><br/>
             <span class="second"> Poondi– 613 503, Thanjavur-Dt, Tamilnadu</span><br/>
             <span class="third"> (Affiliated to Bharathidasan University, Tiruchirappalli – 620 024)</span>
      </div>
      <div class="right_logo">
          <img src="@/assets/NAAC_LOGO.png" alt="" srcset="">
      </div>
  </div>
  <div class="cycle_heading" > Self Study Report (SSR) – Cycle IV</div>
</section>  
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
.right_logo{
    margin: 0 25px;
}
.header{
  background: #0066cc;
}

.cycle_heading{
    color: white;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    padding-bottom: 20px;
    text-transform: uppercase;
}
.header-sec{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
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
    font-size: 27px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 8px;
}
.heading_content span.second{
    font-size: 18px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 8px;
}

.heading_content span.third{
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    display: inline-block;
    margin-bottom: 8px;
}



@media only screen and (min-width: 1270px) and (max-width: 1366px) {
  .heading_content span.first{
    font-size: 20px;
  }
  .heading_content span.second{
    font-size: 15px;
  }
  .heading_content span.third{
    font-size: 13px;
  }
  .cycle_heading{
    font-size: 17px;
    padding-bottom: 14px;
  } 
  .logo img{
      width:80%;
  }
  .right_logo img{
      width: 86%;
  }
  .header-sec{
    padding: 13px 0;
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
  .cycle_heading{
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
    .cycle_heading{
        display: none;
    }
    .right_logo{
        display: none;
    }
}
</style>