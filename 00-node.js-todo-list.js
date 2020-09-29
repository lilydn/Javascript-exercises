const readlineSync = require("readline-sync");
const data = [
	{
	  id: 0,
		title: "Grocery shopping",
		isDone: false,
	},
	{
		id: 1,
		title: "Walk the dog",
		isDone: false,
	},
	{
		id: 2,
		title: "Feed the cat",
		isDone: false,
	},
	{
		id: 3,
		title: "Call Mom",
		isDone: false,
	},
];

let runningID = data[data.length - 1].id;

const startApp = () => {
	const options = [
			"View All Items",
			"Add Item",
			"Delete Item",
			"Mark Item As Done",
			"Unmark Item As Done",
		],
		index = readlineSync.keyInSelect(options, "Choose option");

	switch (index) {
		case 0:
			viewItems();
			break;
    
    case 1:
			const title = readlineSync.question(
        "Enter the Todo Item: "
      );
			addItem(title);
      break;
      
		case 2:
			const idToDelete = readlineSync.question(
				"Enter the id of the task to delete: "
			);
			invokeItemAction(idToDelete, "delete");
      break;
      
		case 3:
			const idDone = readlineSync.question(
				"Enter the id of the task to mark DONE: "
			);
			invokeItemAction(idDone, "markDone");
      break;
      
		case 4:
			const idUndone = readlineSync.question(
				"Enter the id of the task to mark UNDONE: "
			);
			invokeItemAction(idUndone, "markUndone");
      break;
      
		default:
			break;
	}
};

// add
const addItem = (newTitle) => {
	if (newTitle.length !== 0) {
		const newItem = {
			id: runningID + 1,
			title: newTitle,
			isDone: false,
		};
		data.push(newItem);
		console.log(`-- "${newTitle}" has been added to the list. --`);
		runningID++;
	}
	startApp();
};

// view
const viewItems = () => {
	console.log(data);
	startApp();
};

// action can be: delete, markDone, or markUndone
const invokeItemAction = (id, action) => {
	let index = data.findIndex((item) => item.id === Number(id));
	index === -1
		? console.log("-- Item not found --")
		: action === "delete"
		? deleteItem(index)
		: action === "markDone"
		? markAsDone(index)
		: action === "markUndone"
		? markAsUndone(index)
		: console.log("error");
	startApp();
};

// delete
const deleteItem = (index) => {
	console.log(`-- The item "${data[index].title}" has been deleted from the list. --`);
	data.splice(index, 1);
};

// done
const markAsDone = (index) => {
	if (!data[index].isDone) {
		console.log(`-- The item "${data[index].title}" has been marked as done 😃. --`);
		data[index].isDone = true;
	} else {
		console.log("You\'ve already done this item");
	}
};

// undone
const markAsUndone = (index) => {
		if (data[index].isDone) {
      console.log(`-- The item "${data[index].title}" has been marked as undone 🙁. --`);
      data[index].isDone = false;
    } else {
      console.log("This item is still not done")
    }
};


startApp();
