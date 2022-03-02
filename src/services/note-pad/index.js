
// todo 使用ts
import { nanoid } from 'nanoid';

class TaskList {
  constructor() {
    this.taskList = [];
  }
  isExistTask(name) {
    return this.taskList.map(task => task.name).includes(name);
  }
  isSelectedAll() {
    return this.taskList.length && !this.taskList.map(task => task.done).includes(false);
  }
  getTaskList() {
    return this.taskList;
  }
  getTaskTotal() {
    return this.taskList.length;
  }
  getDoneTaskTotal() {
    return this.taskList.filter(task => task.done).length;
  }
  addTask(name) {
    if( !this.isExistTask(name) ) {
      const task = {
        id: nanoid(),
        name,
        done: false
      }
      this.taskList.unshift(task);
    }
  }
  deleteTask(id) {
    const idx = this.taskList.map(task => task.id).indexOf(id);
    if (idx > -1) {
      this.taskList.splice(idx, 1);
    }
  }
  selectAllTask(isSelected) {
    this.taskList.forEach(task => task.done = isSelected)
  }
  clearTaskDoneList() {
    this.taskList = this.taskList.filter(task => !task.done);
    return this.taskList;
  }
}

export { TaskList }

