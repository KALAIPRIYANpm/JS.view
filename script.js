// let myvariables="kalaipriyan";
// let variabo={
//     "kalaipriyan":"name",
//     "kanish":"name",
//     "sangeeth":"name"
// }

// console.log(typeof(variabo));
// let varisble=10;
// let integer=99.9;
// var constant=19.99

// console.log(myvariables.lastIndexOf('a'));

// console.log(Number(true)+3);

// if(myvariables==="kalaipriyan")
// {
//     console.log("the variables are equal");
// }
// else{
//     console.log("the variables are not equal");
// }

// console.log(Number.parseFloat(varisble));
// console.log(Number.parseFloat(integer));
// console.log(Math.floor(constant));



// console.log(Math.floor(Math.random(parseInt)*28373));

// console.log(Math.floor(Math.random(parseInt)*1234))

// console.log(Math.floor(constant));

// console.log(Math.ceil(Math.random()*12345));


// console.log(Math.floor(Math.random()*10000+1));

// console.log(Math.floor(Math.random(myvariables)*"kalaipriyan"+1))
// console.log("kalaipriyan".charAt((Math.floor(Math.random()*11))));

// console.log(Math.floor(Math.random()*10000+1))

// console.log(Math.floor(Math.random()*100000+1));



// console.log(Math.floor(Math.random()*12345 +1));


// console.log(myvariables.charAt((Math.floor(Math.random()*myvariables.length))))

let cofeeisfull=true;
let cofeeempty="empty cup";
let rate=100;

if(cofeeisfull && rate===100){
    console.log("cofee is full cofee rate is 100")
}

else if(cofeeempty){
    console.log(`sorry ${cofeeempty} please refill cofee`);
}


switch(Math.floor(Math.random()*10)){
    case 1:
    console.log(1);
    break;
    case 2:
    console.log(5);
    break;
    default:
        console.log(`error`);
}


// let score=100;
// let grade = score===100 ? "O"
// console.log(grade);


// let mark=90;
// let grade = mark===90 ? "O" : mark<100 ? "A+" : mark === 90 ? "pass":
// console.log(grade);


// let player1="ssiccor";
// let player2="rock";
// let result = player1==="rock" && player2==="ssiccor" ? "player1 one wins": "player two wins" ? player1==="ssiccor"&&player2==="rock" :"player 2 wins";
// console.log(result);

// let myself=prompt("enter your roll number")
// if(myself){
//     console.log(myself ?? "name");
// }
// else{
// console.log("you did not enter your roll number");
// }
// console.log(myself.trim().length);

let playgame=confirm("shall we play game");

let playerchoice=prompt("enter rock,paper,cicor");

if(playerchoice){
    let player1=playerchoice.trim().toLowerCase;
    if(
        player1==="rock"||"paper"||"cicor"
    )
    
        let computerchoice =Math.floor(Math.random()*3+1);
         let computer= computerchoice===1 ?"rock"
         :computerchoice ===2 ?"paper"
         :"cicor"

         let result= player1===computerchoice ?"tie"
         :playerchoice==="rock"&&computerchoice==="cicor" ?"you win"
         :playerchoice==="cicor"&&computerchoice==="rock"?"you lose"
         :playerchoice==="paper"&&computerchoice==="cicor"?"you lose"

    
    
    
}

let playgame=confirm("shall we play game");

let playerone=prompt("enter your choice:");


let playgame=confirm("shall we play game");

if(playgame){
    let playerchoice=prompt('enter stone, paper or cicor');
    if(playerchoice){

    let playerone=playerchoice.trim().toLowerCase();
    if(playerone==="rock"||
    playerone==="paper"||playerone==="cicor")
    {
        let computerchoice=Math.floor(Math.random()*3+1)
        let computer=
        computerchoice===1?"rock"
        :computerchoice===2?"paper"
        :"cicor";

        let result=
        playerone===computer?"TIE"
        : playerone==="rock"&&computer==="cicor"?`playerone:${playerone} \n computer:${computer}\nplayer one wis`
        :playerone==="cicor"&&computer==="rock"?"computer wins"
        : playerone==="paper"&&computer==="cicor"?"playerone wins"
        :playerone==="cicor"&&computer==="paper"?"computer wins"
        : playerone==="paper"&&computer==="rock"?"playerone wins"
        :playerone==="rock"&&computer==="paper"?"computer wins"
        :'win'
        alert(result);
    }
}
}



let playgame=confirm("shall we play game");
if(playgame){
    playerchoice=prompt('enter rock,paper,cicor');
    if(playerchoice){
        let playerone =playerchoice.trim().ToLowerCase;
        // let playerone=playerchoice.trim().toLowerCase();
    if(playerone==="rock"||
    playerone==="paper"||playerone==="cicor"){
        let computer=Math.floor(Math.random()*3+1)
        let computerchoice=computer===1?"rock"
        :computer===2?"paper":"cicor";

        let result
        result=playerone===computer?`playerone ${playerone}\n computer${computer}\nmatch tie`
        :playerone==="rock"&&computer==="cicor"?`playerone:${playerone} \n computer:${computer}\nplayer one wins` 
         :playerone==="cicor"&&computer==="rock" ? `playerone:${playerone} \n computer:${computer}\n computer one wins`       
         :playerone==="rock"&&computer==="paper" ? `playerone:${playerone} \n computer:${computer}\n computer one wins` 
         :playerone==="paper"&&computer==="rock" ? `playerone:${playerone} \n computer:${computer}\n player one wins`       
         :playerone==="cicor"&&computer==="paper" ? `playerone:${playerone} \n computer:${computer}\n player one wins`   
         :playerone==="paper"&&computer==="cicor" ? `playerone:${playerone} \n computer:${computer}\n computer one wins`    
         :"no data"   

    alert(result);
    console.log(result)




    }
    }
}


