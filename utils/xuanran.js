import list from '@/store/list.js'
import store from '@/store/index.js'

// 登录头像渲染
export default {
	touxiang(name){
		switch(name){
			case '周杰伦':{
				store.state.img = list.singer.list[0].url;
				// uni.setStorageSync("img",list.singer.list[0].url);
				console.log(list.singer.list[0].url);
				break;
			}
			case '莫文蔚':{
				store.state.img = list.singer.list[1].url;
				// uni.setStorageSync("img",list.singer.list[1].url)
				console.log(list.singer.list[1].url);
				break;
			}
			case '陈奕迅':{
				store.state.img = list.singer.list[2].url;
				// uni.setStorageSync("img",list.singer.list[2].url)
				console.log(list.singer.list[2].url);
				break;
			}
			case '郭富城':{
				store.state.img = list.singer.list[3].url;
				// uni.setStorageSync("img",list.singer.list[3].url)
				console.log(list.singer.list[3].url);
				break;
			}
			case '张国荣':{
				store.state.img = list.singer.list[4].url;
				// uni.setStorageSync("img",list.singer.list[4].url)
				console.log(list.singer.list[4].url);
				break;
			}
			case '刘德华':{
				store.state.img = list.singer.list[5].url;
				// uni.setStorageSync("img",list.singer.list[5].url)
				console.log(list.singer.list[5].url);
				break;
			}
			case 'Lady Gaga':{
				store.state.img = list.singer.list[6].url;
				// uni.setStorageSync("img",list.singer.list[6].url)
				console.log(list.singer.list[6].url);
				break;
			}
			case 'Taylor Swift':{
				store.state.img = list.singer.list[7].url;
				// uni.setStorageSync("img",list.singer.list[7].url)
				console.log(list.singer.list[7].url);
				break;
			}
			case 'Justin Bieber':{
				store.state.img = list.singer.list[8].url;
				// uni.setStorageSync("img",list.singer.list[8].url)
				console.log(list.singer.list[8].url);
				break;
			}
			default : {
				uni.setStorageSync("img",'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/33ef290e243791580094105690/KbIX8fifQfsA.png')
			}
		}
	}
}