<template>
  <view>
		<view>{{ currentTime }}</view>
		 <slider v-model="sliderValue" @change="onSliderChange" max="100" style="width: 80%;" :block-size='blockSize' block-color='#A2ABAA' activeColor='#19C590'></slider>
		<view>{{ duration }}</view>
		<button @click="startAudio()">开始播放</button>
  </view>
</template>
 
<script>
export default {
  data() {
    return {
      duration: '',
	  currentTime: '',
	   juuaa: null, // 将 juuaa 声明在 data 中以便在多个方法中使用
	   intervalIDqw: null,
	   sliderValue: 0,
	   blockSize: 12, // 滑块大小
    };
  },
	onReady(){
		
		// ------------------------------
			this.juuaa = uni.createInnerAudioContext()
			this.juuaa.src = 'https://www.xmhigame.com/static/uploads/s54/out-4252dac2792c5f48628dfa25e51e6ae5.mp3'
			console.log('播放器：',this.juuaa)
			
			this.juuaa.onCanplay(() => {
			    let intervalID = setInterval(() => {
			      if (this.juuaa.duration !== 0) {
			        clearInterval(intervalID);
					this.duration = this.formatTime(this.juuaa.duration) // 总时长
					this.currentTime = this.formatTime(this.juuaa.currentTime) // 当前时长
					console.log("当前时长", this.currentTime)
			        console.log("音频时长", this.duration);
					if(this.currentTime === this.duration){
						// this.currentTime = 0
						clearInterval(intervalID);
					}
			      }
			    }, 500);
			})
			
			  this.juuaa.onTimeUpdate(() => {
			      this.currentTime = this.formatTime(this.juuaa.currentTime);
			      if (!this.dragging) { // 避免拖动滑块时自动更新
			             this.sliderValue = (this.juuaa.currentTime / this.juuaa.duration) * 100;
			           }
			    })
			
			
			
	},
	methods:{
		startAudio() {
		  if (this.juuaa) {
		    this.juuaa.play(); // 开始播放音频
		  }
		  let intervalIDs = setInterval(() => {
		    if (this.juuaa.duration !== 0) {
		      // clearInterval(intervalID);
		  	this.duration = this.formatTime(this.juuaa.duration) // 总时长
		  	this. duration = this.formatTime(this. juuaa. duration)//总时长
		  	this.currentTime = this.formatTime(this.juuaa.currentTime) // 当前时长
		  	console.log("当前时长", this.currentTime)
		      console.log("音频时长", this.duration);
		  	if(this.currentTime === this.duration){
		  		// this.currentTime = 0
		  		clearInterval(intervalIDs);
		  	}
		    }
		  }, 500);
		    // 启动定时器，每秒更新一次进度条位置
		          this.intervalIDqw = setInterval(() => {
		            if (this.juuaa.duration > 0) {
		              this.sliderValue = (this.juuaa.currentTime / this.juuaa.duration) * 100;
		            }
		          }, 1000);
		  
		},
		// 格式化时间的函数，将秒转换为分:秒格式
		formatTime(seconds) {
		  const minutes = Math.floor(seconds / 60);
		  const remainingSeconds = Math.floor(seconds % 60);
		  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
		},
		
		
		onSliderChange(event) {
			const value = event.detail.value;
		  if (this.juuaa && this.juuaa.duration > 0) {
		    // 验证 value 是否是有效的百分比值（0-100之间）
		    if (isNaN(value) || value < 0 || value > 100) {
		      console.error("Invalid value:", value);
		      return;
		    }
		
		    // 计算新的位置
		    const newPosition = (value / 100) * this.juuaa.duration;
		
		    // 验证 newPosition 是否是有效的数字，不是 NaN，并且在有效范围内
		    if (!isNaN(newPosition) && newPosition >= 0 && newPosition <= this.juuaa.duration) {
		      // 设置音频播放位置
		      this.juuaa.seek(newPosition);
		      console.log("Seeking to position:", newPosition);
		      if (!this.dragging) { // 避免拖动滑块时自动更新
		        this.sliderValue = value;
		      }
		    } else {
		      console.error("Invalid newPosition:", newPosition);
		    }
		  }
		}
	}
}
</script>