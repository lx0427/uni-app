<template>
	<view class="goodsItem__wrap">
		<image class="goodsItem__image" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" mode="aspectFill"></image>
		<view class="goodsItem__content">
			<text class="goodsItem__content-title">FDY-83dtex/36f</text>
			<view class="goodsItem__content-list">
				<view class="goodsItem__tag">AA</view>
				<view class="goodsItem__tag">83dtex/36f</view>
				<view class="goodsItem__tag">KG</view>
			</view>
			<view class="goodsItem__content-list">
				<view class="goodsItem__price">
					￥
					<view class="goodsItem__price-current">8.77</view>
				</view>
				(库存：1000000.0)
			</view>
		</view>
	</view>
</template>
<script>
export default {
	date() {
		return {};
	}
};
</script>
<style lang="scss">
.goodsItem {
	&__wrap {
		display: flex;
		color: $uni-text-color;
		padding: 20upx 0;
		margin: 0 30upx;
		border-bottom: 1px solid $uni-border-color-light;
	}
	&__image {
		width: 200upx;
		height: 150upx;
		border-radius: 10upx;
		margin-right: 30upx;
	}
	&__content {
		display: flex;
		flex-direction: column;
		&-title {
			font-size: 32upx;
			font-weight: 600;
		}
		&-list {
			display: flex;
			align-items: flex-end;
			margin-top: 20upx;
		}
	}
	&__tag {
		font-size: 20upx;
		line-height: 1;
		padding: 8upx 20upx;
		background-color: $uni-bg-color-grey;
		border-radius: 20upx;
		& + & {
			margin-left: 10upx;
		}
	}
	&__price {
		color: $uni-color-error;
		font-weight: 600;
		display: flex;
		align-items: flex-end;
		margin-right: 16upx;
		&-current {
			font-size: 40upx;
			line-height: 1;
		}
	}
}
</style>
