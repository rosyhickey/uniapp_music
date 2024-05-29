<template>
	<view class="box">
		<view class="top">
			<view class="touxiang">
				<image style="width: 80px; height: 80px; border-radius: 50px; " :src="src"></image>
				<view class="dialogInfo" v-if="true">
					<view>
						<!-- 输入框示例 -->
						<uni-popup ref="inputDialog" type="dialog">
							<uni-popup-dialog ref="inputClose" mode="input" title="更改昵称" :value="name"
								placeholder="请输入内容" @confirm="dialogInputConfirm">
							</uni-popup-dialog>
						</uni-popup>
					</view>
				</view>
			</view>
			<view class="username">
				<text @click="inputDialogToggle">{{name}}</text>
			</view>
		</view>
		<view class="main">
			<!-- 菜单栏区域 -->
			<view class="menu-box">
				<ul>
					<li @click="shoucang()"> <uni-icons type="star-filled" size="30"
							style="margin:5rpx 15rpx"></uni-icons> 我的收藏 <uni-icons type="right" style="margin-left: 200rpx;"></uni-icons>
					</li>
					<li @click="xihuan()"> <uni-icons type="heart-filled" size="30"
							style="margin:5rpx 15rpx"></uni-icons> 我的喜欢 <uni-icons type="right" style="margin-left: 200rpx;"></uni-icons>
					</li>
					<li @click="zuijin"> <uni-icons type="headphones" size="30" style="margin:5rpx 15rpx"></uni-icons>
						最近播放 <uni-icons type="right" style="margin-left: 200rpx;"></uni-icons> </li>
					<li @click="yigou"> <uni-icons type="shop-filled" size="30" style="margin:5rpx 15rpx"></uni-icons>
						已购音乐 <uni-icons type="right" style="margin-left: 200rpx;"></uni-icons> </li>
					<li @click="about"> <uni-icons type="chat-filled" size="30" style="margin:5rpx 15rpx"></uni-icons>
						关于我们 <uni-icons type="right" style="margin-left: 200rpx;"></uni-icons> </li>
				</ul>
			</view>

			<view class="denglu">
				<button class="exitbtn" @click="exit">退出登录</button>
			</view>
		</view>

		<view class="bottom">
			<span>"今日无事，勾栏听曲!"</span>
		</view>
	</view>
</template>

<script>
	import {
		watch
	} from "vue";
	import store from '@/store/index.js'
	import list from '@/store/list.js'
	export default {
		data() {
			return {
				showRight: false,
				showLeft: false,
				src: '',
				name: 'admin',
				value: ''
			}
		},
		watch: {
			name(val) {
				console.log('监听到的name是：', val);
				switch (val) {
					case '周杰伦': {
						this.src = list.singer.list[0].url;
						break;
					}
					case '莫文蔚': {
						this.src = list.singer.list[1].url;
						console.log(list.singer.list[1].url);
						break;
					}
					case '陈奕迅': {
						this.src = list.singer.list[2].url;
						console.log(list.singer.list[2].url);
						break;
					}
					case '郭富城': {
						this.src = list.singer.list[3].url;
						console.log(list.singer.list[3].url);
						break;
					}
					case '张国荣': {
						this.src = list.singer.list[4].url;
						console.log(list.singer.list[4].url);
						break;
					}
					case '刘德华': {
						this.src = list.singer.list[5].url;
						console.log(list.singer.list[5].url);
						break;
					}
					case 'Lady Gaga': {
						this.src = list.singer.list[6].url;
						console.log(list.singer.list[6].url);
						break;
					}
					case 'Taylor Swift': {
						this.src = list.singer.list[7].url;
						console.log(list.singer.list[7].url);
						break;
					}
					case 'Justin Bieber': {
						this.src = list.singer.list[8].url;
						console.log(list.singer.list[8].url);
						break;
					}
					default: {
						this.src =
							'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/33ef290e243791580094105690/KbIX8fifQfsA.png'
					}
				}
			}
		},
		onShow() {
			// this.name = localStorage.name,
			// this.src = localStorage.img
			// this.name = store.state.username;
			try {
				this.name = uni.getStorageSync('name');
				if (this.name) {
					console.log(this.name);
				}
			} catch (e) {
				// error
			}
			// this.src = store.state.img
			// console.log(this.src);
			// console.log('state',this.$store.state.img);
		},
		methods: {
			confirm() {},

			// 更新个人昵称
			inputDialogToggle() {
				this.$refs.inputDialog.open()
			},
			dialogClose() {
				console.log('点击关闭')
			},
			dialogInputConfirm(val) {
				uni.showLoading({
					title: '正在更新....'
				})

				setTimeout(() => {
					uni.hideLoading()
					console.log(val)
					this.value = val
					this.name = val
					store.state.username = val
					// uni.setStorage('name',val)
					uni.setStorage({
						key: 'name',
						data: val,
						success: function () {
							console.log('success');
						}
					});
					// store.state.img = this.src
					// localStorage.name = val
					// 关闭窗口后，恢复默认内容
					this.$refs.inputDialog.close()
				}, 1000)
			},


			// 跳转方法
			shoucang() {
				uni.navigateTo({
					url: '/pages/shoucang/shoucang'
				})
			},
			xihuan() {
				uni.navigateTo({
					url: '/pages/xihuan/xihuan'
				})
			},
			zuijin() {
				uni.navigateTo({
					url: '/pages/zuijin/zuijin'
				})
			},
			yigou() {
				uni.navigateTo({
					url: '/pages/yigou/yigou'
				})
			},
			about() {
				uni.switchTab({
					url: '/pages/about/about'
				})
			},
			// 退出登录
			exit() {
				// console.log(this.$store.state.isLogin);
				uni.redirectTo({
					url: '/pages/login/login2'
				})
				// this.$store.state.isLogin = false,
				sessionStorage.setItem('isLogin',false);
			// sessionStorage.removeItem('isLogin')
				// uni.clearStorage();
			}
		},

		// onNavigationBarButtonTap(e) {
		// 	if (this.showLeft) {
		// 		this.$refs.showLeft.close()
		// 	} else {
		// 		this.$refs.showLeft.open()
		// 	}
		// },
		// app端拦截返回事件 ，仅app端生效
		onBackPress() {
			if (this.showRight || this.showLeft) {
				this.$refs.showLeft.close()
				this.$refs.showRight.close()
				return true
			}
		}
	}
