<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <h1>注册</h1>
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text"
                 v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password"
                 v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">注册</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<style scoped>
 h1{font-size: 25px;vertical-align: top;font-weight: 800;padding-bottom: 20px;padding-left: 110px}
  .g-form-label  .g-form-input{

  }
</style>

<script>

  export default{
    data(){
      return{
        usernameModel: '',
        passwordModel: '',
        errorText:''
      }
    },
    computed: {
      userErrors () {
        let errorText, status
        if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/g.test(this.usernameModel)) {
          status = false
          errorText = '账号要字母和数字组合，并且6-20位数噢'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.userFlag) {
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors () {
        let errorText, status
        if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/g.test(this.passwordModel)) {
          status = false
          errorText = '密码和账号同理O(∩_∩)O'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin () {
        if (!this.userErrors.status || !this.passwordErrors.status) {
          this.errorText = '部分选项未通过'
        }
        else {
          this.errorText = ''
          this.$http.post('api/login')
            .then((res) => {
              console.log(res.data)
              this.$emit('has-log', res.data)
            }, (error) => {
              console.log(error)
            })
        }
      }
    }

  }
</script>
