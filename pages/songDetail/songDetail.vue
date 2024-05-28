<template>
	<view
		style="background-image: url('https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/1e75f7973270835009201823445/HZlC7cO3Ps4A.jpg'); background-size: 100%;background-position: center;">
		<!-- 歌名 -->
		<view class="songTitle">
			{{e.title}}
		</view>

		<!-- CDimg -->
		<view class="cdImg" @click="totestcode">
			<img src="https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/2c6e57351253642697282010006/YsgMTOAlrMIA.png"
				alt="mojito" width="110rpx" id="cd" class="xuanzhuanimg">
		</view>

		<!-- 歌词 -->
		<view class="songWords">
			{{e.title}}
		</view>

		<!-- 进度条 -->
		<view class="songTime">
			<view class="songTimeBox">
				<view class="cTime">{{ currentTime }}</view>
				<slider v-model="sliderValue" @change="onSliderChange" max="100" style="width: 65%;"
					:block-size='blockSize' block-color='#A2ABAA' activeColor='#19C590'></slider>
				<view class="sTime">{{ duration }}</view>
			</view>
		</view>

		<!-- 播放键 -->
		<view class="pauseBtn">
			<!-- <button @click="pauseMusic">{{btnText}}</button> -->
			<img src="/static/xh.png" alt="" v-if="!isLike" @click="xihuan" class="btn2"/>
			<img src="/static/xh2.png" alt="" v-if="isLike" @click="xihuan" class="btn2"/>
			<img src="/static/Player, pause.png" alt="" v-if="isPaused" @click="pauseMusic" class="btn"/>
			<img src="/static/Player, play.png" alt="" v-if="!isPaused" @click="pauseMusic" class="btn"/>
			<img src="/static/sc.png" alt="" v-if="!isSc" @click="shoucang" class="btn2"/>
			<img src="/static/sc2.png" alt="" v-if="isSc" @click="shoucang" class="btn2"/>
		</view>

	</view>
</template>

