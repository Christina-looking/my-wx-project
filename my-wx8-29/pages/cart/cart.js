// gouwuche.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    // hasList: false,
    totalPrice: 0,
    selectAllstatus: true,
    pulsbtn: 'unable'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var num = options.num;
    var price = options.price;
    var title = options.title;
    var src = options.src;
    // console.log(this.data.carts.length);
    //  console.log(num);
    // console.log(price);
    this.data.carts = [{ numb: num, price: price, title: title, src: src }].concat(this.data.carts)
    // console.log(this.data.carts);
    var carts = this.data.carts;
    console.log(carts);
    var total = 0;
    for (var i = 0; i < carts.length; i++) {
      total += carts[i].numb * carts[i].price
      // console.log(total)
    }
    if (num == undefined && price == undefined && title == undefined && src == undefined) {
      this.setData({
        carts: []
      })
    } else {
      this.setData({
        carts: this.data.carts,
        totalPrice: total.toFixed(2)

      })
    }

  },
 //返回首页
  back: function (e) {
    wx.navigateTo({
      url: '../shoping/shoping',
    })
  /*   wx.redirectTo({
      url: '../shoping/shoping',
    }); */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


  },
  //总价
  getTotalPrice() {
    var carts = this.data.carts;
    console.log(carts);
    var total = 0;
    for (var i = 0; i < carts.length; i++) {
      total += carts[i].numb * carts[i].price
      // console.log(total)
    }

    this.setData({
      carts: carts,
      totalPrice: total.toFixed(2)
    })
  },
  //增加
  add: function (e) {
    const index = e.currentTarget.dataset.index;
    // console.log(e)
    // console.log(index);
    let carts = this.data.carts;
    let num = parseInt(carts[index].numb);
    // console.log(num);
    num = num + 1;
    // console.log(typeof num)
    // console.log(num)
    carts[index].numb = num;
    if (num == 1) {
      this.setData({
        carts: carts,
        pulsbtn: 'unable'
      });
      this.getTotalPrice();

    } else {
      this.setData({
        carts: carts,
        pulsbtn: 'active'
      });
      this.getTotalPrice();
    }


  },
  //
  minus: function (e) {

    const index = e.currentTarget.dataset.index;
    // console.log(e)
    // console.log(index);
    let carts = this.data.carts;
    let num = parseInt(carts[index].numb);
    if (num < 2) {
      console.log(num);
      this.setData({
        pulsbtn: 'unable'
      })
      return false;


    } else {

      num = num - 1;
      carts[index].numb = num;
      this.setData({
        carts: carts,


      });
      this.getTotalPrice();

    }


  },
  /* 删除 */
  deleteList: function (e) {
    const index = e.currentTarget.dataset.index;
    var carts = this.data.carts;
    var that=this;
    wx.showModal({
      title: '删除',
      content: '删除不可恢复',
      success:function(res){
        carts.splice(index, 1);
        that.setData({
          carts: carts
        });
        if (!carts.length) {
          that.setData({
            carts: []
            // hasList:false
          })
        } else {
          that.getTotalPrice();
        }
      }
    })
    
  },
  /* 订单 */
  order:function(e){
    wx.navigateTo({
      url: '../order/order',
    })
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