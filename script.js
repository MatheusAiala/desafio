let nomeHeroi = "Magma";
let xp = Number(prompt("Digite o quanto de XP o herói possui"));

if (xp <= 1000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Ferro com " + xp + " XP");
} else if (xp >= 1001 && xp <= 2000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Bronze com " + xp + " XP");
} else if (xp >= 2001 && xp <= 5000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Prata com " + xp + " XP");    
} else if (xp >= 5001 && xp <= 7000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Ouro com " + xp + " XP");    
} else if (xp >= 7001 && xp <= 8000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Platina com " + xp + " XP");    
} else if (xp >= 8001 && xp <= 9000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Ascendente com " + xp + " XP");    
} else if (xp >= 9001 && xp <= 10000){
    console.log("O herói de nome " + nomeHeroi + " está no nível de Imortal com " + xp + " XP");    
} else if (xp > 10000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível de Radiante com " + xp + " XP");    
} else {
    console.log("XP inválido.");
}
