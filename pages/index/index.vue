<template>
	<view>
		<app-header type="search"></app-header>
		<!-- #ifndef MP-ALIPAY -->
		<swiper
			@change="cardSwiper"
			class="card-swiper home__swiper"
			:class="dotStyle ? 'square-dot' : 'round-dot'"
			:indicator-dots="true"
			:circular="true"
			:autoplay="true"
			interval="5000"
			duration="500"
			indicator-color="#8799a3"
			indicator-active-color="#0081ff"
		>
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
				</view>
			</swiper-item>
		</swiper>
		<!-- #endif -->

		<title-hint>活动版块</title-hint>
		<view class="home__activity">
			<image class="home__activity-left" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" mode=""></image>
			<view class="home__activity-right">
				<image class="home__activity-right_image" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg" mode=""></image>
				<image class="home__activity-right_image" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg" mode=""></image>
			</view>
		</view>
		<title-hint>商城活动</title-hint>
		<view class="home__shopmall">
			<template v-for="(item, i) in swiperList">
				<image v-if="i < 4" :key="i" class="home__shopmall-image" :src="item.url" mode=""></image>
			</template>
		</view>
		<title-hint>优选商品</title-hint>
		<view class="home__preferred">
			<template v-for="i in 5">
				<goods-item :key="i"></goods-item>
			</template>
		</view>
	</view>
</template>

<script>
import appHeader from '@/components/app-header/index.vue';
import titleHint from '@/components/title-hint/index.vue';
import goodsItem from '@/components/goods-item/index.vue';
export default {
	components: {
		appHeader,
		titleHint,
		goodsItem
	},
	data() {
		return {
			cardCur: 0,
			dotStyle: false,
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			]
		};
	},
	methods: {
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		}
	},
	//监听页面加载，其参数为上个页面传递的数据，参数类型为object（用于页面传参），参考示例
	onLoad() {},
	//监听页面显示
	onShow() {
		console.log('onShow', 'into - 2');
	},
	//监听页面初次渲染完成
	onReady() {
		console.log('onReady', 'into - 3');
	},
	//监听页面隐藏
	onHide() {
		console.log('onHide', '离开当前页面');
	},
	//监听页面卸载
	onUnload() {
		console.log('onUnload');
	},
	//监听用户下拉动作
	onPullDownRefresh() {
		console.log('onPullDownRefresh', 'onPullDownRefresh');
		this.getlist();
	},
	//监听页面滚动
	onPageScroll() {
		console.log('onPageScroll');
	},
	//页面上拉触底事件的处理函数
	onReachBottom() {
		console.log('onReachBottom');
	},
	//用户点击右上角分享 微信小程序
	onShareAppMessage() {
		console.log('onShareAppMessage');
	},
	//当前是 tab 页时，点击 tab 时触发。
	onTabItemTap() {
		console.log('onTabItemTap');
	}
};
</script>

<style lang="scss" src="./index.scss"></style>
