<template>
  <div class="author">
    <div class="title">
      <p>入驻歌手</p>
      <p>查看全部>></p>
    </div>
   <div class="authorItem">
      <div class="head">
        <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62">
      </div>
      <div class="info">
        <p>张惠妹aMEI</p>
        <p>台湾歌手张惠妹</p>
      </div>
   </div>
   <div class="authorItem">
      <div class="head">
        <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62">
      </div>
      <div class="info">
        <p>张惠妹aMEI</p>
        <p>台湾歌手张惠妹</p>
      </div>
   </div>
   <div class="authorItem">
      <div class="head">
        <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62">
      </div>
      <div class="info">
        <p>张惠妹aMEI</p>
        <p>台湾歌手张惠妹</p>
      </div>
   </div>
   <div class="authorItem">
      <div class="head">
        <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62">
      </div>
      <div class="info">
        <p>张惠妹aMEI</p>
        <p>台湾歌手张惠妹</p>
      </div>
   </div>
   <div class="authorItem">
      <div class="head">
        <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62">
      </div>
      <div class="info">
        <p>张惠妹aMEI</p>
        <p>台湾歌手张惠妹</p>
      </div>
   </div>
   <button class="btn">申请成为音乐人</button>
  </div>
</template>

<script>
export default {
  name: 'author',
  data () {
    return {
      msg: '',
      authorLists:[

      ]
    }
  },
};
</script>


<style scoped>
div,ul,li,p{
  margin: 0;
  padding: 0;
}
.author{
  margin: 6px 0 14px 20px;
}
.author .title{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #333;
  padding: 0 10px;
}
.authorItem{
  margin-top: 6px;
  background: #fafafa;
  display: flex;
  font-size: 12px;
  text-align: left;
  padding-left: 10px;
  border: 1px solid #e5e5e5;
}
.author .head{
  width: 62px;
  height: 61px;
}
.author .info{
  line-height: 29px;
}
.author .btn{
  padding:3px 10px;
  margin: 5px auto;
  font-size: 12px;
}
.author .btn:hover{
  cursor: pointer;
}
</style>