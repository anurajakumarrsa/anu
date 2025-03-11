// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a) 
// console.log(b) 
// console.log(c)



// const arr = [1];            //assign value
// const [a, b = 2] = arr;
// console.log(a); 
// console.log(b); 


// const arr = [1, 2, 3, 4];     //skiping
// const [, b, , d] = arr;
// console.log(b);              // 2
// console.log(d);              // 4



//  arr = [1, [2, 3], 4];      
//  [a, [b, c], d] = arr;        //nested
// console.log(a);                   // 1
// console.log(b);                   // 2
// console.log(c);                   // 3
// console.log(d);                  // 4


// const arr = [1, 2, 3, 4];
// const [a, b, ...rest] = arr;                 //rest
// console.log(a);                          // 1
// console.log(b);                            // 2
// console.log(rest);                       // [3, 4]


// let a = 1;
// let b = 2;
// [a, b] = [b, a];                            //swap 
// console.log(a);                       // 2
// console.log(b);                       // 1


// const set = new Set([10, 20, 30]);       //non array
// const [x, y, z] = set;
// console.log(x);                   // 10
// console.log(y);                   // 20
// console.log(z);                   // 30
