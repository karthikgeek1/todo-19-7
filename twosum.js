function twosum(arr,target){
    let result=[]
    let x=[]
    for(let i=0; i<arr.length; i++){
        if(result.includes(target-arr[i])){
            x.push([arr[i], target-arr[i]])
           
        }
        else{
            result.push(arr[i])
        }
    }
    return x
}
console.log(twosum([1,2,3,4,5],6));