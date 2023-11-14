// let num =0
// if (num > 0 ) {
//     console.log(`${num} is a positive number`);
// }

// let isRaining = true
// if(isRaining){
//     console.log('Remember to take your fain coat.')
// }

// let num = -3
// if (num > 0 ){
//     console.log(`${num} is positive number`);
// }else {
//     console.log(`${num} is a negative number`);
// }

// let a = 0 
// if(a > 0){
//     console.log(`${a} is a positve number`)
// } else if(a < 0 ){
//     console.log(`${a} is a negative number`)
// } else if (a == 0){
//     console.log(`${a} is zero`)
// } else {
//     console.log(`${a} is not number`)
// }

//Switch
// let weather = 'cloudy'
// switch (weather){
//     case 'rainy':
//         console.log('You need a rain coat.')
//         break
//     case 'cloudy':
//         console.log('It might be cold, you need a jacket.')
//         break
//     case 'sunny':
//         console.log('Go out freely.')
//         break
//     default:
//         console.log('No need for a rain coat')
// }

// let dayUserInput = 'mondays'    //prompt('What day is today?')
// let day = dayUserInput.toLowerCase();

// switch (day){
//     case 'monday':
//         console.log('Today is Monday')
//         break;
//     case 'tuesday':
//         console.log('Today is Tuesday')
//         break;
//     case 'wednesday':
//         console.log('Today is Wednesday')
//         break;
//     case 'thursday':
//         console.log('Today is Thursday')
//         break;
//     case 'friday':
//         console.log('Today is Friday')
//         break;
//     case 'saturday':
//         console.log('Today is Saturday')
//         break;
//     case 'sunday':
//         console.log('Today is Sunday')
//         break;
//     default:
//         console.log('It is not a week day.')
// }

// let num = 2
// switch (true) {
//     case num > 0:
//         console.log('Number is postive')
//         break;
//     case num == 0 :
//         console.log('Number is zero')
//         break;
//     case num < 0:
//         console.log('Number is negative')
//         break;
//     default:
//         console.log('Entered value was not a number')
// }

//Ternary Operators
// let isRaining = true
// isRaining ? console.log('You need a rain coat.') : 
// console.log('No need for a rain coat')

// let num = 5
// if (num %2 == 0){
//     console.log(`${num} is even`);
// } else{
//     console.log('number is odd')
// }

// Loops
// for (initialization, condition, increment/decrement){}
// for (i=0; i<5 ; i++){
//     console.log('hello world')
// }

// let sum = 0 
// for (let i = 0; i<101; i++){
//     console.log(sum)
// }

// const nums = [1,2,3,4,5]
// for (let i = 0; i < nums.length; i++){
//     console.log(nums[i])
// }

// for (let i = 5; i>=0; i--){
//     console.log(i)
// }

// const nums = [1,2,3,4,5]
// const lastIndex = nums.length - 1
// const newArray = []


// for (let i = lastIndex; i>=0; i--){
//     newArray.push(nums[i])
// }
// console.log(newArray)

//while   we use the while loop when we do not know how man iteration we go in advance. 
// let count = 10
// while (count > 0){
//     console.log(count)
//     count--
// }
// do while
// let count = 11
// do{
//     console.log(count)
//     count++
// }while(count < 11)

// for of
// const numbers = [1,2,3,4,5]
// for (const number of numbers){
//     console.log(number)
// }

//forEach
// const numbers = [1,2,3,4,5]
// numbers.forEach((number,i)=>{
//     console.log(number, i)
// })

// const countries = ['Finland','Sweden','Norway','Denmark','Iceland']
// countries.forEach((country,i)=>{
//     console.log(i,country.toUpperCase())
// })

//for in
// const user = {
//     firstName:'Asabeneh',
//     lastName:'Yetayeh',
//     age:250,
//     country:'Finland',
//     skills:['HTML','CSS','JS','REACT','NODE','PYTHON','D3.JS'],
// }
// for(const keys in user){
//     console.log(keys,user[keys])
// }

//break
// for (let i = 0; i<=5; i++){
//     if(i == 3){
//         break
//     }
//     console.log(i)
// }

// we use the keyword continue to skip a certain iterations. 
// for (let i=0; i<=5; i++){
//     if(i == 3){
//         continue
//     }
//     console.log(i)
// }

//Object
// const person ={}
// const rectange = {
//     lenght:20,
//     width:20,
// }
// console.log(rectange)

// const person = {
//     firstName: 'Asabeneh',
//     lastName:'Yetayeh',
//     age:250,
//     country:'Finlad',
//     city:'Helshinki',
//     skills:[
//         'html',
//         'css',
//         'js',
//         'react',
//         'node',
//         'mongoDB',
//         'python',
//         'D3.js'
//     ],
//     getFullName:function(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     'phone number':'+123456789'
// }
// // console.log(person.getFullName())
// const copyPerson = Object.assign({},person)
// //console.log(copyPerson)
// // const values = Object.values(copyPerson)
// // console.log(values)
// const entries = Object.entries(copyPerson)
// console.log(entries)

//Object Exercise
//const dog = {}
// const dog = {
//     name:'dog1',
//     legs:'color',
//     age:'3',
//     bark: function(){
//         return 'woof'
//     }
// }
// dog.breed = 'dober',
// dog.getDogInfo = function(){
//     return 'hello there'
// }
// console.log(dog.name,dog.legs,dog.age,dog.bark(),dog.breed,dog.getDogInfo())


//functionl programming 
//forEach
// const countries = ['Finlad','Estonia','Sweden','Norway']
// countries.forEach(function(country,index,arr){
//     console.log(index,country)
// })

// const numbers = [1,2,3,4,5]
// let sum = 0
// numbers.forEach((n)=>(sum +=n))
// console.log(sum)

//Map
// const countries = ['Finland','Estonia','Sweden','Norway']
// const newCountires = countries.map(function(country){
//     return country
// })
// console.log(newCountires)

// const countries = ['Finland','Estonia','Sweden','Norway']
// const countriesLenght = countries.map((country)=> country.length)
// console.log(countriesLenght)

// const numbers = [1,2,3,4,5]
// const square = numbers.map((n)=>n**2)
// console.log(square)

//Filter
// const countries = ['Finland','Estonia','Sweden','Norway','iceland']
// const countriesWithLand = countries.filter((country)=>country.includes('land'))
// console.log(countriesWithLand)

//Reduce
// const number = [0,1,2,3,4,5,6,7,8,9,10]
// const sum = number.reduce((acc,cur)=> acc + cur)
// console.log(sum)

//Classes
class Person{
    constructor(firstName='e',lastName='g'){
        console.log(this)
        this.firstName = firstName
        this.lastName=lastName
    }
}
const person1 = new Person()
const person = new Person('bk','gomen')

console.log(person1)
console.log(person)