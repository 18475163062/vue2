<template>
  <div style="width: 800px;display: flex">
    <ul style="width: 120px" class="ul1">
      <li @click="images = item.images" v-for="(item, index) in data" :key="item.id">{{item.typeName}}</li>
    </ul>
    <div style="flex-grow: 1">
      <ul id="ul2">
        <li :key="item.id" v-for="item in images">
          <img :src="item.url">
        </li>
        <li v-if="images.length === 0" :key="item.id" v-for="item in data[0].images">
          <img :src="item.url">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      images: [],
      data: [
        {
          id: 1,
          typeName: '我的上传',
          images: [
            {
              url: 'http://img3.imgtn.bdimg.com/it/u=1752243568,253651337&fm=26&gp=0.jpg'
            },
            {
              url: 'http://img3.imgtn.bdimg.com/it/u=1752243568,253651337&fm=26&gp=0.jpg'
            }
          ]
        },
        {
          id: 2,
          typeName: '党建封面',
          images: [
            {
              url: 'http://img1.imgtn.bdimg.com/it/u=1393987749,3422146058&fm=26&gp=0.jpg'
            },
            {
              url: 'http://img1.imgtn.bdimg.com/it/u=1393987749,3422146058&fm=26&gp=0.jpg'
            }
          ]
        },
        {
          id: 3,
          typeName: '教育封面',
          images: [
            {
              url: 'http://img2.imgtn.bdimg.com/it/u=1688631197,3554659657&fm=26&gp=0.jpg'
            },
            {
              url: 'http://img2.imgtn.bdimg.com/it/u=1688631197,3554659657&fm=26&gp=0.jpg'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped="">
  .ul1{
    list-style: none;
  }
  .ul1 li{
    padding: 10px 8px;
    background-color: #8e84ff;
    color: #fff;
  }
  #ul2{
    list-style: none;
  }
  #ul2 li{
    display: inline-block;
    margin-right: 12px;
  }
  #ul li img{
    width: 120px;
    height: 80px;
    display: block;
  }
</style>
