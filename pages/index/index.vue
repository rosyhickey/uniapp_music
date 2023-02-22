<template>
	<view class="box">
		<!-- 顶部 -->
		<view class="top">
			<!-- 顶左log -->
			<view class="log">
				<!-- <img src="/static/musicicon/erji.png" alt="log" width="25rpx"> -->
				<uni-icons custom-prefix="custom-icon" type="headphones" size="25" color="rgb(105,104,58)"></uni-icons>
				<span class="logtext">RosyHickey的主页</span>
			</view>
			<!-- 顶右日期 -->
			<view class="date">
				<!-- <img src="/static/musicicon/shoubiao.png" alt="日期" width="25rpx"> -->
				<!-- <span class="logdate">{{date}}</span> -->
				<uni-dateformat :date="date" format="MM/dd hh:mm"></uni-dateformat>
				<!-- <uni-icons custom-prefix="custom-icon" type="redo-filled" size="25" color="rgb(105,104,58)"></uni-icons> -->

			</view>
		</view>
		<!-- 问候语区域 -->
		<view class="wenhou">
			<view class="wenhoubox">
				<span class="wenhoutext">早安! {{name}}</span>
			</view>
		</view>
		<!-- 分割线 -->
		<view class="fenge">
			<hr/>
		</view>
		
		
		
		<!-- 主页音乐播放 -->
		<view class="musiclove">
			<view class="one" @click="mojito()">
				<img src="static/musicimg/mojito.png" alt="mojito" width="101rpx">
				<i class="musictitle">mojito</i>
			</view>
			<view class="two" @click="youkelili()">
				<img src="static/musicimg/youkelili.png" alt="尤克里里" width="101rpx">
				<i class="musictitle">尤克里里</i>
			</view>
			<view class="three" @click="yintian()">
				<img src="static/musicimg/yintian.png" alt="阴天" width="101rpx">
				<i class="musictitle">阴天</i>
			</view>
		</view>
		
		<!-- 随机祝福语 -->
		<view class="wishbox">
			<span class="wishtext">"Bless You!"</span>
		</view>
		
		<!-- 底部二维码 -->
		<view class="erweima">
			<img src="static/erweima1.png" alt="erweima" width="100rpx">
		</view>
		
		<!-- 一个跳转测试按钮 -->
		<navigator url="../skippage/skippage" class="btnbox">
			<button class="btn">打卡</button>
		</navigator>
	</view>
</template>

<script>
import music from '@/js/music';
	export default {
		data() {
			return {
				name: 'RosyHickey',
				musicstate:false,
				date: Date.now()
			}
		},
		// computed: {
		// 	time: function(){
		// 		return this.date.getFullYear()
		// 	}
		// },
		methods: {
			mojito() {
				music.mojito()
			},
			youkelili() {
				music.youkelili()
			},
			yintian() {
				music.yintian()
			},
			
		},
	}
</script>

<style lang="scss">
	.box{
		position: relative;
		height: 800px;
		background-color: #CCFF99;
		background-image: url(/static/index1.jpg); background-size: 100%;
		// 顶部区域
		.top{
			height: 80rpx;
			display: flex;
			justify-content: space-between;
			// position: relative;
			// background-color: #66CCCC;
			.log{
				// position: absolute;
				margin-left: 20rpx;
				width: 260rpx;
				height: 50rpx;
				// background-color: pink;
				display: flex;
				.logtext{
					font-size: 25rpx;
					padding-left: 8rpx;
					color: #000000;
					text-align: center;
					line-height: 50rpx;
				}
				
			}
			.date{
				width: 240rpx;
				height: 50rpx;
				margin-right: 20rpx;
				// background-color: #CC66FF;
				display: flex;
				.logdate{
					font-size: 25rpx;
					padding-left: 8rpx;
					color: #000000;
					text-align: center;
					line-height: 50rpx;
				}
			}
		}
		// 问候语区域
		.wenhou{
			height: 220rpx;
			// background-color: #00CC33;
			position: relative;
			.wenhoubox{
				position: absolute;
				top:50rpx ;
				width: 500rpx;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-left: 125rpx;
				margin-bottom: 25rpx;
				border: 2rpx solid #000000;
				border-radius: 50rpx;
				.wenhoutext{
					text-align: center;
					line-height: 100rpx;
					font-size: 50rpx;
					font-family: cursive;  //草书
					}
				}
		}
		// 音乐播放区域
		.musiclove{
			position: relative;
			height: 200rpx;
			// background-color: #FF66FF;
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 25rpx 40rpx 25rpx;
			.one,.two,.three{
				background-color: skyblue;
				width: 200rpx;
				height: 200rpx;
				border-radius: 100rpx;
				overflow:hidden;
				display: flex;
				justify-content: center;
				.musictitle{
					position: absolute;
					height: 10rpx;
					bottom: 25rpx;
					text-decoration:underline;
					// padding-left: 50rpx;
				}
			}
		}
		// 祝福语区域
		.wishbox{
			padding-top: 50rpx;
			width: 500rpx;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 125rpx;
			.wishtext{
				text-align: center;
				line-height: 100rpx;
				font-size: 50rpx;
				font-family: cursive;  //草书
			}
		}
		// 二维码区域
		.erweima{
			position: absolute;
			left: 0rpx;
			bottom:0rpx;
		}
		//跳转测试
		.btnbox{
			width: 200rpx;
			margin-left: 275rpx;
			.btn{
				width: 200rpx;
				border-radius: 10px;	
				border: 1px solid black;
				text-align: center;
				background:rgba(255, 251, 240, 0.3); 
			}
		}
		.fenge{
			width: 500rpx;
			margin: 0 auto;
		}
		
	}
</style>
