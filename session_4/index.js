//Loopd
//3 lloje kryesore te loops
//1. for loop, while loop, do while

// for(let i=0;i<10;i++){
//     console.log(i)
// }


//detyre me gjet shumen mesatare te nje vargu
// const someNumbers = [40,79,202,109,555,4321,809,70,80];

// function averageSum(array){
// let sum =0
// for(i=0; i<array.length; i++){
//      sum +=array[i]
// }
// average = sum/(array.length)
// console.log(average)
// }

// averageSum(someNumbers)

//continue osht si me ba skip
// for (let i =0; i<10;i++){
//     if(i===6) continue
//     console.log(i)
    
// }

//break e nderpren deri qaty
// for (let i =0; i<10;i++){
//     if(i===6) break
//     console.log(i) 
// }

//shembull

const players = ["Messi","Ronaldo","Bllah","Blleh","abcde"]

for(let i = 0;i<players.length;i++){
    if(players[i]=="Messi")
        continue;
     
    console.log(players[i])
}

//nested loops
for(let i = 1;i<=10;i++){
    console.log("---------------------------")
    for (let e =1; e<=10;e++){
        console.log(`${i} x ${e} = ${i*e}`)
    }
}

//while loop
let y =0
while(y<10){
   console.log(y)
   y++
}