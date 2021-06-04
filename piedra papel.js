function randomPPT(ppt){
    let i = Math.floor(Math.random()*ppt.length);
    
    return ppt[i];
}

function verResultado(j1,j2){

    let resultado;
    let pptGanador = [
        //Ganador-Perdedor
        ["Piedra","Tijeras"],
        ["Tijeras","Papel"],
        ["Papel","Piedra"],
    ];

    for(i = 0; i < 3; i++){
        
        //Emula las posiciones de pptGanador. Ejemplo [j1[Piedra] j2[Tijeras]] resultado es j1[nombre]
        if((j1[1] == pptGanador[i][0]) && (j2[1] == pptGanador[i][1])){
            resultado = "El ganador es "+ j1[0];
            break;
        }else if(j1[1] == j2[1]){
            resultado = "El resultado es un empate";
            break;
        }else{
            resultado = "El ganador es "+ j2[0]
        }
    }

    return resultado;
}

let ppt = ["Piedra","Papel","Tijeras"];
let j1 = ["Jarvis",randomPPT(ppt)];
let j2 =["Viernes",randomPPT(ppt)];
let resultado = verResultado(j1,j2);

console.log("||----------------------||");
console.log("|| Piedra-Papel-Tijeras ||");
console.log("||----------------------||");
console.log("   "+j1[0]+": "+ j1[1]);
console.log("   "+j2[0]+": "+ j2[1]);
console.log("||----------------------||");
console.log(resultado);
