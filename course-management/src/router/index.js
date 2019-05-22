import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { resolve } from 'url';

Vue.use(Router)

const routes = [
  // {
  //   path:'/',
  //   component:resolve => require (["../components/HelloWorld.vue"],resolve)
  // },
  {
    path:'/',
    name:"curriculums",
    component:resolve => require (["../components/curriculums.vue"],resolve)
  },
  {
    path:"/curriculum",
    name:'curriculum',
    component:resolve => require (["../components/curriculum.vue"],resolve)
  },
  {
    path:"/task-list",
    name:"task-list",
    component:resolve => require (["../components/my/task-list.vue"],resolve)
  },
  {
    path:"/account-management",
    name:"account-management",
    component:resolve => require (['../components/my/account-management.vue'],resolve)
  },
  {
    path:"/upgrade-account",
    name:"upgrade-account",
    component:resolve => require (["../components/my/upgrade-account.vue"],resolve)
  },
  {
    path:"/learning-record",
    name:"learning-record",
    component:resolve => require (["../components/pages/learning-record.vue"],resolve)
  },{
    path:"/new-courses",
    name:"new-courses",
    component:resolve => require (["../components/pages/new-courses.vue"],resolve)
  },{
    path:"/preview-course",
    name:"preview-course",
    component:resolve => require (["../components/pages/preview-course.vue"],resolve)
  },{
    path:"/new-courses-center",
    component:resolve => require (["../components/pages/new-courses-center.vue"],resolve),
    children:[
      {
        path:'/',
        name:"chapter",
        component:resolve => require (["../components/pages/chapter.vue"],resolve)
      },{
        path:'/new-chapter',
        name:'new-chapter',
        component:resolve => require (["../components/pages/new-chapter.vue"],resolve)
      }
    ]
    
  },{
    path:"/new-courses-set-up",
    name:"new-courses-set-up",
    component:resolve => require (["../components/pages/new-courses-set-up.vue"],resolve)
  },{
    path:"/storage-space",
    component:resolve => require (["../components/pages/storage-space.vue"],resolve),
    children:[
      {
        path:'/',
        component:resolve => require (["../components/storage/video.vue"],resolve),
      },{
        path:'/video',
        component:resolve => require (["../components/storage/video.vue"],resolve),
      },{
        path:'/file',
        name:"file",
        component:resolve => require (["../components/storage/file.vue"],resolve),
      },{
        path:'/fileName',
        name:"fileName",
        component:resolve => require (["../components/storage/fileName.vue"],resolve),
      }
    ]
  },{
    path:"/modify-cover",
    name:"modify-cover",
    component:resolve => require (["../components/pages/modify-cover.vue"],resolve),  
  },
  {
    path:"/courseware-management",
    name:"courseware-management",
    component:resolve => require (["../components/courseware-management.vue"],resolve)
  },
  {
    path:"/network",
    name:"network",
    component:resolve => require (["../components/network/network.vue"],resolve)
  }
]

export default new Router({
  mode:'history',
  routes,
})
