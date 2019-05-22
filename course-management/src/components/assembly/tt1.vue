<template>
    <div><tag-input :tags="tags" max="3">fssfs</tag-input> 
        <!-- <div >
            <div class="input field is-grouped" v-on:click="popup=true" style="margin-bottom:0">
                <div class="control" v-for="(item) in selected"  v-on:click.stop="">
                    <div class="tags has-addons is-medium">
                        <span class="tag is-link">{{ item }}</span>
                        <a v-on:click="move(item,false);" class="tag is-delete"></a>
                    </div>
                </div>
             </div>
            <ul class="is-hoverable" v-show="popup">
                <li v-for="tag in tags" :key="tag.id" v-on:click="move(tag,true);popup=false;">{{ tag }}</li>
            </ul>
        </div> -->
    </div>
</template>
<script>
export default {
    // data(){
    //     return{
    //         popup:false,
    //         selected:[],
    //        tags:[{
    //            id:1,
    //            name:'标签1',
    //        },{
    //            id:2,
    //            name:'标签1',
    //        },{
    //            id:3,
    //            name:'标签1',
    //        },{
    //            id:4,
    //            name:'标签1',
    //        },{
    //            id:5,
    //            name:'标签1',
    //        },
    //        ]
    //     }
    // },
    // methods: {
    //     move: function(item, flag) {
    //         var from = flag ? this.tags : this.selected;
    //         var to = flag ? this.selected : this.tags;
    //         if (!flag || to.length < this.max) {
    //             from.splice(from.indexOf(item), 1);
    //             to.push(item);
    //         }
    //     },
    // }
}
</script>
