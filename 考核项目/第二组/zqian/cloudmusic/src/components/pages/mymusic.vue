<template>
	<div class="mymusic">
		<Head></Head>
		<div class="wrapcnt">
			<div class="left">
				<MusicBar></MusicBar>
			</div>
			<div class="right">
				<PlayList></PlayList>
			</div>
		</div>
	</div>
</template>

<script>
import PlayList from '@/components/playlist'
import Head from '@/components/head'
import MusicBar from '@/components/musicbar'
export default{
	name:'mymusic',
	data(){
		return{

		}
	},
	mounted:function(){
		console.log(this.$router.params);
	},
	components:{
		PlayList,
		Head,
		MusicBar
	}
};
</script>

<style scoped>
div,ul,li,p{
	margin: 0;
	padding: 0;
}
.mymusic{

}
.wrapcnt{
	width: 80%;
	margin: 0 auto;
	display: flex;
}
.wrapcnt .left{
	width: 30%;
	min-height: 750px;
	background: #f9f9f9;
}
.wrapcnt .right{
	width: 70%;
}
</style>