class Renderer {

	listRender = (data) => {
		$("#todos").empty()
		const source = $("#todos-template").html() 
		const template = Handlebars.compile(source)
		const listHtml = template({todo:data})
		$("#todos").append(listHtml)
	}
}