const plants = ['Mugwort', 'Oleander', 'Cerulean Spotted Toadstool', 'Wispweed', 'Muddled Lambs Ear', 'Wolfsbane', 'Thistle Branch', 'Purple Butterfly Wing', 'Ragweed Pollen', 'Pine Needles'];

const ingredients = ['Hags Hair', 'Hyena Ear', 'Rotten Dragon Egg', 'Frogs Tongue', 'Bat Fang', 'Dwarf Drool', 'Basilisk Blood', 'Crows Eye', 'Specter Dust', 'Harpy Feather '];

const potionType = ['Potion of Invisibility', 'Potion of Undying Love','Memory Loss Poison', 'Potion of Truth', 'Potion of Good Fortune', 'Poison of Death', 'Potion of Animal Speaking', 'Blinding Poison', 'Potion of Increased Stamina', 'Necrotic Flesh Poison'];

let potionMix = [];
let potion = [];

const randomPotion = () => {
  potionMix.push(plants[Math.floor(Math.random() * plants.length)]);
  potionMix.push(ingredients[Math.floor(Math.random() * ingredients.length)]);
  potion.push(potionType[Math.floor(Math.random() * potionType.length)]);
  return `Combine ${potionMix.join(' & ')} to make ${potion}`;
}

console.log(randomPotion())