

class Logic {
	constructor(){
		this.todos = []
		this.todosCounter = 0	
	}

	getTodos = () => this.todos

	addTodo = (text) => {
		
		let todoObject = { 
			text,
			id: "t" + this.todosCounter++,
			completed: this.markComplete(),
			
		}
		this.todos.push(todoObject)
	}

	removeTodo = (todoID) => {
		for(let i in this.todos){
			if(todoID === this.todos[i].id ){
				this.todos.splice(i,1)
			}
		}
	}

	markComplete = (todoID) => {
		
		for(let i in this.todos){
			if(todoID === this.todos[i].id ){
				if(this.todos[i].completed === true){
					this.todos[i].completed = false
					
				}else if (this.todos[i].completed === false){
					this.todos[i].completed = true
				}
			}
		}
		return false;
	}
}


