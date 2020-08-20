const dog1 = {
    name: 'Milky',
}

const dog2 = {
    name: 'Trixie',
}

const dog3 = {
    name: 'Roxi',
}

const dogsMap = new Map();
dogsMap.set(dog1,'1');
dogsMap.set(dog2,'2');
dogsMap.set(dog3,'3');

for(const [dog, id] of dogsMap) {
    console.log(`the dog name is: ${dog.name}, and the id is: ${id}`);
}

dogsMap.forEach((id,dog) => {
    console.log(`the dog name is: ${dog.name}, and the id is: ${id}`);
});