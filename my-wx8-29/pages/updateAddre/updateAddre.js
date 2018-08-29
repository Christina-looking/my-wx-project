// pages/updateAddre/updateAddre.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      "id": "1",
      "name": "张三",
      "phone": "13733332222",
      "addre": "湖南省长沙市天心区解放路一单元110号龙翔家园",
    }],
    i:"",
    name: "",
    phone: "",
    moreAddress: "",
    region: ["湖南省", "长沙市","天心区"],
  },
  /* 默认地址开关 */
  switchChange: function (e) {
    console.log('switch 发生 change 事件，携带值为', e.detail.value)
  },
  /* 获取姓名 */
  nameInput: function (e) {
    console.log(e.detail.value)
    if (e.detail.value != undefined || e.detail.value != ""){
      this.setData({
        name: e.detail.value
      })
    }
  },
  /* 获取手机 */
  phoneInput: function (e) {
  /*   var i = e.currentTarget.dataset.id - 1;
    console.log(i) */
    if (e.detail.value != undefined || e.detail.value!=""){
      this.setData({
        phone: e.detail.value
      })
    }
    console.log(e.detail.value)
  },
  /* 获取地址 */
  bindRegionChange: function (e) {
      this.setData({
        region: e.detail.value,
      })
  },
  /* 获取详细地址*/
  moreAddressInput: function (e) {
   /*  var i = e.currentTarget.dataset.id - 1;
    console.log(i) */
    if (e.detail.value != undefined || e.detail.value != "") {
      this.setData({
        moreAddress: e.detail.value
      })
    } 
  },
  //保存并且返回我的地址页面
  returnAddress: function (e) {
    var i = e.currentTarget.dataset.id - 1;
    /* console.log(i)
    console.log(this.data.name)
    console.log(this.data.list[i].name)
    console.log(this.data.phone)
    console.log(this.data.list[i].phone)
    console.log(this.data.region)
    console.log(this.data.moreAddress)
    console.log(this.data.list[i].addre)
    */
    //没有修改数据
    if (this.data.name == "" || this.data.phone == "" || this.data.moreAddress==""){
      this.data.name = this.data.list[i].name
      this.data.phone = this.data.list[i].phone
      this.data.moreAddress = this.data.list[i].addre
    }else{//数据被修改后
      this.data.list[i].name = this.data.name
      this.data.list[i].phone = this.data.phone 
      this.data.list[i].addre = this.data.moreAddress 
    }
    wx.navigateTo({
      url: '../address/address',
    })
    this.data.list[i].region = this.data.region
    console.log(this.data.list)
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