let news='karthik is a good boy'
let newsArr=news.split(' ')
console.log(newsArr);
for(let i=0; i<newsArr.length; i++){
   newsArr[i]=newsArr[i].split('').reverse().join('')
}
console.log(newsArr.join(' '));