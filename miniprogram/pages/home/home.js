// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        albumList: [
            {
                name: '弯弯',
                router: '/pages/index/index'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
			title: '我的相册'
		});
    },


    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    gotoDetail(e) {
        console.log(e);
        const data = e.currentTarget.dataset.item
        wx.navigateTo({
            url: data.router
        })
    }
})