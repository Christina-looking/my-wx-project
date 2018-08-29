// tiemai2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    minusStatus: 'disabled',
    selected: true,
    selected1: false,
    selected2: false,
    selected3:false
  },
  /* 有图 */
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true,
      selected2: false,
      selected3: false,
    })
  },
  /* 好评 */
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected1: true,
      selected3: false,
    })
  },
  /* 中评 */
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
    })
  },
  /* 差评 */
  selected3: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected3: true,
      selected2: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var productID = options.id;
    if (productID == 0) {
      this.setData({
        title: "原味夏威夷果",
        price: "520",
        math: "1314",
        yufei: "免运费",
        textW: "坚果，是闭果的一个分类，果皮坚硬，内含1粒或者多粒种子。如板栗，杏仁等的果实。坚果是植物的精华部分，一般都营养丰富，含蛋白质、油脂、矿物质、维生素较高，对人体生长发育、增强体质、预防疾病有极好的功效。",
        src: "../../images/banner4.jpg",
        
      })
    }
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
  /* 加入和购买时的遮罩层 */
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  //－数量的减
  bindMinus: function (e) {
    var num = this.data.num;
    if (num > 1) {
      num--;
    }
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },
  //＋数量的增加
  bindPlus: function () {
    var num = this.data.num;
    num++;
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })

  },
  /* 显示数量 */
  bindManual: function (e) {
    var num = e.detail.value;
    this.setData({
      num: num
    })
  },
  /* 选择数量后下一步进入购物车 */
  shoppingDo: function (e) {
    var num = this.data.num;
    // console.log(num)
    var price = e.target.dataset.price;
    var title = e.target.dataset.title;
    var src = e.target.dataset.src;
    // console.log(price);
    wx.navigateTo({
      url: "../cart/cart?num=" + num + "&price=" + price + "&title=" + title + "&src=" + src + " "
    })
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