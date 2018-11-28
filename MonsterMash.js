class Monster {
    constructor(name, type, strength) {
        this._name = name;
        this._type = type;
        this._strength = strength;
    }
    get name() {
    return this._name
    }
    get type(){
        return this._type
    }
    get strength() {
        return this._strength
    }

    mightysmite(target) {
        this._strength -=15;
        console.log(`${this.name} used MIGHTYSMITE on ${target.name} -15!`);
    }

    blood() {
        this._strength += 10;
        console.log(`Congrats!!! ${this.name} Has Accquired The Taste`);
    }
    evolve(){
        this._type;
        console.log(this.name + " ACHIEVED FINAL FORM ");
    }

    myStone(){
        this._strength += 15;
        console.log ("Power Regenerated");
    }
    changeName(newName){
        this._name=newName;
    }
    ATK(target){
        console.log(`${this.name} has attacked ${target.name}`)
    }
}

let monster1 = new Monster("Ragnar The Destroyer", "Revenant", 85); 
let monster2 = new Monster("Philosophic The Prophet", "Mage", 85);
let monster3 = new Monster("Nook The Bear","Animal", 95);
console.log(monster1);
console.log(monster2);
console.log(monster3);

class EvolvedMonster extends Monster {
    constructor(name, type, strength, ability, ATK, DEF, SPD, WPN){
    super(name, type, strength);
    this._ability = ability;
    this._ATK= ATK;
    this._DEF = DEF;
    this._SPD = SPD;
    this._WPN = WPN;
    }
    get ability() {
        return this._ability
    }
    
    get DEF(){
        return this._DEF
    }
    // SPD is measured on a scale of 1-10
    get SPD(){
        return this._SPD
    }
    get WPN() {
        return this._WPN
    }
    set WPN(newName) {
        if(typeof newName == "string"){
            this._WPN = newName;
        }
    }
}
let Emonster1 = new EvolvedMonster("Ragnar The Destroyer", "Revenant", 85, "Power Mimicry", 75, 95, 5, "Gungnir" ); 
let Emonster2 = new EvolvedMonster("Philosophic The Prophet", "Mage", 85,"Telepathy", 75,65, 9, "Staff Of Malguhmore " );
let Emonster3 = new EvolvedMonster("Nook The God Bear","Kaiju", 105, "Invulnerable",85, 90, 5, "Paws" );

Emonster3.evolve();
Emonster1.ATK(Emonster2);
Emonster2.myStone();
Emonster3.ATK(Emonster1);
Emonster1.blood();
 console.log(Emonster1);
 console.log(Emonster2);
 console.log(Emonster3);