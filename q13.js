let arr=[[1,2,3],
         [4,0,6],
         [7,8,0]];
let row=arr.length;
let col=arr[0].length
let count=0;
for(let i=0; i<row; i++){
    for(let j=0; j<col; j++){
       if(arr[i][j]==0){
        count+=1
       }
    }
}
console.log(count)