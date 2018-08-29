// pages/wxprograms/wxprograms.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     background: ['../../images/banner4.jpg', '../../images/banner5.jpg', '../../images/banner3.jpg','../../images/banner1.jpg'],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      circular: false,
      interval: 2000,
      duration: 500,
      previousMargin: 0,
      nextMargin: 0,
      /* 图标列表和文字 */
      arr: [{
        id: "1",
        title: "坚果百科",
        src: "../../images/index-icon1.png",
      }, {
        id: "2",
        title: "合作预约",
        src: "../../images/index-icon2.png"
      }, {
        id: "3",
        title: "在线购买",
        src: "../../images/index-icon3.png"
      }, {
        id: "4",
        title: "关于我们",
        src: "../../images/index-icon4.png"
      }
      ],
      //热门推荐的商品
      arr2: [{
        id:1,
        title: "原味夏威夷果",
        price: "￥520",
        num:"销量：1314",
        src: "../../images/banner4.jpg"

      }, {
          id:2,
          title: "原味夏威夷果",
          price: "￥240",
          num: "销量：300",
          src: "../../images/banner4.jpg"
      },{
          id: 3,
          title: "原味夏威夷果",
          price: "￥200",
          num: "销量：256",
          src: "../../images/banner4.jpg"
      }
    ],
  },
  /* swiper */
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName;
    var newData = {};
    newData[propertyName] = e.detail.value;
    this.setData(newData);
  },
  /*dots */
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  /* autoplay */
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //首页图标跳转对应页面
  listClick: function (e) {
    var urlPage = ["../book/book", "../partner/partner", "../shoping/shoping", "../us/us"];
    var pageId = e.currentTarget.id;
    wx.navigateTo({
      url: urlPage[pageId]
    })
  },
  //进入当前产品详情页
  listClicko: function (e) {
    var p1 = e.currentTarget.id;
    wx.navigateTo({
      url: '../detail/detail?id=' + p1
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