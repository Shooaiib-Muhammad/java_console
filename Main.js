// console.log('Heloo i am Log')
// console.error('Heloo i am Error')
// console.warn('Heloo i am Warning')
// variables types Var, Let, const
// let age = 30
// console.log(age)
// let Score
// Score = 200
// console.log(Score)
// Data types String,Number,BooleanmNull,undefine,Symbol
// const name = 'Shoaib Muhammad s/o Abdul Sittar'
// const age = 30
// const rating = 4.5
// const iscool = true
// const x = null
// const y = undefined
// let z
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof rating)
// console.log(typeof iscool)
// console.log(typeof c)
// console.log(typeof y)
// // Concatenation
// console.log('My name is ' + name + ' and my age is ' + age)
// // tempalte String
// console.log(`my name is ${name} and my age is ${age}`)
// Different properties of String
// const name = 'Shoaib Muhammad s/o Abdul Sittar'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.substring(0, 15)) // Eloberate start and  end of String
// console.log(name.substring(0, 15).toUpperCase())
// console.log(name.substring(0, 15).toLowerCase())
// console.log(name.split('')) // Array COnversion
// const s = 'technolog,Cricket,playing,2020' // String into Array Formate
// console.log(s.split(', '))
// Array multi,line,Comments
// Array = variables that holds multple values
// const numbers = new Array(1, 2, 3, 4, 5, 6, 3) // constractor
// console.log(numbers)
// const fruts = ['Apples', 'oranges', 'pears'] // Array decelertion
// fruts[3] = 'bannana' // Assgin Array position value on 3rd index
// fruts[1] = 'graps' // Assgin Array position value on 1st index
// fruts.push('Mangos') // push on End
// fruts.unshift('Pine apple') // push on Start
// console.log(fruts)
// console.log(fruts[0])
// console.log(fruts[1])
// console.log(fruts[2])
// console.log(fruts[3])
// console.log(fruts[4])
// console.log(fruts[5])
// fruts.pop()

// console.log(fruts.indexOf('Pine apple'))
// console.log(fruts.indexOf('Mangos'))
// console.log(fruts.indexOf('graps'))
// console.log(fruts.indexOf('Apples'))
// console.log(fruts.indexOf('oranges'))
// console.log(fruts.indexOf('bannana'))
// console.log(fruts.indexOf('pears'))
// console.log(fruts)
// const person = {
//   //constractors
//   name: 'Shoaib muhammad',
//   Age: 28,
//   Gender: 'Male',
//   phone_number: '03406194152',
//   hobbies: ['Cricket', 'web searching', 'traveling'],
//   Addres: {
//     city: 'Sialkot',
//     Stte: 'SA',
//     street: 'Gali School wali',
//   },
// }
// console.log(person)
// //person.push(emailaddress = 'waqas#forward.pk'
// // console.log(person.name)
// // console.log(person.phone_number)
// // console.log(person.Addres.street)
// // console.log(person.hobbies[1])
// // console.log(person.Addres.city)
// person.email = 'Shoaib@forward.pk'
// const {
//   name,
//   phone_number,
//   Addres: { city, street },
//   hobbies,
// } = person // desctraction
// console.log(name)
// console.log(city)
// console.log(street)
// console.log(hobbies[0])
// console.log(person.email)
// Array of Objects
const todo = [
  {
    id: 1,
    txt: 'try to trash this ',
    iscompleted: true,
  },
  {
    id: 2,
    txt: 'heloo World ',
    iscompleted: false,
  },
  {
    id: 3,
    txt: 'I am DOne ',
    iscompleted: true,
  },
  {
    id: 4,
    txt: 'meeting with Security Guard ',
    iscompleted: false,
  },
  {
    id: 5,
    txt: 'meeting with HR manager ',
    iscompleted: true,
  },
  {
    id: 6,
    txt: 'meeting with boss',
    iscompleted: true,
  },
]
// console.log(todo)
// // Print Meeting with boss
// console.log(todo[5].txt)
// // Print I am DOne
// console.log(todo[2].txt)
// // Print id 3
// console.log(todo[2].id)
// jason = jason is data formate it is used in full strack developnment or sending APIS
// making json formate using javascript
const jsonformate = JSON.stringify(todo)
console.log(jsonformate)
//loops
for (let i = 0; i < todo.length; i++) {
  console.log(todo[i].txt)
}

i = 0
while (i < 10) {
  console.log(` While Numer of loops : ${i}`)
  i++
}
