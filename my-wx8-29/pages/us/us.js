//about.js
//获取应用实例
var bmap = require('../../utils/bmap-wx.min.js'); //引入微信小程序js api
var app = getApp()
Page({
  data: {
    latitude: 0,
    longitude: 0,
    loactionString: '',
    text:"澳洲坚果生产服务平台，是一个澳洲坚果的专属平台，提供关于澳洲坚果从种植生产、加工运输到成品销售的一条龙服务，整合各方资源,致力于宣传澳洲坚果,提供澳洲坚果的知名度和认可度。",
    adrimg: '../../images/address.png',
    phoneimg: '../../images/concact1.png',
    imgUrls: [
      '../../images/banner1.jpg',
      '../../images/banner2.jpg',
      '../../images/banner3.jpg',
    ],
    //页面展示地图的样式
    markers: [{
      iconPath: "../../images/marker_red.png",
      id: 1,
      latitude: 30.570199203179985,
      longitude: 104.0647602024899,
      width: 30,
      height: 30,
      callout: {
        content: "澳洲坚果",
        color: "#A0522D",
        fontSize: 14,
        borderRadius: 5,
        bgColor: "#eee",
        padding: 5,
        display: "ALWAYS"
      }
    }],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  /* 拨打电话 */
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '4000019651',
    })
  },
  /* 获取地址 */
  getLocation: function () {
    var that = this;
    //百度的ak     bmap就是最上面引入的微信小程序js api
    var BMap = new bmap.BMapWX({
      ak: 'RPyA52QvG3GzbgZ0PLY4nRtRqeSzfOfk'
    });
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        that.setData({
          latitude: res.latitude,//经度
          longitude: res.longitude//纬度
        })
        BMap.regeocoding({
          location: that.data.latitude + ',' + that.data.longitude,
          success: function (res) {
            console.log(res)
            that.setData({
              loactionString: res.originalData.result.formatted_address
            })
          },
          //百度获取失败
          fail: function () {
            wx.showToast({
              title: '请检查位置服务是否开启',
            })
          },
        });
        wx.openLocation({
          latitude:res.latitude ,
          longitude: res.longitude,
          //name: "南岸区城市之光",
          address: res.loactionString,
          scale: 28
         })
      },
      //小程序获取位置失败
      fail: function () {
        console.log('小程序得到坐标失败')
      },
    })
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
  }
})