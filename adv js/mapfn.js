// const a = [1,2,3,4]
// const add = a.map(data =>data)
// console.log(add)



// const a =[1,2,3,4]
// const add = a.map(data => {
//     return data
//     })
// console.log(add)



// const a =[1,2,3,4]
// const add = a.map(data => {
//     console.log(data)
//     return data
    
// })


// const a =[1,2,3,4]
//  const add = a.map((data,index) => {
   
//      return index
    
//  })
//  console.log(add)



// const a =[1,2,3,4]
//  const add = a.map((data,index) => {
   
//      return {data,index}
//     })
//  console.log(add)

// const a =[1,2,3]
// const add = a.map((data,index) => `data:${data } index:${index}`)
// console.log(add)

// const a = [1,2,3,4]
// const add = a.map(data =>data*2)
// console.log(add)


// const a =[1,2,3,4]
// const add = a.map(data => {
//     return data*2
//     })
//  console.log(add)


// const a = [1,2,3,4]
// const add = a.map(data =>data-1)
// console.log(add)

// const a =[1,2,3,4]
//  const add = a.map(data => {
//     return data-1
//     })
//   console.log(add)

const a =[
    {
        name :"anu",
        place:"ckm",
        age :1
    },
    {
        name :"abi",
        place:"ngl",
        age:2

    } 
]
const add = a.map(data=>({name:data.name,place:data.place,age:data.age+1}))
 console.log(add)
    










    

