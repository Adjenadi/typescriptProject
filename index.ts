import {Attack, Pokemon} from "./pokemon";
import {Battle} from "./battle";

const battle = new Battle();

const attack1 = new Attack("Charge", 40, "Physique");
const attack2 = new Attack("Pistolet à eau", 40, "Special");
const attack5 = new Attack("Flammèche", 40, "Special");
const attack3 = new Attack("Coup de boule", 80, "Physique");
const attack4 = new Attack("Rugissement", 0, "Special");


const poke1: Pokemon = new Pokemon("Salamèche", 50, 23, 15, 18, 20, 25, [attack1, attack5, attack3, attack4]);
const poke2: Pokemon = new Pokemon("Tiplouf", 50, 15, 10, 21, 30, 8, [attack1, attack2, attack3, attack4]);

while(poke1.hp > 0 && poke2.hp > 0) {
    if(battle.firstTurn(poke1, poke2) === poke1) {
        let atkNum: number = Math.floor(Math.random() * 4)
        poke1.damage(poke1.attacks[atkNum], poke2);
        if(poke2.hp == 0)
            break;
        let atkNum2: number = Math.floor(Math.random() * 4)
        poke2.damage(poke2.attacks[atkNum2], poke1);
    }
    else {
        let atkNum: number = Math.floor(Math.random() * 4)
        poke2.damage(poke2.attacks[atkNum], poke1);
        if(poke1.hp == 0)
            break;
        let atkNum2: number = Math.floor(Math.random() * 4)
        poke1.damage(poke1.attacks[atkNum2], poke2);
    }
}
if(poke1.hp <= 0) {
    console.log(poke1.name + " won !");
}
else {
    console.log(poke2.name + " won !")
}