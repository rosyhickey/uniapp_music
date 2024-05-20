<template>
	<view>
		<h3>收藏列表</h3>
		<useList :songList="songList"></useList>
	</view>
</template>

<script>
	import useList from '@/hooks/useList/useList.vue';
	export default {
		data() {
			return {
				songList: [{
						p: '周杰伦',
						title: '周杰伦-Mojito',
						sid: 1
					},
					{
						p: '尤克里里',
						title: '尤克里里-椿',
						sid: 2
					}
				],
			};
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
</style>