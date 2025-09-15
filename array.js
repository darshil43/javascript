/*
let student = ["mohit","darshil","vraj"]
console.log(student[0])
console.log(student[1])
console.log(student[2])
console.log(student)
console.log(student.length)
console.log(typeof student)

for(let i= 0;i<=student.length;i++)
{
    console.log(student[i])
}
*/

//array methode
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)

// sort method
// let compare = (a, b)=>{
//   return b - a
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
//let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)
/*
// let newNum = num.slice(3)
let newNum = num.slice(3, 5)
console.log(newNum)

//for each
num.forEach((element)=>{
    console.log(element*element)
})


let name = "harry"
let arr = Array.from(name)
console.log(arr)

//you cand read for the very ussage
let num = "harry"
for(let i of num)
{
    console.log(i)

}
let nom = "harry"
for(let i in nom)
{
    console.log(i)

}


 let a = [10,20,30]
 console.log(a)
 let b = a.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
 })
console.log(b) 


let a = [10, 20, 30, 40, 50, 60]
let b = a.filter((value)=>{
    return value<50
})
console.log(b)


let a = [1, 2, 3, 4, 5]
let b = a.reduce((h1,h2)=>{
    return h1+h2
})
console.log(b)

 

let arr =[1,2,3,4,5]
let a = prompt("enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)


let arr =[1,2,3,4,5]
let a;
do{
 a = prompt("enter a number")
a = Number.parseInt(a)
arr.push(a)
}while(a != 0)

console.log(arr)


 let arr = [1,2,3,10,20,30,40]
 let n = arr.filter((x)=>{
    return x%10 == 0
 })
 console.log(n)
 */
 let arr = [1,2,3,10,20,30,40]
 let n = arr.map((x)=>{
    return x*x
 })
 console.log(n)