</script>



<style lang="scss" scoped>
	@mixin flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	@mixin height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
	}

	.button {
		@include flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		height: 35px;
		margin: 0 5px;
		border-radius: 5px;
	}

	.example-body {
		background-color: #fff;
		padding: 10px 0;
	}

	.button-text {
		color: #fff;
		font-size: 12px;
	}

	.popup-content {
		@include flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		height: 50px;
		background-color: #fff;
	}

	.popup-height {
		@include height;
		width: 200px;
	}

	.text {
		font-size: 12px;
		color: #333;
	}

	.popup-success {
		color: #fff;
		background-color: #e1f3d8;
	}

	.popup-warn {
		color: #fff;
		background-color: #faecd8;
	}

	.popup-error {
		color: #fff;
		background-color: #fde2e2;
	}

	.popup-info {
		color: #fff;
		background-color: #f2f6fc;
	}

	.success-text {
		color: #09bb07;
	}

	.warn-text {
		color: #e6a23c;
	}

	.error-text {
		color: #f56c6c;
	}

	.info-text {
		color: #909399;
	}

	.dialog,
	.share {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.dialog-box {
		padding: 10px;
	}

	.dialog .button,
	.share .button {
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		margin: 0;
		margin-top: 10px;
		padding: 3px 0;
		flex: 1;
	}

	.dialog-text {
		font-size: 14px;
		color: #333;
	}


	.box {
		// width: 100%;
		height: 700px;
		// background-image: url(https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/346ef0f4243791580094177741/ZXgYu8JYAIIA.png);
		// background-size: 100%;
		background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
	}

	// 头部
	.top {
		height: 220rpx;
		// background-color: #ffcc44;
		position: relative;

		.touxiang {
			text-align: center;

			img {
				border-radius: 100rpx;
			}
		}

		.username {
			position: absolute;
			left: 30%;
			width: 300rpx;
			height: 60rpx;
			font-size: 40rpx;
			// background-color: rgb(219, 210, 192);
			opacity: 1;
			text-align: center;
			border: 1rpx solid #ccffb9;
			border-radius: 40rpx;
		}
	}

	// 主体区域
	.main {
		height: 360px;
		// background-color: skyblue;
	}

	.menu-box {
		padding: 10px;
		margin: 0 auto;

		li:nth-child(1) {
			margin-top: 50px;
		}

		li {
			margin: auto;
			width: 500rpx;
			height: 70rpx;
			list-style: none;
			font-size: 20px;
			font-family: YOUYUAN;
			border: #e4e4e4 1px solid;
			margin-bottom: 10px;
			border-radius: 100rpx;
			padding-top: 6rpx;

			span {
				float: right;
				margin-right: 20rpx;
			}
		}


	}



	.info {
		padding: 15px;
		color: #666;
	}

	.info-text {
		font-size: 14px;
		color: #666;
	}

	.info-content {
		padding: 5px 15px;
	}

	.close {
		padding: 10px;
	}

	.bottom {
		width: 500rpx;
		height: 60px;
		// background-color: pink;
		line-height: 60px;
		position: absolute;
		// bottom: 0rpx;
		margin-top: 100rpx;
		text-align: center;
		left: 16%;
	}

	.exitbtn {
		width: 200rpx;
		height: 100rpx;
		font-size: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(255, 251, 240, 0.3);
		border: 1px solid #cc4444;
	}
</style>