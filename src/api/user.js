import request from "../utils/request"

/**
 * 登录方法
 * @param data {username:'', password:''}
 * @returns {AxiosPromise}
 */
export const login = (data = {}) => {
  return request({
    url : '/login',
    method : "POST",
    data
  })
}

/**
 * 获取用户信息接口
 * @returns {AxiosPromise}
 */
export const userInfo = () => {
  return request({
    url : '/admin/getUserInfo',
    method : "GET"
  })
}

/* 退出登录接口 */
export const logout = () =>{
  return request({
    url:"/admin/logout",
    method:"POST"
  })
}