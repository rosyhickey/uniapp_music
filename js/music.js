// 播放音乐文件
// 在外面创建  不然会有多个音乐同时播放
const innerAudioContext = uni.createInnerAudioContext();
		innerAudioContext.autoplay = false;
export default {
	mojito() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);

		innerAudioContext.src = '/static/music/mojito.mp3';
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
		innerAudioContext.src = '/static/music/youkelili.mp3';
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
		innerAudioContext.src = '/static/music/yintian.flac';
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