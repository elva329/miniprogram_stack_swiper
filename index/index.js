Page({
  data: {
    
    imgUrls: [
    {
      id: 0,
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545220114942&di=3bf52981626b3cc290dd684df29e714c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8b82b9014a90f6038de2556a3212b31bb051ed4a.jpg',
    }, {
    id: 1,
    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545220114942&di=3bf52981626b3cc290dd684df29e714c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8b82b9014a90f6038de2556a3212b31bb051ed4a.jpg',
    }, {
      id: 2,
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545220114942&di=3bf52981626b3cc290dd684df29e714c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8b82b9014a90f6038de2556a3212b31bb051ed4a.jpg',
      main_title:'3'
    }],
    autoplay:false,
    interval: 5000,
    duration: 1000,
    circular: true,
    leftMargin: '80rpx',
    rightMargin: '80rpx',
    currentIndex: 0
  },
  handleChange: function (e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
})
