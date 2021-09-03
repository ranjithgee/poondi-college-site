<template>
<section class="login_sec">
    <div class="login">
      <div class="card">
          <div class="card_body">
              <div class="left_sec">
                   <div class="logo">
                        <img src="@/assets/company-logo.jpg" alt="" srcset="">
                        <i class="fas fa-bars" style="display:none" @click="BarIcon" ></i>
                    </div>
                    <div class="heading_content">
                        <span class="first">A.V.V.M. Sri Pushpam College (Autonomous)</span><br/>
                            <span class="second"> Poondi– 613 503, Thanjavur-Dt, Tamilnadu</span><br/>
                            <span class="third"> (Affiliated to Bharathidasan University,<br/> Tiruchirappalli – 620 024)</span><br/>
                            <span class="fourth"> Self Study Report (SSR) – Cycle IV </span>
                    </div>
              </div>
              <form>
                  <div class="err_box" style="height:54px">
                    <div class="msg" v-if="error === true">Invalid Credentials</div>
                    <div class="msg" v-if="email_error === true">Invalid Email</div>
                  </div>
                  <div class="input_box" style="margin-top:0;">
                      <input type="email" @keyup="KeyUp" placeholder="Email" v-model="email" />
                  </div>
                  <div class="input_box">
                      <input type="password" @keyup="KeyUp" placeholder="Password" v-model="password" />
                  </div>
                  <div class="btn_box">
                      <button type="button" @click="Login">Login</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>
</template>

<script>
export default {
    data(){
        return{
            error:false,
            email_error:false,
            email:'',
            password:''
        }
    },
    beforeCreate(){
        if(localStorage.getItem('user_token')){
            this.$router.push('/curricular_aspects')
        }
    },
    methods:{
        Login(){
            var err = 0
            this.error = false
            this.email_error = false
            var emailRegex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(this.email === '' || this.password === ''){
                this.error = true
                err++
            }else{
                if(!emailRegex.test(this.email)){
                    this.email_error= true
                    err++
                }
            }
            if(err === 0){
                if(this.email==='admin@gmail.com' && this.password === 'admin'){
                    localStorage.setItem('user_token','admin@gmail.com')
                    this.$router.push('/curricular_aspects')
                }else{
                    this.error = true
                }
            }
        },
        KeyUp(e){
            if (e.keyCode === 13) {
                this.Login()
            }
        }
    }
}
</script>

<style scoped>
.login{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0066cc;
}
.card_body{

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card{
    width: 50%;
    margin:0 auto;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    padding:50px 0;
    background: white;
    border-radius: 7px;
}
form{
    padding: 0px 70px 30px 70px;
    width: 50%;
}
.left_sec{
    width:50%;
    text-align: center;
    padding:40px 20px 40px 30px;
    border-right: 1px solid #ced4da;
}

span.first{
    font-weight: bold;
    font-size: 18px;
    color: #ff0000;
}
span.second{
    color: #0000ff;
    font-weight: 600;
}
span.third{
    font-style: italic;
    font-weight: 600;
    color: #006600;
}
span.fourth{
    color: #002060;
    font-weight: 600;
}
.left_sec .logo{
    margin-bottom: 20px;
}
.input_box{
    margin:30px 0;
}
.input_box input{
    width: 91%;
    padding: 11px 15px;
    outline: none;
    box-shadow: 0 0 #0000, 0 0 #0000,  0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border: 1px solid #ced4da;
}
.btn_box button{
    padding: 10px 30px;
    margin-top: 15px;
    background: #0066cc;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
}
.msg{
  color: red;
  font-weight: 600;
  text-align: start;
  padding: 10px 2px;
}
@media only screen and (min-width:300px) and (max-width:600px){
    .card{
        width:100%;
        margin:0 15px;
        padding: 35px 0;
    }
    form{
        width: 79%;
        padding: 0px 30px 30px 30px;
    }
    .btn_box button{
        padding: 10px 20px;
        width: 103%;
    }
    .msg{
        font-size: 13px;
    }
    .left_sec{
        display: none;
    }
}
</style>