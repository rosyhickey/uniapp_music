<template>
	<view>
		<h3>喜欢列表</h3>
		<useList :songList="xihuan"></useList>
	</view>
</template>

<script>
	import useList from '@/hooks/useList/useList.vue';
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			uniqueArr2(array) {  
			    // 使用一个对象（Map）来存储已经遇到过的sid和对应的元素  
			    const map = new Map();  
			      
			    // 遍历数组中的每一个元素  
			    for (let i = 0; i < array.length; i++) {  
			        const element = array[i];  
			        const sid = element.sid;  
			          
			        // 如果Map中还没有这个sid，则添加进去  
			        if (!map.has(sid)) {  
			            map.set(sid, element);  
			        }  
			        // 如果Map中已经有了这个sid，则忽略这个元素（不去重的话就不需要做任何操作）  
			    }  
			      
			    // 将Map中的值（即去重后的元素）转换回数组  
			    return Array.from(map.values());  
			},
		},
		computed: {
			xihuan(){
				return this.uniqueArr2(this.$store.state.xihuanSongs)
			}
		},
		components: {
			useList
		}
	}
</script>

<style lang="scss">
	h3 {
		text-align: center
	}
</style>