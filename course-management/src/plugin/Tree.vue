<template>
  <div :style="{width: width}" style="min-width:200px;border: 1px solid #929292;background-color: #fff;flex-grow: 0">
    <div style="font-size: 20px;padding: 10px 14px;font-weight: 600;border-bottom: 1px solid #dadada">{{title}}</div>
    <div style="padding:10px 14px">
      <p style="font-size: 14px;color: #3c763d;background-color: #eef7ea;padding: 5px;border-left: 4px solid #bbdba1 ">提示：需要新建子分类、重命名、删除分类，请单击右键操作</p>
      <button @click="addRootCatalog" style="cursor: pointer;width: 100%;display: block;border:none;height: 34px;line-height: 34px;text-align: center;background-color: #00a200;color: #fff;margin-top: 10px">新建根分类</button>
      <div style="display: flex;margin-top: 10px">
        <input style="flex-grow: 1;height: 34px;outline: none;border: 1px solid #e0e0e0;padding: 0 10px;box-sizing: border-box;" placeholder=""/>
        <button class="el-icon-search" style="cursor: pointer;font-size: 20px;flex-grow: 0;height: 34px;width: 60px;border: none;color: #fff;outline: none;background-color: #adadad">
          <!-- <font-awesome-icon style="font-size: 20px" icon="search"></font-awesome-icon> -->
        </button>
      </div>
      <div id="tree1" style="margin-top: 10px;font-size: 14px">
      </div>
    </div>
  </div>
</template>
<script>
import {getCatalogList, insertCatalog, updateCatalog, deleteCatalog} from '../service/getData.js'
export default{
  props: [
    'api', 'title', 'width'
  ],
  mounted () {
    let _this = this
    getCatalogList(this.api.getUrl, 1).then(res => {
      let arr = [
        {
          id: 0,
          text: '所有分类',
          state: {
            selected: false
          }
        }
      ]
      for (let i = 0; i < res.data.data.list.length; i++) {
        let obj = {id: res.data.data.list[i].id, text: res.data.data.list[i].name}
        addChildren(obj, res.data.data.list[i].children)
        arr.push(obj)
      }
      // 添加子节点递归函数
      function addChildren (parentJson, children) {
        let arr = []
        if (children !== undefined && children.length !== 0) {
          for (let i = 0; i < children.length; i++) {
            let childrenJson = {id: children[i].id, text: children[i].name}
            arr.push(childrenJson)
            addChildren(childrenJson, children[i].children)
          }
          parentJson.children = arr
        }
      }
      let tree = this.$tree
      tree.init({
        id: 'tree1',
        data: arr,
        handleAdd: function (inst, id, node) {
          insertCatalog(_this.api.insertUrl, {parent_id: id, name: node.text, user_id: 1}).then(res => {
            if (res.data.code !== 200) {
              alert('添加分类失败')
            } else {
              tree.setId(inst, node, res.data.data.id)
            }
          })
        },
        handleRename: function (id, val) {
          updateCatalog(_this.api.updateUrl, {id: id, name: val}).then(res => {
            if (res.data.code !== 200) {
              alert('重命名失败,请重新操作')
            }
          })
        },
        handleDelete: function (id) {
          deleteCatalog(_this.api.deleteUrl, {id: id}).then(res => {
            if (res.data.code !== 200) {
              alert('删除分类失败,请重新操作')
            }
          })
        }
      })
    })
  },
  methods: {
    addRootCatalog () {
      this.$tree.createRoot('tree1', (inst, node) => {
        console.log(node)
        insertCatalog(this.api.insertUrl, {name: node.text, user_id: 1}).then(res => {
          res.data.code === 200 && this.$tree.setId(inst, node, res.data.data.id)
        })
      })
    }
  }
}
</script>
