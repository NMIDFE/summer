<template>
  <div class="HomePage">
    <div>
        <HeadTop></HeadTop>
        <Crumbs></Crumbs>
    </div>
    <!-- <div class="bannerWrap"> -->
    <Banner></Banner>
    <!-- </div> -->
    <div class="container">
    <!--   <div class="mainCnt" v-for='item in titleData'>
          <MainTitle :titletxt='item.title' :hasnav='item.flag'></MainTitle>
      </div>-->
         <div class="mainCnt">
            <MainTitle :titletxt='titleData[0].title' :hasnav='titleData[0].flag'></MainTitle>

            <hot></hot>

            <MainTitle :titletxt='titleData[1].title' :hasnav='titleData[1].flag'></MainTitle>
            <CD></CD>
            <MainTitle :titletxt='titleData[2].title' :hasnav='titleData[2].flag'></MainTitle>
            <HotSearch></HotSearch>
         </div> 
        <div class="bar">
          <Enter :headflag='headflag' @pageInfo='info'></Enter>
          <Author></Author>
          <Anchor></Anchor>
        </div>
    </div>
    <foot></foot>
    <Video></Video>
  </div>
</template>

<script>
import HeadTop from '@/components/head';
import Crumbs from '@/components/crumbs';
import MainTitle from '@/components/mainTitle';
import Hot from '@/components/hot';
import HotSearch from '@/components/hotsearch';
import foot from '@/components/footer';
import CD from '@/components/CD';
import Banner from '@/components/banner';
import Author from '@/components/author';
import Anchor from '@/components/anchor';
import Enter from '@/components/enter';
import Video from '@/components/video';
export default {
  name: 'HomePage',
  data () {
    return {
      msg: '',
      titleData:[{'title':'热门推荐','flag':true},{'title':'新碟上架','flag':false},{'title':'榜单','flag':false}],
      headflag:''
    }
  },
  mounted(){

  },
  methods:{
    info:function(data){
      // this.$on('pageInfo',(data) => {
      //   alert(data);
      // })
      console.log(data);
    }
  },
  components:{
    HeadTop,
    Crumbs,
    MainTitle,
    Hot,
    HotSearch,
    foot,
    CD,
    Banner,
    Author,
    Anchor,
    Enter,
    Video
  }
};
</script>


<style scoped>
@media only screen and (min-width: 750px) and (max-width: 970px){
  .container{
    width: 90%;
  }
}
@media only screen and (min-width: 970px) and (max-width: 1024px){
  .container{
    width: 80%;
  }
}
@media only screen and (min-width: 1025px) {
  .container{
    width: 70%;
  }
}
.HomePage{
  width: 100%;
  background: #f5f5f5;
}
/*.bannerWrap{
  margin: 0 auto;
}*/
.container{
  margin: 0 auto;
  padding: 20px 20px 40px;
  display: flex;
  background: #fff;
  box-sizing: border-box;
}
.container .mainCnt{
  width: 70%;

}
.container .bar{
  width: 30%;
}
</style>
