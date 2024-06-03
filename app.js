let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let Scissors = document.querySelector(".Scissors");
let winner = document.querySelector("#winner");
let personcount = document.querySelector("#personcount");
let computercount = document.querySelector("#computercount");
let Result = document.querySelector(".result");
let drawcount = document.querySelector("#drawcount");

let youvalue = document.querySelector("#youvalue");
let compvalue = document.querySelector("#compvalue");

let pcount = 0;
let ccount = 0;
let dcount =0;
let pvalue = "";
let store = [];
// store.push(`yoy ${ccount}`)
// store.push(`yod ${ccount}`)
// store.push(`yot ${ccount}`)
// // store.forEach(element => {
// //     console.log(store[element])
// // });
//     console.log(store[0])
//     console.log(store[1])
//     console.log(store[2])




let computer = ["rock", "paper", "ceaser"];
const cvalue = computer[Math.floor(Math.random() * computer.length)];
// console.log(cvalue);

const win = (pvalue, cvalue) => {
  if (pvalue === cvalue) {
    // console.log("match draw");
    winner.innerText = "match draw";
    drawcount.innerText = `${++dcount} Draw `;
  } else {
    if (pvalue === "rock") {
      if (cvalue === "paper") {
        // console.log(`computer is winner , ${cvalue} beats ${pvalue}`);
        winner.innerText = `computer is winner , ${cvalue} beats ${pvalue}`;
        computercount.textContent =`${++ccount} Comp`;

      } else {
        // console.log(`you are winner , ${pvalue} beats ${cvalue}`);
        winner.innerText = `you are winner , ${pvalue} beats ${cvalue}`;
        personcount.textContent = `${++pcount} You`;
      }
    } else if (pvalue === "paper") {
      if (cvalue === "rock") {
        // console.log(`you are winner , ${pvalue} beats ${cvalue}`);
        winner.innerText = `you are winner , ${pvalue} beats ${cvalue}`;
        personcount.textContent =`${++pcount} You`;

      } else {
        // console.log(`computer is winner , ${cvalue} beats ${pvalue}`);
        winner.innerText = `computer is winner , ${cvalue} beats ${pvalue}`;
        computercount.textContent = `${++ccount} Comp`;

      }
    } else {
      if (cvalue === "rock") {
        // console.log(`computer winner , ${cvalue} beats ${pvalue}`);
        winner.innerText = `computer winner , ${cvalue} beats ${pvalue}`;
        computercount.textContent = `${++ccount} Comp`;

      } else {
        // console.log(`you are winner , ${pvalue} beats ${cvalue}`);
        winner.innerText = `you are winner , ${pvalue} beats ${cvalue}`;
        personcount.textContent =  `${++pcount} You `;

      }
    }
  }
};

const display =(store) =>{
    for (let index = 1; index < store.length; index++) {
        // const element = array[index];
        youvalue.innerText = store[index]
        compvalue.innerText = store[index+1]
        
    }
    
    

}

rock.addEventListener("click", () => {
  pvalue = "rock";
//   console.log(pvalue);
  const cvalue = computer[Math.floor(Math.random() * computer.length)];
//   console.log(cvalue);
    youvalue.innerText = `You : ${pvalue}`
    compvalue.innerText = `comp : ${cvalue}`
        // store.push(`you :${pvalue}`)
        // store.push(`comp: ${cvalue}`)
        
        console.log(store[0])
        console.log(store[1])
        // display(store);

  win(pvalue, cvalue);
});

paper.addEventListener("click", () => {
  pvalue = "paper";
//   console.log(pvalue);
  const cvalue = computer[Math.floor(Math.random() * computer.length)];
//   console.log(cvalue);
youvalue.innerText = `You : ${pvalue}`
    compvalue.innerText = `comp : ${cvalue}`
  win(pvalue, cvalue);
});

Scissors.addEventListener("click", () => {
  pvalue = "Scissors";
//   console.log(pvalue);
  const cvalue = computer[Math.floor(Math.random() * computer.length)];
//   console.log(cvalue);
youvalue.innerText = `You : ${pvalue}`
    compvalue.innerText = `comp : ${cvalue}`
  win(pvalue, cvalue);
});


// console.log(pvalue);
// Result.style.backgroundColor = "green"

winner.innerText = " Result here  ";
