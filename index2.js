let arr=[1,2,3,4,5], s=9, n=5;
     let curSum=arr[0], start=0, end=1;
     while(curSum<=s){
         if(curSum==s){
             console.log([arr[start],arr[end]])
         }
         else if(curSum>s && end>start){
             curSum-=arr[start]
             start++
         }
         else{
             curSum+=arr[end]
             end++
         }
     }