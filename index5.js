let res=[]
let arr=[1,5,8,3,2]
let target=10
for(let i=0; i<arr.length; i++){
    if(res.includes(target-arr[i])){
        console.log(arr[i],target-arr[i])
    }
    else{
        res.push(arr[i])
    }
}