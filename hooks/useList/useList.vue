<template>
	<view class="body" style="height:1100rpx">
		<view class="main">
			<view class="musiclist">
				<view class="songs-list" v-for="(sItem,index) in paginatedSongs" :key="index" @click="start(sItem.sid)">
					<uni-icons type="headphones" size="30"></uni-icons>
					<text>{{sItem.title}}</text>
				</view>
			</view>
		</view>
		
		<!-- 底部分页器 -->
		<view class="bottom">
			<uni-pagination :total="totalPages" :pageSize="pageSize" :current="currentPage"
				@change="onPageChange" title="标题文字" />
		</view>
	</view>
</template>

<script>
	import music from "@/utils/music.js"
	import songsList from "@/store/songs.js"
	import startSong from "@/utils/startSong"
	export default {
		name: "useList",
		data() {
			return {
				type: "default",
				inverted: false,
				currentPage: 1,
				total: '',
				pageSize: 8,
				songsList: songsList.songsList,
			}
		},
		props: {
			songList: {
				type: Array,
				default: function(){
					return []
				}
			},
		},
		onShow() {
			console.log('原始列表',songsList.songsList);
		},
		// 计算属性
		computed: {
			// 总数
			totalPages() {
				return this.songList.length
			},
			// 根据当前page页码分割后的列表
			paginatedSongs() {
				let startIndex = Number((this.currentPage - 1) * this.pageSize);
				let endIndex = startIndex + this.pageSize;
				return this.songList.slice(startIndex, endIndex);
				console.log('分割后的列表',this.songsList);
			}
		},
		// 方法
		methods: {
			// 分页
			onPageChange(page) {
				// console.log('当前page',page);
				this.currentPage = page.current;
			},
			nobuy() {
				uni.showToast({
					title: '该歌手歌曲尚未收录!',
					icon: 'none',
				})
			},
			start(e){
				startSong.start(e)
			},
			
			setInverted() {
				this.inverted = !this.inverted;
			},
			onBackPress() {
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord();
				// #endif
			}
		}
	
	}
</script>

<style lang="scss">
	.body {
		// height: 1050rpx;
		// background-image: url(/static/flower.jpg);
		background-size: 100%;
		position: relative;
	}


	//主体区域
	.main {
		width: 100%;
		// height: 300px;
		height:100%;
		background-color: rgb(221, 217, 216);
		opacity: 0.5;
		position: relative;

		.musiclist {
			width: 95%;
			// height: 850rpx;
			background-color: rgb(234, 224, 212);
			position: absolute;
			left: 2.5%;
			top: 10rpx;
			border-radius: 15rpx;

			.songs-list {
				height: 125rpx;
				border: 2rpx solid #000;
				border-radius: 30rpx;
				margin-bottom: 10rpx;
				text-align: center;
				line-height: 125rpx;
			}
		}
	}

	//底部分页器
	.bottom {
		width: 100%;
		height: 70rpx;
		position: absolute;
		margin-bottom: 0rpx;
		margin-top:5rpx;
	}
</style>