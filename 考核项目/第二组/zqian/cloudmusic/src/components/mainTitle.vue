<template>
  <div class="mainTitle">
  		<div class="left">
 			<span class="icon"></span>
 			<span class="title">{{titletxt}}</span>
 			<div class="nav" v-if="hasnav">
				<ul>
					<li>
						<router-link to='/'>
							<span class="select">华语</span>|
						</router-link>
					</li>
					<li>
						<router-link to='/mymusic'>
							<span>流行</span>|
						</router-link>
					</li>
					<li>
						<router-link to='/'>
							<span>推荐</span>|
						</router-link>
					</li>
					<li>
						<router-link to='/'>
							<span>民谣</span>|
						</router-link>
					</li>
					<li>
						<router-link to='/'>
							<span>电子</span>|
						</router-link>
					</li>
				</ul>
			</div>
  		</div>
		<div class='more'>
			<span class="moretxt">更多</span>
			<span class="gomore"></span>
		</div>
  </div>
</template>

<script>
export default {
  name: 'mainTitle',
  data () {
    return {
      // titletxt: '',
      // hasnav:false
    }
  },
  props:['hasnav','titletxt'],
};
</script>


<style scoped>
div,ul,li{
	margin: 0;
	padding: 0;
}
.select{

}
.mainTitle{
	height: 33px;
    padding: 0 10px;
    border-bottom: 2px solid #C10D0C;
    display: flex;
    justify-content: space-between;
}
.left{
	/*width:18%;*/
	height:100%;
	display: flex;
}
.left span{
	display: inline-block;
}
.left .icon{
	width: 33px;
    height: 33px;
    background: url("../assets/index.png") no-repeat;
    background-position: -230px -154px;
}
.left .title{
	height: 33px;
	line-height: 33px;
	font-size: 20px;
	color: #333;
}
.nav{

}
.nav ul{
	display: flex;
    align-items: center;
    justify-content: space-around;
}
.nav ul li{
	list-style: none;
}
.nav a{
	color: #666;
}
.nav li span{
	display: inline-block;
	height: 12px;
	padding: 0 10px;
	font-size: 12px;
	line-height: 33px;
	color: #666;
}
.more{
	display: flex;
	align-items: center;
}
.more span{
	display: inline-block;
	cursor: pointer;
}
.more .moretxt{
	font-size: 12px;
	color:#666;
}
.more .gomore{
	width: 23px;
    height: 23px;
    margin-left: 10px;
    background: url("../assets/index.png") no-repeat;
    background-position: 0px -233px;
}
</style>