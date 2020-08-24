// fixed method:

const data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: [
        {
          meats: ["hamburgers", "sausages"],
          fish: ["salmon", "pike"],
        },
      ],
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: [
        {
          meats: ["hamburgers", "steak", "lamb"],
          fish: ["tuna", "salmon", "barracuda"],
        },
      ],
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: [
        {
          meats: ["ham", "chicken"],
          fish: ["pike"],
        },
      ],
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: [
        {
          meats: ["bird", "rooster"],
          fish: ["salmon"],
        },
      ],
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: [
        {
          meats: ["hamburgers", "lamb"],
          fish: ["anchovies", "tuna"],
        },
      ],
    },
  ];
  
  const names = (arr) => {
    return arr.map((el) => {
      return el.name;
    });
  };
  
  const born = (arr) => {
    return arr.filter((item) => {
      const birthday = new Date(item.birthday).getFullYear();
      if (birthday < 1990) {
        return item;
      }
    });
  };
  
  const food = (arr) => {
    const obj = {};
  
    arr.forEach((el) => {
      el.favoriteFoods.forEach((foodObj) => {
        console.log(foodObj);
        foodObj.meats.forEach((meatItem) => {   //=> fix: foodObj.meats.forEach
          console.log();
            obj[meatItem] = obj[meatItem] + 1 || 1;
        });
        foodObj.fish.forEach((fishItem) => {
          obj[fishItem] = obj[fishItem] + 1 || 1;
        });
      });
    });
    return obj;
  };
  
  console.log(food(data));
  

  /*
    1. The line that contains the problem is line 77: foodObj.forEach((meatItem) 
    2. the debug method I used to find the bug : first I ran the code and got an exception from the terminal
    foodObj.forEach is not a function  on line 77. To understand better the problem and understand why it is occuring, I put a breakpoint on line 74 and to follow the variables. I saw on line 76 that foodObj is an object and not an array, but it's keys are arrays. So to iterate over the meats array I added on line 77: foodObj.meats.forEach
 */