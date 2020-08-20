const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];



// 1. Create a function that returns an array of all the names from the object.

function allTheNames(dataArr) {
    const result = [];
    dataArr.forEach((person,index) => 
    person.name ? result[index] = person.name : null);
    return result;
}

//console.log(allTheNames(data));


// 1. with map
function allTheNamesWithMap(dataArr) {
    return dataArr.map(person => 
        person.name ?  person.name : null);
}

//console.log(allTheNamesWithMap(data));






// 2. Create a function that returns all the objects that are born before 1990.

function bornBeforeYear(dataArr, year) {
    const result = [];
    dataArr.forEach(person => {
        const birthYear = new Date(person.birthday).getFullYear();
        (birthYear < year) && result.push(person);
        
   });
   return result;  
}

// 2. with map 

function bornBeforeYearWithMap(dataArr, year) {
    return dataArr.map(person => {
        const birthYear = new Date(person.birthday).getFullYear();
        if(birthYear < year) {
            return person;
        }
   });
}

//console.log(bornBeforeYearWithMap(data, 1990)); 








// 3.Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.

function foodsCounter(dataArr) {
    const foodObj = {};
    dataArr.forEach(person => {
        person.favoriteFoods.meats.forEach(element => foodObj[element] = foodObj[element] + 1 || 1); 
        person.favoriteFoods.fish.forEach(element => foodObj[element] = foodObj[element] + 1 || 1); 
    });
    return foodObj;
}

//console.log(foodsCounter(data));



