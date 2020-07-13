<template>
    <div class="swiper-container" style="z-index: 0" >
      <div class="swiper-wrapper" >
        <div class="swiper-slide"  v-for="index in slides" :style="{backgroundImage: 'url(' + index.src + ')'} "
               style="width:100px;height: 600px"  ><a :href="index.href" style="width:100%;height: 600px;display:block"  > </a></div>

      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!--<h2>{{ slides[nowIndex].title }}</h2>-->
      <!--<ul class="slide-page">-->
        <!--<li @click="goto(prevIndex)">&lt;</li>-->
        <!--<li v-for="(item,index) in slides" @click="goto(index)">-->
          <!--<a :class="{on: index === nowIndex}">{{index + 1}}</a>-->
        <!--</li>-->
        <!--<li @click="goto(nextIndex)">&gt;</li>-->
      <!--</ul>-->
    </div>
</template>

<script type='text/ecmascript-6'>
  import Swiper from '../../static/swiper.min'
  let mySwiper
  export default{
    props:{
      slides:{
        type : Array,
        default() {
          return []
        }
      },
      inv: {
        type: Number,
        default: 1000
      }
    },
    data(){
      return{
        nowIndex:0,
        isShow: true
      }
    },
    computed : {
//      prevIndex (){
//        if(this.nowIndex === 0){
//          return this.slides.length - 1
//        }
//        else {
//          return this.nowIndex - 1
//        }
//      },
//      nextIndex (){
//        if(this.nowIndex === this.slides.length - 1){
//          return 0
//        }
//        else {
//          return this.nowIndex + 1
//        }
//      },
    },
    methods: {
//      goto(index) {
//        this.isShow = false
//        setTimeout(() => {
//          this.isShow = true
//          this.nowIndex = index
//        }, 10)
//      },
      lunbo(){
        mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: true,


          // 如果需要分页器
          pagination: '.swiper-pagination',

          // 如果需要前进后退按钮
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          autoplay : 3000,
          autoplayDisableOnInteraction : false,
          preventClicks : false,
          paginationClickable :true

//
//          // 如果需要滚动条
//          scrollbar: '.swiper-scrollbar',
        })

      },
//      runInv(){
//        this.invId= setInterval(() => {
//          this.goto(this.nextIndex)
//        },this.inv)
//      },
//      clearInv () {
//        clearInterval(this.invId)
//      }
    },
    mounted (){
      this.lunbo()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import url("../assets/swiper.min.css");
  .slide-trans-enter-active
    transition all .5s
  .slide-trans-enter
    transform translateX(900px)
  .slideOld
    transition: all .5s
    transform: translateX(-900px)
  .swiper-container
    position: relative;
    top 10px
    margin 15px 15px 15px 0
    width 900px
    height 500px
    overflow hidden
  .slide-show h2
    position absolute
    width 100%
    color #fff
    background: #000
    opacity .5
    bottom 0
    line-height 30px
    height 30px
    text-align left
    padding-left 15px
    .swiper-wrapper
      width: 100%
      background-size: 900px 500px;


  .swiper-wrapper img
      width: 100%
      position: absolute
      top: 0
  .slide-page
    position: absolute
    bottom: 5px
    right: 15px
  .slide-page li
    display: inline-block
    padding: 0 10px
    cursor: pointer
    color: #fff
  .slide-page li .on {
    font-size 16 px
    text-decoration: underline;
  }

</style>
