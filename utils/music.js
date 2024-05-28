// 播放音乐文件
// 在外面创建  不然会有多个音乐同时播放
// import {playOrPauseAudio} from '@/utils/commonMusic.js'
const innerAudioContext = uni.createInnerAudioContext();
		innerAudioContext.autoplay = false;
		innerAudioContext.loop = true;
export default {
	innerAudioContext,
	mojito() {
		this.musicstate = !this.musicstate;
		console.log('当前状态',this.musicstate);

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
	haojiubujian() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/396366891253642696859015471/2pH6SI5bGM8A.mp3';
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
	// haojiubujian(){
	// 	playOrPauseAudio('https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/396366891253642696859015471/2pH6SI5bGM8A.mp3')}
	yiqizouguoderizi() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/433680391397757888171643645/FnyAbj8d230A.mp3';
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
	qinghuaci() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/433680771397757888171643661/Sa3UoUJvLcMA.mp3';
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
	huranzhijian() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/433688531397757888171643810/NpPu4q4WPu0A.mp3';
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
	qingtian() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/43370cbc1397757888171644656/eiwHnzVdxygA.mp3';
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
	buyaoshuohua() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/435b4a7f1397757888171664954/aFdOjHAdfhQA.mp3';
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
	fushishanxia() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/4aa79d921253642696866553556/vSl1Ayjdm7sA.mp3';
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
	dongqilai() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/434bd5bc1397757888171659308/duggtDSInW4A.mp3';
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
	chenmoshijin() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/aac22d811397757888179607465/LRYLfjv7Au0A.mp3';
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
	DoILoveYou() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/43367c981397757888171643590/vR9jOan1DRcA.mp3';
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
	LoveStory() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/aaf5b8c01397757888179632439/qO1xD7FdZ7QA.flac';
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
	Sorry() {
		this.musicstate = !this.musicstate;
		console.log(this.musicstate);
		// const innerAudioContext = uni.createInnerAudioContext();
		// innerAudioContext.autoplay = false;
		innerAudioContext.src = 'https://1317036699.vod2.myqcloud.com/8af1bb6fvodcq1317036699/aac22d431397757888179607449/JVZhXhAdaiMA.mp3';
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
	}
	
}