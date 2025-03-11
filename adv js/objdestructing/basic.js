// const person = {
//     name: "Alice",
//     age: 30,
//     country: "USA"
//   };
//   const { name, age, country } = person;
//   console.log(name);                           // "Alice"
//   console.log(age);                            // 30
//   console.log(country);                        // "USA"



// const person = {                                         //rename
//     name: "Alice",
//     age: 30
//   };
//   const { name: fullName, age: yearsOld } = person;
//   console.log(fullName);                                 // "Alice"
//   console.log(yearsOld);                                 // 30



// const person = {
//     name: "Alice"
//   };
//    const { name, age = 25 } = person;
//   console.log(name);                              // "Alice"
//   console.log(age);                             // 25 (default value, since `age` is not defined)



// const person = {                                         //nested
//     name: "Alice",
//     address: {
//       street: "123 Main St",
//       city: "Wonderland"
//     }
//   };
//   const { name, address: { street, city } } = person;
//   console.log(name);                                       // "Alice"
//   console.log(street);                                    // "123 Main St"
//   console.log(city);                                      // "Wonderland"



// const person = {                                   //rest
//     name: "Alice",
//     age: 30,
//     country: "USA"
//   };
//    const { name, ...rest } = person;
//   console.log(name);                             // "Alice"
//   console.log(rest);                             // { age: 30, country: "USA" }



// const printPerson = ({ name, age }) => {                 //parameter
//     console.log(name, age);
//   };
  
//   const person = {
//     name: "Alice",
//     age: 30
//   };
//     printPerson(person);                               // Output: Alice 30




// const printPerson = ({ name, address: { city } }) => {
//     console.log(name, city);
//   };
  
//   const person = {
//     name: "Alice",
//     address: {
//       street: "123 Main St",
//       city: "Wonderland"
//     }
//   };
  
//   printPerson(person);  // Output: Alice Wonderland

const a  = { name : "anu",place :"ckm",state :"tn"}
const{name,...rest} = a
console.log(rest)
console.log(name)






  




  
  
  
  
  
  