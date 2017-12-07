//Check off specific todos by clicking

//when a li is clicked in the ul toggle
//wont work using $("li").blah blah
$("ul").on("click", "li", function(){
		//METHOD 1 only uses one line of code to cross out a todo
		$(this).toggleClass("completed");

	/*METHOD 2 USES MORE CODE*************************************

	//if li is gray
	//getting the color from the object won't return the name of the color, but the rgb value,
	//so you have to compare it to an rgb value that matches what you are comparing.
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it black and remove text decoration
		$(this).css({
		color: "black",
		//text-decoration must be textDecoration if want to specify here
		textDecoration: "none"
	});	} else {
		//turn it gray
		$(this).css({
		color: "gray",
		//text-decoration must be textDecoration if want to specify here
		textDecoration: "line-through"
	});
	}
	*/
});

//click on X to delete todo
//use on instead of click method to add functionality to the new objects the user creates
$("ul").on("click", "span", function(event){
	//this is the span
	//parent is the li where the span resides in
	$(this).parent().fadeOut(500, function(){
		//the "this" here is now the parent of span which is the li
		$(this).remove();
	});
	//prevent event bubbling
	event.stopPropagation();
});

//add listener for input

$("input[type='text']").keypress(function(event){
	//check for enter key
	if(event.which === 13) {
		//grab todo text from input
		var todoText = $(this).val();
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
		//clear input text
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});