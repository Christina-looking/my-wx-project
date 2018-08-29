// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    userPassword: '',
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
    id_token: '',//方便存在本地的locakStorage
    response: '' //存取返回数据
  },
  /* 获取账户 */
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  /* 获取密码 */
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
  },
  /* 登录 */
  login:function(){
    console.log(this.data.userList)
    console.log(this.data.userPassword)
    console.log(this.data.userName)
    for(var i=0;i<this.data.userList.length;i++){
      if ((this.data.userName == this.data.userList[i].userName ) && (this.data.userPassword == this.data.userList[i].userPassword )) {
        // 这里修改成跳转的页面
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000,
          success: function () {
            wx.navigateTo({
              url: '../index1/index1'
            })
          }
        })
      } else if (this.data.userName.length == 0 || this.data.userPassword.length == 0) {
        wx.showToast({
          title: '用户名和密码不能为空',
          icon: 'none',
          duration: 2000
        })
      }else{
        wx.showToast({
          title: '登录失败',
          icon: 'none',
          duration: 2000
        })
      }
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})