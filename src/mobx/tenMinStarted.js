import { observable, computed, autorun } from "mobx"

/**
 * TODO 看至 https://cn.mobx.js.org/refguide/api.html
 * 注意，异步函数必须是 generator ，而且在内部只能 yield promises
 * */

class ObservableTodoStore {
  @observable todos = []
  @observable pendingRequest = 0
  constructor() {
    autorun(() => console.log(this.report))
  }
  @computed get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length
  }
  @computed get report() {
    if (this.todos.length === 0) return "<none />"
    return `Next todo: "${this.todos[0].task}". Progress: ${this.completedTodosCount}/${this.todos.length}`
  }
  addTodo(task) {
    this.todos.push({
      task,
      completed: false,
      assignee: null
    })
  }
}

const observableTodoStore = new ObservableTodoStore()

observableTodoStore.addTodo("aaa")
observableTodoStore.addTodo("bb")
observableTodoStore.todos[0].completed = true


