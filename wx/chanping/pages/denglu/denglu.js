// pages/denglu/denglu.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yanzhengma: "",
    lunbo: "",
    sdengluming: "",
    smima: "",

    syanzhengma: "",


    shuchu: "",
    zhengquema: ""

  },
  zhuce:function(event)
  {
    var tiao=event.currentTarget.dataset.zhuce;
    var path="../zhuce/zhuce";
    wx.navigateTo({
      url: path,
    })
  },



  bianhuan: function (event) {
    var that = this;
    wx.request({
      url: app.globalData.url + '/bian',
      header: { "content-type": "application/json" },
      method: "get",
      success: function (re) {

        that.setData({ yanzhengma: re.data.bianma })

      }
    })
  },

  dengluming: function (event) {
    var that = this;
    that.setData({ sdengluming: event.detail.value })
  },

  mima: function (event) {
    var that = this;
    that.setData({ smima: event.detail.value })
  },

  shuruyanzhengma: function (event) {
    var that = this;
    that.setData({ syanzhengma: event.detail.value })
  },

  denglu: function (event) {
    var that = this;
    var syanzhengma1 = that.data.syanzhengma;
    var zyanzhengma = that.data.yanzhengma;
    if (syanzhengma1 == zyanzhengma) {
      wx.request({
        url: app.globalData.url + '/chaxun',
        data: { "uname": that.data.sdengluming, "upwd": that.data.smima },
        header: { "content-type": "application/json" },
        success: function (re) {
          var jieguo = re.data.huiqu;
          if (jieguo == "None") { that.setData({ shuchu: "么得学生" }) }
          else if (jieguo == "2") { that.setData({ shuchu: "您不正常" }) }
          else {
            wx.navigateTo({
              url: '../geren/geren',
            })
          }
        }

      })
    }
    else {
      console.log("输入正确的验证码")
      that.setData({ zhengquema: "请输入正确的码" })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.url + '/bo',
      header: { "content-type": "application/json" },
      method: "get",
      success: function (re) {
        console.log(re.data)
        that.setData({ yanzhengma: re.data[0].ma })
        that.setData({ lunbo: re.data[1].tu })

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