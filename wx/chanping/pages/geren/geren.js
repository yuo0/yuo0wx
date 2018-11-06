// pages/test/test.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    mingzi: "",
    qizi: false

  },
  jing:function(event)
  {
    var path="../tongxun/tongxun";
    wx.navigateTo({
      url: path,
    })
  },

  hujiao: function (event) {
    var aq = event.currentTarget.dataset.hu;
    wx.makePhoneCall({
      phoneNumber: aq,
    })


  },

  shuru: function (event) {
    var aa = event.detail.value
    var that = this;
    that.setData({ "name": aa })

  },
  chaxun: function (event) {
    var that = this;

    wx.request({
      url: app.globalData.url+'/qqq',
      data: { "uname": that.data.name },
      header: { "content-type": "application/json" },
      success: function (sd) {
        //var imgpath=sd.data.hui
        console.log(sd.data.hui)
        that.setData({ mingzi: sd.data.hui, qizi: true })

      }
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