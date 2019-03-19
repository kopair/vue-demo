<template>
    <div class="list-todos">
        <a @click="goList(item.id)" :class="{'active':item.id ===todoId}" class="list-todo list activeListClass" v-for="item in items" :key="item.id"> <!-- v-for 列表渲染-->
            <span class="icon-lock" v-if="item.locked"></span> <!-- v-if 条件渲染-->
            <span class="count-list" v-if="item.count > 0">{{item.count}}</span>
            {{item.title}}   <!-- 数据绑定，看模板语法-->
        </a>
        <a class="link-list-new" @click="addTodoList">
            <span class="icon-plus"></span>
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
                getTodoLits({}).then(res=>{
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

