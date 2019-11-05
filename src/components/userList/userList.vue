<template>
    <div id="userList">
        <ul>
            <li class="listChildren" :class="{action: item.id === currentUserId}" v-for="item in session" @click="selectUser(item.id)">
                <img class="userImg" :src="item.user.img"/>
                <p class="userName">{{item.user.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState,mapActions,mapGetters} from 'vuex'
    export default {
        name: "userList",
        //全局的状态写在computed中
        computed:{
            ...mapState(['session','currentUserId']),

        },
        //对全局状态的操作写在methods中
        methods:{
            ...mapActions(['changeList']),
            ...mapGetters(['changeSession']),
            selectUser(id){
                this.changeList(id);
            },

        },
        created(){
            this.changeSession(this.session);
        }
    }
</script>

<style scoped>
    #userList {
        width: 100%;
        height: 100%;
        background-color: #2e3238;
        padding: 0 12px;
        box-sizing: border-box;
    }

    ul li {
        list-style: none;
    }

    .listChildren {
        padding: 15px 0;
        box-sizing: border-box;
    }

    .userImg {
        width: 30px;
        height: 30px;
        border-radius: 3px;
    }

    .userName {
        color: white;
        display: inline-block;
        margin-left: 15px;
    }

    .userImg, .userName {
        vertical-align: middle;
    }

    .listChildren:hover{
        background-color: rgba(255, 255, 255, 0.03);
    }
    .listChildren.action{
        background-color: rgba(255, 255, 255, 0.1);

    }
</style>