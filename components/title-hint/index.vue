<template>
	<view class="titleHint__wrap cu-bar bg-white">
		<view class="action">
			<text class="cuIcon-title text-blue"></text>
			<slot></slot>
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
	.titleHint{
		&__wrap{
			margin: 10upx 0;
		}
	}
</style>
