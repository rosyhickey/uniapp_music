<template>
	<view class="box" style="		background-image: url(https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/7172e610243791580098541450/lz8yH2Q7nOsA.jpg);">
		<view class="top">
			<uni-icons custom-prefix="custom-icon" type="heart-filled" size="30" color="skyblue"></uni-icons>
			<text class="title">喜欢的歌手列表:</text>
		</view>
		<view class="jiugongge">
				<!-- 因为swiper特性的关系，请指定swiper的高度 ，swiper的高度并不会被内容撑开-->
				<swiper class="swiper" :indicator-dots="true">
					<swiper-item>
						<navigator url="/components/details/details">
							<uni-grid :column="3" :highlight="true" @change="change">
								<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
									<view class="grid-item-box">
										<image :src="item.url" class="image" mode="aspectFill" />
										<text class="text">{{ item.text }}</text>
									</view>
								</uni-grid-item>
							</uni-grid>
						</navigator>
					</swiper-item>
					<swiper-item>
						<uni-grid :column="3" :highlight="true" @change="change">
							<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
								<view class="grid-item-box">
									<image :src="item.url" class="image" mode="aspectFill" />
									<text class="text">{{ item.text }}</text>
								</view>
							</uni-grid-item>
						</uni-grid>
					</swiper-item>
				</swiper>
		</view>
		<view class="addbox">
			<uni-fab ref="fab" 
			:pattern="pattern" 
			:content="content" 
			:horizontal="horizontal" 
			:vertical="vertical"
			:direction="direction" 
			@trigger="trigger" 
			
			 />
		</view>
	</view>
	<!-- // 主体区域 -->
	
</template>

<script>
	import list from "@/store/list.js"
	export default {
		components: {},
		data() {
			return {
				dynamicList: [],
				list:list.singer.list,
				title: 'uni-fab',
				directionStr: '垂直',
				horizontal: 'left',
				vertical: 'bottom',
				direction: 'horizontal',
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#FF3300',
					buttonColor: '#007AFF',
					iconColor: '#fff'
				},
					is_color_type: false,
					content: [{
							iconPath: '/static/musicicon/add-circle.png',
							selectedIconPath: '/static/selected/add-circle.png',
							text: '添加歌手',
							active: false
						},
						{
							iconPath: '/static/musicicon/telephone.png',
							selectedIconPath: '/static/selected/telephone.png',
							text: '联系我们',
							active: false
						},
						{
							iconPath: '/static/musicicon/favorite.png',
							selectedIconPath: '/static/selected/favorite.png',
							text: '收藏',
							active: false
						}
					]
					}
				},
				onBackPress() {
					if (this.$refs.fab.isShow) {
						this.$refs.fab.close()
						return true
					}
					return false
				},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				this.list[index].badge && this.list[index].badge++

				uni.showToast({
					title: `点击第${index+1}个宫格`,
					icon: 'none'
				})
			},
			add() {
				if (this.dynamicList.length < 9) {
					this.dynamicList.push({
						url: `/static/c${this.dynamicList.length+1}.png`,
						text: `Grid ${this.dynamicList.length+1}`,
						color: this.dynamicList.length % 2 === 0 ? '#f5f5f5' : "#fff"
					})
				} else {
					uni.showToast({
						title: '最多添加9个',
						icon: 'none'
					});
				}
			},
			del() {
				this.dynamicList.splice(this.dynamicList.length - 1, 1)
			},
			trigger(e) {
				console.log(e)
				this.content[e.index].active = !e.item.active
				if(e.index == 1){
					uni.showModal({
						title:'添加我的微信:',
						content:'vx:rosyhickey',
					})
				}else{
					uni.showModal({
						title: '提示',
						content: `您${this.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定')
								uni.showToast({
									title: `操作成功!`,
									icon: 'success'
								})
							} else if (res.cancel) {
								console.log('用户点击取消')
							}
						}
					})
				}

			},
			// fabClick() {
			// 	uni.showToast({
			// 		title: '点击了按钮',
			// 		icon: 'none'
			// 	})
			// },
		}				
	}
</script>


<style lang="scss">
	.warp {
			padding: 10px;
		}
	.button {
		margin-bottom: 10px;
	}
	// 盒子css
	.box{
		width: 100%;
		height: 800px;
		// background-image: url(/static/cat.jpg);
		background-size: 100%;
	}
	.top{
		height: 40px;
		// background-color: pink;
		line-height: 40px;
		display:flex;
		.title{
			padding-left: 5px;
			font-family: YouYuan;
		}
	}
	
	.image {
		width: 90px;
		height: 90px;
		border-radius: 50rpx;
	}

	.text {
		font-size: 14px;
		margin-top:0px;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		// display: block;
		/* #endif */
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10rpx 0;
	}

	.grid-item-box-row {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}

	.swiper {
		height: 420px;
		// position: absolute;
	}

	/* #ifdef H5 */
	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}

	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}

	/* #endif */
</style>

