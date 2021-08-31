<template>
  <div class="login">
      <div class="card">
          <div class="card_body">
              <form >
                  <div class="err_box" style="height:54px">
                    <div class="msg" v-if="error === true">Invalid Credentials</div>
                    <div class="msg" v-if="email_error === true">Invalid Email</div>
                  </div>
                  <div class="input_box" style="margin-top:0;">
                      <input type="email" placeholder="Email" v-model="email" />
                  </div>
                  <div class="input_box">
                      <input type="password" placeholder="Password" v-model="password" />
                  </div>
                  <div class="btn_box">
                      <button type="button" @click="Login">Login</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
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
            this.$router.push('/')
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
                    this.$router.push('/')
                }
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
}
.card{
    width: 30%;
    margin:0 auto;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    padding:50px 0;
}
form{
    padding: 0px 70px 30px 70px;
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
    background: black;
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
</style>