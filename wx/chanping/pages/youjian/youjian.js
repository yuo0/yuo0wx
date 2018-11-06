// pages/youjian/youjian.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    biao2: "",
    wen2: "",
    mail2: "",
    cheng: ""

  },
  biao: function (event) {
    var biao1 = event.detail.value;
    var that = this;
    that.setData({ biao2: biao1 })
  },
  wen: function (event) {
    var wen1 = event.detail.value;
    var that = this;
    that.setData({ wen2: wen1 })
  },
  fa: function (event) {
    var that = this;
    wx.request({
      url: app.globalData.url+'/yujian',
      data: { "biao3": that.data.biao2, "wen3": that.data.wen2, "mail3": that.data.mail2 },
      header: { "content-type": "application/json" },
      success: function (re) {
        that.setData({ cheng: re.data.fanhui })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mail = options.mail1;
    var that = this;
    that.setData({ mail2: mail })

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