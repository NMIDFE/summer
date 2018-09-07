<template>
  <div class="CD">
 	<div class="pic-groups" ref='lunbo'>
 		<div class="group">
 			<div class="pic">
 				<img src="../assets/img1.jpg"/>
 				<span class="bg"></span>
 				<p>Queen</p>
 				<p>Nicki Minaj</p>	
 			</div>
 			<div class="pic">
 				<img src="../assets/img2.jpg"/>
 				<span class="bg"></span>	
 				<p>TROUBLE</p>
 				<p>浜崎あゆみ</p>	
 			</div>
 			<div class="pic">
 				<img src="../assets/img3.jpg"/>
 				<span class="bg"></span>
 				<p>Queen</p>
 				<p>Nicki Minaj</p>		
 			</div>
 			<div class="pic">
 				<img src="../assets/img4.jpg"/>
 				<span class="bg"></span>	
 				<p>Hold Me Down</p>
 				<p>吴亦凡</p>	
 			</div>
 			<div class="pic">
 				<img src="../assets/img5.jpg"/>
 				<span class="bg"></span>	
 				<p>香蜜沉沉烬如霜</p>
 				<p>电视原声音乐专辑群星</p>	
 			</div>
 			
 		</div>
 		<div class="group">
 			<div class="pic">
 				<img src="../assets/img6.jpg"/>
 				<span class="bg"></span>
 				<p>Queen</p>
 				<p>Nicki Minaj</p>	
 			</div>
 			<div class="pic">
 				<img src="../assets/img7.jpg"/>
 				<span class="bg"></span>	
 				<p>TROUBLE</p>
 				<p>浜崎あゆみ</p>	
 			</div>
 			<div class="pic">
 				<img src="../assets/img8.jpg"/>
 				<span class="bg"></span>
 				<p>Queen</p>
 				<p>Nicki Minaj</p>		
 			</div>
 			<div class="pic">
 				<img src="../assets/img1.jpg"/>
 				<span class="bg"></span>	
 				<p>Hold Me Down</p>
 				<p>吴亦凡</p>	
 			</div>
 			<div class="pic">
 				<img src="../assets/img2.jpg"/>
 				<span class="bg"></span>	
 				<p>香蜜沉沉烬如霜</p>
 				<p>电视原声音乐专辑群星</p>	
 			</div>
 			
 		</div>

 		<div class="btns">
 			<span id="prev" @click='prev'> < </span>
 			<span id="next" @click='next'>> </span>
 		</div>
 	</div>
  </div>
</template>

<script>
export default {
  name: 'CD',
  data () {
    return {
      msg: '',
      curGroup:'',
      oldGroup:''
    }
  },
  mounted(){
  	this.curGroup = this.$refs.lunbo.firstChild;
  	this.$refs.lunbo.firstChild.style.display ='flex';
  },
  methods:{
  	prev:function(){
  		if(this.curGroup.previousElementSibling){
  			this.oldGroup = this.curGroup;
  			this.curGroup = this.curGroup.previousElementSibling;
	  		this.curGroup.style.display ='flex';
	  		this.oldGroup.style.display = 'none';
  		}else{
  			this.oldGroup = this.curGroup;
  			this.curGroup = this.$refs.lunbo.lastChild.previousElementSibling;
  			// alert('已将到最前面');
  		}
  		this.curGroup.style.display ='flex';
  		this.oldGroup.style.display = 'none';
  	},
  	next:function(){
  		if(this.curGroup.nextElementSibling.nextElementSibling){
  			this.oldGroup = this.curGroup;
  			this.curGroup = this.curGroup.nextElementSibling;
  		}else{
  			this.oldGroup = this.curGroup;
  			this.curGroup = this.$refs.lunbo.firstChild;
  			// alert('已将到最后面');
  		}
		this.curGroup.style.display ='flex';
  		this.oldGroup.style.display = 'none';
  	}
  }
};
</script>


<style scoped>
div,ul,li,p{
	margin: 0;
	padding: 0;
}
.CD{
	position: relative;
    zoom: 1;
    padding: 43px 0;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;
}
.pic-groups{
	padding: 0 40px;
	height: 100%;
}
.group{
	/*float: left;*/
	display: none;
	height: 100%;
	/*display: flex;*/
	justify-content: space-around;
	align-items: center;
}
.group .pic{
	position: relative;
	padding-right: 20px;
}

.group span{
	display: inline-block;
	position: absolute;
	right: 0;
	top: 0;
	width: 20px;
	height: 100px;
	background: url("../assets/coverall.png") no-repeat;
	background-position: -130px -855px;
}
.group .pic p{
	font-size: 10px;
	/*text-align: left;*/
	/*padding: 0 10px;*/
}
.group .pic p:nth-child(1){
	color: #000;
}
.group .pic p:nth-child(2){
	color: #333;
}
.btns{

}
.btns span{
	position: absolute;
	top: 83px;
	font-size: 12px;
	font-weight: 1000;
}
.btns span:hover{
  cursor: pointer;
}
.btns #prev{
	left: 10px;
}
.btns #next{
	right: 10px;
}
</style>