const cars = ["BMW","Mercedes","Audi","VW"];
//me gjet indexin e naj elementi me array.indexOf("elementi")
cars.indexOf("VW")
console.log(cars.indexOf("VW"))


//me kqyr a permban array nje element me array.includes("elementu")
console.log(cars.includes("Porche"))
console.log(cars.includes("Mercedes"))

// me shtu nje element array.push("elementi"), kjo e shton elementin ne fund te array
console.log(cars.push("Range Rover"))
console.log(cars)

// me shtu nje element array.unshift("elementi"), kjo e shton elementin ne fillim te array
console.log(cars.unshift("Lamborghini"))
console.log(cars)

//// me fshi nje element ne fund array.pop(), kjo e shton elementin ne fund te array edhe nuk ki nevoj me shkru brenda ()
console.log(cars.pop())
console.log(cars)

//// me fshi nje element ne fillim array.shift(), kjo e shton elementin ne fund te array edhe nuk ki nevoj me shkru brenda ()
console.log(cars.shift())
console.log(cars)


/**
 * Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but contains one "needle".
After your function finds the needle it should return a message (as a string) that says: 
"found the needle at position " plus the index it found the needle.

Test Case(Input --> Output)  
["hay", "junk", "hay", "hay", "more junk", "needle", "random junk"] --> "found the needle at position 5"
 */
const junkArray= ["hay", "junk", "hay", "hay", "more junk", "needle", "random junk"]
const junkArray1= ["hay", "junk", "hay", "hay", "more junk", "random junk"]

function findNeedle(junkArray){
    if(junkArray.includes("needle")){
        const needlePosition = junkArray.indexOf("needle")
        console.log(`found the needle at position ${needlePosition}`)
    }else{
        console.log("no neddle founded")

    }
}

function findNeedle1(junkArray){
    if(junkArray.includes("needle")){
        const needlePosition = junkArray.indexOf("needle")
        return (`found the needle at position ${needlePosition}`)
    }else{
       return ("no neddle founded")
    }
}





findNeedle(junkArray)
const message = findNeedle1(junkArray1)
console.log(message)

//KUR ESHTE ARRAY MUNDESH VEQ ME NJE MENYR ME JU QAS ELEMENTEVE, PRA ME INDEX
const person = [
"Arte",
"Kabashi",
1997,
"Programmer",
["JavaScript","Java","Kotlin","Python"]
]

console.log(person[0])


const personObj = {
    fisrtName : "Arte",
    lastName : "Kabashi",
    birthYear : 1997,
    job : "programmer",
    languages :  [ "JavaScript","Java","Kotlin"],

    sleep: function(){
        const message = "Sleeping...😴"
        return message
    },

    drive: function(){
        const message =  "Driving... 🚀🏎"
        return message
        
    }
}

console.log(personObj.sleep())
console.log(personObj.drive())

const personAge = 2023 - personObj.birthYear

console.log(`${personObj.fisrtName} ${personObj.lastName} is a ${personAge} old ${personObj.job}`)

const students = [
    {
        firstName:"Drilon",
        lastName:"Gallapeni",
        age:19
    },
    {
        firstName:"Erand",
        lastName:"Gallapeni",
        age:19
    },
    {
        firstName:"Erza",
        lastName:"Gashi",
        age:24
    },
]

/*Detyre 
Krijo nje objekt coffeMachine me properties
brand : Gaggia , model: Classic Pro, color:Silver, 

metodat : makecoffe,
about( this is a Gaggua Classic Pro Silver model)
*/

const coffeMachine = {
    brand : "Gaggia",
    model : "Classic Pro",
    color : "Silver",

    makecoffe : function(size){
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

    },

    // about : function(meesage){
    //     return meesage
    // }
    about : function(){
        return `This is a ${this.brand} ${this.model} ${this.color} model`
    }

}

console.log(coffeMachine.makecoffe("s"))
// console.log(coffeMachine.about(`This is a ${coffeMachine.brand +""+ coffeMachine.model + coffeMachine.color} model`))
console.log(coffeMachine.about())

coffeMachine.model = "Coffe Model 2023"
coffeMachine.price ="900 Euro"
console.log(coffeMachine)


//LOOPS
//LOOPS
//LOOPS

console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")

//DRY - don't repeat yourself

for(let i=0; i<10;i++){
console.log(i)
}

for(let i=1; i<=10;i++){
    console.log(i)
    }

    //for me ni array
    const studentsArray = ["Festim","Elona","Riona","Flamur","Erza","Arta","Erand","Drilon","Ardit"]

    for(let i=0; i<studentsArray.length;i++){
        console.log(studentsArray[i])
        }


        