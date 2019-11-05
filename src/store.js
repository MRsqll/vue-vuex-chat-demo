/*
   vuex状态管理的使用
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const now = new Date();
const store = new Vuex.Store({
    //存放各种状态
    state: {
        //当前操作用户
        user: {
            name: 'MRsqll',
            img: '../static/images/1.jpg'
        },
        //会话列表
        session: [
            {
                id: 1,
                user: {
                    name: '客服1号',
                    img: '../static/images/2.png'
                },
                messages: [
                    {
                        content: 'Hello，你好，我是客服1号',
                        date: now
                    }
                ]
            },
            {
                id: 2,
                user: {
                    name: '小良良',
                    img: '../static/images/3.jpg'
                },
                messages: [
                    {
                        content: '我学会了vuex，你呢？',
                        date: now
                    }
                ]
            }


        ],
        //切换用户
        currentUserId: 1,


    },
    //对状态进行操作与修改
    mutations: {
        //初始化对话内容
        initSession(state){
            let storage = localStorage.getItem('vuexChatSession');
            if(storage){
                state.session = JSON.parse(storage);
            }
        },
        //保存选中会话后的id
        selectSession(state, id) {
            state.currentUserId = id;
        },
        //存储发送后的会话内容
        sendSession(state, content) {
            let session = state.session.find(item => item.id === state.currentUserId);
            session.messages.push({
                content:content,
                date:new Date()
            });
        }
    },
    getters: {
        //切换选择对象
        changeSession(state) {
            let sessions = state.session;
            let result = sessions.filter(v => v.id !== state.currentUserId);
            state.session.messages = result[0].messages;
        }
    },
    //一些store的业务逻辑都在这里操作
    actions: {
        //初始化对话
        initSessions(context){
            context.commit('initSession');
        },
        //切换对话
        changeList(context, id) {
            context.commit('selectSession', id)
        },
        //提交对话内容
        sendSessions(context, content) {
            context.commit('sendSession', content);
        },
    },
});
store.watch(
    (state)=>state.session,
    (val)=>{
        console.log(val,'21312313123');
        localStorage.setItem('vuexChatSession',JSON.stringify(val));
    },
    {
        deep:true
    }
);
export default store;