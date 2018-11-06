// pages/one/one.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jieshou: []

  },
  fayoujian: function (event) {
    var fasong = event.currentTarget.dataset.aaa
    wx.navigateTo({
      url: '../youjian/youjian?mail1=' + fasong
    })
  },

  dadianhua: function (event) {
    wx.makePhoneCall({
      phoneNumber: event.currentTarget.dataset.bbb,
    })
  },

  
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: app.globalData.url+'/qw',
      header: { "content-type": "application/json" },
      success: function (re) {
        that.setData({ jieshou: re.data.hui })
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