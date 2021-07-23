// 980294864582540134fcd67098426173
let apiKey = "38accb6d7a10ce2dcc75e12eccc8126c";
var url = "./resume.json";

var xhr = new XMLHttpRequest();

xhr.open("GET", url);

xhr.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  //console.log(this.response)
};

xhr.onerror = function () {
  console.log("error", this.statusText);
};
xhr.send();

// function fetchData(){
//  fetch(url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }

// let letters = []
// let word="racecar"
// let  words= "";

// for(let i=0;i<word.length;i++){
//   letters.push(word[i])
// }

// for(let i=0;i<word.length;i++){
//   words+=letters.pop()
// }
//  if(words===word){
//    console.log(`${word} is a palindrome`)
//  }
// else{
//   console.log(`${word} is not a palindrome`)
// }

// var obj = {
//   names: "John",
//   age: 30,
//   city: "New York",
// };

// for(let i=0;i<obj;i++){
//     console.log(obj.[i])
// }

// const people =[{name:"susy", age:30,position:"developer"},
// {name:"sapphire", age:60,position:"designer"},
// {name:"peter", age:50,position:"boss"},
// {name:"charles", age:40,position:"architect"},
// {name:"peter", age:50,position:"boss"},
// {name:"charles", age:40,position:"architect"},
// {name:"susy", age:30,position:"developer"},
// {name:"charles", age:40,position:"architect"},
// {name:"sapphire", age:60,position:"designer"},
// {name:"charles", age:40,position:"architect"},
// {name:"peter", age:50,position:"boss"},
// {name:"susy", age:30,position:"developer"},
// {name:"charles", age:40,position:"architect"},
// {name:"charles", age:40,position:"architect"},
// {name:"peter", age:50,position:"boss"},
// {name:"charles", age:40,position:"architect"},

// ];

// for(let i=0;i<people.length;i++){
//     console.log(people[i]["age"])
// }

// for(let item of people){
//   console.log(item.name)
// }

// people.forEach(function(item){
//   console.log(item.position)
// })

// people.forEach(function(elem){
//   console.log(elem.name)
// })

// let age=people.map(function(item){
//   return item.age
// })
// console.log(age)

// let a= [3,4,5,6,7,8]
// let b=Math.min(...a)

// console.log(b)

// let b=[1,2,3,2,3,2,3,2,33,4,3,5,6]
// let c=b.sort()
// // count=0

// // for(let i=1;i<b.length;i++){
// //   if(b[i]!==b[i-1]){
// //     count--
// //   }
// // }
// console.log(c)

// let a= 5
// let b=5

// let add= a+b
// if(add%2==0){
//    console.log("even")
// }
//    else console.log("odd")

// let numbers=[5,6,3,5,7,8,9]

// const mult2= function(val){
//   return val*2
// }

// const mult5=function(value){
//   return value*5
// }

// const calculate= function(num,transform,transform1){
//   const output=[];
//   for(let i=0;i<num.length;i++){
//     output.push(transform(num[i]))
//   //    output.push(transform1(num[i]))
//   //   output.push(transform1(num[i]))
//   //   output.push(transform1(num[i]))
//   //   output.push(transform1(num[i]))
//    }
//   return output;
// };

// console.log(calculate(numbers,mult5,mult2));

// // console.log(calculate(numbers,mult2));

// const even= function(val){
//   if(val[i]%2===0){

//   }
// }

// let a =[1,2,3,4]

// let b = a.split("")

// console.log(b)

// let a= "michaeljordan"

// let b= function addNum(word){
//     let b = word.length
//     let c= `${word}${b}`
//     return c
// }
// console.log(b(a))

// let a= "peetter"

// function cap(words){
// let word=  words.toUpperCase()
// return words+ word
// }
// console.log(cap(a))

// let a= "wittgenstein"
// let b= [...a]

// let len= a.length;

//   if(len==1){
//   b[0]="*"
//   }
//   else if( len%2==0){
//    b[len/2]= "*"
//    b[len/2+1]= "*"
//  }

// console.log(b)

// let a=[1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0]

// k=3
// count=0
//  max=0

// for(let i=0;i<a.length;i++){
//     if(a[i]===1)
//         count ++

//     else if(a[i]===0 && k!==0){
//         a[i]=1
//         count++
//         k--
//     }
//     else
//         count=0
//      max= Math.max(max, count)

