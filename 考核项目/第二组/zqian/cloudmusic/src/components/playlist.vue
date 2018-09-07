<template>
	<div class="playlist">
		<div class="top">
			<div class="icon">
				<img id="flag_cover" src="http://p1.music.126.net/nhD1JoCQ_0DD4WkZ5DNR6g==/19173283765744024.jpg?param=200y200">
				<span class="mask"></span>
			</div>
			<div class="operation">
				<div class="menu-title">
					<span></span>
					<span class="bigger">我喜欢的音乐</span>
				</div>
				<div class="menu-info">
					<span class="userlogo"></span>
					<span class="username"></span>
					<span class="createtime">2018-06-09 创建</span>	
				</div>
				<div class="btns">
					<span><i></i>播放</span>
					<span><i></i>收藏</span>
					<span><i></i>分享</span>
					<span><i></i>下载</span>
					<span><i></i>评论</span>
				</div>
			</div>
		</div>
		<div class="menu">
			<div class="title">
				<span class="bigger">歌曲列表</span>
				<span>1首歌</span>
			</div>
			<div class="songs">
				<div class="thead">
					<span></span>
					<span>歌曲标题</span>
					<span>时长</span>
					<span>歌手</span>
					<span>专辑</span>
				</div>
				<div class="tbody" v-for="item in songs">
					<span>{{item.index}}</span>
					<span>{{item.title}}</span>
					<span>{{item.time}}</span>
					<span>{{item.singer}}</span>
					<span>{{item.special}}</span>
				</div>
			</div>
		</div>
		<div class="comment">
			<div class="title">
				<span class="bigger">评论</span>
				<span>公有0条评论</span>
			</div>
			<div class="comments">
				<div class="userlogo">
					<img id="flag_cover" src="http://p1.music.126.net/rqcT2ROk2FgelXvjQsMnDA==/109951163341344974.jpg?param=200y200">
				</div>
				<div class="commentarea">
					<textarea rows='6' cols='80'></textarea>
					<div class="button">
						<div class="emotions">
							<span></span>
							<span></span>
						</div>
						<div class="sub">
							<span>14</span>
							<button>评论</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'playlist',
	data(){
		return{
			songs:[{
				"index":"1",
				"title":"我们",
				"time":"04:20",
				"singer":"陈奕迅",
				"special":"我们"
			}]
		}
	}
};

</script>

<style scoped>
div,ul,li,p{
	margin: 0;
	padding: 0;
}
span{
	display: inline-block;
}
.bigger{
	font-size: 20px;
}
.playlist{
	background: #fff;
	border: 1px solid #e4e4e4;
	margin-right: 10%;
}
.playlist .top{
	padding: 40px;
	display: flex;

}
.playlist .top .icon{
	background: url();
}
.operation .menu-title{
	display: flex;
	align-items: center;
}
.operation .menu-title span{
	margin: 10px;
}
.operation .menu-title span:nth-child(1){
	display: inline-block;
	width: 54px;
	height: 24px;
	background: url('../assets/icon.png') no-repeat;
	background-position: 0 -243px;
}
.menu-info{
	display: flex;
	align-items: center;
}
.menu-info span{
	margin: 10px;
}
.menu-info .userlogo{
	width: 40px;
	height: 40px;
	background: url('http://p1.music.126.net/rqcT2ROk2FgelXvjQsMnDA==/109951163341344974.jpg?param=200y200') no-repeat;
	background-size: cover;
}
.btns span{
	position: relative;
	display: inline-block;
	padding-left: 28px;
	padding-right: 5px;
	height: 31px;
	color: #333;
	font-size: 12px;
	line-height: 31px;
	margin: 10px;
}
.btns i{
	position: absolute;
	display: inline-block;
	width: 5px;
	height: 31px;
	right: -5px;
	background: url('../assets/button2.png') no-repeat;
	background-position: -247px -101px;
}
.btns span:nth-child(1) i{
	background: url('../assets/button2.png') no-repeat;
	background-position: -245px -675px;
}
.btns span:nth-child(2) i{
	background: url('../assets/button2.png') no-repeat;
	background-position: -247px -347px;
}
.btns span:nth-child(1){
	background: url('../assets/button2.png') no-repeat;
	background-position: 0 -632px;
	color: #fff;
}
.btns span:nth-child(2){
	background: url('../assets/button2.png') no-repeat;
	background-position: 0 -1149px;
	color: #bebebe;
}
.btns span:nth-child(3){
	background: url('../assets/button2.png') no-repeat;
	background-position: 0 -1225px;
}
.btns span:nth-child(4){
	background: url('../assets/button2.png') no-repeat;
	background-position: 0 -2805px;
}
.btns span:nth-child(5){
	background: url('../assets/button2.png') no-repeat;
	background-position: 0 -1509px;
}
.menu .title,.comment .title{
	padding: 0 10px 0 32px;
	text-align: left;
	border-bottom: 2px solid #c20c0c;
}
.menu .title span:nth-child(1),.comment .title span:nth-child(1){
	font-size: 20px;
	color: #333;
}
.menu .title span:nth-child(2),.comment .title span:nth-child(2){
	font-size: 12px;
	color: #666;
	padding: 9px 0 0 20px;
}
.menu{
	padding-right:10%;
	font-size: 11px;
}
.menu .songs .thead{
	background: #f2f2f2;
	padding: 8px;
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #dadada;
}
.menu .songs .tbody{
	background: #f7f7f7;
	padding: 6px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #e3e3e3;
}
.comment{
	padding-right: 10%;
}
.comment .comments{
	display: flex;
	padding: 20px 0;
}
.comment .comments img{
	width: 60px;
	height: 60px;
	padding: 0 5px;
}
.comments textarea{
	border: 1px solid #bbb;
}
.comments .button{
	display: flex;
	justify-content: space-between;
}
.comment .emotions span{
	width: 20px;
	height: 20px;
	background: url('../assets/icon.png') no-repeat;
}
.comment .emotions span:nth-child(1){
	background-position: -40px -488px;
}
.comment .emotions span:nth-child(2){
	background-position: -60px -488px;
}
.comments button{
	background: #2c7dca;
	padding: 5px 10px;
	outline: none;
	border: none;
	border-radius: 3px;
	color: #fff;
}
.comments button:hover{
	cursor: pointer;
}
</style>