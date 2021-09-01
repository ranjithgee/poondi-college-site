<template>
  <div class="header-sec">
      <div class="logo">
          <img src="@/assets/company-logo.jpg" alt="" srcset="">
          <i class="fas fa-bars" style="display:none" ></i>
      </div>
      <div class="title_sec">
          <div class="head">A. Veeriya Vandayar Memorial Sri Pushpam College (Autonomous)</div>
          <div class="detailsec">
              <div class="phone"><i class="fas fa-phone-alt"></i>04374 - 239523 </div>
              <div class="mail"><i class="far fa-envelope"></i>avvmspc@hotmail.com </div>
              <div class="address"><i class="fas fa-map-marker-alt"></i>Poondi - 613 503, Thanjavur Dt, Tamil Nadu </div>
          </div>
      </div>
      <div class="social_media_sec">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-linkedin"></i>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header-sec{
    background-color: #0066cc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
}
.logo{
    width: 25%;
    text-align: center;
}
.title_sec{
    width: 50%;
    color: white;
}
.title_sec .head{
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0;
}
.detailsec{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.detailsec i{
    margin-right: 7px;
}
.social_media_sec{
    text-align: center;
    width: 25%;
}
.social_media_sec i{
    margin: 0 10px;
    cursor: pointer;
    color: white;
}
@media only screen and (min-width:300px) and (max-width:600px){
    .header-sec{
        display: block;
        padding: 8px 0 !important;
    }
    .social_media_sec{
        display: none;
    }
    .detailsec{
        display: none;
    }
    .title_sec{
        width: 100%;
        display: none;
    }
    .logo{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo img{
        width: 41px;
        margin: 0 15px;
    }
    .logo i{
        display: block!important;
        color: white;
        font-size: 25px;
        margin: 0 15px;
    }
}
</style>