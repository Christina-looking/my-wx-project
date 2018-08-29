// tiemai.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3:false,
    //列表
    arr: [{
      id: 1,
      title: "原味夏威夷果",
      price: "520",
      num: "销量：1314",
      src: "../../images/banner4.jpg"
      }, {
        id: 2,
        title: "奶油夏威夷果",
        price: "240",
        num: "销量：300",
        src: "../../images/banner1.jpg"
      }, {
        id: 3,
        title: "辣椒夏威夷果",
        price: "200",
        num: "销量：256",
        src: "../../images/banner2.jpg"
      },
       {
        id: 4,
        title: "酸甜夏威夷果",
        price: "200",
        num: "销量：256",
        src: "../../images/banner3.jpg"
      }, {
        id: 5,
        title: "鱿鱼夏威夷果",
        price: "240",
        num: "销量：300",
        src: "../../images/banner1.jpg"
      }, {
        id: 6,
        title: "原味夏威夷果",
        price: "520",
        num: "销量：1314",
        src: "../../images/banner4.jpg"
      }
    ]
  },
  /* 显示全部 */
  changeProductAll: function (e) {
    this.setData({
      selected:true,
      selected1:false,
      selected2: false,
      selected3: false,
      arr: [{
        id: 1,
        title: "原味夏威夷果",
        price: "520",
        num: "销量：1314",
        src: "../../images/banner1.jpg"
      }, {
        id: 2,
        title: "奶油夏威夷果",
        price: "240",
        num: "销量：300",
        src: "../../images/banner2.jpg"
      }, {
        id: 3,
        title: "辣椒夏威夷果",
        price: "200",
        num: "销量：256",
        src: "../../images/banner4.jpg"
      },
      {
        id: 4,
        title: "原味夏威夷果",
        price: "200",
        num: "销量：256",
        src: "../../images/banner4.jpg"

      }, {
        id: 5,
        title: "原味夏威夷果",
        price: "240",
        num: "销量：300",
        src: "../../images/banner4.jpg"
      }, {
        id: 6,
        title: "原味夏威夷果",
        price: "520",
        num: "销量：1314",
        src: "../../images/banner4.jpg"
      }
      ]
    })
  },
  /* 显示三只松鼠 */
  changeProducSan: function (e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
      selected3: false,
      arr: [{
        id: 1,
        title: "原味夏威夷果",
        price: "520",
        num: "销量：1314",
        src: "../../images/banner4.jpg"
      }, {
          id: 2,
          title: "奶油夏威夷果",
          price: "240",
          num: "销量：300",
          src: "../../images/banner1.jpg"
        }
      ]
    })
  },
   /* 显示良品铺子 */
  changeProducLiang: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
      arr: [{
        id: 3,
        title: "辣椒夏威夷果",
        price: "200",
        num: "销量：256",
        src: "../../images/banner2.jpg"
      },
        {
          id: 4,
          title: "酸甜夏威夷果",
          price: "200",
          num: "销量：256",
          src: "../../images/banner3.jpg"
        }]
    })
  },
   /* 显示恰恰 */
  changeProductQia: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true,
      arr: [
        {
          id: 5,
          title: "鱿鱼夏威夷果",
          price: "240",
          num: "销量：300",
          src: "../../images/banner1.jpg"
        },{
        id: 6,
        title: "原味夏威夷果",
        price: "520",
        num: "销量：1314",
        src: "../../images/banner4.jpg"
      }]
    })
  },
  /* 产品详情页 */
  listClickon: function (e) {
    var p = e.currentTarget.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + p
    })
  },
  /* 进入购物车 */
  enterShopping: function (e) {
    wx.navigateTo({
      url: '../cart/cart',
    })
  },
  addShopping:function(e){
    console.log(e)
    wx.showToast({
      title: '添加成功',
    })
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