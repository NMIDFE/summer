<template>
  <div class="Crunchies">
  		<div class="left">
 			<img :src="imgUrl">
  		</div>
		<div class='right'>
			<p class="title">{{titletxt}}</p>
			<p>
				<span class="play"></span>
				<span class="add"></span>
			</p>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Crunchies',
  data () {
    return {
      // titletxt: '',
      // imgUrl:''
    }
  },
  props:['titletxt','imgUrl'],
};
</script>


<style scoped>
div,ul,li{
	margin: 0;
	padding: 0;
}

.Crunchies{
	height: 100px;
	display: flex;
    padding: 20px 0 0 19px;
    background: #f5f5f5;
    border: 1px solid #d3d3d3;
    border-bottom: none;
}
.left{

}
.left img{
	width: 80px;
	height: 80px;
	box-shadow: 0 2px 2px 1px rgba(0,0,0,.3);
}
.right .title{
	font-size: 14px;
	font-weight: 1000;
	color: #333;
	padding-left: 10px;
}
.right span{
	display: inline-block;
	width: 20px;
	height: 20px;
}
.right span.play{
	background: url("../assets/index.png") no-repeat;
	background-position: -265px -267px;
	margin-right: 10px;
}
.right span.add{
	background: url("../assets/index.png") no-repeat;
	background-position: -295px -267px;
}
</style>