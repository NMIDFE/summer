<template>
  <div class="header">
  		<div class="logo">
  			<!-- <img src="./img/topbar.png"> -->
  		</div>
		<div class="nav"></div>
		<div class='search_login'></div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>


<style scoped>

.logo{
	background:url(./img/topbar.png) no-repeat;
	background-position:0 -20px;
}
</style>