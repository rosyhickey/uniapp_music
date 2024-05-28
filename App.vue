<!-- <template>
	<view>
		app
	</view>
</template> -->
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 判断是否登录
			// const isLogin = this.$store.state.isLogin; // 或者使用 getter/action 来获取  
			// #ifdef MP
			let isLogin1 = this.$store.state.isLogin;
			if (isLogin1) {  
				// 如果已登录，跳转到应用的首页  
				uni.redirectTo({  
					url: '/pages/index/index' // 替换为你的首页路径  
				});  
			} else {  
				// 如果未登录，跳转到登录页  
				uni.redirectTo({  
					url: '/pages/login/login2' // 替换为你的登录页路径  
				});  
			} 
			// #endif
			
			// #ifndef MP
			let isLogin = sessionStorage.isLogin;
			if (isLogin) {  
				// 如果已登录，跳转到应用的首页  
				uni.redirectTo({  
					url: '/pages/index/index' // 替换为你的首页路径  
				});  
			} else {  
				// 如果未登录，跳转到登录页  
				uni.redirectTo({  
					url: '/pages/login/login2' // 替换为你的登录页路径  
				});  
			}
			// #endif
 
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
