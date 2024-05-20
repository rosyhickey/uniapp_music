<template>
	<view>

		<view style="width: 90%; margin: 200rpx auto;"> <!-- 200rpx  == 100px -->
			<view style=" margin-bottom: 70rpx; font-size: 60rpx; color: royalblue; text-align: center;">登 录</view>
			<uni-forms ref="form" :modelValue="form" :rules="rules">
				<uni-forms-item name="username">
					<uni-easyinput v-model="form.username" prefixIcon="person" placeholder="请输入登录用户名"></uni-easyinput>
				</uni-forms-item>

				<uni-forms-item name="password">
					<uni-easyinput type="password" v-model="form.password" prefixIcon="locked"
						placeholder="请输入登录密码"></uni-easyinput>
				</uni-forms-item>
			</uni-forms>

			<view>
				<button type="primary" @click="login">登 录</button>
			</view>
			<!-- <navigator url="/pages/register/register" style="margin: 40rpx 0; color: deepskyblue;">前往注册</navigator> -->
		</view>
	</view>
</template>

<script>
	import xuanran from '@/utils/xuanran.js'
	import store from '@/store/index.js'

	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				},
				rules: {
					username: {
						rules: [{
								required: true,
								errorMessage: '请输入用户名'
							},
							{
								minLength: 5,
								maxLength: 15,
								errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
							}],
						validateTrigger: 'submit'
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '请输入密码'
						}],
						validateTrigger: 'submit'
					},
				}
			}
		},
		onShow() {
			// console.log(this.$data.form.username);
			this.$data.form.username = '',
				this.$data.form.password = ''
		},
		methods: {
			login() {
				uni.request({
					url: 'http://api.kekc.cn/api/yiyan',
					// url:'http://121.40.79.162/api.txt',
					method: 'GET',
					success: (res) => {
						console.log(res);
						if (res.statusCode == 200) {
							if (this.form.username.length != 0) {
								uni.showToast({
									title: "登陆成功!",
									duration: 1500
								})
								setTimeout(
									// 登录成功跳转
									function() {
										uni.switchTab({
											url: '/pages/index/index',
										})
									}, 1500
								)
								// 更改本地信息渲染到用户主页
								uni.setStorageSync('name', this.form.username)
								store.state.username = this.form.username;
								store.state.password = this.form.password;
								// uni.setStorageSync("img",'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/714e1b68243791580098520112/mx1jQUy0dUoA.png')
								xuanran.touxiang(this.form.username)
								// sessionStorage.setItem("name", this.form.username)
								// sessionStorage.setItem("img",'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/33ecee26243791580094101425/2nSAl9ewfy8A.png')
							} else {
								uni.showToast({
									title: '请输入用户名!',
									icon: 'error'
								})
							}

						} else {
							uni.showToast({
								title: '登陆失败!'
							})
						}
						// 刷新用户信息,重新获取用户信息界面,展示出来,把用户信息存储到本地
					}
				})

			}
		},
	}
</script>

<style>

</style>