<script>
	import music from '../../utils/music';
	export default {
		name: "songDetail",
		data() {
			return {
				e:{
					title: '',
					sid: '',
					p: '',
				},
				isPaused: true,
				btnText: '暂停',
				// isRotating:true
				duration: '',
				currentTime: '',
				juuaa: null, // 将 juuaa 声明在 data 中以便在多个方法中使用
				intervalIDqw: null,
				sliderValue: 0,
				blockSize: 12, // 滑块大小
				isLike:false,
				isSc:false
			};
		},
		onLoad: function(option) {
			console.log(option);
			this.e.sid = option.sid;
			this.e.title = option.title;
			this.e.p = option.p
		},
		onReady() {
			this.juuaa = music.innerAudioContext
			this.juuaa.onCanplay(() => {
				let intervalID = setInterval(() => {
					if (this.juuaa.duration !== 0) {
						clearInterval(intervalID);
						this.duration = this.formatTime(this.juuaa.duration) // 总时长
						this.currentTime = this.formatTime(this.juuaa.currentTime) // 当前时长
						// console.log("当前时长", this.currentTime);
						// console.log("音频时长", this.duration);
						if (this.currentTime === this.duration) {
							// this.currentTime = 0
							clearInterval(intervalID);
						}
					}
				}, 500);
			})

			this.juuaa.onTimeUpdate(() => {
				this.currentTime = this.formatTime(this.juuaa.currentTime);
				if (!this.dragging) { // 避免拖动滑块时自动更新
					this.sliderValue = (this.juuaa.currentTime / this.juuaa.duration) * 100;
				}
			})
		},
		onShow(){
			// 判断是否已经是喜欢或者收藏
			// const includeLike() => return this.$store.state.xihuanSongs.includes(this.e);
			// console.log(includeLike);
		},

		methods: {
			pauseMusic() {
				console.log(music.innerAudioContext.paused);
				if (this.isPaused) {
					this.btnText = '播放';
					music.innerAudioContext.pause();
					this.isPaused = !this.isPaused;
					document.querySelector('#cd').classList.remove('xuanzhuanimg')
				} else {
					this.btnText = '暂停';
					music.innerAudioContext.play();
					this.isPaused = !this.isPaused;
					document.querySelector('#cd').classList.add('xuanzhuanimg');
					// 获取时长方法
					let intervalIDs = setInterval(() => {
						if (this.juuaa.duration !== 0) {
							// clearInterval(intervalID);
							this.duration = this.formatTime(this.juuaa.duration) // 总时长
							this.duration = this.formatTime(this.juuaa.duration) //总时长
							this.currentTime = this.formatTime(this.juuaa.currentTime) // 当前时长
							// console.log("当前时长", this.currentTime)
							// console.log("音频时长", this.duration);
							if (this.currentTime === this.duration) {
								// this.currentTime = 0
								clearInterval(intervalIDs);
							}
						}
					}, 1000);
					// 启动定时器，每秒更新一次进度条位置
					      this.intervalIDqw = setInterval(() => {
					        if (this.juuaa.duration > 0) {
					          this.sliderValue = (this.juuaa.currentTime / this.juuaa.duration) * 100;
					        }
					      }, 1000);
				}
			},

			onSliderChange(event) {
				const value = event.detail.value;
				if (this.juuaa && this.juuaa.duration > 0) {
					// 验证 value 是否是有效的百分比值（0-100之间）
					if (isNaN(value) || value < 0 || value > 100) {
						console.error("Invalid value:", value);
						return;
					}

					// 计算新的位置
					const newPosition = (value / 100) * this.juuaa.duration;

					// 验证 newPosition 是否是有效的数字，不是 NaN，并且在有效范围内
					if (!isNaN(newPosition) && newPosition >= 0 && newPosition <= this.juuaa.duration) {
						// 设置音频播放位置
						this.juuaa.seek(newPosition);
						console.log("Seeking to position:", newPosition);
						if (!this.dragging) { // 避免拖动滑块时自动更新
							this.sliderValue = value;
						}
					} else {
						console.error("Invalid newPosition:", newPosition);
					}
				}
			},

			// 格式化时间的函数，将秒转换为分:秒格式
			formatTime(seconds) {
				const minutes = Math.floor(seconds / 60);
				const remainingSeconds = Math.floor(seconds % 60);
				return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
			},
			
			// 喜欢、收藏
			xihuan(){
				if(!this.isLike){
					this.isLike = !this.isLike
					this.$store.state.xihuanSongs.unshift(this.e)
					console.log('喜欢列表：',this.$store.state.xihuanSongs);
					uni.showToast({
						title:'已添加至喜欢！',
						icon:'success'
					})
				}else{
					this.isLike = !this.isLike
					// this.$store.state.xihuanSongs.shift(this.e)
					uni.showToast({
						title:'已从喜欢移除！',
						icon:'success'
					})
				}

			},
			shoucang(){
				if(!this.isSc){
					this.isSc = !this.isSc,
					this.$store.state.shoucangSongs.unshift(this.e)
					console.log('收藏列表：',this.$store.state.shoucangSongs);
					uni.showToast({
						title:'已添加至收藏！',
						icon:'success'
					})
				}else{
					this.isSc = !this.isSc
					// this.$store.state.shoucangSongs.pop(this.e)
					uni.showToast({
						title:'已从收藏移除！',
						icon:'success'
					})
				}
			},

			// 跳转testcode
			totestcode() {
				uni.navigateTo({
					url: '/pages/testcode/testcode'
				})
			}
		}
	}
</script>

<style lang="less">
	.songTitle {
		text-align: center;
		font-size: 20px;
		// margin: 20rpx;
		padding-top: 20rpx;
		color: #40cc4b;
	}

	.cdImg {
		width: 500rpx;
		height: 500rpx;
		margin: auto;
		margin-top: 50rpx;
		margin-bottom: 50rpx;

		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}

	.xuanzhuanimg {
		/* 应用动画 */
		animation: spin 15s linear infinite;
	}

	/* 定义动画 */
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
	.songWords{
		text-align: center;
		margin-top: 120rpx;
	}

	.songTimeBox{
		display: flex;
		justify-content: center;
		margin-top: 50rpx;
		.cTime,.sTime{
			line-height: 200%;
		}
	}
	
	.pauseBtn {
		// bottom: 0rpx;
		// margin: 0 auto;
		// margin-top: 200rpx;
		padding-bottom: 50rpx;
		text-align: center;
		margin: 200rpx auto 80rpx;
		.btn{
			margin: auto;
			width: 150rpx;
			height: 150rpx;
		}
		.btn2{
			margin: 0 50rpx;
			width: 80rpx;
			height: 80rpx;
			margin-bottom: 30rpx;
		}
	}
</style>