<template>
	<view class="body"
		style="background-image: url(https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/32178170243791580094073238/EWMBFISS46gA.jpg);">
		<view class="top">
			<!-- 搜索框 -->
			<uni-search-bar @confirm="search" :focus="false" v-model="searchValue" @blur="blur" @focus="focus"
				@input="input" @cancel="cancel" @clear="clear" clearButton="auto" cancelButton="none">
			</uni-search-bar>
			<!-- 标签栏 -->
			<view>
				<view class="biaoqian-body">
					<view class="tag-view">
						<uni-tag text="周杰伦" type="primary" @click="mojito()" />
					</view>
					<view class="tag-view">
						<uni-tag text="尤克里里" type="success" @click="youkelili()" />
					</view>
					<view class="tag-view">
						<uni-tag text="莫文蔚" type="warning" @click="yintian()" />
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
				<!-- <view class="one" @click="mojito()">
					<uni-icons type="headphones" size="30"></uni-icons>
					<text>周杰伦-Mojito</text>
				</view> -->
				<view class="songs-list" v-for="(sItem,index) in paginatedSongs" :key="index" @click="start(sItem)">
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
	import startSong from "../../utils/startSong"
	import store from "@/store/index.js"
	
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
				// zuijinSongs:[]
			}
		},
		onShow() {
			console.log('原始列表',songsList.songsList);
		},
		// 计算属性
		computed: {
			// Calculate total pages based on the number of items and pageSize
			totalPages() {
				// return Math.ceil(this.songsList.length / this.pageSize);
				return this.songsList.length
			},
			// Paginate the songs list based on currentPage and pageSize
			paginatedSongs() {
				let startIndex = Number((this.currentPage - 1) * this.pageSize);
				let endIndex = startIndex + this.pageSize;
				return this.songsList.slice(startIndex, endIndex);
				console.log('分割后的列表',this.songsList);
			},
			
			// 最近播放
			zuijinSongs(){
				// return this.$store.state.zuijinSongs
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
			start(e){
				console.log('所点击的歌曲对象',e);
				startSong.start(e.sid);
				// console.log('获取store',this.$store.state.zuijinSongs);
				this.$store.state.zuijinSongs.unshift(e);
				// console.log('添加后的state数据',this.$store.state.zuijinSongs);
				// 跳转当前播放歌曲
					uni.navigateTo({
						url: `../songDetail/songDetail?sid=${e.sid}&p=${e.p}&title=${e.title}`
					})
			},
			
			// 搜索相关方法
			search(res) {
				// uni.showToast({
				// 	title: '搜索：' + res.value,
				// 	icon: 'none',
				// }),
				uni.navigateTo({
					url:'/pages/search/search?key='+res.value
				}),
				console.log('搜索了',res.value)
			},
			input(res) {
				console.log('----input:', res)
			},
			clear(res) {
				uni.showToast({
					title: 'clear事件，清除值为：' + res.value,
					icon: 'none'
				})
			},
			blur(res) {
				uni.showToast({
					title: 'blur事件，输入值为：' + res.value,
					icon: 'none'
				})
			},
			focus(e) {
				uni.showToast({
					title: 'focus事件，输出值为：' + e.value,
					icon: 'none'
				})
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
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
			}
		}

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