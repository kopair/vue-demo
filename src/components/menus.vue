<template>
    <div class="list-todos">
        <a @click="goList(item.id)" :class="{'active': item.id ===todoId}" class="list-todo activeListClass list" v-for="item in items" :key="item.id">
            <span class="icon-lock" v-if="item.locked"></span>
            <span class="count-list" v-if="item.count">{{item.count}}</span>
            {{item.title}}
        </a>
        <a class="link-list-new">
            <span class="icon-plus"></span>
            新增
        </a>
    </div>
</template>

<script>
import {getTodoList , addTodo} from '../api/api';
export default {
    data(){
        return {
            items:[],
            todoId:''
        };
    },
    created(){
        getTodoList({}).then(res => {
            const TODOS = res.data.todos;
            this.items=TODOS;
            this.todoId=TODOS[0].id;
        })
    },
    methods:{
        goList(id){
            this.todoId = id;
        }
    }
}
</script>

<style lang="less">
@import '../common/style/menu.less';
</style>
