<template>
    <div id="contents">
        <textarea placeholder="请按Enter发送信息" v-model="content"  @keyup="keyDown"></textarea>
    </div>
</template>

<script>
    import {mapActions,mapState} from 'vuex';
    export default {
        name: "contents",
        data(){
            return {
                content:''
            }
        },
        methods:{
            ...mapActions(['sendSessions']),
            keyDown(e){
                if(e.keyCode ===13 && this.content !== ''){
                    this.sendSessions(this.content);
                    this.content = '';
                }
            }
        }
    }
</script>

<style scoped>
    #contents{
        width: 100%;
        height: 100%;
        background-color: #eee;
        border-top: 1px solid #ddd;
    }

    textarea{
        padding: 10px;
        height: 100%;
        width: 100%;
        outline: none;
        font-family: "Microsoft YaHei";
        resize: none;
        border:none;
    }
</style>