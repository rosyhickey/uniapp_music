// 对应歌曲播放
import music from "./music";

export default {
	start(s) {
		console.log(s);
		switch (s) {
			case 1:
				music.mojito();
				break;
			case 2:
				music.youkelili();
				break;
			case 3:
				music.yintian();
				break;
			case 4:
				music.haojiubujian();
				break;
			case 5:
				music.yiqizouguoderizi();
				break;
			case 6:
				music.qinghuaci();
				break;
			case 7:
				music.huranzhijian();
				break;
			case 8:
				music.qingtian();
				break;
			case 9:
				music.buyaoshuohua();
				break;
			case 10:
				music.fushishanxia();
				break;
			case 11:
				music.dongqilai();
				break;
			case 12:
				music.chenmoshijin();
				break;
			case 13:
				music.DoILoveYou();
				break;
			case 14:
				music.LoveStory();
				break;
			case 15:
				music.Sorry();
				break;
			default:
				uni.showToast({
					title:'暂未收录',
					icon:"error"
				})
		}
	}
}