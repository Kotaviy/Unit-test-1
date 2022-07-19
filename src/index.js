import Unit from "./Unit";

const unit = new Unit;

const wizard = {
    name: 'Маг',
    health: 92,
}
const warrior = {
    name: 'Воин',
    health: 10,
}
const archer = {
    name: 'Лучник',
    health: 44
}

console.log(unit.showHealth(wizard));
console.log(unit.showHealth(warrior));
console.log(unit.showHealth(archer));