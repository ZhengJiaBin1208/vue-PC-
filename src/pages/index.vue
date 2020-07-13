<template> 
    <div class="index-wrap">
      <div id="banner">
        <div class="ban">
          <div class="inner">
            <h1>您好，我叫林伟谦</h1>
            <p>广告发布以及流量分析预测</p>
            <p>Advertising release and traffic analysis forecast</p>
            <button id="knowMe" @click="selectMenu()">请点击我</button>
          </div>    
        </div>      
   </div>
    <div class="toolbar">
      <a href="javascript:;" class="toolbar-item toolbar-item-weixin">
      <span class="toolbar-layer"></span>
      </a>
      <a href="javascript:;" class="toolbar-item toolbar-item-feedback"></a>
      <a href="javascript:;" class="toolbar-item toolbar-item-app">
      <span  class="toolbar-layer"></span>
      </a>
      <a id="backTop" href="javascript:;" class="toolbar-item toolbar-item-top" @click="backtop()"></a>
    </div>
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <template v-for="product in productList">
            <h3>{{product.title}}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{item.name}}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
              </li>
            </ul>
            <div class="hr" v-if="!product.last"></div>
          </template>
        </div>
        <div class="index-left-block lastest-news">
          <h2 class="newsList">最新信息</h2>
          <ul>
            <li v-for="item in newsList" class="new-item">
              <a :href="item.url">{{item.title}}</a></li>
          </ul>
        </div>
      </div>
      <div class="index-right">
        <div class="index-board-list">
            <slide-show :slides="slides" :inv="invTime"> </slide-show>
          <div class="index-board-buy">
          <div class="index-board-item" v-for="(item, index) in boardList"
               :class="[{'line-last' : index % 2 !== 0},'index-board-' + item.id]">
            <div class="index-board-item-inner" >
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>
            </div>
            <div class="index-board-button">
              <a href="" class="button">立刻购买</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type='text/ecmascript-6'>
  import slideShow from '../components/slideShow.vue'
  import $ from 'jquery'
  export default {
    components:{
      slideShow
    },
    created() {
      this.$http.get('api/getNewsList')
        .then((res) => {
           this.newsList = res.data
        },(err) => {
          console.log(err)
        })
  },
    methods: {
      selectMenu(){
        $('body,html').animate({
                scrollTop:770
            },380)
      },
      backtop(){
         $('body,html').animate({
                scrollTop:0
            },380)
      }
    },
  data(){
    return {
      invTime: 3000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'detail/publish'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      newsList: [],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'detail/count'
            },
            {
              name: '数据预测',
              url: 'detail/forecast'
            },
            {
              name: '流量分析',
              url: 'detail/analysis',
              hot: true
            },
            {
              name: '广告发布',
              url: 'detail/publish'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      },
      boardList: [
      {
        title: '开放产品',
        description: '开放产品是一款开放产品',
        id: 'car',
        toKey: 'analysis',
        saleout: false
      },
      {
        title: '品牌营销',
        description: '品牌营销帮助你的产品更好地找到定位',
        id: 'earth',
        toKey: 'count',
        saleout: false
      },
      {
        title: '使命必达',
        description: '使命必达快速迭代永远保持最前端的速度',
        id: 'loud',
        toKey: 'forecast',
        saleout: true
      },
      {
        title: '勇攀高峰',
        description: '帮你勇闯高峰，到达事业的顶峰',
        id: 'hill',
        toKey: 'publish',
        saleout: false
      }
    ],
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../components/sidebar/css/index.css";

  index-wrap
    width 100%
    margin 0 auto
    overflow hidden

  .index-left
    float left
    width 300px
    padding 0 20px 20px 20px
    text-align left
  .index-left-block
    margin 15px
    background #fff
    box-shadow 0 0 1px #ddd
    .new-item
      display inline-block
      width 230px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .newsList
      padding 10px -10px
      margin-bottom 5px

  .index-left-block .hr
    margin-bottom 20px

  .index-left-block h2
    background #497fea
    color #fff
    padding: 10px 15px
    margin-bottom 20px

  .index-left-block h3
    padding: 0 15px 5px 15px
    font-weight bold
    color: #222

  .index-left-block ul
    padding: 10px 15px
  .index-left-block li
    padding: 5px
    &:hover
      color red
  .index-right
    float left
    width 500px    
  .hot-tag
    background: red
    color: #fff
  .index-board-buy
    position relative
    top 20px
    height 300px
    width 1000px
    float left
  .index-board-item
    display inline-block
    float left
    width 400px
    margin-right: 20px
    margin-bottom: 20px
    padding 20px
    box-shadow: 0 0 1px #ddd;
    background-color #fff
  .index-board-car .index-board-item-inner
    background: url(../assets/images/1.png) no-repeat;

  .index-board-loud .index-board-item-inner
    background: url(../assets/images/2.png) no-repeat;

  .index-board-earth .index-board-item-inner
    background: url(../assets/images/3.png) no-repeat;

  .index-board-hill .index-board-item-inner
    background: url(../assets/images/4.png) no-repeat;

  .index-board-item-inner
    min-height: 125px
    padding-left: 120px
  .index-board-button
    padding-left: 120px
    margin-top: -65px;
    .button
      background #497fea
  .index-board-item-inner h2
      font-size: 18px;
      font-weight: bold;
      line-height 30px
  .index-board-item-inner p
    font-size 12px
  .line-last
      margin-right: 0;

#banner
    background-image url("../assets/starlitNight.jpg")
    background-repeat: no-repeat
    background-size: cover
    height: 700px
    .ban
       background: rgba(0, 10, 10, 0.3 )
       height 100%
      .inner
          max-width: 300px
          text-align: center
          margin: 0 auto
          color: #eee
          padding-top: 80px
          h1
              margin: 0
              font-size 2em
              font-weight bold
              line-height 90px
          p
              line-height: 30px  
              font-size: 18px  
          button
              border: none
              background: #333
              color: #eee
              margin-top 30px
              padding: 14px 40px     
</style>
