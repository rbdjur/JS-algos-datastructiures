let cardCategories = ['yugioh', 'pokemon', 'sports', 'political'];

cardCategories.splice(1,0, 'Magic');
console.log(cardCategories);

cardCategories.splice(3, 0, 'Digimon');
console.log(cardCategories);

cardCategories.splice(6, 0, 'Cabage Patch Kids');
console.log(cardCategories);

// Remove last element
cardCategories.splice(6, 1);
console.log(cardCategories);

// Remove first element
cardCategories.splice(0, 1);
console.log(cardCategories);

// Remove digimon
cardCategories.splice(2, 1);
console.log(cardCategories);




