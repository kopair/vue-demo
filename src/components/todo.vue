<template>
    <div class="page lists-show">
        <nav>
            <div class="nav-group">
                <a class="nav-item">
                    <span class="icon-list-unordered"></span>
                </a>
            </div>
            <h1 class="title-page">
                <span class="title-wrapper">{{todo.title}}</span>
                <span class="count-list">{{todo.count}}</span>
            </h1>
            <div class="nav-group right">
                <div class="options-web">
                    <a class="nav-item">
                        <span class="icon-lock" v-if="todo.locked"></span>
                        <span class="icon-unlock" v-else></span>
                    </a>
                    <a class="nav-item">
                        <span class="icon-trash"></span>
                    </a>
                </div>
            </div>

            <div class="form todo-new input-symbol">
                <input type="text" v-model="text" placeholder="请输入" @keyup.enter="onAdd" :disabled="todo.locked">
                <span class="icon-add"></span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
