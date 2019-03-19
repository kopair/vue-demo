<template>
    <div class="list-todos">
  <!-- 绑定class，当items循环中的id等于我们设置的选中todoId时候,就会加上active这个calss,这样样式就会发生变化。-->
        <a @click="goList(item.id)" class="list-todo list activeListClass" :class="{'active': item.id === todoId}" v-for="item in items" :key="item.id">
            <span class="icon-lock" v-if="item.locked"></span>
            <span class="count-list" v-if="item.count > 0">{{item.count}}</span>
            {{item.title}}
        </a>
        <a class=" link-list-new" @click="addTodoList">
            <span class="icon-plus">
            </span>
            新增
        </a>
  </div>
</template>

<script>
import {getTodoList,addTodo} from '../api/api.js';
export default {
    data(){
        return {
            items:[],
            todoId:''
        };
    },
    created(){
        getTodoList({}).then(res=>{
            const TODOS =res.data.todos;
            this.items=TODOS;
            this.todoId=TODOS[0].id;
        });
    },
    methods:{
        goList(id){
            this.todoId=id;
        },
        addTodoList(){
            addTodo({}).then(res=>{
                getTodoList({}).then(res=>{
                    const TODOS=res.data.todos;
                    this.todoId=TODOS[TODOS.length - 1].id;
                    this.items = TODOS;
                });
            });
        }
    },
    watch:{
        'todoId'(id){
            this.$router.push({name:'todo',params:{id:id}});
        }
    }
};
</script>

<style lang="less">
@import '../common/style/menu.less';
</style>

