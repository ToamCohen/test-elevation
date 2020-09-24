const logic = new Logic()
const renderer = new Renderer()
const input = $("#todo-input");
const button = $("#addToDo");
const $container = $("#todos");


button.on("click", function (){
	const inputVal = input.val() 
	logic.addTodo(inputVal)
	renderer.listRender(logic.getTodos)
})


$container.on("click", ".delete", function (){
	const post = $(this).closest(".todo").attr("id")
	logic.removeTodo(post)
	renderer.listRender(logic.getTodos)
})


$container.on("click", ".complete", function (){
	const done = $(this).closest(".todo").attr("id")
	logic.markComplete(done)
	renderer.listRender(logic.getTodos)
	
	
})