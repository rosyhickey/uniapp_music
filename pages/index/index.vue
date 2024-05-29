<template>
	<view class="box"
		style="background-image: url(https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/719adcfe243791580098568077/kzRsoQFRClMA.jpg);">
		<!-- 顶部 -->
		<view class="top">
			<!-- 顶左log -->
			<view class="log">
				<!-- <img src="/static/musicicon/erji.png" alt="log" width="25rpx"> -->
				<uni-icons custom-prefix="custom-icon" type="headphones" size="25" color="rgb(105,104,58)"></uni-icons>
				<span class="logtext">RosyHickey</span>
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
				<span class="wenhoutext" @click="toSongDetail">早安! {{name}}</span>
			</view>
		</view>
		<!-- 分割线 -->
		<view class="fenge">
			<hr />
		</view>



		<!-- 主页音乐播放 -->
		<view class="musiclove">
			<view class="one" v-for="(sItem,index) in firstSongs" :key="index" @click="start(sItem)">
				<img src="https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/71736130243791580098542035/lXpANcmd0psA.png"
					alt="mojito" width="110rpx">
					<span class="musictitle">{{sItem.title}}</span>
			</view>
<!-- 			<view class="one" @click="mojito()">
				<img src="https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/71736130243791580098542035/lXpANcmd0psA.png"
					alt="mojito" width="110rpx">
				<i class="musictitle">mojito</i>
			</view>
			<view class="two" @click="youkelili()">
				<img src="https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/6f7c1344243791580098498585/x8ViaGmKN7gA.png"
					alt="尤克里里" width="110rpx">
				<i class="musictitle">尤克里里</i>
			</view>
			<view class="three" @click="yintian()">
				<img src="https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/712a8cf1243791580098501680/R9HPe1iyQa8A.png"
					alt="阴天" width="110rpx">
				<i class="musictitle">阴天</i>
			</view> -->
		</view>

		<!-- 随机诗句 -->
		<view class="wishbox" @click="change">
			<!-- <span class="wishtext">"Bless You!"</span> -->
			<span class="wishtext">{{wishtext}}</span>
		</view>



		<!-- 一个跳转测试按钮 -->
		<navigator url="../skippage/skippage" class="btnbox">
			<button class="btn">打卡</button>
		</navigator>
	</view>
</template>

<script>
	import music from '@/utils/music';
	import store from '@/store/index.js'
	import startSong from '../../utils/startSong';
	import songsList from "@/store/songs.js"
	export default {
		data() {
			return {
				name: 'RosyHickey',
				musicstate: false,
				date: Date.now(),
				wishtext: '',
				songsList: songsList.songsList,
			}
		},
		computed:{
			firstSongs(){
				return this.songsList.slice(0,3)
			}
		},
		onShow() {
			// console.log(store.state.username);
			// this.name = store.state.username
			try {
				this.name = uni.getStorageSync('name');
				if (this.name) {
					console.log(this.name);
				}
			} catch (e) {
				// error
			}
			// console.log('登陆状态',sessionStorage.isLogin);
		},
		onLoad() {
			uni.request({
				url: "https://v1.jinrishici.com/rensheng.txt",
				success: (res) => {
					this.wishtext = res.data
					uni.showToast({
						title: '点击刷新',
						duration: 1500
					});
				}
			})
		},
		methods: {
			start(e){
				console.log('所点击的歌曲对象',e);
				startSong.start(e.sid);
				// console.log('获取store',this.$store.state.zuijinSongs);
				this.$store.state.zuijinSongs.unshift(e);
				// console.log('添加后的state数据',this.$store.state.zuijinSongs);
				// 跳转当前播放歌曲
					uni.navigateTo({
						url: `/pages/songDetail/songDetail?sid=${e.sid}&p=${e.p}&title=${e.title}`
					})
			},
			change() {
				// console.log('state:',this.$store.state.isLogin);
				// console.log('sessionstorage:',sessionStorage.isLogin);
				uni.request({
						url: "https://v1.jinrishici.com/rensheng.txt",
						success: (res) => {
							console.log(res.data);
							this.wishtext = res.data
						}
					}),
					console.log(this.date);
			}
		},
	}
</script>

<style lang="scss">
	.box {
		position: relative;
		height: 700px;
		background-color: #CCFF99;
		// background-image: url(/static/index1.jpg);
		background-size: 100%;

		// 顶部区域
		.top {
			height: 80rpx;
			display: flex;
			justify-content: space-between;

			// position: relative;
			// background-color: #66CCCC;
			.log {
				// position: absolute;
				margin-left: 20rpx;
				width: 260rpx;
				height: 50rpx;
				// background-color: pink;
				display: flex;

				.logtext {
					font-size: 25rpx;
					padding-left: 8rpx;
					color: #000000;
					text-align: center;
					line-height: 50rpx;
				}

			}

			// 日期
			.date {
				width: 240rpx;
				height: 50rpx;
				margin-right: 20rpx;
				// background-color: #CC66FF;
				display: flex;

				.logdate {
					font-size: 25rpx;
					padding-left: 8rpx;
					color: #000000;
					text-align: center;
					line-height: 50rpx;
				}
			}
		}

		// 问候语区域
		.wenhou {
			height: 220rpx;
			// background-color: #00CC33;
			position: relative;

			.wenhoubox {
				position: absolute;
				top: 50rpx;
				width: 500rpx;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-left: 125rpx;
				margin-bottom: 25rpx;
				border: 2rpx solid #000000;
				border-radius: 50rpx;

				.wenhoutext {
					text-align: center;
					line-height: 100rpx;
					font-size: 50rpx;
					font-family: cursive; //草书
				}
			}
		}

		// 音乐播放区域
		.musiclove {
			position: relative;
			height: 220rpx;
			// background-color: #FF66FF;
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 25rpx 40rpx 25rpx;

			.one,
			.two,
			.three {
				background-color: skyblue;
				width: 200rpx;
				height: 200rpx;
				border-radius: 100rpx;
				overflow: hidden;
				display: flex;
				justify-content: center;

				.musictitle {
					position: absolute;
					height: 10rpx;
					bottom: 25rpx;
					font-size: 28rpx;
					font-family: YOUYUAN;
					// text-decoration: underline;
					// padding-left: 50rpx;
				}

				img {
					width: 100%;
					height: 100%;
				}
			}
		}

		// 祝福语区域
		.wishbox {
			padding-top: 50rpx;
			width: 500rpx;
			height: 100rpx;
			// background-color: pink;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 125rpx;
			margin-top: 50rpx;

			.wishtext {
				text-align: center;
				line-height: 100rpx;
				font-size: 30rpx;
				font-family: cursive; //草书
			}
		}

		// 二维码区域
		.erweima {
			position: absolute;
			left: 0rpx;
			bottom: 0rpx;
		}

		//跳转测试
		.btnbox {
			// background-color: skyblue;
			width: 200rpx;
			margin-left: 275rpx;
			margin-top: 200rpx;

			.btn {
				width: 200rpx;
				border-radius: 10px;
				border: 1px solid black;
				text-align: center;
				background: rgba(255, 251, 240, 0.3);
			}
		}

		.fenge {
			width: 500rpx;
			margin: 0 auto;
		}

	}
</style>