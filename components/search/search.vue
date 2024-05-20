<template>
	<view class="body"
		style="background-image: url(https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/32178170243791580094073238/EWMBFISS46gA.jpg);">
		<view class="top">
			<!-- 标签栏 -->
			<view>
				<view class="biaoqian-body">
					<view class="tag-view">
						<uni-tag text="周杰伦" type="primary" @click="start(1)" />
					</view>
					<view class="tag-view">
						<uni-tag text="尤克里里" type="success" @click="start(2)" />
					</view>
					<view class="tag-view">
						<uni-tag text="莫文蔚" type="warning" @click="start(3)" />
					</view>
					<view class="tag-view">
						<uni-tag text="English" type="error" @click="nobuy()" />
					</view>
					<view class="tag-view">
						<uni-tag text="日语" @click="nobuy()" />
					</view>
				</view>
			</view>
			<view class="fengexian">
				<hr>
			</view>
		</view>

		<!-- 歌曲区域 -->
		<view class="main">
			<view class="musiclist">
				<view class="songs-list" v-for="(sItem,index) in newArr" :key="index" @click="start(sItem.sid)">
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
	import startSong from "@/utils/startSong.js"
	export default {
		data() {
			return {
				searchValue: '',
				type: "default",
				inverted: false,
				currentPage: 1,
				total: '',
				pageSize: 4,
				songsList: songsList.songsList,
				newArr:[]
			}
		},
		onLoad(option) { //option为object类型，会序列化上个页面传递的参数
			console.log('上个页面传过来的',option.key); //打印出上个页面传递的参数。
			// this.newArr = this.songsList.filter(function(item){
			// 	 return item.p.includes(this.keyword);  
			// });
			this.newArr = this.songsList.filter(function(item) {  
			    // 如果对象的p属性等于"周杰伦"，返回true，否则返回false  
			    return item.p === option.key || item.p.includes(option.key);  
			}); 
			console.log(this.newArr);
		},
		onShow() {
			console.log('原始列表',songsList.songsList);
			// console.log(newArr);
		},
		// 计算属性
		computed: {
			// Calculate total pages based on the number of items and pageSize
			totalPages() {
				// return Math.ceil(this.songsList.length / this.pageSize);
				return this.newArr.length
			},
			// Paginate the songs list based on currentPage and pageSize
			paginatedSongs() {
				let startIndex = Number((this.currentPage - 1) * this.pageSize);
				let endIndex = startIndex + this.pageSize;
				return this.songsList.slice(startIndex, endIndex);
				console.log('分割后的列表',this.songsList);
			}
		},
		// 方法
		methods: {
			// 分页
			onPageChange(page) {
				this.currentPage = page.current;
			},
			nobuy() {
				uni.showToast({
					title: '该歌手歌曲尚未收录!',
					icon: 'none',
				})
			},
			
			setType() {
				let types = ["default", "primary", "success", "warning", "error"];
				let index = types.indexOf(this.type);
				types.splice(index, 1);
				let randomIndex = Math.floor(Math.random() * 4);
				this.type = types[randomIndex];
			},
			setInverted() {
				this.inverted = !this.inverted;
			},
			onBackPress() {
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord();
				// #endif
			},

			start(e){
				startSong.start(e)
			}
		},

	}
</script>


<style lang="scss">
	.body {
		height: 800px;
		// background-image: url(/static/flower.jpg);
		background-size: 100%;
		position: relative;
	}

	// 头部区域
	.top {
		padding-top: 20rpx;
		.search-result {
			padding-top: 10px;
			padding-bottom: 20px;
			text-align: center;
		}

		.search-result-text {
			text-align: center;
			font-size: 14px;
			color: #666;
		}

		// .example-body {
		// 	/* #ifndef APP-NVUE */
		// 	display: block;
		// 	/* #endif */
		// 	padding: 0px;
		// }

		.uni-mt-10 {
			margin-top: 10px;
		}

		.biaoqian-body {
			display: flex;
			justify-content: space-around;
		}

		.fengexian {
			width: 66%;
			margin: 30rpx auto;
		}
	}


	//主体区域
	.main {
		width: 100%;
		height: 300px;
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

			.one,
			.two,
			.three,
			.four,
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
	}
</style>