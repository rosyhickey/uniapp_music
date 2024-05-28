<template>
  <view>
		<uni-section title="登录" titleColor="#1ebcff" titleFontSize="25px" style="text-align: center;padding-top: 200rpx;">
			<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
					<uni-forms-item label="用户名" required name="username">
						<uni-easyinput v-model="valiFormData.username" placeholder="请输入用户名" />
					</uni-forms-item>
					<uni-forms-item label="密码" required name="password">
						<uni-easyinput v-model="valiFormData.password" type="password" placeholder="请输入密码" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('valiForm')">账号登录</button>
				<br />
				<button type="primary" @click="iphoneLogin()" style="margin-top: 50rpx;">微信登录</button>
				<span style="margin-top: 50rpx;">微信登录暂只支持微信小程序使用！</span>
			</view>
		</uni-section>
  </view>
</template>

<script>
	import store from '@/store/index.js'
	import xuanran from '@/utils/xuanran'
	// import { Store } from 'vuex'
	export default {
		data() {
			return {
				// 校验表单数据
				valiFormData: {
					username: '',
					password: '',
				},
				// 校验规则
				rules: {
					username: {
						rules: [{
							required: true,
							errorMessage: '用户名不能为空'
						},
						{
							minLength: 2,
							maxLength: 16,
							errorMessage: '用户名长度在 {minLength} 到 {maxLength} 个字符',
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '密码不能为空'
						}, {
							format: 'number',
							errorMessage: '密码只能输入数字'
						}]
					}
				}
			}
		},
		onLoad() {},
		methods: {
			submit(ref) {
				// console.log('登录状态为：',this.$store.state.isLogin);
				this.$refs[ref].validate().then(res => {
					// console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
					// 登录
					uni.request({
						url: 'http://api.kekc.cn/api/yiyan',
						method: 'GET',
						success: (res) => {
							// console.log(res);
							if (res.statusCode == 200) {
								// store.state.isLogin = true,
									setTimeout(
										// 登录成功跳转
										function() {
											uni.switchTab({
												url: '/pages/index/index',
											})
										}, 1500
									)
									// 更改本地信息渲染到用户主页
									// #ifndef MP
									sessionStorage.setItem('isLogin',true);
									// #endif
									
		// 需要注意的是vuex不具有持久性存储，当页面刷新时就会变成初始数据，如果需要保留修改后的数据建议调用数据的时候使用storage
									uni.setStorageSync('name', this.valiFormData.username);
									store.state.username = this.valiFormData.username;
									store.state.password = this.valiFormData.password;
									xuanran.touxiang(this.valiFormData.username)
							} else {
								uni.showToast({
									title: '登陆失败!'
								})
							}
						}
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
			
			// uni.login
			iphoneLogin(){
				// #ifdef APP
				console.log(app不支持微信登陆);
				uni.showToast({
					title:'当前登录只支持小程序',
					icon:'error'
				})
				// #endif
				
				// #ifdef MP
/* 				uni.getUserProfile({
					desc: '用于您的页面展示用户头像与昵称',
					lang: 'zh_CN',
					success: res => {
					    console.log('OK',res);
						console.log('用户昵称',res.userInfo.nickName);
						console.log('用户头像',res.userInfo.avatarUrl);
						// 跳转
						setTimeout(
							// 登录成功跳转
							function() {
								uni.switchTab({
									url: '/pages/index/index',
								})
							}, 1500
						);
						// 更新数据
						uni.setStorageSync('name', res.userInfo.nickName)
						store.state.username = res.userInfo.nickName;
						store.state.img = res.userInfo.avatarUrl;
						// store.state.password = this.valiFormData.password;
						// xuanran.touxiang(res.userInfo.nickName)
						
						this.isShowLogin = false;
						this.userInfo = res.userInfo;
					},
					fail: err => {
						console.log('报错信息',err.errMsg);
					}
				});
				console.log(this.$store.state.isLogin), */
				uni.login({
				    provider: 'weixin',
				    success: function (loginRes) {
				        // 登录成功
				        uni.getUserInfo({
				            provider: 'weixin',
				            success: function(info) {
				                // 获取用户信息成功, info.authResult保存用户信息
								console.log(info.userInfo);
								// 跳转
								setTimeout(
									// 登录成功跳转
									// console.log(this.$store.state.isLogin),
									function() {
										uni.switchTab({
											url: '/pages/index/index',
										})
									}, 1500
								);
								// 更新数据
								store.state.isLogin = true,
								// sessionStorage.getItem('isLogin',true);
								uni.setStorageSync('name', info.userInfo.nickName)
								// store.state.username = info.userInfo.nickName;
								store.state.username = info.userInfo.nickName;
								// store.state.img = info.userInfo.avatarUrl;
								store.state.img = info.userInfo.avatarUrl;
								// xuanran.touxiang(info.userInfo.nickName)
				            }
				        })
				    },
				    fail: function (err) {
				        // 登录授权失败
				        // err.code是错误码
				    }
				});
				
				// #endif

			}
		}
	}
</script>


<style lang="scss" scoped>

	.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
		margin-top: 30rpx;
	}

</style>
