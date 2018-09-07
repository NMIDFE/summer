<template>
  <div class="banner" ref='bg'>
    <div class="inner">
        <div class="pic" ref='lunbo'>
          <div v-for='item in links' class="item" :index='item.index'>
            <img :src="item.url"/>
          </div>      
          <div class="btns">
            <span id="prev" @click='prev'> < </span>
            <span id="next" @click='next'>> </span>
          </div>
        </div>
        <div class="download"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      msg: '',
      curGroup:'',
      oldGroup:'',
      links: [
        {
            "name": "Google",
            "index":0,
            "url": "http://p1.music.126.net/NRnQAt7IQgXAJoicNliMYA==/109951163469255190.jpg"
        },
        {
            "name": "Google",
            "index":1,
            "url": "http://p1.music.126.net/2nBQ86-C0QIZW5EbMM8Ecw==/109951163469255463.jpg"
        },
        {
            "name": "Google",
            "index":2,
            "url": "http://p1.music.126.net/KvpoM8SoFTocUJwnDBiEyA==/109951163469619570.jpg"
        },
        {
            "name": "Baidu",
            "index":3,
            "url": "http://p1.music.126.net/4J-6FSOCMWQ2ZpYVRqes6g==/109951163464636687.jpg"
        },
        {
            "name": "SoSo",
            "index":4,
            "url": "http://p1.music.126.net/um941mW_PGFFyl01vhN4BQ==/109951163469258041.jpg"
        }
    ],
    index:'',
    bgcolor:['#d8f1eb','#f5c1c4','#fed01a','#cbc9ca','#261913']
    }
  },
  mounted(){
  	this.curGroup = this.$refs.lunbo.firstChild;
    this.index = 0;
  	this.$refs.lunbo.firstChild.style.display ='flex';
    this.autoplay();
  },
  methods:{
    autoplay:function(){
      var that = this;
      var play = setInterval(function(){
        that.next();
      },4000);
    },
  	prev:function(){
  		if(this.curGroup.previousElementSibling){
  			this.oldGroup = this.curGroup;
  			this.curGroup = this.curGroup.previousElementSibling;
	  		this.curGroup.style.display ='flex';
	  		this.oldGroup.style.display = 'none';
  		}else{
  			this.oldGroup = this.curGroup;
  			this.curGroup = this.$refs.lunbo.lastChild.previousElementSibling;
  		}
  		this.curGroup.style.display ='flex';
      this.index = this.curGroup.getAttribute('index');
  		this.oldGroup.style.display = 'none';
      console.log(this.bgcolor[this.index]);
      this.$refs.bg.style.background = this.bgcolor[this.index];
  	},
  	next:function(){
  		if(this.curGroup.nextElementSibling.nextElementSibling){
  			this.oldGroup = this.curGroup;
  			this.curGroup = this.curGroup.nextElementSibling;
  		}else{
  			this.oldGroup = this.curGroup;
  			this.curGroup = this.$refs.lunbo.firstChild;
  		}
  		this.curGroup.style.display ='flex';
      this.index = this.curGroup.getAttribute('index');
  		this.oldGroup.style.display = 'none';
      this.$refs.bg.style.background = this.bgcolor[this.index];
  	}
  }
};
</script>

<!-- #261913 #d8f1eb #f5c1c4 #fed01a #cbc9ca -->
<style scoped>
div,ul,li,p{
	margin: 0;
	padding: 0;
}
@media only screen and (min-width: 750px) and (max-width: 970px){
  .inner{
    width: 90%;
  }
}
@media only screen and (min-width: 970px) and (max-width: 1024px){
  .inner{
    width: 80%;
  }
}
@media only screen and (min-width: 1025px) {
  .inner{
    width: 70%;
  }
}
.inner{
  height: 336px;
  display: flex;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 60px;
}
.banner .pic{
  display: flex;
  width: 70%;
  position: relative;
}
.banner .pic .item{
  display: none;
  width: 100%
}
.banner .pic img{
  width: 100%;
}
.banner .download{
  position: relative;
  width: 30%;
  background: url('../assets/download.png') no-repeat;
  z-index: 999;
}
.btns{

}
.btns span{
	position: absolute;
	top: 142px;
	font-size: 22px;
  color: #fff;
	font-weight: 1000;
  background: rgba(0,0,0,.3);
  padding: 10px;
}
.btns span:hover{
  cursor: pointer;
}
.btns #prev{
	left: 20px;
}
.btns #next{
	right: 20px;
}
</style>