<template>
  <div class="anchor">
    <div class="title">
      <p>热门主播</p>
    </div>
   <div class="anchorItem">
      <div class="head">
        <img src="http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40">
      </div>
      <div class="info">
        <p>DJ晓苏 </p>
        <p>独立DJ，CRI环球旅游广播特邀DJ</p>
      </div>
   </div>
   <div class="anchorItem">
      <div class="head">
        <img src="http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40">
      </div>
      <div class="info">
        <p>DJ晓苏 </p>
        <p>独立DJ，CRI环球旅游广播特邀DJ</p>
      </div>
   </div>
   <div class="anchorItem">
      <div class="head">
        <img src="http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40">
      </div>
      <div class="info">
        <p>DJ晓苏 </p>
        <p>独立DJ，CRI环球旅游广播特邀DJ</p>
      </div>
   </div>
   <div class="anchorItem">
      <div class="head">
        <img src="http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40">
      </div>
      <div class="info">
        <p>DJ晓苏 </p>
        <p>独立DJ，CRI环球旅游广播特邀DJ</p>
      </div>
   </div>
   <div class="anchorItem">
      <div class="head">
        <img src="http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40">
      </div>
      <div class="info">
        <p>DJ晓苏 </p>
        <p>独立DJ，CRI环球旅游广播特邀DJ</p>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'anchor',
  data () {
    return {
      msg: '',
      anchorLists:[

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
.anchor{
  margin: 6px 0 14px 20px;
}
.anchor .title{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #333;
  padding: 0 10px;
}
.anchorItem{
  margin-top: 6px;
  padding: 5px;
  background: #fafafa;
  display: flex;
  font-size: 10px;
  text-align: left;
  padding-left: 10px;
  border: 1px solid #e5e5e5;
}
.anchor .head{
  width: 42px;
  height: 42px;
}
.anchor .info p{
    line-height: 21px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80%;
    padding-left: 10px;
}

</style>