<template>
	<view>
		<view v-for="item in ">
			
		</view>
		<uni-section title="歌手信息" type="line" v-for="item in list">
					<uni-card :title="item.text" extra="歌手" :thumbnail="item.url" @click="onClick(item)">
						<text class="uni-body" v-text="item.song"></text>
					</uni-card>
				</uni-section>
		
	</view>
</template>

<script>
	import list from "@/store/list.js"
	console.log('!!!'+list.singer.list[0].text);
	console.log(list.singer.list); //数组
	export default {
		data() {
			return {
				list:list.singer.list,
				name:list.singer.list[0].text,
				cover: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
						avatar: list.singer.list[0].url,
						extraIcon:{
							color: '#4cd964',
							size: '22',
							type: 'gear-filled'
						}
			};
		},
		methods: {
			// onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			// 		console.log(option); //打印出上个页面传递的参数。
			// 	},
			
			onClick(e){
							console.log(e.text);
							uni.navigateTo({
								url:'/components/search/search?key='+e.text
							})
						},
						actionsClick(text){
							uni.showToast({
								title:text,
								icon:'none'
							})
						}
		},
	}
</script>

<style lang="scss">

</style>
