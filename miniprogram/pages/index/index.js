//index.js
const app = getApp()
import data from './data'

Page({
	data: {
		avatarUrl: './user-unlogin.png',
		json: data,
		pageIndex: 1,
		pageSize: 6,
		audioPlay: true, // 音乐是否在播放中
		audioTime:0, // 音频播放时间
		audioShowTimeText: '0:00',
		audioTimeCount: 204, // 音乐总时长
		audioTimePercent: '100%',
		sort: true,	// 时间线排列顺序
		sendMask: false, // 发送消息时的遮罩
	},

	onLoad: function() {
		wx.cloud.init();
		// 1. 获取数据库引用
		const db = wx.cloud.database()
		// 2. 构造查询语句
		// collection 方法获取一个集合的引用
		// where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
		// get 方法会触发网络请求，往数据库取数据
		db.collection('test').get({
			success: function(res) {
				// 输出 [{ "title": "The Catcher in the Rye", ... }]
				console.log(res)
			}
		})
		wx.setNavigationBarTitle({
			title: '回忆'
		});
		wx.showShareMenu();
		const timeList = this.data.json.slice(0, this.data.pageIndex * 6);
		timeList.forEach(item => {
			if ( !item.pictureList ) return;
			item.pictureList = item.pictureList.map(i => {
				i = i + '?x-oss-process=image/auto-orient,1';
				return i
			})
		});
		const InnerAudioContext = this.InnerAudioContext = wx.createInnerAudioContext();
		InnerAudioContext.autoplay = false;
		InnerAudioContext.src = 'https://ip-h5-nf01-sycdn.kuwo.cn/c76d20d0c3b8029ac8e5a4b8bf8de97b/5eb3fdc1/resource/n2/58/22/3367339971.mp3'
		this.InnerAudioContext.onPlay(() => {
			this.timer = setInterval(() => {
				this.data.audioTime ++;
				this.setData({
					audioTimePercent: (1 - this.data.audioTime / this.data.audioTimeCount) * 100 + '%',
					audioTime: this.data.audioTime
				})
			}, 1000)
		});
		InnerAudioContext.onStop((res) => {
			clearInterval(this.timer);
		})
		InnerAudioContext.onError((res) => {
			clearInterval(this.timer);
		})
		InnerAudioContext.onEnded((res) => {
			clearInterval(this.timer);
		})
		this.setData({
			timeList: timeList
		})
	},

	onShow() {
		this.setData({ audioPlay: true })
		this.InnerAudioContext.play();
	},
	onHide() {
		this.setData({ audioPlay: true })
		this.InnerAudioContext.stop();
	},

	onReachBottom() {
		this.data.pageIndex ++;
		const timeList = this.data.json.slice((this.data.pageIndex - 1) * 6, this.data.pageIndex * 6);
		timeList.forEach(item => {
			if ( !item.pictureList ) return;
			item.pictureList = item.pictureList.map(i => {
				if (i.search(' x-oss-process') === -1) i = i + '?x-oss-process=image/auto-orient,1';
				return i
			})
		})
		this.setData({
			timeList: this.data.timeList.concat(timeList)
		})
	},

	viewImage(e) {
		const [index, i] = e.target.dataset.index.split("-");
		wx.previewImage({
			current: this.data.timeList[index].pictureList[i],
			urls: this.data.timeList[index].pictureList,
		})
	},

	// 播放音乐
	startAudio() {
		this.setData({ audioPlay: true })
		this.InnerAudioContext.play();
		this.InnerAudioContext.seek(this.data.audioTime);
	},

	// 停止播放音乐
	stopAudio() {
		this.setData({ audioPlay: false })
		this.InnerAudioContext.stop();
	},

	// 修改列表展示顺序
	handleSort() {
		const json = this.data.json.reverse();
		const timeList = this.data.json.slice(0, 6);
		timeList.forEach(item => {
			if ( !item.pictureList ) return;
			item.pictureList = item.pictureList.map(i => {
				if (i.search('x-oss-process') === -1) i = i + '?x-oss-process=image/auto-orient,1';
				return i
			})
		});
		this.setData({
			sort: !this.data.sort,
			json: json,
			pageIndex: 1,
			timeList: timeList
		})
	},

	// 发送消息
	sendMessage() {
		this.setData({sendMask: !this.data.sendMask})
		wx.navigateTo({
            url: '/pages/upload/index'
        })
	},

	hideMask() {
		this.setData({sendMask: false})
	}
})
