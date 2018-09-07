<template>
  <div class="hotsearch">
  		<div class="hotItem" v-for='item in catalogue'>
  			<div class="head">
				<Crunchies :titletxt='item.titletxt' :imgUrl='item.imgUrl'></Crunchies>
  			</div>
  			<div class="musicLists">
  				<ul>
  					<li v-for='list in item.musicLists'>
  							<span>{{list.index}}</span> 
  							<span>{{list.name}}</span> 
  					</li>
  				</ul>
		  		<div class="more">查看全部 > </div>
  			</div>
  		</div>
  </div>
</template>

<script>
import Crunchies from '@/components/Crunchies'

export default {
  name: 'hotsearch',
  data () {
    return {
       msg: '',
       catalogue:[
       		{
		    "titletxt": "云音乐飙升榜",
		    "imgUrl":"http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100",
		    "musicLists": [
		        {
		            "index": "1",
		            "name": "Attention"
		        },
		        {
		            "index": "2",
		            "name": "On&On"
		        },
		        {
		            "index": "3",
		            "name": "Happier"
		        },
		        {
		            "index": "4",
		            "name": "至尊宝"
		        },
		        {
		            "index": "5",
		            "name": "Promises"
		        },
		        {
		            "index": "6",
		            "name": "听你说晚安"
		        },
		        {
		            "index": "7",
		            "name": "星球坠落 (Live)"
		        },
		        {
		            "index": "8",
		            "name": "Lover Boy 88"
		        },
		        {
		            "index": "9",
		            "name": "我爱你"
		        },
		        {
		            "index": "10",
		            "name": "心里日记"
		        }
		    ]
			},{
		    "titletxt": "云音乐新歌榜",
		    "imgUrl":"http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100",
		    "musicLists": [
			        {
			            "index": "1",
			            "name": "Attention"
			        },
			        {
			            "index": "2",
			            "name": "2On&On"
			        },
			        {
			            "index": "3",
			            "name": "3Happier"
			        },
			        {
			            "index": "4",
			            "name": "至尊宝"
			        },
			        {
			            "index": "5",
			            "name": "Promises"
			        },
			        {
			            "index": "6",
			            "name": "听你说晚安"
			        },
			        {
			            "index": "7",
			            "name": "星球坠落 (Live)"
			        },
			        {
			            "index": "8",
			            "name": "Lover Boy 88"
			        },
			        {
			            "index": "9",
			            "name": "我爱你"
			        },
			        {
			            "index": "10",
			            "name": "心里日记"
			        }
			    ]
		    },{
			    "titletxt": "云音乐韩语榜",
			    "imgUrl":"http://p3.music.126.net/vs-cMh49e6qPEorHuhU07A==/18737877162497499.jpg?param=100y100",
			    "musicLists": [
			        {
			            "index": "1",
			            "name": "Attention"
			        },
			        {
			            "index": "2",
			            "name": "2On&On"
			        },
			        {
			            "index": "3",
			            "name": "3Happier"
			        },
			        {
			            "index": "4",
			            "name": "至尊宝"
			        },
			        {
			            "index": "5",
			            "name": "Promises"
			        },
			        {
			            "index": "6",
			            "name": "听你说晚安"
			        },
			        {
			            "index": "7",
			            "name": "星球坠落 (Live)"
			        },
			        {
			            "index": "8",
			            "name": "Lover Boy 88"
			        },
			        {
			            "index": "9",
			            "name": "我爱你"
			        },
			        {
			            "index": "10",
			            "name": "心里日记"
			        }
			    ]
			}
	  ]
    }
  },
  components:{Crunchies}
};
</script>


<style scoped>
div,ul,li{
	margin: 0;
	padding: 0;
}
.hotsearch{
	/*width: 30%;*/
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	color: #000;
	font-size: 14px;
}
.hotItem{
	width: 33%;
}
.musicLists{
    border: 1px solid #d3d3d3;
    border-top: none;
}
.musicLists li{
	list-style: none;
	font-size: 12px;
	height: 32px;
	line-height: 32px;
	text-align: left;
}
.musicLists li:nth-child(even){
	background: #f5f5f5;
}
.musicLists li:nth-child(odd){
	background: #e5e5e5;
}
.musicLists li span:nth-child(1){
	padding: 0 20px;
}
.more{
	height: 32px;
	line-height: 32px;
	font-size: 12px;
	text-align: right;
	padding-right: 20px;
	background: #e5e5e5;
}
.more:hover{
	text-decoration: underline;
	cursor: pointer;
}
</style>