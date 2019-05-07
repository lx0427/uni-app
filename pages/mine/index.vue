<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{ title }}</text>
		</view>
		<view class="box"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		}
	},
	methods: {
		getlist(cb) {
			uni.showLoading({
				title: '加载中'
			})
			setTimeout(() => {
				this.title = '加载返回'
				uni.hideLoading()
				cb && cb()
				console.log('getlist')
			}, 1000)
		}
	},
	//监听页面加载，其参数为上个页面传递的数据，参数类型为object（用于页面传参），参考示例
	onLoad() {
		console.log('onLoad', 'into - 1')
	},
	//监听页面显示
	onShow() {
		console.log('onShow', 'into - 2')
	},
	//监听页面初次渲染完成
	onReady() {
		console.log('onReady', 'into - 3')
	},
	//监听页面隐藏
	onHide() {
		console.log('onHide', '离开当前页面')
	},
	//监听页面卸载
	onUnload() {
		console.log('onUnload')
	},
	//监听用户下拉动作
	onPullDownRefresh() {
		console.log('onPullDownRefresh')
		this.getlist(() => {
			uni.stopPullDownRefresh()
			console.log('stopPullDownRefresh')
		})
	},
	//监听页面滚动
	onPageScroll() {
		console.log('onPageScroll')
	},
	//页面上拉触底事件的处理函数
	onReachBottom() {
		console.log('onReachBottom')
	},
	//用户点击右上角分享 微信小程序
	onShareAppMessage() {
		console.log('onShareAppMessage')
	},
	//当前是 tab 页时，点击 tab 时触发。
	onTabItemTap() {
		console.log('onTabItemTap')
	}
}
</script>

<style lang="scss" src="./index.scss"></style>
