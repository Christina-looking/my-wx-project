// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:["我是农户", "我是生产商"],
    userName: "",
    phone: "",
    moreAddress: "",
    region: [],
  },
  /* 获取身份 */
  bindPickerChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /* 获取姓名 */
  nameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  /* 获取手机 */
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  /* 获取省市区 */
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value,
    })
  },
  /* 获取详细地址*/
  moreAddressInput: function (e) {
    this.setData({
      moreAddress: e.detail.value
    })
  },
  /* 跳转合作方式页面 */
  ways:function(){
    wx.navigateTo({
      url: '../ways/ways',
    })
  },
  //预约成功后返回首页
  returnAddress: function () {
    console.log(this.data.region)
    if ((this.data.userName == "") || (this.data.phone == "") || (this.data.region == "")) {
      wx.showToast({
        title: '必填内容不为空',
      })
    } else {
      wx.showToast({
        title: '预约成功',
      })
      wx.navigateTo({
        url: '../index1/index1'
      })
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