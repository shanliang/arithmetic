/**
* @desc 冒泡排序
* @intr 实现原理，比较相邻数据，如果他们的顺序错误就调换，每一趟会将最小或最大的元素“浮”到顶端，最终达到完全有序。
*/
function bubbleSort(originalArray){
	for(var i = 0, len = originalArray.length; i < len; i++){
		console.log('第' + i + '遍');		
		for(var j = 0; j < len - i - 1; j++){			
			if(originalArray[j] > originalArray[j + 1]){
				var temp = originalArray[j];
				originalArray[j] = originalArray[j + 1];
				originalArray[j + 1] = temp;
			}
			console.log(originalArray);
		}
		console.log(originalArray);
		
	}
	return originalArray;
}
//示例：
var arr = [3,415,167,83,19,35,21,31];
bubbleSort(arr);