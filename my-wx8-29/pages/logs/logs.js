//logs.js
const util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    logs: [],
    userList: [{
      "id": 1,
      "userName": "18400000000",
      "userPassword": "111111"
    },
    {
      "id": 2,
      "userName": "15388104460",
      "userPassword": "111111"
    }],
    userInfo: {},
    phone: '',
    password: '',
  },
  onLoad: function () {
  
  },
  onGotUserInfo: function (e) {
    console.log(e)
    console.log(e.detail)
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
  /* 获取账户 */
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  /* 获取密码 */
   passwordInput: function (e) {
    this.setData({
       password: e.detail.value
    })
  },
  /* 登录 */
  login: function () {
    //for (var i = 0; i < this.data.userList.length; i++) {
    // if ((this.data.phone == this.data.userList[i].phone) && (this.data. password == this.data.userList[i]. password)) 
    if ((this.data.phone == "admin") && (this.data.password == "admin")) {
        // 这里修改成跳转的页面
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000,
          success: function () {
            wx.navigateTo({
              url: '../index1/index1'//不跳转
            })
          }
        })
      } else if (this.data.phone == 0 || this.data. password == 0) {
        wx.showToast({
          title: '账号和密码不能为空',
          icon: 'none',
          duration: 2000
        })
      } else {
        wx.showToast({
          title: '登录失败,账号和密码错误',
          icon: 'none',
          duration: 2000
        })
      }
   // }
  },
  /* 注册页面 */
  register:function(){
    wx.navigateTo({
      url: '../register/register',
    })
  }
})
