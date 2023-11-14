// Variables
let firstName = 'Asabeneh'
firstname = 'Eyob'
const PI = 3.14 // Not allowed to reassign PI to a new value
// End of vaiables

// Arrays
// creating array using constructor
const arr = Array(1,2,3,4,5);
console.log(arr)

// using square brackets[]
const name = ['bk','ok','doka']
console.log(name.length)

const myName = 'biruk'
const character = myName.split("");
console.log(character)

const namess = 'FaceBook, Google, Microsoft, Apple, IBM'
const companyNames = namess.split(",")
console.log(companyNames)

let txt = 'I love teaching and empowering people. I teach HTML, Css, JS, React, Python'
const words = txt.split(' ')
console.log(words)

// Accessing array itesm using index
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0]
console.log(firstFruit);

secondFruit = fruits[1]
console.log(secondFruit)

let lastIndex = fruits.length - 1 
lastFruit = fruits[lastIndex]
console.log(lastFruit);

//Modifying array element 
const number = [1,2,3,4,5]
number[0]=10
console.log(number)

const arr1 = Array()
console.log(arr1)
const eithtEmptyValues = Array(9)
console.log(eithtEmptyValues)

//creating static values wit fill
const arrs = Array(8).fill('xs')
console.log(arrs)

//concatenating array using concat
const firstList = [1,2,3,4]
const secondList = [4,5,6,7,8]
const thirdList = secondList.concat(firstList)
console.log(thirdList)

const numbers2 = [1,2,3,4,5,6]
console.log(numbers2.indexOf(5))

const fruits1 = ['banana','orange','mango','lemon']
let index = fruits1.indexOf('dfg')
if(index !=-1){
    console.log('fruit does exist in the array')
}else{
    console.log('fruid does not exist')
}

console.log(numbers2.lastIndexOf(2)) // it gives the position of the last item in the array.
console.log(numbers2.includes(22))// if it exist it returns the true else it return false. 

const namesNew = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(namesNew.join(' hello '))// insert hello in the middle after ,

//Slice 
const newNumbers = [1,2,3,4,5]
//console.log(newNumbers.slice())
//console.log(newNumbers.slice(1,4))
console.log(newNumbers.splice(0,2))
// console.log(newNumbers.splice())//remove all itesm

arr.push('hello')// add item in array 
arr.pop()// remove one item from the end
arr.shift()//remove one item from the beginning
arr.unshift()//add one item from the beginning
arr.reverse()// reverse array order

const webTechs = ['html','css','javaScript','React','Redux,','node']
webTechs.sort() //ascending order
console.log(webTechs) 
webTechs.reverse() // reverse ascending order
console.log(webTechs)

//Exercise
const arry1 = Array()
const arry2 = []

const array1 = Array(0,1,2,3,4,5,6)
const array2 = ['a','b','3','4','5']
const lengthOfArray1 = array1.length
console.log(lengthOfArray1)
console.log(array1[0]) // first item
console.log(array1[2]) //middle item 
const lastItem1 = array1.length -1
console.log(array1[lastItem1])//last item
const mixedDataTypes = ['hello','moto',7,'seeme','hello',true,false,12];
console.log(mixedDataTypes.length)
const itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
// console.log(itCompanies)
// console.log(itCompanies.length)
// console.log(itCompanies[0])
// console.log(itCompanies[3])
// console.log(itCompanies[itCompanies.length-1])
// const uppers = itCompanies[1].toUpperCase()
// console.log(uppers)
const sentence = itCompanies.toString()
console.log(sentence)

const inArray = itCompanies.indexOf('Facfebook')
if(inArray != -1){
    console.log('item is here')
}else{
    console.log('item is not here')
}

