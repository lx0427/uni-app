<template>
	<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit">
		<!-- <view> @down, @up, @init 必须配置 </view> -->
		<!-- <view> :down, :up, 可省略 </view> -->
		<!-- <view v-for="data in dataList"> 数据列表... </view> -->
		<ul class="order__list">
			<li class="order__item" v-for="i in num" :key="i">{{ i }}</li>
		</ul>
	</mescroll-uni>
</template>
<script>
// 引入mescroll-uni组件
import MescrollUni from 'mescroll-uni/mescroll-uni.vue';

export default {
	components: {
		MescrollUni
	},
	data() {
		return {
			num: 0,
			mescroll: null, //mescroll实例对象
			// 下拉刷新的配置
			downOption: {
				use: true // 是否启用下拉刷新; 默认true
				// auto: true // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
			},
			// 上拉加载的配置
			upOption: {
				use: true, // 是否启用上拉加载; 默认true
				auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
				isLock: false, //是否锁定上拉加载(设为true,可用于不触发upCallback,只保留回到顶部按钮的场景)
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 10 // 每页数据的数量,默认10
				},
				noMoreSize: 3, // 配置列表的总数量要大于等于6条才显示'-- END --'的提示
				empty: {
					tip: '暂无相关数据'
				}
			},
			// 列表数据
			dataList: []
		};
	},
	// 必须注册滚动到底部的事件,使上拉加载生效
	onReachBottom() {
		this.mescroll && this.mescroll.onReachBottom();
	},
	// 必须注册列表滚动事件,使下拉刷新生效
	onPageScroll(e) {
		this.mescroll && this.mescroll.onPageScroll(e);
	},
	methods: {
		// mescroll组件初始化的回调,可获取到mescroll对象
		mescrollInit(mescroll) {
			this.mescroll = mescroll;
		},
		/*下拉刷新的回调, 有三种处理方式: */
		downCallback(mescroll) {
			console.log('下拉刷新');
			setTimeout(() => {
				this.num = 6;
				uni.stopPullDownRefresh();
				mescroll.endSuccess();
			}, 1000);
			// 第2种: 下拉刷新和上拉加载调同样的接口, 那以上请求可删, 直接用mescroll.resetUpScroll()代替
			// mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			// 第3种: 下拉刷新什么也不处理, 可直接调用或者延时一会调用 mescroll.endSuccess() 结束即可
			// mescroll.endSuccess();
			// mescroll.endErr();
		},
		/*上拉加载的回调*/
		upCallback(mescroll) {
			console.log('上拉加载');
			setTimeout(() => {
				this.num = this.num + 6;
				mescroll.endSuccess();
			}, 1000);
			// 此时mescroll会携带page的参数:
			// let pageNum = mescroll.num; // 页码, 默认从1开始
			// let pageSize = mescroll.size; // 页长, 默认每页10条
			// uni.request({
			//   url: 'xxxx?pageNum=' + pageNum + '&pageSize=' + pageSize,
			//   success: data => {
			//     // 接口返回的当前页数据列表 (数组)
			//     let curPageData = data.xxx;
			//     // 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
			//     let totalPage = data.xxx;
			//     // 接口返回的总数据量(比如列表有26个数据,每页10条,共3页; 则totalSize值为26)
			//     let totalSize = data.xxx;
			//     // 接口返回的是否有下一页 (true/false)
			//     let hasNext = data.xxx;

			//     // 成功隐藏下拉加载状态
			//     //方法一(推荐): 后台接口有返回列表的总页数 totalPage
			//     mescroll.endByPage(curPageData.length, totalPage);

			//     //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
			//     //mescroll.endBySize(curPageData.length, totalSize);

			//     //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
			//     //mescroll.endSuccess(curPageData.length, hasNext);

			//     //设置列表数据
			//     if (mescroll.num == 1) this.dataList = []; //如果是第一页需手动制空列表
			//     this.dataList = this.dataList.concat(curPageData); //追加新数据
			//   },
			//   fail: () => {
			//     // 失败隐藏下拉加载状态
			//     mescroll.endErr();
			//   }
			// });
		}
	}
};
</script>

<style lang="scss" src="./index.scss"></style>
