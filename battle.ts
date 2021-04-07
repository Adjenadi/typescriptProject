import { Pokemon } from "./pokemon";

export class Battle {

    public firstTurn(poke: Pokemon, poke2: Pokemon): Pokemon {
        if(poke2.speed > poke.speed) {
            return poke2;
        }
        else {
            return poke;
        }
    }

}