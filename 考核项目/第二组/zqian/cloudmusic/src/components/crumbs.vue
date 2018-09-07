<template>
  <div class="crumbs">
  		<div class="left">
 
  		</div>
		<div class="nav">
			<ul>
				<li>
					<router-link to='/'>
						<span class="select">推荐</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
				<li>
					<router-link to='/mymusic'>
						<span>排行榜</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span>歌单</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span>主播电台</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span>歌手</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span>新碟上架</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
			</ul>
		</div>
		<div class='search_login'>
	
		</div>
  </div>
</template>

<script>
export default {
  name: 'crumbs',
  data () {
    return {
      msg: ''
    }
  }
};
</script>


<style scoped>
div,ul,li{
	margin: 0;
	padding: 0;
}
.select{
    background: #9B0909;
    border-radius: 20px;
}
.crumbs{
	width: 80%;
	padding:0 10%;
	display: flex;
	height:34px;
	background: #C20C0C;
	border: 1px solid #a40011;
	color: #ccc;
	font-size: 14px;
	min-width: 970px;
}
.left{
	width:10%;
	height:100%;
}
.nav{
	width: 55%;
}
.nav ul{
	display: flex;
    align-items: center;
    justify-content: space-around;
}
.nav ul li{
	list-style: none;
}
.nav ul li:hover{
    background: #9B0909;
    border-radius: 20px;
}
.nav li span{
	display: inline-block;
	height: 34px;
	padding: 0 10px;
	line-height: 34px;
	color: #fff;
}
.search_login{
	width: 35%;
	display: flex;
}

</style>