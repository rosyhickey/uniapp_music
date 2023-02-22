<template>
	<view class="box">
		<view class="top">
			<view class="touxiang">
				<!-- <img src="/static/singer/zhoujielun.png" alt="头像" width="80px"> -->
				<image 
				style="width: 80px; height: 80px; border-radius: 50px; " 
				:src="src"></image>
			</view>
			<view class="username">
				<text>Jay Chou</text>
			</view>
		</view>
		<view class="main">

				<view class="example-body">
					<button type="primary" @click="showDrawer('showLeft')"><text class="word-btn-white">显示菜单栏</text>
					</button>
					<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
						<view class="close">
							<button @click="closeDrawer('showLeft')"><text class="word-btn-white">关闭菜单栏</text></button>
						</view>
						<view class="info-content" v-for="item in 100" :key="item">
							<text>周杰伦 {{item}} 号</text>
						</view>
					</uni-drawer>
				</view>

		</view>
		
		<view class="bottom">
			<span>"欢迎你!周杰伦!"</span>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showRight: false,
				showLeft: false,
				src:'/static/singer/zhoujielun.png'
			}
		},
		methods: {
			confirm() {},
			// 打开窗口
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口
			closeDrawer(e) {
				this.$refs[e].close()
			},
			// 抽屉状态发生变化触发
			change(e, type) {
				console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
				this[type] = e
			}
		},
		onNavigationBarButtonTap(e) {
			if (this.showLeft) {
				this.$refs.showLeft.close()
			} else {
				this.$refs.showLeft.open()
			}
		},
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



<style lang="scss">
	.box{
		width: 100%;
		height: 800px;
		background-image: url(/static/userbgi.png);
		background-size: 100%;
	}
	// 头部
	.top{
		height: 220rpx;
		// background-color: #ffcc44;
		position: relative;
		
		.touxiang{
			text-align: center;
			img{
				border-radius: 100rpx;
			}
		}
		.username{
			position: absolute;
			left: 30%;
			width: 300rpx;
			height: 60rpx;
			font-size: 20px;
			background-color: rgb(219,210,192);
			text-align: center;
			border: 1rpx solid #000000;
			border-radius: 40rpx;
		}
	}
	
	.main{
		height: 360px;
		// background-color: skyblue;
	}
	.example-body {
		padding: 10px;
	}
	.scroll-view {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex:1
	}
	// 处理抽屉内容滚动
	.scroll-view-box {
		flex: 1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
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
	
	.bottom{
		width: 500rpx;
		height: 60px;
		// background-color: pink;
		line-height: 60px;
		position: absolute;
		// bottom: 0rpx;
		margin-top: 100px;
		text-align: center;
		left: 16%;
	}
</style>
