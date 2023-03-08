import list from '@/store/list.js'

// 登录头像渲染
export default {
	touxiang(name){
		switch(name){
			case '周杰伦':{
				uni.setStorageSync("img",list.singer.list[0].url)
				console.log(list.singer.list[0].url);
				break;
			}
			case '莫文蔚':{
				uni.setStorageSync("img",list.singer.list[1].url)
				console.log(list.singer.list[1].url);
				break;
			}
			case '陈奕迅':{
				uni.setStorageSync("img",list.singer.list[2].url)
				console.log(list.singer.list[2].url);
				break;
			}
			case '郭富城':{
				uni.setStorageSync("img",list.singer.list[3].url)
				console.log(list.singer.list[3].url);
				break;
			}
			case '张国荣':{
				uni.setStorageSync("img",list.singer.list[4].url)
				console.log(list.singer.list[4].url);
				break;
			}
			case '刘德华':{
				uni.setStorageSync("img",list.singer.list[5].url)
				console.log(list.singer.list[5].url);
				break;
			}
			case 'Lady Gaga':{
				uni.setStorageSync("img",list.singer.list[6].url)
				console.log(list.singer.list[6].url);
				break;
			}
			case 'Taylor Swift':{
				uni.setStorageSync("img",list.singer.list[7].url)
				console.log(list.singer.list[7].url);
				break;
			}
			case 'Justin Bieber':{
				uni.setStorageSync("img",list.singer.list[8].url)
				console.log(list.singer.list[8].url);
				break;
			}
			default : {
				uni.setStorageSync("img",'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/716545e5243791580098539959/MtSl3YbPjo0A.png')
			}
		}
	}
}