Page({
  data: {
    userName:"",
    phone:"",
    moreAddress:"",
    region: [],
  },
  switchChange: function (e) {
    console.log('switch发生 change 事件，携带值为', e.detail.value)
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
  /* 获取地址 */
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
  //返回我的地址页面
  returnAddress: function () {
    console.log(this.data.region)
    if((this.data.userName=="")||(this.data.phone=="")||(this.data.region=="")||(this.data.moreAddress=="")){
      wx.showToast({
        title: '内容不能为空',
      })
    }else{
      wx.navigateTo({
        url: '../address/address'
      })
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
 
})