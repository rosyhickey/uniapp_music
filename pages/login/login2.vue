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
				<button type="primary" @click="submit('valiForm')">登录</button>
			</view>
		</uni-section>
  </view>
</template>

<script>
	import store from '@/store/index.js'
	import xuanran from '@/utils/xuanran'
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
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
					// 登录
					uni.request({
						url: 'http://api.kekc.cn/api/yiyan',
						method: 'GET',
						success: (res) => {
							console.log(res);
							if (res.statusCode == 200) {
									setTimeout(
										// 登录成功跳转
										function() {
											uni.switchTab({
												url: '/pages/index/index',
											})
										}, 1500
									)
									// 更改本地信息渲染到用户主页
									uni.setStorageSync('name', this.valiFormData.username)
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
	}

</style>
