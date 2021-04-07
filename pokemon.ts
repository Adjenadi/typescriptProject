export class Pokemon {
    name: string;
    hp: number;
    speed: number;
    attack: number;
    speAttack: number;
    defense: number;
    speDefense: number;
    critChance: number;
    attacks: Attack[];

    constructor(name: string, hp: number, speed: number, attack:number, speAttack: number, defense: number, speDefense: number, attacks: Attack[]) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
        this.speAttack = speAttack
        this.defense = defense;
        this.speDefense = speDefense;
        this.critChance = 5;
        this.attacks = attacks;
    }

    damage(attack: Attack, opponent: Pokemon): void {
        let dmg: number = 0;
        if(attack.speOrPhys === "Physique") {
            dmg = (attack.power * this.attack) / opponent.defense;
            //Crit Check
            if(Math.random() * 100 < this.critChance) {
                dmg = dmg * 1.5;
                console.log("Critical Strike !!");
            }

            console.log(this.name + " attacked " + opponent.name + " for " + dmg + " damage with " + attack.name);
            //Death Check
            if(opponent.hp < dmg) {
                opponent.hp = 0;
            }
            else {
                opponent.hp = opponent.hp - dmg;
            }
            
            console.log(opponent.name + " has " + opponent.hp + " HP left !");
        }
        if(attack.speOrPhys === "Special") {
            dmg = (attack.power * this.speAttack) / opponent.speDefense;
            //Crit Check
            if(Math.random() * 100 < this.critChance) {
                dmg = dmg * 1.5;
                console.log("Critical Strike !!");
            }

            console.log(this.name + " attacked " + opponent.name + " for " + dmg + " damage with " + attack.name);
            //Death Check
            if(opponent.hp < dmg) {
                opponent.hp = 0;
            }
            else {
                opponent.hp = opponent.hp - dmg;
            }

            console.log(opponent.name + " has " + opponent.hp + " HP left !");
        }
        
    }
    
}

export class Attack {
    name: string;
    power: number;
    speOrPhys: string; 
    status?: string;

    constructor(name: string, power: number, speOrPhys: string, status?: string) {
        this.name = name;
        this.power = power;
        this.speOrPhys = speOrPhys;
        this.status = status;
    }
}