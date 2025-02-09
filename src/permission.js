import router from './router'
import store from './store'
import { menusToRoutes } from './utils'
// 是否有菜单数据
let hasMenus = false
// 这只是简单示范 建议结合token使用
router.beforeEach(async (to, from, next) => {
    if (store.state.user.name) {
        if (to.path === '/login') {
            next({path: '/'})
        } else {
            if (hasMenus) {
                next()
            } else {
                try {
                    // 这里可以用await 配合请求后台数据来生成路由
                    const routes = menusToRoutes(store.state.menuItems)
                    // 动态添加路由
                    router.addRoutes(routes)
                    hasMenus = true
                    next({path: to.path || '/'})
                } catch (error) {
                    next(`/login?redirect=${to.path}`)
                }
            }
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})