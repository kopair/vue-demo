<template>
    <div class="list-item editingClass editing">
        <label class="checkbox">
            <input type="checkbox" v-model="item.checked">
            <span class="checked-custom"></span>
        </label>
        <input type="text" v-model="item.text" placeholder="写点啥！">
        <a class="detele-item">
            <span class="icon-trash"></span>
        </a>
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>

<style lang="less">
@import '../common/style/list-items.less';
</style>
