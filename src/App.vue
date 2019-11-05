<template>
    <div id="app">
        <div class="list">
            <avatar></avatar>
            <user-list></user-list>
        </div>
        <div class="main">
            <session></session>
            <contents></contents>
        </div>
    </div>
</template>

<script>
    import avatar from './components/avatar/avatar';
    import userList from './components/userList/userList';
    import session from './components/session/session';
    import contents from './components/contents/contents';
    import {mapActions} from 'vuex'

    export default {
        name: 'App',
        components: {
            avatar,
            userList,
            session,
            contents
        },
        methods:{
            ...mapActions(['initSessions'])
        },
        created(){
            this.initSessions();
        }
    }
</script>

<style>
    #app {
        width: 800px;
        height: 600px;
        display: flex;
        border-radius: 3px;
        overflow: hidden;
        margin: 20px auto;
    }

    .list {
        width: 200px;
        height: 100%;
    }

    .main {
        width: 80%;
        height: 100%;
        background-color: #eee;
    }
</style>
