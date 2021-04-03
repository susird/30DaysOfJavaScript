let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toLocaleUpperCase())
console.log(challenge.toLocaleLowerCase())
console.log(challenge.slice(0,2))
console.log(challenge.slice(3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

let apps = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(apps.split(','))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

console.log(challenge.trim(' '))
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match('a'))

let string = '30 Days Of'
console.log(string.concat(' ','JavaScript'))
console.log(challenge.repeat(2))

//Exercise: Level 2
let quote = '\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(quote)

let teresaQuote = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same \n with charity you give love, so don\'t just give money but reach out your hand instead.\"'
console.log(teresaQuote)

console.log('10' == 10)
console.log(parseFloat('9.8') == 10)

let phyton = 'Phyton'
let jargon = 'Jargon'
console.log(phyton.includes('on'))
console.log(jargon.includes('on'))

let sentence1 = 'I hope this course is not full of jargon'
console.log(sentence1.includes('jargon'))

let randomNum = Math.floor(Math.random() * 101)
console.log(randomNum)

let randomNum1 = Math.floor(Math.random() * (101-50) + 50)
console.log (randomNum1)

let randomNum2 = Math.floor(Math.random() *256)
console.log(randomNum2)

let randomString = 'JavaScript'
let random = Math.floor(Math.random() * randomString.length)
console.log(random)

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

let phrase = 'You cannot end a sentence with because because because is a conjunction'
console.log(phrase.indexOf('because'))
console.log(phrase.substr(31, 23))

let loveWord = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(loveWord.match(/love/g))

console.log(phrase.match(/because/g))

const clean= '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(clean.replace(/[%$@&#;!?]/g, ''))


let sum = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let matches = sum.match(/(\d+)/g)
let mult1 = Number(matches[0]) * 12
let mult2 = Number(matches[1]) 
let mult3 = Number(matches[2]) * 12

console.log(mult1 + mult3 + mult2) 



  


