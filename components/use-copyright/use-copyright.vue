<template>
	<view>
		<!-- #ifndef MP-TOUTIAO -->
		<view class="use-copyright dflex-c padding-lr w-full" @click="to">
			<view class="iconfont iconxiangqing animated rotate margin-right-sm ft-base"></view>
			<view class="ft-dark"></view><text class="margin-lr-xs">·</text><text></text>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
export default {
	props: {
		
	},
	data() {
		return {};
	},
	methods: {
		to() {
			this.$emit('to', {
				type: 'to'
			});
		}
	}
};
</script>

<style lang="scss">
.use-copyright {
	height: 180rpx;
}
.use-copyright {
	text {
		color: #c0c0c0;
	}
}
</style>
