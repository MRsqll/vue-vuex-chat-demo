<template>
    <div id="avatar">
        <header>
            <img class="avaImg" :src="user.img">
            <p class="name">{{user.name}}</p>
        </header>
        <footer>
            <input type="text" class="search" placeholder="请搜索">
        </footer>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        computed:{
            ...mapState(['user'])
        },

    }
</script>

<style scoped>
    #avatar {
        width: 100%;
        background-color: #2e3238;
        padding: 12px;
        box-sizing: border-box;
    }
    .avaImg{
        width: 40px;
        height: 40px;
        background-color: orange;
        border-radius: 3px;
    }
    .name{
        display: inline-block;
        color: white;
        margin-left: 15px;
    }
    .avaImg,.name{
        vertical-align: middle;
    }
    .search{
        margin-top: 10px;
        width: 100%;
        height: 30px;
        background-color: #26292E;
        border: none;
        outline: none;
        color: white;
        padding : 0 10px;
        box-sizing: border-box;
    }
</style>