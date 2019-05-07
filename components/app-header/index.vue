<template>
	<view>
		<view class="appHeader__wrap bg-gradual-blue">
			<view class="appHeader__paddingTop"></view>
			<view class="appHeader__container">
				<view v-if="type==='search'" class="appHeader__container-input">
					<text class="cuIcon-search appHeader__container-search"></text>
					请输入你需要搜索的商品名称
				</view>
			</view>
		</view>
		<view class="appHeader__fill"></view>
	</view>
</template>
<script>
export default {
	props: ['type'],
	date() {
		return {};
	}
};
</script>
<style lang="scss">
.appHeader {
	&__wrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		z-index: 1000;
	}
	&__paddingTop {
		/* #ifdef H5 */
		height: 0;
		/*  #endif */
		/* #ifndef H5 */
		height: 40upx;
		/*  #endif */
	}
	&__container {
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		&-input {
			width: 90%;
			height: 60upx;
			background-color: #fff;
			color: $uni-text-color-placeholder;
			font-size: 28upx;
			border-radius: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&-search {
			margin-right: 12upx;
		}
	}
	&__fill {
		/* #ifdef H5 */
		height: 80upx;
		/*  #endif */
		/* #ifndef H5 */
		height: 120upx;
		/*  #endif */
	}
}
</style>
