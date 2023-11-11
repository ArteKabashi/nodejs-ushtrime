/*
Logical operators
|| - or (ose)
&& - and (dhe)
! - not (jo)

Arithmetic operators
+ mbledhja
- zbritja
* shumezimi
: pjestimi
% mbetja (moduli)


comparisson operators
> ma e madhe
< ma e vogel
>= ma e madhe ose e barabarte
<= ma e vogel ose e barabart
== e barabart (loosly equal)
=== e barabart (EXTRA) (strictly equal)
!== jo e barabart
*/
console.log("5"-5);
console.log(10%3)
console.log(5+ "10"/ 3 * "2")
console.log(5+6+'4'+9-4-2)
console.log(5=='5')
console.log(5==='5')
// te "===" per me dal vlera true duhet me kan  data type i njejt i te dy var

console.log(typeof null)
if( 10 == 10){
    console.log("hello")
}

//type conversion ans type coersion
//type conversion na vete e ndryshojm data type
// coersion js ja ndryshon data type
console.log(typeof Number("1998"))
console.log(Number("1998") + 10)
console.log(Boolean(1998))

//falsy values
// vlera qe jane fasle   = 0, "",null, undefined (zero, empty values, null value, undefined)

const budget = 0
if(budget){
    console.log("Buy something for yourself")
}else{
    console.log("You need to save some money first")
}

//function

function logName(name){
    console.log(name)
}

logName("Festim")
logName("Ardit")
logName("Elona")
logName("Arta")


function logInfo(firstName,lastName,age,job){
    console.log(`${firstName} ${lastName} is a ${age} year old ${job}`)
}

logInfo("Riona","Hazrolli",20,"student")

function findAge(birthYear,yearNow){
    return yearNow-birthYear

}

const ageOfRiona = findAge(2003,2023)

console.log(ageOfRiona)

function square(number){
 return number*number 
}

function findSquare(number,exponent){
    return Math.pow(number,exponent)
}

console.log( square(3))

console.log(findSquare(7,3))


function coffeMachine(size){
    const actualSize = size.toLowerCase();

    if(actualSize == "s"){
      return "Small espresso"
    }else if(actualSize == "m"){
        return "Medium espresso"
    }else if(actualSize == "l"){
        return "Large espresso"
    }else{
        return "Wrong input"
    }
}

console.log(coffeMachine("M"))

//Function expression
//myInfo nuk mundesh me thirr edhe para function, se nuk eshte e inicializume
const myInfo = function(){
    console.log("My name is Ardit from function 1");
}

//myInfo2 mundesh me thirr edhe para function,
myInfo2()
function myInfo2(){
    console.log("My name is Ardit from function 2")
}

//array function,nuk mundesh me thirr edhe para function, se nuk eshte e inicializume

const myInfo3 = ()=>{
    console.log("My name is Ardit from function 3")

}

// const myInfo3 = ()=>console.log("My name is Ardit from function 3")



myInfo()
myInfo3()

//Arrow function/lambda
const findAge2 =(birthYear,yearNow) => yearNow - birthYear

console.log(findAge2(2003,2023))


//Arrays

const students = ["Festim","Elona","Riona","Flamur","Erza","Arta","Erand","Drilon",10,true,undefined,null]

console.log(students)
console.log(students[4])
console.log(students[students.length -1])
