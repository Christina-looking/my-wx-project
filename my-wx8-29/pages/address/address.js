// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "id": "1",
      "name": "张三",
      "tel": "13733332222",
      "addre": "湖南省长沙市天心区解放路一单元110号龙翔家园",
    }]
  },
  //删除
  deladdre:function(e){
    console.log(this.data.list)
    var that=this;
    var data=this.data
    //获取用户id
    var id = e.currentTarget.delid;
    wx.showModal({
      title: '删除',
      content:"删除地址不可恢复",
      success:function(res){
        console.log(data.list)
        if (res.confirm) {
          console.log(e.currentTarget.id)
          that.data.list.splice(id,1)
          that.setData({
            list: data.list,
          })
          console.log(that.data.list)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //编辑
  updataddre: function (e) {
    wx.navigateTo({
      url: '../updateAddre/updateAddre',
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