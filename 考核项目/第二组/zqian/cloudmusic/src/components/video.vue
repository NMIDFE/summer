<template>
	<div class="video">
		<div class="clock">
			<div class="lf"></div>
			<div class="rf"></div>
		</div>
		<audio ref="myMusic" id="audio"></audio>
		<div class="wrap">
			<div class="btns">
				<a href="#" title="上一首" @click='prev'></a>
				<a href="#" class='playLogo' ref='togglePlaybtn' title="播放/暂停"  @click='togglePlay'></a>
				<a href="#" title="下一首" @click='next'></a>
			</div>
			<div class="play">
				<div class="songLogo">
					<img src="http://s4.music.126.net/style/web2/img/default/default_album.jpg">
				</div>
				<div>	
					<div class="progress"></div>
					<div class="load" ref='load'></div>
				</div>
				<div class="times" ref='times'>00:00</div>
			</div>
			<div class="share_coper">
				<div class="add"></div>
				<div class="share"></div>
				<div class="voice"></div>
				<div class="mode"></div>
				<div class="lists"></div>
			</div>
		</div>
	</div> 
</template>

<script>
export default{
	data(){
		return{
			musicLists:['../../static/1.mp3','../../static/3.mp3'],
			curIndex:0,
			playing:false
		}
	},
　　 mounted(){
		var myMusic = document.getElementById('audio');
		myMusic.src = this.musicLists[0];
    },
	methods:{
		prev:function(){
			if(this.curIndex > 0 ){
				this.curIndex = this.curIndex -1;
			}else{
				this.curIndex = this.curIndex.length - 1;
			}
			var myMusic = document.getElementById('audio');
			myMusic.src = this.musicLists[this.curIndex];
			this.progressshow();
			myMusic.play();
			this.playing = true;
		},
		next:function(){
			if(this.curIndex < this.musicLists.length ){
				this.curIndex = this.curIndex +1;
			}else{
				this.curIndex = 0;
			}
			var myMusic = document.getElementById('audio');
			myMusic.src = this.musicLists[this.curIndex];
			this.progressshow();
			myMusic.play();
			this.playing = true;
		},
		togglePlay:function(){
			var this_ = this;
			var myMusic = document.getElementById('audio');

			if(!this.playing){
				myMusic.play();
				this.playing = true;
				this.$refs.togglePlaybtn.className = 'pause';
			}else{
				// alert('')
				myMusic.pause();
				this.playing = false;
				console.log(this.$refs.togglePlaybtn);
				this.$refs.togglePlaybtn.className = 'playLogo';
			}
			setInterval(function(){
				this_.showTime();
				this_.progressshow();
			},1000);
		},
		//进度条
		progressshow:function(){
			var allTime = document.getElementById('audio').duration;
			var curTime = document.getElementById('audio').currentTime;
			var range = curTime/allTime;
			this.$refs.load.style.width = (range*100) + '%';
		},
		//时间处理
		showTime:function(){
			var myMusic = document.getElementById('audio');
			var time = parseInt(myMusic.currentTime);
			var res = '00';
			if(time > 60){
				var mm = parseInt(time/60);
				if(mm< 10){
					res = '0' + mm;
				}else{
					res = mm;
				}
				res = res +':';
				var ss = time%60;
				if(ss <10){
					res += '0' +ss;
				}else{
					res += ss;
				}
			}else{
				res = res + ':';
				ss  = time;
				if(ss <10){
					res += '0' +ss;
				}else{
					res += ss;
				}
			}
			this.$refs.times.innerHTML = res;
		}
	}
};
</script>

<style scoped>
@media only screen and (min-width: 750px) and (max-width: 970px){
  .wrap{
    width: 90%;
  }
}
@media only screen and (min-width: 970px) and (max-width: 1024px){
  .wrap{
    width: 80%;
  }
}
@media only screen and (min-width: 1025px) {
  .wrap{
    width: 70%;
  }
}
.video{
	position: fixed;
	width: 100%;
	height: 53px;
	bottom: 0;
	background: url('../assets/playbar.png') repeat-x;
	/*z-index: 1001;*/
}
.wrap{
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.btns{}
.btns a{
	display: inline-block;
	width: 28px;
	height: 28px;
	color: #fff;
	background: url('../assets/playbar.png') no-repeat;
}
.btns a:nth-child(1){
	background-position: 0 -130px;
}
.btns a:nth-child(2){
	width: 34px;
	height: 34px;
}
.playLogo{
	background-position: 0 -204px !important;
}
.pause{
	background-position: 0 -165px !important;
}
.btns a:nth-child(3){
	background-position: -80px -130px;
}
.play{
	width: 70%;
	height: 53px;
	margin: 0 20px;
	display: flex;
	align-items: center;
}
.play div{
	background: url('../assets/playbar.png') no-repeat;
}
.songLogo{
	background-position: 0 -80px;
}
.play .songLogo img{
	width: 34px;
	height: 34px;
}
.play>div:nth-child(2){
	position: relative;
	/*width: 493px;*/
	width: 90%;
	height: 9px;
}
.play .progress{
	width: 100%;
	height: 9px;
	background: url('../assets/statbar.png') repeat-x;
	background-position: right 0px;
}
.play .load{
	position: absolute;
	/*width: 10px;*/
	height: 9px;
	left: 0;
	top: 0;
	background: url('../assets/statbar.png') repeat-x;
	background-position: right -66px;
}
.play .times{
	color: #fff;
	/*background-position: */
}
.share_coper{
	display: flex;
	align-items: center;
	width: 180px;
	height: 53px;
}
.share_coper div{
	width: 25px;
	height: 25px;
	background: url('../assets/playbar.png') no-repeat;
}
.share_coper .add{
	background-position: -88px -189px;
}
.share_coper .share{
	background-position: -114px -163px;
}
.share_coper .voice{
	background-position: -2px -248px;
}
.share_coper .mode{
	background-position: -33px -344px;
}
.share_coper .lists{
	background-position: -43px -73px;
	width: 60px;
}
</style>