const fun=(num1,num2)=>{

    return num1%num2

}



console.log(fun(1,100))





let playgame=confirm("shall we play game");
if(playgame){
    let playerchoice=prompt("enter stone,paper, ssissor");
    let playerone=playerchoice.trim().toLowerCase();
    if(playerone==="rock"||playerone==="paper"||playerone==="ssissor"){
        let computerchoice=Math.floor(Math.random()*3+1);
        let computer=computerchoice===1?"rock":computerchoice===2?"paper":"ssissor";

        let result=playerone===computer?alert("match ties")
        :playerone==="rock"&&computer==="paper"
        ?alert(`player one is ${playerone} and ${computer} so computer wins`)
        :playerone==="paper"&&computer==="rock"
        ?alert(`playerone is ${playerone} and computer is ${computer} so player one wins`)
        :playerone==="ssissor"&&computer==="paper"
        ?alert(`player one is ${playerone} and ${computer} so player one wins`)
        :playerone==="paper"&&computer==="ssissor"
        ?alert(`playerone is ${playerone} and computer is ${computer} so computerwins`)
        :playerone==="ssissor"&&computer==="rock"
        ?alert(`player one is ${playerone} and ${computer} so computer wins`)
        :playerone==="rock"&&computer==="ssissor"
        ?alert(`playerone is ${playerone} and computer is ${computer} so player one wins`)
        :""
    

    }
    
}

let i;

for(i=1;i<=100;i++){
    if(i===50){
        break;
    }
    else {
        console.log(i);
    }
}

//account transactions 



let accounttransactions=(upi_id,email_id,amount,pin)=>{

    if(amount>=100000 && pin===1234 &&upi_id==="kalai1234"&&email_id==="kalaipriyan7777@gmail.com"){
        console.log(amount+"has been debited from your account");
    }
    else{
    console.log("insufficient balance")
    }

}

accounttransactions("kalai1234","kalaipriyan7777@gmail.com",100000,1234);

let playgame =confirm("shall we play game")
let array=["rock","paper","ssissor"];
if(playgame){
    
    let playerchoice=prompt("enter the options rock paper or sissor")
    let playerone=playerchoice.toLowerCase();
    let player=playerone===array[0]?`you entered ${array[0]}`
    :playerchoice===array[1]?`you entered ${array[1]}`
    :`you entered ${array[2]}`
    alert(player)


    let computerchoice=Math.floor(Math.random()*3+1)
    if(computerchoice){
    let computer=computerchoice===1?"rock"
    :computerchoice===2?"ssissor"
    :"paper"

    
            let result=player===computer?alert("Match get tied")
            :player===array[0]&&computer==="paper"
            ?alert(`player one is ${player} and ${computer} so computer wins`)
            :player===array[1]&&computer==="rock"
            ?alert(`playerone is ${player} and computer is ${computer} so player one wins`)
            :player===array[3]&&computer==="paper"
            ?alert(`player one is ${player} and ${computer} so player one wins`)
            :player===array[2]&&computer==="ssissor"
            ?alert(`playerone is ${player} and computer is ${computer} so computerwins`)
            :player===array[3]&&computer==="rock"
            ?alert(`player one is ${player} and ${computer} so computer wins`)
            :player===array[0]&&computer==="ssissor"
            ?alert(`playerone is ${player} and computer is ${computer} so player one wins`)
            :""
            // alert(result)
            console.log(result)
            // confirm("do you want play again",play again)
    }
}

const player=(playerchoice,computerchoice)=>{

    if(playerchoice===computerchoice)
    {
        alert("MATCH GET TIED");
    }
    else if(playerchoice==="rock"&&computerchoice==="paper")
    {
        alert(`computerchoice is ${computerchoice} and playerchoice is ${playerchoice} so computer wins `)
    }

  (player("rock","paper"))

    

}

class Ticket{
    constructor(){

       this.nooftickets=[];
       this.tickettype=[];
    }

    setpass(type){

        this.tickettype.push(type)

    }

    settickets(num){

        this.nooftickets.push(num)

    }

    create(){
        return console.log(`You booked ${this.nooftickets} Tickets with a type of a ${this.tickettype} Pass`)
    }
}



const ticket=new Ticket

ticket.settickets(1)
ticket.settickets(2)
ticket.setpass("golden")
ticket.setpass("silver")
ticket.setpass("bronze")



ticket.create()



class Ticket{
    constructor(typeofticket,ticket){
       
        this.type=typeofticket;
       this.tickets=ticket;

    }

   
    
}
const newone=new Ticket
newone.settype("kalaipriyan")

class specialTicket extends Ticket{
    constructor(typeofticket,ticket){
        super(typeofticket,ticket);
        // super(tickets)
        
        // super(tickets);
    

    }

    result(){
        
        console.log(`you Booked ${this.ticket} from ${this.type} `)
        
    }
}
const newt=new specialTicket("Diamond")


const newone=new Ticket("1")
newt.result()

