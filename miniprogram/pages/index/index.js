//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    timeList: [{
        avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
        name: '林先生很幸运遇见勇敢的弯弯',
        description: '今天是和弯弯相见的第一天，12月19号,我们一起吃了火锅， 一起玩了蹦床，最后牵了双手，很开心的一天',
        createDate: '2019-12-08',
        pictureList:[
            'https://img.souche.com/f2e/f296cfa1bde7c0bf8d5f4d464bdc84a3.jpg',
            'https://img.souche.com/f2e/01b480ebdad0cc13021599d1bc0c8868.jpg',
            'https://img.souche.com/f2e/d649c5c2e19097d29929f2d876488e9f.jpg',
            'https://img.souche.com/f2e/a60d01c215d3b566f4467da17fe2343f.jpg',
            'https://img.souche.com/f2e/0886328ae2c5b1878737173460284825.jpg',
            'https://img.souche.com/f2e/9d21b060da8ca7cbf8b8ad87e2256c6d.jpg',
            'https://img.souche.com/f2e/ba06789462e97e61128b03429b55ca09.jpg'           
        ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '弯弯新任男友！！！',
      description: '今天是交往后的第二天，弯弯向我撒娇昨天玩的好累，都动不了了。我们一起玩了《百变大侦探》。往后余生，皆是你',
      createDate: '2019-12-09',
    },
    {
        avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
        name: '领着小尾巴逛逛大上海',
        description: '今天我第一次跑到上海来找弯弯。第一次满怀期待的来到一个城市。想到了一句话，因为一个人，爱上一座城~~~。一起看了电影，网上口碑很高的悬疑片《利刃出鞘》，抱着弯弯看电影，真是一种别样的体验呢',
        createDate: '2019-12-14',
        pictureList: [
            'https://img.souche.com/f2e/490f7d16102503cc51880f478106fcad.jpg',
            'https://img.souche.com/f2e/5020faa048d20b0ab2fae8a320bdf1de.jpg'
        ]
    },
    {
        avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
        name: '新手师傅带着只小菜鸡',
        description: '教一个小菜鸟打台球，发现拍的几张照片，弯弯还很有职业选手气质呢。哟，这个小马甲',
        createDate: '2019-12-14',
        pictureList:[
            'https://img.souche.com/f2e/9d84e598a04282d4d981c9843c69e17b.jpg',
            'https://img.souche.com/f2e/83bed63cab67a5d28e652fa2642feead.jpg',           
        ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '新手师傅带着只小菜鸡',
      description: '原来想带弯弯玩电玩的，可是商场的电玩关门了。忧伤o(╥﹏╥)o，最后还是看了电影，和弯弯互相拥抱分别了。下次出行，我要好好计划呢',
      createDate: '2019-12-15',
    },
    {
        avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
        name: '林先生携弯小姐再逛上海',
        description: '啦啦啦，带着小弯弯来逛七宝古街了。好多人，原来这里竟然隐藏着一条美食街啊。哭了，我们却提前吃了砂锅米线。o(╥﹏╥)o',
        createDate: '2019-12-28',
        pictureList:[
            'https://img.souche.com/f2e/d57474cd4d0cb80839f43aab967e6fa1.jpg',
            'https://img.souche.com/f2e/68f5962513909fc9b2c71c849a8bb6a3.jpg',
            'https://img.souche.com/f2e/03394fac2bbbfcc1af36867bb0d89d29.jpg',
            'https://img.souche.com/f2e/3ffcce513d6e1c3fa32c4675b9a62372.jpg',
            'https://img.souche.com/f2e/f6f2ca13af98b45d552c64116bd731bb.jpg',           
        ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '蹭了弯弯的早餐',
      description: '我吃了弯弯带来的豆腐脑喝小油条，出发去海洋博物馆啦',
      createDate: '2019-12-28 10:30'
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '海洋博物馆半日游',
      description: '吃了串串，第一次体验了4d电影，原来朋友圈们说的抖动是这样的。但最重要的是，我又和弯弯同框出境了！！！',
      createDate: '2019-12-28 14:30',
      pictureList:[
        'https://img.souche.com/f2e/64f2de43dfc6828c59f987c08e449479.jpg',
        'https://img.souche.com/f2e/352fdf2cacb6bd7a30144d7e9bd1f14f.jpg',
        'https://img.souche.com/f2e/192fffb841bd4e219c7da3e900911c8f.jpg',
        'https://img.souche.com/f2e/fcd09afde56f47e67f9d3a31cc6a86f6.jpg',
        'https://img.souche.com/f2e/5de8db09ee1703d6a2079f96a2833d12.jpg',           
      ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '粉色的弯弯',
      description: '哇塞，弯弯带我来了一个粉色摩高世界，整个场地都是粉粉的，弯弯也是！',
      createDate: '2019-12-29 14:30',
      pictureList:[
        'https://img.souche.com/f2e/599bbf0e35e7d67cd1a8b6884c60bfbd.jpg',
        'https://img.souche.com/f2e/f2005cbe4336ee7e1388e833eaef43b4.jpg',
        'https://img.souche.com/f2e/068830ab1eef341f8870ccd4fa674926.jpg',
        'https://img.souche.com/f2e/adce47784ba4c630abbe40a1915bf13d.jpg',         
      ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '谢谢你，很幸运，遇到你',
      description: '滴滴滴，前方高能预警，开始撒狗粮啦！',
      createDate: '2019-12-29 15:30',
      pictureList:[
        'https://img.souche.com/f2e/bdb6e14890cdadca6fb609bc36b1f794.jpg',
        'https://img.souche.com/f2e/e06a1154e34d7a909fae5cdee925ef45.jpg',
        'https://img.souche.com/f2e/31e23b25ba75140f0e2ed2e08825f5e5.jpg'          
      ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '与弯弯留恋酒吧的小弯弯',
      description: '没想到弯弯会为了我准备一个这么大的惊喜。内心默默许下一个愿望：弯弯，我想照顾你一辈子！谢谢你相信我，不负如来不负卿。对了，弯弯你手是要脱衣服吗啊，啊，你想干嘛！！',
      createDate: '2020-01-01 00:30',
      pictureList:[
        'https://img.souche.com/f2e/98c7baa0341a0c3789edc076f9b33e68.jpg',
        'https://img.souche.com/f2e/4285318cd531cdaf3cc43c8d43e493ce.jpg',
        'https://img.souche.com/f2e/61924202fcb9dec30975ead37e97365e.jpg',
        'https://img.souche.com/f2e/e8909dc85553680af26ec84b5aac0e90.jpg',
        'https://img.souche.com/f2e/ca825c96e16bbca07d15be8211301bcb.jpg'             
      ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '过新年的林先生',
      description: '希望明年可以和弯弯一起吃年夜饭，嘻嘻',
      createDate: '2020-01-24',
      pictureList:[
        'https://img.souche.com/f2e/96a517411b52ea4b45067afad412e7f9.jpg'         
      ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '换上新头像的林先生',
      description: '全新情侣头',
      createDate: '2020-02-05',
      pictureList:[
        'https://img.souche.com/f2e/04fc012be76caf8c0ea5cffb1e13a95e.jpg',
        'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg'         
      ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '快成望妻石的林先生',
      description: '今天的 弯弯有点高冷哎，不敢牵手，ε=(´ο｀*)))唉。',
      createDate: '2020-02-05',
      pictureList:[
        'https://img.souche.com/f2e/be4f373047da188b94412f5096efc6ee.jpg'        
      ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '努力锻炼，奥利给',
      description: '锻炼，锻炼，不然肥肉全长出来了',
      createDate: '2020-04-19',
      pictureList:[
        'https://img.souche.com/f2e/1457222d9c4d49c8ac635221a16affbe.jpg'    
      ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '一位普通上班青年',
      description: '弯弯今天早上主动和我说话了哎，看样子，终于可以约弯弯一起出去玩了，感到',
      createDate: '2020-04-23',
      pictureList:[
        'https://img.souche.com/f2e/2dd465a5b1315a0bf289e62a9d956ccb.jpg'    
      ]
    },
    {
      avatarUrl: 'https://img.souche.com/f2e/4b78aba8efb7bcd3d98cf0a899233151.jpg',
      name: '变成前男友的林先生',
      description: '事情怎么会变成这样子呢，为什么呢。。。说好的不负如来不负卿，我今天到底怎么了',
      createDate: '2020-04-25',
      pictureList:[
        'https://img.souche.com/f2e/be4f373047da188b94412f5096efc6ee.jpg',
        'https://img.souche.com/f2e/c7921bb695693b3cc83fc9056ccd1526.jpg'        
      ]
    },
  ]
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  viewImage(e) {
    const [index, i] = e.detail.index.split("-");
    console.log(index, i)
    wx.previewImage({
      current: i,
      urls: this.data.pictureList[index],
    })
  }


})
