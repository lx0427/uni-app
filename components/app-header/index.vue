<template>
	<view>
		<view class="appHeader__wrap bg-gradual-blue">
			<view class="appHeader__paddingTop"></view>
			<view v-if="type === 'search'" class="appHeader__container">
				<view class="appHeader__container-input">
					<text class="cuIcon-search appHeader__container-search"></text>
					请输入你需要搜索的商品名称
				</view>
			</view>
			<view v-else class="appHeader__container">
				<view class="appHeader__container-left">
					<slot name="left"></slot>
				</view>
				<view class="appHeader__container-center">
					<slot name="center"></slot>
					<!-- <input placeholder="默认关键字" placeholder-style="color:#c0c0c0;" @tap="toSearch()" />
					<view class="icon search"></view> -->
				</view>
				<view class="appHeader__container-right">
					<slot name="right"></slot>
				</view>
			</view>
		</view>
		<view class="appHeader__fill"></view>
	</view>
</template>
<script>
export default {
	props: ['type'],
	name: 'app-header',
	date() {
		return {};
	},
	created() {}
};
</script>
<style lang="scss" src="./index.scss"></style>
