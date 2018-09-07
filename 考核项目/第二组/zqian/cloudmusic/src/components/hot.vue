<template>
  <div class="hot">
  		<div class="hotItem" v-for='item in hotSearchLists'>
  			<div class="face">
			  	<img :src="item.img">
			  	<div class="playCount">
			  		<div>
			  			<span class="listen"></span>
				  		<span>{{item.playCount}}</span>
			  		</div>
			  		<span class="play"></span>
			  	</div>
  			</div>
  			<div class="title">{{item.psgtitle}}</div>
  		</div>
  		<div class="ad"></div>
  </div>
</template>

<script>
export default {
  name: 'hot',
  data () {
    return {
       msg: '',
       hotSearchLists: [
		    {
		      "img": "http://p1.music.126.net/8_ysyEJ4zG7XfDNaDyyqog==/109951163456996829.jpg?param=140y140",
		      "playCount": "47万",
		      "psgtitle": "嘿，今夜好梦啊",
		      "flag":1
		    },
		    {
		      "img": "http://p1.music.126.net/fhpR9uC--oIQNd592QnEDg==/109951163451916359.jpg?param=140y140",
		      "playCount": "40万",
		      "psgtitle": "念念不忘 没有回响",
		      "flag":1
		    },
		    {
		      "img": "http://p1.music.126.net/YWLGsjO2yNKZfaHewCdYSA==/109951163279773237.jpg?param=140y140",
		      "playCount": "93万",
		      "psgtitle": "『2018』奔跑吧 第二季 BGM",
		      "flag":3
		    },
		    {
		      "img": "http://p1.music.126.net/KSt86EQ8EhnhW7CWnqU4Nw==/109951163462491499.jpg?param=140y140",
		      "playCount": "474万",
		      "psgtitle": "盗墓笔记·逆命者【剧情歌】",
		      "flag":2
		    },
		    {
		      "img": "http://p1.music.126.net/8_ysyEJ4zG7XfDNaDyyqog==/109951163456996829.jpg?param=140y140",
		      "playCount": "47万",
		      "psgtitle": "嘿，今夜好梦啊",
		      "flag":1
		    },
		    {
		      "img": "http://p1.music.126.net/fhpR9uC--oIQNd592QnEDg==/109951163451916359.jpg?param=140y140",
		      "playCount": "40万",
		      "psgtitle": "念念不忘 没有回响",
		      "flag":1
		    },
		    {
		      "img": "http://p1.music.126.net/YWLGsjO2yNKZfaHewCdYSA==/109951163279773237.jpg?param=140y140",
		      "playCount": "93万",
		      "psgtitle": "『2018』奔跑吧 第二季 BGM",
		      "flag":3
		    },
		    {
		      "img": "http://p1.music.126.net/KSt86EQ8EhnhW7CWnqU4Nw==/109951163462491499.jpg?param=140y140",
		      "playCount": "474万",
		      "psgtitle": "盗墓笔记·逆命者【剧情歌】",
		      "flag":2
		    }
    ]
    }
  }
};
</script>


<style scoped>
div,ul,li{
	margin: 0;
	padding: 0;
}
.hot{
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	color: #ccc;
	font-size: 14px;
}
.hotItem{
	width: 25%;
	box-sizing: border-box;
}
.hotItem .face{
	position: relative;
	width: 140px;
	height: 140px;
	margin: 0 auto;
}
.hotItem .playCount{
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 27px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: rgba(0,0,0,.5);
}
.hotItem .playCount div{
	display: flex;
	align-items: center;
}
.hotItem .playCount span{
	display: inline-block;
	/*padding: 0 5px;*/
}
.hotItem .listen{
	width: 17px;
	height: 15px;
	/*padding-top: 5px;*/
	background:url(../assets/iconall.png) no-repeat;
	background-position: 0 -25px;
}
.hotItem .play{
	width: 17px;
	height: 15px;
	background:url(../assets/iconall.png) no-repeat;
}
.hotItem .title{
	width: 140px;
	margin: 0 auto;
	color: #000;
	padding-top: 8px;
	padding-bottom: 30px;
}
.hot .ad{
	width:85%;
	height: 80px;
	margin: 0 auto;
	background: url(../assets/ad.jpg) no-repeat;
}
</style>