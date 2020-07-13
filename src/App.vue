<template>
  <div id="app">
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
        <!-- <img src="./assets/logo.png" width='50px' height="50px"> -->
        <span class="icon-flickr4"></span>
        <span>Hello!</span>
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <!--<li>{{username}}</li>-->
            <!--<li v-if="username" class="nav-pile">|</li>-->
            <!--<li v-if="username" @click="quit">退出</li>-->
            <!--<li v-if="username" class="nav-pile">|</li>-->
            <li  @click="logClick">登录</li>
            <li  class="nav-pile">|</li>
            <li  @click="regClick">注册</li>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>合作伙伴</p>
       <ul class="share-group">
            <li>腾讯</li>
            <li>阿里</li>
            <li>京东</li>
            <li>拼多多</li>
        </ul>
      <p class="copy">@ 2020 fishenal BEI</p>
    </div>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、
        专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，
        通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，
        为政府、企事业单位和社会各界提供决策依据。 </p>
    </my-dialog>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <p><my-login @has-log="onSuccessLog"></my-login></p>
    </my-dialog>

    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <p><reg-from></reg-from></p>
    </my-dialog>
  </div>
</template>

<script>
  import Dialog from './components/base/dialog.vue'
  import login from  './components/base/login.vue'
  import regFrom from './components/base/regFrom.vue'

export default {
  data(){
    return {
      isShowAboutDialog:false,
      isShowLogDialog:false,
      isShowRegDialog:false
    }
  },
  methods:{
    closeDialog (attr) {
      this[attr] = false
    },
    aboutClick(){
      this.isShowAboutDialog = true
    },
    logClick () {
      this.isShowLogDialog = true
    },
    regClick () {
      this.isShowRegDialog = true
    },
    onSuccessLog(data){
      console.log(data)
//      this.closeDialog ('isShowLogDialog')
      this.username = data.username
    }
  },
  components: {
    myDialog:Dialog,
    myLogin:login,
    regFrom
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./assets/logo-icon.css"
    /* http://meyerweb.com/eric/tools/css/reset/
       v2.0 | 20110126
       License: none (public domain)
    */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #497fea;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    background: #497fea;
  }
  .g-form {

  }
  .g-form-line {
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error {
    color: red;
    padding-left: 15px;
  }

  #app
    background #f0f2f5
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    font-size 14px
    color #444
    .app-head
      position relative
      height 60px
      line-height 60px
      width 100%
      color #b2b2b2
      background: rgba(0, 10, 10, 0.73)
      .app-head-inner
        float left
        width 100%
        margin 0 auto
      .icon-flickr4
          display inline-block
          padding 10px 0px 10px 28px
          font-size 40px
        .head-nav
          position absolute
          right 10px
          top 0px
          cursor pointer
          float right
        .head-nav li
          display inline-block


    .app-footer
      position relative
      top 20px
      height 80px
      line-height 80px
      width 100%
      color #ccc
      background rgba(0,10,10,0.73)
      text-align center
      font-weight 800
      clear both
      min-height 200px
    .share-group
        display: inline-block
        margin: 0 auto
        padding: 20px
        text-align: center
        li
          display inline-block
      p
          display inline-block
        // & li
        //     display: block
      .copy
        display block      
</style>
