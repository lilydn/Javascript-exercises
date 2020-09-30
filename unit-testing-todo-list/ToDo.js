const readlineSync = require("readline-sync");
let data = [];
let runningID = 0; 

const restoreInitialData = () => {
	data = [
		{
			id: 0,
			title: "Grocery shopping",
			isDone: false,
		},
		{
			id: 1,
			title: "Walk the dog",
			isDone: true,
		},
	];
	runningID = data[data.length - 1].id;
};



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
			startApp();
			break;
    
    case 1:
			const title = readlineSync.question(
        "Enter the Todo Item: "
      );
			addItem(title);
			startApp();
      break;
      
		case 2:
			const idToDelete = readlineSync.question(
				"Enter the id of the task to delete: "
			);
			invokeItemAction(idToDelete, "delete");
			startApp();
      break;
      
		case 3:
			const idDone = readlineSync.question(
				"Enter the id of the task to mark DONE: "
			);
			invokeItemAction(idDone, "markDone");
			startApp();
      break;
      
		case 4:
			const idUndone = readlineSync.question(
				"Enter the id of the task to mark UNDONE: "
			);
			invokeItemAction(idUndone, "markUndone");
			startApp();
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
	return data;
};

// view
const viewItems = () => {
	console.log(data);
};

// action can be: delete, markDone, or markUndone
const invokeItemAction = (id, action) => {
	let index = data.findIndex((item) => item.id === Number(id));
	if (index === -1 || id === "") {
		console.log('Item not found!');
		return -1;
	}
	else {
		if (action === "delete") {
			return deleteItem(index);
		}
		if (action === "markDone") {
			return markAsDone(index);
		}
		if (action === "markUndone") {
			return markAsUndone(index);
		}
	}
};

// delete
const deleteItem = (index) => {
	console.log(`-- The item "${data[index].title}" has been deleted from the list. --`);
	data.splice(index, 1);
	return data;
};

// done
const markAsDone = (index) => {
	if (!data[index].isDone) {
		console.log(`-- The item "${data[index].title}" has been marked as done 😃. --`);
		data[index].isDone = true;
	} else {
		console.log("You\'ve already done this item");
	}
	return data[index].isDone;
};

// undone
const markAsUndone = (index) => {
		if (data[index].isDone) {
      console.log(`-- The item "${data[index].title}" has been marked as undone 🙁. --`);
      data[index].isDone = false;
    } else {
      console.log("This item is still not done")
		}
		return data[index].isDone;
};


// startApp();
restoreInitialData();


module.exports = {
	data,
	restoreInitialData,
	startApp,
	addItem,
	viewItems,
	invokeItemAction,
	deleteItem,
	markAsDone,
	markAsUndone,
};