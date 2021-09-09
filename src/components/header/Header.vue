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
          <img src="@/assets/naac_logo.png" alt="" srcset="">
      </div>
  </div>
  <div class="cycle_heading" ><i class="fas fa-bars" style="cursor:pointer;" @click="MenuClose" ></i> <span> Self Study Report (SSR) – Cycle IV</span></div>
</section>  
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        MenuClose(){
            var target = document.querySelector('.tab_box');
            target.classList.toggle('menu_close');
            var cnt = document.querySelector('.content_item');
            if(target.classList.contains('menu_close')){
                target.style.cssText=`opacity:0;transform:translateX(-100%);width:0%;padding:0;`;
                cnt.style.width='100%';
            }else{
                target.style.cssText=`opacity:1;transform:translateX(0%);width:22%;padding: 0px 15px 50px 15px;`;
                cnt.style.width='78%';
            }
        },
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
.cycle_heading i{
    float: left;
    margin-left:20px;
    color: white;
}
.cycle_heading span{
    margin-left: -40px;
}
.cycle_heading{
    color: white;
    font-size: 21px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 20px;
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
    font-size: 16px;
  }
  .heading_content span.third{
    font-size: 14px;
  }
  .cycle_heading{
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