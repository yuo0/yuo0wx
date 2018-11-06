// pages/shou/shou.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunbotu:"",
    tutu:[{"xiaotu":"../image/akalin.jpg","wenzi":"种田"},
      { "xiaotu": "../image/akalin.jpg", "wenzi": "随便" },
      { "xiaotu": "../image/akalin.jpg", "wenzi": "随便" },
      { "xiaotu": "../image/akalin.jpg", "wenzi": "随便" },
      { "xiaotu": "../image/akalin.jpg", "wenzi": "随便" },
      { "xiaotu": "../image/akalin.jpg", "wenzi": "随便" },]
  
  },

  //跳转
  tiaozhuan:function(event)
  {
    var tiao=event.currentTarget.dataset.tiao;
    var path="../er/er?chuanzhi=tiao";
    wx.navigateTo({
      url: path,
    })

  },
  jinru:function(event)
  {
    var jinru = event.currentTarget.dataset.a;
    var path="../denglu/denglu";
    wx.navigateTo({
      url: path,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: app.globalData.url+'/lunbo',
      header:{"content-type":"application/json"},
      success:function(re)
      {
        that.setData({ lunbotu:re.data.huitu})
      }
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