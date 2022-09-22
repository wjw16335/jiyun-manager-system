//引入路由对象
import router from "./router";
// 引入vuex
import store from "./store";
// 引入删除token以及删除用户信息
import { removeTokenAndUserInfo } from "./utils/auth";

// 创建路由守卫，实现页面拦截
// to 要进入的页面   from 跳转前的页面  mext可以进入的页面
// 什么触发路由守卫方法，页面就行跳转的时候就会触发
router.beforeEach(async (to, from, next) => {
  const token = store.getters.token;
  if (token) {
    // 已登录的逻辑
    if (to.path === "/login") {
        next(from.path)
    }else{
        // 获取用户信息
        let userInfo = store.getters.userInfo
        userInfo = typeof userInfo === "object" ? JSON.stringify(userInfo) : userInfo
        if(userInfo === "{}" || userInfo === ""){
            // 没有token
            // token过期
            const response = await store.dispatch("handleUserInfo")
            if(response){
                next()
            }else{
                next("/login")
            }
        }else{
            next()
        }
    }
  }else{
    if(to.path === "/login"){
        next()
    }else{
        next("/login")
    }
  }
});
