const prompt = require('prompt-sync')(); 

let chance = 3; 
let count = 0; 
let min = 0; 
let max = 9; 

let random = Math.round(Math.random() * (max - min) + min); 



while(count < chance){
    
        let x = prompt('Entrez un nombre : '); 
        
        x = Number(x); 

        count++; 

        if(x == random){

            console.log('YOU WON ! '); 
            break; 
    
        } else {
            
            if(count < chance ){

                console.log('Try again '); 

            } else {

                console.log('YOU lose '); 

            }

        }

    }