// }
// console.log(max)

// let a = [1, 1, 1, 0,0, 1, 1, 0, 1, 1, 1, 1];
// k=2
// count=0
// max=0
// for (let i=0;i<a.length;i++){
//     if(a[i]===1)
//     count++
//     else if(a[i]===0 && k!==0){
//         a[i]=1
//         count++
//       k--
//     }
//     else count=0
//     max=Math.max(max,count)
// }
// console.log(max)

// let a= userInput[1].split(" ").map(x=>parseInt(x))
//   let b= parseInt(userInput[2])
//   let ans=0

//   for(let i=0;i<=a.length;i++){
//       if(a[i]% b==0){
//           ans=1
//           break;
//       }
//      console.log(ans)
//   }
// });

// let a= ["george","jez","jebel","ron"]

// const addsrName = function  name (num){
//     return num+" smith"
// }

// const caps = function capsName(words){
//     let fword = words.slice(0,1).toUpperCase()
//     let restWords= words.slice(1)
//     return `${fword}${restWords}, `
// }

// const total= function(arr,capsi){
//     output= []
//     for (let i=0; i<arr.length;i++){
//         output.push(capsi(arr[i]+" Smith"))
//     }
//     return output
// }
// document.write(total(a,caps).join(""))

// console.log(calculate(8))

// let arr = [1, 1, 1, 0,0, 1, 1, 0, 1, 1, 1, 1];
// let k = 3;
// let idx = 0;
// let count = 0;
// let max = -1;
// for (let item of arr) {
//   if (item === 1) {
//     count++;
//   } else if (item === 0 && k !== 0) {
//     arr[idx] = 1;
//     count++;
//     k--;
//   } else {
//     count = 0;
//   }
//   max = Math.max(max, count);
// }

// console.log(max);

// var grades = [
//     {name: 'John', grade: 8, sex: 'M'},
//     {name: 'Sarah', grade: 12, sex: 'F'},
//     {name: 'Bob', grade: 16, sex: 'M'},
//     {name: 'Johnny', grade: 2, sex: 'M'},
//     {name: 'Ethan', grade: 4, sex: 'M'},
//     {name: 'Paula', grade: 18, sex: 'F'},
//     {name: 'Donald', grade: 5, sex: 'M'},
//     {name: 'Jennifer', grade: 13, sex: 'F'},
//     {name: 'Courtney', grade: 15, sex: 'F'},
//     {name: 'Jane', grade: 9, sex: 'F'}

// ]

// let isGirl= grades.filter(girl=>(girl.sex==="F"))
// console.log(isGirl)

// let isboy= grades.filter(boy=>(boy.sex==="M"))
// console.log(isboy)

// boysGrades= isboy.map(marks => marks.grade)
// console.log(boysGrades)

// girlsGrades= isGirl.map(marks=>marks.grade)
// console.log(girlsGrades)

//  maxBoys=  Math.max(...boysGrades)
//  console.log(maxBoys)

//  maxgirls=  Math.max(...girlsGrades)
//  console.log(maxgirls)

// let grades1= grades.map(marks=>  (marks.grade))
// console.log(grades1)

// total1=0
// let total= [...grades1].map(x => total1+(x))

// console.log(total)

// // let average = grades => (
// //     grades.reduce((acc, curr) => (
// //         acc + curr.grade
// //     ), 0) / grades.length
// // )

// // console.log(average)

// let max= Math.max(...candies)

//   let ans= candies.map(candy=> candy+ext >=max )

//   console.log(ans)

// let max= Math.max(...candies)

//    let ans= candies.map(candy => candy+ext >=max)

//    console.log(ans)

// // const rad=[3,4,5,6];

// const area= function(radius){
//     return Math.PI * radius * radius;
// };

// const area1=  function(radius){
//     return Math.PI * radius;

// };

// const caculateArea = function(ra, logic){
//     const output=[];
//     for (let i=0; i<ra.length;i++){
//         output.push(logic(rad[i]))
//     }
//     return output;
// };
// console.log(caculateArea(rad,area))

// const calculate = function(radius, fkn)
// {
//     const output=[];
//     for (let i=0 ;i <radius.length;i++){
//         output.push(fkn(radius[i]));
//     }

// return output;
// };

// console.log(calculate(radius,area))
