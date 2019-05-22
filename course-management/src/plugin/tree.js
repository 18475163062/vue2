import '../../static/jstree/jstree.min'
import $ from '../../static/js/jquery-3.2.1.min'
const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $tree: {
      get () {
        return {
          init: function (option) {
            $('#' + option.id).jstree({
              'core': {
                'check_callback': function (operation, node, nodeParent, nodePosition, more) {
                  return !(node.id === 0)
                },
                'themes': {
                },
                'data': option.data,
                'multiple': false
              },
              'contextmenu': {
                'items': {
                  'add': {
                    'label': '新建子分类',
                    'action': function (obj) {
                      let inst = $.jstree.reference(obj.reference)
                      let newNode = inst.create_node(inst.get_node(obj.reference), '新建分类', 'last', '', '')
                      inst.edit(newNode, newNode.val, function (val, state, cancle) {
                        let id = inst.get_node(obj.reference).id
                        if (option.handleAdd) {
                          option.handleAdd(inst, id, inst.get_node(newNode))
                        }
                      })
                    },
                    '_disabled': function (obj) {
                      return $.jstree.reference(obj.reference).get_node(obj.reference).original.id === 0
                    }
                  },
                  'rename': {
                    'label': '重命名',
                    'action': function (obj) {
                      let inst = $.jstree.reference(obj.reference)
                      let clickedNode = inst.get_node(obj.reference)
                      inst.edit(obj.reference, clickedNode.val, function () {
                        option.handleRename && option.handleRename(clickedNode.id, clickedNode.text)
                      })
                    },
                    '_disabled': function (obj) {
                      return $.jstree.reference(obj.reference).get_node(obj.reference).original.id === 0
                    }
                  },
                  'delete': {
                    'label': '删除分类',
                    'action': function (obj) {
                      let inst = $.jstree.reference(obj.reference)
                      let clickedNode = inst.get_node(obj.reference)
                      inst.delete_node(obj.reference)
                      option.handleDelete && option.handleDelete(clickedNode.id)
                    },
                    '_disabled': function (obj) {
                      return $.jstree.reference(obj.reference).get_node(obj.reference).original.id === 0
                    }
                  }
                }
              },
              'search': {
                'ajax': {
                  'url': option.url,
                  'data': this.str,
                  'success': function () {
                    option.searchCallBack && option.searchCallBack()
                  }
                }
              },
              'plugins': ['contextmenu', 'wholerow', 'search']
            }).on('changed.jstree', function (node, action, selected, event) {
              console.log(action)
              option.handleChange && option.handleChange(action)
            })
          },
          setId (inst, node, newId) {
            inst.set_id(node, newId)
          },
          createRoot (id, handleAdd) {
            let inst = $.jstree.reference('#' + id)
            let newNode = inst.create_node('#', '新建分类', 'last', '', '')
            inst.edit(newNode, newNode.val, function () {
              handleAdd(inst, inst.get_node(newNode))
            })
          },
          searchCatalog (id, val) {
            $('#' + id).jstree('search', val)
          }
        }
      }
    }
  })
}
export default {
  install
}
