// const arr = [1, 2, 3];
//  const [a, b, c] = arr;
// console.log(a)

//swap

// let a = 1;
// let b = 2;
//  [b,a] = [a,b]                            
//  console.log(a)
//  console.log(b)  

//skiping

// let arr =[1,2,3,4,5,6]
// let[one,two,,three,four]=arr
// console.log(one,two,three,four)

//rest

// let a = [10,20,30,40,50]
// let[one,two,...rest]=a
// console.log(rest)


//parameter

function add(){
    return[10,20];
}
let[a,b]=add();
console.log(a,b);
  