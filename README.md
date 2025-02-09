# vue-admin-template
vue轻量级后台管理系统基础模板<br>
[在线预览](https://woai3c.github.io)

## 更新
### 2019.6.18 更新
**优化动态添加路由功能**

以前的动态路由功能并不完善，首先要将所有的路由都添加到路由表里，然后根据后台返回的菜单栏数据来生成菜单。

导致的问题就是，虽然有页面在菜单栏上不显示，但由于已经添加到路由表里了，所以可以在地址栏上手动输入在菜单栏上不存在（但在路由表存在）的页面，进而可以越权访问。

现在除了必要的页面需要在一开始添加到路由表里，其他的页面都可以根据后台数据来自动生成。而且菜单栏上没有的页面，在地址栏上输入地址也是访问不了的。

另外，如果在未登陆时要访问某一指定页面，会重定向到登陆页，登陆成功后会自动跳到这个指定页面。

具体实现请看 `permission.js` 和 `util` 目录下的 `index.js` 文件

### 2019.3.14 更新

**增加404页面**

假如跳转到一个不存在的页面时会重定向到404页面

### 2019.3.8 更新

**增加面包屑功能**

用于展示当前页面的路径

**增加权限控制功能**

如果未登陆，访问所有页面都重定向到登陆页

### 2019.3.1 更新<br>
**增加动态菜单栏功能**

`icon`使用的是`iview`组件的`icon`组件。

数据格式：
```js
// 左侧菜单栏数据
menuItems: [
    {
        name: 'Home', // 要跳转的路由名称 不是路径
        size: 18, // icon大小 非必填
        type: 'md-home', // icon类型 非必填
        text: '主页' // 文本内容
    },
    {
        text: '二级菜单',
        type: 'ios-paper',
        children: [
            {
                type: 'ios-grid',
                name: 'T1',
                text: '表格'
            },
            {
                text: '三级菜单',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-notifications-outline',
                        name: 'Msg',
                        text: '查看消息'
                    },
                    {
                        type: 'md-lock',
                        name: 'Password',
                        text: '修改密码'
                    },
                    {
                        type: 'md-person',
                        name: 'UserInfo',
                        text: '基本资料',
                    }
                ]
            }
        ]
    }
]
```
## 相关依赖
* [vue-router](https://router.vuejs.org/zh/)
* [iview](https://www.iviewui.com/docs/guide/install)
* [axios](https://www.kancloud.cn/yunye/axios/234845)
* [vuex](https://vuex.vuejs.org/zh/)

## 功能

#### 登录页
* 一周七天自动切换不同的壁纸（建议自己配置）

#### 标签栏
* 点击标签切换页面
* 刷新当前标签页
* 关闭其他标签/关闭所有标签

**注意：** 组件的名称和路由的名称一定要一致，例如 `Home.vue` 组件名称 `name: home`，则在路由文件中也要给它设置为 `name: home`，否则页面内容不能缓存

```js
// 在router文件中
{
    path: 'home',
    name: 'home',
    component: () => import('../views/Home.vue')
}

// 在Home.vue中
export default {
    name: 'home'
}
```

#### 侧边栏
* 伸展/收缩
* 页面宽度过小自动收缩
* 多级菜单（利用iView组件）

#### 用户相关
* 消息通知
* 用户头像
* 基本资料

#### 动态菜单栏
* 根据数据动态生成菜单

#### 面包屑
* 展示当前页面的路径

#### 权限控制
* 如果在未登陆的情况下访问指定页面 将会重定向到登陆页

#### 其它
* 利用`axios`拦截器 实现了`ajax`请求前展示`loading` 请求结束关闭`loading`

## 注意
* 源码可见 并且添加了必要的注释 可以自行更改


`Index`组件一般情况下只需要传数据就行 其他不用关注

市面上有大量的vue后台管理系统模板 但是功能都太丰富了 而且有很多组件用不上 所以写了这么一个最基础的 只有必要功能的模板
UI库使用的是`iView` 有大量的组件可用 

### 子组件跳转到子组件
```
// xxx为你想跳转的子组件name
this.$parent.gotoPage('xxx')
```
### 路由传参
```
this.gotoPage('userinfo', {
    id: id,
})
// 在userinfo组件里取参
this.$route.params.id
```

## 使用
#### 下载
```
git clone git@github.com:woai3c/vue-admin-template.git

cd vue-admin-template

npm i
```

#### 开发
```
npm run serve
```

#### 打包
````
npm run build
````


### 如果对你有帮助，请给个Star
