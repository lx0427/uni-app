<template>
	<view>
		<view class="appHeader__wrap bg-gradual-blue">
			<view class="appHeader__paddingTop"></view>
			<view class="appHeader__container">
				<view v-if="type === 'search'" class="appHeader__container-input">
					<text class="cuIcon-search appHeader__container-search"></text>
					请输入你需要搜索的商品名称12
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
		return {
		};
	},
	created() {
	}
};
</script>
<style lang="scss" src="./index.scss"></style>
