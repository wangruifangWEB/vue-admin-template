import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {
            name: '',
            img: ''
        },
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页' // 文本内容
            },
            {
                text: '二级菜单',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 't1',
                        text: '表格'
                    },
                    {
                        text: '三级菜单',
                        type: 'ios-paper',
                        children: [
                            {
                                type: 'ios-notifications-outline',
                                name: 'msg',
                                text: '查看消息'
                            },
                            {
                                type: 'md-lock',
                                name: 'password',
                                text: '修改密码'
                            },
                            {
                                type: 'md-person',
                                name: 'userinfo',
                                text: '基本资料',
                            }
                        ]
                    }
                ]
            }
        ],
    },
    mutations: {
        setUser(state, obj) {
            state.user = {...obj}
        },
        setMenus(state, items) {
            state.menuItems = [...items]
        },
    }
})

export default store