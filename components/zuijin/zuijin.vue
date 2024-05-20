<template>
	<view>
		<h3>最近播放</h3>
		<view class="mainbox">
			<useList :songList="zuijin"></useList>
		</view>
	</view>
</template>

<script>
	import useList from '@/hooks/useList/useList.vue';
	import  store  from '@/store/index.js';
	export default {
		data() {
			return {
				songList: []
			};
		},
		methods:{
			uniqueArr(arr){
				return Array.from(new Set(arr))
			}
		},
		computed: {
			zuijin(){
				return this.uniqueArr(store.state.zuijinSongs)
			}
		},
		components: {
			useList
		}
	}
</script>

<style lang="scss">
	h3 {
		text-align: center
	}
	.mainbox{
		// height: 1050rpx;
	}
</style>