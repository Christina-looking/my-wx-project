// pages/my/my.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  /* 获取用户昵称和头像 */
  getUserInfo: function (e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function () {
  },
  /* 地址 */
  Addaddress: function (e) {
    wx.navigateTo({
      url: '../address/address',
    })
  },
  /* 订单 */
  myDingdan: function (e) {
    wx.showModal({
      title: '订单详情',
      content: '您当前还没有订单，立即购物',
    })
  },

  /* 购物车 */
  Addshopping: function (e) {
    wx.navigateTo({
      url: '../cart/cart'
    })
  },
  /* 会员卡 */
  Addvip: function (e) {
    wx.showModal({
      title: '会员卡',
      content: 'sorry,您还没有会员卡',
    })
  }, 
  /* 优惠券 */
  Addmoney: function (e) {
    wx.navigateTo({
      url: '../mysale/mysale',
    })
  }, 
  /* 积分 */
   Addscores: function (e) {
    wx.showModal({
      title: '积分',
      content: '当前没有积分，购物可换取积分',
    })
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