import Unit from "../src/Unit";

test.each([
    [
        {name:'wizard', 
        health: 92
        }, 'healthy'
    ],
    [
        {name: 'warrior', 
        health: 10,
        }, 'critical'],
    [{
        name: 'archer', 
        health: 44,
        }, 'wounded'],
])
('Тестируем корректное отображение здоровья персонажа %s', (character, expected) => {
    const unit = new Unit;
    const result = unit.showHealth(character);
    expect(result).toBe(expected);
});