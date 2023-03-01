// 播放音乐文件
// 在外面创建  不然会有多个音乐同时播放
const innerAudioContext = uni.createInnerAudioContext();
		innerAudioContext.autoplay = false;
export default {
	mojito() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);

		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/346c266d243791580094172451/vvwOx56MD54A.mp3';
		// innerAudioContext.playbackRate = 1.5;
		if(this.musicstate){
			innerAudioContext.play();
			innerAudioContext.onPlay(() => {
			  console.log('开始播放');
			});
		}else {
			innerAudioContext.pause();
			innerAudioContext.onPause(() => {
			  console.log('暂停播放');
			});
		}
	},
	youkelili() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/71773c3b243791580098549147/n3hVGyw7B3oA.mp3';
		// innerAudioContext.playbackRate = 1.5;
		if(this.musicstate){
			innerAudioContext.play();
			innerAudioContext.onPlay(() => {
			  console.log('开始播放');
			});
		}else {
			innerAudioContext.pause();
			innerAudioContext.onPause(() => {
			  console.log('暂停播放');
			});
		}
	},
	yintian() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/32189a4b243791580094075240/artIwip0np8A.flac';
		// innerAudioContext.playbackRate = 1.5;
		if(this.musicstate){
			innerAudioContext.play();
			innerAudioContext.onPlay(() => {
			  console.log('开始播放');
			});
		}else {
			innerAudioContext.pause();
			innerAudioContext.onPause(() => {
			  console.log('暂停播放');
			});
		}
	},
}