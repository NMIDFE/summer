<template>
	<div class="musicbar">
		<div class="operations">
			<p>
				<span class="toggle-spread"></span>
				<span>创建歌单（1）</span>
			</p>
			<button>+新建</button>
		</div>
		<ul class="menu">
			<li>
				<div>
					<img src="http://p1.music.126.net/nhD1JoCQ_0DD4WkZ5DNR6g==/19173283765744024.jpg?param=40y40">
				</div>
				<div class="txt">
					<p>我喜欢的音乐</p>
					<p>1首</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	
</script>

<style scoped>
div,ul,li,p{
	margin: 0;
	padding: 0;
}
.musicbar{
	padding: 40px;
	font-size: 12px;
}
.musicbar .operations{
	display: flex;
	justify-content: space-between;
}
.musicbar .toggle-spread{
    border-color: #ccc transparent transparent;
    border-style: solid dashed dashed;
    border-width: 8px 7px 0;
}
.musicbar .toggle-spread:hover{
	cursor: pointer;
}
.musicbar button{
	background: #f3f3f3;
	border: 1px solid #dbdbdb;
	border-radius: 2px;
	color: #666;
	font-size: 12px;
}
.musicbar button:hover{
	cursor: pointer;
}
.menu li{
	display: flex;
	background: #e6e6e6;
	padding: 5px;
	margin: 5px;
}
.menu .txt{
	padding-left: 10px;
	line-height: 24px;
}
</style>