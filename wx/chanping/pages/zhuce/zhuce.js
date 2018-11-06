// pages/zhuce/zhuce.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cmingzi:"",
    cmima:"",
    cxingbie:"",
    cshouji:"",
    cyouxiang:"",

    xiaotu:"",
    xianshizi:""
  
  },


  chuantu:function(event)
  {
    var that = this;

    wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      
      sourceType: ["album", "camera"],

      success: function (re) {
        
        var tu = re.tempFilePaths;
        
        that.setData({ "xiaotu": tu[0] });
        
        uptu(that, tu[0])

      },
    })
    //上传图方法
    function uptu(that, path) {
      
      wx.showToast({
        title: '在传了',
        icon: 'loading'
      })
      
      wx.uploadFile({
        url: app.globalData.url + '/chuantu',
        filePath: path,
        
        name: 'shangchuanming',
        
        header: { "content-type": "multipart/form-data" },
        success: function (re) {
          
        }


      })

    }
  },

  denglu:function(event)
  {
    var path="../denglu/denglu"
    wx.navigateTo({
      url: path,
    })
  },


  mingzi:function(event)
  {
    var that=this;
    that.setData({ cmingzi: event.detail.value})
  },
  mima: function (event) {
    var that = this;
    that.setData({ cmima: event.detail.value })
  },
  xingbie: function (event) {
    var that = this;
    that.setData({ cxingbie: event.detail.value })
  },
  shouji: function (event) {
    var that = this;
    that.setData({ cshouji: event.detail.value })
  },
  youxiang: function (event) {
    var that = this;
    that.setData({ cyouxiang: event.detail.value })
  },
  zhuce:function(event)
  {
    var that=this;
    wx.request({
      url: app.globalData.url+"/zhuce",
      data: { "name": that.data.cmingzi, "pwd": that.data.cmima, "sex": that.data.cxingbie, "phone": that.data.cshouji, "mail": that.data.cyouxiang},
      header: { "content-type": "application/json"},
      success:function(re)
      {
        that.setData({ xianshizi:re.data.huizhuce})
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