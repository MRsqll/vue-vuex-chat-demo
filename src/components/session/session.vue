<template>
    <div id="session">
        <ul >
            <li v-if="item.id === currentUserId" v-for="(item) in session" >
                <div  v-for="(val,index) in item.messages" :key="index">
                    <p class="time">
                        <span>{{val.date}}</span>
                    </p>
                    <div class="message">
                        <div class="text">{{val.content}}</div>
                        <img class="userAvatar" :src="item.user.img"/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "session",
        computed: {
            ...mapState(['session','currentUserId'])
        },
        methods:{

        },
        created(){
            // console.log(this.session[0].messages[0].date)
        }
    }
</script>

<style scoped>
    #session {
        padding: 10px 15px;
        box-sizing: border-box;
        overflow-y: scroll;
        height: calc(100% - 160px);
    }

    .time {
        margin: 7px auto;
        text-align: center;
        color: white;
        font-size: 12px;
    }

    ul li {
        list-style: none;
        margin-bottom: 15px;
        position: relative;
    }

    li span {
        display: inline-block;
        padding: 3px 18px;
        border-radius: 2px;
        background-color: #dcdcdc;
        box-sizing: border-box;
    }

    .message {
        display: flex;
        justify-content: flex-end;
    }

    .text {
        line-height: 2.5;
        background-color: #b2e281;
        font-size: 12px;
        text-align: right;
        padding: 0 10px;
        border-radius: 3px;
    }

    .userAvatar {
        width: 30px;
        height: 30px;
        border-radius: 3px;
        margin-left: 10px;
    }
</style>