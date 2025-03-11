// const num =[10,20,30,40,50]
// const sum = num.reduce((acc,num) => acc+num,0)
// console.log(sum)


const num =[10,20,30,40,50]
const sum = num.reduce((acc,num) =>(acc>num ? acc :num),0)

console.log(sum)