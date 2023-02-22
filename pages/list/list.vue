<template>
	<view class="body">
		<view class="top">
			<!-- 搜索框 -->
			<uni-search-bar
				@confirm="search" 
				:focus="false"
				v-model="searchValue" 
				@blur="blur" 
				@focus="focus" 
				@input="input"
				@cancel="cancel" 
				@clear="clear"
				clearButton="auto"
				cancelButton="none">
			</uni-search-bar>
			<!-- 标签栏 -->
			<view>
				<view class="biaoqian-body">
					<view class="tag-view">
						<uni-tag text="周杰伦" type="primary" @click="mojito()"/>
					</view>
					<view class="tag-view">
						<uni-tag text="尤克里里" type="success" @click="youkelili()"/>
					</view>
					<view class="tag-view">
						<uni-tag text="莫文蔚" type="warning" @click="yintian()"/>
					</view>
					<view class="tag-view">
						<uni-tag text="English" type="error" @click="nobuy()"/>
					</view>
					<view class="tag-view">
						<uni-tag text="日语" @click="nobuy()"/>
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
				<view class="one" @click="mojito()">
					<uni-icons type="headphones" size="30"></uni-icons>
					<text>周杰伦-Mojito</text>
				</view>
				<view class="two" @click="youkelili()">
					<uni-icons type="headphones" size="30"></uni-icons>
					<text>尤克里里-椿</text>
				</view>
				<view class="three" @click="yintian()">
					<uni-icons type="headphones" size="30"></uni-icons>
					<text>莫文蔚-阴天</text>
				</view>
				<view class="four" @click="haojiubujian()">
					<uni-icons type="headphones" size="30"></uni-icons>
					<text>陈奕迅-好久不见</text>
				</view>
			</view>
		</view>
		
		<!-- 底部分页器 -->
		<view class="bottom">
			<uni-pagination :total="4" title="标题文字" />
		</view>
	</view>

</template>

<script>
	import music from "@/js/music.js"
	export default {
		data() {
			return {
				searchValue: '',
				type: "default",
				inverted: false,
			}
		},
		methods: {
			nobuy(){
				uni.showToast({
					title: '该歌手歌曲尚未收录!',
					icon: 'none',
				})
			},
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none',
				})
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
				// uni.showToast({
				// 	title: 'blur事件，输入值为：' + res.value,
				// 	icon: 'none'
				// })
			},
			focus(e) {
				// uni.showToast({
				// 	title: 'focus事件，输出值为：' + e.value,
				// 	icon: 'none'
				// })
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
			},
			mojito(){
				music.mojito()
			},
			youkelili(){
				music.youkelili()
			},
			yintian(){
				music.yintian()
			},
			haojiubujian(){
				uni.showToast({
					title:"没钱买!",
					icon:"error"
				})
			}
		},
		
	}
</script>


<style lang="scss">
	.body{
		height: 800px;
		background-image: url(/static/flower.jpg);
		background-size: 100%;
		position: relative;
	}
	// 头部区域
	.top{
		.search-result {
			padding-top: 10px;
			padding-bottom: 20px;
			text-align: center;
		}
		
		.search-result-text {
			text-align: center;
			font-size: 14px;
			color:#666;
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
		.biaoqian-body{
			display: flex;
			justify-content: space-around;
		}
		.fengexian{
			width:66%;
			margin: 30rpx auto;
		}
	}

	
	//主体区域
	.main{
		width: 100%;
		height: 300px;
		background-color: rgb(221,217,216);
		opacity: 0.5;
		position: relative;
		.musiclist{
			width: 95%;
			// height: 850rpx;
			 background-color: rgb(234,224,212);
			 position: absolute;
			 left: 2.5%;
			 top: 10rpx;
			 border-radius: 15rpx;
			 .one,.two,.three,.four{
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
	.bottom{
		width: 100%;
		height: 70rpx;
		position: absolute;
		margin-bottom: 0rpx;
	}
</style>
