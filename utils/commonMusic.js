
// let globalMusicState = false;

export function playOrPauseAudio(url) {  
  // 假设我们每次都创建一个新的 innerAudioContext，这取决于你的具体需求  
  const innerAudioContext = uni.createInnerAudioContext();  
  
  // 假设我们有一个全局变量或某种方式来跟踪音乐状态，但在这里我们简化为局部变量  
  // let musicstate = false; // 你可以根据需求设置为true或false作为初始状态  
	localStorage.musicstate = false;
  // 切换播放状态  
  localStorage.musicstate = !localStorage.musicstate;  
  console.log(localStorage.musicstate);  
  
  // 设置音频源  
  innerAudioContext.src = url;  
  
  if (localStorage.musicstate) {  
    innerAudioContext.play();  
    innerAudioContext.onPlay(() => {  
      console.log('开始播放');  
    });  
  } else {  
    innerAudioContext.pause();  
    innerAudioContext.onPause(() => {  
      console.log('暂停播放');  
    });  
  }  
  
  // 如果你需要跨函数调用保持音乐状态，可以考虑使用闭包、全局变量或状态管理库（如Vuex）  
}  
  
// // 使用示例  
// playOrPauseAudio('https://1317036699.vod2.myqcloud.com/e9e53236vodsh1317036699/396366891253642696859015471/2pH6SI5bGM8A.mp3');