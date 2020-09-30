const todo = require('./ToDo');

describe('todo', () => {
  beforeEach(todo.restoreInitialData);

  describe('addItem', () => {
    it('should add the task "Wash dishes" to the data array', () => {
      const expected = [
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
        {
          id: 2,
          title: "Wash dishes",
          isDone: false,
        },
      ];
      const result = todo.addItem("Wash dishes");
      expect(result).toEqual(expected);
    });

    it('should not change the data array if the new task title is an empty string', () => {
      const expected = [
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
      const result = todo.addItem("");
      expect(result).toEqual(expected);
    });
  });


  describe('invokeItemAction', () => {
    it('should return an error when trying to change an item with not existing id', () => {
      const expected = -1;
      const result = todo.invokeItemAction(-5 ,"delete");
      expect(result).toEqual(expected);
    });
    it('should return an error when trying to change an item with not existing id', () => {
      const expected = -1;
      const result = todo.invokeItemAction("a" ,"delete");
      expect(result).toEqual(expected);
    });
    it('should return an error when trying to change an item with not existing id', () => {
      const expected = -1;
      const result = todo.invokeItemAction(1.1 ,"markUndone");
      expect(result).toEqual(expected);
    });
    it('should return an error when trying to change an item with not existing id', () => {
      const expected = -1;
      const result = todo.invokeItemAction("" ,"markDone");
      expect(result).toEqual(expected);
    });
  });


  describe('deleteItem', () => {
    it('should delete the first task from the data array', () => {
      const expected = [
          {
            id: 1,
            title: "Walk the dog",
            isDone: true,
          },
        ];
      const result = todo.deleteItem(0);
      expect(result).toEqual(expected);
    });
  });


  describe('markAsDone', () => {
    it('should change isDone:false to isDone:true', () => {
      const expected = true;
      const result = todo.markAsDone(0);
      expect(result).toEqual(expected);
    });
    it('should not change isDone:true', () => {
      const expected = true;
      const result = todo.markAsDone(1);
      expect(result).toEqual(expected);
    });
  });    


  describe('markAsUndone', () => {
    it('should change isDone:true to isDone:false', () => {
      const expected = false;
      const result = todo.markAsUndone(1);
      expect(result).toEqual(expected);
    });
    it('should not change isDone:false', () => {
      const expected = false;
      const result = todo.markAsUndone(0);
      expect(result).toEqual(expected);
    });
  });

});