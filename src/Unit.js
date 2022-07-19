export default class Unit {
    
    showHealth(unit) {
        if(unit.health >= 90) {
            return 'healthy';
        }
        if(unit.health >=15) {
            return 'wounded';
        }
        return 'critical';
    }
}